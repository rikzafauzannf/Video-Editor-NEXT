"use client";
import React from "react";
import { SeekPlayer } from "./timeline-related/SeekPlayer";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { TimeFrameView } from "./timeline-related/TimeFrameView";

export const TimeLine = observer(() => {
  const store = React.useContext(StoreContext);
  const percentOfCurrentTime = (store.currentTimeInMs / store.maxTime) * 100;
  return (
    <>
      <div className=" w-full overflow-hidden">
        <SeekPlayer />
        <div className="relative height-auto w-full bg-slate-700 py-3 mt-3">
          <div
            className="w-[2px] bg-red-400 absolute top-0 bottom-0 z-20"
            style={{
              left: `${percentOfCurrentTime}%`,
            }}
          ></div>
          {store.editorElements.map((element) => {
            return <TimeFrameView key={element.id} element={element} />;
          })}
        </div>
      </div>
    </>
  );
});
