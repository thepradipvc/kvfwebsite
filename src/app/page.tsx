import QRModal from "@/components/QRModal";
import { Button } from "@/components/ui/button";
import Image from "next/image";

{
  /* <QRModal>
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
</QRModal>; */
}

// add about & contact ids to sections

export default function Home() {
  return (
    <main className="mb-20 mt-6 md:mt-12">
      <section className="bg-hands sm:pb-20 mx-auto max-w-[1280px] pb-8 text-center md:pb-28 lg:pb-44">
        <div className="wrapper">
          <h1 className="text-blue sm:text-3xl text-xl font-bold md:text-4xl lg:text-5xl">
            The slightest help from you, <br /> will mean a lot to them
          </h1>
          {/* Till large devices */}
          <p className="sm:text-lg mx-auto mt-2 text-xs lg:hidden">
            Help needy people by donating <br />
            whatever amount you can
          </p>
          {/* For large devices */}
          <p className="mt-2 hidden text-lg lg:block">
            Help needy people by donating whatever amount you can
          </p>
          <QRModal>
            <Button className="mt-4 lg:mt-8">
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
      </section>

      <section className="wrapper sm:flex-row mt-8 flex flex-col gap-5 md:mt-20">
        <div className="sm:text-left order-1 flex-1 text-center">
          <h2 className="sm:text-3xl text-2xl font-semibold text-black md:text-5xl">
            Help Children Make Them A Better Life
          </h2>
          <p className="sm:text-lg sm:mt-4 sm:mx-0 mx-auto mt-2 max-w-[360px] text-base">
            we provide study kits, training & workshops to underprivileged
            children.
          </p>
          <QRModal>
            <Button className="sm:mt-8 mt-4">
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
        <div className="sm:order-2 relative min-h-80 flex-1">
          <Image
            className="object-cover"
            src="/girl.jpg"
            fill
            alt="A girl in a uniform with a bag and a book."
          />
        </div>
      </section>
    </main>
  );
}
