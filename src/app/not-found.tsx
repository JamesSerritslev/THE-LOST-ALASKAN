import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "36rem" }}>
        <p className="section-label">404</p>
        <h1 className="display" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: "0 0 1rem" }}>
          Page not found
        </h1>
        <p className="lead">
          The page you requested does not exist or has been moved.
        </p>
        <Link href="/" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>
          Back to home
        </Link>
      </div>
    </section>
  );
}
