export default function validarDataNascimento(data) {
  // Se estiver vazia ou incompleta (menos de 10 caracteres no formato DD/MM/AAAA)
  if (!data || data.length !== 10) {
    return false;
  }

  const partes = data.split("/");
  if (partes.length !== 3) return false;

  const ano = parseInt(partes[2], 10);

  // Regra de negócio: o ano de nascimento não pode ser irreal (ex: antes de 1900)
  // Você pode ajustar esse valor para 1920, etc., dependendo do seu público
  if (ano < 1900) {
    return false;
  }

  return true;
}