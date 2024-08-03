import { FormEvent, useState } from "react";

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
      <h2>スレッド新規作成</h2>
      <form onSubmit={sendData}>
        <input
          type="text"
          id="threadName"
          name="threadName"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="送信" />
      </form>
      <p>{text}</p>
      <a href="/">Topに戻る</a>
    </>
  );
};

export default CreateThread;
