"use client";

import React from "react";

import InputPage from "@/component/Input";
import TablePage from "@/component/Table";


export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My Doctor Dashboard</h1>
      <p>This is the homepage content.</p>
      <div>
        <TablePage/>
      </div>
    </div>
  );
}
