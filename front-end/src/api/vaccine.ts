import { IVaccine, apiMethods } from "./clients";

const vaccineRoutes = {
  get: "/vaccine/all",
  getOne: "/vaccine",
  update: "/vaccine/update",
  delete: "/vaccine/delete",
  create: "/vaccine/create",
};

export type GetAllResponse = {
    vaccine: IVaccine[];
};

export type GetOneResponse = {
    vaccine: IVaccine;
  message: string;
};

type UpdateResponse = {
    vaccine: IVaccine;
  message: string;
};

const { getAll, getOne, deleteOne, updateOne, createOne } = apiMethods;

const getAllVaccine = async () => await getAll<GetAllResponse>(vaccineRoutes.get);

const getOneVaccine = (id: string) =>
  getOne<GetOneResponse>(vaccineRoutes.getOne, id);

const updateVaccine = (id: string, input: Partial<IVaccine>) =>
  updateOne<UpdateResponse, Partial<IVaccine>>(vaccineRoutes.update, id, input);

const deleteVaccine = (id: string) =>
  deleteOne<GetOneResponse>(vaccineRoutes.delete, id);

const createVaccine = (input: Omit<IVaccine, "_id">) =>
  createOne<GetOneResponse, Omit<IVaccine, "_id">>(vaccineRoutes.create, input);

export const vaccineClient = {
  getAllVaccine,
  getOneVaccine,
  updateVaccine,
  createVaccine,
  deleteVaccine,
};
