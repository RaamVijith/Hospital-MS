import React, { createContext, useContext, useReducer } from "react";
import { useQuery } from "react-query";
import { IAppointment } from "../api/clients";
import { appointmentClient } from "../api/appointment";

export interface IAction {
  type: "SET_ALL_APPOINTMENT" | "SET_SELECTED_APPOINTMENT";

  payload: any;
}

export interface IAppointmentState {
  appointment: IAppointment[];
  setAllAppointment: (value: IAppointment[]) => void;
  selectedAppointment: IAppointment | null;
  setSelectedAppointment: (value: IAppointment | null) => void;
}

const initialState: IAppointmentState = {
  appointment: [],
  setAllAppointment: () => {},
  selectedAppointment: null,
  setSelectedAppointment: () => {},
};

const appointmentContext = createContext(initialState);

export function useAppointmentContext() {
  const appointmentState = useContext(appointmentContext);
  return appointmentState;
}

function appointmentReducer(state: IAppointmentState, action: IAction): IAppointmentState {
  switch (action.type) {
    case "SET_ALL_APPOINTMENT":
      return {
        ...state,
        appointment: action.payload,
      };
    case "SET_SELECTED_APPOINTMENT":
      return {
        ...state,
        selectedAppointment: action.payload,
      };
    default:
      return state;
  }
}

function useAppointmentReducer() {
  const [state, dispatch] = useReducer(appointmentReducer, initialState);

  const setAllAppointment = (value: IAppointment[]) => {
    dispatch({ type: "SET_ALL_APPOINTMENT", payload: value });
  };

  const setSelectedAppointment = (value: IAppointment | null) => {
    dispatch({ type: "SET_SELECTED_APPOINTMENT", payload: value });
  };

  return {
    ...state,
    setAllAppointment,
    setSelectedAppointment,
  };
}

export default function AppointmentContextProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const globalState = useAppointmentReducer();
  const { data, isLoading, isError } = useQuery(
    "all Appointment",
    async () => await appointmentClient.getAllAppointment(),
    {
      onSuccess: (data) => globalState.setAllAppointment(data.appointment),
    }
  );
  return (
    <appointmentContext.Provider value={globalState}>{children}</appointmentContext.Provider>
  );
}
