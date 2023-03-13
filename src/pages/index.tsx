import React from "react";
import type { PageWithLayout } from "./_app";
import Layout from "../core/layouts";
import { AreaChart, PageTitle, StatHeader } from "@/core/components";


const Index:PageWithLayout = () => {
  return (
      <div className="text-black">
        <StatHeader />
        <div className="bg-white h-full w-full mt-5">
          <PageTitle title="Dashboard" />
          <AreaChart />
        </div>
      </div>
  );
};

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Index;
