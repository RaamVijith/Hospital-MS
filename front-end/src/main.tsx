import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Appointment from "./pages/appointment";
import Hospitals from "./pages/hospitals";
import Vaccines from "./pages/vaccines";
import Setting from "./pages/setting";
import MyAccount from "./pages/myAccount";
import WelcomePage from "./pages_welcome/welcomePage";
import GlobalContextProvider from "./context/GlobalContext";
import Layout from "./components/layout";
import LoginPage from "./pages_welcome/loginPage";
import AboutPage from "./pages_welcome/aboutPage";
import ContactPage from "./pages_welcome/contactPage";
import RegisterPage from "./pages_welcome/registerPage";
import MyVaccines from "./pages/myVaccines";

import LayoutHospital from "./components/layoutHospital";
import AppointmentHP from "./pagesHoapital/appointment";
import UserHP from "./pagesHoapital/users";
import VaccinesHP from "./pagesHoapital/vaccines";
import SettingHP from "./pagesHoapital/setting";
import MyAccountHP from "./pagesHoapital/myAccount";

import LayoutAdmin from "./components/layoutAdmin";
import HospitalsAD from "./pagesAdmin/hospitals";
import UserAD from "./pagesAdmin/users";
import VaccinesAD from "./pagesAdmin/vaccines";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  
  <React.StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>

             <Route path="/" element={<WelcomePage/>} />
             <Route path="/login" element={<LoginPage/>} />  
             <Route path="/about" element={<AboutPage/>} />             
             <Route path="/contact" element={<ContactPage/>} /> 
             <Route path="/register" element={<RegisterPage/>} />    

            <Route path="/appointment" element={<Layout><Appointment/></Layout>} />
            <Route path="/hospitals" element={<Layout><Hospitals/></Layout>} />
            <Route path="/vaccines" element={<Layout><Vaccines/></Layout>} />
            <Route path="/myVaccine" element={<Layout><MyVaccines/></Layout>} />
            <Route path="/setting" element={<Layout><Setting/></Layout>} />
            <Route path="/myAccount" element={<Layout><MyAccount/></Layout>} />

            <Route path="/appointmentHP" element={<LayoutHospital><AppointmentHP/></LayoutHospital>} />
            <Route path="/userHP" element={<LayoutHospital><UserHP/></LayoutHospital>} />
            <Route path="/vaccinesHP" element={<LayoutHospital><VaccinesHP/></LayoutHospital>} />
            <Route path="/settingHP" element={<LayoutHospital><SettingHP/></LayoutHospital>} />
            <Route path="/myAccountHP" element={<LayoutHospital><MyAccountHP/></LayoutHospital>} />

            <Route path="/userAD" element={<LayoutAdmin><UserAD/></LayoutAdmin>} />
            <Route path="/vaccinesAD" element={<LayoutAdmin><VaccinesAD/></LayoutAdmin>} />
            <Route path="/hospitalsAD" element={<LayoutAdmin><HospitalsAD/></LayoutAdmin>} />


          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  </React.StrictMode>
);
