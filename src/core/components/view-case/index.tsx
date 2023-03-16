import { CaseHistory } from "@/core/utils/data";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AppDialog from "../dialog";


const ViewCaseModal = ({ open, handleClose, data }: {open:boolean, handleClose:any, data:any}) => {
  return (
    <AppDialog open={open} handleClose={handleClose} title={`Case ${data?.id}`}>
      <div className="my-5 space-y-5 px-4">
        <div className="history space-y-1">
        <Typography className="text-gray-600 text-xl font-semibold">
          History
        </Typography>
        <div className="flex items-center gap-2 flex-wrap">
        {CaseHistory.map((item, index) => (
          <span key={index} className="text-green-600">
            {item.name},
          </span>
        ))}
        </div>
        </div>
        <div className="case-images space-y-1">
        <Typography className="text-gray-600 text-xl font-semibold">
          Images
        </Typography>
        <div className="flex items-center gap-3">
            <Link href="">
            <Image src={"https://images.unsplash.com/photo-1550792436-181701c71f63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} height={150} width={120} alt={""} className="object-cover rounded-md" />
            </Link>
        </div>
        </div>
        <div className="case-descriptions space-y-1">
        <Typography className="text-gray-600 text-xl font-semibold">
          Description
        </Typography>
        <Typography>{data?.description}</Typography>
        </div>
        <div className="case-comments space-y-1">
        <Typography className="text-gray-600 text-xl font-semibold">
          Comments
        </Typography>
        <Typography>{data?.comments || "No Comments"}</Typography>
        </div>
        <div className="flex justify-between item-center w-full md:w-5/6 md:mx-auto mt-5">
          <Button
            variant="outlined"
            className="border hover:border-app-red border-app-red text-app-red px-3 capitalize"
            onClick={()=>{}}
          >
            Delete Case
          </Button>
          <Button
            variant="outlined"
            className="border hover:border-gray-700 border-gray-700 text-gray-700 px-5 capitalize"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </AppDialog>
  );
};

export default ViewCaseModal;
