import React from 'react'
import NavigationBS from './NavigationBS'
import bb from './stylong.module.css'

const Orders = () => {




  return (
    <>
    
    <NavigationBS />

    <div className={bb.karlo}>

<h1> PLACED ORDERS</h1>

<div className={bb.container}>

    <div className={bb.box}> 
        <p>user id: 1</p>
        <p>name: Abdul</p>
        <p>email: Abdul@gmai.com</p>
        <p>address: Somewhere, elsewhere</p>
        <p>Phone Number: 0912-345-6789</p>
        <p>Orders:</p>
            <ul>
                <li>pizza 01 (01 x 2)</li>
                <li>donut 01 (01 x 2)</li>
                <li>pancake 01 (01 x 2)</li>
            </ul>
        <p>total price: P600.00</p>
            <div className={bb.select}>
                <select>
                    <option>Pending</option>
                    <option>Completed</option>
                </select>
                <div className={bb["select_arrow"]}>
                </div>
            </div>

            <div className="food-btn">
                <button className={bb.update}>Update</button>
                <button className={bb.delete}>Delete</button>
           </div> 
    </div>

    <div className={bb.box}> 
        <p>user id: 2</p>
        <p>name: Abdul</p>
        <p>email: Abdul@gmai.com</p>
        <p>address: Somewhere, elsewhere</p>
        <p>Phone Number: 0912-345-6789</p>
        <p>Orders:</p>
            <ul>
                <li>pizza 01 (01 x 2)</li>
                <li>donut 01 (01 x 2)</li>
                <li>pancake 01 (01 x 2)</li>
            </ul>
        <p>total price: P600.00</p>
            <div className={bb.select}>
                <select>
                    <option>Pending</option>
                    <option>Completed</option>
                </select>
                <div className={bb["select_arrow"]}>
                </div>
            </div>

            <div className={bb["food-btn"]}>
                <button className={bb.update}>Update</button>
                <button className={bb.delete}>Delete</button>
           </div> 
    </div>

    <div className={bb.box}> 
        <p>user id: 3</p>
        <p>name: Abdul</p>
        <p>email: Abdul@gmai.com</p>
        <p>address: Somewhere, elsewhere</p>
        <p>Phone Number: 0912-345-6789</p>
        <p>Orders:</p>
            <ul>
                <li>pizza 01 (01 x 2)</li>
                <li>donut 01 (01 x 2)</li>
                <li>pancake 01 (01 x 2)</li>
            </ul>
        <p>total price: P600.00</p>
            <div className={bb.select}>
                <select>
                    <option>Pending</option>
                    <option>Completed</option>
                </select>
                <div className={bb["select_arrow"]}>
                </div>
            </div>

            <div className={bb["food-btn"]}>
                <button className={bb.update}>Update</button>
                <button className={bb.delete}>Delete</button>
           </div> 
    </div>

    <div className={bb.box}> 
        <p>user id: 4</p>
        <p>name: Abdul</p>
        <p>email: Abdul@gmai.com</p>
        <p>address: Somewhere, elsewhere</p>
        <p>Phone Number: 0912-345-6789</p>
        <p>Orders:</p>
            <ul>
                <li>pizza 01 (01 x 2)</li>
                <li>donut 01 (01 x 2)</li>
                <li>pancake 01 (01 x 2)</li>
            </ul>
        <p>total price: P600.00</p>
            <div className={bb.select}>
                <select>
                    <option>Pending</option>
                    <option>Completed</option>
                </select>
                <div className={bb["select_arrow"]}>
                </div>
            </div>

            <div className={bb["food-btn"]}>
                <button className={bb.update}>Update</button>
                <button className={bb.delete}>Delete</button>
           </div> 
    </div>

    <div className={bb.box}> 
        <p>user id: 5</p>
        <p>name: Abdul</p>
        <p>email: Abdul@gmai.com</p>
        <p>address: Somewhere, elsewhere</p>
        <p>Phone Number: 0912-345-6789</p>
        <p>Orders:</p>
            <ul>
                <li>pizza 01 (01 x 2)</li>
                <li>donut 01 (01 x 2)</li>
                <li>pancake 01 (01 x 2)</li>
            </ul>
        <p>total price: P600.00</p>
            <div className={bb.select}>
                <select>
                    <option>Pending</option>
                    <option>Completed</option>
                </select>
                <div className={bb["select_arrow"]}>
                </div>
            </div>

            <div className={bb["food-btn"]}>
                <button className={bb.update}>Update</button>
                <button className={bb.delete}>Delete</button>
           </div> 
    </div>

  
    
   
</div>
</div>
    
    
    </>
  )
}

export default Orders