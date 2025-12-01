import React from "react";
import { Table } from "@mantine/core";

const RelationPearsonRounds = () => {
  const frameworks = ["LangChain", "AutoGen", "AgentScope", "CrewAI", "LlamaIndex", "Phidata", "PydanticAI"];

  const rows = [
    ["GAIA", -0.1008, -0.1211, -0.1508, -0.2456, -0.0053, -0.0789, 0.1868],
    ["OK-VQA", "-", "-", -0.2093, -0.2237, -0.0406, -0.0317, -0.0515],
    ["ScienceWorld", -0.2640, "-", -0.3115, -0.0034, -0.3141, -0.0564, -0.1566],
  ];

  return (
    <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders>
      <Table.Caption>
        Table 31: Rounds-Accuracy Pearson Correlation
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

export default RelationPearsonRounds;
