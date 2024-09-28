import { Outlet, useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import Navbar from "./components/Navbar"
import { ProductContext } from "./context/ProductContext"

const App = () => {
  const { filterProducts } = useContext(ProductContext);
  const { category } = useParams();

  useEffect(() => {
    filterProducts(category)
  }, [category])

  return (
    <div className="h-auto bg-slate-200">
      <Navbar />
      <div className="w-[80%] m-auto my-4 bg-white p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default App
