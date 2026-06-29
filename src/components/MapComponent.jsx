import React, { useState } from "react";
import { MdMap } from "react-icons/md";
import cipdm from "../asset/cipdm.jpeg"
const MapComponent = () => {
  const [imageError, setImageError] = useState(false);
  return (
    <div className="w-full h-64 rounded-xl overflow-hidden border border-[#dce0e5]   shadow-sm relative group">
      <div className="absolute inset-0 bg-gray-200   flex items-center justify-center">
        {imageError ? (
          <MdMap className="text-4xl text-gray-400" />
        ) : (
          <img
            alt="Map location of CIPD Nigeria in Ikeja, Lagos"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            data-alt="Map showing the location of the institute in Lagos"
            data-location="awoyokun, Lagos, Nigeria"
            onError={() => setImageError(true)}
            src={cipdm}
          />
        )}
      </div>
    </div>
  );
};

export default MapComponent;
