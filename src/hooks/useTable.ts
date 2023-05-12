/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState, useEffect } from 'react'

const calculateRange = (data: any, rowsPerPage: any) => {
  const range = []
  const num = Math.ceil(data?.length / rowsPerPage)
  for (let i = 1; i <= num; i++) {
    range.push(i)
  }
  return range
}

const sliceData = (data: any, page: any, rowsPerPage: any) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage)
}

const useTable = (data: any, page: any, rowsPerPage: any) => {
  const [tableRange, setTableRange] = useState([0])
  const [slice, setSlice] = useState([0])

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage)
    setTableRange([...range])

    const slice = sliceData(data, page, rowsPerPage)
    setSlice([...slice])
  }, [data, setTableRange, page, setSlice])

  return { slice, range: tableRange }
}

export default useTable
