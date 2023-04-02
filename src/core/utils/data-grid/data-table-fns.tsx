import { TableActionMenu } from "@/core/components";
import { Typography } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { ActionType } from "./interface";

interface RenderCellInterface {
  item: GridColDef;
  actions: ActionType;
}

/** A function that handles how each cell in the data table is rendered.
 * It returns a modified copy of the actual data from the server
 */
export default function RenderDataCells({
  item,
  actions,
}: RenderCellInterface) {
  const { onDeleteData, onEditData, onRenewSubscription } = actions;
  item = {
    ...item,
    renderCell(params: GridRenderCellParams) {
      return (
        <Typography className="text-gray-700 w-full text-ellipsis overflow-hidden">
          {params.value}
        </Typography>
      );
    },
  };
  if (item.field === "subscription_type") {
    item = {
      ...item,
      renderCell(params: GridRenderCellParams) {
        return (
          <Typography className="text-green-500 w-full">{params.value}</Typography>
        );
      },
    };
  }
  if (item.field === "id") {
    item = {
      ...item,
      minWidth: 230,
      maxWidth: 280,
      renderCell(params: GridRenderCellParams) {
        return (
          <Typography className="w-full text-ellipsis overflow-hidden">
            {params.value}
          </Typography>
        );
      },
    };
  }
  if (item.field === "status") {
    item = {
      ...item,
      headerAlign: "center"
    }
  }
  if (item.field === "caseChatCount") {
    item = {
      ...item,
      renderCell(params: GridRenderCellParams) {
        return (
          <Typography className="text-right px-2 w-full text-ellipsis overflow-hidden">
            {params.value}
          </Typography>
        );
      },
    };
  }
  if (item.field === "subscription") {
    item = {
      ...item,
      renderCell(params: GridRenderCellParams) {
        let style = "";
        if (params.value < 9) {
          style = "text-red-500";
        } else if (params.value < 20) {
          style = "text-app-yellow";
        } else {
          style = "text-green-600";
        }
        return (
          <Typography className={`w-full ${style}`}>
            {!params.value ? "no subscription" : params.value + " days"}
          </Typography>
        );
      },
    };
  }
  if (item.field === "closed") {
    item = {
      ...item,
      renderCell(params: GridRenderCellParams) {
        return !params.row.status ? (
          <Typography className="text-center w-full text-green-500">
            open
          </Typography>
        ) : (
          <Typography className="text-center w-full text-red-500">
            closed
          </Typography>
        );
      },
    };
  }

  if (item.field === "action") {
    item = {
      ...item,
      maxWidth: 150,
      minWidth: 100,
      renderCell(params: GridRenderCellParams) {
        return (
          <div className="w-full text-center">
            <TableActionMenu
              onEdit={onEditData}
              onDelete={onDeleteData}
              onRenew={onRenewSubscription}
            />
          </div>
        );
      },
    };
  }
  return item;
}

// Setting the Table Header
export const renderTableHead = ({
  tableHeader,
  actions,
}: {
  tableHeader: GridColDef[];
  actions: ActionType;
}) => {
  let tableHead: GridColDef[] = [];
  for (let item of tableHeader) {
    // Setting the renderCell on the product field
    const data = RenderDataCells({ item, actions });

    tableHead.push({
      ...data,
      flex: 1,
      headerClassName: "bg-primary font-bold text-[16px] text-white font-bold",
    });
  }
  return tableHead;
};
