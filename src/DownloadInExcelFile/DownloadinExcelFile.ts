import XLSX from "xlsx";

interface TableToExcelProps {
  tableId: string;
  fileName: string;
}

const downloadTableAsExcel = ({ tableId, fileName }: TableToExcelProps) => {
  const table = document.getElementById(tableId) as HTMLTableElement;
  const wb = XLSX.utils.table_to_book(table);
  const wbBinary = XLSX.write(wb, { bookType: "xlsx", type: "binary" });
  const blob = new Blob([s2ab(wbBinary)], {
    type: "application/octet-stream",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
};

const s2ab = (s: string) => {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < s.length; i++) {
    view[i] = s.charCodeAt(i) & 0xff;
  }
  return buf;
};
