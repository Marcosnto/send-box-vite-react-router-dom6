import { useParams, useSearchParams } from "react-router-dom";
import "./styles.css";

export const Posts = () => {
  const { id } = useParams();
  const [qs] = useSearchParams();

  return <h1>Posts</h1>;
};
