export const toggleStrikeThrough = (checkboxElement, textElementId) => {
  const textElement = document.getElementById(textElementId);

  textElement.style.textDecoration = checkboxElement.checked ? 'line-through' : 'none';
};