import AppbarLogin from "./appBarLogin"
import LoginTable from "./loginTable";

const LoginPage=()=>{   

    return( 
        <div>             
            <div >
                <AppbarLogin/>
                
                <div style={{justifyContent:'center',width:"80%",alignContent:'center',paddingLeft:"35%",paddingTop:'2%',borderColor:'black',borderWidth:'4'}}>
                         <LoginTable/>
                </div>
            </div>

        </div>
    )
}

export default LoginPage