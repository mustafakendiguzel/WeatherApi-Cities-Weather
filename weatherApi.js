export var options = {
  method: 'GET',
  url: 'https://yahoo-weather5.p.rapidapi.com/weather',
  params: {location: `Istanbul`, format: 'json', u: 'c'},
  headers: {
    'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com',
    'x-rapidapi-key': 'hidden'
  }
};
