/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

function Navbar () {
  return (
    <div className=" p-20 py-0 m-5">
      <h1 className=" text-[32px]  m-2">Company Settings</h1>
      <div className="flex">

        <a href=" " className=" border-y-2 border-l-[0.5px]  p-3 m-0  rounded-l-[8px]">General</a>
        <a href=" " className=" border-y-2 border-l-[0.5px]  p-3 m-0  ">User</a>
        <a href=" " className=" border-y-2 border-l-[0.5px]  p-3 m-0  ">Plan</a>
        <a href=" " className=" border-y-2 border-l-[0.5px]  p-3 m-0  ">Billing</a>
        <a href=" " className=" border-y-2 border-x-[0.5px]  p-3 m-0  rounded-r-[8px]">Integrations</a>
      </div>
    </div>
  )
}

export default Navbar
