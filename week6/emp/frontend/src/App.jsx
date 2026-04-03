import { createBrowserRouter,RouterProvider } from "react-router"
import RootLayout from "./RootLayout.jsx"
import CreateEmp from "./CreateEmp.jsx"
import ListOfEmp from "../ListOfEmp.jsx"
import Home from "./Home.jsx"
import Employee from "./Employee.jsx"
import EditEmployee from "./EditEmployee.jsx"

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "create-emp", element: <CreateEmp /> },
        { path: "list", element: <ListOfEmp /> },
        {path:"employee",element:<Employee/>},
        {path:"edit-emp",element:<EditEmployee/>},
      ],
    },
  ]);

  return <RouterProvider router={routerObj} />;
}

export default App;