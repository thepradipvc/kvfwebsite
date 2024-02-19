"use client";

import Link from "next/link";
import Icons from "./Icons";
import { Button } from "./ui/button";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="wrapper flex flex-col items-center justify-between gap-4 py-4 sm:flex-row">
      <p className="sm:order-0 order-1">Knowledge Vally Foundation © {year}</p>
      <div className="flex gap-4 sm:order-2">
        <Button variant="link" size="icon" asChild>
          <Link href="/">
            <Icons.Facebook />
          </Link>
        </Button>
        <Button variant="link" size="icon" asChild>
          <Link href="/">
            <Icons.Instagram />
          </Link>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
