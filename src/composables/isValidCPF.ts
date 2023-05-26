export default function isValidCPF(cpf: string): boolean {
  cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos do CPF

  if (cpf.length !== 11) {
    return false; // CPF deve ter 11 dígitos
  }

  // Verifica se todos os dígitos são iguais (CPF inválido)
  if (/^(\d)\1+$/.test(cpf)) {
    return false;
  }



  // Calcula o primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let mod = sum % 11;
  const digit1 = mod < 2 ? 0 : 11 - mod;

  // Verifica o primeiro dígito verificador
  if (parseInt(cpf.charAt(9)) !== digit1) {
    return false;
  }

  // Calcula o segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  mod = sum % 11;
  const digit2 = mod < 2 ? 0 : 11 - mod;

  // Verifica o segundo dígito verificador
  if (parseInt(cpf.charAt(10)) !== digit2) {
    return false;
  }

  return true; // CPF válido
}
