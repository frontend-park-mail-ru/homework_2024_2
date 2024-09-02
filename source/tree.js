"use strict";

const tree = (treeHeight) => {
  const MIN_TREE_HEIGHT = 2;
  const startsRowsCount = Math.trunc(Number(treeHeight)) - 1;

  if (
    typeof treeHeight === "object" ||
    !isFinite(treeHeight) ||
    startsRowsCount + 1 <= MIN_TREE_HEIGHT
  ) {
    return null;
  }

  let treeString = "";
  for (let i = 0; i != startsRowsCount ; ++i) {
    const spaces = " ".repeat(treeHeight - i - 2);
    const stars = "*".repeat(2 * i + 1);
    treeString += spaces + stars + spaces + "\n";
  }

  const lastRowSpaces = " ".repeat(startsRowsCount - 1);
  treeString += `${lastRowSpaces}|${lastRowSpaces}\n`;

  return treeString;
};
