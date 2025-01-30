"use client";
import React, { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import OrganisationSetup from "@/pages/SetupPage";

const OrganisationSetupPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? <OrganisationSetup /> : <p>Please log in to access this page.</p>}
    </div>
  );
};

export default OrganisationSetupPage;
