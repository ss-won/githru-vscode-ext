import type { Dispatch, SetStateAction } from "react";
import { createContext, useContext } from "react";

import type { ClusterNode, IDESentEvents } from "types";

export type DateFilterRange =
  | {
      fromDate: string;
      toDate: string;
    }
  | undefined;

type GlobalDataState = {
  data: ClusterNode[];
  filteredRange: DateFilterRange;
  filteredData: ClusterNode[];
  selectedData: ClusterNode[];
  setFilteredData: Dispatch<SetStateAction<ClusterNode[]>>;
  setSelectedData: Dispatch<SetStateAction<ClusterNode[]>>;
  setFilteredRange: Dispatch<SetStateAction<DateFilterRange>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  branchList: string[];
  setBranchList: Dispatch<SetStateAction<string[]>>;
  baseBranch: string;
  setBaseBranch: Dispatch<SetStateAction<string>>;
} & IDESentEvents;

export const GlobalDataContext = createContext<GlobalDataState | undefined>(undefined);

export const useGlobalData = () => {
  const globalData = useContext(GlobalDataContext);
  if (!globalData) {
    throw new Error("Cannot find GlobalDataProvider");
  }

  return globalData;
};
