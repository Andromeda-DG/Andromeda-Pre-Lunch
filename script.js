const navigationMenu = document.querySelector(".nav-menu");

if (navigationMenu) {
  document.addEventListener("click", (event) => {
    if (!navigationMenu.contains(event.target)) navigationMenu.open = false;
  });

  navigationMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => { navigationMenu.open = false; });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !navigationMenu.open) return;
    const restoreFocus = navigationMenu.contains(document.activeElement);
    navigationMenu.open = false;
    if (restoreFocus) navigationMenu.querySelector("summary").focus();
  });
}

document.querySelectorAll("[data-year]").forEach((year) => {
  year.textContent = new Date().getFullYear();
});

const spend = document.querySelector("#spendRange");
const turnout = document.querySelector("#turnoutRange");

function updateScenario() {
  if (!spend || !turnout) return;
  const budget = Number(spend.value);
  const turnoutRate = Number(turnout.value);
  const spendValue = document.querySelector("#spendValue");
  const turnoutValue = document.querySelector("#turnoutValue");
  const reachOut = document.querySelector("#reachOut");
  const contactOut = document.querySelector("#contactOut");
  const liftOut = document.querySelector("#liftOut");

  if (spendValue) spendValue.textContent = "$" + budget.toLocaleString();
  if (turnoutValue) turnoutValue.textContent = turnoutRate + "%";

  const reach = Math.round(8400 + budget * 0.42);
  const contacts = Math.round(reach * (0.08 + turnoutRate / 1000));
  const lift = (2.3 + (budget / 10000) * 0.6 + (turnoutRate - 45) * 0.05).toFixed(1);

  if (reachOut) reachOut.textContent = reach.toLocaleString();
  if (contactOut) contactOut.textContent = contacts.toLocaleString();
  if (liftOut) liftOut.textContent = "+" + lift + " pts";
}

spend?.addEventListener("input", updateScenario);
turnout?.addEventListener("input", updateScenario);
updateScenario();

const inquiry = document.querySelector('form[name="campaign-inquiry"]');
inquiry?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const button = inquiry.querySelector('button[type="submit"]');
  let status = inquiry.querySelector('[role="status"]');
  if (!status) { status = document.createElement('p'); status.setAttribute('role', 'status'); inquiry.append(status); }
  button.disabled = true;
  status.textContent = 'Sending your request…';
  try {
    const response = await fetch('https://formsubmit.co/ajax/Daniel.Bazargun@Andromedadg.com', {
      method: 'POST', headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify(Object.fromEntries(new FormData(inquiry)))
    });
    const result = await response.json();
    if (!response.ok || ![true, 'true'].includes(result.success)) throw new Error('Not delivered');
    window.location.assign('/thanks.html');
  } catch {
    status.textContent = 'Your request could not be sent. Please try again or email Daniel.Bazargun@Andromedadg.com.';
    button.disabled = false;
  }
});

