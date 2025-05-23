import React from "react";
import { Table, Text } from "@mantine/core";

const TableGaiaDetails = () => {
  const topBorder = { borderTop: "2pt solid #CED4DA;" };

  const rows1 = [
    {
      framework: "langchain",
      prompt: "9358.35",
      output: "637.92",
      total: "9996.27",
      llm: "29.491",
      web_tool: "1.58856",
      pdf_tool: "0.02423455",
      csv_tool: "0.00003333",
      xlsx_tool: "0.06422606",
    },
    {
      framework: "autogen",
      prompt: "1159.48",
      output: "180.66",
      total: "1340.15",
      llm: "8.464",
      web_tool: "9.4219",
      pdf_tool: "0.0009297",
      csv_tool: "0.000336",
      xlsx_tool: "0.002387",
    },
    {
      framework: "agentscope",
      prompt: "23520.479",
      output: "785.891",
      total: "24306.37",
      llm: "41.17",
      web_tool: "7.291",
      pdf_tool: "0.217",
      csv_tool: "0.000297",
      xlsx_tool: "0.00405",
    },
    {
      framework: "crewai",
      prompt: "33621.857",
      output: "664.511",
      total: "34286.369",
      llm: "67.68",
      web_tool: "4.031",
      pdf_tool: "0.00965",
      csv_tool: "0.000196",
      xlsx_tool: "0.00422",
    },
    {
      framework: "llamaindex",
      prompt: "20935.364",
      output: "304.976",
      total: "21240.339",
      llm: "27.244",
      web_tool: "1.4399",
      pdf_tool: "0.0001352",
      csv_tool: "0.00016616",
      xlsx_tool: "0.004254",
    },
    {
      framework: "phidata/agno",
      prompt: "6386.667",
      output: "323.558",
      total: "6710.224",
      llm: "14.375",
      web_tool: "1.83012",
      pdf_tool: "0.001147",
      csv_tool: "0.0007207",
      xlsx_tool: "0.003858",
    },
    {
      framework: "pydantic",
      prompt: "14459.17",
      output: "320.588",
      total: "14779.758",
      llm: "23.779",
      web_tool: "1.2275",
      pdf_tool: "0.001395",
      csv_tool: "0.0003148",
      xlsx_tool: "0.003795",
    },
  ];

  const rows2 = [
    {
      txt_tool: "0.0004194",
      docx_tool: "0.00009758",
      audio_tool: "-",
      vision_tool: "0.5345976",
      video_tool: "-",
      python_tool: "0.0152988",
      total_tool_time: "2.22746732",
      total_time: "32.492",
    },
    {
      txt_tool: "0.00002909",
      docx_tool: "0.0002212",
      audio_tool: "-",
      vision_tool: "1.05489",
      video_tool: "-",
      python_tool: "0.00005333",
      total_tool_time: "10.4807",
      total_time: "20.76",
    },
    {
      txt_tool: "0.0000193",
      docx_tool: "0.00000883",
      audio_tool: "0.729",
      vision_tool: "4.083",
      video_tool: "0.0000271",
      python_tool: "0.752",
      total_tool_time: "13.076",
      total_time: "55.092",
    },
    {
      txt_tool: "0.00123",
      docx_tool: "0.000278",
      audio_tool: "0.000346",
      vision_tool: "0.03164",
      video_tool: "0.000999",
      python_tool: "0.09565",
      total_tool_time: "4.18",
      total_time: "72.195",
    },
    {
      txt_tool: "0.000034839",
      docx_tool: "0.0001135",
      audio_tool: "0.03341",
      vision_tool: "0.8767",
      video_tool: "-",
      python_tool: "0.05782",
      total_tool_time: "2.4126",
      total_time: "29.795",
    },
    {
      txt_tool: "0.0002107",
      docx_tool: "0.000073355",
      audio_tool: "0.03821",
      vision_tool: "1.4065",
      video_tool: "1.38445E-05",
      python_tool: "0.003035",
      total_tool_time: "3.2839",
      total_time: "20.396",
    },
    {
      txt_tool: "8.6865E-06",
      docx_tool: "0.000056241",
      audio_tool: "0.02965",
      vision_tool: "1.2104",
      video_tool: "3.1952E-06",
      python_tool: "0.0001414",
      total_tool_time: "2.4732",
      total_time: "26.238",
    },
  ];

  return (
    <>
      <Text fw={700} hiddenFrom="sm" c="pink">
        Get a better experience on larger screens
      </Text>

      <Table highlightOnHover withTableBorder captionSide="bottom" style={{ fontSize: "12px" }}>
        <Table.Caption>Table: GAIA Detailed Results — token and tool breakdown (Part 1).</Table.Caption>
        <Table.Thead>
          <Table.Tr style={topBorder}>
            <Table.Th>Framework</Table.Th>
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
          {rows1.map((row, i) => (
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

      <Table highlightOnHover withTableBorder captionSide="bottom" style={{ fontSize: "12px", marginTop: 20 }}>
        <Table.Caption>Table: GAIA Detailed Results — additional tool breakdown (Part 2).</Table.Caption>
        <Table.Thead>
          <Table.Tr style={topBorder}>
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
          {rows2.map((row, i) => (
            <Table.Tr key={i}>
              <Table.Td>{row.txt_tool}</Table.Td>
              <Table.Td>{row.docx_tool}</Table.Td>
              <Table.Td>{row.audio_tool}</Table.Td>
              <Table.Td>{row.vision_tool}</Table.Td>
              <Table.Td>{row.video_tool}</Table.Td>
              <Table.Td>{row.python_tool}</Table.Td>
              <Table.Td>{row.total_tool_time}</Table.Td>
              <Table.Td>{row.total_time}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
};

export default TableGaiaDetails;
