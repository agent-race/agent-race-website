import React from "react";
import { Table } from "@mantine/core";

const TableTemperatureEnron = () => {
  const rows = [
    { model: "llama-2-7b-chat t0.01", correct: "3.42", local: "12.09", domain: "13.44", average: "9.65" },
    { model: "llama-2-7b-chat t0.3", correct: "3.48", local: "12.24", domain: "12.93", average: "9.55" },
    { model: "llama-2-7b-chat t0.5", correct: <b>3.87</b>, local: "12.51", domain: "13.38", average: "9.92" },
    { model: "llama-2-7b-chat t0.7", correct: "3.54", local: "12.24", domain: "12.75", average: "9.51" },
    { model: "llama-2-7b-chat t0.9", correct: "3.57", local: "11.85", domain: "12.96", average: "9.46" },

    { model: "llama-2-70b-chat t0.01", correct: "4.53", local: "13.17", domain: "15.00", average: "10.90" },
    { model: "llama-2-70b-chat t0.3", correct: "4.53", local: "13.50", domain: "15.03", average: "11.02" },
    { model: "llama-2-70b-chat t0.5", correct: <b>4.65</b>, local: "14.13", domain: "14.79", average: "11.19" },
    { model: "llama-2-70b-chat t0.7", correct: "4.59", local: "13.68", domain: "14.25", average: "10.84" },
    { model: "llama-2-70b-chat t0.9", correct: "4.20", local: "13.17", domain: "14.70", average: "10.69" },
  ];

  const elements = rows.map((item, index) => {
    let style =  undefined;
    if (index == 4) {
      style = { borderBottom: "2pt solid #CED4DA;" };
    }
    return (
      <Table.Tr key={index} style={style}>
        <Table.Td>{item.model}</Table.Td>
        <Table.Td>{item.correct}</Table.Td>
        <Table.Td>{item.local}</Table.Td>
        <Table.Td>{item.domain}</Table.Td>
        <Table.Td>{item.average}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table striped highlightOnHover withTableBorder captionSide="bottom">
      <Table.Caption>Table 4. Data extraction under different generation configurations on Enron.</Table.Caption>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Model</Table.Th>
          <Table.Th>Correct</Table.Th>
          <Table.Th>Local</Table.Th>
          <Table.Th>Domain</Table.Th>
          <Table.Th>Average</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{elements}</Table.Tbody>
    </Table>
  );

  // return <div style={{ position: "relative", height: "400px", width: "100%" }}>I'm a table</div>;
};
export default TableTemperatureEnron;
