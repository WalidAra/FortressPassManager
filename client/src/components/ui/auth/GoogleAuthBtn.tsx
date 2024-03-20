"use client";
import { Button } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase/firebase";

export default function GoogleAuthBtn() {
  const googleAuth = new GoogleAuthProvider();

  googleAuth.setCustomParameters({
    prompt: "select_account",
    login_hint: "user@example.com",
  });
  const handleOAuth = async () => {
    const firebaseResult: any = await signInWithPopup(auth, googleAuth);
  };

  return (
    <Button onClick={handleOAuth} leftIcon={<FcGoogle />}>
      Continue with google
    </Button>
  );
}
