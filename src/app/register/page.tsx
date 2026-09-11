import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <p className="text-xs tracking-[0.2em] mb-4">ROMEAH</p>
        <h1 className="font-serif text-4xl mb-6">Create Account</h1>
        <form className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Full name"
            className="w-full border border-black/15 px-4 py-3 bg-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-black/15 px-4 py-3 bg-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-black/15 px-4 py-3 bg-white"
          />
          <button
            type="button"
            className="w-full bg-[#241F1C] text-white py-4 text-xs tracking-[0.15em]"
          >
            REGISTER
          </button>
        </form>
        <p className="mt-8 text-sm text-black/55">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
