import Link from 'next/link'

const ListingsContainer = () => {
  return (
    <div className="listings-container">
      <ul>
        <li>
          <Link href="/listing/1">
            <a>Go to listing/1</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default ListingsContainer
