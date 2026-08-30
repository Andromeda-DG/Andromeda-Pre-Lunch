const menuButton = document.querySelector("[data-menu]");
const navigation = document.querySelector("#site-nav");

function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("open");
  document.body.classList.remove("menu-open");
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navigation?.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 760) closeMenu();
});

document.querySelectorAll("[data-year]").forEach((year) => {
  year.textContent = new Date().getFullYear();
});

/* Andromeda Studio is the campaign login destination across the public site. */
document.querySelectorAll("a[href='hub.html']").forEach((link) => {
  link.href = "login.html";
  link.textContent = link.textContent.replace(/Andromeda Hub/gi, "Andromeda Studio").replace(/Hub/gi, "Studio");
});
document.querySelectorAll("body *").forEach((element) => {
  if (element.children.length === 0 && element.textContent?.includes("Andromeda Hub")) {
    element.textContent = element.textContent.replace(/Andromeda Hub/g, "Andromeda Studio");
  }
});
if (navigation && !navigation.querySelector("[data-campaign-login]")) {
  const login = document.createElement("a");
  login.href = "login.html";
  login.textContent = "Login to your campaign";
  login.setAttribute("data-campaign-login", "true");
  const cta = navigation.querySelector(".nav-cta");
  navigation.insertBefore(login, cta || null);
}

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
