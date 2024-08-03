import { FormEvent, useState } from "react";
import "./App.css";

const CreateThread = () => {
  const [text, setText] = useState("");

  const sendData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      title: text,
    };

    const res = await fetch(
      "https://railway.bulletinboard.techtrain.dev/threads",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <header className="header">
        <div className="headerContainer">
          <h3 className="title">掲示板</h3>
          <a href="/threads/new">スレッドをたてる</a>
        </div>
      </header>
      <h2>スレッド新規作成</h2>
      <form onSubmit={sendData}>
        <input
          type="text"
          id="threadName"
          name="threadName"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="buttonList">
          <a href="/" className="backLink">
            Topに戻る
          </a>
          <input type="submit" value="送信" className="submitButton" />
        </div>
      </form>
    </>
  );
};

export default CreateThread;
