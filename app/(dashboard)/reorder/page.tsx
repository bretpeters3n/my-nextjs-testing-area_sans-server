"use client"

import { useState } from "react"
import { DndContext } from "@dnd-kit/core"
import { SortableContext } from "@dnd-kit/sortable"
import UserList from "@/components/UserList"

const ReorderPage = () => {
  const [items, setItems] = useState([
    { id: "item1" },
    { id: "item2" },
    { id: "item3" },
  ])

  return (
    <main className="">
      <div className="text-4xl">Reorder</div>
      <UserList />
    </main>
  )
}

export default ReorderPage
