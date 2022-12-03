import Spinner from "react-bootstrap/esm/Spinner";
import DataTable from "react-data-table-component";

interface TableProps {
  Title: string;
  Data: any;
  Column: any;
  loading: boolean;
  OnClickRow?: any;
}

function Table({ Title, Data, Column, loading, OnClickRow }: TableProps) {
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
    />
  );
}
export default Table;
