import Modal from "../../../components/modals/MainModal";
import DialogContent from "@mui/material/DialogContent";
import EditAppointmentForm from "../forms1/EditShopForm";

const EditAppointmentModel = () => {
  return (
    <Modal title="edit Appointment" type="edit">
      <DialogContent>
        <EditAppointmentForm />
      </DialogContent>
    </Modal>
  );
};

export default EditAppointmentModel;
