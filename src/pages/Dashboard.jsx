// import React, { useState, useEffect } from 'react';

// const usersData = [
//   { firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'USA', date: '2023-01-01' },
//   { firstName: 'James', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'Nigeria', date: '2023-01-01' },
//   { firstName: 'Henry', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'London', date: '2023-01-01' },
//   { firstName: 'Charles', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'Ghana', date: '2023-01-01' },
//   { firstName: 'Manny', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'Japan', date: '2023-01-01' },
//   { firstName: 'Simi', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'Egypt', date: '2023-01-01' },
//   { firstName: 'Joshua', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'Morocco', date: '2023-01-01' },
//   { firstName: 'Faith', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'Spain', date: '2023-01-01' },
//   { firstName: 'Bassey', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'USA', date: '2023-01-01' },
//   // Add more user data here
// ];

// const Dashboard = () => {
//   const [users, setUsers] = useState(usersData);
//   const [search, setSearch] = useState('');
//   const [sortOption, setSortOption] = useState('latest');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [usersPerPage] = useState(3);
//   const [countryFilter, setCountryFilter] = useState('');

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleSort = (e) => {
//     setSortOption(e.target.value);
//   };

//   const handleCountryFilter = (e) => {
//     setCountryFilter(e.target.value);
//   };

//   const filteredUsers = users.filter(user =>
//     Object.keys(user).some(key =>
//       user[key].toString().toLowerCase().includes(search.toLowerCase())
//     ) && (!countryFilter || user.country === countryFilter)
//   );

//   const sortedUsers = [...filteredUsers].sort((a, b) => {
//     if (sortOption === 'latest') {
//       return new Date(b.date) - new Date(a.date);
//     }
//     return new Date(a.date) - new Date(b.date);
//   });

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const uniqueCountries = [...new Set(users.map(user => user.country))];

//   return (
//     <div className='p-9'>
//         <p className='font-bold text-3xl text-green-700'>Contacts</p>
//       <div className="mb-4 text-right">
//         <input
//           type="text"
//           placeholder="Search"
//           value={search}
//           onChange={handleSearch}
//           className="p-2 border border-green-400 rounded"
//         />
//         {/* <select value={sortOption} onChange={handleSort} className="ml-2 p-2 border border-gray-300 rounded">
//           <option value="latest">Sort by Latest</option>
//           <option value="oldest">Sort by Date</option>
//         </select> */}
//         <select value={countryFilter} onChange={handleCountryFilter} className="ml-2 p-2 border border-green-400  rounded">
//           <option value="">Filter by Country</option>
//           {uniqueCountries.map((country, index) => (
//             <option key={index} value={country}>{country}</option>
//           ))}
//         </select>
//       </div>


//       <table className="w-full bg-white border text-left border-gray-200 rounded-md">
//         <thead className='bg-green-200 text-green-700  rounded-md'>
//           <tr >
//             <th scope="col" className="py-4 px-11 ">First Name</th>
//             <th scope="col" className="py-4 px-11 ">Last Name</th>
//             <th scope="col" className="py-4 px-11 ">Email</th>
//             <th scope="col" className="py-4 px-11 ">Phone</th>
//             <th scope="col" className="py-4 px-11 ">Address</th>
//             <th scope="col" className="py-4 px-11 ">State</th>
//             <th scope="col" className="py-4 px-11 ">Country</th>
//             <th scope="col" className="py-4 px-11 ">Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentUsers.map((user, index) => (
//             <tr key={index} className=' border-b border-gray-300'>
//               <td className="py-4 px-11">{user.firstName}</td>
//               <td className="py-4 px-11">{user.lastName}</td>
//               <td className="py-4 px-11">{user.email}</td>
//               <td className="py-4 px-11">{user.phone}</td>
//               <td className="py-4 px-11">{user.address}</td>
//               <td className="py-4 px-11">{user.state}</td>
//               <td className="py-4 px-11">{user.country}</td>
//               <td className="py-4 px-11">{user.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="flex justify-center mt-4">
//         {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => (
//           <button
//             key={i}
//             onClick={() => paginate(i + 1)}
//             className={`px-3 py-1 border ${currentPage === i + 1 ? 'bg-gray-200' : ''}`}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { IoSearchOutline,IoEllipsisVertical } from "react-icons/io5";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { LuListFilter } from "react-icons/lu";
import DeleteModal from '../components/DeleteModal';
import { RiDeleteBinLine } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { GoDotFill } from "react-icons/go";


const usersData = [
  { id:1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', status:'Active', state: 'CA', country: 'USA', date: '2023-01-01' },
  { id:2, firstName: 'James', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', status:'InActive', state: 'CA', country: 'Nigeria', date: '2023-01-01' },
  { id:3,firstName: 'Henry', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', status:'Active', state: 'CA', country: 'London', date: '2023-01-01' },
  { id:4,firstName: 'Charles', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', status:'InActive', state: 'CA', country: 'Ghana', date: '2023-01-01' },
  { id:5,firstName: 'Manny', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', status:'Active', state: 'CA', country: 'Japan', date: '2023-01-01' },
  { id:6,firstName: 'Simi', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', status:'Active', state: 'CA', country: 'Egypt', date: '2023-01-01' },
  { id:7,firstName: 'Joshua', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', status:'Active', state: 'CA', country: 'Morocco', date: '2023-01-01' },
  { id:8,firstName: 'Faith', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', status:'Active', state: 'CA', country: 'Spain', date: '2023-01-01' },
  { id:9,firstName: 'Bassey', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', status:'Active', state: 'CA', country: 'USA', date: '2023-01-01' },
];

const months = [
  {id: 1, month: 'Jan'}, {id: 2, month: 'Feb'}, {id: 3, month: 'Mar'},
  {id: 4, month: 'Apr'}, {id: 5, month: 'May'}, {id: 6, month: 'Jun'},
  {id: 7, month: 'Jul'}, {id: 8, month: 'Aug'}, {id: 9, month: 'Sep'},
  {id: 10, month: 'Oct'}, {id: 11, month: 'Nov'}, {id: 12, month: 'Dec'}
];

const scores = [
  {id: 1, score: 20}, {id: 2, score: 40}, {id: 3, score: 30},
  {id: 4, score: 50}, {id: 5, score: 45}, {id: 6, score: 55},
  {id: 7, score: 60}, {id: 8, score: 25}, {id: 9, score: 70},
  {id: 10, score: 45}, {id: 11, score: 80}, {id: 12, score: 20}
];


const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState('');
  const [sortOption, setSortOption] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);
  const [filterField, setFilterField] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handlePress = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterField = (e) => {
    setFilterField(e.target.value);
  };

  const handleFilterValue = (e) => {
    setFilterValue(e.target.value);
  };

  const openDeleteModal = () => {

    setIsDeleteModalOpen(true);
  }

  const filteredUsers = users.filter(user =>
    (!search || Object.keys(user).some(key =>
      user[key].toString().toLowerCase().includes(search.toLowerCase())
    )) && (!filterField || !filterValue || user[filterField].toString().toLowerCase().includes(filterValue.toLowerCase()))
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortOption === 'latest') {
      return new Date(b.date) - new Date(a.date);
    }
    return new Date(a.date) - new Date(b.date);
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const width = 800;
  const height = 400;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const maxScore = Math.max(...scores.map(s => s.score));
  const yScale = (score) => (score / maxScore) * chartHeight;
  const barWidth = chartWidth / months.length;


  const width2 = 300;
  const height2 = 200;
  const margin2 = { top: 20, right: 20, bottom: 30, left: 40 };
  const chartWidth2 = width2 - margin2.left - margin2.right;
  const chartHeight2 = height2 - margin2.top - margin2.bottom;

  const maxScore2 = Math.max(...scores.map(s => s.score));
  const yScale2 = (score2) => (score2 / maxScore) * chartHeight2;
  const barWidth2 = chartWidth2 / months.length;

  return (
    <div className='bg-gray-100'>
    <Sidebar/>
    <div className='flex-1 ml-[300px] p-9 bg-gray-100'>
         <p className='font-bold text-3xl'>Dashboard</p>

         <div className='flex gap-x-9 justify-start mt-9'>

          <div>

<div className='flex gap-x-9 justify-start mt-6'>


         <div className='w-[273px] h-[100px] py-2 px-2 bg-blue-500 rounded-md shadow-md'>
          <p className='flex justify-center items-center pt-4 text-3xl text-white'>124,684</p>
          <p className='text-white pt-2'>Teachers</p>
         </div>

         <div className='w-[273px] h-[100px] py-2 px-2 bg-white hover:bg-blue-500 hover:text-white rounded-md shadow-md'>
          <p className='flex justify-center items-center pt-4 text-3xl text'>12,379</p>
          <p className='text pt-2'>Staffs</p>
         </div>

         <div className='w-[273px] h-[100px] py-2 px-2 bg-white hover:bg-blue-500 hover:text-white  rounded-md shadow-md'>
          <p className='flex justify-center ite shadow-mdms-center pt-4 text-3xl text'>79</p>
          <p className='text pt-2'>Exams</p>
         </div>

         </div>

        <div className="w-full max-w-4xl bg-white p-6 rounded-xl shadow-lg mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overall Teachers Performance</h2>
      <div className='border border-gray-400 rounded-2xl px-4'>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          {/* Y Axis */}
          <line x1={0} y1={0} x2={0} y2={chartHeight} stroke="black" />
          {[0, 25, 50, 75, 100].map((tick, index) => (
            <g key={index} transform={`translate(0, ${chartHeight - yScale(tick)})`}>
              <line x1={-6} x2={0} stroke="black" />
              <text x={-25} y={4} fontSize={10} textAnchor="end">{tick}</text>
            </g>
          ))}

          {/* X Axis */}
          <line x1={0} y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="black" />
          
          {/* Bars */}
          {scores.map((score, index) => (
            <g key={score.id} transform={`translate(${index * barWidth}, 0)`}>
              <rect
                x={barWidth * 0.1}
                y={chartHeight - yScale(score.score)}
                width={barWidth * 0.8}
                height={yScale(score.score)}
                fill="#1F51FF"
              />
              <text
                x={barWidth / 2}
                y={chartHeight + 15}
                fontSize={10}
                textAnchor="middle"
              >
                {months[index].month}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
    </div>

    <div className='px-4 bg-white py-2 rounded-2xl mt-6 w-full max-w-4xl'>
      <p className='font-semibold text-2xl mt-3'>Schools</p>
      <table className="w-full max-w-4xl bg-white border text-left border-gray-200 mt-6">
        <thead className='rounded-2xl'>
          <tr>
            <th className="py-2 px-11">Name</th>
            <th className="py-2 px-11">Location</th>
            <th className="py-2 px-11">Status</th>
            {/* <th className="py-2 px-11">Date</th>
            <th className="py-2 px-11">Address</th>
            <th className="py-2 px-11">State</th>
            <th className="py-2 px-11">Country</th> */}
            <th className="py-2 px-11">Date</th>
            <th className="py-2 px-11"></th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={user.id} onClick={() => setShowModal(!showModal)} className=' border-b border-gray-300 text-gray-500'>
              <td className="py-2 px-11">{user.firstName}</td>
              <td className="py-2 px-11">{user.lastName}</td>
              <td className="py-2 px-3">{user.status === "Active" ? <p className='bg-green-100 text-green-600 font-semibold px-3 rounded-md max-w-[90px]'><div className='flex gap-x-1 items-center'><GoDotFill color='green' size={15} /><p> Active</p></div></p> : <p className='bg-red-100 text-red-600 font-semibold px-2 rounded-md max-w-[90px]'><div className='flex gap-x-1 items-center'><GoDotFill color='red' size={15}/>Inactive</div></p>}</td>
              {/* <td className="py-2 px-11">{user.phone}</td>
              <td className="py-2 px-11">{user.address}</td>
              <td className="py-2 px-11">{user.state}</td>
              <td className="py-2 px-11">{user.country}</td> */}
              <td className="py-2 px-11">{user.date}</td>
              <div onClick={() => handlePress(user)} className="relative cursor-pointer">
              <td className="py-4 px-11"><IoEllipsisVertical /></td>
              {selectedItem && selectedItem.id === user.id && showModal && (<div className="bg-white absolute z-100 border rounded-lg right-16 top-[45px] shadow-lg">
                      {/* <p onClick={() => { router.push(`/overviewTable/${selectedItem.id}`) }} className=" hover:bg-blue-100 hover:text-blue-600 px-9 py-2">View</p> */}
                      {/* <p onClick={() => openViewModal()}  className="hover:bg-blue-100 hover:text-blue-600 px-9 py-2">View</p>
                      <p onClick={() => openModal()}  className="hover:bg-blue-100 hover:text-blue-600 px-9 py-2">Edit</p> */}
                      <p onClick={() => openDeleteModal()}  className=" hover:bg-green-200 hover:text-green-600 px-9 py-2 flex items-center gap-x-2"><RiDeleteBinLine color='#FF0000' /> Delete</p>
                      {/* <p onClick={() => openPublishModal()}  className=" hover:bg-blue-100 hover:text-blue-600 px-9 py-2">Publish</p> */}

                    </div>)}
                  </div>


            </tr>
          ))}
        </tbody>
      </table>
      </div>
      

      <DeleteModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}  onConfirm={() => {
          setUsers(users.filter(user => user !== selectedItem));
          setIsDeleteModalOpen(false);
        }}/>

      {/* <div className="flex justify-center gap-x-4 mt-4">
        {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-3 py-1 border border-green-500 ${currentPage === i + 1 ? 'bg-gray-200' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div> */}
      </div>


<div>
      {/* meeting side */}
      <div className='px-4 bg-white py-3 rounded-2xl mt-6 w-[400px] h-[350px]'>
<p className='text-gray-500 text-xl mt-3'>meeting</p>
<p className='text-black text-3xl font-semibold'>Upcoming Event Planning Discussion</p>
<p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

<div className='flex gap-x-9 mt-3'>
  <button className='bg-gray-200 px-2 rounded-xl'>16th Oct</button>
  <button className='bg-gray-200 px-2 rounded-xl'>11:00 - 12:00</button>
</div>

<button className='bg-gray-200 px-16 py-2 rounded-lg mt-4 flex justify-center'>Zoom Meeting</button>

 </div>

 {/* team Performance */}
 <div className="w-[400px] bg-white p-6 rounded-xl shadow-lg mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Team Performance</h2>
      <div className='border border-gray-400 rounded-2xl px-4'>
      <svg width={width2} height={height2}>
        <g transform={`translate(${margin2.left}, ${margin2.top})`}>
          {/* Y Axis */}
          <line x1={0} y1={0} x2={0} y2={chartHeight2} stroke="black" />
          {[0, 25, 50, 75, 100].map((tick, index) => (
            <g key={index} transform={`translate(0, ${chartHeight2 - yScale2(tick)})`}>
              <line x1={-6} x2={0} stroke="black" />
              <text x={-25} y={4} fontSize={10} textAnchor="end">{tick}</text>
            </g>
          ))}

          {/* X Axis */}
          <line x1={0} y1={chartHeight2} x2={chartWidth2} y2={chartHeight2} stroke="black" />
          
          {/* Bars */}
          {scores.map((score, index) => (
            <g key={score.id} transform={`translate(${index * barWidth2}, 0)`}>
              <rect
                x={barWidth2 * 0.1}
                y={chartHeight2 - yScale2(score.score)}
                width={barWidth2 * 0.8}
                height={yScale2(score.score)}
                fill="#1F51FF"
              />
              <text
                x={barWidth2 / 2}
                y={chartHeight2 + 15}
                fontSize={10}
                textAnchor="middle"
              >
                {months[index].month}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
    </div>


    </div>
 
 

</div>


    </div>
    </div>
  );
};

export default Dashboard;