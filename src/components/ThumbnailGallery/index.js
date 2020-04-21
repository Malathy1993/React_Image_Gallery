import React, { Component } from 'react';
import ActiveThumbnailWindow from './active-thumbnail-window';
import ThumnailGrid from './thumbnail-grid';
import axios from 'axios';

export class ThumbnailGallery extends Component {
    state = {
        thumbnails : [],
        activeIndex : 0
    }

    componentDidMount(){
        axios.get('https://picsum.photos/v2/list?page=2&limit=8')
        .then(res =>{
            this.setState({
                thumbnails : res.data
            })
        })
    }

renderThumbnails = () => {
    const { thumbnails, activeIndex} = this.state
    if(thumbnails.length){
        return(
            <>
            <ActiveThumbnailWindow
             activeThumbnails = {thumbnails[activeIndex]}
            />   
            <ThumnailGrid 
             thumbnails={thumbnails}
             handleClick={this.handleClick}
            />
            </>
        )
    }
     return null
}
handleClick = (e) =>{
    let newActiveIndex = e.target.getAttribute("data-index");
    this.setState({
        activeIndex : newActiveIndex
    })   
}

renderTextContevt = () =>{
    const { thumbnails, activeIndex} = this.state
    if(thumbnails.length){
        return(
            <>
            <h1>{thumbnails[activeIndex].author}</h1> 
            <p>{thumbnails[activeIndex].download_url}</p>
            </>
        )
    }
}

    render() {
        
        const {thumbnails} = this.state;
        console.log(thumbnails);

        return (
            <div style={thumbnailGalleryStyles}>
             
              {/* Left Side */}
               <div style={{flex:1}}>
                   { this.renderThumbnails()}
               </div> 

                {/* Right Side */}
               <div style={{flex:1, padding:'40px'}}>
               { this.renderTextContevt()}
               </div>

            </div>
        )
    }
}

const thumbnailGalleryStyles = {
    background: '#ddd',
    height : '500px',
    width : '1024px',
    margin : '40px auto',
    display : 'flex'
}

export default ThumbnailGallery
