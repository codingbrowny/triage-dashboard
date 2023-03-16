import React, { ReactElement, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import { SidebarLinks  } from "../../utils/data";

const Sidebar = () => {

  const router = useRouter();
  // Links Styling
  const linkStyle =
    "w-full p-2.5 relative cursor-pointer font-semibold text-gray-500";
  const activeLinkStyle =
    linkStyle + " border-r-[3px] border-r-red-500";

  return (
    <>
      <h3 className="brand uppercase tracking-tight font-bold text-center bg-primary p-5">
        Triage
      </h3>
      <MenuList className="side-links relative w-full space-y-5 mt-5 md:w-[75%] md:float-right">
        {SidebarLinks.map((link, index) => (
          <MenuItem
            key={index}
            className={
              router.pathname === link.path ? activeLinkStyle : linkStyle
            }
            sx={
              router.pathname === link.path
                ? {
                    borderRight: 1,
                  }
                : {}
            }
          >
            <Link href={link.path} className="w-full">
              <span className="flex item-center gap-4 relative w-full">
                <link.icon />
                {link.name}
              </span>
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </>
  );
};

export default Sidebar;
