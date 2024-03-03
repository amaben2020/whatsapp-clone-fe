import React from "react";
import Sidebar from "../components/sidebar/Sidebar/Sidebar";
import SidebarHeader from "../components/sidebar/Sidebar/Sidebar.Header";

const PageLayout = ({ children }) => {
  return (
    <div>
      <header className="block w-full p-5 text-white bg-black">
        <nav>LOGOUT</nav>
      </header>
      <div className="flex min-h-screen p-10 bg-gray-800 gap-x-6">
        <aside className="w-[40%] border ">
          <Sidebar header={<SidebarHeader />} />
        </aside>
        <section>{children}</section>
      </div>
    </div>
  );
};

export default PageLayout;
