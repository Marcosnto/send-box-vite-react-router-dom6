import { Outlet } from "react-router-dom";
import "./styles.css";

export const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
};
