import React, { useEffect } from "react";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import LocationDisabledRoutes from "./locationdisabled.routes";

import { useAuth } from "../contexts/auth";
import { useLocation } from "../contexts/location";

function Routes() {
  const { signed } = useAuth();
  const { location } = useLocation();

  return (
    <>
      {signed && location ? <AppRoutes /> : !signed && location ? <AuthRoutes /> : <LocationDisabledRoutes />}
    </>
  );
}

export default Routes;
