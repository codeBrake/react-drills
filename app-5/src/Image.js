import React from 'react';

function Image(props){
    return(
        <div>
            <img src={ props.myImage } alt="" height="700" width="700"/>
        </div>
    )

}
export default Image;