import MobileHeader from "@/components/MobileHeader";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MobileHeader />
      <SideBar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <NavBar />
        <div className="h-screen">{children}</div>
      </main>
    </>
  );
}
