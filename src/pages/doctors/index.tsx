import React, { useState } from "react";
import Layout from "@/core/layouts";
import {
  DataTable,
  DeleteDoctor,
  PageTitle,
  RenewSubscription,
  StatHeader,
  TabPanel,
} from "@/core/components";
import { ConsultantsData, DoctorsData } from "@/core/utils/data";
import type { PageWithLayout } from "../_app";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const DoctorsPage: PageWithLayout = () => {
  const { Column, Data } = DoctorsData;
  const [value, setValue] = useState(0);
  const [{ doctor, subscription }, setOpenModal] = useState({
    doctor: false,
    subscription: false,
  });

  const openDoctorDeleteModal = () =>
    setOpenModal((prev) => ({ ...prev, doctor: !doctor }));
  const openSubscriptionModal = () =>
    setOpenModal((prev) => ({ ...prev, subscription: !subscription }));

  const handleClose = (modal: "doctor" | "subscription") =>
    setOpenModal((prev) => ({ ...prev, [modal]: ![modal] }));

  //Tab Change Handler
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <div>
      <StatHeader />
      <div className="bg-white h-full w-full mt-5">
        <PageTitle title={value === 0 ? "Doctors" : "Consultants"}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="inherit"
            >
              <Tab label="Doctors" {...a11yProps(0)} />
              <Tab label="Consultants" {...a11yProps(1)} />
            </Tabs>
          </Box>
        </PageTitle>
        <Box className="p-2 sm:p-3 md:p-5">
          <TabPanel value={value} index={0}>
            <DataTable
              data={Data}
              tableHeader={Column}
              actions={{
                onDeleteData: openDoctorDeleteModal,
                onRenewSubscription: openSubscriptionModal,
              }}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <DataTable
              data={ConsultantsData.Data}
              tableHeader={ConsultantsData.Column}
              actions={{
                onDeleteData: openDoctorDeleteModal,
                onRenewSubscription: openSubscriptionModal,
              }}
            />
          </TabPanel>
        </Box>
      </div>

      {/* Delete Doctor Modal */}
      <DeleteDoctor
        data={undefined}
        open={doctor}
        handleClose={() => handleClose("doctor")}
        onClickDelete={() => {}}
      />
      {/* Subscription Modal */}
      <RenewSubscription
        open={subscription}
        handleClose={() => handleClose("subscription")}
      />
    </div>
  );
};

DoctorsPage.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};

export default DoctorsPage;
