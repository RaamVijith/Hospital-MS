import { IAppointment, apiMethods } from "./clients";

const appointmentRoutes = {
  get: "/appointment/all",
  getOne: "/appointment",
  update: "/appointment/update",
  delete: "/appointment/delete",
  create: "/appointment/create",
};

export type GetAllResponse = {
    appointment: IAppointment[];
};

export type GetOneResponse = {
    appointment: IAppointment;
  message: string;
};

type UpdateResponse = {
    appointment: IAppointment;
  message: string;
};

const { getAll, getOne, deleteOne, updateOne, createOne } = apiMethods;

const getAllAppointment = async () => await getAll<GetAllResponse>(appointmentRoutes.get);

const getOneAppointment = (id: string) =>
  getOne<GetOneResponse>(appointmentRoutes.getOne, id);

const updateAppointment = (id: string, input: Partial<IAppointment>) =>
  updateOne<UpdateResponse, Partial<IAppointment>>(appointmentRoutes.update, id, input);

const deleteAppointment = (id: string) =>
  deleteOne<GetOneResponse>(appointmentRoutes.delete, id);

const createAppointment = (input: Omit<IAppointment, "_id">) =>
  createOne<GetOneResponse, Omit<IAppointment, "_id">>(appointmentRoutes.create, input);

export const appointmentClient = {
  getAllAppointment,
  getOneAppointment,
  updateAppointment,
  createAppointment,
  deleteAppointment,
};
