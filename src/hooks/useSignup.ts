import { useMutation } from "@tanstack/react-query";
import axiosClient from "../libs/axios";

export interface SignupProps {
  username: string;
  password: string;
}

const postSignup = async ({ username, password }: SignupProps) => {
  const { data } = await axiosClient.post("/user/signup/", {
    email: username,
    password,
  });

  return data;
};

const useSignup = () =>
  useMutation(
    ["signUp"],
    async (SignupInfo: SignupProps) => postSignup(SignupInfo),
    {
      onError() {
        throw Error("Signup failed");
      },
    }
  );

export default useSignup;
