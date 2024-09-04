'use strict';

const columnWidth = (rows, columns) => {
  const columnLengths = Array.from({ length: columns }, (_, columnIndex) => 
    rows.map(row => (row[columnIndex] !== undefined ? String(row[columnIndex]).length : 0))
  );

  const columnWidths = columnLengths.map(lengths => Math.max(...lengths));
  return columnWidths;
}

const format = (input, columns) => {
    if (!Array.isArray(input) || !input.every((number) => Number.isInteger(number))) {
      throw new Error("Invalid data");
    };

    const rows = [];
    for (let i = 0; i < input.length; i += columns) {
      rows.push(input.slice(i, i + columns));
    }

    const columnWidths = columnWidth(rows, columns);

    return rows
      .map(row =>
        row
          .map((number, columnIndex) => number.toString().padStart(columnWidths[columnIndex], ' '))
          .join(' ')
      )
      .join('\n');
  }
  