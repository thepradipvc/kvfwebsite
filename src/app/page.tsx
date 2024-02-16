import QRModal from "@/components/QRModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-6 md:mt-12">
      {/* Hero section */}
      <section className="bg-hands mx-auto max-w-[1280px] pb-8 text-center sm:pb-20 md:pb-28 lg:pb-44">
        <div className="wrapper">
          <h1 className="text-xl font-bold text-blue sm:text-3xl md:text-4xl lg:text-5xl">
            The slightest help from you, <br /> will mean a lot to them
          </h1>
          {/* Till large devices */}
          <p className="mx-auto mt-2 text-xs sm:text-lg lg:hidden">
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

      {/* section 2 */}
      <section className="wrapper mt-8 flex flex-col gap-5 sm:flex-row md:mt-20">
        <div className="order-1 flex-1 text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-black sm:text-3xl md:text-5xl">
            Help Children Make Them A Better Life
          </h2>
          <p className="mx-auto mt-2 max-w-[360px] text-base sm:mx-0 sm:mt-4 sm:text-lg">
            we provide study kits, training & workshops to underprivileged
            children.
          </p>
          <QRModal>
            <Button className="mt-4 sm:mt-8">
              Donate
              <Image
                className="ml-2"
                src="/heart.svg"
                width={20}
                height={20}
                alt="heart icon"
              />
            </Button>
          </QRModal>
        </div>
        <div className="relative min-h-80 flex-1 sm:order-2">
          <Image
            className="object-cover"
            src="/girl.jpg"
            fill
            alt="A girl in a uniform with a bag and a book."
          />
        </div>
      </section>

      {/* section 3 */}
      <section className="mt-8 bg-dark-blue py-2 md:mt-16 lg:mt-24">
        <div className="wrapper">
          <div className="text-center">
            <div className="relative mx-auto h-24 w-24 md:h-36 md:w-36">
              <Image src="/donate.svg" fill alt="donate icon" />
            </div>
            <p className="text-lg font-bold uppercase text-primary md:text-2xl lg:text-3xl">
              Every rupee matters
            </p>
            <h2 className="sm:text mt-2 text-xl font-medium text-white sm:mt-4 sm:text-3xl md:text-4xl lg:text-6xl">
              Charity is no longer a luxury, <br /> everyone can help.
            </h2>
            <QRModal>
              <Button className="mt-4 sm:mt-8">Donate ₹1</Button>
            </QRModal>
          </div>
          <div className="relative mt-4 py-20 sm:py-36 lg:py-56">
            <div className="spread-love spread-humanity relative z-10 mx-auto h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]">
              <Image
                src="/happy-kids.png"
                width={1680}
                height={1680}
                alt="A photo of happy kids"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="wrapper py-6 text-center md:py-8 lg:py-16">
        <h2 className="text-2xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl">
          Who are we?
        </h2>
        <p className="mx-auto mt-6 max-w-prose text-left text-base sm:text-center sm:text-lg md:text-2xl">
          Knowledge Vally Foundation is a Non-Government Organisation. We
          participate in changing the world by focusing on providing the basic
          necessities to sustain a healthy life that ultimately results in an
          advanced society.
        </p>
        <p className="mx-auto mt-4 max-w-prose text-left text-sm sm:text-center sm:text-base md:text-xl">
          Amongst our goal to upscale the stature of the underprivileged
          sections of our society, our social workers and volunteer’s
          unconditionally plays their part to help the underprivileged no matter
          the religion, age, and gender.
        </p>
      </section>

      {/* People need help section */}
      <section className="bg-dark-blue py-8">
        <div className="wrapper flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="relative hidden sm:block sm:h-20 sm:w-20 lg:h-32 lg:w-32">
              <Image src="/gift-box.svg" fill alt="gift box" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-white sm:text-xl md:text-2xl lg:text-4xl">
                People need your help <br /> to survive and thrive
              </h2>
            </div>
          </div>
          <div>
            <QRModal>
              <Button>
                Donate
                <Image
                  className="ml-2"
                  src="/heart.svg"
                  width={20}
                  height={20}
                  alt="heart icon"
                />
              </Button>
            </QRModal>
          </div>
        </div>
      </section>

      {/* What we do section */}
      <section className="wrapper py-8 text-center md:py-12">
        <h2 className="text-2xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl">
          What we do?
        </h2>
        {/* Cards wrapper */}
        <div className="mt-6 grid justify-items-center gap-4 md:mt-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Education card */}
          <div className="flex max-w-[460px] flex-col items-center rounded-xl bg-[#fafafa] px-1 py-8 shadow-md md:justify-self-end">
            <div className="h-[100px] w-[100px]">
              <Image
                src="/education.png"
                width={400}
                height={401}
                alt="A girl with a book"
              />
            </div>
            <h3 className="mt-6 text-2xl font-medium text-black">Education</h3>
            <p className="mt-2 max-w-[400px] text-sm md:text-base lg:text-lg">
              we provide study kits, training & workshops to underprivileged
              children.
            </p>
          </div>
          {/* Food card */}
          <div className="flex max-w-[460px] flex-col items-center rounded-xl bg-[#fafafa] px-1 py-8 shadow-md md:justify-self-start">
            <div className="h-[100px] w-[100px]">
              <Image
                src="/food.png"
                width={400}
                height={401}
                alt="A girl with a book"
              />
            </div>
            <h3 className="mt-6 text-2xl font-medium text-black">Food</h3>
            <p className="mt-2 max-w-[400px] text-sm md:text-base lg:text-lg">
              we organize community kitchens and provide packaged meals without
              compromising on quality & hygiene levels.
            </p>
          </div>
          {/* Health care card */}
          <div className="flex max-w-[460px] flex-col items-center rounded-xl bg-[#fafafa] px-1 py-8 shadow-md md:justify-self-end">
            <div className="h-[100px] w-[100px]">
              <Image
                src="/health-care.png"
                width={400}
                height={401}
                alt="A girl with a book"
              />
            </div>
            <h3 className="mt-6 text-2xl font-medium text-black">
              Health Care
            </h3>
            <p className="mt-2 max-w-[400px] text-sm md:text-base lg:text-lg">
              We organize health camps to provide free health check-ups,
              medicines & blood donation camps for the weakest sections of our
              society.
            </p>
          </div>
          {/* Shelter card */}
          <div className="flex max-w-[460px] flex-col items-center rounded-xl bg-[#fafafa] px-1 py-8 shadow-md md:justify-self-start">
            <div className="h-[100px] w-[100px]">
              <Image
                src="/shelter.png"
                width={400}
                height={401}
                alt="A girl with a book"
              />
            </div>
            <h3 className="mt-6 text-2xl font-medium text-black">Shelter</h3>
            <p className="mt-2 max-w-[400px] text-sm md:text-base lg:text-lg">
              With the combined help from the social workers & donations, we try
              to provide shelter to the needy as well as to the migrant workers.
            </p>
          </div>
          {/* Environment card */}
          <div className="flex max-w-[460px] flex-col items-center rounded-xl bg-[#fafafa] px-1 py-8 shadow-md md:justify-self-end">
            <div className="h-[100px] w-[100px]">
              <Image
                src="/environment.png"
                width={400}
                height={401}
                alt="A girl with a book"
              />
            </div>
            <h3 className="mt-6 text-2xl font-medium text-black">
              Environment
            </h3>
            <p className="mt-2 max-w-[400px] text-sm md:text-base lg:text-lg">
              we spread awareness to the people about environment by organizing
              tree planting & community clean-up campaigns.
            </p>
          </div>
          {/* Women Empowerment card */}
          <div className="flex max-w-[460px] flex-col items-center rounded-xl bg-[#fafafa] px-1 py-8 shadow-md md:justify-self-start">
            <div className="h-[100px] w-[100px]">
              <Image
                src="/women-empowerment.png"
                width={400}
                height={401}
                alt="A girl with a book"
              />
            </div>
            <h3 className="mt-6 text-2xl font-medium text-black">
              Women Empowerment
            </h3>
            <p className="mt-2 max-w-[400px] text-sm md:text-base lg:text-lg">
              As women safety is one of our top most concerns, we do our bit by
              executing effective awareness programs, self-defence classes &
              various other campaigns to help our country become the safest for
              women.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section
        id="contact"
        className="wrapper py-6 text-center md:py-8 lg:py-16"
      >
        <h2 className="text-2xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl">
          Contact Us
        </h2>
        <p className="mx-auto mt-6 max-w-prose text-left text-base sm:text-center sm:text-lg md:text-xl">
          Feel free to contact us if you have any query.
        </p>
        <p className="mx-auto mt-2 max-w-prose text-left text-sm sm:text-center sm:text-base md:text-lg">
          We are always here to help you.
        </p>

        <form
          name="contact"
          method="POST"
          // @ts-ignore eslint-disable-next-line
          netlify
          className="mx-auto mt-6 grid max-w-3xl gap-3 text-left md:grid-cols-2"
        >
          <div>
            <Label htmlFor="first-name">First Name</Label>
            <Input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <Label htmlFor="last-name">Last Name</Label>
            <Input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Enter your last name"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <Label htmlFor="mobile">Mobile no</Label>
            <Input
              type="number"
              id="mobile"
              name="mobile"
              placeholder="Enter your mobile no"
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="message">What&apos;s your query?</Label>
            <Textarea
              placeholder="Write us a message..."
              id="message"
              name="message"
            />
          </div>
          <Button className="justify-self-center md:col-span-2">
            Send message
          </Button>
        </form>
        <p className="mx-auto mt-8 max-w-prose text-left text-sm text-primary sm:text-center sm:text-base md:text-lg">
          Note: All donations are tax exempted under 80G of the Indian Income
          Tax.
        </p>
      </section>

      {/* Future of India Section */}
      <section className="bg-dark-blue pb-8 pt-2">
        <div className="wrapper text-center">
          <div className="relative mx-auto h-20 w-20 md:h-36 md:w-36">
            <Image src="/in-hand.svg" fill alt="In-hand icon" />
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            The future of India <br /> in your hands
          </h2>
          <QRModal>
            <Button className="mt-6">Donate Now</Button>
          </QRModal>
        </div>
      </section>
    </main>
  );
}
