import { DeleteCase } from "@/core/graphql/mutations";
import { AllCases } from "@/core/graphql/queries/cases";
import { useMutation } from "@apollo/client";
import { Alert } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import { LoadingButton, MySnackbar } from "..";
import AppDialog from "../dialog";

const ViewCaseModal = ({
  open,
  handleClose,
  caseDetails,
}: {
  open: boolean;
  handleClose: any;
  caseDetails: any;
  }) => {
  // Delete case mutation
  const [deleteCaseMutate, { loading, data, error }] = useMutation(DeleteCase, {
    variables: { id: caseDetails?.id },
    refetchQueries: [{ query: AllCases }],
    onCompleted: ()=> setShowToast(true)
  });

  const [showToast, setShowToast] = React.useState(false)
  
  return (
    <React.Fragment>
      {/* Action taost */}
      <MySnackbar open={showToast} onClose={() => setShowToast(false)}>
        <Alert severity="success" className="text-lg">
          Case successfully deleted
        </Alert>
      </MySnackbar>
      {error && (
        <MySnackbar open={showToast} onClose={() => setShowToast(false)}>
          <Alert severity="error" className="text-lg">
            Could not delete case
          </Alert>
        </MySnackbar>
      )}
      {/* Case details dialog */}
      <AppDialog
        open={open}
        handleClose={handleClose}
        title={`Case ${caseDetails?.id}`}
      >
        <div className="my-5 space-y-5 px-4">
          <div className="history space-y-1">
            <Typography className="text-gray-600 text-xl font-semibold">
              History
            </Typography>
            <div className="flex items-center gap-2 flex-wrap">
              {caseDetails?.history.map(
                (item: string, index: React.Key | null | undefined) => (
                  <span key={index} className="text-green-600">
                    {item},
                  </span>
                )
              )}
            </div>
          </div>
          <div className="case-images space-y-1">
            <Typography className="text-gray-600 text-xl font-semibold">
              Images
            </Typography>
            <div className="relative flex items-center gap-3 w-full overflow-auto">
              {!caseDetails?.images || caseDetails?.iages?.length === 0 ? (
                <span className="text-app-yellow ">No images</span>
              ) : (
                caseDetails?.images.map((img: string) => (
                  <div key={img} className="relative w-[120px] h-[150px]">
                    <Image
                      src={img}
                      height={150}
                      width={120}
                      alt={""}
                      className="object-cover rounded-md hover:shadow-lg min-h-full"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="case-descriptions space-y-1">
            <Typography className="text-gray-600 text-xl font-semibold">
              Description
            </Typography>
            <Typography>{caseDetails?.description}</Typography>
          </div>
          <div className="case-comments space-y-1">
            <Typography className="text-gray-600 text-xl font-semibold">
              Comments
            </Typography>
            <Typography>{caseDetails?.comments || "No Comments"}</Typography>
          </div>
          <div className="flex justify-between item-center w-full md:w-5/6 md:mx-auto mt-5">
            <LoadingButton
              loading={loading}
              title="Delete case"
              variant="outlined"
              className="border hover:border-app-red border-app-red text-app-red px-3 capitalize"
              onClick={() => deleteCaseMutate()}
            />
            <Button
              variant="outlined"
              className="border hover:border-gray-700 border-gray-700 text-gray-700 px-5 capitalize"
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </div>
      </AppDialog>
    </React.Fragment>
  );
};

export default ViewCaseModal;
