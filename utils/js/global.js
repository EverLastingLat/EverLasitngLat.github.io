let rWeLive = !(window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')

// Set links depending on local or live workspace
const wiki_links = document.querySelectorAll('.wiki');
const reglas_links = document.querySelectorAll('.reglas');
const credits_links = document.querySelectorAll('.credits');
wiki_links.forEach(element => {element.href = evaluateLiveValue('http://everlasting.lat/wiki',"../../wiki/index.html");});
reglas_links.forEach(element => {element.href = evaluateLiveValue('http://everlasting.lat/reglas',"../../reglas/index.html");});
credits_links.forEach(element => {element.href = evaluateLiveValue('http://everlasting.lat/colaboradores',"../../colaboradores/index.html");});

// Functions
function evaluateLiveValue(val1, val2){return rWeLive ? val1 : val2;}
function p(str){console.log(str)}

export default {
    rWeLive, p, evaluateLiveValue
}