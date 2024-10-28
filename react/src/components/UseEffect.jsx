import { useEffect, useState } from "react";

export default function UseEffect() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const fetchData = await fetch("https://fakestoreapi.com/products");
    const newfetch = await fetchData.json();
    setData(newfetch);
    console.log(newfetch);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Use Effect</h1>
      {data.map(
        (newval) => (
          (<h1 key={newval.id}>{newval.id}</h1>),
          (<h1>{newval.title}</h1>),
          (<h1>{newval.description}</h1>)
        )
      )}
    </>
  );
}
