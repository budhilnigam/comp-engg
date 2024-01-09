import React from "react";
import placementData from "../../../../data/placement";

const Item = ({ name, designation, img, info }) => {
  return (
    <div className="relative mb-8 flex items-center justify-center">
      <img
        className="absolute top-[-40%] z-10 h-[150px] w-[150px] rounded-full border-2 border-green-700 object-cover"
        src={img}
        alt="Avatar"
      />
      <div className="relative z-0 min-h-[250px] rounded-xl border-2 border-green-900">
        <div className="mt-8 max-w-[450px] px-16 pb-4 pt-8 text-center md:mt-8 md:px-12">
          <div className="mb-1 text-lg font-medium">{name}</div>
          <div className="text-bold mb-2 text-lg text-gray-900">
            {designation}
          </div>
          <hr className="mx-auto my-4 w-4/5 border-t border-gray-300" />
          <div className="text-md mb-2 text-gray-700">{info}</div>
        </div>
      </div>
    </div>
  );
};

const CounsellorGrid = () => {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-24 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {placementData[2].map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CounsellorGrid;
