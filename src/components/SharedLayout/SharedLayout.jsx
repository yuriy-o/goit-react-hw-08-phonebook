import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Notification from 'components/Notification/Notification';
import { AppBar } from 'components/AppBar/AppBar';

import './SharedLayout.css';

export default function SharedLayout() {
  return (
    <>
      <div className="container">
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
          <Notification />
        </Suspense>
      </div>
    </>
  );
}
