import { createBrowserRouter } from "react-router";
import { routeMap } from "./utils";
import { AeroaktProduct, DostavProduct, DviprazProduct, Landing, RdpDashboardProduct, RdpLandingProduct, TsdProduct, UipProduct } from "@pages";
import { App } from "../ui/App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Landing
      },
      {
        path: routeMap.aeroakt,
        Component: AeroaktProduct
      },
      {
        path: "dostav",
        Component: DostavProduct
      },
      {
        path: "dvipraz",
        Component: DviprazProduct
      },
      {
        path: "rdp-dashboard",
        Component: RdpDashboardProduct
      },
      {
        path: "rdp-landing",
        Component: RdpLandingProduct
      },
      {
        path: "tsd",
        Component: TsdProduct
      },
      {
        path: routeMap.uip,
        Component: UipProduct
      },
    ]
  },
]);
