"use client";
import { SocketService } from "@/services/socket";
import React from "react";
import { StreamItem } from "./StreamItem";

export const Stream = () => {
  const data = SocketService();
  const mapStreamHandler = (info) => <StreamItem info={info} key={info.s} />;

  return (
    <div className="bg-shadow h-full rounded-md w-1/3 overflow-y-scroll">
      <ul className="w-full h-full py-3">
        {Array.isArray(data) && data.map(mapStreamHandler)}
      </ul>
    </div>
  );
};
