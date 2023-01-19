import {
  Button,
  Grid,
  TextField,
  DialogActions,
  Select,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Formik } from "formik";
import { useMutation, useQueryClient } from "react-query";
import { IShop } from "../../../api/Demo/client";
import { shopClient } from "../../../api/Demo/shops";
import { useGlobalContext } from "../../../context/GlobalContext";

const initialValues = {
  name: "",
  address: "",
  region: "",
};

const REGIONS = ["region a", "region b", "region c", "region d"];

const AddShopForm = () => {
  const { setAddModalOpen, setLoading, setSnackMessage, setSnackOpen } =
    useGlobalContext();
  const { createShop } = shopClient;
  const { isLoading, mutate } = useMutation(
    async (input: Omit<IShop, "_id">) => await createShop(input)
  );

  const queryClient = useQueryClient();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        if (isLoading) setLoading(true);
        mutate(
          { ...values },
          {
            onSuccess: (data) => {
              queryClient.invalidateQueries("all shops");

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
              setAddModalOpen(false);
              resetForm();
            },
          }
        );
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <Grid container rowGap={1} columnGap={1}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  name="name"
                  label="Name"
                  fullWidth
                  value={values.name}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>select region</InputLabel>
                <Select
                  onChange={handleChange}
                  fullWidth
                  name="region"
                  value={values.region}
                >
                  {REGIONS.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  name="address"
                  label="Address"
                  fullWidth
                  value={values.address}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
          </Grid>
          <DialogActions>
            <Button variant="contained" type="submit">
              {isLoading ? <CircularProgress /> : "add"}
            </Button>
            <Button
              onClick={() => setAddModalOpen(false)}
              variant="outlined"
              color="error"
            >
              cancel
            </Button>
          </DialogActions>
        </form>
      )}
    </Formik>
  );
};

export default AddShopForm;
