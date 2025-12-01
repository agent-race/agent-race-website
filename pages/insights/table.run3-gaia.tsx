import React from "react";
import { Table } from "@mantine/core";

const GAIARun3Table = () => {
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
    { label: "Prompt", values: [7262.24, 1067.48, 20689.4, 33866.8, 19764.47, 2187.99, 13059.31] },
    { label: "Output", values: [651.28, 186.24, 761.78, 621.44, 964, 233.53, 296.36] },
    { label: "Total", values: [7913.52, 1253.72, 21451.18, 34488.23, 20728.47, 2421.52, 13355.67] },
  ];

  // Time section
  const timeRows: { label: string; values: (number | string)[] }[] = [
    { label: "LLM", values: [16.86, 10.59, 21.58, 34.15, 61.89, 13.81, 15.76] },
    { label: "Search", values: [1.16, 17.33, 2.446, 3.446, 2.395, 3.92, 0.783] },
    { label: "PDF loader", values: [0.246, 0.000685, 2.035, 0.00617, 0.00203, 0.000728, 0.637] },
    { label: "CSV reader", values: ["2.55E-05", 0.000285, 0.000199, 0.000171, 0.000678, "6.04E-06", "3.79E-06"] },
    { label: "XLSX reader", values: ["-", 0.000195, 0.0019, 0.00251, 0.00631, 0.000103, "7.88E-05"] },
    { label: "Text file reader", values: [0.00904, "1.70E-05", "3.24E-06", 0.00047, 0.000464, 0.000117, 0.0382] },
    { label: "doc reader", values: ["-", "2.31E-04", "4.85E-06",0.000141, 0.000239, "7.83E-05", "5.67E-05", ] },
    { label: "MP3 loader", values: ["-", "-", 0.164, 0.000283, 0.0405, 0.0989, 0.0824,] },
    { label: "Figure loader", values: ["-", "-", 0.683, "-", 0.69, 0.0788, 0.151] },
    { label: "Video loader", values: ["-", "-", "4.46E-06", "-", "-", "-", "-"] }, 
    { label: "Code executor", values: [0.00125, "2.00E-05", 1.88,0.014, 0.307, 0.000497, "5.66E-02", ] },
    { label: "Total tool time", values: [1.417, 17.33, 7.215, 3.47, 3.443, 4.1, 1.75,] },
    { label: "Total time", values: [18.78, 28.71, 29.03,38.44, 74.998, 19.52, 16.685, ] },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders>
        <Table.Caption>Table 42: GAIA Run 3</Table.Caption>
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

export default GAIARun3Table;