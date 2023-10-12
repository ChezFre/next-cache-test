import { revalidateTag } from "next/cache";
import { redirect } from 'next/navigation'
import { SubmitButton } from '@app/components/SubmitButton'


export default async function Refresh() {
  async function handleRefresh(data: FormData) {
    "use server";

    await revalidateTag("joke");
    redirect('/',);

  }

  return (
    <main>
      <form action={handleRefresh} style={{ marginTop: 20 }}>
        <SubmitButton />
      </form>
    </main>
  );
}
