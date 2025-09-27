import React from "react";
import { Table } from "@mantine/core";

const HumanEvalRun3Table = () => {
  const rows: (string | number)[][] = [
    ["LangChain", 7953.34, 832.63, 8785.97, 38.562, 0.015723, 39.471],
    ["AutoGen", 769.72, 105.78, 875.5, 8.027, 0.000279, 8.199],
    ["AgentScope", 2804.341, 568.36, 3372.701, 15.686, 0.139, 15.858],
    ["CrewAI", 10822.16, 867.08, 11689.24, 34.19, 0.0342, 34.98],
    ["LlamaIndex", 2017.37, 362.85, 2380.23, 20.61, 0.00293, 20.64],
    ["Phidata", 1258.7, 393.46, 1652.16, 9.36, 0.000227, 12.4],
    ["PydanticAI", 874.49, 340.66, 1215.15, 7.73, 2.44e-05, 7.74],
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders>
        <Table.Caption>Table 25: HumanEval Run 3</Table.Caption>
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

export default HumanEvalRun3Table;