"use client";

import { fabric } from "fabric";
import React, { useEffect } from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import "@/utils/fabric-utils";
import { Resources } from "./Resources";
import { ElementsPanel } from "./panels/ElementsPanel";
import { Menu } from "./Menu";
import { TimeLine } from "./TimeLine";
import Navbar from "./navbar/nav";
import Textfield from "./textfield/textfield";

export const Editor = observer(() => {
  const store = React.useContext(StoreContext);

  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      height: 500,
      width: 800,
      backgroundColor: "#ededed",
    });
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = "#00a0f5";
    fabric.Object.prototype.cornerStyle = "circle";
    fabric.Object.prototype.cornerStrokeColor = "#0063d8";
    fabric.Object.prototype.cornerSize = 10;
    // canvas mouse down without target should deselect active object
    canvas.on("mouse:down", function (e) {
      if (!e.target) {
        store.setSelectedElement(null);
      }
    });

    store.setCanvas(canvas);
    fabric.util.requestAnimFrame(function render() {
      canvas.renderAll();
      fabric.util.requestAnimFrame(render);
    });
  }, [store]);
  return (
    <>
      <div className="p-0 m-0">
        <Navbar />
        <div className="w-full flex h-screen">
          <div className="tile w-1/12 flex flex-col bg-base-300 px-3">
            <Menu />
          </div>
          <div className="flex flex-col overflow-auto w-1/5 px-4 bg-slate-800/50">
            <Resources />
          </div>
          <div className="flex-auto w-full h-screen overflow-y-auto px-4">
            <div className="w-full flex justify-center items-center p-5">
              <canvas
                id="canvas"
                className="h-[500px] w-[800px] row col-start-3 shadow-lg"
              />
            </div>
            <div className="px-3 rounded-md">
              <Textfield />
            </div>
            <div className="col-start-3 row-start-3 col-span-2 relative overflow-scroll overflow-y-auto px-[10px] py-[4px]">
              <TimeLine />
            </div>
          </div>
          <div className="w-1/5">
            <ElementsPanel />
          </div>
        </div>
      </div>
    </>
  );
});
