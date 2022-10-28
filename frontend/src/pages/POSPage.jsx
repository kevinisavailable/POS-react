import {React,useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Axios from 'axios'
const POSPage = () => {

  const [product , setProduct] =useState([])
  const [isLoading , setIsLoading] = useState(false)
  
  const fetchProducts = async() => {
    setIsLoading(true)
    const result = await Axios.get('http://localhost:5000/products')
    .then((res) => {
      setProduct(res.data)
    })
    setIsLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  },[])
  
  const AddProduct = (product)=>{
  console.log(product)
  }
  return (
   
    <MainLayout>
      <>
      <div className='row'>
        <div className='col-md-8'>
          {isLoading ? 'Loading' : <div className='row'>
          {product.map((product,key)=>
          <div key={key} className='col-md-4'>
            <div className='border' onClick={()=>{AddProduct(product)}}>
              <p>{product.name}</p>
              <img src={product.image} className = "img-fluid" alt={product.name} />
            </div>
          </div>
        )}  
        </div>}
        </div>
      </div>
      </>

    </MainLayout>
   
  )
}

export default POSPage