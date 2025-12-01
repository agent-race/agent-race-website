import React from "react";
import { Table } from "@mantine/core";

const RelationPearson = () => {
  const frameworks = ["LangChain", "AutoGen", "AgentScope", "CrewAI", "LlamaIndex", "Phidata", "PydanticAI"];

  const rows = [
    ["GAIA", -0.1200, -0.0123, -0.0884, -0.2026, -0.0371, -0.0551, 0.2408],
    ["OK-VQA", "-", -0.1215, -0.2054, -0.1796, -0.0440, -0.1249, -0.1447],
    ["ScienceWorld", -0.2730, "-", -0.3113, -0.0237, -0.0919, -0.1485, -0.1485],
  ];

  return (
    <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders>
      <Table.Caption>
        Table 30: Token-Accuracy Pearson Correlation
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

export default RelationPearson;
