import React from "react";
import { Table } from "@mantine/core";

const HumanEvalRun2Table = () => {
  const rows: (string | number)[][] = [
    ["LangChain", 6769.16, 695.15, 7464.31, 27.063, 0.01267, 27.82],
    ["AutoGen", 790.29, 108.26, 898.55, 5.685, 0.000353, 5.711],
    ["AgentScope", 2429.72, 530.323, 2960.043, 13.42, 0.121, 13.57],
    ["CrewAI", 10026.98, 914.96, 10941.95, 29.75, 0.0432, 30.47],
    ["LlamaIndex", 2052, 347.9, 2399.9, 19.81, 0.00381, 19.84],
    ["Phidata", 1083.32, 376.46, 1459.79, 11, 8.99e-05, 16.3],
    ["PydanticAI", 903.6, 353.48, 1257.08, 9.13, 2.32e-05, 9.15],
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders>
        <Table.Caption>Table 24: HumanEval Run 2</Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th rowSpan={2}>Framework</Table.Th>
            <Table.Th colSpan={3}>Token</Table.Th>
            <Table.Th colSpan={3}>Time</Table.Th>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Prompt</Table.Th>
            <Table.Th>Output</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>LLM</Table.Th>
            <Table.Th>Code executor</Table.Th>
            <Table.Th>Total</Table.Th>
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
    </div>
  );
};

export default HumanEvalRun2Table;