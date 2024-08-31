function format(input, columns) {
    const rows = [];
    for (let i = 0; i < input.length; i += columns) {
      rows.push(input.slice(i, i + columns));
    }
    const columnWidths = Array.from({ length: columns }, (_, columnIndex) =>
      Math.max(...rows.map(row => (row[columnIndex] !== undefined ? String(row[columnIndex]).length : 0)))
    );
    return rows
      .map(row =>
        row
          .map((number, columnIndex) => (number !== undefined ? number.toString().padStart(columnWidths[columnIndex], ' ') : ''))
          .join(' ')
      )
      .join('\n');
  }
  