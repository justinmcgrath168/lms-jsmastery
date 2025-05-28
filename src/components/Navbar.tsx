import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="">
        <div className="flex cursor-pointer items-center gap-2.5">
          <Image alt="logo" src="/images/logo.svg" width={46} height={44} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <p>Sign In</p>
      </div>
    </nav>
  );
};

export default Navbar;
