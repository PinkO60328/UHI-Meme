const valid=/^0x[0-9a-fA-F]{40}$/.test(CONTRACT_ADDRESS);
// Robinhood Chain (chain ID 4663). Generic Uniswap page until a real CA is set.
const buy=valid?"https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency="+CONTRACT_ADDRESS:"https://app.uniswap.org/swap";
document.querySelectorAll(".buy").forEach(a=>{a.href=buy;a.target="_blank";a.rel="noopener"});
document.querySelectorAll(".xlink").forEach(a=>{a.href=X_LINK;a.target="_blank";a.rel="noopener"});
document.querySelectorAll(".ca").forEach(e=>e.textContent=CONTRACT_ADDRESS);
document.querySelectorAll(".chain").forEach(e=>e.textContent=CHAIN);
document.querySelectorAll(".scan").forEach(a=>{if(valid)a.href="https://robinhoodchain.blockscout.com/token/"+CONTRACT_ADDRESS;else a.remove()});
document.querySelectorAll(".copy").forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(CONTRACT_ADDRESS)}catch{const t=document.createElement("textarea");t.value=CONTRACT_ADDRESS;document.body.appendChild(t);t.select();document.execCommand("copy");t.remove()}const o=b.textContent;b.textContent="Copied!";setTimeout(()=>b.textContent=o,1400)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
const lb=document.getElementById("lb"),lbi=lb.querySelector("img");
document.querySelectorAll("[data-full]").forEach(b=>b.onclick=()=>{lbi.src=b.dataset.full;lb.showModal()});
lb.onclick=()=>lb.close();
// sparkles
const sp=document.getElementById("sparkles");for(let i=0;i<40;i++){const s=document.createElement("i");s.style.left=Math.random()*100+"%";s.style.top=Math.random()*100+"%";s.style.animationDelay=(-Math.random()*4)+"s";s.style.transform="scale("+(.4+Math.random())+")";sp.appendChild(s)}
