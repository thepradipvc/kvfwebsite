import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QR } from "@/images";
import Image from "next/image";
import { ReactNode } from "react";

const QRModal = ({ children }: { children: ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="rounded-xl sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Scan the QR to donate</DialogTitle>
          <DialogDescription>
            You can donate any amount you wish to help people in need.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Image
              src={QR}
              height={1567}
              width={1463}
              alt="QR code for payment"
              priority
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QRModal;
