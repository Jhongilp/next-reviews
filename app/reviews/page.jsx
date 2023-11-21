import Link from 'next/link'
export default function ReviewsPage() {
  return (
    <div>
      Reviews Page

      <nav>
        <ul>
          <li>
            <Link href="/reviews/item1">Item 1</Link>
          </li>
          <li>
            <Link href="/reviews/item2">Item 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}