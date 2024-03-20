"use client";
import AuthBoard from "@/components/ui/auth/AuthBoard";
import AuthContainer from "@/components/ui/auth/AuthContainer";
import AuthHead from "@/components/ui/auth/AuthHead";
import FooterAuth from "@/components/ui/auth/FooterAuth";
import GoogleAuthBtn from "@/components/ui/auth/GoogleAuthBtn";
import RememberMe from "@/components/ui/auth/RememberMe";
import COLORS from "@/constants/COLORS";
import { setProfile } from "@/features/slices/auth.slice";
import api from "@/lib/api";
import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  Flex,
  Input,
} from "@chakra-ui/react";
// import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import jsCookie from "js-cookie";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const usernameRef = useRef<any>();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleRegister = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const username = usernameRef.current?.value;

    const response = api.public.register({ email, password, username });
    response.then((res) => {
      if (res.status) {
        dispatch(setProfile({ isUser: res.status, user: res.data }));
        if (isChecked) {
          jsCookie.set("fortress-token", res.accessToken, {
            expires: 2,
            path: "/",
          });
        }
        router.push("/");
      } else {
        // error handling response
        console.log("====================================");
        console.log("error: " + res.status);
        console.log("====================================");
      }
    });
  };

  return (
    <AuthBoard>
      <AuthContainer>
        <AuthHead
          title="Welcome back!"
          text={"Welcome back! Please enter your details"}
        />

        <Box className="flex flex-col gap-3">
          <div className="flex flex-col w-full gap-1">
            <label className="font-medium text-sm text-hLight" htmlFor="email">
              Username
            </label>
            <Input
              ref={usernameRef}
              variant="filled"
              placeholder="Enter your username"
              size="md"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="font-medium text-sm text-hLight" htmlFor="email">
              Email
            </label>
            <Input
              ref={emailRef}
              variant="filled"
              placeholder="Enter your email"
              size="md"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="font-medium text-sm text-hLight" htmlFor="email">
              Password
            </label>
            <Input
              ref={passwordRef}
              variant="filled"
              placeholder="Enter your password"
              size="md"
            />
          </div>
        </Box>

        <Flex className="w-full flex  items-center">
          <RememberMe isChecked={isChecked} setIsChecked={setIsChecked} />
        </Flex>

        <div className="w-full flex flex-col gap-6">
          <Button
            onClick={handleRegister}
            className=""
            colorScheme="messenger"
            bg={COLORS["primary"]}
          >
            login
          </Button>

          <Box position="relative">
            <Divider colorScheme="gray" />
            <AbsoluteCenter bg="white" px="4" className=" text-gray-400">
              or
            </AbsoluteCenter>
          </Box>

          <GoogleAuthBtn />
        </div>

        <FooterAuth login={false} />
      </AuthContainer>
    </AuthBoard>
  );
};

export default Register;
