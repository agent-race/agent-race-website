import React from "react";
import { Table, Text } from "@mantine/core";

const MoaSeq = () => {
  const firstTableData = [
    {
      seq: "GLM->Qwen->DS",
      gp: "1296.82", gc: "734.62", gt: "2031.44",
      qp: "241.86", qc: "383.12", qt: "624.98", 
      dp: "447.0", dc: "968.5", dt: "1415.5", 
      qpp: "36750.26", qpc: "1119.44", qpt: "37869.7", 
    },
    {
      seq: "DS->Qwen->GLM",
      gp: "2953.52", gc: "1909.5", gt: "4863.02",
      qp: "279.96", qc: "557.84", qt: "837.8", 
      dp: "279.36", dc: "568.14", dt: "847.5", 
      qpp: "36732.26", qpc: "1129.24", qpt: "37861.5", 
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
            <Table.Th rowSpan={2}>Sequence</Table.Th>
            <Table.Th colSpan={3}>GLM</Table.Th>
            <Table.Th colSpan={3}>Qwen</Table.Th>
            <Table.Th colSpan={3}>DS</Table.Th>
            <Table.Th colSpan={3}>GPT</Table.Th>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Prompt</Table.Th>
            <Table.Th>Completion</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Prompt</Table.Th>
            <Table.Th>Completion</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Prompt</Table.Th>
            <Table.Th>Completion</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Prompt</Table.Th>
            <Table.Th>Completion</Table.Th>
            <Table.Th>Total</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {firstTableData.map((row, i) => (
            <Table.Tr key={i}>
              <Table.Td>{row.seq}</Table.Td>
              <Table.Td>{row.gp}</Table.Td>
              <Table.Td>{row.gc}</Table.Td>
              <Table.Td>{row.gt}</Table.Td>
              <Table.Td>{row.qp}</Table.Td>
              <Table.Td>{row.qc}</Table.Td>
              <Table.Td>{row.qt}</Table.Td>
              <Table.Td>{row.dp}</Table.Td>
              <Table.Td>{row.dc}</Table.Td>
              <Table.Td>{row.dt}</Table.Td>
              <Table.Td>{row.qpp}</Table.Td>
              <Table.Td>{row.qpc}</Table.Td>
              <Table.Td>{row.qpt}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

    </>
  );
};

export default MoaSeq;
