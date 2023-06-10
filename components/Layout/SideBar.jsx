import React, { useState } from "react";
import SidebarItems from "./SidebarItems";

const SideBar = ({ role, selected, setSelected }) => {
  if (role === "admin") {
    return (
      <div className="flex flex-col justify-start min-h-screen shadow-2xl pt-10 items-center font-bold text-xl">
        <div className="mb-8 font-serif text-purple-700 text-2xl font-bold">
          Management
        </div>
        <SidebarItems
          title={"Products"}
          onClick={() => setSelected("Products")}
          selected={selected}
        />
        <SidebarItems
          title={"Retailers"}
          onClick={() => setSelected("Retailers")}
          selected={selected}
        />
        <SidebarItems
          title={"Students"}
          onClick={() => setSelected("Students")}
          selected={selected}
        />
        <SidebarItems
          title={"Orders"}
          onClick={() => setSelected("Orders")}
          selected={selected}
        />
      </div>
    );
  } else if (role === "retailer") {
    return (
      <div className="flex flex-col justify-start min-h-screen shadow-2xl pt-10 items-center font-bold text-xl">
        <div className="mb-8 font-serif text-purple-700 text-2xl font-bold">
          Management
        </div>
        <SidebarItems
          title={"Products"}
          onClick={() => setSelected("Products")}
          selected={selected}
        />
        <SidebarItems
          title={"Customers"}
          onClick={() => setSelected("Customers")}
          selected={selected}
        />
        <SidebarItems
          title={"Orders"}
          onClick={() => setSelected("Orders")}
          selected={selected}
        />
      </div>
    );
  }
};

export default SideBar;
