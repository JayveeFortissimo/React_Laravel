import Stylesia from './Stylesia.module.css'

const Addingsi = ({usernames,ID,onChecked,id}) => {
  return (
    <>
    
    <div className={Stylesia.box}> 
                    <p>Admin id: {ID}</p>
                    <p>username: {usernames}</p>
                
                        <div className={Stylesia["food-btn"]}>
                        <button className={Stylesia.delete} id={Stylesia["register-btn"]} onClick={()=>{
                            onChecked(id)
                        }}>Delete</button>    
                            <button  className={Stylesia.update} id={Stylesia["register-btn"]}>Update</button>   

                       </div> 
                </div>
    
    
    
    s</>
  )
}

export default Addingsi