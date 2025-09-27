import React from "react";
import { Table } from "@mantine/core";

const LeetCodeToolsEffectTable = () => {
  const frameworks = ["LangChain", "AutoGen", "AgentScope", "CrewAI", "LlamaIndex", "Phidata", "PydanticAI"];

  const rows = [
    ["no LeetCode-solving tools", 12.86, 8.41, 19.57, 11.87, 24.26, 10.23, 10.31],
    ["10 LeetCode-solving tools", 11.79, 8.58, 22.31, 10.35, 19.47, 10.99, 8.33],
    ["20 LeetCode-solving tools", 10.78, 8.36, 21.95, 11.14, 20.89, 10.98, 9.58],
  ];

  return (
    <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders>
      <Table.Caption>
        Table 19: Effect of LeetCode-solving tools on execution time (seconds)
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

export default LeetCodeToolsEffectTable;
