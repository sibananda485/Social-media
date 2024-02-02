import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function page() {
  return (
    <main>
      <h1 className="head-text">Onboarding</h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
