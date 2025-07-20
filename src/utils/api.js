export async function getData(endpoint) {
  let data = await fetch(`https://dummyjson.com${endpoint}`, {
    method: "GET"
  }).then((res) => res.json());

  return data;
}
