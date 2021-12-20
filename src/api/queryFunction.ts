export function defaultQueryFunction<TData, TVariables>(
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const res = await fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      body: JSON.stringify({ query, variables }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await res.json();
    console.log(json);

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
