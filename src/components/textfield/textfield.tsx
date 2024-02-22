import React from "react";
import Select from "./select";

const Textfield = () => {
  return (
    <>
      <div className=" space-y-2">
        {/* <div className="text-sm font-semibold">Elements</div> */}
        <div className="p-5 bg-slate-600/20 w-full rounded-sm">
          <div className="space-y-3">
            <div className="flex justify-start items-start space-x-2">
              {/* <div>
                <button className="btn btn-ms btn-circle shadow-md">
                  {">"}
                </button>
              </div> */}
              <div className="w-full flex-auto">
                <textarea
                  className="w-full p-2 rounded-md bg-white text-black"
                  placeholder="Generate Text"
                  rows={5}
                ></textarea>
              </div>
              <div className="w-full flex-1">
                <Select />
                <div className="py-3">
                  <label htmlFor="">sss</label>
                  <input
                    type="range"
                    min={25}
                    max={100}
                    maxLength={100}
                    minLength={25}
                    className="w-full"
                  />
                  <label>sss</label>
                  <input
                    type="range"
                    min={25}
                    max={100}
                    maxLength={100}
                    minLength={25}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <button className="btn btn-sm btn-primary w-full">Generate</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Textfield;
