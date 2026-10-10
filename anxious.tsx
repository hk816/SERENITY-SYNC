import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function AnxiousScreen() {
  const router = useRouter();

  useEffect(() => {
    // Immediately navigate to support page when this tab is clicked
    router.push("/support");
  }, [router]);

  return null; // This screen will immediately redirect
}
