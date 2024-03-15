import React,{ useState} from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import AddTask from "./Pages/AddTask";
import LoginPage from "./Pages/LoginPage";
import LoginSignupForm from "./Pages/LoginSignupForm";
import TaskList from "./Pages/TaskList";
import EditTask from "./Pages/EditTask";
import ViewTask from "./Pages/ViewTask";
import NoPage from "./Pages/NoPage";
import "bootstrap/dist/css/bootstrap.min.css";
import './Pages/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
  const [data, setData] = useState();

  const handleUpdate = (updatedItem) => {
    // Update the state or make a PUT request to update the item on the server
    setData((prevData) =>
      prevData.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<LoginSignupForm />} />
        <Route path="Home" element={<Home />} />
        <Route path="AddTask" element={<AddTask />} />
        <Route path="TaskList" element={<TaskList />} />
        <Route path="ViewTask/:id" element={<ViewTask />} />
        <Route path="EditTask/:id" element={<EditTask />} />
        <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>  
    
  );
};

export default App;
