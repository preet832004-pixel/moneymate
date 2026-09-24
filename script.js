const $ = s => document.querySelector(s);
const money = n => "₹" + Math.max(0, Math.round(n)).toLocaleString("en-IN");

document.querySelectorAll("[data-scroll]").forEach(btn=>{
  btn.addEventListener("click",()=>document.querySelector(btn.dataset.scroll)?.scrollIntoView({behavior:"smooth"}));
});
$("#menuBtn")?.addEventListener("click",()=>{
  const nav=$(".nav-links");
  if(!nav) return;
  const open=nav.dataset.open==="1";
  nav.dataset.open=open?"0":"1";
  nav.style.cssText=open?"":"display:flex;position:absolute;top:76px;left:0;right:0;background:#fff;padding:18px 7%;flex-direction:column;border-bottom:1px solid #e5eae6";
});
$("#loginBtn")?.addEventListener("click",()=>toast("Demo mode: login will be connected to your account system later."));
$("#resetBtn")?.addEventListener("click",()=>{
  $("#incomeInput").value=30000; $("#spendInput").value=15320; $("#saveInput").value=6000; updatePlan();
});
$("#calculateBtn")?.addEventListener("click",updatePlan);

function updatePlan(){
  const income=Number($("#incomeInput").value)||0;
  const spent=Number($("#spendInput").value)||0;
  const saved=Number($("#saveInput").value)||0;
  const left=income-spent-saved;
  $("#incomeView").textContent=money(income);
  $("#spentView").textContent=money(spent);
  $("#savedView").textContent=money(saved);
  $("#leftView").textContent=money(left);
  const status=$("#budgetStatus");
  if(left<0){status.textContent="Over plan";status.style.color="#b24d4d";}
  else if(income && left/income<.1){status.textContent="Tight";status.style.color="#a47700";}
  else {status.textContent="Healthy";status.style.color="#43a861";}
  $("#insightText").textContent = left>=0
    ? `You have ${money(left)} of flexible money left after your planned spending and savings.`
    : `Your plan is ${money(Math.abs(left))} over your income. Consider reducing planned spending or savings for this month.`;
  toast("Your plan was updated.");
}
function toast(msg){
  const t=$("#toast"); t.textContent=msg; t.classList.add("show");
  clearTimeout(window.__toast); window.__toast=setTimeout(()=>t.classList.remove("show"),2200);
}
