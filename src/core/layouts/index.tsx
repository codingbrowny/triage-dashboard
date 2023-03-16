import React, { ReactElement, useState } from "react";
import { Navbar, Sidebar, Spinner } from "../components";
import Router from "next/router";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, ThemeProvider } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useWindowSize } from "../hooks/useWindowSize";

const Layout = ({ children }: { children: ReactElement }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const [loading, setLoading] = useState(false);
  //Destructring window width
  const { width } = useWindowSize();

  // Handler for when a route change starts
  const changeStartHandler = (url: string) => {
    url !== Router.asPath && setLoading(true);
    setShowSidebar(false);
  };
  // Handler for when a route change is done
  const changeCompleteHandler = (url: string) =>
    url === Router.asPath && setLoading(false);

  Router.events.on("routeChangeStart", changeStartHandler);
  Router.events.on("routeChangeComplete", changeCompleteHandler);
  Router.events.on("routeChangeError", changeCompleteHandler);

  // Drawer handler
  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setShowSidebar((prev) => !prev);
  };

  return (
    <div className="relative bg-background flex h-screen max-h-full overflow-hidden">
      {width >= 1024 ? (
        <aside className="w-72 lg:-w-80 h-screen hidden xl:block transition-[display] duration-300 bg-white">
          <Sidebar />
        </aside>
      ) : (
        <SwipeableDrawer
          anchor="left"
          open={showSidebar}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        >
          <Box className="w-64 lg:-w-72">
            <Sidebar />
          </Box>
        </SwipeableDrawer>
      )}
      <div className="relative content w-full overflow-hidden overflow-y-auto">
        <div className="relative flex items-center gap-3">
          {width <= 1024 && (
            <IconButton
              className="bg-gray-400/20 hover:bg-gray-400/30 md:hidden absolute z-50 left-5"
              onClick={toggleDrawer}
              title="Open Modal"
              aria-label="Toggle sidebar"
            >
              <MenuIcon />
            </IconButton>
          )}
          <Navbar />
        </div>
        {loading ? (
          <div className="h-full w-full overflow-hidden flex items-center justify-center z-10 bg-white/60">
            <Spinner />
          </div>
        ) : (
          <div className="relative mt-5 sm:p-4 md:px-10">{children}</div>
        )}
      </div>
    </div>
  );
};

export default Layout;
