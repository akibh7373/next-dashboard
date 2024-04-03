import Image from "next/image";
import React from "react";

export default function SideBar() {
  return (
    <div className="fixed top-0 left-[-100%] lg:left-0 p-6 w-[250px] h-screen bg-[#0c0d10] z-50">
      <a href="#">
        <Image src="/img/logo.png" width={66} height={28} alt="logo" />
      </a>
      <span className="inline-block mt-16 mb-3 capitalize text-sm font-medium text-slate-600 ">
        overview
      </span>
      <ul>
        <li>
          <a href="#">dashboard</a>
        </li>
      </ul>
    </div>
  );
}
