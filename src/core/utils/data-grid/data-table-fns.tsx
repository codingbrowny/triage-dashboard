import { TableActionMenu } from "@/core/components";
import { Typography } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

export type ActionType = {
  /**
     * Callback fired when edit button is clicked
     */
  onEditData?: Function,
  /**
   * Callback fired when renew subscription button is clicked
   */
  onRenewSubscription?: Function,
  /**
   * Callback fired when delete button is clicked
   */
  onDeleteData?: Function
}

/** A function that handles how each cell in the data table is rendered.
 * It returns a modified copy of the actual data from the server
 */
 interface RenderCellInterface {
  item: GridColDef,
   actions: ActionType
 }

export default function RenderDataCells({ item, actions }: RenderCellInterface) {
  const {onDeleteData, onEditData, onRenewSubscription} = actions
  item = {
    ...item,
    renderCell(params: GridRenderCellParams) {
      return <Typography className="text-gray-700">{params.value}</Typography>
    }
  }
  if(item.field === "subscription_type") {
    item = {
      ...item, 
      renderCell(params:GridRenderCellParams) {
        return <Typography className="text-green-500">{params.value}</Typography>
      }
    }
  }

  if (item.field === "action") {
    item = {
      ...item,
      maxWidth: 100,
      renderCell(params: GridRenderCellParams) {
        return (
          <TableActionMenu
          onEdit={onEditData}
          onDelete={onDeleteData}
          onRenew={onRenewSubscription}
          />
        );
      },
    };
  }
  return item
}
