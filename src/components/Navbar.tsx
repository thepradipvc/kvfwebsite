import { Logo } from "@/images";
import Image from "next/image";
import Link from "next/link";
import Icons from "./Icons";
import QRModal from "./QRModal";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-2 md:px-12 lg:px-20">
      <div className="h-16 w-16">
        <Link href="/">
          <Image src={Logo} width={240} height={240} alt="Logo" />
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
            <Icons.ArrowRight className="ml-2" />
          </Button>
        </QRModal>
      </div>
    </header>
  );
};

export default Navbar;
