import React from "react";
import { Table, Text } from "@mantine/core";

// \begin{table}[]
// \centering
// \caption{DEA accuracy of different positions and types of data on ECHR. Llama-2 7B-FT is the Llama-2 7B model fine-tuned on ECHR with four epochs.}
// \label{tab:echr-type-position}
// % \resizebox{\textwidth}{!}{%
// \begin{tabular}{@{}llllll@{}}
// \toprule
// \multirow{2}{*}{Model}                       & \multirow{2}{*}{Type} & \multicolumn{4}{l}{DEA (\%) by position} \\ \cmidrule(l){3-6}
//                                              &                       & Overall & Front & Middle & End \\ \midrule
// \multirow{4}{*}{Llama-2 7B}                   & name                  &0.81\%                   & 0.87\%      &0.58\%        &1.0\%     \\ \cmidrule(l){2-6}
//                                              & location              & 2.6\%                  & 3.8\%      &2.5\%        &2.3\%     \\ \cmidrule(l){2-6}
//                                              & date                  &0.30\%                   &0.34\%       &0.28\%        &0.30\%     \\ \midrule
// \multirow{4}{*}{Llama-2 7B-FT} & name                  &  10.4\%                 & 4.3\%      & 12.7\%       &10.8\%     \\ \cmidrule(l){2-6}
//                                              & location              & 19.2\%                  & 7.7\%      &17.3\%        & 24.4\%    \\ \cmidrule(l){2-6}
//                                              & date                  & 6.7\%                  & 3.2\%      &5.3\%        &9.7\%     \\ \bottomrule
// \end{tabular}%
// % }
// \end{table}

const TableDeaDifferentPosition = () => {
  const topBorder = { borderTop: "2pt solid #CED4DA;" };
  const rightBorder = { borderRight: "2pt solid #CED4DA;" };
  const rows = [
    { model: "Llama-2 7B", type: "name", overall: "0.81%", front: "0.87%", middle: "0.58%", end: "1.0%" },
    { model: "Llama-2 7B", type: "location", overall: "2.6%", front: "3.8%", middle: "2.5%", end: "2.3%" },
    { model: "Llama-2 7B", type: "date", overall: "0.30%", front: "0.34%", middle: "0.28%", end: "0.30%" },
    { model: "Llama-2 7B-FT", type: "name", overall: "10.4%", front: "4.3%", middle: "12.7%", end: "10.8%" },
    { model: "Llama-2 7B-FT", type: "location", overall: "19.2%", front: "7.7%", middle: "17.3%", end: "24.4%" },
    { model: "Llama-2 7B-FT", type: "date", overall: "6.7%", front: "3.2%", middle: "5.3%", end: "9.7%" },
  ];

  const elements = rows.map((row, index) => {
    let style = undefined;
    if (index == 0 || index == 3) {
      return (
        <Table.Tr key={index} style={style}>
          <Table.Td rowSpan={3} style={{textAlign: 'center'}}>{row.model}</Table.Td>
          <Table.Td>{row.type}</Table.Td>
        <Table.Td>{row.overall}</Table.Td>
        <Table.Td>{row.front}</Table.Td>
        <Table.Td>{row.middle}</Table.Td>
        <Table.Td>{row.end}</Table.Td>
        </Table.Tr>
      );
    }
    return (
      <Table.Tr key={index} style={style}>
        <Table.Td>{row.type}</Table.Td>
        <Table.Td>{row.overall}</Table.Td>
        <Table.Td>{row.front}</Table.Td>
        <Table.Td>{row.middle}</Table.Td>
        <Table.Td>{row.end}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <>
      <Text fw={700} hiddenFrom="sm" c="pink">
        Get a better experience on larger screens
      </Text>
      <Table highlightOnHover withTableBorder captionSide="bottom" style={{ fontSize: "12px" }} withRowBorders={true}>
        <Table.Caption>Table 3: DEA accuracy of different positions and types of data on ECHR. Llama-2 7B-FT is the Llama-2 7B model fine-tuned on ECHR with four epochs.</Table.Caption>
        <Table.Thead>
          <Table.Tr style={topBorder}>
            <Table.Th rowSpan={2} style={{ textAlign: "center" }}>
              Model
            </Table.Th>
            <Table.Th rowSpan={2} style={{ textAlign: "center" }}>
              Type
            </Table.Th>
            <Table.Th colSpan={4} style={{ textAlign: "center" }}>
              DEA (%) by position
            </Table.Th>
          </Table.Tr>
          <Table.Tr style={{ borderBottom: "2pt solid #CED4DA;" }}>
            <Table.Th>Overall</Table.Th>
            <Table.Th>Front</Table.Th>
            <Table.Th>Middle</Table.Th>
            <Table.Th>End</Table.Th>

            {/* <Table.Th>TPR@0.1%FPR</Table.Th> */}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{elements}</Table.Tbody>
      </Table>
    </>
  );

  // return <div style={{ position: "relative", height: "400px", width: "100%" }}>I'm a table</div>;
};
export default TableDeaDifferentPosition;
