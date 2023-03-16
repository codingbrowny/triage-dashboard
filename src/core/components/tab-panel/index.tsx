import Box from '@mui/material/Box';
import React from 'react'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

const TabPanel = (props: TabPanelProps) => {
const {children, index, value, ...other} = props
  return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box>
       {children}
      </Box>
    )}
  </div>
  )
}

export default TabPanel