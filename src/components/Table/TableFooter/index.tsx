/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { useEffect } from 'react'

const TableFooter = (props: any): any => {
  useEffect(() => {
    if (props.slice?.length < 1 && props.page !== 1) {
      props.setPage(props.page - 1)
    }
  }, [props.slice, props.page, props.setPage])
  return (
    <div className="flex justify-between w-[100%]  items-center">

      <button
        className=" p-2 m-2 mx-10 rounded-lg border-2"

        type="button"
        onClick={
          () => {
            if (props.page > 1) { props.setPage(props.page - 1) }
          }
        }
      >LEFT</button>

      <div>
      {props.range.map((el: any, index: number) => (
        <button
          key={index}
          className={ props.page === el ? ' w-7 h-7 bg-blue-500 m-2 rounded-md' : 'w-7 h-7 m-2 rounded-md'
            }
          onClick={() => { props.setPage(el) }}
        >
          {el}
        </button>
      ))}
      </div>
      <button
        className=" p-2 m-2 mx-10 rounded-lg border-2"
        type="button"
        onClick={
          () => {
            if (props.page < props.range.length) { props.setPage(props.page + 1) }
          }
        }
      >RIGHT</button>

    </div>
  )
}

export default TableFooter
