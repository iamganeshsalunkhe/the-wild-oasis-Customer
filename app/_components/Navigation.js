import Link from "next/link"

function Navigation() {
    return (
      <ul>
        <li>
          <Link href="/">Home Page</Link>
        </li>
        <li>
          <Link href="/cabins">Explore Luxury cabins</Link>
        </li>
        <li>
          <Link href="/about">Explore about the wild oasis</Link>
        </li>
      </ul>
    );
}
export default Navigation