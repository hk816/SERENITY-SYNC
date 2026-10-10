import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RESPONSES = {
  tired: "That makes sense. You don’t have to push today.",
  empty: "I’m here with you. You don’t have to fill the silence.",
  lonely: "You deserve connection, even quietly.",
  stuck: "Small steps still count.",
};

export default function Low() {
  const [message, setMessage] = useState(
    "I’m really glad you came here."
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Feeling low</Text>

      <View style={styles.messageBox}>
        <Text style={styles.messageText}>{message}</Text>
      </View>

      <View style={styles.options}>

        <Option
          label="I feel tired"
          onPress={() => setMessage(RESPONSES.tired)}
        />

        <Option
          label="I feel empty"
          onPress={() => setMessage(RESPONSES.empty)}
        />

        <Option
          label="I feel lonely"
          onPress={() => setMessage(RESPONSES.lonely)}
        />

        <Option
          label="I feel stuck"
          onPress={() => setMessage(RESPONSES.stuck)}
        />

      </View>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.push("/(tabs)/calm")}
      >
        <Text style={styles.primaryText}>
          Go somewhere calm
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => router.push("/panic")}
      >
        <Text style={styles.secondaryText}>
          I need immediate help
        </Text>
      </TouchableOpacity>

    </View>
  );
}

/* Small Component */
function Option({ label, onPress }: any) {
  return (
    <TouchableOpacity style={styles.optionBtn} onPress={onPress}>
      <Text style={styles.optionText}>{label}</Text>
    </TouchableOpacity>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ede7f6", // soft purple
    paddingTop: 70,
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#4a3f72",
    marginBottom: 20,
  },

  messageBox: {
    backgroundColor: "#ffffff",
    padding: 22,
    borderRadius: 22,
    marginBottom: 30,
  },

  messageText: {
    fontSize: 16,
    color: "#333",
  },

  options: {
    marginBottom: 30,
  },

  optionBtn: {
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 18,
    marginBottom: 12,
  },

  optionText: {
    fontSize: 15,
    color: "#555",
  },

  primaryButton: {
    backgroundColor: "#7e57c2",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 14,
  },

  primaryText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  secondaryButton: {
    alignItems: "center",
  },

  secondaryText: {
    color: "#7e57c2",
  },
});

