import Typography from '@mui/material/Typography';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const HomeBoxes=()=>{
    return(
        <div style={{display:'flex',}}>

{/*Daily salce box*/}
            <div >
                    <div  style={styles.topContainer}>
                        <div style={{display:'flex',paddingTop:10}}>
                                <div>
                                        <b style={{color:'#363033',paddingLeft:20}}>Daily Sales </b>  
                                        <b style={{fontSize:40,color:'#363033',paddingLeft:20,marginTop:50}}>126</b>                                        
                                </div>
                                <div style={{paddingTop:10,paddingLeft:30}}>
                                <AccountCircleIcon sx={{fontSize:65,color:'white'}}/>

                                </div>
                        </div>
                    </div>
                    <div style={styles.bottomContainer} onClick={()=>console.log('day salce click')} >
                    <Typography variant="h6" gutterBottom style={{color:'#ffffff'}}>More info </Typography>  

                    </div>
            </div>
{/*Daily salce box*/}
            <div >
                    <div  style={styles.topContainer}>
                        <div style={{display:'flex',paddingTop:10}}>
                                <div>
                                        <b style={{color:'#363033',paddingLeft:20}}>Daily Sales </b>  
                                        <b style={{fontSize:40,color:'#363033',paddingLeft:20,marginTop:50}}>126</b>                                        
                                </div>
                                <div style={{paddingTop:10,paddingLeft:30}}>
                                <AccountCircleIcon sx={{fontSize:65,color:'white'}}/>

                                </div>
                        </div>
                    </div>
                    <div style={styles.bottomContainer} onClick={()=>console.log('day salce click')} >
                    <Typography variant="h6" gutterBottom style={{color:'#ffffff'}}>More info </Typography>  

                    </div>
            </div>


 {/*Daily salce box*/}
            <div >
                    <div  style={styles.topContainer}>
                        <div style={{display:'flex',paddingTop:10}}>
                                <div>
                                        <b style={{color:'#363033',paddingLeft:20}}>Daily Sales </b>  
                                        <b style={{fontSize:40,color:'#363033',paddingLeft:20,marginTop:50}}>126</b>                                        
                                </div>
                                <div style={{paddingTop:10,paddingLeft:30}}>
                                <AccountCircleIcon sx={{fontSize:65,color:'white'}}/>

                                </div>
                        </div>
                    </div>
                    <div style={styles.bottomContainer} onClick={()=>console.log('day salce click')} >
                    <Typography variant="h6" gutterBottom style={{color:'#ffffff'}}>More info </Typography>  

                    </div>
            </div>
        </div>
    );
}

export default HomeBoxes;

const styles={
    topContainer:{
        height:80, 
        width:250, 
        backgroundColor:'#f27521', 
        marginTop:30, 
        borderTopLeftRadius:10, 
        borderTopRightRadius:10,
        marginLeft:100
        
    },
    bottomContainer:{
        height:30, 
        width:250, 
        backgroundColor:'#e35d02',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        marginLeft:100,
        justifyContent: 'center',
        display:'flex',
        
    }
}

