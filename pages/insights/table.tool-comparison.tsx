import React from "react";
import { Table } from "@mantine/core";

const ToolComparison = () => {
  const frameworks = ["PDF loader", "CSV reader", "XLSX reader", "Text file reader", "Doc reader", "MP3 loader", "Coder executor"];

  const rows = [
    ["LangChain", 0.04005, 0.0178, 0.90453, 0.78435, 0.00586, 4.657798, 0.002355],
    ["AutoGen", "x", "x", "x", "x", "x", "x", 0.0000752],
    ["AgentScope", "x", "x", "x", "x", "x", 5.9112, 0.05335],
    ["CrewAI", "x", "x", "x", "x", "x", "x", 0.0000752],
    ["LlamaIndex", 0.011795, 0.0562, 0.34445, 0.0010935, 0.0026685, 1.747, 0.0001185],
    ["Phidata", "x", 0.00086, "x", 0.0019865, "x", "x", 0.000865],
    ["PydanticAI", "x", "x", "x", "x", "x", "x", 0.0000752],
    ["Ours", 0.006545, 0.00813, 0.25137, 0.0002695, 0.01206, 1.63566, 0.0000752],
  ];

  return (
    <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders>
      <Table.Caption>
        Table 45: Tool Comparison
      </Table.Caption>
      <Table.Thead>
        <Table.Tr>
          <Table.Th></Table.Th>
          {frameworks.map((f, i) => (
            <Table.Th key={i}>{f}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {rows.map((r, i) => (
          <Table.Tr key={i}>
            {r.map((c, j) => (
              <Table.Td key={j}>{c}</Table.Td>
            ))}
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default ToolComparison;
