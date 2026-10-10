import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Calm() {
  /* ---------------- Breathing Animation ---------------- */
  const scale = useRef(new Animated.Value(1)).current;
  const [phase, setPhase] = useState("Inhale");

  useEffect(() => {
    const loop = () => {
      setPhase("Inhale");
      Animated.timing(scale, {
        toValue: 1.4,
        duration: 4000,
        useNativeDriver: true,
      }).start(() => {
        setPhase("Hold");
        setTimeout(() => {
          setPhase("Exhale");
          Animated.timing(scale, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
          }).start(loop);
        }, 1500);
      });
    };
    loop();
  }, []);

  /* ---------------- Community Activities ---------------- */
  const [activities, setActivities] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("");

  const addActivity = () => {
    if (!title || !place || !time || !type) return;
    setActivities([
      ...activities,
      { title, place, time, type },
    ]);
    setTitle("");
    setPlace("");
    setTime("");
    setType("");
  };

  /* ---------------- External Links ---------------- */
  const openSpotify = () => {
    Linking.openURL(
      "https://open.spotify.com/playlist/37i9dQZF1DWU0ScTcjJBdj"
    );
  };

  const openMaps = () => {
    Linking.openURL(
      "https://www.google.com/maps/search/parks+near+me"
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* ---------------- Breathing ---------------- */}
      <Text style={styles.heading}>Breathe</Text>

      <Animated.View
        style={[
          styles.circle,
          { transform: [{ scale }] },
        ]}
      />
      <Text style={styles.phase}>{phase}</Text>

      {/* ---------------- Actions ---------------- */}
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.actionCard} onPress={openSpotify}>
          <Text style={styles.actionEmoji}>🎧</Text>
          <Text style={styles.actionText}>Nature Sounds</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard} onPress={openMaps}>
          <Text style={styles.actionEmoji}>🌳</Text>
          <Text style={styles.actionText}>Find Nature</Text>
        </TouchableOpacity>
      </View>

      {/* ---------------- Community ---------------- */}
      <Text style={styles.heading}>Community Activities</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Activity (e.g. Morning Walk)"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          placeholder="Place"
          style={styles.input}
          value={place}
          onChangeText={setPlace}
        />
        <TextInput
          placeholder="Time"
          style={styles.input}
          value={time}
          onChangeText={setTime}
        />
        <TextInput
          placeholder="Type (Yoga / Walk / Cleanup)"
          style={styles.input}
          value={type}
          onChangeText={setType}
        />

        <TouchableOpacity style={styles.addBtn} onPress={addActivity}>
          <Text style={styles.addText}>Add Activity</Text>
        </TouchableOpacity>
      </View>

      {activities.map((a, i) => (
        <View key={i} style={styles.activityCard}>
          <Text style={styles.activityTitle}>{a.title}</Text>
          <Text style={styles.activityMeta}>
            📍 {a.place} • 🕒 {a.time}
          </Text>
          <Text style={styles.activityType}>{a.type}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

/* ---------------- Styles ---------------- */
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f4f8f2",
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
    marginVertical: 14,
    color: "#2f4f4f",
  },
  circle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#9fcbb3",
    alignSelf: "center",
    marginVertical: 20,
  },
  phase: {
    textAlign: "center",
    fontSize: 18,
    color: "#4a6b5f",
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  actionCard: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 16,
    alignItems: "center",
    elevation: 2,
  },
  actionEmoji: {
    fontSize: 28,
    marginBottom: 6,
  },
  actionText: {
    fontSize: 14,
    color: "#355f4e",
  },
  form: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 14,
  },
  input: {
    backgroundColor: "#eef5f1",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  addBtn: {
    backgroundColor: "#5b8c7a",
    padding: 14,
    borderRadius: 14,
    marginTop: 8,
  },
  addText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
  activityCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 14,
    marginTop: 12,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  activityMeta: {
    fontSize: 13,
    opacity: 0.7,
    marginVertical: 4,
  },
  activityType: {
    fontSize: 13,
    color: "#4a6b5f",
  },
});


