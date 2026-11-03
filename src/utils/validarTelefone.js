export default function validarTelefone(telefone) {
  // Remove parênteses, espaços e traços
  const numeros = telefone.replace(/\D/g, "");
  
  // O telefone no Brasil tem que ter 10 (fixo) ou 11 dígitos (celular)
  if (numeros.length !== 10 && numeros.length !== 11) {
    return false;
  }

  // Se for celular (11 dígitos), o terceiro dígito (logo após o DDD) DEVE ser 9
  if (numeros.length === 11 && numeros[2] !== "9") {
    return false;
  }

  return true;
}