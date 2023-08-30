const e=document.querySelector('button[data-action="decrement"]'),t=document.querySelector('button[data-action="increment"]'),n=document.querySelector("#value");let c=0;const o=()=>{n.textContent=c};t.addEventListener("click",(()=>{c+=1,o()})),e.addEventListener("click",(()=>{c-=1,o()}));
//# sourceMappingURL=task-04.7147afc4.js.map
