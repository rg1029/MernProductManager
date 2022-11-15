import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Dashboard = ({refresh}) => {

  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => setAllProducts(res.data))
      .catch(errors => console.log(errors))
  }, [refresh])

  return (
    <fieldset>
      <legend>Dashboard.jsx</legend>
      {
        allProducts.map((product) => {
          return(
            <div key={product._id}>
              <h1>
                <Link to={`/products/${product._id}`}>{product.title}</Link>
              </h1>
              <h1>{product.price}</h1>
              <h2>{product.description}</h2>
              <Link to={`/products/edit/${product._id}`}>Edit</Link>
            </div>
          )
        })
      }
    </fieldset>
  )
}

export default Dashboard