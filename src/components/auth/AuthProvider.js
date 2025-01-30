"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase"; // Adjust the path to your Firebase config

const withAuth = (Component) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push("/login"); // Redirect to login page if not authenticated
        }
      });

      return () => unsubscribe(); // Cleanup subscription
    }, [router]);

    return <Component {...props} />;
  };
};

export default withAuth;