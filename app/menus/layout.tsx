import { MenuSidebar } from "@/components/menus/sidebar";
import { SidebarToggler } from "@/components/menus/sidebar-toggler";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <MenuSidebar />
      <div className="grow">
        <SidebarToggler />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
