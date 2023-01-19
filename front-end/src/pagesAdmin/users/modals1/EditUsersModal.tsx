import Modal from "../../../components/modals/MainModal";
import DialogContent from "@mui/material/DialogContent";
import EditUsersForm from "../forms1/EditUsersForm";

const EditUsersModel = () => {
  return (
    <Modal title="edit User" type="edit">
      <DialogContent>
        <EditUsersForm />
      </DialogContent>
    </Modal>
  );
};

export default EditUsersModel;
