let city = document.querySelector('.city');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let min_max = document.querySelector('.min-max');



export const displayResult = (result) => {
  let weather = result.forecasts[0].text;
  console.log(result);
  switch ( weather) {
    case 'Mostly Cloudy':case 'Partly Cloudy':case 'Cloudy':
      document.body.style.backgroundImage = "url(https://s7d2.scene7.com/is/image/TWCNews/clouds_from_above)";
      break;
    case 'Scattered Showers':
    case 'Showers':
      document.body.style.backgroundImage = "url(https://i20.haber7.net/resize/1240x720//haber/haber7/photos/2020/44/meteorolojiden_istanbul_icin_kritik_uyari_siddetli_geliyor_1603999764_0957.jpg)";
      break;
    case 'Breezy':
      document.body.style.backgroundImage = "url(https://thumbs.dreamstime.com/b/tree-windy-weather-lone-nordic-island-hailuoto-northern-finland-66292565.jpg)";
    case 'Snow Showers':
      document.body.style.backgroundImage = "url(      https://www.gannett-cdn.com/presto/2021/01/20/NPRJ/8b8a85c4-9105-4a98-b6ae-b7c5f81e458f-01212021_Squalls_01.JPG?width=660&height=431&fit=crop&format=pjpg&auto=webp)";
      break;
    case 'Sunny': case 'Mostly Sunny': 
      document.body.style.backgroundImage = "url(https://media.istockphoto.com/photos/blue-sky-with-sun-picture-id491701259?k=20&m=491701259&s=612x612&w=0&h=T1Uag4HyJy7r1PDRhkgg6UT_oFHvtJ95QpQNIIxwCUs=)";
      break;
    case 'Showers': case 'Rain': case 'Rainy':
      document.body.style.backgroundImage = "url(https://www.trhava.com/wp-content/uploads/2019/11/edirne-yagmur.jpeg)";
      break;
    case 'Scattered Thunderstorms': case 'Thunderstorms':
      document.body.style.backgroundImage = "url(https://ec.europa.eu/research-and-innovation/sites/default/files/styles/w1108/public/hm/field/image/milan_thunderstorm_sm.jpg?itok=i7uQsw5y)";

      break;
  }
  weather = "";

  city.innerHTML = `Şehir:${result.location.city},${result.location.country}`;
  temp.innerHTML =`Sıcaklık:${result.current_observation.condition.temperature}°C`;
  desc.innerHTML = `Hava Durumu:${result.forecasts[0].text}`;
  min_max.innerHTML = `Min-Max Hava Sıcaklığı:${result.forecasts[0].low}°C /${result.forecasts[0].high}°C`
}
