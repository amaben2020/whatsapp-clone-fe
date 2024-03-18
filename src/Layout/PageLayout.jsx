import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Conversations from "../Views/Conversations";

import { api } from "../base/api";
import Input from "../components/Input/Input";
import Notification from "../components/Notification/Notification";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarHeader from "../components/Sidebar/Sidebar.Header";
import { logout } from "../redux/features/user/userSlice";
import { searchSchema } from "../schema/searchSchema";

import Profile from "../components/Profile/Profile.jsx";
import SearchResult from "../components/SearchResult/SearchResult.jsx";

const PageLayout = () => {
  const {
    user,
    chat: { activeConversation, conversations },
  } = useSelector((state) => state);

  console.log(conversations);

  const navigate = useNavigate();
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(searchSchema),
  });

  const searchTerm = watch("searchTerm");

  const dispatch = useDispatch();

  const [searchResults, setSearchResults] = useState([]);

  const [getData, setGetData] = useState(false);

  const handleFetchData = useCallback(async () => {
    if (searchTerm === undefined) return;
    try {
      const { data } = await api.get(`/user?search=${searchTerm}`, {
        headers: {
          Authorization: `Bearer ${user?.user?.token}`,
        },
      });

      setSearchResults(data);
    } catch (error) {
      console.log(error);
      if (error.message.includes("500") !== -1) {
        navigate("/login");
      }
    }
  }, [navigate, searchTerm, user?.user?.token]);

  useEffect(() => {
    if (getData) {
      handleFetchData();
    }
  }, [handleFetchData, getData]);

  useEffect(() => {
    const element = window.document.getElementById("searcher");
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        if (searchTerm !== undefined) {
          setGetData(true);
        } else {
          setGetData(false);
        }

        setTimeout(() => {
          setGetData(false);
        }, 1500);
      }
    });
  }, [searchTerm, searchTerm?.length]);

  console.log("activeConversation?.conversation?.name ", activeConversation);
  const receiverInfo = activeConversation[0]?.conversation;
  console.log("receiverInfo", receiverInfo);
  // based on the convo,
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
      <div className="flex min-h-screen">
        <aside className="min-w-[30%] border">
          <Sidebar
            profile={<Profile picture={user.user.picture} />}
            input={
              <Input
                className="w-[80%] pl-10"
                register={register}
                placeholder="Please enter search term"
                type="text"
                field="searchTerm"
                error={errors}
                hasSearchTerm={
                  searchTerm !== undefined && searchTerm?.length > 0
                }
                id="searcher"
              />
            }
            header={<SidebarHeader />}
            notification={
              <Notification text="Get notified of every new stuff" />
            }
            conversations={
              searchResults.length > 0 ? (
                <div>
                  <h2 className="pl-5 my-6">Contacts</h2>
                  {searchResults.map((user) => (
                    <SearchResult
                      key={user._id}
                      status={user.status}
                      picture={user.picture}
                      chatName={user.name}
                      joinedDate={user.createdAt}
                      receiverId={user._id}
                    />
                  ))}
                </div>
              ) : (
                <Conversations />
              )
            }
          />
        </aside>

        <section>
          <Profile
            picture={receiverInfo?.users[1].picture}
            name={receiverInfo?.name ?? ""}
          />
          <div className="p-6">
            {JSON.stringify(searchResults)}
            {JSON.stringify(activeConversation)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PageLayout;
