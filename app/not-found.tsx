import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-top">
      <div className="wrap">
        <h1>This page isn’t here</h1>
        <p className="lede">
          The link may be old or mistyped. Start from the home page or tell us what you were
          looking for.
        </p>
        <div className="btn-row">
          <Link href="/" className="btn btn--primary">Go to the home page</Link>
          <Link href="/contact/" className="btn">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
