import { useMutation } from "@tanstack/react-query";
import axiosClient from "../libs/axios";
// import axios from "axios";

interface LoginResponse {
  token: string;
}

export interface LoginProps {
  username: string;
  password: string;
}

const postLogin = async ({ username, password }: LoginProps) => {
  const { data } = await axiosClient.post<LoginResponse>("/user/login/", {
    email: username,
    password,
  });

  const token = data.token;
  localStorage.setItem("token", token);
  return data;
};

const useLogin = () =>
  useMutation(
    ["login"],
    async (loginInfo: LoginProps) => postLogin(loginInfo),
    {
      onError() {
        throw Error("login failed");
      },
    }
  );

export default useLogin;
