import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { createUser } from "../../features/api/api";
function Index(visible: any) {
  const createUserMutation =useMutation({
    mutationFn: createUser,
  })
  const [modal, setModal] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log("Form Data", formData);
  };

  const handleData = (event: any) => {
    event.preventDefault();
    if (formData.name === "" || formData.email === "" || formData.role === "") {
      setModal(!modal);
      console.log(modal);
      console.log("Form Data", formData);

      createUserMutation.mutate(formData);
    } else {
      console.log("Form Data", formData);
    }
  };
  
  return (
    <div
      className={ modal ? " hidden" : 
    "absolute top-0 left-0 grid justify-items-center items-center fixed w-screen h-screen backdrop-blur-sm z-10" }
    >
      <div className="z-[100] w-[450px] h-[450px] border-2 shadow-md  p-8 rounded-xl bg-white text-black">
        <h1 className="text-[40px]"> Add User </h1>
        <button
          type="button"
          onClick={() => {
            setModal(!modal);
          }}
          className="relative left-[95%] -top-[19%] z-[200]"
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
  );
}

export default Index;
