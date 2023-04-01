import { useForm } from "@/core/hooks/useForm";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import HealthCareImage from "../../../core/utils/images/healthcare-personnel.png";

const SignUp = () => {
  const { values, inputChangeHandler } = useForm();

  return (
    <div className="flex items-center h-screen w-full">
      <div className="w-full md:basis-3/5 lg:basis2/5 bg-primary h-full flex flex-col justify-center items-center pt-10">
        <Image
          src={"/triage-logo.png"}
          alt="Triage Logo"
          width={120}
          height={50}
        />
        <form className="space-y-7 w-[95%] sm:w-[90%] md:w-4/5 mx-auto mb-auto bg-white/20 rounded-xl py-10 shadow-xl">
          <input
            type="text"
            onChange={inputChangeHandler}
            name="name"
            placeholder="Name"
            className="w-[80%] mx-auto border-0 border-b outline-none p-2 border-b-white bg-transparent text-white placeholder:text-white block"
          />
          <input
            type="text"
            onChange={inputChangeHandler}
            name="username"
            placeholder="Username"
            className="w-[80%] mx-auto border-0 border-b outline-none p-2 border-b-white bg-transparent text-white placeholder:text-white block"
          />
          <input
            type="password"
            name="password"
            onChange={inputChangeHandler}
            placeholder="Password"
            className="w-[80%] mx-auto block border-0 border-b outline-none p-2 border-b-white bg-transparent text-white placeholder:text-white"
          />
          <input
            type="password"
            name="cpassword"
            onChange={inputChangeHandler}
            placeholder="Confirm password"
            className="w-[80%] mx-auto block border-0 border-b outline-none p-2 border-b-white bg-transparent text-white placeholder:text-white"
          />
          <div className="flex justify-center items-center">
            <Button
              type="submit"
              className="bg-app-yellow text-white mx-auto px-10 py-2 hover:bg-app-yellow/80 capitalize"
            >
              Signup
            </Button>
          </div>
          <div className="w-4/5 mx-auto flex items-center gap-2 text-white">
            <span>Have an account?</span>
            <Link href={"/auth/login"} className="text-slate-700 underline">
              Login here
            </Link>
          </div>
        </form>
        <Image
          src={"/images/healthcare-personnel.png"}
          className="object-cover md:hidden"
          alt="Healthcare Personnel"
        />
      </div>
      <div className="w-full h-full hidden md:flex flex-col justify-end items-center">
        <Image
          src={"/images/healthcare-personnel.png"}
          className="object-cover"
          alt="Healthcare Personnel"
        />
      </div>
    </div>
  );
};

export default SignUp;
