import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <p className="text-xs tracking-[0.2em] mb-4">ROMEAH</p>
        <h1 className="font-serif text-4xl mb-6">Sign In</h1>
        <p className="text-sm text-black/55 mb-10 leading-7">
          Auth UI scaffold. Connect Supabase Auth when the storefront experience
          is locked.
        </p>
        <form className="space-y-4 text-left">
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
            SIGN IN
          </button>
        </form>
        <p className="mt-8 text-sm text-black/55">
          Need an account?{" "}
          <Link href="/register" className="underline">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
