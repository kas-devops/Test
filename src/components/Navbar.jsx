import { useState } from "react";

export default function Navbar() {
    const [active, setActive] = useState("Home");
    const navItems = ["Home", "About", "Services", "Gallery", "Contact"];

    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src="/Mita-Logo.png"
                        alt="Makeup Studio Logo"
                        className="
                          h-14 w-auto
                          md:h-16
                          object-contain
                        "
                    />
                    {/* <img
                        src="/logo-mk.png"
                        alt="Makeup Studio Logo"
                        className="h-16 md:h-20 w-auto max-w-full object-contain"
                    /> */}
                    <h1 className="font-heading text-xl md:text-2xl tracking-wide text-gray-900">
                        Makeup Studio
                    </h1>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-10 text-[13px] tracking-wider text-gray-800">
                    {navItems.map((item) => (
                        <span
                            key={item}
                            onClick={() => setActive(item)}
                            className={`
                              cursor-pointer
                              pb-1
                              transition-none
                              ${active === item
                                    ? "border-b-[2px] border-primary font-medium"
                                    : ""
                                }
                            `}
                        >
                            {item}
                        </span>
                    ))}
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                            />
                        </svg>
                    </label>

                    <ul className="menu dropdown-content mt-3 p-4 shadow-md bg-white rounded-md w-48">
                        {navItems.map((item) => (
                            <li key={item}>
                                <span
                                    onClick={() => setActive(item)}
                                    className={`
                                      cursor-pointer
                                      py-2
                                      ${active === item
                                            ? "border-b-2 border-primary font-medium"
                                            : ""
                                        }
                                    `}
                                >
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </header>
    );
}
