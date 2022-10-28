import {React,useEffect , useState} from 'react'
import MainLayout from '../layouts/MainLayout'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const POSPage = () => {

  const [product , setProduct] =useState([])
  const [isLoading , setIsLoading] = useState(false)
  const [cart , setCart]  = useState([])
  const [totalAmount , setTotalAmpount] = useState(0)
  const fetchProducts = async() => {
    setIsLoading(true)
    await Axios.get('http://localhost:5000/products')
    .then((res) => {
      setProduct(res.data)
    })
    setIsLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  },[])
  
  const AddProduct = async(product)=>{
    // console.log(product)
    let findProductInCart = await cart.find(item=>{
      // console.log(i)
       return item.id === product.id
    })
    if(findProductInCart){
      let newCart = []
      let newItem

       cart.forEach(cartItem =>{
        if(cartItem.id === product.id){
            newItem = {
              ...cartItem, 
              quantity : cartItem.quantity +1,
              totalAmount: cartItem.price * (cartItem.quantity + 1)

            }
          newCart.push(newItem)
        }
        else{
          newCart.push(newItem)
        }
      })
       setCart(newCart)
       notify()
       function notify(){
        toast(`Added ${newItem.name} to Cart`);
       } 
    }
    else{
        let addingProduct = {
          ...product , 
          "quantity" : 1,
          "totalAmount" : product.price 
        }
        setCart([...cart, addingProduct])
        notify()
        function notify(){
         toast(`Added ${product.name} to Cart`);
        } 

    }
  }

  const removeProduct =  (product)=>{
      const newCart = cart.filter(cartItem => cartItem.id !== product.id)
      setCart(newCart)
  }

   useEffect(() => {
    var newTotalAmount = 0
    cart.forEach(icart =>{
      newTotalAmount = newTotalAmount + parseInt(icart.totalAmount)
      // console.log( typeof (icart.totalAmount))
    })
    setTotalAmpount(newTotalAmount)
  
  }, [cart])
  
  return (
   
    <MainLayout>
      <>
      <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
      <div className='d-flex mt-5 bg-light'>

     
      <div className='row'>
        <div className='col-md-8 d-flex'>
          {isLoading ? 'Loading' : <div className='row shadow-md text-center d-flex'>
          {product.map((product,key)=>
          <div key={key} className='col-md-4 m-1'>
            <div className='border' >
              <p>{product.name}</p>
              <img src={product.image} className = "img-fluid" alt={product.name} />
              <p> Price : {product.price}</p>
              <button className='btn btn-primary' onClick={()=>{AddProduct(product)}}>Add to Cart</button>
            </div>
          </div>
        )}  
        </div>}
        </div>
      </div>
      <div className='col-lg-4'>
            <div className='table-responsive bg-light'>
              <table className='table table-responsive'>
                <thead>
                  <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                    <td>Action</td>
                  </tr>
                  </thead>
                  <tbody>
                    { cart ? cart.map((cartProduct ,key) =>
                    <tr key={key}>
                      {console.log( typeof (cartProduct.id))  }
                      <td>{ cartProduct.id}</td>
                      <td>{cartProduct.name}</td>
                      <td>{cartProduct.price}</td>
                      <td>{cartProduct.quantity}</td>
                      <td>{cartProduct.totalAmount}</td>
                      {/* {console.log(cartProduct.totalAmount)} */}
                      <td>
                        <button className='btn btn-danger btn-sm' onClick={()=>removeProduct(cartProduct)} >Remove</button>  
                      </td>

                    </tr>) 
                  : 'No item Found'}
                  </tbody>
                </table> 

                <h2 className='px-2 text-dark'>Total Amount Rs.{totalAmount} </h2>

            </div>
      </div>
      
      
      </div>
      
      </>

    </MainLayout>
   
  )
}

export default POSPage