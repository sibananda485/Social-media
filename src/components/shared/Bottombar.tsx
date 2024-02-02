"use client"

import { sidebarLinks } from "@/constant";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


const Bottombar = () => {
  const pathName = usePathname();

  return(
    <>
      <section className="bottombar">
        <div className="bottombar_container">
        {sidebarLinks.map((items) => {
            return (
              <Link
                href={items.route}
                key={items.label}
                className={`bottombar_link ${
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
      </section>
    </>
  )
};

export default Bottombar;
