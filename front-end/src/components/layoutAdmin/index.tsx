import Box from "@mui/material/Box/Box";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import NavbarAdmin from "./NavbarAdmin";
import SideNavAdmin from "./SideNavAdmin";

const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavbarAdmin />
      <Box sx={{ display: "flex" }}>
        <SideNavAdmin />
        <div style={{ padding: "20px", flexGrow: 1 }}>
          <Toolbar />
          <>{children}</>
        </div>
      </Box>
    </div>
  );
};

export default LayoutAdmin;
