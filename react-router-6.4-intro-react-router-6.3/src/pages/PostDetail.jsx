
import BlogPost from '../components/BlogPost';
import { getPost } from '../util/api';
import {useLoaderData} from "react-router-dom";

function PostDetailPage() {
  const postData = useLoaderData();

  return (
    <>
      <BlogPost title={postData.title} text={postData.body} />
    </>
  );
}

export default PostDetailPage;

export function loader({params}) {
  const postId = params.id;
  return getPost(postId);
}