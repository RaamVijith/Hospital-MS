import React, { createContext, useContext, useReducer } from "react";
import { useQuery } from "react-query";
import { IUsers } from "../api/clients";
import { usersClient } from "../api/users";

export interface IAction {
  type: "SET_ALL_USERS" | "SET_SELECTED_USERS";

  payload: any;
}

export interface IUsersState {
  users: IUsers[];
  setAllUsers: (value: IUsers[]) => void;
  selectedUsers: IUsers | null;
  setSelectedUsers: (value: IUsers | null) => void;
}

const initialState: IUsersState = {
  users: [],
  setAllUsers: () => {},
  selectedUsers: null,
  setSelectedUsers: () => {},
};

const usersContext = createContext(initialState);

export function useUsersContext() {
  const usersState = useContext(usersContext);
  return usersState;
}

function usersReducer(state: IUsersState, action: IAction): IUsersState {
  switch (action.type) {
    case "SET_ALL_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "SET_SELECTED_USERS":
      return {
        ...state,
        selectedUsers: action.payload,
      };
    default:
      return state;
  }
}

function useUsersReducer() {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  const setAllUsers = (value: IUsers[]) => {
    dispatch({ type: "SET_ALL_USERS", payload: value });
  };

  const setSelectedUsers = (value: IUsers | null) => {
    dispatch({ type: "SET_SELECTED_USERS", payload: value });
  };

  return {
    ...state,
    setAllUsers,
    setSelectedUsers,
  };
}

export default function UsersContextProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const globalState = useUsersReducer();
  const { data, isLoading, isError } = useQuery(
    "all users",
    async () => await usersClient.getAllUsers(),
    {
      onSuccess: (data) => globalState.setAllUsers(data.users),
    }
  );
  return (
    <usersContext.Provider value={globalState}>{children}</usersContext.Provider>
  );
}
