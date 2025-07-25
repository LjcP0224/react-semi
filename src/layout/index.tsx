import { Outlet } from "react-router";
import { Layout } from "@douyinfe/semi-ui";
import { getRoutes } from "@/api/system";

import { useRouteProgress } from "@/hooks/useRouteProgress";

import Navbar from "@/layout/components/NavBar";
import { useEffect } from "react";

const pageModules = import.meta.glob("@/**/*.en.ts", {
  eager: true,
});

const LayoutPage = () => {
  useRouteProgress();
  const getRoutesData = () => {
    getRoutes().then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    getRoutesData();
  }, []);

  return (
    <Layout className="w-full h-full">
      <Navbar show={true} />
      <Layout className="min-h-screen! min-w-full pt-16">
        <Layout.Content>
          <Outlet />
        </Layout.Content>
        <Layout.Footer
          className=" p-5 flex justify-between"
          style={{
            display: "flex",
            color: "var(--semi-color-text-2)",
            backgroundColor: "rgba(var(--semi-grey-0), 1)",
          }}
        >
          Copyright © 2019 niuniushidai. All Rights Reserved.
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
