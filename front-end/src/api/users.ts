import { IUsers, apiMethods } from "./clients";

const usersRoutes = {
  get: "/users/all",
  getOne: "/users",
  update: "/users/update",
  delete: "/users/delete",
  create: "/users/create",
};  

export type GetAllResponse = {
  users: IUsers[];
};

export type GetOneResponse = {
  users: IUsers;
  message: string;
};

type UpdateResponse = {
  users: IUsers;
  message: string;
};

const { getAll, getOne, deleteOne, updateOne, createOne } = apiMethods;

const getAllUsers = async () => await getAll<GetAllResponse>(usersRoutes.get);

const getOneUsers = (id: string) =>
  getOne<GetOneResponse>(usersRoutes.getOne, id);

const updateUsers = (id: string, input: Partial<IUsers>) =>
  updateOne<UpdateResponse, Partial<IUsers>>(usersRoutes.update, id, input);

const deleteUsers = (id: string) =>
  deleteOne<GetOneResponse>(usersRoutes.delete, id);

const createUsers = (input: Omit<IUsers, "_id">) =>
  createOne<GetOneResponse, Omit<IUsers, "_id">>(usersRoutes.create, input);

export const usersClient = {
  getAllUsers,
  getOneUsers,
  updateUsers,
  createUsers,
  deleteUsers,
};
