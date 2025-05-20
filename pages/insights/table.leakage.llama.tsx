import React from "react";
import { Table } from "@mantine/core";

// \begin{table}[ht]
//     \centering
//     \caption{The leakage ratio (LR \%) of samples that have FuzzRate over 90, 99 or 99.9. Llama-2-70b is more vulnerable than other models. Vicuna-7b is the most vulnerable 7b model.}
//     \label{tab:leak_ratio@FR}
//     \begin{tabular}{llll}
//     \toprule
//     model & LR@90FR & LR@99FR & LR@99.9FR \\
//     \midrule
//     gpt-3.5-turbo & 67.0 & 37.7 & 18.7 \\
//     gpt-4 & 80.7 & 49.7 & 38.0 \\
//     vicuna-7b-v1.5 & 73.7 & 59.3 & 43.0 \\
//     vicuna-13b-v1.5 & 74.0 & \textbf{64.0} & \textbf{50.0} \\
//     Llama-2-7b-chat & 56.7 & 33.7 & 22.7 \\
//     Llama-2-70b-chat & \textbf{83.0} & 60.3 & 40.7 \\ 
//     \bottomrule
//     \end{tabular}
// \end{table}

const TableLeakageLlama = () => {
  const rows = [
    { model: "gpt-3.5-turbo", lr90fr: "67.0", lr99fr: "37.7", lr999fr: "18.7"},
    { model: "gpt-4", lr90fr: "80.7", lr99fr: "49.7", lr999fr: "38.0"},
    { model: "vicuna-7b-v1.5", lr90fr: "73.7", lr99fr: "59.3", lr999fr: "43.0"},
    { model: "vicuna-13b-v1.5", lr90fr: "74.0", lr99fr: <b>64.0</b>, lr999fr: <b>50.0</b>},
    { model: "Llama-2-7b-chat", lr90fr: "56.7", lr99fr: "33.7", lr999fr: "22.7"},
    { model: "Llama-2-70b-chat", lr90fr: <b>83.0</b>, lr99fr: "60.3", lr999fr: "40.7"},
  ];
  const headingLine = { borderTop: "2pt solid #CED4DA;" };
  const bottomLine = { borderBottom: "2pt solid #CED4DA;" };
  const elements = rows.map((row, index) => {
    let style = undefined;
    if (index == 5) {
      style = bottomLine;
    }
    return (
      <Table.Tr key={index} style={style}>
        <Table.Td>{row.model}</Table.Td>
        <Table.Td>{row.lr90fr}</Table.Td>
        <Table.Td>{row.lr99fr}</Table.Td>
        <Table.Td>{row.lr999fr}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders={true}>
      <Table.Caption>Table 7: The leakage ratio (LR %) of samples that have FuzzRate over 90, 99 or 99.9. <br/>Llama-2-70b is more vulnerable than other models. Vicuna-7b is the most vulnerable 7b model.</Table.Caption>
      <Table.Thead>
        <Table.Tr style={{...bottomLine, ...headingLine}}>
          <Table.Th>Model</Table.Th>
          <Table.Th>LR@90FR</Table.Th>
          <Table.Th>LR@99FR</Table.Th>
          <Table.Th>LR@99.9FR</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{elements}</Table.Tbody>
    </Table>
  );

  // return <div style={{ position: "relative", height: "400px", width: "100%" }}>I'm a table</div>;
};
export default TableLeakageLlama;
