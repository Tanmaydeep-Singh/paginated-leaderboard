import React, { useState } from "react";

import useTable from "../../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";
import { BsArrowDownShort } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiPencil } from 'react-icons/bi';
import {RxDot} from 'react-icons/rx';
import AddUser from '../AddUser';
const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  const deleteUser = (id) => {
    console.log("ID", id);
  };
  
  
  const editUser = (id) => {
    console.log(id);
    <AddUser visible={true} />
  };

  return (
    <>
      <table className={styles.table}>
        <div className="flex flex-row border-b-[1px] border-[#5B5B5B]  gap-[4px] p-[25px] ">
          <span className="flex justify-center items-center flex-[0.4]"></span>
          <span className="flex flex-[3.0] items-center">Name <BsArrowDownShort /></span>
          <span className="flex flex-[0.4] items-center">Status <BsArrowDownShort /></span>
          <span className="flex flex-[0.4] items-center">Role <BsArrowDownShort /></span>
          <span className="flex flex-[0.4] items-center">Last Login<BsArrowDownShort /></span>
          <span className="flex flex-[0.4] items-center"> </span>
        </div>
        <tbody>
          {
            slice.map((el) => (
              <div
                key={el.key}
                className="flex flex-row border-b-[1px] gap-[4px] p-[15px] border-[#5B5B5B] "
              >
                <span className="flex flex-[0.4] justify-center items-center">
                  <input type="checkbox" />
                </span>

                <span className="flex flex-[3.0] gap-[5px] justify-start items-center">
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

                {el?.status ?
                  <span className="flex flex-[0.4] items-center ">              <span className="bg-[#E5F9DB] text-[16px] text-[#5D9C59] rounded-[30px] px-2 py-[1px] font-semibold">
                    Active</span>  </span>
                  :
                  <span className="flex flex-[0.4] items-center ">              <span className="bg-[#BACDDB] text-[16px]  rounded-[30px] px-2 py-[1px] ">
                    Inactive</span>  </span>
                }
                <span className="flex flex-[0.4] items-center">Role</span>
                <span className="flex flex-[0.4] items-center">Last Login</span>
                <span className="flex flex-[0.4] items-center justify-evenly">
                  <span>
                    <button type="button" 
                    onClick={ () =>{ deleteUser(el.id);} }>
                                      <RiDeleteBin6Line />
                    </button>
                  </span>
                  <span>
                    <button type="button" 
                      onClick={ () =>{ editUser(el.id);} }
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
  );
};

export default Table;
