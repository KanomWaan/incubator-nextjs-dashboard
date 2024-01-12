import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:flex h-screen mx-auto ">
      <div>
        <SideNav />
      </div>
      <div className="w-full p-6">{children}</div>
    </div>
  );
}
