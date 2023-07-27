"use client";
import React from "react";

export const StreamItem = ({ info }) => {
  return (
    <li className="w-full flex h-20 items-center justify-between hover:bg-gray-500 transition-all">
      <div className="ml-3">
        <h3 className="text-white mb-3">{info.s}</h3>
        <p className="text-secondary">Price</p>
      </div>
      <div className="mr-3 text-right ">
        <h3 className="text-white font-medium text-xl mb-3">{info.c}</h3>
        <p className="text-green-800 text-base">{info.P}</p>
      </div>
    </li>
  );
};
