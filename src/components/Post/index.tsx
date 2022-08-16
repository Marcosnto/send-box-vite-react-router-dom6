import { useParams, useSearchParams } from "react-router-dom";
import "./styles.css";

export const Post = () => {
  const { id } = useParams();

  return <h1>Post {id}</h1>;
};
