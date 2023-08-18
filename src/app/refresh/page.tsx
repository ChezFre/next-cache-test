import { revalidateTag } from "next/cache";

export default async function Refresh() {
  async function handleRefresh(data: FormData) {
    "use server";

    revalidateTag("joke");
  }

  return (
    <main>
      <form action={handleRefresh}>
        <button type="submit">Revalidate tag</button>
      </form>
    </main>
  );
}
