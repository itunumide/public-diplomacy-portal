import React from 'react'

;
import Button from '../components/reuseables/Button';

const About = () => {
  return (
    <>
      {/* Section Header */}
      <div className="pt-10 pb-4">
        <span className="text-primary text-sm font-bold uppercase">
          Who We Are
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#111418] dark:text-white">
          About the Institute
        </h1>
        <div className="h-1 w-20 bg-primary rounded-full mt-2" />
      </div>

      {/* Hero Content */}
      <div className="py-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSu9Jdrgei6cXBliUne8VMcM-nHepFYQrMcmsl0vm3BE0GIwbI23fzEbPaTKcFES66i5yDTVauAgyumcxilxQ3UC3bfUIqZkybhyBfTqkVFnHkboltKuot60juFSYfwZxD5qO32mokQsFXSyjqAxz7m6U6cKyYY4KwnQD-nED4jHGkKxKds7H4DivLSrPUdqX41d97BYsyvB7ufSBufcMKNyuavXcpMz7al5vUgUyC_YFkmE1q5erNPYOLaSo9FDjGMJs9w2uJVSwU"
                alt="Institute building"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Text */}
          <div className="lg:w-1/2 flex flex-col gap-6 justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111418] dark:text-white">
              The Chartered Institute of Public Diplomacy, Nigeria
            </h2>

            <p className="text-[#637588] dark:text-gray-300">
              We are the premier regulatory body dedicated to training,
              certifying, and upholding the highest standards of diplomatic
              practice and public administration in Nigeria.
            </p>

            <div className="flex gap-4">
              <Button className="h-12 px-6">
                Read Our Full History
              </Button>
              <Button variant="outline" className="h-12 px-6">
                View Leadership
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
