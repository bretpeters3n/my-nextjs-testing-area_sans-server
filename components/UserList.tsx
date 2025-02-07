import { useState } from 'react'
import UserItem from './UserItem'
import { User } from '@/types'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'

const dummyData: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alicejohnson@example.com',
  },
  {
    id: 4,
    name: 'John Smith',
    email: 'johnsmith@example.com',
  },
  {
    id: 5,
    name: 'Jane Doe',
    email: 'janedoe@example.com',
  },
  {
    id: 6,
    name: 'Alice In Wonderland',
    email: 'aliceinwonderland@example.com',
  },
]

const UserList = () => {
  const [userData, setUserData] = useState<User[]>(dummyData)
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (over && active.id !== over.id) {
      setUserData((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <div className="max-w-2xl mx-auto grid gap-2 mt-4">
      <h2 className="text-2xl font-bold-mb-4">User List</h2>
      <DndContext
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={userData}>
          {userData.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  )
}

export default UserList
