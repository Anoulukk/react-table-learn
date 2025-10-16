import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'


export type Person = {
  id: string
  firstName: string
  lastName: string
}

// Custom component inside the cell to handle modal logic
function ModalEdit({ person }: { person: Person }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1"
      >
        Edit
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Person</DialogTitle>
          </DialogHeader>

          <form className="space-y-4 mt-4">
            <div>
              <label className="text-sm font-medium">First Name</label>
              <input
                type="text"
                defaultValue={person.firstName}
                className="w-full mt-1 border rounded-md p-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Last Name</label>
              <input
                type="text"
                defaultValue={person.lastName}
                className="w-full mt-1 border rounded-md p-2 text-sm"
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setOpen(false)} type="button">
                Cancel
              </Button>
              <Button
                onClick={() => {
                  // TODO: handle save here
                  console.log('Saved changes for:', person.id)
                  setOpen(false)
                }}
                type="button"
              >
                Save
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
