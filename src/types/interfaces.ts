import { ReactElement, ReactNode } from "react";

export interface DialogInterface {
    /** Opens the dialog */
    open: boolean;
    /** Function for handling the close action on the dialog */
    handleClose: any;
    /**The Dialog title */
    title?: ReactNode;
    children?: ReactElement
  }