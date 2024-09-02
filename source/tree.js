"use strict";

const tree = (treeHeight) => {
  const MIN_TREE_HEIGHT = 2;
  const starsRowsCount = Math.trunc(Number(treeHeight)) - 1;

  if (!isFinite(treeHeight) || starsRowsCount + 1 <= MIN_TREE_HEIGHT) {
    return null;
  }

  let treeString = "";
  for (let i = 0; i != starsRowsCount; ++i) {
    const spaces = " ".repeat(treeHeight - i - 2);
    const stars = "*".repeat(2 * i + 1);
    treeString += spaces + stars + spaces + "\n";
  }

  const lastRowSpaces = " ".repeat(starsRowsCount - 1);
  treeString += `${lastRowSpaces}|${lastRowSpaces}\n`;

  return treeString;
};
