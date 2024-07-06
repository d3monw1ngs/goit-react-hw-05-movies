import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import  Header  from 'components/Header/Header';
import { RotatingLines } from 'react-loader-spinner';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div>
        <Header />
        <Suspense fallback={<div className={css.loading}><RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading" />
        </div>}>
            <Outlet />
        </Suspense>
    </div>
  );
};

export default SharedLayout;