import { GridColDef, GridEventListener } from "@mui/x-data-grid";
/**
 * Defines types for the action menu items
 */
export type ActionType = {
  /**
   * Callback fired when edit button is clicked
   */
  onEditData?: Function;
  /**
   * Callback fired when renew subscription button is clicked
   */
  onRenewSubscription?: Function;
  /**
   * Callback fired when delete button is clicked
   */
  onDeleteData?: Function;
  /**
   * Callback fired when a row is clicked.
   * Not called if the target clicked is an interactive element added by the built-in columns.
   */
  onRowClick?: GridEventListener<"rowClick">;
};

type FooterProps = {
  /**
   * Callback fired when footer refresh button is clicked
   */
  onRefresh?: Function;
};

export interface DataGridInterface {
  /** The data to show on the table */
  data: Object[];
  /** The table header */
  tableHeader: GridColDef[];
  /**
   * Determins the number of data to show per table page
   * default **10**
   */
  pageSize?: number;
  props?: any;
  /**
   * The actions to perform on the cell data
   */
  actions: ActionType;
  /**
   * Indicated the loading state of the table
   */
  loading?: boolean;
  footerProps?: FooterProps
  
}