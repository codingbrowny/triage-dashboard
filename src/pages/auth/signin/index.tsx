import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import HealthCareImage from "../../../core/utils/images/healthcare-personnel.png"

const SignInPage = () => {
  return (
    <div className="flex items-center h-screen w-full">
      <div className="w-full md:basis-3/5 lg:basis2/5 bg-primary h-full flex flex-col justify-center items-center pt-10">
        <Typography className="text-2xl justify-self-start mb-auto">Triage</Typography>
        <form action="" className="space-y-5 w-full mb-auto">
            <input type="text" placeholder="username" className="w-[80%] mx-auto border-0 border-b outline-none p-2 border-b-white bg-transparent text-white placeholder:text-white block" />
            <input type="password" placeholder="password" className="w-[80%] mx-auto block border-0 border-b outline-none p-2 border-b-white bg-transparent text-white placeholder:text-white" />
            <div className="flex justify-center items-center">
            <Button className="bg-app-green text-white mx-auto px-5 py-2 hover:bg-app-green capitalize">Login</Button>
            </div>
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
