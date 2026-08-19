import { NavLink } from "react-router-dom";

const navigationItems = [
  { to: "/", label: "Dashboard", description: "Genel durum" },
  { to: "/tasks", label: "Görevler", description: "Listele ve yönet" },
  { to: "/tasks/new", label: "Yeni Görev", description: "Kayıt oluştur" },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 sm:block">
      <div className="sticky top-21 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 transition ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              <span className="block text-sm font-semibold">{item.label}</span>
              <span className="mt-0.5 block text-xs opacity-80">{item.description}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
