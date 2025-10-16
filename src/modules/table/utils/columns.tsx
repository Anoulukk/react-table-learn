import { ColumnDef } from '@tanstack/react-table'
import { Person } from '../Table'

// Explicitly define <Person, unknown> as the generic type
export const columns: ColumnDef<Person, unknown>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    filterFn: 'equalsString',
  },
  {
    accessorKey: 'firstName',
    header: 'First Name',
    cell: info => info.getValue(),
    filterFn: 'includesStringSensitive',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
    cell: info => info.getValue(),
    filterFn: 'includesString',
  },
 
]
