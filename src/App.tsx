import AddUser from "./components/AddUser";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import UserTable from "./components/UserTable";
import countries from "./data/countries";
import User from "./pages/User";

function App() {
  return (
      <div className="App  ">
        <Navbar />
        <UserTable />
      </div>
  );
}

export default App;
