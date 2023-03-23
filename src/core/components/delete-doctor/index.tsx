import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React from 'react'
import { AppDialog } from '..'

export interface DialogInterface {
  /**
   * Doctor data passed to component
   */
  data: any
  /** Opens the dialog */
  open: boolean;
  /** Function for handling the close action on the dialog */
  handleClose?: React.MouseEventHandler;
  /** Callback fired when the delete button is clicked */
  onClickDelete: Function;
}

const DeleteDoctorModal = ({data, open, onClickDelete, handleClose}: DialogInterface) => {
  return (
    <AppDialog
        title={"Delete Doctor"}
        open={open}
        handleClose={handleClose}
      >
        <div>
        <Typography className="text-center my-5">
          Are you sure you want to delete Dr. {data?.username}
        </Typography>
        <div className="flex justify-between item-center w-full md:w-5/6 md:mx-auto mt-5">
          <Button
            variant="outlined"
            className="border hover:border-app-red border-app-red text-app-red"
            onClick={()=>onClickDelete(data)}
          >
            Delete
          </Button>
          <Button
            variant="outlined"
            className="border hover:border-gray-700 border-gray-700 text-gray-700"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
        </div>
      </AppDialog>
  )
}

export default DeleteDoctorModal