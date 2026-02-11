let total = 0;
let log = [];

const btnClick = document.querySelector("#btnClick");
const btnReset = document.querySelector("#btnReset");
const totalText = document.querySelector("#total");
const logList = document.querySelector("#log");
const msg = document.querySelector("#msg");
const footer = document.querySelector("#footerText");

btnClick.addEventListener("click", addClick);
btnReset.addEventListener("click", resetAll);

footer.innerHTML = "Entrega: WEB-01 | Grupo: B | Código: 1018233565";

function addClick() {
  total = total + 1;

  log.push("Click #" + total);

  render();
}

function render() {
  totalText.textContent = "Total: " + total;

  logList.innerHTML = "";

  const lastFive = log.slice(-5);

  lastFive.forEach(function(item) {
    const li = document.createElement("li");
    li.textContent = item;
    logList.appendChild(li);
  });
}

function resetAll() {
  total = 0;
  log = [];

  render();

  msg.textContent = "Contador reiniciado";
  msg.className = "success";
}
