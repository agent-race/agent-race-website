import React from "react";
import { Table } from "@mantine/core";

const PromptComparison = () => {
  const frameworks = ["Prompt Token", "Output Token", "Total Token", "Total Time"];

  const rows = [
    ["llamaindex_our_prompt", 10835.26, 412.84, 11284.11, 28.1029],
    ["llamaindex", 10888.17433, 582.111, 11470.282, 36.1454],
    ["langchain_our_prompt", 3398.34, 253.97, 3543.31, 8.333],
    ["langchain", 3982.695, 360.955, 4343.645, 12.54203333],
  ];

  return (
    <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders>
      <Table.Caption>
        Table 46: GAIA Prompt Comparison
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

export default PromptComparison;
