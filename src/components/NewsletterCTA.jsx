import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";

const NewsletterCTA = () => {
  return (
    <div className="mt-2 p-5 bg-primary rounded-xl text-white flex flex-col gap-3 items-start shadow-lg shadow-primary/20">
      <div className="flex items-center gap-2">
        <MdMarkEmailUnread />
        <h4 className="font-bold text-lg">Stay Updated</h4>
      </div>
      <p className="text-white/90 text-sm">
        Join our official mailing list to receive the latest updates directly in
        your inbox.
      </p>
      <div className="flex w-full gap-2">
        <input
          className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 text-sm rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 border-0"
          placeholder="Email address"
          type="email"
        />
        <button className="bg-white text-primary px-3 py-2 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors">
          Join
        </button>
      </div>
    </div>
  );
};

export default NewsletterCTA;
