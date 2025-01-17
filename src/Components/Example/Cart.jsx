import React, { useContext } from 'react';
import { mycontext } from '../../App';

const Cart = () => {
    const [data,setData]=useContext(mycontext)
    const totalPrice = data.reduce((total,data)=>total+data.price*(data.quantity || 1),0);
    const totalQuantity = data.reduce((total,data)=>total+(data.quantity || 1),0);
    const handleInc =(id,quantity)=>{
    setData(curr=>{
        return curr.map((element)=>{
          if(element.id===id){
            return{...element,quantity:(element.quantity+1 || quantity+1)}
          }
          return element
        })
    })

    }
    const handleDec =(id,quantity)=>{
        setData(curr=>{
            return curr.map((element)=>{
              if(element.id===id && quantity>0){
                return{...element,quantity:(element.quantity-1 || quantity-1)}
              }
              return element
            })
        })
    }
    return (
        <div>
            <h1>Cart Page</h1>
            <h1>Total Quantity:{totalQuantity}</h1>
            <h1>Toatal Price:{totalPrice}</h1>
            {data.map((element,index)=>{
                return(
                   <div key={index}>
                    <h1>{element.id}</h1>
                    <h1>{element.title}</h1>
                    <h1>{element.description}</h1>
                    <h1>{element.category}</h1>
                    {element.images.map((ele,i)=>{
                        return(
                            <div key={i}>
                                <img src={ele} />
                            </div>
                        )
                    })}
                    <button onClick={()=>handleInc(element.id,element.quantity || 1)}>+</button>
                    <button onClick={()=>handleDec(element.id,element.quantity || 1)}>-</button>
                   </div>
                )
            })}
        </div>
    );
};

export default Cart;