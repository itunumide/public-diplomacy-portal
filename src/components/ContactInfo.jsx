import React from "react";
import { MdLocationOn, MdCall, MdMail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Address */}
      <div className="flex gap-4 rounded-xl border border-[#dce0e5]   bg-white   p-5 shadow-sm">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <MdLocationOn />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-[#111418]    text-base font-bold leading-tight">
            Visit Us
          </h3>
          <p className="text-[#637588]   text-sm font-normal leading-normal">
            Lagos: 169, Ikorodu Road, 
            <br />
            (1st floor) Awoyokun B/stop
          </p>
        </div>
      </div>
      {/* Phone */}
      <div className="flex gap-4 rounded-xl border border-[#dce0e5]   bg-white   p-5 shadow-sm">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <MdCall />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-[#111418]    text-base font-bold leading-tight">
            Call Us
          </h3>
          <p className="text-[#637588]   text-sm font-normal leading-normal">
            +234 802 359 2726
            <br />
            +234 803 073 1170
          </p>
        </div>
      </div>
      {/* Email */}
      <div className="flex gap-4 rounded-xl border border-[#dce0e5]   bg-white   p-5 shadow-sm">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <MdMail />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-[#111418]    text-base font-bold leading-tight">
            Email Us
          </h3>
          <p className="text-[#637588]   text-sm font-normal leading-normal">
            info@cipdm.org
            <br />
            support@cipdm.org
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
