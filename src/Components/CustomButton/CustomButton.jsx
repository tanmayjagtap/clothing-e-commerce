import React from 'react';
import './CustomButton.scss'

const CustomBotton = ({children , isGoogleSignIn , ...otherProps}) => {
    return(
        <button className={`${isGoogleSignIn?'sign-in-google':''} custom-button`} {...otherProps}>{children}</button>
    );
}

export default CustomBotton;