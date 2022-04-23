import axios from "axios";
const { useState, useEffect } = require("react");

const ShowCards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setData(res.data);
    };
    FetchData();
  }, []);

  return (
    <>
      <div>
        {data.map((todo, i) => {
          return (
            <div key={i}>
              <span>{todo.title}</span>
              <span> - Status: {todo.completed ? "Done" : "Pending"} </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShowCards;
