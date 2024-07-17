import { User } from '@/types'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { RxDragHandleDots2 } from 'react-icons/rx'

type UserItemProps = {
  user: User
}

const UserItem = (props: UserItemProps) => {
  const { user } = props
  const { id, name, email } = user
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-blue-200 p-4 rounded shadow-md flex justify-between text-black"
    >
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{email}</p>
      </div>
      <button {...attributes} {...listeners} className="cursor-move touch-none">
        <RxDragHandleDots2 />
      </button>
    </div>
  )
}

export default UserItem
