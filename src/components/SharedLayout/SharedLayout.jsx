import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import './SharedLayout.styled.css';

export const SharedLayout = () => {
  return (
    <div className="Container">
      <header className="Header">
        <nav>
          <NavLink to="/" className='NavLink'>Home</NavLink>
          <NavLink to="/movies" className='NavLink'>Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};