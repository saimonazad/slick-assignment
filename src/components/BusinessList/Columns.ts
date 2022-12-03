const columns = [
  {
    name: "Id",
    selector: (row: Business) => row.id,
    sortable: true,
  },
  {
    name: "Operating Name",
    selector: (row: Business) => row.operatingName,
    sortable: true,
  },
  {
    name: "Legal Name",
    selector: (row: Business) => row.legalName,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row: Business) => row.email,
    sortable: true,
  },
  {
    name: "Phone",
    selector: (row: Business) => row.phone,
    sortable: true,
  },
];
export default columns;
