(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();const o={name:"John",surname:"Doe",age:25,hobbies:["leer","tocar la guitarra","pasear con las cabras"],pets:[{name:"Max",type:"perro"},{name:"Whiskers",type:"gato"}],address:{street:"123 Main Street",city:"Gotham",state:"California",postalCode:"12345",country:"USA"},phone:"+1234567890",email:"johndoe@example.com",occupation:"Ingeniero de software",education:"Máster en ciencia de datos"};console.log(`Me llamo ${o.name} ${o.surname}, tengo ${o.age} años. Me gusta ${o.hobbies[1]}, ${o.hobbies[0]} y ${o.hobbies[2]}. Tengo un ${o.pets[0].type} que se llama ${o.pets[0].name} y un ${o.pets[1].type}, que se llama ${o.pets[1].name}. Vivo en la calle ${o.address.street}, de la ciudad ${o.address.city} en ${o.address.state}, ${o.address.postalCode}, en ${o.address.country}. Mi teléfono: ${o.phone}. Mi mail: ${o.email}. Trabajo como ${o.occupation} y estudié ${o.education}.`);for(const s of data.numbers)data.firstFloor.secondFloor.numbersPlus2.push(s+2),data.firstFloor.thirdFloor.numbersDouble.push(s*2),data.fourthFloor.numbersDividedBy2.push(s/2),s%2===0?data.fifthFloor.onlyEven.push(s):data.fifthFloor.onlyOdd.push(s);console.log(number);const a={firstFloor:{vowels:[]},secondFloor:{consonants:[]},fourthFloor:{asciiCode:[]},fifthFloor:{wordsInUppercase:[],wordsInLowercase:[]},sixthFloor:{secretCode:""}},c=s=>{const n=["a","e","i","o","u","á","é","í","ó","u"],l=/[a-zñ]/i;for(const e of sentece)n.includes(e.toLowerCase())?a.firstFloor.vowels.push(e):l.test(e)&&a.secondFloor.consonants.push(e),a.fourthFloor.asciiCode.push(e.charCodeAt);console.log(s.substring(3,9));let i=0,t=0;for(let e=0;e<s.length;e++)if(t=e,setence[e]===" "||e===s.legth){const r=s.substring(i,t);a.fifthFloor.wordsInUpperCase.push(r.toUpperCase()),a.fifthFloor.wordsInLowerCase.push(r.toUpperCase()),i=e+1}console.log(a)};c("Si Camila no me corrige hace PUM!");
