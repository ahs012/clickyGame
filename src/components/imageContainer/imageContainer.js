import React from 'react';
import './style.css';

 function ImageContainer (props){ 
   
    // Images array with their onclick functions
    const array = [
    <img key="1" id="1" src={require(`../../assets/images/hollowHornet.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="hh"/>,
    <img key="2" id="2" src={require(`../../assets/images/hollowSilk.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="hs"/>,
    <img key="3" id="3" src={require(`../../assets/images/hollowKnight.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="hk"/>,
    <img key="4" id="4" src={require(`../../assets/images/hollowBoss.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="hb"/>,
    <img key="5" id="5" src={require(`../../assets/images/hollowZaza.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="hz"/>,
    <img key="6" id="6" src={require(`../../assets/images/hollowLace.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="hl"/>,
    <img key="7" id="7" src={require(`../../assets/images/hollowZote.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="hzo"/>,
    <img key="8" id="8" src={require(`../../assets/images/hollowMerchant.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="hm"/>,
    <img key="9" id="9" src={require(`../../assets/images/hollowQuirrel.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="hq"/>,
    <img key="10" id="10" src={require(`../../assets/images/hollowHat.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="hha"/>,
    <img key="11" id="11" src={require(`../../assets/images/hollowSentry.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="hs"/>,
    <img key="12" id="12" src={require(`../../assets/images/hollowMato.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="hma"/>];
    
    // Function to Shuffle IMG Array once an IMG is clicked
    function shuffle(array) {

        let counter = array.length;
        let temp;
        let index;

        while(counter > 0) {
            index = Math.floor(Math.random() * counter);
            counter--;
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

    let images = shuffle(array);

    return(
        <main className="images">
            <div className="container-fluid">
                {images}
            </div>
        </main>
    );
}

export default ImageContainer;