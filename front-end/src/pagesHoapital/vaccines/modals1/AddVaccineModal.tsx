import Modal from "../../../components/modals/MainModal";
import DialogContent from "@mui/material/DialogContent";
import AddVaccineForm from "../forms1/AddVaccineForm";

const AddVaccineModal = () => {
  return (
    <Modal title="add new Vaccine" type="add">
      <DialogContent>
        <AddVaccineForm />
      </DialogContent>
    </Modal>
  );
};

export default AddVaccineModal;
