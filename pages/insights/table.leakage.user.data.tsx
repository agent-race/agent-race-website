import React from "react";
import { Table } from "@mantine/core";

// \begin{table}[]
// \centering
// \caption{The AIA success rate and MMLU of Claude (denoted by C). C-3.5 refers to Claude-3.5-sonnet.}
// \label{tab:claude_aia}
// \resizebox{\columnwidth}{!}{%
// \begin{tabular}{@{}llllll@{}}
// \toprule
//                       & C-2.1 & C-3-haiku & C-3-sonnet & C-3-opus & C-3.5 \\ \midrule
// AIA accuracy & 35.4\%     & 79.7\%         & 82.1\%          & 86.9\%        & \tb{87.1}\%            \\
// MMLU                  & 63.4\%     & 75.2\%         & 79.0\%          & 86.8\%        & \tb{88.7}\%            \\ \bottomrule
// \end{tabular}%
// }
// \end{table}

const TableLeakageUserData = () => {
  const rows = [
    { item: "AIA accuracy", C21: "35.4", C3Haiku: "79.7", C3Sonnet: "82.1", C3Opus: "86.9", C35: <b>87.1</b> },
    { item: "MMLU", C21: "63.4", C3Haiku: "75.2", C3Sonnet: "79.0", C3Opus: "86.8", C35: <b>88.7</b> },
  ];
  const headingLine = { borderTop: "2pt solid #CED4DA;" };
  const bottomLine = { borderBottom: "2pt solid #CED4DA;" };
  const elements = rows.map((row, index) => {
    let style = undefined;
    // if (index == 0) {
    // style = bottomLine;
    // }
    return (
      <Table.Tr key={index} style={style}>
        <Table.Td>{row.item}</Table.Td>
        <Table.Td>{row.C21}%</Table.Td>
        <Table.Td>{row.C3Haiku}%</Table.Td>
        <Table.Td>{row.C3Sonnet}%</Table.Td>
        <Table.Td>{row.C3Opus}%</Table.Td>
        <Table.Td>{row.C35}%</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders={true}>
      <Table.Caption>Table 9. The AIA success rate and MMLU of Claude (denoted by C). C-3.5 refers to Claude-3.5-sonnet.</Table.Caption>
      <Table.Thead>
        <Table.Tr style={{ ...bottomLine, ...headingLine }}>
          <Table.Th></Table.Th>
          <Table.Th>C-2.1</Table.Th>
          <Table.Th>C-3-haiku</Table.Th>
          <Table.Th>C-3-sonnet</Table.Th>
          <Table.Th>C-3-opus</Table.Th>
          <Table.Th>C-3.5</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{elements}</Table.Tbody>
    </Table>
  );

  // return <div style={{ position: "relative", height: "400px", width: "100%" }}>I'm a table</div>;
};
export default TableLeakageUserData;
