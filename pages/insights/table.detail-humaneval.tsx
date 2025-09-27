import React from "react";
import { Table } from "@mantine/core";

const HumanEvalDetailedResultsTable = () => {
  const rows: (string | number)[][] = [
    ["LangChain", 6326.36, 617.13, 6943.49, 23.221, 0.0034, 23.968],
    ["AutoGen", 767.45, 106.34, 873.79, 5.822, 0.0002, 5.846],
    ["AgentScope", 3180.689, 561.518, 3742.207, 11.738, 0.131, 11.906],
    ["CrewAI", 10817.65, 892.798, 11710.45, 24.22, 0.0258, 25.24],
    ["LlamaIndex", 1985.6, 342.793, 2328.152, 9.52, 0.003069, 9.611],
    ["Phidata", 967.329, 354.427, 1321.756, 7.181, "-", 9.692],
    ["PydanticAI", 812.951, 352.543, 1165.494, 5.258, 0.000007158, 5.276],
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders>
        <Table.Caption>Table 8: HumanEval Detailed Results</Table.Caption>
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

export default HumanEvalDetailedResultsTable;