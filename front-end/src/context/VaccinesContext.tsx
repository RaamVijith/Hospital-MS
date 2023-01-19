import React, { createContext, useContext, useReducer } from "react";
import { useQuery } from "react-query";
import { IVaccine } from "../api/clients";
import { vaccineClient } from "../api/vaccine";

export interface IAction {
  type: "SET_ALL_VACCINES" | "SET_SELECTED_VACCINE";

  payload: any;
}

export interface IVaccineState {
  vaccines: IVaccine[];
  setAllVaccines: (value: IVaccine[]) => void;
  selectedVaccine: IVaccine | null;
  setSelectedVaccine: (value: IVaccine | null) => void;
}

const initialState: IVaccineState = {
  vaccines: [],
  setAllVaccines: () => {},
  selectedVaccine: null,
  setSelectedVaccine: () => {},
};

const vaccineContext = createContext(initialState);

export function useVaccineContext() {
  const vaccineState = useContext(vaccineContext);
  return vaccineState;
}

function vaccineReducer(state: IVaccineState, action: IAction): IVaccineState {
  switch (action.type) {
    case "SET_ALL_VACCINES":
      return {
        ...state,
        vaccines: action.payload,
      };
    case "SET_SELECTED_VACCINE":
      return {
        ...state,
        selectedVaccine: action.payload,
      };
    default:
      return state;
  }
}

function useVaccineReducer() {
  const [state, dispatch] = useReducer(vaccineReducer, initialState);

  const setAllVaccines = (value: IVaccine[]) => {
    dispatch({ type: "SET_ALL_VACCINES", payload: value });
  };

  const setSelectedVaccine = (value: IVaccine | null) => {
    dispatch({ type: "SET_SELECTED_VACCINE", payload: value });
  };

  return {
    ...state,
    setAllVaccines,
    setSelectedVaccine,
  };
}

export default function VaccineContextProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const globalState = useVaccineReducer();
  const { data, isLoading, isError } = useQuery(
    "all vaccines",
    async () => await vaccineClient.getAllVaccine(),
    {
      onSuccess: (data) => globalState.setAllVaccines(data.vaccine),
    }
  );
  return (
    <vaccineContext.Provider value={globalState}>{children}</vaccineContext.Provider>
  );
}
