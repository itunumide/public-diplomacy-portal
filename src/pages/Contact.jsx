import React from "react";
import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import MapComponent from "../components/MapComponent";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main className="flex-grow">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-10 flex flex-col gap-10">
        <ContactHero />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Info & Map */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <ContactInfo />
            <MapComponent />
          </div>
          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
