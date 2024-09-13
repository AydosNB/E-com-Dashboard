import { MdAddShoppingCart } from "react-icons/md"; 
import { MdOutlineDashboardCustomize } from "react-icons/md"; 
import { BiCartAlt } from "react-icons/bi"; 
import { TbCategory } from "react-icons/tb"; 
export const btnData = [
    {id : 1, title : "Categories", icon : TbCategory, path : "/"},
    {id : 2, title : "Products", icon : BiCartAlt , path : "/products"},
    {id : 3, title : "Create category", icon : MdOutlineDashboardCustomize, path : "/create-category"},
    {id : 4, title : "Create product", icon : MdAddShoppingCart, path : "/create-product"},
]