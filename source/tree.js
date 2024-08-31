"use strict";

let tree = treeHeight => {
  if (typeof treeHeight === "object") return null;
  if (isNaN(Number(treeHeight))) return null;

  treeHeight = Math.trunc(Number(treeHeight));
  if (treeHeight <= 2) return null;

  let treeString = "";
  for (let i = 0; i != treeHeight - 1; ++i) {
    let spaces = " ".repeat(treeHeight - i - 2);
    let starts = "*".repeat(2 * i + 1);
    treeString += spaces + starts + spaces + "\n";
  }

  treeString += " ".repeat(treeHeight - 2) + "|" + " ".repeat(treeHeight - 2) + "\n";

  return treeString;
}
