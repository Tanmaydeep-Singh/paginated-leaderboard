/* eslint-disable react/react-in-jsx-scope */
import Navbar from './components/Navbar'
import UserTable from './components/UserTable'

const App = (): any => {
  return (
    <>
      <div className="App ">
        <Navbar />
        <UserTable />
      </div>
    </>
  )
}

export default App
