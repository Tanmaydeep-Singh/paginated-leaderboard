import React, { useEffect, useState } from 'react'
import Table from './Table'
import { FiDownloadCloud } from 'react-icons/fi'
import { GrFormAdd } from 'react-icons/gr'
import { RxCrossCircled } from 'react-icons/rx'
import { useMutation, useQuery } from '@tanstack/react-query'
import { createUser, getUserData } from '../features/api/api'

const UserTable = (): any => {
  const userData = useQuery({
    queryKey: ['userdata'],
    queryFn: getUserData
  })

  const createUserMutation = useMutation({
    mutationFn: createUser
  })

  const [data, setData] = useState([])

  useEffect(() => {
    console.log('USER DATA js', userData?.data?.data?.userdata)
    setData(userData?.data?.data?.userdata ?? [])
  })

  const [modal, setModal] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  })

  const handleInputChange = (event: any): any => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
    console.log('Form Data', formData)
  }

  const handleData = (event: any): any => {
    event.preventDefault()
    if (formData.name === '' || formData.email === '' || formData.role === '') {
      setModal(!modal)
      console.log(modal)
      console.log('Form Data', formData)
      createUserMutation.mutate(formData)
    } else {
      console.log('Form Data', formData)
    }
  }
  return (

    <div className="w-screen md:w-[100%] overflow-y-auto flex-col justify-center align-middle p-20 py-0">
  {/* NEW USER FORM */}
  <div
      className={ modal
        ? ' hidden'
        : 'absolute top-0 left-0 grid justify-items-center items-center fixed w-full h-full  backdrop-blur-sm z-10' }
    >
      <div className="z-[100] md:w-[450px] md:h-[450px] border-2 shadow-md  p-8 rounded-xl bg-white text-black">
        <h1 className="md:text-[40px]"> Add User </h1>
        <button
          type="button"
          onClick={() => {
            setModal(!modal)
          }}
          className="relative left-[95%] -top-[35px] md:-top-[19%] z-[200]"
        >
          <RxCrossCircled size={30} />
        </button>
        <form>
          <label
            className="block font-medium mb-1 text-gray-300"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-400 p-2 bg-[#ffffff] text-[#000000] rounded-md"
            required
          />

          <label
            className="block font-medium mb-1 text-gray-300"
            htmlFor="name"
          >
            E-mail
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-400 p-2 bg-[#ffffff] text-[#000000] rounded-md"
            required
          />
          <label className="block font-medium mb-1 text-gray-300">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="select select-ghost max-w-xs w-full border border-gray-400 p-2 bg-[#ffffff] rounded-md text-[#000000] mb-6"
            required
          >
            <option disabled selected>
              Roles
            </option>
            <option>Admin</option>
            <option>User</option>
          </select>
          <div>
            <button
              className=" text-[#ffffff] px-7 p-2 m-2 bg-[#19A7CE] rounded-md  "
              onClick={handleData}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  {/* NEW USER FORM ENDED */}
      <div className="w-[650px] md:w-auto border-2 shadow-lg  m-5 p-5 rounded-xl">
        <div className="flex h-[80px] justify-between border-b-2">
          <div>
            <h1 className="font-semibold text-[20px]">
              Users{' '}
              <span className="bg-[#E5F9DB] text-[12px] text-[#A0D8B3] rounded-[30px] px-1 py-[0.5px] font-semibold">
                {data?.length} Users
              </span>
            </h1>
            <p>Manage you team members and their account permissions here.</p>
          </div>
          <div className="flex h-[60px]">
            <button
              type="button"
              className="border-2 shadow-sm rounded-[8px] m-2 p-2 flex items-center"
            >
              <span className="mx-2">
                <FiDownloadCloud />
              </span>
              Download CSV
            </button>
            <button
              type="button"
              className="border-2 shadow-sm rounded-[8px] m-2 p-2 bg-[#D4FAFC] flex items-center"
              onClick={ () => { setModal(!modal) }}
            >
              <span className="mx-2">
                <GrFormAdd />
              </span>
              <span>Add User </span>
            </button>
          </div>
        </div>
        <div className="contents  wrapper w-[90%]">
          <Table data={data} rowsPerPage={5} />
        </div>
      </div>
    </div>
  )
}

export default UserTable
