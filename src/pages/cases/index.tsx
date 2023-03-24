import React, { useState } from "react";
import {
  AddCaseModal,
  DataTable,
  PageTitle,
  ViewCaseModal,
} from "@/core/components";
import type { PageWithLayout } from "../_app";
import Layout from "@/core/layouts";
import { Box, Button } from "@mui/material";
import { CasesData } from "@/core/utils/data";
import { GridCallbackDetails, GridRowParams, MuiEvent } from "@mui/x-data-grid";
import { useQuery } from "@apollo/client";
import { AllCases } from "@/core/graphql/queries/cases";

const CasesPage: PageWithLayout = () => {
  //Get Cases Data
  const { loading, error, data, previousData } = useQuery(AllCases)
  
  const { Column } = CasesData;
  const [caseDetails, setCaseDetails] = useState();
  const [{ addCase, viewCase }, setOpenModal] = useState({
    addCase: false,
    viewCase: false,
  });
  //Handle Modal Close
  const handleClose = (modal: "addCase" | "viewCase") =>
    setOpenModal((prev) => ({ ...prev, [modal]: ![modal] }));

  //Table Row CLick - Open Case Details Modals
  const onRowClick = (
    params: GridRowParams,
    event: MuiEvent<React.MouseEvent>,
    details: GridCallbackDetails
  ) => {
    setCaseDetails(params.row);
    setOpenModal((prev) => ({ ...prev, viewCase: !viewCase }));
  };

  return (
    <>
      <div className="bg-white w-full">
        <PageTitle title={"Cases"}>
          <Button
            variant="outlined"
            className="border-green-500 border hover:border-green-600 text-green-600 font-semibold lowercase"
            onClick={() =>
              setOpenModal((prev) => ({ ...prev, addCase: !addCase }))
            }
          >
            add case +
          </Button>
        </PageTitle>
        <Box className="p-2 sm:p-3 md:p-5">
          <DataTable
            data={data? data?.cases: previousData ? previousData?.cases: []}
            tableHeader={Column}
            onRowClick={onRowClick}
            loading={loading}
            pageSize={12}
            actions={{
              onEditData: undefined,
              onRenewSubscription: undefined,
              onDeleteData: undefined,
            }}
          />
        </Box>
      </div>
        {/* Add Case Modal */}
        <AddCaseModal
          open={addCase}
          handleClose={() => handleClose("addCase")}
        />
        {/* View Case Modal */}
        <ViewCaseModal
          open={viewCase}
          handleClose={() => handleClose("viewCase")}
        caseDetails={caseDetails}
        
        />
    </>
  );
};

CasesPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CasesPage;
