import Box from "@mui/material/Box/Box";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import NavbarHospital from "./NavbarHospital";
import SideNavHospital from "./SideNavHospital";

const LayoutHospital = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavbarHospital />
      <Box sx={{ display: "flex" }}>
        <SideNavHospital />
        <div style={{ padding: "20px", flexGrow: 1 }}>
          <Toolbar />
          <>{children}</>
        </div>
      </Box>
    </div>
  );
};

export default LayoutHospital;
