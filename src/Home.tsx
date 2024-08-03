import { useEffect, useState } from "react";
import "./App.css";

type Thread = {
  id: string;
  title: string;
};

const Home = () => {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    const getAllThreads = async () => {
      const res = await fetch(
        "https://railway.bulletinboard.techtrain.dev/threads"
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      console.log(res);
      const data = await res.json();
      console.log(data);
      setThreads(data);
    };
    getAllThreads();
  }, []);

  return (
    <>
      <header className="header">
        <a href="/threads/new">スレッドをたてる</a>
      </header>
      <h2>新着スレッド</h2>
      <ul className="container">
        {threads.map((thread) => (
          <li key={thread.id} className="item">
            {thread.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;