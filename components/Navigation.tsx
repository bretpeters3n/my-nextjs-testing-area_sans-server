import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="flex flex-row justify-start bg-blue-200 gap-2 p-2">
      <Link
        className="text-black border-black border border-solid rounded px-1"
        href="/"
      >
        Home
      </Link>
      {/* <Link href="/db">Database</Link>
      <Link href={`/lists`}>Lists</Link> */}
      <Link
        className="text-black border-black border border-solid rounded px-1"
        href={`/reorder`}
      >
        Reorder
      </Link>
      <Link
        className="text-black border-black border border-solid rounded px-1"
        href={`/snap`}
      >
        Snap
      </Link>
      {/* <Link href={`/read`}>Read</Link> */}
    </nav>
  )
}

export default Navigation
