import Spinner from "react-bootstrap/esm/Spinner";
import DataTable from "react-data-table-component";

interface TableProps {
  Title: string;
  Data: any;
  Column: any;
  loading: boolean;
  OnClickRow?: any;
}
const customStyles = {
  rows: {
    style: {
      borderLeft: "1px solid",
      borderRight: "1px solid",
      borderBottom: "1px solid",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      backgroundColor: "Gray",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.25em",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
};

const Table = ({ Title, Data, Column, loading, OnClickRow }: TableProps) => {
  return (
    <DataTable
      title={Title}
      columns={Column}
      data={Data}
      defaultSortFieldId={1}
      pagination
      selectableRows
      onRowClicked={OnClickRow}
      pointerOnHover={true}
      progressPending={loading}
      progressComponent={<Spinner animation="border" />}
      highlightOnHover
      customStyles={customStyles}
    />
  );
};
export default Table;
