export const calculateScore = (income, savings, debt) => {
  let score = income + savings - debt;

  return score;
};