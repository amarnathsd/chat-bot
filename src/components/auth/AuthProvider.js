"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase"; 

const withAuth = (Component) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push("/login"); 
        }
      });

      return () => unsubscribe(); 
    }, [router]);

    return <Component {...props} />;
  };
};

export default withAuth;