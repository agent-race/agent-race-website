import React from "react";
import { Table } from "@mantine/core";

const AlpacaEvalScalabilityTable = () => {
  const frameworks = ["LangChain", "AutoGen", "AgentScope", "CrewAI", "LlamaIndex", "Phidata", "PydanticAI"];

  const timeRows = [
    [3, 36.50, 36.85, 32.12, 64.00, 27.32, 50.22, 46.45],
    [6, 37.96, 47.34, 67.61, 120.54, 36.87, 60.42, 42.24],
    [9, 47.11, 50.84, 93.36, 212.76, 43.85, 63.84, 110.78],
    [12, 59.73, 55.60, 122.99, 218.34, 53.77, 78.80, 111.40],
    [15, 66.08, 46.43, 153.78, 245.26, 67.23, 83.42, 62.13],
  ];

  const tokenRows = [
    [3, 3516.85, 3537.22, 2800.75, 14732.43, 1933.51, 5398.71, 3894.06],
    [6, 7430.69, 7211.57, 5143.28, 34558.34, 3869.52, 6940.13, 7172.68],
    [9, 10401.23, 10653.76, 7547.34, 55923.96, 5557.50, 7785.16, 9256.82],
    [12, 13801.78, 13692.51, 10068.83, 61244.79, 7190.98, 8819.67, 9384.31],
    [15, 16894.12, 16886.17, 12480.56, 80200.01, 8873.19, 9938.26, 11170.89],
  ];

  const commRows = [
    [3, 6563.04, 6920.56, 5912.11, 8021.94, 9708.91, 19013.54, 6108.54],
    [6, 14029.26, 14383.36, 10506.82, 17863.90, 19965.41, 21684.95, 12206.18],
    [9, 20468.68, 22325.21, 16275.87, 24769.82, 31280.89, 21320.89, 16278.34],
    [12, 27541.48, 28782.73, 22032.48, 26822.83, 39846.67, 22383.08, 16394.10],
    [15, 34178.20, 35606.42, 27526.39, 30897.88, 49926.39, 23251.44, 19198.06],
  ];

  return (
    <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders>
      <Table.Caption>
        Table 3: Scalability Evaluation of AlpacaEval
      </Table.Caption>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Worker Agents</Table.Th>
          {frameworks.map((f, i) => (
            <Table.Th key={i}>{f}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {/* Time Section */}
        <Table.Tr>
          <Table.Td colSpan={frameworks.length + 1} style={{ fontWeight: 600 }}>
            Time (Unit: Second)
          </Table.Td>
        </Table.Tr>
        {timeRows.map((r, i) => (
          <Table.Tr key={`time-${i}`}>
            {r.map((c, j) => (
              <Table.Td key={j}>{c}</Table.Td>
            ))}
          </Table.Tr>
        ))}

        {/* Total Token Section */}
        <Table.Tr>
          <Table.Td colSpan={frameworks.length + 1} style={{ fontWeight: 600 }}>
            Total Token
          </Table.Td>
        </Table.Tr>
        {tokenRows.map((r, i) => (
          <Table.Tr key={`token-${i}`}>
            {r.map((c, j) => (
              <Table.Td key={j}>{c}</Table.Td>
            ))}
          </Table.Tr>
        ))}

        {/* Communication Size Section */}
        <Table.Tr>
          <Table.Td colSpan={frameworks.length + 1} style={{ fontWeight: 600 }}>
            Communication Size (Unit: Byte)
          </Table.Td>
        </Table.Tr>
        {commRows.map((r, i) => (
          <Table.Tr key={`comm-${i}`}>
            {r.map((c, j) => (
              <Table.Td key={j}>{c}</Table.Td>
            ))}
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default AlpacaEvalScalabilityTable;
