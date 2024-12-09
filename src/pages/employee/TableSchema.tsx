
import React from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "../../components/ui/data-table-header"


export type Employee = {
  id: string
  phone: string
  status: "pending" | "active" | "inactive"
  email: string, 
  location: string,
  role: string
}

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} hasHide={false} title="Email" />
    ),
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} hasHide={false} title="Phone" />
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} hasHide={true} title="Status" />
    ),
  },
  {
    accessorKey: "location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} hasHide={true} title="Location" />
    ),
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} hasHide={true} title="Role" />
    ),
  },
]
