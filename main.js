(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");c.length&&(t=c[c.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e=>{let t=document.querySelector(".app-input-block");(e||t)&&t.remove()};e.p,e.p,function(){let e={},t={},n=document.getElementById("app");function c(n,c){return"function"==typeof c?e[n]=c:"string"==typeof c?e[n]=t[c]:void 0}function a(e,n){return t[e]=n}function o(t){!function(t){try{return e[t]}catch(e){throw new Error(`Route ${t} not found`)}}(window.location.hash.slice(1)||"/")()}a("home",(function(){!function(){let e=document.createElement("div"),t=document.createElement("div"),c=document.createElement("div");e.className="app-input",t.className="app-city-block",c.className="block";let a=document.createElement("input");a.className="app-input-field",a.type="text",a.placeholder="Type a city",e.appendChild(a);let o=document.createElement("h3");o.className="app-city",t.appendChild(o);let l=document.createElement("img");l.className="app-city-star",l.src="data:image/png;base64,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",t.appendChild(l);let r=document.createElement("input");r.className="app-city-check",r.type="checkbox",t.appendChild(r);let i=document.createElement("img");i.className="app-city-img",i.src="",t.appendChild(i);let m=document.createElement("h3");m.className="app-temp",t.appendChild(m);let s=document.createElement("h3");s.className="app-cloud",t.appendChild(s);let d=document.createElement("div");d.className="block-wind-direction flex";let p=document.createElement("img");p.src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-wind-signal-weather-kmg-design-flat-kmg-design.png",d.appendChild(p);let u=document.createElement("h3");u.className="block-wind-dir text",d.appendChild(u);let h=document.createElement("div");h.className="block-wind flex";let A=document.createElement("img");A.src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-wind-weather-vitaliy-gorbachev-blue-vitaly-gorbachev-1.png",h.appendChild(A);let g=document.createElement("h3");g.className="block-wind-speed text",h.appendChild(g);let y=document.createElement("div");y.className="block-humidity-data flex";let f=document.createElement("img");f.src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-water-miscellaneous-kiranshastry-gradient-kiranshastry.png",y.appendChild(f);let k=document.createElement("h3");k.className="block-humidity text",y.appendChild(k);let w=document.createElement("div");w.className="block-pressure-data flex";let b=document.createElement("img");b.src="https://img.icons8.com/officexs/30/000000/atmospheric-pressure.png",w.appendChild(b);let x=document.createElement("h3");x.className="block-pressure text",w.appendChild(x),c.appendChild(d),c.appendChild(h),c.appendChild(y),c.appendChild(w),n.appendChild(e),n.appendChild(t),n.appendChild(c)}()})),a("favourite",(function(){!function(){document.querySelector(".app-input").remove(),document.querySelector(".app-city-block").remove(),document.querySelector(".block").remove();let e=document.createElement("h3");e.className="app-title",e.innerHTML="Saved",n.appendChild(e);let t=document.createElement("div");t.className="app-cities",n.appendChild(t);let c={...localStorage};for(let e in c)"1"==c[e]&&a(e);function a(e){let n=e[0].toUpperCase();for(let t=1;t<e.length;t++)n+=e[t];let c=document.createElement("div");c.className="cities-item",t.appendChild(c);let a=document.createElement("h3");a.innerHTML=n,c.appendChild(a)}}()})),c("/","home"),c("/favourite","favourite"),window.addEventListener("load",o),window.addEventListener("hashchange",o)}(),setTimeout((function(){const e="https://api.weatherapi.com/v1/",n="f3355337615d498fbfa03825211912";let c=document.querySelector(".app-city-check"),a=document.querySelector(".app-city-img"),o=document.querySelector(".app-city"),l=document.querySelector(".app-city-star"),r=document.querySelector(".app-temp"),i=document.querySelector(".app-cloud"),m=document.querySelector(".block-wind-dir"),s=document.querySelector(".block-wind-speed"),d=document.querySelector(".block-humidity"),p=document.querySelector(".block-pressure");fetch(`${e}current.json?key=${n}&q=Minsk&aqi=no`).then((e=>e.json())).then((e=>y(e)));let u="minsk",h=[],A=document.querySelector(".app-input-field");A.onkeyup=function(c){h=document.querySelectorAll(".block-item"),A.value.length>=3?((e=>{let t=[];fetch(`https://api.weatherapi.com/v1/search.json?key=f3355337615d498fbfa03825211912&q=${e}`).then((e=>e.json())).then((e=>function(e){for(let n=0;n<3;n++)t.push(e[n]);let n=document.querySelector(".app-input");if(console.log(t),document.querySelector(".app-input-block")){let e=document.querySelectorAll(".block-item-text");for(let n=0;n<3;n++)e[n].innerHTML=t[n].name}else{let e=document.createElement("div");e.className="app-input-block",n.appendChild(e);for(let n of t){let t=document.createElement("p"),c=document.createElement("div");c.className="block-item",t.className="block-item-text",t.innerHTML=n.name,c.appendChild(t),e.appendChild(c)}}}(e)))})(A.value),console.log(c.target.value,g++)):t();for(let c of h)c.onclick=function(){fetch(`${e}current.json?key=${n}&q=${c.innerText.toLowerCase()}&aqi=no`).then((e=>e.json())).then((e=>y(e))),t(),A.value="",u=c.innerText.toLowerCase()};"Enter"==c.key&&(u=A.value,u=u.toLowerCase(),""!=u&&" "!=u&&fetch(`${e}current.json?key=${n}&q=${u}&aqi=no`).then((e=>e.json())).then((e=>y(e))))};let g=0;function y(e){e?(t(),A.value="",o.innerHTML=e.location.name,a.src=e.current.condition.icon,r.innerHTML=Math.round(e.current.temp_c)+"°",i.innerHTML=e.current.condition.text,m.innerHTML=e.current.wind_dir,s.innerHTML=Math.round(e.current.wind_kph)+" km/h",d.innerHTML=Math.round(e.current.humidity)+"%",p.innerHTML=e.current.pressure_mb+"mbar",((e,t,n,c)=>{localStorage.getItem(e)?console.log(localStorage.getItem(e)):localStorage.setItem(e,0),t.onclick=function(){const t=n.innerHTML.toLowerCase();t==e&&(localStorage.setItem(e,+!+localStorage.getItem(e)),+localStorage.getItem(e)?c.src="https://img.icons8.com/fluency/48/000000/star.png":0==+localStorage.getItem(e)&&(c.src="data:image/png;base64,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")),console.log(e,t)},+localStorage.getItem(e)?c.src="https://img.icons8.com/fluency/48/000000/star.png":0==+localStorage.getItem(e)&&(c.src="data:image/png;base64,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")})(u,c,o,l),(e=>{const t=document.getElementById("app");1==e.current.is_day?t.style.background="linear-gradient(45deg, #14033d 0%, #250D5E 100%)":t.style.background="#14033D"})(e)):alert("Some error has occured. Try other city or check your internet connection")}console.log(window.location.href)}),100)})();