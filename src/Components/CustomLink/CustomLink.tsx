import { Link, useMatch } from "react-router-dom";
import "./custom-link.css";

interface IProps {
  to: string;
  children: React.ReactNode;
}
export const CustomLink: React.FC<IProps> = ({ children, to, ...props }) => {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      className={`${match ? "active_link" : "not_active_link-color"} link`}
      {...props}
    >
      {children}
    </Link>
  );
};