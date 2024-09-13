import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import React, { useContext } from 'react'
import { useInView } from "react-intersection-observer";
import { MainContext } from "../../store/context";

const CategoryCard = ({ item, index }) => {
    const {ref, inView} = useInView({
        threshold : 0.2
    })
    const {dispatch} = useContext(MainContext)

    const showModalAlert = (id, modalType) => {
        dispatch({type : "SELECT_ITEM_ID", payload : id})
        dispatch({type : "SELECT_MODAL_TYPE", payload : modalType})
        dispatch({type : "TOGGLE_MODAL_ALERT"})
    }
    return (
        <div ref={ref} className={`${inView?"opasity-100 top-0" : "opacity-0 top-[30px]"} relative flex duration-500 justify-between items-center p-[8px] bg-gray-700 text-white rounded-sm shadow-sm`}>
            <div className="flex justify-start items-center gap-1 font-semibold">
                <div className="h-[30px] w-[30px] flex justify-center items-center bg-gray-500 text-white text-[18px]">
                    {index + 1}
                </div>
                <div>
                    {item.title}
                </div>
            </div>
            <div className="flex justify-center items-center gap-1">
                <button onClick={() => {showModalAlert(item.id, "update")}} className="h-[30px] w-[30px] flex justify-center items-center bg-blue-500 hover:bg-blue-600 active:scale-95 text-[16px]">
                    <AiFillEdit />
                </button>
                <button onClick={() => {showModalAlert(item.id, "delete")}} className="h-[30px] w-[30px] flex justify-center items-center bg-red-500 hover:bg-red-600 active:scale-95 text-[16px]">
                    <FaTrash />
                </button>
            </div>
        </div>
    )
}

export default CategoryCard
