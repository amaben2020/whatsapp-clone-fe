import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import Conversations from "../Views/Conversations";
import Input from "../components/Input/Input";
import Notification from "../components/Notification/Notification";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarHeader from "../components/Sidebar/Sidebar.Header";
import { searchSchema } from "../schema/searchSchema";

const PageLayout = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(searchSchema),
  });

  return (
    <div>
      <header className="block w-full p-5 text-white bg-black">
        <nav>LOGOUT</nav>
      </header>
      <div className="flex min-h-screen bg-gray-800 gap-x-6">
        <aside className="w-[40%] border ">
          <Sidebar
            input={
              <Input
                className="w-full p-2"
                register={register}
                placeholder="Please enter search term"
                type="text"
                field="searchTerm"
                error={errors}
              />
            }
            header={<SidebarHeader />}
            notification={
              <Notification text="Get notified of every new stuff" />
            }
            conversations={<Conversations />}
          />
        </aside>
        <section>{children}</section>
      </div>
    </div>
  );
};

export default PageLayout;
