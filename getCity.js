import axios from 'https://cdn.skypack.dev/axios';
import { options } from './weatherApi.js'
import { displayResult } from './displayResult.js'
let errorMesage = document.querySelector('.city');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let min_max = document.querySelector('.min-max');


export const getResult = (city) => {
  axios.request(options).then(function (response) {
    Promise.resolve((response.data)).then(displayResult);
  }).catch(function (error) {

    if (error.response.statusText = "Internal Server Error") {
      errorMesage.innerHTML = "Böyle bir Şehir Bulunamadı!";
      temp.innerHTML = "";
      desc.innerHTML = "";
      min_max.innerHTML = "";
      document.body.style.backgroundImage = "url(https://media.istockphoto.com/photos/computer-error-picture-id1222806141?k=20&m=1222806141&s=612x612&w=0&h=GoODCHnR0mSefDBLWJpnqVnfRKH9ttdYPO0-KEYbb7w=)";
    }
  })
}



