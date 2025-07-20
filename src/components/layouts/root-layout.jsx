import React from "react";
import { NavbarComponent } from "./navbar";
import { Outlet } from "react-router";
import { FooterComponent } from "./footer";

export default function RootLayout() {
  return (
    <div className="flex flex-col h-screen">
      <NavbarComponent />
      <main className="grow">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
}
