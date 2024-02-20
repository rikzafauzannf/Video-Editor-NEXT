"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import {
  MdDownload,
  MdVideoLibrary,
  MdImage,
  MdTransform,
  MdTitle,
  MdAudiotrack,
  MdOutlineFormatColorFill,
  MdMovieFilter,
} from "react-icons/md";
import { Store } from "@/store/Store";

export const Menu = observer(() => {
  const store = React.useContext(StoreContext);

  return (
    <>
      {MENU_OPTIONS.map((option) => {
        return (
          <button
            key={option.name}
            onClick={() => option.action(store)}
            className={
              store.selectedMenuOption === option.name
                ? "py-4  w-full space-y-2 flex flex-col  items-center text-xs bg-primary text-white rounded-md shadow-md"
                : "py-4  w-full space-y-2 flex flex-col  items-center text-xs"
            }
          >
            <option.icon
              className={
                store.selectedMenuOption === option.name
                  ? "text-white transition-all ease-in-out duration-150"
                  : "text-white/50 transition-all ease-in-out duration-150"
              }
              size="15"
            />
            <div
              className={
                store.selectedMenuOption === option.name
                  ? "font-semibold text-xs font-mono"
                  : "font-light text-xs font-sans"
              }
            >
              {option.name}
            </div>
          </button>
        );
      })}
    </>
  );
});

const MENU_OPTIONS = [
  {
    name: "Video",
    icon: MdVideoLibrary,
    action: (store: Store) => {
      store.setSelectedMenuOption("Video");
    },
  },
  {
    name: "Audio",
    icon: MdAudiotrack,
    action: (store: Store) => {
      store.setSelectedMenuOption("Audio");
    },
  },
  {
    name: "Image",
    icon: MdImage,
    action: (store: Store) => {
      store.setSelectedMenuOption("Image");
    },
  },
  {
    name: "Text",
    icon: MdTitle,
    action: (store: Store) => {
      store.setSelectedMenuOption("Text");
    },
  },
  {
    name: "Animation",
    icon: MdTransform,
    action: (store: Store) => {
      store.setSelectedMenuOption("Animation");
    },
  },
  {
    name: "Effects",
    icon: MdMovieFilter,
    action: (store: Store) => {
      store.setSelectedMenuOption("Effect");
    },
  },
  {
    name: "Fill",
    icon: MdOutlineFormatColorFill,
    action: (store: Store) => {
      store.setSelectedMenuOption("Fill");
    },
  },
  {
    name: "Export",
    icon: MdDownload,
    action: (store: Store) => {
      store.setSelectedMenuOption("Export");
    },
  },
];
