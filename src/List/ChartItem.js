import React,{useEffect, useState} from "react";

export default function ChartItem(){
    const prodChart=[
        {prodId:1,prodName:"Shampoo",qty:3,salary:4500},
        {prodId:2,prodName:"Soap",qty:1,salary:4500},
        {prodId:3,prodName:"Detergen",qty:1,salary:4500}
    ]
    const [cart,setCart]=useState(prodChart)
    const [total,setTotal]=useState(0)
    const [totalQty,setTotalQty]=useState(0)

    const addQuantity=(id)=>{
        setCart(
            [...cart.map(carts=>{
                if(id===carts.prodId){
                    carts.qty+=1
                    return carts
                }
                else{
                    return carts
                }
            })]
        )
    }

    const decreaseQuantity=(id)=>{
        setCart(
            [...cart.map(carts=>{
                if(id===carts.prodId){
                    carts.qty-=1
                    if(carts.qty<0){ //agar tidak mendapatkan nilai negatif
                        carts.qty=0
                    }
                    return carts
                }
                else{
                    return carts
                }
            })]
        )
    }

    useEffect(()=>{
        const TotalHarga=cart.reduce((sum,el)=>sum+(el.salary*el.qty),0)
        setTotal(TotalHarga)
        const TotalQty=cart.reduce((sum,el)=>sum+(el.qty),0)
        setTotalQty(TotalQty)
    })
    return(
        <div>
            <h2>Item List</h2>
            <table>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Sub Total</th>
                <tbody>
                    {
                        (cart||[]).map(carts=>(
                            <tr key={carts.prodId}>
                                <td>{carts.prodId}</td>
                                <td>{carts.prodName}</td>
                                <td>{carts.qty}</td>
                                <td>{carts.salary}</td>
                                <td>{carts.salary*carts.qty}</td>
                                <td>
                                    <button onClick={()=>addQuantity(carts.prodId)}>Tambah Kuantitas</button>
                                    <button onClick={()=>decreaseQuantity(carts.prodId)}>Kurangi Kuantitas</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <h1>Total Harga: {total}</h1>
            <h1>Total Produk: {totalQty}</h1>
        </div>
    )
}