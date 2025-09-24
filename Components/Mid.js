import React from "react";
import { useNavigate } from 'react-router';
import img from "../Components/unnamed.png";

export default function Mid() {


  const navigate = useNavigate();


  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300 px-2">
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full max-w-9xl min-h-5xl bg-gray-100 rounded-xl px-20 py-49 shadow-md">
        
        {/* Left Section */}
        <div className="max-w-lg">
          <h1 className="text-6xl font-bold text-blue-900 leading-tight">
            Exchange skills <br /> <span className="text-blue-600">without money</span>
          </h1>
          <p className="mt-4 text-blue-900 text-lg">
            A community-driven platform where you trade time, knowledge, and
            services
          </p>

          {/* Search Bar */}
          <div className="mt-6">
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-gray-400">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search skills"
                className="outline-none w-full text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-5 flex gap-3">
            <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-900 transition"  onClick={() => navigate('/SecondaryHome')}>
              Find a swap
            </button>
            <button className="px-5 py-2 border border-blue-400 text-blue-800 rounded-lg hover:bg-gray-100 transition">
              Offer a skill
            </button>
          </div>
        </div>
      
      {/* image */}
      <img src={img} alt="skill exchange" />
     

  

      </div>
    </div>
  );
}

// import React from "react";

// const members = [
//   { id: 1, name: "Aarav", skill: "React.js", age: 22 },
//   { id: 2, name: "Priya", skill: "Node.js", age: 25 },
//   { id: 3, name: "Rohit", skill: "MongoDB", age: 27 },
//   { id: 4, name: "Simran", skill: "Express.js", age: 24 },
// ];

// export default function Mid() {
//   return (
//     <div className="w-[80%] mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-4">Team Members</h2>
//       <table className="min-w-full bg-white rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-200 text-gray-700">
//             <th className="py-3 px-4 text-left">Name</th>
//             <th className="py-3 px-4 text-left">Skill</th>
//             <th className="py-3 px-4 text-left">Age</th>
//           </tr>
//         </thead>
//         <tbody>
//           {members.map((member) => (
//             <tr key={member.id} className="border-b hover:bg-gray-100">
//               <td className="py-3 px-4">{member.name}</td>
//               <td className="py-3 px-4">{member.skill}</td>
//               <td className="py-3 px-4">{member.age}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


