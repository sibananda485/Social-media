"use client";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constant";
import { usePathname } from "next/navigation";
import { SignOutButton, SignedIn } from "@clerk/clerk-react";

const LeftSidebar = () => {
  const pathName = usePathname();

  return (
    <>
      <section className="custom-scrollbar leftsidebar">
        <div className="w-full flex flex-col gap-5 flex-1 px-6">
          {sidebarLinks.map((items) => {
            return (
              <Link
                href={items.route}
                key={items.label}
                className={`leftsidebar_link ${
                  items.route == pathName && "bg-blue"
                }`}
              >
                <Image
                  src={items.imgURL}
                  alt={items.label}
                  height={24}
                  width={24}
                />
                <p className="text-light-1 max-lg:hidden">{items.label}</p>
              </Link>
            );
          })}
        </div>
        <div className="text-light-2 px-6">
          <SignedIn>
            <SignOutButton>
              <div className="flex gap-4 cursor-pointer">

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
                 <p className="max-lg:hidden"> Log out</p>
                  </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </section>
    </>
  );
};

export default LeftSidebar;
