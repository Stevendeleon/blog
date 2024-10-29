/**
 * Toggle the strike-through style of a text element based on the state of a
 * checkbox element.
 *
 * @param {HTMLElement} checkboxElement - The checkbox element to watch for
 *   changes.
 * @param {string} textElementId - The id of the element to toggle the
 *   strike-through style on.
 */
export const toggleStrikeThrough = (checkboxElement, textElementId) => {
  const textElement = document.getElementById(textElementId);

  textElement.style.textDecoration = checkboxElement.checked
    ? "line-through"
    : "none";
};
