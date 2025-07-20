export async function getData(endpoint){
    let data = await fetch(`https://dummyjson.com${endpoint}`).then((res) =>
      res.json()
    );

    return data;
}