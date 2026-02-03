import React from 'react'
import Button from './Button';



const CallToAction = () => {
  return (
    <div className="py-12 text-center">
      <h2 className="text-2xl font-bold text-[#111418] dark:text-white">
        Join a Network of Distinguished Diplomats
      </h2>
      <p className="text-[#637588] dark:text-gray-400 max-w-2xl mx-auto mt-4">
        Become a chartered member today and shape the future of Nigeria's public diplomacy.
      </p>

      <div className="flex justify-center gap-4 mt-8">
        <Button className="h-10 px-8 text-sm">
          Apply for Membership
        </Button>
        <Button variant="ghost" className="h-10 px-8 text-sm">
          Download Brochure
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
