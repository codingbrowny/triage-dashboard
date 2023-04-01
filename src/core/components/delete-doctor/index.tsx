import { DeleteDoctor } from "@/core/graphql/mutations";
import { AllDoctors } from "@/core/graphql/queries/doctors";
import { useMutation } from "@apollo/client";
import { Alert } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { AppDialog, LoadingButton, MySnackbar } from "..";

export interface DialogInterface {
  /**
   * Doctor data passed to component
   */
  details: any;
  /** Opens the dialog */
  open: boolean;
  /** Function for handling the close action on the dialog */
  handleClose?: React.MouseEventHandler;
  /** Callback fired when the delete button is clicked */
  onClickDelete: Function;
}

const DeleteDoctorModal = ({
  details,
  open,
  onClickDelete,
  handleClose,
}: DialogInterface) => {
  const [alert, setAlert] = React.useState<boolean>(false)

  const [confirmDelete, { loading, error, data }] = useMutation(DeleteDoctor, {
    variables: { id: details?.id },
    refetchQueries: [{ query: AllDoctors }],
    onCompleted:()=>setAlert(true)
  });

  
  return (
    <React.Fragment>
      <MySnackbar open={alert} onClose={()=>setAlert(false)}>
        <Alert severity="success" className="text-lg">Doctor successfully deleted</Alert>
      </MySnackbar>
      <AppDialog title={"Delete Doctor"} open={open} handleClose={handleClose}>
        <div>
          <Typography className="text-center my-5">
            Are you sure you want to delete Dr. {details?.username}
          </Typography>
          <div className="flex justify-between item-center w-full md:w-5/6 md:mx-auto mt-5">
            <LoadingButton
              title="Delete"
              variant="outlined"
              loading={loading}
              className="border hover:border-app-red border-app-red text-app-red"
              onClick={() =>confirmDelete() }
            ></LoadingButton>
            <Button
              variant="outlined"
              className="border hover:border-gray-700 border-gray-700 text-gray-700"
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

export default DeleteDoctorModal;
