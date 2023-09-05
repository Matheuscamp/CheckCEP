function buscarCEP() {
  var numeroCEP = document.getElementById("parametro").value;
  inputDoUsuario(numeroCEP);
}

const inputDoUsuario = async (numeroCEP) => {
  try {
    const result = await fetch(`https://viacep.com.br/ws/${numeroCEP}/json/`);
    const corpo = await result.json();
    document.getElementById("rua").innerHTML = corpo.logradouro;
    document.getElementById("cidade").innerHTML = corpo.localidade;
    document.getElementById("estado").innerHTML = corpo.uf;
  } catch (error) {
    console.error("Erro:", error);
  }
};
