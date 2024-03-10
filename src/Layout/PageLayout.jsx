import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Conversations from "../Views/Conversations";
import { api } from "../base/api";
import Input from "../components/Input/Input";
import Notification from "../components/Notification/Notification";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarHeader from "../components/Sidebar/Sidebar.Header";
import { logout } from "../redux/features/user/userSlice";
import { searchSchema } from "../schema/searchSchema";

const PageLayout = ({ children }) => {
  const { user } = useSelector((state) => state);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(searchSchema),
  });

  const searchTerm = watch("searchTerm");

  console.log("searchTerm", searchTerm);

  const dispatch = useDispatch();

  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  const handleFetchData = useCallback(async () => {
    try {
      const { data } = await api.get(`/user?search=${searchTerm}`, {
        headers: {
          Authorization: `Bearer ${user?.user?.token}`,
        },
      });
      console.log(data);
      setSearchResults(data);
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm, user?.user?.token]);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  return (
    <div>
      <header className="block w-full p-5 text-white bg-black">
        <button
          onClick={() => dispatch(logout())}
          className="p-3 border rounded-lg"
        >
          Logout
        </button>
      </header>
      <div className="flex min-h-screen gap-x-6">
        <aside className="w-[40%] border">
          <Sidebar
            input={
              <Input
                className="  w-[80%]"
                register={register}
                placeholder="Please enter search term"
                type="text"
                field="searchTerm"
                error={errors}
                variant="search"
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
