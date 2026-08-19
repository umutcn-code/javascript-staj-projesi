import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";

export default function Layout({ storageError }) {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <Navbar />

      <div className="mx-auto flex w-full max-w-7xl gap-6 px-4 py-5 sm:px-6 lg:px-8">
        <Sidebar />

        <main className="min-w-0 flex-1">
          {storageError && (
            <div className="mb-4 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {storageError}
            </div>
          )}

          <Outlet />
        </main>
      </div>
    </div>
  );
}
