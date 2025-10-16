import { ColumnDef } from "@tanstack/react-table";
import { Person } from "../Table";
import ModalEdit from "../components/ModalEdit";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
// Explicitly define <Person, unknown> as the generic type
export const columns: ColumnDef<Person, unknown>[] = [
  {
    accessorKey: "id",
    header: "ID",
    filterFn: "equalsString",
  },
  {
    accessorKey: "firstName",
    header: "First Name",
    cell: (info) => info.getValue(),
    filterFn: "includesStringSensitive",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
    cell: (info) => info.getValue(),
    filterFn: "includesString",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const [open, setOpen] = useState(false)
      const [editMode, setEditMode] = useState(false)

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => {setOpen(true), setEditMode(false)}}>View details</DropdownMenuItem>
              <DropdownMenuItem onClick={() => {setOpen(true), setEditMode(true)}}>Edit</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Modal shown when clicking "Edit" */}
          <ModalEdit open={open} editMode={editMode} onOpenChange={setOpen} person={row.original} />
        </>
      )
    },
    enableSorting: false,
    enableColumnFilter: false,
    size: 100, // optional: defines column width
  },
];
