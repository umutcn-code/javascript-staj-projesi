import { NavLink } from "react-router-dom";

const navigationItems = [
  { to: "/", label: "Dashboard" },
  { to: "/tasks", label: "Görevler" },
  { to: "/tasks/new", label: "Yeni Görev" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-600 text-lg font-bold text-white">
            TF
          </span>
          <div>
            <p className="text-base font-bold text-slate-950">TaskFlow</p>
            <p className="hidden text-xs text-slate-500 sm:block">Görev takip paneli</p>
          </div>
        </NavLink>

        <nav className="flex items-center gap-1 sm:hidden">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-md px-2 py-2 text-xs font-semibold transition ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
