"use client";

import { useRouter } from "next/navigation";

const ReloadButton = () => {
  const router = useRouter();

  return <button onClick={() => router.refresh()}>Reload the page</button>;
};

export { ReloadButton };
