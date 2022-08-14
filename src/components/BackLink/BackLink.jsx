import { useLocation } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import './BackLink.styled.css'

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className='BackLink'>
      <HiArrowLeft size="15" />
      {children}
    </Link>
  );
};