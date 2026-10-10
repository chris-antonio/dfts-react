/**
 * Table — DFTS.md §5.21
 * Structured tabular data. columns: [{key,label,sortable}], rows: [{...}], selectable rows optional.
 */
function Table({ columns, rows, selectable = false }) {
  const [sort, setSort] = React.useState({ key: null, dir: "none" });
  const [selected, setSelected] = React.useState(() => new Set());

  function toggleSort(key) {
    setSort((prev) => {
      if (prev.key !== key) return { key, dir: "ascending" };
      if (prev.dir === "ascending") return { key, dir: "descending" };
      return { key: null, dir: "none" };
    });
  }

  function toggleRow(id) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const sortedRows = React.useMemo(() => {
    if (!sort.key || sort.dir === "none") return rows;
    const copy = [...rows];
    copy.sort((a, b) => {
      const av = a[sort.key], bv = b[sort.key];
      const cmp = av > bv ? 1 : av < bv ? -1 : 0;
      return sort.dir === "ascending" ? cmp : -cmp;
    });
    return copy;
  }, [rows, sort]);

  return (
    <div className="dfts-table-wrap">
      <table className="dfts-table">
        <thead>
          <tr>
            {selectable && <th scope="col" className="dfts-table__checkbox-cell" />}
            {columns.map((col) => (
              <th key={col.key} scope="col" aria-sort={sort.key === col.key ? sort.dir : "none"}>
                {col.sortable ? (
                  <button type="button" className="dfts-table__sort-btn" onClick={() => toggleSort(col.key)}>
                    {col.label}
                    <Icon
                      name={sort.key === col.key && sort.dir === "descending" ? "arrow_downward" : "arrow_upward"}
                      size={14}
                      className={`dfts-table__sort-icon ${sort.key === col.key && sort.dir !== "none" ? "dfts-table__sort-icon--active" : ""}`}
                    />
                  </button>
                ) : col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row) => {
            const isSelected = selected.has(row.id);
            return (
              <tr key={row.id} aria-selected={selectable ? isSelected : undefined} className={isSelected ? "dfts-table__row--selected" : ""}>
                {selectable && (
                  <td className="dfts-table__checkbox-cell">
                    <Checkbox id={`row-${row.id}`} checked={isSelected} onChange={() => toggleRow(row.id)} size="sm" label="" />
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key} className={col.error ? "dfts-table__cell--error" : ""}>{row[col.key]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
