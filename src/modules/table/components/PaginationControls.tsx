export default function PaginationControls({ table }: { table: any }) {
  return (
    <div className="flex items-center gap-2 justify-between">
      <span className="flex items-center gap-1 text-sm">
        <div>Page</div>
        <p>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </p>
      </span>

      <div className="gap-2 flex items-center">
        {/* <button className="border rounded p-1" onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
        {'<<'}
      </button> */}
        <button
          className="btn-primary border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:-scale-x-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          {"Previous"}
        </button>
        <button
          className="btn-primary border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {"Next"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:-scale-x-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
        {/* <button className="border rounded p-1" onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
        {'>>'}
      </button> */}
        {/* <span>{table.getPrePaginationRowModel().rows.length} Rows</span> */}
          <select
            className="select-primary"
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
      </div>
    </div>
  );
}
