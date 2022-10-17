import TableInfo from "./TableInfo";
import TableControls from "./TableControls";
import { TObj } from "./types";

const Table = ({ headers, data }: TObj) => {

  return (
    <div className="table_container">
    <div className="table">
      <TableControls 
      />
      <TableInfo data={data} headers={headers} />
    </div>
    </div>
  );
};

export default Table;
