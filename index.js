const readable = document.getElementById("datas");
const table = document.getElementById("table");
const tableBody = document.getElementById("tableBody");

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const getDatas = () => {
  return {
    Nome: nome.value,
    Idade: idade.value,
    Email: email.value,
    Telefone: telefone.value,
  };
};

let Dados = [
  {
    Nome: "Felipe",
    Idade: 21,
    Email: "felipper43@gmail.com",
    Telefone: "71993277415",
  },
  {
    Nome: "Larissa",
    Idade: 17,
    Email: "larissa@gmail.com",
    Telefone: "7193131323",
  },
];
function seeDatas() {
  if (table.lastChild.id == "tableBody") {
    table.removeChild(table.lastChild);
  }
  let tBody = document.createElement("tbody");
  tBody.id = "tableBody";

  Dados.forEach((el) => {
    var tr = document.createElement("tr");

    Object.keys(el).forEach((key) => {
      let td = document.createElement("td");
      td.innerHTML = `${el[key]}`;
      tr.appendChild(td);
      tBody.appendChild(tr);
    });
    table.appendChild(tBody);
  });
}

function insert() {
  Dados.push(getDatas());
  seeDatas();
  nome.value = null;
  email.value = null;
  telefone.value = null;
  idade.value = null;
}

window.addEventListener(onload, seeDatas());
window.addEventListener("focus", () => {
  document.title = "CRUD";
});
window.addEventListener("blur", () => {
  document.title = "Volta porra";
});
