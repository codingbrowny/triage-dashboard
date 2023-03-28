import React from "react";
import Image from "next/image";
import {
  DataGrid,
  GridFooter,
  GridFooterContainer,
  useGridApiRef,
} from "@mui/x-data-grid";
import { renderTableHead } from "../../utils/data-grid/data-table-fns";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import TablePagination from "../table-pagination";
import { DataGridInterface } from "@/core/utils/data-grid/interface";
import { LoadingButton } from "..";
import { CircularProgress, LinearProgress } from "@mui/material";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";

const DataTable = ({
  tableHeader,
  data,
  actions,
  onRowClick,
  pageSize = 10,
  loading = false,
}: DataGridInterface) => {
  const apiRef = useGridApiRef();
  const [reload, setReload] = React.useState(false);

  const EmptyDataOverlay = () => (
    <div className="flex flex-col justify-center items-center h-full">
      <Image
        src={"/images/empty-box.png"}
        width={70}
        height={70}
        alt="no data"
      />
      <span>No Data</span>
    </div>
  );

  function CustomFooter() {
    return (
      <GridFooterContainer className="bg-slate-300/25">
        {/* Add what you want here */}
        <LoadingButton
          title={reload ? "Reloading" : "Refresh"}
          loading={reload}
          startIcon={<RefreshOutlinedIcon />}
          className="capitalize mx-4 text-sm"
          onClick={() => setReload(true)}
        />
        <GridFooter
          sx={{
            border: "none", // To delete double border.
          }}
        />
      </GridFooterContainer>
    );
  }

  const DefaultProgress = () => {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <CircularProgress />
      </div>
    );
  };

  return (
    <div className="relative min-w-full h-fit max-h-full">
      <DataGrid
        sx={{ width: "100%", backgroundColor: "white", maxHeight: "100%" }}
        apiRef={apiRef}
        columns={renderTableHead({ tableHeader, actions })}
        rows={data}
        editMode={"cell"}
        autoHeight={true}
        checkboxSelection
        disableRowSelectionOnClick
        loading={loading}
        onRowClick={onRowClick}
        pagination
        slots={{
          pagination: TablePagination,
          noRowsOverlay: EmptyDataOverlay,
          footer: CustomFooter,
          loadingOverlay: reload ? LinearProgress : DefaultProgress,
          columnSortedAscendingIcon(props) {
            return <ExpandMoreOutlinedIcon />;
          },
          columnSortedDescendingIcon(props) {
            return <ExpandLessOutlinedIcon />;
          },
        }}
        pageSizeOptions={[10, 12, 15, 20, 25]}
        initialState={{
          pagination: { paginationModel: { pageSize } },
        }}
      />
    </div>
  );
};

export default DataTable;
