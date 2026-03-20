"use client";

import type { TableSection } from "@/types/sections";
import { Plus, X } from "lucide-react";

interface Props {
  block: TableSection;
  onChange: (block: TableSection) => void;
}

export default function TableBlock({ block, onChange }: Props) {
  const addColumn = () => {
    onChange({
      ...block,
      headers: [...block.headers, ""],
      rows: block.rows.map((r) => [...r, ""]),
    });
  };

  const addRow = () => {
    onChange({
      ...block,
      rows: [...block.rows, block.headers.map(() => "")],
    });
  };

  const removeColumn = (col: number) => {
    onChange({
      ...block,
      headers: block.headers.filter((_, i) => i !== col),
      rows: block.rows.map((r) => r.filter((_, i) => i !== col)),
    });
  };

  const removeRow = (row: number) => {
    onChange({
      ...block,
      rows: block.rows.filter((_, i) => i !== row),
    });
  };

  const updateHeader = (col: number, value: string) => {
    const headers = [...block.headers];
    headers[col] = value;
    onChange({ ...block, headers });
  };

  const updateCell = (row: number, col: number, value: string) => {
    const rows = block.rows.map((r) => [...r]);
    rows[row][col] = value;
    onChange({ ...block, rows });
  };

  return (
    <div className="space-y-2 overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            {block.headers.map((h, col) => (
              <th key={col} className="p-1">
                <div className="flex items-center gap-1">
                  <input
                    value={h}
                    onChange={(e) => updateHeader(col, e.target.value)}
                    placeholder={`Colonne ${col + 1}`}
                    className="w-full px-2 py-1 rounded border border-gray-200 bg-[#f0f1f5] text-xs font-semibold text-[#1B1D3A] focus:outline-none focus:ring-1 focus:ring-[#615CA5]/20"
                  />
                  {block.headers.length > 1 && (
                    <button onClick={() => removeColumn(col)} className="text-[#94a3b8] hover:text-red-500">
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} className="p-1">
                  <input
                    value={cell}
                    onChange={(e) => updateCell(ri, ci, e.target.value)}
                    className="w-full px-2 py-1 rounded border border-gray-200 bg-[#f8f9fb] text-xs text-[#334155] focus:outline-none focus:ring-1 focus:ring-[#615CA5]/20"
                  />
                </td>
              ))}
              <td className="p-1 w-6">
                <button onClick={() => removeRow(ri)} className="text-[#94a3b8] hover:text-red-500">
                  <X className="w-3 h-3" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-3">
        <button onClick={addColumn} className="flex items-center gap-1 text-xs text-[#615CA5] hover:text-[#4e4a8a] font-medium">
          <Plus className="w-3 h-3" /> Colonne
        </button>
        <button onClick={addRow} className="flex items-center gap-1 text-xs text-[#615CA5] hover:text-[#4e4a8a] font-medium">
          <Plus className="w-3 h-3" /> Ligne
        </button>
      </div>
    </div>
  );
}
