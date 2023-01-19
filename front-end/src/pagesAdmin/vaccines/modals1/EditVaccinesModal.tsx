import Modal from "../../../components/modals/MainModal";
import DialogContent from "@mui/material/DialogContent";
import EditVaccineForm from "../forms1/EditVaccinesForm";

const EditVaccineModel = () => {
  return (
    <Modal title="edit Vaccines" type="edit">
      <DialogContent>
        <EditVaccineForm />
      </DialogContent>
    </Modal>
  );
};

export default EditVaccineModel;
