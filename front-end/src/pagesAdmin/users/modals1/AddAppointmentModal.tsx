import Modal from "../../../components/modals/MainModal";
import DialogContent from "@mui/material/DialogContent";
import AddAppointmentForm from "../forms1/AddAppointmentForm";

const AddAppointmentModal = () => {
  return (
    <Modal title="add new appointment" type="add">
      <DialogContent>
        <AddAppointmentForm />
      </DialogContent>
    </Modal>
  );
};

export default AddAppointmentModal;
