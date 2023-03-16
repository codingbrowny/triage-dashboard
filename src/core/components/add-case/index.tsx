import React from "react";
import { DialogInterface } from "@/types/interfaces";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { AppDialog } from "..";
import { CaseHistory } from "@/core/utils/data";
import Button from "@mui/material/Button";
import { useForm } from "@/core/hooks/useForm";

const AddCaseModal = ({ open, handleClose }: DialogInterface) => {
    const {values, handleSubmit, inputChangeHandler} = useForm()
  return (
    <AppDialog open={open} handleClose={handleClose} title="Add Case">
      <form action="" className="my-5 space-y-4">
        <div className="md:flex md:justify-start items-center text-gray-600 gap-4">
          <label htmlFor="name" className="font-semibold md:basis-1/4">
            Doctor&apos;s Name:
          </label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            onChange={inputChangeHandler}
            className="border rounded-md border-gray-600 px-2 py-1 outline-none block"
          />
        </div>
        {/* History Section */}
        <div className="md:flex md:justify-start items-center text-gray-600 gap-4">
          <label htmlFor="history" className="font-semibold md:w-1/3">
            History:
          </label>
          <span className="border border-gray-600 p-3 gap-2 flex rounded-md flex-wrap w-full">
            {CaseHistory.map((item, index)=>(
                <div key={index} className="flex gap-1 items-center md:basis-1/3 box-border">
                <input
                  type="checkbox"
                  name={item.for}
                  id={item.for}
                  onChange={inputChangeHandler}
                  className="h-4 w-4 rounded-full accent-primary"
                />
                <label htmlFor="hypertension">{item.name}</label>
              </div>
            ))}
            
          </span>
        </div>
        {/* File Upload Button */}
        <div className="md:flex md:justify-start items-center text-gray-600 gap-4">
          <label htmlFor="images" className="font-semibold md:basis-1/4">
            Images:
          </label>
          <label
            htmlFor="case_images"
            className="border p-2 px-4 border-gray-600 rounded-md"
            role={"button"}
          >
            Add Images{" "}
            <span className="text-primary">
              <CameraAltOutlinedIcon className="w-7 h-7" />
            </span>
          <input
            type="file"
            name="images"
            id="case_images"
            className="hidden"
            multiple={true}
            accept="image/*"
            onChange={inputChangeHandler}
          />
          </label>
        </div>
        {/* Description */}
        <div className="w-full md:flex md:justify-start md:items-center gap-4">
          <label htmlFor="descripiton" className="text-gray-600 font-semibold md:basis-1/4">
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            cols={45}
            rows={4}
            className="rounded-md border border-gray-600 outline-none p-2"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="btns flex justify-between items-center w-full md:w-5/6 mx-auto mt-4">
          <Button
            variant="outlined"
            className="capitalize px-8 border border-green-500 hover:border-green-600 text-green-500 hover:text-green-600"
          >
            Add
          </Button>
          <Button
            variant="outlined"
            className="capitalize px-8 border hover:border-gray-700 border-gray-700 text-gray-700"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
      </form>
    </AppDialog>
  );
};

export default AddCaseModal;
