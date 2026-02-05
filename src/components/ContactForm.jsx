import React from "react";
import { MdExpandMore } from "react-icons/md";
import Input from "./reuseables/Input";
import Label from "./reuseables/Label";

const ContactForm = () => {
  return (
    <div className="bg-white   rounded-xl border border-[#dce0e5]   p-6 sm:p-8 shadow-sm h-full">
      <h2 className="text-[#111418]    text-2xl font-bold mb-6">
        Send us a Message
      </h2>
      <form className="flex flex-col gap-5">
        <Input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Enter your full name"
          label="Full Name"
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dce0e5] bg-white focus:border-primary h-12 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal transition-all"
        />
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          label="Email Address"
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dce0e5] bg-white focus:border-primary h-12 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal transition-all"
        />
        <Input
          id="department"
          name="department"
          type="select"
          placeholder="Select an option..."
          label="Department/Subject"
          options={[
            { value: "general", label: "General Inquiry" },
            { value: "membership", label: "Membership" },
            { value: "certification", label: "Certification & Training" },
            { value: "media", label: "Media & Events" },
          ]}
          className="form-select flex w-full min-w-0 flex-1 appearance-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dce0e5] bg-white focus:border-primary h-12 placeholder:text-[#637588] px-[15px] text-base font-normal leading-normal transition-all"
        />
        <div className="flex flex-col w-full">
          <Label
            htmlFor="message"
            className="text-[#111418] text-sm font-medium leading-normal pb-2"
          >
            Message
          </Label>
          <textarea
            id="message"
            name="message"
            className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dce0e5] bg-white focus:border-primary min-h-[140px] placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal transition-all"
            placeholder="How can we help you?"
          ></textarea>
        </div>
        <div className="pt-2">
          <button className="flex w-full sm:w-auto min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors shadow-md hover:shadow-lg">
            <span className="truncate">Send Message</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
