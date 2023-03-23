import { Button, ButtonProps, CircularProgress } from "@mui/material";

import React from "react";

interface LoadingButtonInterface extends ButtonProps {
  /**
   * Indicates the loading state of the button
   */
  loading?: boolean;
  /** Button title */
  title: string;
}

const LoadingButton: React.FC<LoadingButtonInterface> = ({
  title,
  loading,
  ...props
}) => {
  return (
    <Button
      className={props.className ? props.className : "flex items-center gap-3"}
      {...props}
      disabled={loading}
    >
      {loading && <CircularProgress color="inherit" size={20} />}
      <span className={loading? "ml-2": "" }>{title}</span>
    </Button>
  );
};

export default LoadingButton;
