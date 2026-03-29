import React from 'react';

const Card = ({ icon, title, value }) => {
    return (
 <div className="bg-gray-100  dark:bg-[#1e293b] p-5 
flex justify-between items-center">

  {/* LEFT SIDE */}
  <div>
    <h2 className="text-sm text-[#359078]  dark:text-gray-400">
      {title}
    </h2>

    <p className="text-3xl font-bold text-gray-800 dark:text-white mt-1">
      {value}
    </p>
  </div>

  {/* RIGHT ICON BOX */}
  <div className=" text-[#359078] p-3 rounded-xl text-2xl">
    {icon}
  </div>

</div>
    )
}

export default Card;