import React from "react";
import { Table } from "@mantine/core";

// \begin{table}[]
// \centering
// \caption{data extraction under different generation configurations on ECHR. prompt=``[query]''}
// % \resizebox{\textwidth}{!}{%
// \begin{tabular}{@{}llllll@{}}
// \toprule
// \multicolumn{1}{c}{PII} & models & extraction accuracy \\ \midrule
// \multicolumn{1}{c}{\multirow{10}{*}{name}} & llama-2-7b-chat t0.01 & 13.03 \\
// \multicolumn{1}{c}{}                      & llama-2-7b-chat t0.3  & 13.50 \\
// \multicolumn{1}{c}{}                      & llama-2-7b-chat t0.5  & 13.31 \\
// \multicolumn{1}{c}{}                      & llama-2-7b-chat t0.7  & 13.39 \\
// \multicolumn{1}{c}{}                      & llama-2-7b-chat t0.9  & \textbf{13.69} \\ \cmidrule(l){2-3}
// \multicolumn{1}{c}{}                      & llama-2-70b-chat t0.01 & \textbf{14.85} \\
// \multicolumn{1}{c}{}                      & llama-2-70b-chat t0.3  & 14.13 \\
// \multicolumn{1}{c}{}                      & llama-2-70b-chat t0.5  & 14.75 \\
// \multicolumn{1}{c}{}                      & llama-2-70b-chat t0.7  & 14.13 \\
// \multicolumn{1}{c}{}                      & llama-2-70b-chat t0.9  & 14.44 \\

// % \multicolumn{1}{c}{\multirow{5}{*}{location}} & llama-2-7b-chat t0.01 &  \\
// % \multicolumn{1}{c}{}                      & llama-2-7b-chat t0.3  &  \\
// % \multicolumn{1}{c}{}                      & llama-2-7b-chat t0.5  &  \\
// % \multicolumn{1}{c}{}                      & llama-2-7b-chat t0.7  &  \\
// % \multicolumn{1}{c}{}                      & llama-2-7b-chat t0.9  &  \\ \midrule

// % \multicolumn{1}{c}{\multirow{5}{*}{date}} & llama-2-7b-chat t0.01 &  \\
// % \multicolumn{1}{c}{}                      & llama-2-7b-chat t0.3  &  \\
// % \multicolumn{1}{c}{}                      & llama-2-7b-chat t0.5  & \\
// % \multicolumn{1}{c}{}                      & llama-2-7b-chat t0.7  &  \\
// % \multicolumn{1}{c}{}                      & llama-2-7b-chat t0.9  &  \\

// \bottomrule
// \end{tabular}%
// \smallskip % Adds a small vertical space
// \small % Makes the following text smaller
// % \begin{bottom}
//     \newline
//     \textit{takeaways:}
//     \begin{itemize}
//         \item temperature 0.9 leads to the highest data extraction accuracy for 7b \& temperature 0.01 leads to the highest data extraction accuracy for 70b llama2-chat
//     \end{itemize}
// % \end{bottom}

const data = [
  { PII: "name", model: "llama-2-7b-chat t0.01", accuracy: "13.03" },
  { PII: "name", model: "llama-2-7b-chat t0.3", accuracy: "13.50" },
  { PII: "name", model: "llama-2-7b-chat t0.5", accuracy: "13.31" },
  { PII: "name", model: "llama-2-7b-chat t0.7", accuracy: "13.39" },
  { PII: "name", model: "llama-2-7b-chat t0.9", accuracy: <b>13.69</b> },
  { PII: "name", model: "llama-2-70b-chat t0.01", accuracy: <b>14.85</b> },
  { PII: "name", model: "llama-2-70b-chat t0.3", accuracy: "14.13" },
  { PII: "name", model: "llama-2-70b-chat t0.5", accuracy: "14.75" },
  { PII: "name", model: "llama-2-70b-chat t0.7", accuracy: "14.13" },
  { PII: "name", model: "llama-2-70b-chat t0.9", accuracy: "14.44" },
];

const TableTemperatureEchr = () => {
  const rows = data.map((item, index) => {
    let td = undefined
    if (index == 0) {
      td = <Table.Td rowSpan={10}>name</Table.Td>;
    }

    let style = undefined;
    if (index == 4) {
      style = { borderBottom: "2pt solid #CED4DA;" };
    }

    return (
      <Table.Tr key={index} style={style}>
        {td}
        <Table.Td>{item.model}</Table.Td>
        <Table.Td>{item.accuracy}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table striped highlightOnHover withTableBorder captionSide="bottom">
      <Table.Caption>Table 5. Data extraction under different generation configurations on ECHR</Table.Caption>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>PII</Table.Th>
          <Table.Th>Models</Table.Th>
          <Table.Th>Extraction Accuracy</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
export default TableTemperatureEchr;
