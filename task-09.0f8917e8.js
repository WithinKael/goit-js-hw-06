const t=document.querySelector(".change-color"),e=document.querySelector(".color"),o=document.querySelector("body");t.addEventListener("click",(function(){const r=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;e.textContent=`${r}`,o.style.backgroundColor=`${r}`,t.style.background="linear-gradient(to right, purple, white)"}));
//# sourceMappingURL=task-09.0f8917e8.js.map
