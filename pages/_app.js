import Link from "next/link";

export default function App({ Component }) {
  return (
    <div>
      <nav
        style={{
          background: "#ccc",
          padding: "5px"
        }}
      >
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
