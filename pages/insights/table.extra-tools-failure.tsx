import React from "react";
import { Table } from "@mantine/core";

const NumberOfFailedRunsTable = () => {
  const headers = [
    "LangChain",
    "AutoGen",
    "AgentScope",
    "CrewAI",
    "LlamaIndex",
    "Phidata",
    "PydanticAI",
  ];

  const rows: (string | number)[][] = [
    ["no irrelevant tools", 0, 0, 1, 1, 1, 0, 1],
    ["10 irrelevant tools", 0, 0, 2, 1, 1, 1, 1],
    ["20 irrelevant tools", 0, 0, 4, 3, 1, 0, 1],
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders>
        <Table.Caption>Table 21: Number of Failed Runs</Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th> </Table.Th>
            {headers.map((h) => (
              <Table.Th key={h}>{h}</Table.Th>
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
    </div>
  );
};

export default NumberOfFailedRunsTable;