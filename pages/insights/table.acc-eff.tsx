import React from "react";
import { Table } from "@mantine/core";

const CrewAIMemoryWindowTable = () => {
  const headers = ["1", "25", "35", "Default"];
  const rows = [
    ["Accuracy", 0.236, 0.248, 0.242, 0.218],
  ];

  return (
    <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders>
      <Table.Caption>
        Table 6: Accuracy comparison under different memory window sizes of CrewAI on the GAIA dataset.
      </Table.Caption>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Memory Window Size</Table.Th>
          {headers.map((h, i) => (
            <Table.Th key={i}>{h}</Table.Th>
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

export default CrewAIMemoryWindowTable;
