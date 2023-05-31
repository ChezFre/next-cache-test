import { ReloadButton } from "@/components/reloadButton";
import styles from "./page.module.css";
import { fetchJoke } from "@/lib/joke";
import { notFound } from "next/navigation";

export const revalidate = 86400;

export async function generateMetadata() {
  const joke = await fetchJoke();

  if (!joke) notFound();

  return {
    title: joke.setup,
  };
}

export default async function Home() {
  const joke = await fetchJoke();

  if (!joke) notFound();

  return (
    <main className={styles.main}>
      <h1>{joke.setup}</h1>
      <p>{joke.punchline}</p>
      <div className={styles.buttonWrapper}>
        <ReloadButton />
      </div>
    </main>
  );
}
