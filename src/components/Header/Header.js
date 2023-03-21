import { Fragment } from 'react';
import classes from './Header.module.css';
import road from '../../asset/road.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Road Maps </h1>
      </header>
      <div className={classes['main-image']}>
        <img src={road} alt='' srcset='' />
      </div>
    </Fragment>
  );
};

export default Header;
