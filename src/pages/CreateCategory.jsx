import { CgSpinner } from "react-icons/cg"; 
import React, { useContext, useRef } from 'react'
import { MainContext } from '../store/context'
import { createCategory, getAllCategories } from '../api/request'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateCategory = () => {

  const { state, dispatch } = useContext(MainContext)
  const url = "https://online-shop-o62f.onrender.com/categories"

  const categoryInput = useRef()
  const errorMessage = useRef()
  const submitForm = useRef()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const inputValue = categoryInput.current.value.trim()
    if (inputValue.length > 2) {
      await createCategory(url, inputValue, dispatch)
      submitForm.current.reset()
      await getAllCategories(url, dispatch)
      errorMessage.current.classList.add("hidden")
    } else {
      errorMessage.current.classList.remove("hidden")
      categoryInput.current.focus()
      setTimeout(() => {
        errorMessage.current?.classList.add("hidden")
      }, 3000)
    }
  }

  return (
    <div className="mt-[5px]">
      <form ref={submitForm} onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col">
          <label className="text-[16px] font-semibold" htmlFor="category-name">Category name</label>
          <input ref={categoryInput} className="border-[2px] hover:border-blue-100 focus:border-blue-700 outline-none py-[6px] px-[10px] rounded-sm" type="text" id="category-name" placeholder="Enter the category name" />
          <span ref={errorMessage} className="hidden text-[14px] text-red-500 font-semibold">
            Min 3 characters
          </span>
        </div>
        <div className="flex justify-end items-center gap-1 mt-[15px]">
          <button type="submit" disabled={state.createLoading? true : false} className="py-[5px] px-[10px] rounded-sm bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold text-[16px]">
            {state.createLoading?
            <div className="flex justify-center items-center gap-1 cursor-wait">
              <span className="animate-spin">
                <CgSpinner />
              </span>
              Send...
            </div>
            :
            <span>
              Send
            </span>}
          </button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default CreateCategory
