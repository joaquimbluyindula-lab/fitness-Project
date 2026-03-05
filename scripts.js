const nome = document.getElementById("nome");
const numero = document.getElementById("numero");
const data = document.getElementById("data");
const horas = document.getElementById("horas");
const btnAgendar = document.getElementById("btn-agendar");

function recolherDados() {
  const valorNome = nome.value;
  const valorNumero = numero.value;
  const valorData = data.value;
  const valorHora = horas.value;

  if (!valorNome || !valorNumero || !valorData || !valorHora) {
    alert("Preenchas Todos Os Campos");
    return;
  }
  const dataFormatada = valorData.split('-').reverse().join('/');

  const mensagem = `
🛎 *Reserva AstFitness*

👤 *Nome:* ${valorNome}
📞 *Telefone:* ${valorNumero}
📅 *Data:* ${dataFormatada}
🕐 *Horário:* ${valorHora}
`.trim();

  const mensagemCodificada = encodeURIComponent(mensagem);

  const numeroPrestador = "244xxxxxxxxx";
  const linkWhatsApp = `https://wa.me/${numeroPrestador}?text=${mensagemCodificada}`;
  window.open(linkWhatsApp,"_blank");
  
}

btnAgendar.addEventListener("click", recolherDados)
