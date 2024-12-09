import React from "react";

import Layout from "../layout/Layout";
import { DataTable } from "../../components/ui/data-table";
import { columns } from "./TableSchema";
import AddEmployee from "./AddEmployee";

const data = [
  {
    id: "728ed52f",
    phone: "0978787879",
    status: "pending",
    email: "m@example.com",
    location: "Addis Ababa, Ayat", 
    role: "Sales"
  },
  {
    id: "728ed52f",
    phone: "0978787878",
    status: "active",
    email: "n@example.com",
    location: "Addis Ababa, Bole", 
    role: "Admin"
  },
  {
    id: "728ed52f",
    phone: "0978787880",
    status: "inactive",
    email: "o@example.com",
    location: "Addis Ababa, Century", 
    role: "Pharmacist"
  },
];

const Employee = () => {
  return (
    <Layout>
      <div>
        <DataTable columns={columns} data={data} title="Employee" AddButton={<AddEmployee />}/>
        
      </div>
    </Layout>
  );
};

export default Employee;
