"use client";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user, isLoaded } = useUser();
  return (
    <div>
      {isLoaded && user && (
        <>
          <div id='adminMainPage' className="w-full h-screen bg-white flex flex-row overflow-hidden">
            <div className="flex justify-center items-center text-black w-[80%]">Main text</div>
            <div className="lg:pl-[30%] lg:pr-5 lg:pt-5 text-black "><UserButton afterSignOutUrl="https://www.chisquarex.com/"/></div>

          </div>
        </>
      )}
    </div>
  );
}
