import React, {useState} from 'react'
import axios from "axios"



const Form = ({changeRefresh}) => {

    // STATE
    const [title,setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const [errors, setErrors] = useState([]); 

    const createProduct = e => {
        e.preventDefault()
        // CREATE THE BODY TO SEND TO EXPRESS
        let body = {
            title, 
            price, 
            description, 
            
        }
        // MAKE THE POST REQUEST TO EXPRESS
        axios.post("http://localhost:8000/api/products", body)
            .then(res => {
                console.log(res.data)
                setTitle("")
                setPrice("")
                setDescription("")
                setErrors([])
                changeRefresh()
            })
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

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={createProduct}>
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
            {
                errors.map((error) => <p>{error}</p>)
            }
        </fieldset>
    )
}

export default Form