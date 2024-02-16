import Image from "next/image";
import Link from "next/link";
import QRModal from "./QRModal";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-2 md:px-12 lg:px-20">
      <div className="h-16 w-16">
        <Link href="/">
          <Image src="/logo.png" width={240} height={240} alt="Logo" />
        </Link>
      </div>
      <div className="flex gap-14">
        <nav className="hidden md:block">
          <ul className="flex gap-10">
            <li>
              <Button asChild variant="link" className="text-black">
                <a href="#about" className="text-base">
                  About Us
                </a>
              </Button>
            </li>
            <li>
              <Button asChild variant="link" className="text-black">
                <a href="#contact" className="text-base">
                  Contact Us
                </a>
              </Button>
            </li>
          </ul>
        </nav>
        <QRModal>
          <Button>
            Donate
            <Image
              className="ml-2"
              src="arrow-right.svg"
              width={16}
              height={16}
              alt="arrow icon"
            />
          </Button>
        </QRModal>
      </div>
    </header>
  );
};

export default Navbar;
