import React from "react";
import type { PageWithLayout } from "./_app";
import Layout from "../core/layouts";
import { AreaChart, PageTitle, StatHeader } from "@/core/components";
import { Box, Tab, Tabs } from "@mui/material";
import { A11yProps } from "@/core/utils/fns";


const Index: PageWithLayout = () => {
  const [value, setValue] = React.useState(0);
  //Tab Change Handler
   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
     setValue(newValue);
   };
  return (
    <div className="text-black">
      <StatHeader />
      <div className="bg-white h-full w-full mt-5 p-3">
        <PageTitle title="Dashboard">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="inherit"
            >
              <Tab label="Days" {...A11yProps(0)} />
              <Tab label="Month" {...A11yProps(1)} />
              <Tab label="Year" {...A11yProps(2)} />
            </Tabs>
          </Box>
        </PageTitle>
        <AreaChart />
      </div>
    </div>
  );
};

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Index;
