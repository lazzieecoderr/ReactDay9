import React, { createContext, useState } from 'react';
import CompA from './Components/CompA';
import CompB from './Components/CompB';
import ComC from './Components/ComC';
import UserProfile from './Components/UserProfile';
import Cart from './Components/Example/Cart';

export const mycontext = createContext('')
const App = () => {
  // const[ContextValue,setContextValue] =useState(0)
  // const [profile,setProfile]=useState("rupan")
 
  let products=[
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
            "data:image/jpeg;base64,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",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/2/1.jpg",
            "https://i.dummyjson.com/data/products/2/2.jpg",
            "https://i.dummyjson.com/data/products/2/3.jpg",
            "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        ]
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/3/1.jpg"
        ]
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/4/1.jpg",
            "https://i.dummyjson.com/data/products/4/2.jpg",
            "https://i.dummyjson.com/data/products/4/3.jpg",
            "https://i.dummyjson.com/data/products/4/4.jpg",
            "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        ]
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/5/1.jpg",
            "https://i.dummyjson.com/data/products/5/2.jpg",
            "https://i.dummyjson.com/data/products/5/3.jpg"
        ]
    }
]
const [data,setData]=useState(products)
  return (
    <div>
       <h1>App Component</h1>
        {/* <h1>The value:{ContextValue}</h1>  */}
       {/* <h1>The user name is :{profile}</h1> */}
        {/* <mycontext.Provider value={[ContextValue,setContextValue]}>
       
          <CompA />
        
       </mycontext.Provider>   */}
       {/* <mycontext.Provider value={{profile,setProfile}} >
        <UserProfile />
       </mycontext.Provider> */}
       <mycontext.Provider value={[data,setData]}>
        <Cart />
       </mycontext.Provider>

    </div>
  );
};

export default App;