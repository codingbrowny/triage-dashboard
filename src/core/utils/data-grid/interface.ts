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
};

export interface DataGridInterface {
  /** The data to show on the table */
  data: Object[];
  /** The table header */
  tableHeader: GridColDef[];
  /**
   * If specified, the reviews section of the table is rendered with the review number.
   * **ONLY** use for table with reviews section.
   * */
  hasReviewCount?: boolean;
  /**
   * Determins the number of data to show per table page
   * default **10**
   */
  pageSize?: number;
  /**
   * Indicates whether review message is shown or not.
   * **ONLY** use for table with reviews section.
   */
  hasReviewMessage?: boolean;
  props?: any;
  /**
   * The actions to perform on the cell data
   */
  actions: ActionType;
  /**
   * Callback fired when a row is clicked.
   * Not called if the target clicked is an interactive element added by the built-in columns.
   */
  onRowClick?: GridEventListener<"rowClick">;
  /**
   * Indicated the loading state of the table
   */
  loading?: boolean;
}