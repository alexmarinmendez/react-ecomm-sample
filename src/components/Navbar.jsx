import { FaShopify } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { products_categories } from "../utils/mock-products";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Navbar = () => {
    const { invoice } = useContext(ProductContext);

    const isActive = (element) => element?.isActive ? 'font-bold' : '';

    return (
        <div className="w-full h-20 border shadow-lg flex items-center justify-between px-6 top-0 bg-white z-10">
            <NavLink to={'/'} className="flex flex-col items-center">
                <FaShopify className="text-red-500 text-4xl" />
                <span>@Super Ecomm</span>
            </NavLink>
            <ul className="flex items-center gap-10">
                {
                    products_categories.map((category) => {
                        return (
                            <li key={category.value}><NavLink to={`/${category.value}`} className={isActive}>{category.label}</NavLink></li>
                        )
                    })
                }
            </ul>

            <Link to={'/cart'} className="relative">
                <IoCart className="text-2xl" />
                {
                    invoice?.count > 0 &&
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                        {invoice?.count}
                    </div>
                }
            </Link>
        </div>
    )
}

export default Navbar