import * as React from "react";
import { ReactElement, ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Paper, { PaperProps } from "@mui/material/Paper";
import { DialogTitle } from "@mui/material";
import { DialogInterface } from "@/types/interfaces";


function PaperComponent(props: PaperProps) {
  return (
    <div>
      <Paper
        {...props}
        className="w-full md:w-[600px] lg:w-[700px] shadow-none"
      />
    </div>
  );
}

const AppDialog = ({ open, handleClose, title, children }: DialogInterface) => {
  // const { open, handleClose, title }: DialogInterface = props;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
      >
        <DialogTitle className="bg-primary text-center font-semibold text-white p-2">
          {title}
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default AppDialog;
