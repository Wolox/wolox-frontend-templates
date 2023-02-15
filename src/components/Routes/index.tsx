import { Routes as RoutesSwitch, Route, Navigate } from "react-router-dom";
import Dashboard from '@/screens/Dashboard'
import { useSelector } from "@/context/UserContext";
import { ROUTES } from "./constants";
import Suspense from "../Suspense";

function Routes() {
  const user = useSelector((state) => state.user);

  return (
    <Suspense>
      <RoutesSwitch>
        <Route element={<Dashboard />}>
          {ROUTES.map(({ path, element, redirectTo }) => (
            <Route
              key={path}
              path={path}
              element={redirectTo?.(user) ? <Navigate to={redirectTo?.(user) as string} /> : element}
              // If you need more props. Add it in the constant file and use it here
            />
          ))}
        </Route>
      </RoutesSwitch>
    </Suspense>
  )
}

export default Routes;
