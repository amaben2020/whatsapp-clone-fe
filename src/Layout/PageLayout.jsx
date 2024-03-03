import React from "react";
import Notification from "../components/Notification/Notification";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarHeader from "../components/Sidebar/Sidebar.Header";

const PageLayout = ({ children }) => {
  return (
    <div>
      <header className="block w-full p-5 text-white bg-black">
        <nav>LOGOUT</nav>
      </header>
      <div className="flex min-h-screen bg-gray-800 gap-x-6">
        <aside className="w-[40%] border ">
          <Sidebar
            header={<SidebarHeader />}
            notification={
              <Notification text="Get notified of every new stuff" />
            }
          />
        </aside>
        <section>{children}</section>
      </div>
    </div>
  );
};

export default PageLayout;
