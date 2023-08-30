const e=document.querySelector("#validation-input");e.addEventListener("blur",(a=>{const i=Number(e.dataset.length),l=e.value.length;if(""===e.value)return console.log("Введіть літери!"),void e.classList.remove("valid","invalid");l>=i?(e.classList.add("valid"),e.classList.remove("invalid")):(e.classList.add("invalid"),e.classList.remove("valid"))}));
//# sourceMappingURL=task-06.7f95f088.js.map
