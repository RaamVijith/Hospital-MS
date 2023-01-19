import Modal from "../../../components/modals/MainModal";
import DialogContent from "@mui/material/DialogContent";
import AddHospitalForm from "../forms1/AddHospitalForm";

const AddHospitalModal = () => {
  return (
    <Modal title="add new Hospital" type="add">
      <DialogContent>
        <AddHospitalForm />
      </DialogContent>
    </Modal>
  );
};

export default AddHospitalModal;
