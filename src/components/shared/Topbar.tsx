"use client";
import Link from "next/link";
import Image from "next/image";
import {
  OrganizationSwitcher,
  SignOutButton,
  SignedIn,
  UserButton,
  UserProfile,
} from "@clerk/nextjs";
import {dark} from "@clerk/themes";

const Topbar = () => {
  return (
    <nav className="topbar">
      <Link href={"/"} className="flex gap-3 items-center">
        <Image src="/assets/logoIcon.svg" width={28} height={28} alt="Logo" />
        {/* <Image src="/assets/logoName.svg" width={28} height={28} alt="Logo"/>       */}
        <p className="text-heading3-bold text-light-1">Fost</p>
      </Link>
      <div className="text-white flex items-center gap-3">
        <div className="md:hidden">
          <SignedIn>
            <SignOutButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher appearance={{baseTheme:dark}} />
      </div>
    </nav>
  );
};

export default Topbar;
