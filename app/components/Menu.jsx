"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const user = false;

  const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 3, title: "Contact", url: "/" },
  ];

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className="bg-red-500 text-white  w-full text-3xl absolute left-0 top-24 h-[calc(100vh-6rem)] flex items-center justify-center flex-col gap-8 ">
          {links.map((item) => (
            <Link key={item.id} href={item.url} onClick={() => setOpen(false)}>
              {item.title}{" "}
            </Link>
          ))}
          {!user ? (
            <Link href={"/login"} onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href={"/orders"} onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <Link href={"/cart"}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
