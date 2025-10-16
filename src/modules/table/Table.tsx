// import { useEffect, useState } from "react";
// import {
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
//   PaginationState,
// } from "@tanstack/react-table";
// import { fuzzyFilter } from "./utils/fuzzyUtils";
// import { columns } from "./utils/columns";
// import { DebouncedInput } from "./components/DebouncedInput";
// import PaginationControls from "./components/PaginationControls";
// import Header from "./components/Header";
// import { getData } from "./utils/request";

// export type Person = {
//   id: number;
//   firstName: string;
//   lastName: string;
//   fullName?: string;
// };

// export default function MyTable() {
//   const [globalFilter, setGlobalFilter] = useState("");
//   const [pagination, setPagination] = useState<PaginationState>({
//     pageIndex: 0,
//     pageSize: 10,
//   });

//   const [data, setData] = useState<Person[]>([]);

//   useEffect(() => {
//     getData().then(setData);
//   }, []);

//   const table = useReactTable({
//     data,
//     columns,
//     filterFns: {
//       fuzzy: fuzzyFilter,
//     },
//     state: {
//       globalFilter,
//       pagination,
//     },
//     onGlobalFilterChange: setGlobalFilter,
//     globalFilterFn: "fuzzy",
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     onPaginationChange: setPagination,
//   });

//   useEffect(() => {
//     if (table.getState().columnFilters[0]?.id === "fullName") {
//       if (table.getState().sorting[0]?.id !== "fullName") {
//         table.setSorting([{ id: "fullName", desc: false }]);
//       }
//     }
//   }, [table.getState().columnFilters[0]?.id]);

//   return (
//     <>
//     <div className="p-2">
//       <div>
//         <DebouncedInput
//           value={globalFilter ?? ""}
//           onChange={(value) => setGlobalFilter(String(value))}
//           className="p-2 font-lg shadow border border-block"
//           placeholder="Search all columns..."
//         />
//       </div>

//       <div className="h-2" />
//       <table className="">
//         <Header table={table} />
//         <tbody>
//           {table.getRowModel().rows.map((row) => (
//             <tr key={row.id}>
//               {row.getVisibleCells().map((cell) => (
//                 <td key={cell.id}>
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="h-2" />
//       <PaginationControls table={table} />
//     </div>
//     </>
//   );
// }
import { useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  PaginationState,
} from "@tanstack/react-table";
import { fuzzyFilter } from "./utils/fuzzyUtils";
import { columns } from "./utils/columns";
import { DebouncedInput } from "./components/DebouncedInput";
import PaginationControls from "./components/PaginationControls";
import Header from "./components/Header";
import { getData } from "./utils/request";

export type Person = {
  id: number;
  firstName: string;
  lastName: string;
  fullName?: string;
};

export default function MyTable() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [data, setData] = useState<Person[]>([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      globalFilter,
      pagination,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "fuzzy",
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
  });

  useEffect(() => {
    if (table.getState().columnFilters[0]?.id === "fullName") {
      if (table.getState().sorting[0]?.id !== "fullName") {
        table.setSorting([{ id: "fullName", desc: false }]);
      }
    }
  }, [table.getState().columnFilters[0]?.id]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-4 rounded-2xl shadow-md border border-gray-200">
        {/* Search Input */}
        <div className="mb-4">
          <DebouncedInput
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            className="p-2 rounded-lg border border-gray-300 shadow-sm "
            placeholder="🔍 Search all columns..."
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm text-gray-800">
            <Header table={table} />
            <tbody className="">
              {table.getRowModel().rows.map((row, i) => (
                <tr
                  key={row.id}
                  className={`${
                    i % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition-colors duration-150`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-3 text-gray-700 whitespace-nowrap border-r border-gray-100 last:border-0"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
          <PaginationControls table={table} />
      </div>
    </div>
  );
}
