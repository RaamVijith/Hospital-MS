import Modal from "../../../components/modals/MainModal";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useGlobalContext } from "../../../context/GlobalContext";
import { useVaccineContext } from "../../../context/VaccinesContext";
import { useMutation, useQueryClient } from "react-query";
import { vaccineClient } from "../../../api/vaccine";
import CircularProgress from "@mui/material/CircularProgress";

const DeleteVaccineModel = () => {
  const { setDeleteModalOpen, setLoading, setSnackMessage, setSnackOpen } =
    useGlobalContext();
  const { deleteVaccine } = vaccineClient;
  const { selectedVaccine } = useVaccineContext();

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(
    async () => await deleteVaccine(selectedVaccine?._id!),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("all vaccine");
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
    <Modal title="delete vaccine" type="delete">
      <DialogContent>
        <DialogContentText>
          Do you want to delete this Vaccine from your list?
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

export default DeleteVaccineModel;
