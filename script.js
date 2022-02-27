const searcBar = document.getElementById('searchBar');
import { getResult } from './getCity.js';
import {options} from './weatherApi.js';

const setQuery = (e) => {
  if(e.keyCode == '13') 
    getResult(searcBar.value);
    options.params.location = `${searcBar.value}`;


}

if(searchBar.addEventListener) {
  searchBar.addEventListener('keypress',setQuery);
}







