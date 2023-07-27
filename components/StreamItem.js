"use client";
import React from "react";

export const StreamItem = ({ info }) => {
  const lastPriceColor = info.P > 0 ? "text-white" : "text-red-600";
  return (
    <li className="w-full flex h-20 items-center justify-between hover:bg-gray-500 transition-all">
      <div className="ml-3">
        <h3 className="text-white mb-3">{info.s}</h3>
        <p className="text-secondary">Perpetual</p>
      </div>
      <div className="mr-3 text-right ">
        <h3 className={`font-medium text-xl mb-3 ${lastPriceColor}`}>
          {info.c}
        </h3>
        <p className="text-green-800 text-base">{info.P}%</p>
      </div>
    </li>
  );
};
