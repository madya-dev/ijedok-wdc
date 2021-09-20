import React, { useState } from "react";
import Button from "elements/Button";
import ChatsData from "json/chats.json";
import ChatImage from "assets/images/illustrasi/chat.svg";
export default function Chats() {
  const [showChat, setShowChat] = useState();
  const [showChatName, setShowChatName] = useState();
  const [showChatImg, setShowChatImg] = useState();
  const [ShowChatMessage, setShowChatMessage] = useState([]);
  const [showListChat, setShowListChat] = useState("");

  function fileHandle() {
    document.getElementById("file-input").click();
  }
  if (sessionStorage.getItem("masuk") != "yes") {
    window.location.href = "/masuk";
  }

  return (
    <div className="flex  gap-0 h-screen left-0  top-0 w-full ">
      <div
        className={`bg-green-400 h-screen w-screen md:w-3/6 xl:w-2/5 md:relative absolute top-0  left-0 bottom-0  z-10 border-right border-green-500 border-2 ${showListChat} md:block`}
      >
        <Button
          type="link"
          href="/konsultasi-dokter"
          className="text-white text-2xl px-5 flex items-center gap-2 my-3"
        >
          <ion-icon name="arrow-back-outline"></ion-icon>{" "}
          <span className="text-lg">kembali</span>
        </Button>
        <hr className="border-green-500 "></hr>
        <ul className="chats-wrapper w-full  box-border relative">
          {ChatsData.map((item, index) => {
            return (
              <div key={`list-${index}`}>
                <li
                  className={`px-5 py-3 text-white  relative cursor-pointer chat-item ${
                    index == showChat ? `bg-green-500` : ``
                  }`}
                  onClick={function () {
                    setShowChat(index);
                    setShowChatName(item.name);
                    setShowChatImg(item.img);
                    setShowChatMessage(item.chats);
                    setShowListChat("hidden");
                  }}
                  key={`list-${index}`}
                >
                  <div className="flex w-full gap-2 items-center">
                    <img src={item.img} className=" w-12 h-12 rounded-full" />
                    <div>
                      <h5>{item.name}</h5>
                      <p className="font-light text-sm text-truncate w-3/6 xl:w-2/3 ">
                        {item.chats[`${item.chats.length - 1}`].message}
                      </p>
                    </div>
                  </div>
                  <p className="font-light text-sm absolute top-2 right-5 float-right">
                    {item.chats[`${item.chats.length - 1}`].time}
                  </p>
                </li>
                <hr className="border-green-500 "></hr>
              </div>
            );
          })}
        </ul>
      </div>
      {showChatName == null ? (
        <div className="w-full bg-gray-200 h-screen flex flex-col items-center justify-center">
          {/* https://www.flaticon.com/free-icon/chat_811476?term=chat&page=1&position=6&page=1&position=6&related_id=811476&origin=search */}
          <img src={ChatImage} className="w-1/4"></img>
          <p>Belum ada chat yang dipilih.</p>
        </div>
      ) : (
        <div className=" w-full bg-gray-200 h-screen flex flex-col items-center justify-between ">
          <div className="w-full bg-green-400 px-5 py-3 flex gap-2 items-center text-white ">
            <Button
              type="button"
              className="text-white text-2xl flex items-center md:hidden"
              onClick={() => setShowListChat("")}
            >
              <ion-icon name="chevron-back-outline"></ion-icon>
            </Button>
            <img
              src={showChatImg}
              className={` w-8 h-8 rounded-full border-2 ${
                showChatImg == null ? "invisible" : ""
              }`}
            />
            <div>
              <h5>{showChatName}</h5>
            </div>
          </div>
          <div className="w-full overflow-y-scroll">
            {ShowChatMessage.map((chat, index) => {
              return (
                <div
                  className={`w-full chat-wrapper   ${
                    chat.sender == 0
                      ? ` chat-me-wrapper `
                      : ` chat-you-wrapper `
                  }`}
                  key={`chat-${index}`}
                >
                  <div
                    className={`textChat pt-2 px-2 pb-5 mx-5 relative my-3 rounded-lg text-normal block ${
                      chat.sender == 0
                        ? `bg-green-400 chat-me text-white`
                        : `bg-white chat-you `
                    }`}
                  >
                    {chat.message}{" "}
                    <sub className="absolute right-0 bottom-3 font-light float-right  mx-3">
                      {chat.time}
                    </sub>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-green-400 px-5 py-3 relative bottom-0 w-full text-white">
            <div className="flex gap-3 items-center ">
              <input
                type="file"
                className="rounded-lg"
                id="file-input"
                hidden
              />
              <Button type="button" className="mt-2" onClick={fileHandle}>
                <ion-icon name="image-outline" size="large"></ion-icon>
              </Button>
              <textarea
                type="text"
                className="rounded-lg w-full py-2 px-2 focus:outline-none text-black"
                placeholder="ketik pesan"
                rows="1"
              />
              <Button type="submit" className="mt-2">
                <ion-icon name="send-outline" size="large"></ion-icon>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
