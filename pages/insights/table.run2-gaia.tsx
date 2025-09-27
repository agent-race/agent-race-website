import React from "react";
import { Table } from "@mantine/core";

const GAIARun2Table = () => {
  const frameworks = [
    "LangChain",
    "AutoGen",
    "AgentScope",
    "CrewAI",
    "LlamaIndex",
    "Phidata",
    "PydanticAI",
  ];

  // Token section
  const tokenRows: { label: string; values: (number | string)[] }[] = [
    { label: "Prompt", values: [6659.4, 1063.48, 20787.67, 33422.3, 15079.24, 2481.73, 11306.87] },
    { label: "Output", values: [598.16, 195.52, 785.02, 564.65, 731.95, 279.04, 259.62] },
    { label: "Total", values: [7257.56, 1259, 21572.68, 33986.94, 15811.19, 2760.76, 11566.48] },
  ];

  // Time section (combined)
  const timeRows: { label: string; values: (number | string)[] }[] = [
    { label: "LLM", values: [17.61, 4.206, 12.997, 35.75, 35.69, 5.25, 5.361] },
    { label: "Search", values: [0.78, 11.477, 1.438, 4.77, 1.196, 4.055, 1.12] },
    { label: "PDF loader", values: [0.000908, 0.000736, 2.876, 0.0072, 0.000308, 0.00074, 0.535] },
    { label: "CSV reader", values: ["3.82E-05", 0.000223, 0.000248, 0.000146, "2.19E-06", "1.37E-05", 0.000261] },
    { label: "XLSX reader", values: ["-", 0.000161, 0.000841, 0.0023, 0.0021, 0.000173, "7.93E-05"] },
    { label: "Text file reader", values: [0.0103, "3.39E-05", "2.60E-06", 0.000477, 0.00042, 0.000166, 0.125] },
    { label: "doc reader", values: ["-", "9.33E-05", "2.00E-06", 0.000147, "9.75E-05", "7.73E-05", "9.10E-05"] },
    { label: "MP3 loader", values: ["-", "-", 0.241, 0.000283, "6.96E-06", 0.144, 0.186] },
    { label: "Figure loader", values: ["-", "-", 0.406, 0.0314, 0.399, 0.108, 0.126] },
    { label: "Video loader", values: ["-", "-", "1.45E-06", "-", "-", "-", "-"] },
    { label: "Code executor", values: [0.000699, "1.58E-05", 0.285, 0.00647, 1.196, 0.000132, "1.75E-05"] },
    { label: "Total tool time", values: [0.797, 11.478, 5.248, 4.82, 2.794, 4.308, 2.091] },
    { label: "Total time", values: [18.89, 16.211, 18.55, 41.14, 46.28, 10.69, 6.59] },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders>
        <Table.Caption>Table 27: GAIA Run 2</Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th colSpan={2}></Table.Th>
            {frameworks.map((f) => (
              <Table.Th key={f}>{f}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {/* Token section */}
          {tokenRows.map((row, i) => (
            <Table.Tr key={`token-${row.label}`}>
              {i === 0 && <Table.Th rowSpan={tokenRows.length}>Token</Table.Th>}
              <Table.Th>{row.label}</Table.Th>
              {row.values.map((v, j) => (
                <Table.Td key={j}>{v}</Table.Td>
              ))}
            </Table.Tr>
          ))}

          {/* Time section */}
          {timeRows.map((row, i) => (
            <Table.Tr key={`time-${row.label}`}>
              {i === 0 && <Table.Th rowSpan={timeRows.length}>Time</Table.Th>}
              <Table.Th>{row.label}</Table.Th>
              {row.values.map((v, j) => (
                <Table.Td key={j}>{v}</Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default GAIARun2Table;