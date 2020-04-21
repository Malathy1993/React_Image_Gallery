import React from 'react';
import Thumnail from './thumbnail';

const  ThumnailGrid = ({thumbnails,handleClick}) => {
   console.log(thumbnails);
   
    return (
        <div style={styles}>
            {
                thumbnails.map((thumb, i)=>{
                    return(

                        <Thumnail 
                        imageURl = {thumb.download_url}
                        key={thumb.download_url}
                        handleClick = {handleClick}
                        index = {i}
                       />
                    )
                })
            }
        </div>
    )
}

const styles = {
    height : '35%',
    width : '100%',
    background : 'red',
    display : 'flex',
    flexWrap : 'wrap'
}

export default ThumnailGrid