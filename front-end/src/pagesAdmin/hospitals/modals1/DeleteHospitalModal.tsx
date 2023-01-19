import Modal from "../../../components/modals/MainModal";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useGlobalContext } from "../../../context/GlobalContext";
import { useHospitalContext } from "../../../context/HospitalContext";
import { useMutation, useQueryClient } from "react-query";
import { hospitalClient } from "../../../api/hospital";
import CircularProgress from "@mui/material/CircularProgress";

const DeleteHospitalModel = () => {
  const { setDeleteModalOpen, setLoading, setSnackMessage, setSnackOpen } =
    useGlobalContext();
  const { deleteHospital } = hospitalClient;
  const { selectedHospital } = useHospitalContext();

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(
    async () => await deleteHospital(selectedHospital?._id!),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("all hospital");
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
    <Modal title="delete hospital" type="delete">
      <DialogContent>
        <DialogContentText>
          Do you want to delete this Hospital from your list?
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

export default DeleteHospitalModel;
