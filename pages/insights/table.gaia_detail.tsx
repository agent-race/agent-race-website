import React from "react";
import { Table, Text } from "@mantine/core";

const TableGaiaDetailedResults = () => {
  const firstTableData = [
    {
      framework: "langchain",
      prompt: "9358.35", output: "637.92", total: "9996.27",
      llm: "29.491", web_tool: "1.58856", pdf_tool: "0.02423455", csv_tool: "0.00003333", xlsx_tool: "0.06422606"
    },
    {
      framework: "autogen",
      prompt: "1159.48", output: "180.66", total: "1340.15",
      llm: "8.464", web_tool: "9.4219", pdf_tool: "0.0009297", csv_tool: "0.000336", xlsx_tool: "0.002387"
    },
    {
      framework: "agentscope",
      prompt: "23520.479", output: "785.891", total: "24306.37",
      llm: "41.17", web_tool: "7.291", pdf_tool: "0.217", csv_tool: "0.000297", xlsx_tool: "0.00405"
    },
    {
      framework: "crewai",
      prompt: "33621.857", output: "664.511", total: "34286.369",
      llm: "67.68", web_tool: "4.031", pdf_tool: "0.00965", csv_tool: "0.000196", xlsx_tool: "0.00422"
    },
    {
      framework: "llamaindex",
      prompt: "20935.364", output: "304.976", total: "21240.339",
      llm: "27.244", web_tool: "1.4399", pdf_tool: "0.0001352", csv_tool: "0.00016616", xlsx_tool: "0.004254"
    },
    {
      framework: "phidata/agno",
      prompt: "6386.667", output: "323.558", total: "6710.224",
      llm: "14.375", web_tool: "1.83012", pdf_tool: "0.001147", csv_tool: "0.0007207", xlsx_tool: "0.003858"
    },
    {
      framework: "pydantic",
      prompt: "14459.17", output: "320.588", total: "14779.758",
      llm: "23.779", web_tool: "1.2275", pdf_tool: "0.001395", csv_tool: "0.0003148", xlsx_tool: "0.003795"
    },
  ];

  const secondTableData = [
    {
      txt: "0.0004194", docx: "0.00009758", audio: "-", vision: "0.5345976",
      video: "-", python: "0.0152988", toolTotal: "2.22746732", total: "32.492"
    },
    {
      txt: "0.00002909", docx: "0.0002212", audio: "-", vision: "1.05489",
      video: "-", python: "0.00005333", toolTotal: "10.4807", total: "20.76"
    },
    {
      txt: "0.0000193", docx: "0.00000883", audio: "0.729", vision: "4.083",
      video: "0.0000271", python: "0.752", toolTotal: "13.076", total: "55.092"
    },
    {
      txt: "0.00123", docx: "0.000278", audio: "0.000346", vision: "0.03164",
      video: "0.000999", python: "0.09565", toolTotal: "4.18", total: "72.195"
    },
    {
      txt: "0.000034839", docx: "0.0001135", audio: "0.03341", vision: "0.8767",
      video: "-", python: "0.05782", toolTotal: "2.4126", total: "29.795"
    },
    {
      txt: "0.0002107", docx: "0.000073355", audio: "0.03821", vision: "1.4065",
      video: "1.38445E-05", python: "0.003035", toolTotal: "3.2839", total: "20.396"
    },
    {
      txt: "8.6865E-06", docx: "0.000056241", audio: "0.02965", vision: "1.2104",
      video: "3.1952E-06", python: "0.0001414", toolTotal: "2.4732", total: "26.238"
    },
  ];

  return (
    <>
      <Text fw={700} hiddenFrom="sm" c="blue">
        Table: GAIA Detailed Results
      </Text>

      <Table highlightOnHover withTableBorder withRowBorders style={{ fontSize: "12px", marginBottom: "20px" }}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th rowSpan={2}>Frameworks</Table.Th>
            <Table.Th colSpan={3}>Token</Table.Th>
            <Table.Th colSpan={5}>Time</Table.Th>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Prompt</Table.Th>
            <Table.Th>Output</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>LLM</Table.Th>
            <Table.Th>Web Tool</Table.Th>
            <Table.Th>PDF Tool</Table.Th>
            <Table.Th>CSV Tool</Table.Th>
            <Table.Th>XLSX Tool</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {firstTableData.map((row, i) => (
            <Table.Tr key={i}>
              <Table.Td>{row.framework}</Table.Td>
              <Table.Td>{row.prompt}</Table.Td>
              <Table.Td>{row.output}</Table.Td>
              <Table.Td>{row.total}</Table.Td>
              <Table.Td>{row.llm}</Table.Td>
              <Table.Td>{row.web_tool}</Table.Td>
              <Table.Td>{row.pdf_tool}</Table.Td>
              <Table.Td>{row.csv_tool}</Table.Td>
              <Table.Td>{row.xlsx_tool}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <Table highlightOnHover withTableBorder withRowBorders style={{ fontSize: "12px" }}>
        <Table.Caption>Table: Continued - Additional Tool Times</Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>TXT Tool</Table.Th>
            <Table.Th>DOCX Tool</Table.Th>
            <Table.Th>Audio Tool</Table.Th>
            <Table.Th>Vision Tool</Table.Th>
            <Table.Th>Video Tool</Table.Th>
            <Table.Th>Python Tool</Table.Th>
            <Table.Th>Total Tool Time</Table.Th>
            <Table.Th>Total Time</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {secondTableData.map((row, i) => (
            <Table.Tr key={i}>
              <Table.Td>{row.txt}</Table.Td>
              <Table.Td>{row.docx}</Table.Td>
              <Table.Td>{row.audio}</Table.Td>
              <Table.Td>{row.vision}</Table.Td>
              <Table.Td>{row.video}</Table.Td>
              <Table.Td>{row.python}</Table.Td>
              <Table.Td>{row.toolTotal}</Table.Td>
              <Table.Td>{row.total}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
};

export default TableGaiaDetailedResults;
