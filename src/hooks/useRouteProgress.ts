import { useLocation } from "react-router";
import { startNProgress, doneNProgress } from "@/utils/nprogress";
import { useEffect } from "react";

export const useRouteProgress = () => {
  const location = useLocation();

  useEffect(() => {
    startNProgress();
    console.log("location.state ==> ", location.state);
    if (location.state === null || location.state === undefined) {
      doneNProgress();
    }
  }, [location]);
};
