import { useForm } from "@/core/hooks/useForm";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import HealthCareImage from "../../../core/utils/images/healthcare-personnel.png";

const SignInPage = () => {
  const { error, callbackUrl } = useRouter().query;
  const { values, inputChangeHandler } = useForm();

  const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
    //prevent default submit behavior
    e.preventDefault();
    await signIn("credentials", {
      callbackUrl: String(callbackUrl),
      ...values,
    });
  };

  return (
    <div className="flex items-center h-screen w-full">
      <div className="w-full md:basis-3/5 lg:basis2/5 bg-primary h-full flex flex-col justify-center items-center pt-10">
        <Typography className="text-2xl justify-self-start mb-auto">
          Triage
        </Typography>
        <form className="space-y-5 w-full mb-auto" onSubmit={handleLogin}>
          {error && (
            <div className="w-[80%] mx-auto text-app-red bg-white/60 rounded p-2 transition-all duration-75">
              <span className="mb-1 text-lg">{error }.</span>
              <Typography>
                Check that you&apos;ve entered the correct username and password
              </Typography>
            </div>
          )}
          <input
            type="text"
            onChange={inputChangeHandler}
            name="username"
            placeholder="username"
            className="w-[80%] mx-auto border-0 border-b outline-none p-2 border-b-white bg-transparent text-white placeholder:text-white block"
          />
          <input
            type="password"
            name="password"
            onChange={inputChangeHandler}
            placeholder="password"
            className="w-[80%] mx-auto block border-0 border-b outline-none p-2 border-b-white bg-transparent text-white placeholder:text-white"
          />
          <div className="flex justify-center items-center">
            <Button
              type="submit"
              className="bg-app-green text-white mx-auto px-5 py-2 hover:bg-app-green capitalize"
            >
              Login
            </Button>
          </div>
          0
        </form>
        <Image
          src={HealthCareImage}
          className="object-cover md:hidden"
          alt="Healthcare Personnel"
        />
      </div>
      <div className="w-full h-full hidden md:flex flex-col justify-end items-center">
        <Image
          src={HealthCareImage}
          className="object-cover"
          alt="Healthcare Personnel"
        />
      </div>
    </div>
  );
};

export default SignInPage;
