import {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';

const Editproduct = () => {
    const[title,setTitle] = useState('')
    const[price,setPrice] = useState('')
    const[id, setID] = useState(0)
    const history = useHistory();

    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/products/${id}`, {
            title: title,
            price: price
        });
        history.push("/");
    }

    const getProductByLastID = async (currentID) =>{
        const response = await axios.get(`http://localhost:5000/products/${currentID}`);
        setTitle(response.data.title);
        setPrice(response.data.price);
    }

    useEffect( () => {
        const urlFully = window.location.href
        var lastID = urlFully.substring(urlFully.lastIndexOf("/") + 1, urlFully.length)
        setID(lastID)
        getProductByLastID(lastID);
    },[]);

    

    return (
        <div>
            <form onSubmit={ updateProduct }> 
                <div className="field">
                    <label className="label">Title</label>
                    <input
                     className="input"
                      type="text"
                       placeholder="Title"
                       value ={title}
                       onChange={(e) => setTitle(e.target.value)} 
                       />
                </div>
                <div className="field">
                    <label className="label">Price</label>
                    <input
                     className="input" 
                     type="number"
                     placeholder="Price"
                     value={price}
                     onChange={(e) => setPrice(e.target.value) }
                     /> 
                </div>
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default Editproduct
