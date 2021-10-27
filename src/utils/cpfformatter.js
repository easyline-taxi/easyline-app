export const CPFFormatter = (cpf) => {
  let CPFFormatted = cpf.replace(/[^0-9]/g, "");

  if (CPFFormatted.length > 11) {
    CPFFormatted = CPFFormatted.substring(0, 11);
  }

  CPFFormatted = CPFFormatted.replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  return CPFFormatted;
};
