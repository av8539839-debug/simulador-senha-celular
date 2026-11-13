// Define a senha correta
const SENHA_CORRETA = "1234";
const TAMANHO_SENHA = 4;

let senhaDigitada = "";
const elementoMensagem = document.getElementById("mensagem");
const celular = document.querySelector(".celular");

function adicionarNumero(numero) {
  // Se ainda não atingiu o limite de dígitos
  if (senhaDigitada.length < TAMANHO_SENHA) {
    senhaDigitada += numero;
    elementoMensagem.textContent = "• ".repeat(senhaDigitada.length);
    elementoMensagem.style.color = "#3b82f6";
  }

  // Quando completar os 4 dígitos, valida com o switch
  if (senhaDigitada.length === TAMANHO_SENHA) {
    verificarSenha();
  }
}

function verificarSenha() {
  switch (senhaDigitada) {
    case SENHA_CORRETA:
      elementoMensagem.textContent = "🔓 Desbloqueado!";
      elementoMensagem.style.color = "#4CAF50";
      
      if ("vibrate" in navigator) {
        navigator.vibrate(200);
      }
      break;

    default:
      elementoMensagem.textContent = "❌ Incorreta!";
      elementoMensagem.style.color = "#FF5252";
      
      if (celular) {
        celular.classList.add("erro");
      }

      if ("vibrate" in navigator) {
        navigator.vibrate([100, 50, 100]);
      }

      setTimeout(() => {
        if (celular) {
          celular.classList.remove("erro");
        }
        resetarSenha();
      }, 1500);
      break;
  }
}

function resetarSenha() {
  senhaDigitada = "";
  elementoMensagem.textContent = "";
}

  
