import Link from "next/link";

export default function App({ Component }) {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      <Component />
    </div>
  );
}
