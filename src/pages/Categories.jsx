import { CgClose } from "react-icons/cg";
import { CgSpinner } from "react-icons/cg";
import React, { useContext, useEffect, useRef } from 'react'
import { MainContext } from '../store/context'
import CategoryCard from '../components/pageComp/CategoryCard'
import ModalAlert from "../components/pageComp/ModalAlert";
import { deleteCategory, getAllCategories, updateCategory } from "../api/request";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Categories = () => {
    const { state, dispatch } = useContext(MainContext)
    const url = "https://online-shop-o62f.onrender.com/categories"

    const categoryInput = useRef()
    const errorMessage = useRef()


    useEffect(() => {
        if (categoryInput.current) {
            const defValue = state.categories.find(item => item.id === state.selectItemId)?.title
            categoryInput.current.value = defValue
        }
    }, [state.modalType, state.selectItemId])

    const handleDelete = async (id) => {
        await deleteCategory(url, id, dispatch)
        dispatch({ type: "TOGGLE_MODAL_ALERT" })
        await getAllCategories(url, dispatch)

    }


    const handleUpdate = async (event, id) => {
        event.preventDefault()
        console.log(id)
        const inputValue = categoryInput.current.value.trim()
        if (inputValue.length > 2) {
            await updateCategory(url, id, inputValue)
            await getAllCategories(url, dispatch)
            dispatch({ type: "TOGGLE_MODAL_ALERT" })
            errorMessage.current.classList.add("hidden")

        } else {
            errorMessage.current.classList.remove("hidden")
            categoryInput.current.focus()
            setTimeout(() => {
                errorMessage.current.classList.add("hidden")
            }, 3000)
        }
    }

    return (
        <div>
            {state.isCatLoading ?
                <div className="min-h-[calc(100vh-114px)] flex justify-center items-center gap-2 text-[16px] font-semibold ">
                    <div className="text-indigo-600 animate-spin text-[24px]">
                        <CgSpinner />
                    </div>
                    <span>Loading...</span>
                </div>
                :
                <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2'>
                    {
                        state.categories.map((item, index) => (
                            <CategoryCard key={item.id} item={item} index={index} />
                        ))
                    }
                </div>
            }
            <ModalAlert>
                {state.modalType === "update" ?
                    <div>
                        <div className="flex justify-between items-center">
                            <div className="text-[18px] font-semibold">
                                Update category item
                            </div>
                            <button onClick={() => dispatch({ type: "TOGGLE_MODAL_ALERT" })} className="h-[30px] w-[30px] flex justify-center items-center hover:bg-gray-100 rounded-sm active:scale-95">
                                <CgClose />
                            </button>
                        </div>

                        <div className="mt-[10px]">
                            <form onSubmit={(event) => handleUpdate(event, state.selectItemId)}>
                                <div className="flex flex-col">
                                    <label className="text-[16px] font-semibold" htmlFor="category-name">Category name</label>
                                    <input ref={categoryInput} className="border-[2px] hover:border-blue-100 focus:border-blue-700 outline-none py-[6px] px-[10px] rounded-sm" type="text" id="category-name" placeholder="Enter the category name" />
                                    <span ref={errorMessage} className="hidden text-[14px] text-red-500 font-semibold">
                                        Min 3 characters
                                    </span>
                                </div>
                                <div className="flex justify-end items-center gap-1 mt-[15px]">
                                    <button type="button" onClick={() => dispatch({ type: "TOGGLE_MODAL_ALERT" })} className="py-[5px] px-[10px] rounded-sm bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold text-[16px]">
                                        Cancel
                                    </button>
                                    <button type="submit" className="py-[5px] px-[10px] rounded-sm bg-green-600 hover:bg-green-700 active:scale-95 text-white font-semibold text-[16px]">
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                    :
                    <div>
                        <div className="flex justify-between items-center">
                            <div className="text-[18px] font-semibold">
                                Delete category item
                            </div>
                            <button onClick={() => dispatch({ type: "TOGGLE_MODAL_ALERT" })} className="h-[30px] w-[30px] flex justify-center items-center hover:bg-gray-100 rounded-sm active:scale-95">
                                <CgClose />
                            </button>
                        </div>
                        <div className="mt-[10px]">
                            <span>Are you sure you want to delete this category?</span>
                            <div className="flex justify-end items-center gap-1 mt-[15px]">
                                <button onClick={() => dispatch({ type: "TOGGLE_MODAL_ALERT" })} className="py-[5px] px-[10px] rounded-sm bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold text-[16px]">
                                    Cancel
                                </button>
                                <button disabled={state.createLoading ? true : false} onClick={() => { handleDelete(state.selectItemId) }} className="py-[5px] px-[10px] rounded-sm bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold text-[16px]">
                                    {state.createLoading ? "Delete..." : "Delete"}
                                </button>
                            </div>
                        </div>
                    </div>}
            </ModalAlert>
            <ToastContainer />
        </div>
    )
}

export default Categories
