const url = 'https://google-api31.p.rapidapi.com/websearch';
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '7b1b086ca5msh0b4a71f02af90f2p15dc0djsn1ce43776273f',
    'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
  },
  body: JSON.stringify({
    text: 'Google ',
    safesearch: 'off',
    timelimit: '',
    region: 'wt-wt',
    max_results: 20
  })
};

(async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();
