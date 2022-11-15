import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios"

const Details = () => {

  const [title,setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")



    const { product_id } = useParams()
    const navigate = useNavigate()

    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${product_id}`)
            .then(res => {
                console.log(res.data)
                const {title, price, description} = res.data
                setTitle(title)
                setPrice(price)
                setDescription(description)
            })
            .catch(errors => console.log(errors))
    }, [])
    const deleteHandler = (product_id) => {
        axios.delete(`http://localhost:8000/api/products/${product_id}`)
            .then(res => navigate("/"))
            .catch(errors => console.log(errors))
    }

    return (
        <fieldset>
            <legend>Details.jsx</legend>
            <h1>{title}</h1>
            <h1>{price}</h1>
            <h1>{description}</h1>
            <button onClick={() => deleteHandler(product_id)}>Delete</button>
        </fieldset>
    )
}

export default Details