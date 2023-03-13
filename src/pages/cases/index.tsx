import React, {useState} from "react";
import { AddCaseModal, DataTable, PageTitle } from "@/core/components";
import type { PageWithLayout } from "../_app";
import Layout from "@/core/layouts";
import { Box, Button } from "@mui/material";
import { CasesData } from "@/core/utils/data";

const CasesPage: PageWithLayout = () => {
  const { Data, Column } = CasesData;
  const [{addCase, viewCase}, setOpenModal] = useState({addCase: false, viewCase: false})
  const handleClose = (modal: string) => setOpenModal(prev => ({...prev, [modal]: ![modal]}))
  return (
    <>
      <div className="bg-white w-full">
        <PageTitle title={"Cases"}>
          <Button
            variant="outlined"
            className="border-green-500 border hover:border-green-600 text-green-600 font-semibold lowercase"
            onClick={()=> setOpenModal(prev=>({...prev, addCase:!addCase}))}
          >
            add case +
          </Button>
        </PageTitle>
        <Box sx={{ p: 3 }}>
          <DataTable
            data={Data}
            tableHeader={Column}
            actions={{
              onEditData: undefined,
              onRenewSubscription: undefined,
              onDeleteData: undefined,
            }}
          />
        </Box>
        <AddCaseModal open={addCase} handleClose={()=>handleClose("addCase")} />
      </div>
    </>
  );
};

CasesPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CasesPage;
