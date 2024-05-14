import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.svg";
import { IoSearch } from "react-icons/io5";
import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <div className="nav-all">
          <div className="nav-left">
            <Link href={"/"}>Home</Link>
            <Link href={"/products"}>Shop All</Link>
            <Link href={"/blog"}>Blog</Link>
          </div>
          <div className="nav-center">
            <Link href={"/"}>
              <Image src={logo} alt="logo" priority={true} />
            </Link>
          </div>
          <div className="nav-right">
            <Link href={"/about"}>About Us</Link>
            <div className="nav-input">
              <input type="text" placeholder="Search Product" />
              <IoSearch />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
