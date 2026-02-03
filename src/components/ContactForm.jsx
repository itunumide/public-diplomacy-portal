import React from "react";
import { MdExpandMore } from "react-icons/md";

const ContactForm = () => {
  return (
    <div className="bg-white dark:bg-[#1a232e] rounded-xl border border-[#dce0e5] dark:border-[#2a3441] p-6 sm:p-8 shadow-sm h-full">
      <h2 className="text-[#111418] dark:text-white text-2xl font-bold mb-6">
        Send us a Message
      </h2>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row gap-5">
          <label className="flex flex-col flex-1">
            <p className="text-[#111418] dark:text-white text-sm font-medium leading-normal pb-2">
              Full Name
            </p>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dce0e5] dark:border-[#3e4a5b] bg-white dark:bg-[#111921] focus:border-primary h-12 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal transition-all"
              placeholder="Enter your full name"
              type="text"
            />
          </label>
          <label className="flex flex-col flex-1">
            <p className="text-[#111418] dark:text-white text-sm font-medium leading-normal pb-2">
              Email Address
            </p>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dce0e5] dark:border-[#3e4a5b] bg-white dark:bg-[#111921] focus:border-primary h-12 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal transition-all"
              placeholder="name@example.com"
              type="email"
            />
          </label>
        </div>
        <label className="flex flex-col w-full">
          <p className="text-[#111418] dark:text-white text-sm font-medium leading-normal pb-2">
            Department/Subject
          </p>
          <div className="relative">
            <select className="form-select flex w-full min-w-0 flex-1 appearance-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dce0e5] dark:border-[#3e4a5b] bg-white dark:bg-[#111921] focus:border-primary h-12 placeholder:text-[#637588] px-[15px] text-base font-normal leading-normal transition-all">
              <option disabled selected value="">
                Select an option...
              </option>
              <option value="general">General Inquiry</option>
              <option value="membership">Membership</option>
              <option value="certification">Certification & Training</option>
              <option value="media">Media & Events</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#637588]">
              <MdExpandMore className="text-xl" />
            </div>
          </div>
        </label>
        <label className="flex flex-col w-full flex-1">
          <p className="text-[#111418] dark:text-white text-sm font-medium leading-normal pb-2">
            Message
          </p>
          <textarea
            className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dce0e5] dark:border-[#3e4a5b] bg-white dark:bg-[#111921] focus:border-primary min-h-[140px] placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal transition-all"
            placeholder="How can we help you?"
          ></textarea>
        </label>
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
