import { IHospital, apiMethods } from "./clients";

const hospitalRoutes = {
  get: "/hospital/all",
  getOne: "/hospital",
  update: "/hospital/update",
  delete: "/hospital/delete",
  create: "/hospital/create",
};

export type GetAllResponse = {
  hospital: IHospital[];
};

export type GetOneResponse = {
  hospital: IHospital;
  message: string;
};

type UpdateResponse = {
  hospital: IHospital;
  message: string;
};

const { getAll, getOne, deleteOne, updateOne, createOne } = apiMethods;

const getAllHospital = async () => await getAll<GetAllResponse>(hospitalRoutes.get);

const getOneHospital = (id: string) =>
  getOne<GetOneResponse>(hospitalRoutes.getOne, id);

const updateHospital = (id: string, input: Partial<IHospital>) =>
  updateOne<UpdateResponse, Partial<IHospital>>(hospitalRoutes.update, id, input);

const deleteHospital = (id: string) =>
  deleteOne<GetOneResponse>(hospitalRoutes.delete, id);

const createHospital = (input: Omit<IHospital, "_id">) =>
  createOne<GetOneResponse, Omit<IHospital, "_id">>(hospitalRoutes.create, input);

export const hospitalClient = {
  getAllHospital,
  getOneHospital,
  updateHospital,
  createHospital,
  deleteHospital,
};
