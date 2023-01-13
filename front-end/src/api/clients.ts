import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-type": "application/json",
  },
});

export interface IUsers {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  age: string;
  gender:string;
  address:string
  mobile_no:string;
  appointment:IAppointment;
  hospital:IHospital;
  vaccine:IVaccine;
  vaccine_Dose:IVaccineDose;
}

export interface IAppointment {
  _id: string;
  no:string;
  date: string;
  time: string;
  status: string;
  hospital:string;
  type:string;
}

export interface IHospital {
  _id: string;
  name: string;
  email:string;
  address: string;
  available_vaccine:string;
}

export interface IVaccine {
  _id: string;
  name: string;
  quantity:string;
  type:string;
  hospital:IHospital;
}

export interface IMyVaccine {
  _id: string;
  name: string;
  quantity:string;
  doses:string;
  date:string;
}

export interface IVaccineDose{
  _id:string;
  name:string;
  status:string;

}

// client queries
const getAll = async <T>(route: string) => {
  const response = await apiClient.get<T>(route);
  return response.data;
};

const getOne = async <T>(route: string, params: string) => {
  const response = await apiClient.get<T>(route, {
    params,
  });
  return response.data;
};

const updateOne = async <T, K>(route: string, params: string, update: K) => {
  const response = await apiClient.patch<T>(`${route}/${params}`, {
    input: { ...update },
  });
  return response.data;
};

const deleteOne = async <T>(route: string, params: string) => {
  const response = await apiClient.delete<T>(`${route}/${params}`);
  return response.data;
};

const createOne = async <T, K>(route: string, body: K) => {
  const response = await apiClient.post<T>(route, {
    input: {
      ...body,
    },
  });
  return response.data;
};


export const apiMethods = { getAll, getOne, updateOne, deleteOne, createOne };
