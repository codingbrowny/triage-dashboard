import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Paper, { PaperProps } from "@mui/material/Paper";
import { DialogTitle } from "@mui/material";
import { DialogInterface } from "@/types/interfaces";


function PaperComponent(props: PaperProps) {
  return (
      <Paper
        {...props}
        className="w-full md:min-w-[500px] md:max-w-[600px] lg:min-w-[600px] lg:max-w-[700px] shadow-none overflow-auto"
      />
  );
}

const AppDialog = ({ open, handleClose, title, children }: DialogInterface) => {
  // const { open, handleClose, title }: DialogInterface = props;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
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
