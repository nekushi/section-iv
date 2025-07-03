import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-32 py-8 w-full bg-[#F8F8FF] flex justify-between items-center shadow-xl">
      <h1 className="uppercase font-bold text-3xl text-blue-500">bscs 4a</h1>
      <ul className="flex space-x-8 [&>li]:text-blue-500 [&>li]:font-semibold">
        <li className="hover:underline hover:underline-offset-2 hover:cursor-pointer origin-bottom hover:scale-105">
          Home
        </li>
        <li className="hover:underline hover:underline-offset-2 hover:cursor-pointer origin-bottom hover:scale-105">
          About
        </li>
        <li className="hover:underline hover:underline-offset-2 hover:cursor-pointer origin-bottom hover:scale-105">
          <Link href={"/auth/login"}>Login</Link>
        </li>
        <li className="hover:underline hover:underline-offset-2 hover:cursor-pointer origin-bottom hover:scale-105">
          <Link href={"/auth/signup"}>Register</Link>
        </li>
      </ul>
    </nav>
  );
}
