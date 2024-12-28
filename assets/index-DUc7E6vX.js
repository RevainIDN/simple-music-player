(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&m(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const e=document.querySelector(".audio"),f=document.getElementById("pause-btn"),y=document.getElementById("prev-btn"),g=document.getElementById("next-btn"),h=document.getElementById("current-time"),d=document.getElementById("duration"),u=document.querySelector(".progress-bar");d.textContent=l(e.duration);e.volume=.2;let n=0;const s=[{title:"Lost in the City Lights",subtitle:"Cosmo Sheldrake",audio:"/simple-music-player//audio/lost-in-city-lights-145038.mp3",img:"/simple-music-player//cover-1.png"},{title:"Forest Lullaby",subtitle:"Lesfm",audio:"/simple-music-player//audio/forest-lullaby-110624.mp3",img:"/simple-music-player//cover-2.png"}];function v(){e.paused?(e.play(),document.querySelector(".pause-img").src="/simple-music-player/Pause.svg"):(e.pause(),document.querySelector(".pause-img").src="/simple-music-player/Play.svg")}function p(){e.src=s[n].audio,e.load(),u.style.width="0%",document.querySelector(".pause-img").src="/simple-music-player/Play.svg",document.querySelector(".cover-img").src=s[n].img,document.querySelector(".title").textContent=s[n].title,document.querySelector(".subtitle").textContent=s[n].subtitle}function L(){n--,n<0&&(n=s.length-1),p()}function E(){n++,n>s.length-1&&(n=0),p()}function l(o){const i=Math.floor(o/60),c=Math.floor(o%60);return`${i.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`}function S(){const o=e.currentTime/e.duration*100;u.style.width=`${o}%`}f.addEventListener("click",v);y.addEventListener("click",L);g.addEventListener("click",E);e.addEventListener("timeupdate",()=>{h.textContent=l(e.currentTime),d.textContent=l(e.duration||0),S()});u.parentElement.addEventListener("click",o=>{const c=o.offsetX/u.parentElement.offsetWidth*e.duration;e.currentTime=c});e.addEventListener("loadedmetadata",()=>{d.textContent=l(e.duration)});
