import React, { useReducer} from 'react'
import { MainContext } from './store/context'
import { initialState, reducer } from './store/store'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Categories from './pages/Categories'
import CreateCategory from './pages/CreateCategory'
import Products from './pages/Products'
import CreateProduct from './pages/CreateProduct'




const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Categories/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/create-category' element={<CreateCategory/>}/>
        <Route path='/create-product' element={<CreateProduct/>}/>
      </Route>
    )
  )

  return (
    <MainContext.Provider value={{state, dispatch}}>
      <RouterProvider router={router}/>
    </MainContext.Provider>
  )
}

export default App
