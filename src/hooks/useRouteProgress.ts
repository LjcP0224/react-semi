import { useRouterState } from "@tanstack/react-router";
import { startNProgress, doneNProgress } from "@/utils/nprogress";
import { useEffect } from "react";

export const useRouteProgress = () => {
  const state = useRouterState();
  useEffect(() => {
    startNProgress();
    if (state.status === "idle") {
      doneNProgress();
    }
  }, [state]);
};
