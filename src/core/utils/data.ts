import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
export const SidebarLinks = [
  {
    name: "Dashboard",
    path: "/",
    icon: DashboardOutlinedIcon,
  },
  {
    name: "Doctors",
    path: "/doctors",
    icon: Person3OutlinedIcon,
  },
  {
    name: "Cases",
    path: "/cases",
    icon: AssignmentOutlinedIcon,
  },
];

/**Chart Labels (Months) */
export const ChartLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const DoctorsData = {
  Column: [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "username",
      headerName: "Name",
      minWidth: 230,
    },
    {
      field: "speciality",
      headerName: "Speciality",
      minWidth: 250,
    },
    {
      field: "subscription",
      headerName: "Subscription Period",
      minWidth: 200,
    },
    {
      field: "action",
      headerName: "",
      maxWidth: 100,
      minWidth: 100,
    },
  ],
};
export const ConsultantsData = {
  Column: [
    {
      field: "id",
      headerName: "ID",
      maxWidth: 150,
      minWidth: 120,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 230,
    },
    {
      field: "speciality",
      headerName: "Speciality",
      minWidth: 200,
    },
    {
      field: "subscription_type",
      headerName: "Subscription Period",
      minWidth: 200,
    },
    {
      field: "action",
      headerName: "",
      maxWidth: 100,
      minWidth: 100,
    },
  ],
  Data: [
    {
      id: 14365870,
      name: "Dr. Emmanuel Ashley",
      speciality: "Emergency Medicine",
      subscription_type: "consultant",
    },
    {
      id: 11436587,
      name: "Dr. Emmanuel Ashley",
      speciality: "Orthopedics",
      subscription_type: "consultant",
    },
    {
      id: 21436587,
      name: "Dr. Emmanuel Ashley",
      speciality: "Obs and Gyanea",
      subscription_type: "consultant",
    },
    {
      id: 31436587,
      name: "Dr. Emmanuel Ashley",
      speciality: "ENT",
      subscription_type: "consultant",
    },
    {
      id: 41436587,
      name: "Dr. Emmanuel Ashley",
      speciality: "Surgery",
      subscription_type: "consultant",
    },
    {
      id: 51436587,
      name: "Dr. Emmanuel Ashley",
      speciality: "Opthalmology",
      subscription_type: "consultant",
    },
    {
      id: 61436587,
      name: "Dr. Emmanuel Ashley",
      speciality: "OBS and Gyanea",
      subscription_type: "consultant",
    },
    {
      id: 71436587,
      name: "Dr. Emmanuel Ashley",
      speciality: "Surgery",
      subscription_type: "consultant",
    },
    {
      id: 81436587,
      name: "Dr. Emmanuel Ashley",
      speciality: "ENT",
      subscription_type: "consultant",
    },
    {
      id: 91436587,
      name: "Dr. Emmanuel Ashley",
      speciality: "Surgery",
      subscription_type: "consultant",
    },
  ],
};

export const CasesData = {
  Column: [
    { field: "id", headerName: "ID" },
    { field: "description", headerName: "Description", minWidth: 150 },
    { field: "comments", headerName: "No. of Comments", maxWidth: 150 },
    { field: "closed", headerName: "Status", maxWidth: 180, minWidth: 150 },
    { field: "action", headerName: "", },
  ],
};

export const CaseHistory = [
  {
    id: 1,
    name: "Hypertension (HT)",
    for: "hypertenstion",
  },
  {
    id: 2,
    name: "Smoking",
    for: "smoking",
  },
  {
    id: 3,
    name: "Diabetes (DB)",
    for: "diabetes",
  },
  {
    id: 4,
    name: "Renal Disease",
    for: "renal-disease",
  },
  {
    id: 5,
    name: "Alcohol",
    for: "alcohol",
  },
  {
    id: 6,
    name: "Asthma",
    for: "asthma",
  },
  {
    id: 7,
    name: "Heart Disease",
    for: "heart-disease",
  },
  {
    id: 8,
    name: "COPD",
    for: "copd",
  },
];
