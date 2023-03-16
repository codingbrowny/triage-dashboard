import { GridColDef } from "@mui/x-data-grid";
import { ChangeEvent, useState } from "react";

/**
 * Returns a filtered table data
 * @param data The table data to filter. Must be an array of objects
 * @param column The table column. This is used to render the table filters
 * @param callback Callback fired after
 */
export const useTableSearch = (
  data: object[],
  column?: GridColDef[],
  callback?: Function
) => {
  const [tableData, setTableData] = useState<typeof data>(data);
  const [{ columnFilter, dateFilter }, setSearchFilter] = useState<{
    columnFilter: string;
    dateFilter: string;
  }>({ columnFilter: "", dateFilter: "" });

  //Table Filters
  const filters = column?.filter((el) => el.field !== "action");

  const handleFilterChange = (e:any) => { 
    const {value, name} = e.target
    if (name === "columns") {
      setSearchFilter(prev => ({ ...prev, columnFilter: value }))
    }
    if (name === "dates") {
      setSearchFilter(prev => ({ ...prev, dateFilter: value }))
    }
  };

  //
  const handleSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase().trim();

    if (searchQuery === "") {
      setTableData(data);
    }

      // any data value
    const result = data.filter((item) => {
        
        if (columnFilter === "" && dateFilter === "") {
          return Object.values(item).some((val) =>
            String(val).toLowerCase().includes(searchQuery)
          );
        }

        if (columnFilter !== "" && dateFilter === "") {
          return String(item[columnFilter]).toLowerCase().includes(searchQuery);
        }
          
      });
      setTableData(result);
  };

  const handleDataChange = (data: object[]) => setTableData(data);

  return {
    filters,
    tableData,
    handleDataChange,
    handleSearchQuery,
    handleFilterChange,
  };
};
