import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const [name, setName] = useState("Hansika");
  const [bio, setBio] = useState("Finding calm in small moments 🌿");
  const [isEditing, setIsEditing] = useState(false);

  const streak = 1; // later we can make this auto-calculate

  return (
    <LinearGradient
      colors={["#e8f5e9", "#f1f8e9"]}
      style={styles.container}
    >
     
        

      {/* Streak */}
      <View style={styles.streakBox}>
        <Text style={styles.streakText}>🔥 {streak}-day streak</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>
        {isEditing ? (
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        ) : (
          <Text style={styles.value}>{name}</Text>
        )}

        <Text style={styles.label}>Bio</Text>
        {isEditing ? (
          <TextInput
            value={bio}
            onChangeText={setBio}
            style={[styles.input, styles.bioInput]}
            multiline
          />
        ) : (
          <Text style={styles.value}>{bio}</Text>
        )}
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => setIsEditing(!isEditing)}
        >
          <Text style={styles.editText}>
            {isEditing ? "Save Profile" : "Edit Profile"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => router.replace("/login")}
        >
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
  },

  avatarWrapper: {
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#dcedc8",
  },

  streakBox: {
    alignItems: "center",
    marginBottom: 18,
  },
  streakText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2e7d32",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },

  label: {
    fontSize: 13,
    color: "#6d6d6d",
    marginTop: 12,
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: "#2e2e2e",
    paddingVertical: 8,
  },
  input: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
  },
  bioInput: {
    minHeight: 60,
    textAlignVertical: "top",
  },

  buttonRow: {
    marginTop: 30,
    alignItems: "center",
  },

  editButton: {
    backgroundColor: "#2e7d32",
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom: 14,
  },
  editText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  logoutButton: {
    backgroundColor: "#c62828",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  logoutText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});


