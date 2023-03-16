// ** MUI Imports
import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { User } from "..";

const Navbar = () => {
  const { width } = useWindowSize();
  //Search Filter Hook
  const [openSearch, setOpenSearch] = useState<boolean>();


  useEffect(() => {
    if (width >= 768) {
      setOpenSearch(false);
    }
    return () => {
      setOpenSearch((prev) => prev);
    };
  }, [width]);

  // Filter Menu Hooks
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="bg-white h-16 w-full px-5 relative flex justify-end items-center font">
        <User />
    </header>
  );
};

export default Navbar;
