import axios from "axios"
import { toast } from 'react-toastify';

export const getAllCategories = async (url, dispatch) => {
    dispatch({ type: "FETCHING_CAT_DATA" })
    try {
        const res = await axios.get(url)
        dispatch({ type: "FETCHED_CAT_DATA", payload: res.data })
    } catch (err) {
        console.log(err)
        dispatch({ type: "FETCHED_CAT_DATA_ERR", paylaod: err })
    }
}

export const getAllProducts = async (url, dispatch) => {
    dispatch({ type: "FETCHING_PRO_DATA" })
    try {
        const res = await axios.get(url)
        dispatch({ type: "FETCHED_PRO_DATA", payload: res.data })
    } catch (err) {
        console.log(err)
        dispatch({ type: "FETCHED_PRO_DATA_ERR", paylaod: err })
    }
}

export const createCategory = async (url, data, dispatch) => {
    dispatch({ type: "SET_CREATE_LOADING", payload: true })
    try {
        const res = await axios.post(url, { title: data })
        toast.success('Create succsessfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        dispatch({ type: "SET_CREATE_LOADING", payload: false })
    } catch (err) {
        console.log(err)
        toast.error('Error category create item', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        dispatch({ type: "SET_CREATE_LOADING", payload: false })
    }
}

export const deleteCategory = async (url, id, dispatch) => {
    dispatch({ type: "SET_CREATE_LOADING", payload: true })
    try {
        const res = await axios.delete(`${url}/${id}`)
        toast.success('Delete succsessfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        dispatch({ type: "SET_CREATE_LOADING", payload: false })
    } catch (err) {
        console.log(err)
        toast.error('Error delete item', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        dispatch({ type: "SET_CREATE_LOADING", payload: false })
    }
}

export const updateCategory = async (url, id, data) => {
    try {
        const res = await axios.patch(`${url}/${id}`, { title: data })
        toast.success('Update succsessfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    } catch (err) {
        console.log(err)
        toast.error('Error update item', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
}

export const createProduct = async (url, data, dispatch) => {
    dispatch({ type: "SET_CREATE_LOADING", payload: true })
    try {
        const res = await axios.post(url, data)
        toast.success('Create succsessfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        dispatch({ type: "SET_CREATE_LOADING", payload: false })
    } catch (err) {
        console.log(err)
        toast.error('Error create product item', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        dispatch({ type: "SET_CREATE_LOADING", payload: false })
    }
}


export const deleteProduct = async (url, id, dispatch) => {
    dispatch({ type: "SET_CREATE_LOADING", payload: true })
    try {
        const res = await axios.delete(`${url}/${id}`)
        toast.success('Delete succsessfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        dispatch({ type: "SET_CREATE_LOADING", payload: false })
    } catch (err) {
        console.log(err)
        toast.error('Error delete item', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        dispatch({ type: "SET_CREATE_LOADING", payload: false })
    }
}

export const updateProduct = async (url, id, data) => {
    try {
        const res = await axios.patch(`${url}/${id}`, data)
        toast.success('Update succsessfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    } catch (err) {
        console.log(err)
        toast.error('Error update item', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
}