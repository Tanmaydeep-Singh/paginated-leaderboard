/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'

import useTable from '../../hooks/useTable'
import TableFooter from './TableFooter'
import { BsArrowDownShort } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BiPencil } from 'react-icons/bi'
import { RxCrossCircled } from 'react-icons/rx'

import Swal from 'sweetalert2'

const Table = (props: any) => {
  const [modal, setModal] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  })

  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleData = (event: any) => {
    event.preventDefault()
    if (formData.name === '' || formData.email === '' || formData.role === '') {
      setModal(!modal)
    }
  }
  // EDNIT FORM END
  const [page, setPage] = useState(1)
  const { slice, range } = useTable(props.data, page, props.rowsPerPage)

  const deleteUser = (el: any) => {
    void Swal.fire({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      title: `Are you sure you want to delete ${el.name}?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        void Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <>
    {/* EDIT FORM */}
       <div
      className={ modal
        ? ' hidden'
        : 'absolute top-0 left-0 grid justify-items-center items-center fixed w-screen h-screen backdrop-blur-sm z-10' }
    >
      <div className="z-[100] md:w-[450px] md:h-[450px] border-2 shadow-md  p-8 rounded-xl bg-white text-black">
        <h1 className="md:text-[40px]"> Edit User </h1>
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
    {/* EDIT FORM END */}
      <table className=" w-[100%]">
        <div className="flex flex-row border-b-[1px] border-[#5B5B5B]  gap-[4px] p-[25px] ">
          <span className="flex justify-center items-center flex-[0.4]"></span>
          <span className="flex flex-[4.0] md:flex-[3.0] items-center">Name <BsArrowDownShort /></span>
          <span className="flex flex-[1.5] md:flex-[0.4] items-center">Status <BsArrowDownShort /></span>
          <span className="flex flex-[1.5] md:flex-[0.4] items-center">Role <BsArrowDownShort /></span>
          <span className="flex flex-[1.5] md:flex-[0.4] items-center">Last Login<BsArrowDownShort /></span>
          <span className="flex flex-[0.4] md:flex-[0.4] items-center"> </span>
        </div>
        <tbody>
          {
            slice.map((el: any) => (
              <div
                key={el.key}
                className="flex flex-row border-b-[1px] gap-[4px] p-[15px] border-[#5B5B5B] "
              >
                <span className="flex flex-[0.4] justify-center items-center">
                  <input type="checkbox" />
                </span>

                <span className="flex flex-[4.0] md:flex-[3.0] gap-[5px] justify-start items-center">
                  <img
                    className=" w-[48px] h-[48px] rounded-[50%] "
                    src="https://picsum.photos/200/300"
                    alt="Rank Avatar"
                    width="48"
                    height="48"
                  />
                  <span className="flex flex-col gap-[2px]">
                    <h1>{el.name}</h1>
                    <div className="flex items-center text-[12px]">{el.email } </div>
                  </span>
                </span>

                {el?.status
                  ? <span className="flex flex-[1.5] md:flex-[0.4] items-center ">              <span className="bg-[#E5F9DB] text-[16px] text-[#5D9C59] rounded-[30px] px-2 py-[1px] font-semibold">
                    Active</span>  </span>
                  : <span className="flex flex-[1.5] md:flex-[0.4] items-center ">              <span className="bg-[#BACDDB] text-[16px]  rounded-[30px] px-2 py-[1px] ">
                    Inactive</span>  </span>
                }
                <span className="flex flex-[1.5] md:flex-[0.4] items-center">{el.role}</span>
                <span className="flex flex-[1.5] md:flex-[0.4] items-center">{el.test}</span>
                <span className="flex flex-[0.4] items-center justify-evenly">
                  <span>
                    <button type="button"
                    onClick={ () => { deleteUser(el) } }>
                                      <RiDeleteBin6Line />
                    </button>
                  </span>
                  <span>
                    <button type="button"
                      onClick={ () => { setFormData(el); setModal(!modal) } }
                    >

                      <BiPencil />
                    </button>

                  </span> </span>

              </div>
            ))}

        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  )
}

export default Table
