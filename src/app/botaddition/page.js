"use client";
import React, { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import BotAddition from "@/pages/BotAddition"; // Make sure the correct path to Integration page is used

const Page = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? <BotAddition /> : <p>Please log in to access this page.</p>}
    </div>
  );
};

export default Page;
