type JokeResponse = {
  type: string;
  setup: string;
  punchline: string;
  id: number;
};

const endpoint = "https://official-joke-api.appspot.com/random_joke";

async function fetchJoke() {
  const response = await fetch(endpoint, {
    cache: "force-cache",
    next: { tags: ["joke"] },
  });

  if (!response.ok) return undefined;

  const joke: JokeResponse = await response.json();

  return joke;
}

export { fetchJoke };
