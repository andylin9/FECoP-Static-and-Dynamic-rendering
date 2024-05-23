import { Csr } from "@/components/csr";

async function getData(caching: string) {
  if (caching === "forceCache") {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ORIGIN}/api`, {
      cache: "force-cache",
    });

    return res.json();
  }

  if (caching === "revalidate") {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ORIGIN}/api`, {
      next: { revalidate: 9 },
    });

    return res.json();
  }

  if (caching === "noStore") {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ORIGIN}/api`, {
      cache: "no-store",
    });

    return res.json();
  }
}

export default async function Home() {
  const forceCache = await getData("forceCache");
  const revalidate = await getData("revalidate");
  const noStore = await getData("noStore");

  return (
    <main>
      <div>force-cache: {forceCache.time}</div>
      <div>revalidate: {revalidate.time}</div>
      <div>no-store: {noStore.time}</div>
      <Csr />
    </main>
  );
}
