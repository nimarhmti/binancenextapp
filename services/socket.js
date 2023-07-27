"use client";
import React, { useState, useEffect } from "react";
const URL = "wss://fstream.binance.com/ws";
export const SocketService = () => {
  //give an initial state so that the data won't be undefined at start
  const [data, setData] = useState([]);

  useEffect(() => {
    return () => {
      ws.close;
    };
  }, []);

  const ws = new WebSocket(URL);
  const msg = {
    method: "SUBSCRIBE",
    params: ["!ticker@arr"],
    id: 1,
  };

  ws.onopen = () => {
    ws.send(JSON.stringify(msg));
  };
  ws.onmessage = function (event) {
    try {
      const res = JSON.parse(event.data);
      if (event.data && Array.isArray(res)) {
        setData(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return data;
};
