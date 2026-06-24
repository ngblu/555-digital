import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,30,46,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(30,30,46,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glitch 404 */}
      <div className="relative mb-8 select-none">
        <h1 className="text-[120px] md:text-[180px] font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-none">
          404
        </h1>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
        Page Not Found
      </h2>
      <p className="text-text-secondary text-center max-w-md mb-8">
        The page you&apos;re looking for has been moved, deleted, or never
        existed.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-primary text-background font-semibold px-8 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300"
        >
          Go Home
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center border border-border text-text-primary font-semibold px-8 py-3 rounded-lg hover:border-primary/50 transition-all duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
