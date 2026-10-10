import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";

export default function Panic() {
  const [phase, setPhase] = useState(1);
  const scale = useRef(new Animated.Value(1)).current;
  const fade = useRef(new Animated.Value(0)).current;

  const prompts = [
    "Name 3 things you can see.",
    "Notice 2 sounds around you.",
    "Touch something near you.",
    "Feel your feet on the ground.",
  ];

  const reassurance = [
    "This feeling will pass.",
    "You are not in danger.",
    "Your body is protecting you.",
    "You are safe right now.",
  ];

  const [promptIndex, setPromptIndex] = useState(0);
  const [reassureIndex, setReassureIndex] = useState(0);

  /* ---------------- PHASE 1 ---------------- */

  useEffect(() => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    setTimeout(() => setPhase(2), 5000);
  }, []);

  /* ---------------- PHASE 2 BREATHING ---------------- */

  useEffect(() => {
    if (phase === 2) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scale, {
            toValue: 1.4,
            duration: 4500,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 1,
            duration: 4500,
            useNativeDriver: true,
          }),
        ])
      ).start();

      setTimeout(() => setPhase(3), 30000);
    }
  }, [phase]);

  /* ---------------- PROMPT SLIDE ---------------- */

  useEffect(() => {
    if (phase === 3 || phase === 4) {
      Animated.timing(fade, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }
  }, [phase]);

  /* ---------------- ROTATING TEXT ---------------- */

  useEffect(() => {
    const interval = setInterval(() => {
      setReassureIndex((p) => (p + 1) % reassurance.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  /* ---------------- UI ---------------- */

  return (
    <TouchableWithoutFeedback
      onPress={() => phase >= 2 && setPhase(3)}
    >
      <View style={styles.container}>

        {/* PHASE 1 */}
        {phase === 1 && (
          <Text style={styles.safeText}>You're safe right now.</Text>
        )}

        {/* PHASE 2+ */}
        {phase >= 2 && (
          <>
            <Animated.View
              style={[
                styles.circle,
                { transform: [{ scale }] },
              ]}
            />

            <Text style={styles.breatheText}>Breathe with me.</Text>
          </>
        )}

        {/* PHASE 3 PROMPT */}
        {phase === 3 && (
          <Animated.View style={[styles.card, { opacity: fade }]}>
            <Text style={styles.prompt}>
              {prompts[promptIndex]}
            </Text>

            <TouchableOpacity
              style={styles.doneBtn}
              onPress={() => setPhase(4)}
            >
              <Text>Done</Text>
            </TouchableOpacity>
          </Animated.View>
        )}

        {/* PHASE 4 BODY */}
        {phase === 4 && (
          <Animated.View style={[styles.card, { opacity: fade }]}>
            {["Drop shoulders", "Unclench jaw", "Feet on ground"].map(
              (item) => (
                <TouchableOpacity
                  key={item}
                  onPress={() =>
                    Haptics.selectionAsync()
                  }
                >
                  <Text style={styles.check}>☐ {item}</Text>
                </TouchableOpacity>
              )
            )}
          </Animated.View>
        )}

        {/* PHASE 5 REASSURANCE */}
        {phase >= 2 && (
          <Text style={styles.reassure}>
            {reassurance[reassureIndex]}
          </Text>
        )}

        {/* PHASE 6 SUPPORT */}
        <View style={styles.supportBar}>
          <Text>You’re not alone.</Text>
        </View>

        {/* PHASE 7 EXIT */}
        {phase >= 4 && (
          <View style={styles.exitRow}>
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/calm")}
            >
              <Text style={styles.exitBtn}>
                I feel a little better
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setPhase(2)}
            >
              <Text style={styles.exitBtn}>Stay here</Text>
            </TouchableOpacity>
          </View>
        )}

        <Text style={styles.footer}>
          You showed courage by coming here.
        </Text>

      </View>
    </TouchableWithoutFeedback>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1a14",
    alignItems: "center",
    justifyContent: "center",
  },

  safeText: {
    fontSize: 26,
    color: "#fff",
  },

  circle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#8bc34a",
    marginBottom: 20,
  },

  breatheText: {
    color: "#fff",
    fontSize: 18,
  },

  card: {
    position: "absolute",
    bottom: 220,
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 18,
    width: "80%",
  },

  prompt: {
    fontSize: 16,
    marginBottom: 10,
  },

  doneBtn: {
    alignSelf: "flex-end",
  },

  check: {
    fontSize: 15,
    marginBottom: 8,
  },

  reassure: {
    position: "absolute",
    bottom: 150,
    color: "#ccc",
  },

  supportBar: {
    position: "absolute",
    bottom: 100,
    backgroundColor: "#1f2d25",
    padding: 12,
    borderRadius: 14,
  },

  exitRow: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    gap: 30,
  },

  exitBtn: {
    color: "#8bc34a",
    fontSize: 15,
  },

  footer: {
    position: "absolute",
    bottom: 10,
    color: "#777",
    fontSize: 12,
  },
});
