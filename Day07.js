(Get all the countries from Asia continent /region using Filter function)

const axios = require('axios'); 
	axios.get('https://restcountries.com/v3.1/all') 
.then(response => { const countries = response.data; 
const asiaCountries = countries.filter(country => country.region === 'Asia');
	console.log(asiaCountries); }) 
.catch(error => { console.error('Error fetching countries:', error); });

-------------------------------------------------------------

(Get all the countries with a population of less than 2 lakhs using Filter function)

const axios = require('axios');
axios.get('https://restcountries.com/v3.1/all')
 .then(response => { const countries = response.data; 
const countriesWithLessPopulation = countries.filter(country => country.population < 200000); 
	console.log(countriesWithLessPopulation); }) 
.catch(error => { console.error('Error fetching countries:', error); });

---------------------------------------------------------------

(Print the following details name, capital, flag using forEach function)

const axios = require('axios');
 axios.get('https://restcountries.com/v3.1/all') 
.then(response => { const countries = response.data; 
countries.forEach(country => { const { name, capital, flags } = country;
 console.log('Name:', name.common); console.log('Capital:', capital[0]);
 console.log('Flag:', flags.png); console.log('-------------------------'); }); }) 
.catch(error => { console.error('Error fetching countries:', error); });


-----------------------------------------------------------------------


(Print the total population of countries using reduce function
Print the country which uses US Dollars as currency.
)


const axios = require('axios');
axios.get('https://restcountries.com/v3.1/all') 
	.then(response => { const countries = response.data;
 const totalPopulation = countries.reduce((accumulator, country) => accumulator + country.population, 0); 
	console.log('Total Population:', totalPopulation); }) 
.catch(error => { console.error('Error fetching countries:', error); });
























