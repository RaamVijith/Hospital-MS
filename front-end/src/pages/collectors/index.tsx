import CollectorTable from "./CollectorTable";
import AddButton from "../../components/buttons/AddButton";
import AddCollectorModal from "./modals/AddCollectorModal";
import Druft from "./druft";

const Collectors = () => {
  return (
    <div>
      <AddButton title="add new collector" />
      <AddCollectorModal />
      <CollectorTable />
      <Druft/>
    </div>
  );
};

export default Collectors;
