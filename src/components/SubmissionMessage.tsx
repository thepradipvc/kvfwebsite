"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ThankYou } from "@/images";

const SubmissionMessage = () => {
  const searchParams = useSearchParams();
  const isSubmitted = searchParams.get("submitted");
  const router = useRouter();

  if (isSubmitted) {
    return (
      <Dialog
        defaultOpen={true}
        onOpenChange={(open) => (open ? null : router.replace("/"))}
      >
        <DialogContent className="rounded-xl sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Form submitted successfully</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Image
                src={ThankYou}
                height={1567}
                width={1463}
                alt="QR code for payment"
              />
            </div>
            <p>Thank you for reaching out to us.</p>
            <p>We&apos;ll get back to you soon.</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  return <></>;
};

export default SubmissionMessage;
