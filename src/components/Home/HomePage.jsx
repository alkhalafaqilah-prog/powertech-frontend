import Header from './Header'
import CardContainer from './CardContainer'
import api from '../../api'
import { useEffect, useState } from 'react'
import Error from '../ui/Error'

const HomePage = () => {
const [products, setProducts] = useState([])
const [error, setError] = useState("")

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
