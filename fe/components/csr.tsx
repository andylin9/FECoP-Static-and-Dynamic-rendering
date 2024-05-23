"use client";

import { useEffect, useState } from "react";

export const Csr = () => {
  const [data, setData] = useState<{ time: string } | null>(null);

  const getData = () => {
    fetch(`/to3333/api`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data ? <span>CSR: {data.time}</span> : "from CSR"}{" "}
      <button onClick={getData} className="bg-black/70 text-white rounded px-2">
        reset
      </button>
    </div>
  );
};
