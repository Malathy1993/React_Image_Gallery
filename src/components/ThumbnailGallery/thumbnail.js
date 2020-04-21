import React from 'react';

const  Thumnail = ({imageURl,handleClick, index}) => {
    return (
        <div style={styles}>
          <img src={imageURl} alt={imageURl}
          style={{
            height : '100%',
            width : '100%'
          }}
          onClick = {handleClick}
          data-index={index}
          />
        </div>
    )
}

const styles = {
    height : '50%',
    width : '25%',
    background : '#777'
}

export default Thumnail