/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Project:  cv@0.2.4 - Modern CV, Resume and Portfolio website
 * Homepage: https://github.com/chethanrraj90/MyResume
 * License:  MIT
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 */
function ajax(e,t,n,o,s){var a=new XMLHttpRequest;a.open(e,t),a.setRequestHeader("Accept","application/json"),a.onreadystatechange=function(){a.readyState===XMLHttpRequest.DONE&&(200===a.status?o(a.response,a.responseType):s(a.status,a.response,a.responseType))},a.send(n)}window.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("my-form"),t=document.getElementById("my-form-button"),n=document.getElementById("my-form-status");function success(){e.reset(),t.style="display: none ",n.innerHTML="Thank you for reaching out, will get back to you shortly....!"}function error(){n.innerHTML="Oops! There was a problem. Try again...!"}e.addEventListener("submit",(function(n){n.preventDefault(),t.innerHTML="sending...",t.disabled=!0;var o=new FormData(e);ajax(e.method,e.action,o,success,error)}))}));
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Package:  cv@0.2.4
 * Build:    production-b2
 * Compiled: 2021-02-04T15:00:30 UTC
 * Commit:   68976695d61ccc3db336b04685aa8cc4d6417950
 */
