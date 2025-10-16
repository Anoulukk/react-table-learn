import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export type Person = {
  id: string;
  firstName: string;
  lastName: string;
};

// Custom component inside the cell to handle modal logic
export default function ModalEdit({
  open,
  editMode,
  onOpenChange,
  person,
}: any) {
  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle>
              {editMode ? "Edit Person" : "View details"}
            </DialogTitle>
          </DialogHeader>

          <form className="space-y-4 mt-4">
            <div>
              <label className="text-sm font-medium">First Name</label>
              <input
                type="text"
                defaultValue={person.firstName}
                className="w-full mt-1 border rounded-md p-2 text-sm"
                disabled={!editMode}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Last Name</label>
              <input
                type="text"
                defaultValue={person.lastName}
                className="w-full mt-1 border rounded-md p-2 text-sm"
                disabled={!editMode}
              />
            </div>
            {editMode && (
              <div className="flex justify-end gap-2">
                <Button
                  variant="ghost"
                  onClick={() => onOpenChange(false)}
                  type="button"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    // TODO: handle save here
                    console.log("Saved changes for:", person.id);
                    onOpenChange(false);
                  }}
                  type="button"
                >
                  Save
                </Button>
              </div>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
