export const formatCurrency = (
  amount,
  locale = "en-US",
  currency = "INR",
  decimals = 0
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
};

export const formatCount = (count, singular, plural) => {
  return `${count} ${count === 1 ? singular : plural}`;
};
