import React, { createContext, useContext, useReducer } from "react";
import { useQuery } from "react-query";
import { IHospital } from "../api/clients";
import { hospitalClient } from "../api/hospital";

export interface IAction {
  type: "SET_ALL_HOSPITAL" | "SET_SELECTED_HOSPITAL";

  payload: any;
}

export interface IHospitalState {
  hospital: IHospital[];
  setAllHospital: (value: IHospital[]) => void;
  selectedHospital: IHospital | null;
  setSelectedHospital: (value: IHospital | null) => void;
}

const initialState: IHospitalState = {
  hospital: [],
  setAllHospital: () => {},
  selectedHospital: null,
  setSelectedHospital: () => {},
};

const hospitalContext = createContext(initialState);

export function useHospitalContext() {
  const hospitalState = useContext(hospitalContext);
  return hospitalState;
}

function hospitalReducer(state: IHospitalState, action: IAction): IHospitalState {
  switch (action.type) {
    case "SET_ALL_HOSPITAL":
      return {
        ...state,
        hospital: action.payload,
      };
    case "SET_SELECTED_HOSPITAL":
      return {
        ...state,
        selectedHospital: action.payload,
      };
    default:
      return state;
  }
}

function useHospitalReducer() {
  const [state, dispatch] = useReducer(hospitalReducer, initialState);

  const setAllHospital = (value: IHospital[]) => {
    dispatch({ type: "SET_ALL_HOSPITAL", payload: value });
  };

  const setSelectedHospital = (value: IHospital | null) => {
    dispatch({ type: "SET_SELECTED_HOSPITAL", payload: value });
  };

  return {
    ...state,
    setAllHospital,
    setSelectedHospital,
  };
}

export default function HospitalContextProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const globalState = useHospitalReducer();
  const { data, isLoading, isError } = useQuery(
    "all hospital",
    async () => await hospitalClient.getAllHospital(),
    {
      onSuccess: (data) => globalState.setAllHospital(data.hospital),
    }
  );
  return (
    <hospitalContext.Provider value={globalState}>{children}</hospitalContext.Provider>
  );
}
