import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function PaginationControls({ table }: { table: any }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full flex-wrap">
      {/* Page info */}
      <span className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300">
        <span>Page</span>
        <p className="font-medium">
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </p>
      </span>

      {/* Pagination controls */}
      <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
         <Button variant="outline" onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
     {'<<'}
    </Button>
        <Button
          variant="outline"
          aria-label="Go Back"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="flex items-center gap-1 text-sm"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Previous
        </Button>

        <Button
          variant="outline"
          aria-label="Go Forward"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="flex items-center gap-1 text-sm"
        >
          Next
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      <Button variant="outline" onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
      {'>>'}
      </Button>
        <Select
          value={String(table.getState().pagination.pageSize)}
          onValueChange={(value) => table.setPageSize(Number(value))}
        >
          <SelectTrigger className="w-[140px] sm:w-[160px]">
            <SelectValue placeholder="Rows per page" />
          </SelectTrigger>
          <SelectContent>
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={String(pageSize)}>
                Show {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
