import { Outlet } from "@tanstack/react-router";
import { Layout, Spin } from "@douyinfe/semi-ui";
import { getRoutes } from "@/api/system";

import Navbar from "@/layout/components/NavBar";
import React, { Suspense, useEffect } from "react";

import { isArray } from "es-toolkit/compat";
type RouteItem = {
  path: string;
  key: string;
  component: string | React.ElementType;
  children?: RouteItem[];
  ignore?: boolean;
};

function getFlattenRoutes(routes: RouteItem[]) {
  const mod: Record<string, unknown> = import.meta.glob("@/views/**/*.tsx", {
    eager: true,
    import: "default",
  });

  console.log("mod ==> ", mod);
  const res: RouteItem[] = [];

  function travel(_routes: RouteItem[]) {
    _routes.forEach((route) => {
      const visibleChildren = (route.children || []).filter(
        (child) => !child.ignore
      );

      // /src/views/home/index.tsx
      if (route.key && (!route.children || !visibleChildren.length)) {
        try {
          route.component = mod[
            `/src/${route.component}.tsx`
          ] as React.ComponentType;

          if (route.component) {
            res.push(route);
          }
        } catch (e) {
          console.log(route.key);
          console.error(e);
        }
      }

      if (isArray(route.children) && route.children.length) {
        travel(route.children);
      }
    });
  }
  travel(routes);
  return res;
}

const LayoutPage = () => {
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
          <Suspense fallback={<Spin />}>
            <Outlet />
          </Suspense>
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
