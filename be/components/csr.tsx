"use client";

import { useEffect, useState } from "react";

export const Csr = () => {
  const [data, setData] = useState<{ time: string } | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_ORIGIN}/api`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <div>{data ? <span>CSR: {data.time}</span> : "from CSR"}</div>;
};
