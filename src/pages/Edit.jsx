
import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'



const Edit = () => {
  const { product_id } = useParams()
  const navigate = useNavigate()

  // STATE
    const [title,setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

  const [errors, setErrors] = useState([]);

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

  const updateProduct = e => {
    e.preventDefault()
    let updateBody = {
      title, 
      price, 
      description, 
    }
    // MAKE PUT REQUEST TO EXPRESS
    axios.put(`http://localhost:8000/api/products/${product_id}`, updateBody)
      .then( res => navigate("/"))
      .catch(err=>{
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
    })
  }

  const deleteHandler = (product_id) => {
    axios.delete(`http://localhost:8000/api/products/${product_id}`)
      .then(res => navigate("/"))
      .catch(errors => console.log(errors))
  }

  return (
    <fieldset>
    <legend>delete.jsx</legend>
    <form onSubmit={updateProduct}>
        <p>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}  />
        </p>
        <p>
            Price:
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </p>
        <p>
            Description:
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}  />
        </p>
        <button>Submit</button>
    </form>
    <button onClick={() => deleteHandler(product_id)}>Delete</button>
    {
        errors.map((error) => <p>{error}</p>)
    }
</fieldset>
  )
}

export default Edit