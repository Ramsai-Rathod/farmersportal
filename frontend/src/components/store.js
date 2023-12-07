import {create }from 'zustand';
const store=(set)=>(
{
    productsarray:[],
    userdata:{},
    loggedin:false,
    setLogin:(bol)=>{
        set()
    },
    setuser:(user)=>{
        set({userdata:user})
    },
    setproducts:(products)=>{
            set(
                {
                    productsarray:[...products],
                }
                
            )
    }
}
);


export const useStore=create(store);