const searchWikipedia = async (query) => {
  const response = await fetch(
    "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Puppies&format=json"
  );

  const responseText = await response.text();

  const responseBody = JSON.parse(responseText);

  console.log(responseBody);
};

searchWikipedia();
