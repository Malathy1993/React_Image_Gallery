import React from 'react';

const  ActiveThumbnailWindow = ({activeThumbnails}) => {
    // activeThumbnails.map((obj)=>{
    //     console.log(obj.author);  
    // })  

      
    return (
        <div style={styles}>
            
            <img style={Imgstyles} src={activeThumbnails.download_url}/>
        </div>
    )
}

const styles = {
    height : '65%',
    width : '100%',
    background : '#222',
}
const Imgstyles = {
    height : '100%',
    width : '100%',
    background : '#222',
}

export default ActiveThumbnailWindow