import Modal from "../../../components/modals/MainModal";
import DialogContent from "@mui/material/DialogContent";
import EditHospitalForm from "../forms1/EditHospitalForm";

const EditHospitalModel = () => {
  return (
    <Modal title="edit Hospital" type="edit">
      <DialogContent>
        <EditHospitalForm />
      </DialogContent>
    </Modal>
  );
};

export default EditHospitalModel;
