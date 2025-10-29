import Header from './Header'
import CardContainer from './CardContainer'
import api from '../../api'
import { useEffect, useState } from 'react'
import Error from '../ui/Error'
import { randomValue } from '../../GenerateCartCode'

const HomePage = () => {
const [products, setProducts] = useState([])
const [error, setError] = useState("")

    // This is for fixing the random cart code when we fetch the home page
    useEffect(function(){
        if(localStorage.getItem("cart_code") === null){
            localStorage.setItem("cart_code", randomValue)
        }
    },[])


    useEffect(function(){
        api.get("products")
        .then (res => {
        console.log(res.data)
        setProducts(res.data)
        setError("")
        })

    .catch(err =>{
        console.log(err.message)
        setError(err.message)
    })
},[])

return (
    <>
    <Header />
    {error && <Error error={error} />}
    {error !="" || <CardContainer products = {products}/>}
    </>
)
}

export default HomePage
