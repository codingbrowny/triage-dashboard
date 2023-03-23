import React from "react";
import {
  DataGrid,
  GridColDef,
  GridEventListener,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridApiRef,
  useGridSelector,
} from "@mui/x-data-grid";
import { Pagination } from "@mui/material";
import RenderDataCells, {ActionType} from "../../utils/data-grid/data-table-fns";
import EmptyBox from "../../utils/images/empty-box.png"
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Image from "next/image"
import TablePagination from "../table-pagination";

interface DataGridInterface {
  /** The data to show on the table */
  data: Object[];
  /** The table header */
  tableHeader: GridColDef[];
  /** 
   * If specified, the reviews section of the table is rendered with the review number.
   * 
   * **ONLY** use for table with reviews section.
   * */
  hasReviewCount?: boolean
  /**
   * Determins the number of data to show per table page
   * 
   * default **10**
   */
  pageSize?: number;
  /**
   * Indicates whether review message is shown or not.
   * 
   * **ONLY** use for table with reviews section.
   */
  hasReviewMessage?: boolean;
  props?: any
  /**
   * The actions to perform on the cell data
   */
  actions: ActionType,
  /**
   * Callback fired when a row is clicked. 
   * Not called if the target clicked is an interactive element added by the built-in columns.
   */
  onRowClick?: GridEventListener<"rowClick">
  /**
   * Indicated the loading state of the table
   */
  loading?: boolean
}

const DataTable = ({ tableHeader, data, actions, onRowClick, pageSize = 10, loading=false }: DataGridInterface) => {
  const apiRef = useGridApiRef()
  // Setting the Table Header
  const renderTableHead = () => {
    let tableHead: GridColDef[] = [];
    for (let item of tableHeader) {
      // Setting the renderCell on the product field
      const data = RenderDataCells({item, actions});

      tableHead.push({ ...data, flex: 1, headerClassName: "bg-primary font-bold text-[16px] text-white font-bold" });
    }
    return tableHead;
  };

  const EmptyDataOverlay = () => (
    <div className="flex flex-col justify-center items-center h-full">
      <Image src={EmptyBox} width={70} height={70} alt="no data" />
      <span>No Data</span>
    </div>
  );

  return (
    <div className="relative min-w-full h-fit max-h-full">
      <DataGrid
        sx={{ width: "100%", backgroundColor: "white", maxHeight: "100%" }}
        apiRef={apiRef}
        columns={renderTableHead()}
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
          columnSortedAscendingIcon(props) {
            return <ExpandMoreOutlinedIcon />;
          },
          columnSortedDescendingIcon(props) {
            return <ExpandLessOutlinedIcon />;
          },
        }}
        pageSizeOptions={[15, 20, 25]}
        initialState={{
          pagination: { paginationModel: { pageSize } },
        }}
      />
    </div>
  );
};

export default DataTable;
