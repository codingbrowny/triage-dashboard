import React from "react";
import { DialogInterface } from "@/types/interfaces";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { AppDialog, LoadingButton, MySnackbar } from "..";
import { CaseHistory } from "@/core/utils/data";
import Button from "@mui/material/Button";
import { useMutation } from "@apollo/client";
import { CreateNewCase } from "@/core/graphql/mutations";
import { AllCases } from "@/core/graphql/queries/cases";
import { useForm } from "@/core/hooks";
import { Alert } from "@mui/material";
import { useCaseImageUpload } from "@/core/hooks/useCaseImages";

const AddCaseModal = ({ open, handleClose }: DialogInterface) => {
  const [showToast, setShowToast] = React.useState(false);
  const [showLoading, setShowLoading] = React.useState(false);
  const { convertToBase64, uploadImages, base64List, resetList } = useCaseImageUpload();
  const { values, inputChangeHandler, handleHistoryChange, resetForm } =
    useForm();

  const [createCase, { loading, error, data }] = useMutation(CreateNewCase, {
    variables: { input: values },
    refetchQueries: [{ query: AllCases }],
    onCompleted: handleFinishedMutation,
  });

  // fired after successful mutation
  function handleFinishedMutation(data: any) {
    if (data && !error) {
      setShowToast(true);
    }
    resetForm();
    setShowLoading(false);
  }

  const successfulUpload = (res: string[] | undefined) => {
    resetList()
    createCase({ variables: { input: { ...values, images: res } } });
  };
  const uploadError = (error: any) => {
    throw new Error("Could not upload files");
  };
  const executeMutation = () => {
    setShowLoading(true);
    uploadImages().then(successfulUpload, uploadError);
  };

  return (
    <React.Fragment>
      <MySnackbar open={showToast} onClose={() => setShowToast(false)}>
        <Alert severity="success" className="text-lg">
          Case created successfully
        </Alert>
      </MySnackbar>
      <AppDialog open={open} handleClose={handleClose} title="Add Case">
        <form method="Post" className="my-5 space-y-4">
          <div className="md:flex md:justify-start items-center text-gray-600 gap-4">
            <label htmlFor="name" className="font-semibold md:basis-1/4">
              Doctor&apos;s Name:
            </label>
            <input
              type="text"
              name="postedBy"
              autoComplete="off"
              onChange={inputChangeHandler}
              className="border rounded-md border-gray-600 px-2 py-1 outline-none block"
            />
          </div>
          <div className="md:flex md:justify-start items-center text-gray-600 gap-4">
            <label htmlFor="age" className="font-semibold md:basis-1/4">
              Age:
            </label>
            <input
              type="number"
              min={1}
              name="age"
              autoComplete="off"
              onChange={inputChangeHandler}
              className="border rounded-md border-gray-600 px-2 py-1 outline-none block"
            />
          </div>
          <div className="md:flex md:justify-start items-center text-gray-600 gap-4">
            <label htmlFor="sex" className="font-semibold md:basis-1/4">
              Sex:
            </label>
            <select
              className="border rounded-md border-gray-600 py-1 px-2 outline-none flex"
              name="sex"
              onChange={inputChangeHandler}
              required
            >
              <option className="italic">select</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          {/* History Section */}
          <div className="md:flex md:justify-start items-center text-gray-600 gap-4">
            <label htmlFor="history" className="font-semibold md:w-1/3">
              History:
            </label>
            <span className="border border-gray-600 p-3 gap-2 flex rounded-md flex-wrap w-full">
              {CaseHistory.map((item: any, index) => (
                <div
                  key={index}
                  className="flex gap-1 items-center md:basis-1/3 box-border"
                >
                  <input
                    type="checkbox"
                    aria-label="history"
                    id={item.for}
                    value={item.name}
                    onChange={handleHistoryChange}
                    className="case-history h-4 w-4 rounded-full accent-primary"
                  />
                  <label htmlFor={item.for}>{item.name}</label>
                </div>
              ))}
            </span>
          </div>
          {/* Images Selection */}
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
              {base64List.length && <span>{base64List.length}</span>}
              <input
                type="file"
                name="images"
                id="case_images"
                className="hidden"
                multiple={true}
                accept="image/*"
                //@ts-ignore
                onChange={convertToBase64}
              />
            </label>
          </div>
          {/* Description */}
          <div className="w-full md:flex md:justify-start md:items-center gap-4">
            <label
              htmlFor="descripiton"
              className="text-gray-600 font-semibold md:basis-1/4"
            >
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
            <LoadingButton
              variant="outlined"
              loading={loading || showLoading}
              title="Add"
              onClick={() => executeMutation()}
              className="capitalize px-8 border border-green-500 hover:border-green-600 text-green-500 hover:text-green-600"
            />
            <Button
              variant="outlined"
              className="capitalize px-8 border hover:border-gray-700 border-gray-700 text-gray-700"
              onClick={() => {
                resetForm();
                handleClose();
              }}
            >
              Close
            </Button>
          </div>
        </form>
      </AppDialog>
    </React.Fragment>
  );
};

export default AddCaseModal;
