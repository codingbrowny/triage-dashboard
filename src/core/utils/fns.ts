/**
 * Tab a11yProps function
 * @param index Tab index
 * @returns 
 */
export const A11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};