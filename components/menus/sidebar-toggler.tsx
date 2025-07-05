import { FiSidebar } from "react-icons/fi";

export function SidebarToggler() {
  return (
    <nav className="p-3 bg-[#F8F8FF] shadow-xl flex items-center space-x-2">
      <FiSidebar className="text-4xl p-2 rounded hover:bg-neutral-300 transition-all" />
      <p>Thank you for using this website.</p>
    </nav>
  );
}
