import {useState, useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';


const Productslist = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
 //       console.log("TEST")
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProduct(response.data);
    }

    const deleteproducts = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`);
        getProducts();

    }

    return (
        <div>
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr key={products.id}>
                        <th>No</th>
                        <th>Title</th>
                        <th>price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr>
                        <td>{index +1}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>
                            <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>
                            <button onClick={ () => deleteproducts(product.id) } className="button is-small is-danger">Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Productslist
