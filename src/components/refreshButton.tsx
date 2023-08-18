"use client";

const RefreshButton = () => {
  const handleRefresh = async () => {
    const response = await fetch("/api?tag=joke");
    const revalidated = await response.json();
    console.log({ revalidated });
  };

  return <button onClick={handleRefresh}>Revalidate tag</button>;
};

export { RefreshButton };
