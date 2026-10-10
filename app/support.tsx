import { router, useLocalSearchParams } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

/* ------------------------------------------------ */

export default function Support() {
  const { mood } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <Text style={styles.title}>You're safe right now</Text>
      <Text style={styles.sub}>
        A gentle space to slow down
      </Text>

      {/* BREATHING CIRCLE */}
      <View style={styles.circle} />

      {/* START */}
      <TouchableOpacity style={styles.primaryBtn}>
        <Text style={styles.primaryText}>Start breathing</Text>
      </TouchableOpacity>

      {/* GROUNDING */}
      <Text style={styles.section}>What are you experiencing?</Text>

      <View style={styles.row}>
        <Chip label="Racing thoughts" />
        <Chip label="Tight chest" />
        <Chip label="Overthinking" />
        <Chip label="Fear" />
      </View>

      <Text style={styles.validation}>
        It makes sense to feel this way.
      </Text>

      {/* BODY */}
      <Text style={styles.section}>Let's relax your body</Text>

      <Text style={styles.check}>☐ Drop shoulders</Text>
      <Text style={styles.check}>☐ Unclench jaw</Text>
      <Text style={styles.check}>☐ Feet on ground</Text>

      {/* EXIT */}
      <TouchableOpacity
        style={styles.exitBtn}
        onPress={() => router.push("/(tabs)/calm")}
      >
        <Text style={styles.exitText}>Go to Calm</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

/* ------------------------------------------------ */

function Chip({ label }: any) {
  return (
    <TouchableOpacity
      style={styles.chip}
      onPress={() => {}}
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}


/* ------------------------------------------------ */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f8f2",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "600",
    marginTop: 40,
    textAlign: "center",
  },

  sub: {
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },

  circle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#a5d6a7",
    alignSelf: "center",
    marginVertical: 20,
  },

  primaryBtn: {
    backgroundColor: "#2e7d32",
    padding: 14,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 30,
  },

  primaryText: {
    color: "white",
    fontWeight: "600",
  },

  section: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },

  chip: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 18,
    marginRight: 10,
    marginBottom: 10,
  },

  validation: {
    color: "#666",
    marginBottom: 20,
  },

  check: {
    fontSize: 15,
    marginBottom: 6,
  },

  exitBtn: {
    marginTop: 40,
    backgroundColor: "#2e7d32",
    padding: 14,
    borderRadius: 25,
    alignItems: "center",
  },

  exitText: {
    color: "white",
    fontWeight: "600",
  },
});
