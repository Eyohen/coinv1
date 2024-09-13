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
import { HiViewBoards } from "react-icons/hi";
import { MdEditNote } from "react-icons/md";


const usersData = [
  { id:1, name: 'Aquarius', location: '1 Churchill road', email: 'john@example.com', phone: '123-456-7890', status: 'Active', state: 'CA', country: 'USA', date: '2023-01-01' },
  { id:2, name: 'Busy minds', location: '2 Churchill road', email: 'john@example.com', phone: '123-456-7890', status: 'Active', state: 'CA', country: 'Nigeria', date: '2023-01-01' },
  { id:3,name: 'Holy Child', location: '3 Churchill road', email: 'john@example.com', phone: '123-456-7890', status: 'Inactive', state: 'CA', country: 'London', date: '2023-01-01' },
  { id:4,name: 'Federal Girls', location: '4 Churchill road', email: 'john@example.com', phone: '123-456-7890', status: 'Inactive', state: 'CA', country: 'Ghana', date: '2023-01-01' },
  { id:5,name: 'Life Fort', location: '5 Churchill road', email: 'john@example.com', phone: '123-456-7890', status: 'Active', state: 'CA', country: 'Japan', date: '2023-01-01' },
  { id:6,name: 'Simi', location: '6 Churchill road', email: 'john@example.com', phone: '123-456-7890', status: 'Active', state: 'CA', country: 'Egypt', date: '2023-01-01' },
  { id:7,name: 'Joshua', location: '7 Churchill road', email: 'john@example.com', phone: '123-456-7890', status: 'Active', state: 'CA', country: 'Morocco', date: '2023-01-01' },
  { id:8,name: 'Faith', location: '8 Churchill road', email: 'john@example.com', phone: '123-456-7890', status: 'Active', state: 'CA', country: 'Spain', date: '2023-01-01' },
  { id:9,name: 'Bassey', location: '9 Churchill road', email: 'john@example.com', phone: '123-456-7890', status: 'Active', state: 'CA', country: 'USA', date: '2023-01-01' },
];

const Institution = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState('');
  const [sortOption, setSortOption] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);
  const [filterField, setFilterField] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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

  return (
    <div className='bg-gray-50 h-[100vh]'>
    <Sidebar/>
    <div className='flex-1 ml-[300px] p-9'>
         <p className='font-bold text-3xl'>Institution</p>
      <div className="mb-4 flex gap-x-4 pt-9 justify-end px-24">



      <div class="relative ">
    <div class="absolute inset-y-0 left-0 flex items-center px-2">
      <label className="px-2 py-1 text-xl font-mono cursor-pointer text-gray-400 text-left"><IoSearchOutline /></label>
    </div>
        {/* <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
          className="px-11 py-2 w-[300px] border border-blue-200 rounded"
        /> */}
          </div>



        {/* <select value={sortOption} onChange={handleSort} className="ml-2 p-2 border border-gray-300 rounded">
          <option value="latest">Sort by Latest</option>
          <option value="oldest">Sort by Date</option>
        </select> */}
        {/* <div className="relative ml-2"> */}

          <select value={filterField} onChange={handleFilterField} className="p-2 bg-blue-200 text-white rounded">
       <option value="">Filter</option>
            <option value="firstName">First Name</option>
            <option value="lastName">Last Name</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="status">status</option>
            <option value="state">State</option>
            <option value="country">Country</option>
            <option value="date">Date</option>
          </select>
          {filterField && (
            <input
              type="text"
              placeholder={`Filter by ${filterField}`}
              value={filterValue}
              onChange={handleFilterValue}
              className="ml-2 p-2 border border-gree rounded"
            />
          )}
        {/* </div> */}

        <Link to={'/createinstitution'}><button className='bg-blue-500 text-white px-4 rounded-lg text-xl font-semibold flex items-center gap-x-2 py-2'><BsPlusLg  size={23}  color='white'/>Add Institution</button></Link>
      </div>

      <div className='bg-white py-6 rounded-xl border'>
        <p className='text-2xl font-semibold px-6 '>Institution</p>

        <div className='border-b border-gray-300 mt-4'></div>

        <div className='flex justify-end mt-6 px-4'>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
          className="px-3 py-2 w-[300px] border border-gray-400 rounded"
        />
        </div>

      <table className="w-full bg-white border text-left border-gray-200 mt-6">
        <thead className='bg-blue-100 rounded-2xl'>
          <tr className=''>
          <th className="py-4 pl-6">Id</th>
            <th className="py-3 px-3">Name</th>
            <th className="py-3 px-3">Location</th>
            <th className="py-3 px-3">LGA</th>
            <th className="py-3 px-3">Date Joined</th>
            <th className="py-3 px-3">Status</th>
            <th className="py-3 px-3">State</th>
            <th className="py-3 px-3">Country</th>
  
            <th className="py-3 px-3"></th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={user.id} onClick={() => setShowModal(!showModal)} className='border-b border-gray-300 text-gray-500 '>
              <td className="py-2 pl-6">{user.id}</td>
              <td className="py-2 px-3">{user.name}</td>
              <td className="py-2 px-3">{user.location}</td>
              <td className="py-2 px-3">{user.email}</td>
              <td className="py-2 px-3">{user.date}</td>
              <td className="py-2 px-3">{user.status === "Active" ? <p className='bg-green-100 text-green-600 font-semibold px-3 rounded-md max-w-[90px]'><div className='flex gap-x-1 items-center'><GoDotFill color='green' size={15} /><p> Active</p></div></p> : <p className='bg-red-100 text-red-600 font-semibold px-2 rounded-md max-w-[90px]'><div className='flex gap-x-1 items-center'><GoDotFill color='red' size={15}/>Inactive</div></p>}</td>
              <td className="py-2 px-3">{user.state}</td>
              <td className="py-2 px-3">{user.country}</td>
      
              <div onClick={() => handlePress(user)} className="relative cursor-pointer">
              <td className="py-4 px-3"><IoEllipsisVertical /></td>
              {selectedItem && selectedItem.id === user.id && showModal && (<div className="bg-white absolute z-100 border rounded-lg right-16 top-[45px] shadow-lg">
                      {/* <p onClick={() => { router.push(`/overviewTable/${selectedItem.id}`) }} className=" hover:bg-blue-100 hover:text-blue-600 px-9 py-2">View</p> */}
                 <Link to={'/viewinstitution'}><p className="hover:bg-blue-100 hover:text-blue-600 px-16 py-4 flex items-center gap-x-2"><HiViewBoards />View</p></Link>
                 <Link to={'/editinstitution'}><p className="hover:bg-blue-100 hover:text-blue-600 px-16 py-2 flex items-center gap-x-2"><MdEditNote size={25} />Edit</p></Link>
                     {/* <p onClick={() => openModal()}  className="hover:bg-blue-100 hover:text-blue-600 px-9 py-2">Edit</p> */}
                      <p onClick={() => openDeleteModal()}  className=" hover:bg-blue-200 hover:text-blue-600 px-16 py-4 flex items-center gap-x-2"><RiDeleteBinLine color='#FF0000' /> Delete</p>
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

      <div className="flex justify-center gap-x-4 mt-4">
        {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-3 py-1 border border-green-500 ${currentPage === i + 1 ? 'bg-gray-200' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Institution;