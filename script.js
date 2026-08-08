document.querySelectorAll("[data-menu]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelector(".nav-links")?.classList.toggle("open");
  });
});

const year = document.querySelector("[data-year]");
if(year) year.textContent = new Date().getFullYear();

const spend = document.querySelector("#spendRange");
const turnout = document.querySelector("#turnoutRange");

function updateScenario(){
  if(!spend || !turnout) return;
  const s = Number(spend.value);
  const t = Number(turnout.value);
  document.querySelector("#spendValue").textContent = `$${s.toLocaleString()}`;
  document.querySelector("#turnoutValue").textContent = `${t}%`;
  const reach = Math.round(8400 + s * 0.42);
  const contacts = Math.round(reach * (0.08 + t/1000));
  const lift = (2.3 + (s/10000)*0.6 + (t-45)*0.05).toFixed(1);
  document.querySelector("#reachOut").textContent = reach.toLocaleString();
  document.querySelector("#contactOut").textContent = contacts.toLocaleString();
  document.querySelector("#liftOut").textContent = `+${lift} pts`;
}
spend?.addEventListener("input", updateScenario);
turnout?.addEventListener("input", updateScenario);
updateScenario();
