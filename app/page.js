"use client";
import { Stream } from "@/components/StreamList";
import { SocketService } from "@/services/socket";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-red-50">
      <Stream />
    </div>
  );
}
