import React from "react";
import { Table } from "@mantine/core";

const GAIARun1Table = () => {
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
    { label: "Prompt", values: [6493.9, 1078.7, 19192.78, 31286.37, 12370.81, 2387.39, 15680.58] },
    { label: "Output", values: [562.42, 183, 747.25, 612.44, 688.83, 260.78, 410.12] },
    { label: "Total", values: [7052.33, 1261.7, 19940.02, 31898.81, 13059.64, 2648.17, 16090.7] },
  ];

  // Time section (combine both parts shown in the figure)
  const timeRows: { label: string; values: (number | string)[] }[] = [
    { label: "LLM", values: [8.26, 9.65, 12.03, 34.55, 38.4, 13.16, 10.81] },
    { label: "Search", values: [0.724, 17.29, 1.32, 4.66, 1.019, 4.296, 0.744] },
    { label: "PDF loader", values: [0.000713, 0.00347, 1.48, 0.0205, 0.000618, 0.00257, 0.461] },
    { label: "CSV reader", values: ["2.73E-05", 0.00035, 0.000358, 0.000138, "4.63E-06", "8.37E-06", 0.000302] },
    { label: "XLSX reader", values: ["-", "8.91E-05", 0.00147, 0.00272, 0.00196, "8.18E-05", 0.000111] },
    { label: "Text file reader", values: [0.0197, "4.63E-05", "6.32E-06", 0.000832, 0.00113, "4.24E-05", 0.117] },
    { label: "doc reader", values: ["-", "5.82E-05", "2.52E-06", 0.00015, "3.94E-06", 0.000141, "6.33E-05"] },
    { label: "MP3 loader", values: ["-", "-", 0.125, 0.000375, "3.91E-06", 0.098, 0.0951] },
    { label: "Figure loader", values: ["-", "-", 0.443, 0.105, 0.839, 0.075, 0.141] },
    { label: "Video loader", values: ["-", "-", "2.99E-06", "-", "-", "-", "-"] },
    { label: "Code executor", values: [0.0176, "1.15E-05", 0.996, 0.194, 0.387, 0.000427, "6.39E-05"] },
    { label: "total tool time", values: [0.762, 17.294, 4.359, 4.795, 2.248, 4.473, 1.558] },
    { label: "total time", values: [10.15, 27.04, 16.575, 39.86, 47, 13.16, 11.68] },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders>
        <Table.Caption>Table 40: GAIA Run 1</Table.Caption>
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

export default GAIARun1Table;