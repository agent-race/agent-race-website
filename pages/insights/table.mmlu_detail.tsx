import React from "react";
import { Table, Text } from "@mantine/core";

const TableMMLUDetailedResults = () => {
  const data = [
    {
      framework: "LangChain",
      prompt: "701.514",
      output: "4.035",
      totalToken: "705.55",
      llm: "1.677",
      embedding: "11.833",
      retrieve: "0.055",
      totalTime: "1.79",
    },
    {
      framework: "AutoGen",
      prompt: "679.788",
      output: "3.956",
      totalToken: "683.744",
      llm: "2.171",
      embedding: "6.526",
      retrieve: "0.015",
      totalTime: "2.182",
    },
    {
      framework: "AgentScope",
      prompt: "2664.315",
      output: "2.878",
      totalToken: "2667.193",
      llm: "3.893",
      embedding: "92.472",
      retrieve: "0.935",
      totalTime: "4.931",
    },
    {
      framework: "CrewAI",
      prompt: "884.536",
      output: "13.189",
      totalToken: "897.724",
      llm: "2.51",
      embedding: "7.718",
      retrieve: "0.14",
      totalTime: "5",
    },
    {
      framework: "LlamaIndex",
      prompt: "2079.702",
      output: "50.339",
      totalToken: "2130.042",
      llm: "3.125",
      embedding: "4.931",
      retrieve: "0.4303",
      totalTime: "3.575",
    },
    {
      framework: "Phidata",
      prompt: "2797.441",
      output: "37.347",
      totalToken: "2834.788",
      llm: "7.849",
      embedding: "341.611",
      retrieve: "6.708",
      totalTime: "17.014",
    },
    {
      framework: "PydanticAI",
      prompt: "6996.242",
      output: "170.135",
      totalToken: "7166.378",
      llm: "9.685",
      embedding: "5.977",
      retrieve: "0.03454",
      totalTime: "9.824",
    },
  ];

  return (
    <>
      <Text fw={700} hiddenFrom="sm" c="blue">
        Table: MMLU Detailed Results
      </Text>
      <Table highlightOnHover withTableBorder withRowBorders style={{ fontSize: "12px" }}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th rowSpan={2}>Framework</Table.Th>
            <Table.Th colSpan={3}>Token</Table.Th>
            <Table.Th colSpan={4}>Time</Table.Th>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Prompt</Table.Th>
            <Table.Th>Output</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>LLM</Table.Th>
            <Table.Th>Embedding</Table.Th>
            <Table.Th>Retrieve</Table.Th>
            <Table.Th>Total</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((row, i) => (
            <Table.Tr key={i}>
              <Table.Td>{row.framework}</Table.Td>
              <Table.Td>{row.prompt}</Table.Td>
              <Table.Td>{row.output}</Table.Td>
              <Table.Td>{row.totalToken}</Table.Td>
              <Table.Td>{row.llm}</Table.Td>
              <Table.Td>{row.embedding}</Table.Td>
              <Table.Td>{row.retrieve}</Table.Td>
              <Table.Td>{row.totalTime}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
};

export default TableMMLUDetailedResults;
