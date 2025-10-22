import React from "react";
import Navbar from "../components/Navbar";
import SidebarItem from "../components/SidebarItem";
import { sidebarItems } from "../assets/sidebar";

const Dashboard = () => {
  return (
    <div className="min-w-[1530px] flex flex-row min-h-screen">
      {/*sidebar*/}
      <div className="w-[5%] flex flex-col justify-between pt-[60px] pb-[24px] px-2">
        <div>
          {sidebarItems.map((items, key) => (
            <SidebarItem
            key={key}
            name={items.name}
            image={items.image}
            />
          ))}
        </div>
        <div></div>
      </div>
      <div className="w-[95%]">
        <div className="px-[72px] py-[24px]">
          <Navbar />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
