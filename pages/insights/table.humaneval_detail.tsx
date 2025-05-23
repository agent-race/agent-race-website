import React from "react";
import { Table, Text } from "@mantine/core";

const TableHumanEvalDetailedResults = () => {
  const data = [
    {
      framework: "LangChain",
      prompt: "6326.36",
      output: "617.13",
      totalToken: "6943.49",
      llm: "23.221",
      codeExecutor: "0.0034",
      totalTime: "23.968",
    },
    {
      framework: "AutoGen",
      prompt: "767.45",
      output: "106.34",
      totalToken: "873.79",
      llm: "5.822",
      codeExecutor: "0.0002",
      totalTime: "5.846",
    },
    {
      framework: "AgentScope",
      prompt: "3180.689",
      output: "561.518",
      totalToken: "3742.207",
      llm: "11.738",
      codeExecutor: "0.131",
      totalTime: "11.906",
    },
    {
      framework: "CrewAI",
      prompt: "10817.65",
      output: "892.798",
      totalToken: "11710.45",
      llm: "24.22",
      codeExecutor: "0.0258",
      totalTime: "25.24",
    },
    {
      framework: "LlamaIndex",
      prompt: "1985.6",
      output: "342.793",
      totalToken: "2328.152",
      llm: "9.52",
      codeExecutor: "0.003069",
      totalTime: "9.611",
    },
    {
      framework: "Phidata",
      prompt: "967.329",
      output: "354.427",
      totalToken: "1321.756",
      llm: "7.181",
      codeExecutor: "-",
      totalTime: "9.692",
    },
    {
      framework: "PydanticAI",
      prompt: "812.951",
      output: "352.543",
      totalToken: "1165.494",
      llm: "5.258",
      codeExecutor: "0.000007158",
      totalTime: "5.276",
    },
  ];

  return (
    <>
      <Text fw={700} hiddenFrom="sm" c="blue">
        Table 5: HumanEval Detailed Results
      </Text>
      <Table highlightOnHover withTableBorder withRowBorders style={{ fontSize: "12px" }}>
      <Table.Caption>Table 5: HumanEval Detailed Results</Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th rowSpan={2}>Framework</Table.Th>
            <Table.Th colSpan={3}>Token</Table.Th>
            <Table.Th colSpan={3}>Time</Table.Th>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Prompt</Table.Th>
            <Table.Th>Output</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>LLM</Table.Th>
            <Table.Th>Code Executor</Table.Th>
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
              <Table.Td>{row.codeExecutor}</Table.Td>
              <Table.Td>{row.totalTime}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
};

export default TableHumanEvalDetailedResults;
