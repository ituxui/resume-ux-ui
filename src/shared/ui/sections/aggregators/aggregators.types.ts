import type { ReactNode } from "react";

export type ExternalAggregatorProps = {
  heading: string | ReactNode;
  items: {
    title: string;
    url: string;
  }[];
}[]
