"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { ImageResource } from "../entity/ImageResource";
import React from "react";

export default function MyTabs() {
  const store = React.useContext(StoreContext);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    store.addImageResource(URL.createObjectURL(file));
  };
  const dataDummy = [
    {
      title: "Avatar",
      content: [
        {
          judul: "Avatar Baru",
          action: "/6.webp",
        },
        {
          judul: "Avatar Baru",
          action: "/8.webp",
        },
        {
          judul: "Avatar Baru",
          action: "/9.webp",
        },
        {
          judul: "Avatar Baru",
          action: "/10.webp",
        },
        {
          judul: "Avatar Baru",
          action: "/6.webp",
        },
        {
          judul: "Avatar Baru",
          action: "/8.webp",
        },
        {
          judul: "Avatar Baru",
          action: "/9.webp",
        },
        {
          judul: "Avatar Baru",
          action: "/10.webp",
        },
        {
          judul: "Avatar Baru",
          action: "/6.webp",
        },
        {
          judul: "Avatar Baru",
          action: "/8.webp",
        },
        {
          judul: "Avatar Baru",
          action: "/9.webp",
        },
        {
          judul: "Avatar Baru",
          action: "/10.webp",
        },
      ],
    },
    {
      title: "Photo Avatar",
      content: [
        {
          judul: "dev3",
          action: "/2.png",
        },
      ],
    },
    {
      title: "Studio Avatar",
      content: [
        {
          judul: "dev4",
          action: "/3.png",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(dataDummy[0].title);

  return (
    <Tab.Group>
      <Tab.List className="flex p-4 space-x-1 justify-start w-full overflow-x-scroll overflow-y-hidden scroll-white bg-blue-950/10 rounded-md shadow-lg">
        {dataDummy.map((item) => (
          <Tab
            key={item.title}
            className={`btn btn-sm px-6  hover:btn-white transition-all font-medium ease-in-out duration-150 hover:shadow-xl ${
              activeTab === item.title
                ? "bg-white border-white border-spacing-1"
                : "btn-ghost text-white"
            }`}
            onClick={() => setActiveTab(item.title)}
          >
            {item.title}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="p-4 h-screen overflow-auto">
        {dataDummy.map((item) => {
          return (
            <>
              <Tab.Panel key={item.title} className="text-white">
                <div className="grid grid-cols-2 gap-3">
                  {item.content.map((contentItem) => {
                    return (
                      <>
                        {/* foto */}
                        <div className="relative">
                          <div
                            className="avatar w-full bg-slate-600/20 hover:bg-slate-600/40 hover:shadow-xl flex justify-center shadow-lg"
                            key={contentItem.judul}
                          >
                            <div className="w-52 rounded-xl">
                              <ImageResource
                                key={contentItem.action}
                                image={contentItem.action}
                              />
                            </div>
                          </div>
                          {/* title */}
                          <div className="absolute bottom-1 badge badge-warning rounded-md">
                            {contentItem.judul}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </Tab.Panel>
            </>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
  );
}
