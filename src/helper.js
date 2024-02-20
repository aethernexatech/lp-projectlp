const formatNumberWithout = (number) => {
  try {
    const formattedNumber = number.toLocaleString();
    const [integerPart, decimalPart] = formattedNumber.split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const formattedCurrency = decimalPart
      ? `${formattedInteger}.${decimalPart}`
      : formattedInteger;
    return formattedCurrency;
  } catch (e) {
    console.error(e);
  }
};

function formatCurrencyInput(input) {
  const numericInput = input.replace(/[^0-9.]/g, "");
  const [integerPart, decimalPart] = numericInput.split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const formattedCurrency = decimalPart
    ? `${formattedInteger}.${decimalPart}`
    : formattedInteger;
  return formattedCurrency;
}

export { formatNumberWithout, formatCurrencyInput };
