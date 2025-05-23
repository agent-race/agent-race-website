import React from "react";
import { Table, Text } from "@mantine/core";

const AlpacaEvalTable = () => {
  const tokenRows = [
    ["LangChain", 70.49, 428.55, 499.04, 64.84, 446.05, 510.91, 38.5, 501.11, 539.61],
    ["AutoGen", 70.49, 431.96, 502.45, 64.85, 447.45, 512.31, 38.5, 503.37, 541.87],
    ["AgentScope", 85.451, 382.45, 467.901, 61.815, 311.109, 372.924, 52.478, 416.639, 469.117],
    ["CrewAI", 298.25, 518.95, 817.201, 258.083, 398.618, 656.702, 313.01, 571.79, 884.808],
    ["LlamaIndex", 70.49, 430.216, 500.707, 64.81, 441.738, 506.548, 38.485, 495.306, 533.791],
    ["Phidata", 118.846, 438.078, 556.924, 93.899, 463.795, 557.694, 83.391, 440.691, 524.082],
    ["PydanticAI", 61.347, 429.543, 490.889, 41.217, 433.739, 474.957, 31.802, 434.81, 485.612]
  ];

  const timeRows = [
    [1522.48, 444.81, 1967.29, 8.275, 4.48, 23.084, 10.699, 36.502, "165.07/0"],
    [1529.96, 450.63, 1980.59, 7.812, 3.977, 26.745, 8.274, 36.854, "209.08/44.01"],
    [1138.243, 352.564, 1490.807, 6.063, 3.415, 13.726, 8.89, 32.119, "284.078/118"],
    [11694.576, 679.15, 12373.72, 8.835, 3.837, 21.946, 23.114, 64, "514.962/0"],
    [42.083, 350.386, 392.47, 6.069, 4.787, 20.829, 5.849, 27.318, "1180.078/898"],
    [3003.319, 756.689, 3760.009, 6.152, 4.707, 16.456, 14.208, 50.217, "354.508/0"],
    [1845.724, 596.876, 2442.6, 6.503, 3.441, 17.79, 27.486, 46.45, "96.022/0"]
  ];

  const commRows = [
    ["165.07/0", "165.07/0", "1983.02/3", "2011.83/3", "2072.98/3"],
    ["209.08/44.01", "209.08/44.01", "2066.04/52.24", "2071.24/57.38", "2156.04/66.81"],
    ["284.078/118", "284.078/118", "1659.318/124", "1511.311/122", "1889.247/126"],
    ["483.740/0", "619.516/0", "2497.929/0", "1754.701/0", "2151.097/0"],
    ["1171.078/889", "1164.078/882", "2022.417/33.689", "2054.878/39.118", "2116.377/48.641"],
    ["341.160/0", "343.219/0", "6128.259/2639.113", "6131.272/2629.426", "5715.126/2465.817"],
    ["95.425/0", "97.116/0", "2000.542/0", "1927.093/0", "1892.344/0"]
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <Text fw={700}>Table: AlpacaEval Detailed Results</Text>

      <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders>
        <Table.Caption>Token Statistics by Framework and Model</Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th rowSpan={2}>Framework</Table.Th>
            <Table.Th colSpan={3}>llama</Table.Th>
            <Table.Th colSpan={3}>qwen</Table.Th>
            <Table.Th colSpan={3}>deepseek</Table.Th>
          </Table.Tr>
          <Table.Tr>
            {["prompt", "output", "total"].map((header, i) => (
              <React.Fragment key={i}>
                <Table.Th>{header}</Table.Th>
                <Table.Th>{header}</Table.Th>
                <Table.Th>{header}</Table.Th>
              </React.Fragment>
            ))[0]}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {tokenRows.map((r, i) => (
            <Table.Tr key={i}>{r.map((c, j) => <Table.Td key={j}>{c}</Table.Td>)}</Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders>
        <Table.Caption>Time and GPT Usage Details</Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th colSpan={3}>gpt</Table.Th>
            <Table.Th colSpan={5}>time</Table.Th>
            <Table.Th>agent1 (llama)</Table.Th>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>prompt</Table.Th>
            <Table.Th>output</Table.Th>
            <Table.Th>total</Table.Th>
            <Table.Th>llama</Table.Th>
            <Table.Th>qwen</Table.Th>
            <Table.Th>deepseek</Table.Th>
            <Table.Th>aggregator</Table.Th>
            <Table.Th>total</Table.Th>
            <Table.Th>agent1 (llama)</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {timeRows.map((r, i) => (
            <Table.Tr key={i}>{r.map((c, j) => <Table.Td key={j}>{c}</Table.Td>)}</Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders>
        <Table.Caption>Communication Size (content / wrapper bytes)</Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th colSpan={2}>prompt to agent</Table.Th>
            <Table.Th colSpan={3}>agent to aggregator</Table.Th>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>agent2 (qwen)</Table.Th>
            <Table.Th>agent3 (deepseek)</Table.Th>
            <Table.Th>agent1 (llama)</Table.Th>
            <Table.Th>agent2 (qwen)</Table.Th>
            <Table.Th>agent3 (deepseek)</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {commRows.map((r, i) => (
            <Table.Tr key={i}>{r.map((c, j) => <Table.Td key={j}>{c}</Table.Td>)}</Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default AlpacaEvalTable;