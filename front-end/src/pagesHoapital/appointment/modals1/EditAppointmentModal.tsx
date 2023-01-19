import Modal from "../../../components/modals/MainModal";
import DialogContent from "@mui/material/DialogContent";
import EditAppointmentHPForm from "../forms1/EditAppointmentHPForm";

const EditAppointmentModel = () => {
  return (
    <Modal title="edit Appointment" type="edit">
      <DialogContent>
        <EditAppointmentHPForm />
      </DialogContent>
    </Modal>
  );
};

export default EditAppointmentModel;
