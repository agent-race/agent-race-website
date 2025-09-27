import React from "react";
import { Table } from "@mantine/core";

const LeetCodeEffectTable = () => {
  const leetCodeRows = [
    ["LangChain", 7199.33, 553.2, 7753, 11489.89, 586.21, 12076.50, 12779.90, 502.75, 13282.65],
    ["AutoGen", 1195.98, 185.19, 1381.18, 2200.19, 191.82, 2392.01, 3011.2, 182.87, 3194.07],
    ["AgentScope", 17161.55, 828.68, 17990.23, 31878.31, 780.23, 32658.54, 32464.93, 804.56, 33269.48],
    ["CrewAI", 16475.12, 582.82, 17057.95, 11670.07, 552.16, 12222.23, 17398.34, 557.75, 17956.09],
    ["LlamaIndex", 101042.29, 729.57, 101771.86, 35111.65, 348.83, 35460.48, 32899.47, 253.21, 33152.68],
    ["Phidata", 3293.59, 270.75, 3564.33, 4957.96, 295.79, 5253.75, 6104.55, 267.34, 6371.88],
    ["PydanticAI", 13273.91, 373.74, 13647.66, 12356.90, 321.95, 12678.85, 16682.93, 324.13, 17025.06]
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders>
        <Table.Caption>Table 20: Effect of LeetCode-solving tools on Token</Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th rowSpan={2}>Framework</Table.Th>
            <Table.Th colSpan={3}>no LeetCode-solving tools</Table.Th>
            <Table.Th colSpan={3}>10 LeetCode-solving tools</Table.Th>
            <Table.Th colSpan={3}>20 LeetCode-solving tools</Table.Th>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Prompt</Table.Th>
            <Table.Th>Output</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Prompt</Table.Th>
            <Table.Th>Output</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Prompt</Table.Th>
            <Table.Th>Output</Table.Th>
            <Table.Th>Total</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {leetCodeRows.map((r, i) => (
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

export default LeetCodeEffectTable;