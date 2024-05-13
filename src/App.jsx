
import AboutPage from "./components/pages/AboutPage"
import Home from "./components/pages/Home"
import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider  } from "react-router-dom"
import Layout from "./components/rootlayout/Layout"

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
  </Route>
))

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
