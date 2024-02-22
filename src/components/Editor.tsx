"use client";
import { useState, useEffect } from "react";
import { fabric } from "fabric";
import React from "react";
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
      <div className="p-0 m-0 relative">
        <Navbar />
        <div className="w-full flex h-screen">
          <div className="tile w-1/12 flex flex-col bg-base-content text-white px-3 pt-5">
            <Menu />
          </div>
          <div className="flex flex-col overflow-y-auto w-[30%] bg-gradient-to-b from-primary to-primary/50 transition-all ease-in-out duration-200  px-4 relative">
            <Resources />
          </div>
          <div className="flex-auto w-full h-screen overflow-y-auto relative">
            <div className="w-full flex flex-col justify-center items-center p-5">
              <canvas
                id="canvas"
                className="h-[500px] w-[800px] row col-start-3 shadow-lg"
              />
              <ElementsPanel />
            </div>
            <div className=" rounded-md">
              <Textfield />
            </div>
            <div className="col-start-3 row-start-3 col-span-2 relative overflow-scroll overflow-y-auto px-[10px] py-[4px]">
              <TimeLine />
            </div>
          </div>
          {/* <div className="w-1/5">
            <ElementsPanel />
          </div> */}
        </div>
      </div>
    </>
  );
});

export default Editor;
