import { FormEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";

type Post = {
  id: string;
  post: string;
};

const Thread = () => {
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [post, setPost] = useState("");

  const pathname = useLocation().pathname.split("/");

  useEffect(() => {
    const getAllThreads = async () => {
      const res = await fetch(
        `https://railway.bulletinboard.techtrain.dev/threads/${pathname[2]}/posts`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      console.log(data.posts);
      setPostsData(data.posts);
    };
    getAllThreads();
  }, []);

  const sendPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      post: post,
    };

    const res = await fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/${pathname[2]}/posts`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const data = await res.json();
    console.log(data);
    setPostsData([...postsData, data]);
    console.log(postsData);
  };

  return (
    <>
      <header className="header">
        <div className="headerContainer">
          <h3 className="title">掲示板</h3>
          <a href="/threads/new">スレッドをたてる</a>
        </div>
      </header>
      <form onSubmit={sendPost}>
        <textarea
          name="post"
          id="post"
          value={post}
          onChange={(e) => {
            setPost(e.target.value);
          }}
        ></textarea>
        <p>{post}</p>
        <input type="submit" value="送信" />
      </form>
      <ul>
        {Object.values(postsData).map((postData: Post) => (
          <li key={postData.id}>{postData.post}</li>
        ))}
      </ul>
    </>
  );
};

export default Thread;
