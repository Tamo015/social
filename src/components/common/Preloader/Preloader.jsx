import React from 'react';
import Loader from '../../../assets/images/loader.gif';
import classes from './Preloader.module.css';


const Preloader = () => {

  return (
    <div className={classes.styles_preloader}>
		<img src={Loader} />
    </div>
  );
}

export default Preloader;
