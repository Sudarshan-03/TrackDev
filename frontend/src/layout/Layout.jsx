// src/layout/Layout.jsx
import Navbar from "../components/navbar/navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}

export default Layout;