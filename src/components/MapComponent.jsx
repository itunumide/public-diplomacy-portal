import React, { useState } from "react";
import { MdMap } from "react-icons/md";

const MapComponent = () => {
  const [imageError, setImageError] = useState(false);
  return (
    <div className="w-full h-64 rounded-xl overflow-hidden border border-[#dce0e5] dark:border-[#2a3441] shadow-sm relative group">
      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        {imageError ? (
          <MdMap className="text-4xl text-gray-400" />
        ) : (
          <img
            alt="Map location of CIPD Nigeria in Ikeja, Lagos"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            data-alt="Map showing the location of the institute in Lagos"
            data-location="Ikeja, Lagos, Nigeria"
            onError={() => setImageError(true)}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEYHBsiwZpYG6_ZJzJ-srUoGuVa6LruCvbBaeWi0fUMFjZSiNsSS1qcVNl5WNMG-EJm8oPQloCUcOXpmlh_XhoSOXcOtr0549WFdjTkJGt03GVWpFja5dzzlLmLVKZx_cTyJoIEuxwa1z9SrdaXloSGQ_Tf8gS39KvscLiO6zaKLMMfviVnbEN0Ln51l7PiQRDQsGwTUPtoCUxj64TBEmdlPdbmVvQkAdynYqiE6F3z11_A24wee0r-wfTe0U1j6X1Y8IvaJGS7BfL"
          />
        )}
      </div>
    </div>
  );
};

export default MapComponent;
