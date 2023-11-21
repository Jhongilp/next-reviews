import Link from "next/link";
export default function ReviewsPage() {
  return (
    <div>
      Reviews Page
      <nav>
        <ul className="flex flex-col gap-3">
          <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
            <Link href="/reviews/item1">
              {" "}
              <img
                src="/images/hollow-knight.jpg"
                width="320"
                height="180"
                alt=""
                className="mb-2 rounded-t"
              />
              <h2 className="py-1 text-center">Hollow-knight</h2>
            </Link>
          </li>
          <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
            <Link href="/reviews/item2">
              {" "}
              <img
                src="/images/hellblade.jpg"
                width="320"
                height="180"
                alt=""
                className="mb-2 rounded-t"
              />
              <h2 className="py-1 text-center">Hellblade</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
