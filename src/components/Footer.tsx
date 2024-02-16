"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="wrapper flex flex-col items-center justify-between gap-4 py-4 sm:flex-row">
      <p className="sm:order-0 order-1">Knowledge Vally Foundation © {year}</p>
      <div className="flex gap-4 sm:order-2">
        <Button variant="link" size="icon" asChild>
          <Link href="/">
            <Image
              src="/facebook.svg"
              width={24}
              height={24}
              alt="facebook icon"
            />
          </Link>
        </Button>
        <Button variant="link" size="icon" asChild>
          <Link href="/">
            <Image
              src="/instagram.svg"
              width={24}
              height={24}
              alt="instagram icon"
            />
          </Link>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
