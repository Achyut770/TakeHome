import { utils, write } from "xlsx";
export const exportToExcel = (tableId: string, fileName: string) => {
  const table = document.getElementById(tableId);

  if (!table) {
    console.error(`Table with ID "${tableId}" not found`);
    return;
  }

  const workbook = utils.table_to_book(table);

  if (Object.keys(workbook.Sheets).length === 0) {
    console.error(`Table with ID "${tableId}" is empty`);
    return;
  }

  const wbout = write(workbook, { bookType: "xlsx", type: "binary" });

  const s2ab = (s: string) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i += 1) {
      view[i] = s.charCodeAt(i) & 0xff;
    }
    return buf;
  };

  const blob = new Blob([s2ab(wbout)], {
    type: "application/octet-stream",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${fileName}.xlsx`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
