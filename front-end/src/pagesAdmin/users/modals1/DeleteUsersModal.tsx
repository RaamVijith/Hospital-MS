import Modal from "../../../components/modals/MainModal";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useGlobalContext } from "../../../context/GlobalContext";
import { useUsersContext } from "../../../context/UsersContext";
import { useMutation, useQueryClient } from "react-query";
import { usersClient } from "../../../api/users";
import CircularProgress from "@mui/material/CircularProgress";

const DeleteUsersModel = () => {
  const { setDeleteModalOpen, setLoading, setSnackMessage, setSnackOpen } =
    useGlobalContext();
  const { deleteUsers } = usersClient;
  const { selectedUsers } = useUsersContext();

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(
    async () => await deleteUsers(selectedUsers?._id!),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("all users");
        setLoading(false);
        setSnackMessage(data.message);
        setSnackOpen(true);
      },
      onError: (error: any) => {
        console.log(error);
        setSnackMessage(error.message);
        setSnackOpen(true);
      },
      onSettled: () => {
        setLoading(false);
        setDeleteModalOpen(false);
      },
    }
  );

  return (
    <Modal title="delete users" type="delete">
      <DialogContent>
        <DialogContentText>
          Do you want to delete this User from your list?
        </DialogContentText>
        <DialogActions>
          <Button
            onClick={() => setDeleteModalOpen(false)}
            variant="outlined"
            color="warning"
          >
            cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => mutate()}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress /> : "delete"}
          </Button>
        </DialogActions>
      </DialogContent>
    </Modal>
  );
};

export default DeleteUsersModel;
