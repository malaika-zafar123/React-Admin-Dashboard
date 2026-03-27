import React from 'react';

const Card = ({ icon, title, value }) => {
    return (
 <div className="bg-white dark:bg-[#1e293b] p-5 
flex justify-between items-center">

  {/* LEFT SIDE */}
  <div>
    <h2 className="text-sm text-gray-500 dark:text-gray-400">
      {title}
    </h2>

    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
      {value}
    </p>
  </div>

  {/* RIGHT ICON BOX */}
  <div className="bg-[#22c55e]/20 text-[#22c55e] p-3 rounded-xl text-2xl">
    {icon}
  </div>

</div>
    )
}

export default Card;