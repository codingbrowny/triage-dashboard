import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

interface ActionInterface {
  /** function to execute when view is clicked */
  onRenew?: Function;
  /** function to execute when view is clicked */
  onEdit?: Function;
  /** function to execute when delete is clicked */
  onDelete?: Function;
}

const TableActionMenu = ({ onRenew, onDelete, onEdit }: ActionInterface) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

    /**Handle the edit functionality of the cell */
    const handleEdit = () => {
      onEdit?onEdit():null
    setAnchorEl(null);
    };
/** Handle the view click function */
  const handleRenewal = () => {
    onRenew?onRenew():null
    setAnchorEl(null);
    };

    /** Handle the delete click function */
    const handleDelete = () => {
        onDelete?onDelete():null
        setAnchorEl(null)
    }
    
  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="bg-primary hover:bg-app-blue"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleEdit}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleRenewal}>Renew Subscription</MenuItem>
        <MenuItem onClick={handleDelete} className="text-app-red">
          Delete Doctor
        </MenuItem>
      </Menu>
    </div>
  );
};

export default TableActionMenu;
