function Userslist(props){
let {userObj} = props;
    return(
        
        <div className="shadow-2xl p-4 border-2 rounded-3xl ">
            <img src={userObj.image} alt="img here" className="rounded-4xl m-auto"/>
            <h2 className="font-bold text-center">{userObj.name}</h2>
            <p className="text-m text-center">{userObj.email}</p>
            
        </div>
    )

}


export default Userslist