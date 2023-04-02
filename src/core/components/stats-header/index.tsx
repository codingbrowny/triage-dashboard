import React from "react";
import Statistics from "../statistics";
import { AllCases } from "@/core/graphql/queries/cases";
import { AllDoctors } from "@/core/graphql/queries/doctors";
import { useQuery } from "@apollo/client";

const StatHeader = () => {
  const cases = useQuery(AllCases, { pollInterval: 5000, notifyOnNetworkStatusChange:true });
  const allDoctors = useQuery(AllDoctors, { pollInterval: 5000, notifyOnNetworkStatusChange:true });

  //No. of cases
  const allCase = cases.data?.cases.length;
  //No. of pending cases
  const pendingCases = cases.data?.cases.filter(
    (item: any) => item.claimed === false
  ).length;
  //Number of consultants
  const numOfDoctors = allDoctors.data?.Doctors.length
  //No. of doctors
  const numOfPhysicians = allDoctors.data?.Physicians.length

  return (
    <div className="flex justify-between items-center gap-5 md:gap-6 flex-wrap md:flex-nowrap px-2 md:px-0">
      <Statistics
        title="Cases"
        value={!cases.loading ? allCase : "..."}
        color={"from-primary/50 to-primary"}
      />
      <Statistics
        title={"Pending Cases"}
        value={!cases.loading ? pendingCases : "..."}
        color={"from-app-yellow/50 to-app-yellow"}
      />
      <Statistics
        title={"Doctors"}
        value={!allDoctors.loading ? numOfDoctors : "..."}
        color={"from-app-blue/50 to-app-blue"}
      />
      <Statistics
        title={"Consultants"}
        value={!allDoctors.loading ? numOfPhysicians : "..."}
        color={"from-app-red/50 to-app-red"}
      />
    </div>
  );
};

export default StatHeader;
