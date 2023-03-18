import React from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { AppDialog } from "..";

interface DialogInterface {
  /**
   * Row data passed to component
   */
  data: any;
  /** Opens the dialog */
  open: boolean;
  /** Function for handling the close action on the dialog */
  handleClose?: React.MouseEventHandler;
  /** Callback fired when the delete button is clicked */
  onClickApprove: React.MouseEventHandler;
}

const RenewSubscription = ({ open, handleClose, data, onClickApprove }: DialogInterface) => {
  return (
    <AppDialog open={open} handleClose={handleClose} title={"Subscription"}>
      <div className="space-y-10 my-4">
        <div className="space-y-4">
          <div className="md:flex md:justify-start items-center text-gray-600 gap-4">
            <Typography className="md:w-2/5 font-semibold">
              Doctor&apos;s Name:
            </Typography>
            <Typography className="font-semibold">{data?.name}</Typography>
          </div>
          <div className="md:flex md:justify-start items-center text-gray-600 gap-4">
            <Typography className="md:w-2/5 font-semibold">
              Current Subscription:
            </Typography>
            <Typography className="text-green-600 font-semibold">
              {data?.subscription} days
            </Typography>
          </div>
          <div className="md:flex md:justify-start items-center text-gray-600 gap-4 mb-5">
            <Typography className="md:w-2/5 font-semibold">
              New Subscription:
            </Typography>
            <input
              type={"text"}
              name="subscription_days"
              className="rounded-lg w-20 p-2 border border-gray-600 focus:border"
            />
            <span className="ml-3 font-semibold">Days</span>
          </div>
        </div>
        <div className="btns flex justify-between items-center w-full md:w-5/6 mx-auto">
          <Button
            variant="outlined"
            className="capitalize px-5 border border-green-500 hover:border-green-600 text-green-500 hover:text-green-600"
            onClick={()=>onClickApprove(data)}
          >
            Approve
          </Button>
          <Button
            variant="outlined"
            className="capitalize px-5 border hover:border-gray-700 border-gray-700 text-gray-700"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </AppDialog>
  );
};

export default RenewSubscription;
