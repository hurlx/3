import { navLinks } from "../constants";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="w-screen fixed top-0 left-0 z-50">
      <nav className="container mx-auto flex items-center justify-between min-h-[7vh] px-5 2xl:px-0">
          <img
            className="cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
            src="/logo.svg"
            alt="Logo"
          />
        <ul className="flex items-center justify-center gap-8 mx-auto">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="block text-black/80 opacity-80 font-regular text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
