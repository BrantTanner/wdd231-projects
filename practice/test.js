async function getData(){
    const response = await fetch("https://api.igdb.com/v4/games/")

    const data = await response.json();
    console.log(data);
}
getData();