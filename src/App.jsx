import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import UserCreate from "./components/UserCreate";
import Navbar from "./components/Navbar";
import User from "./components/User";
import UserUpdate from "./components/UserUpdate";
 
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<User />}/>
        <Route path="create" element={<UserCreate />} />
        <Route path="update/:id" element={<UserUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
