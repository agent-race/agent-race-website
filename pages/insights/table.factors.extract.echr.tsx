import React from "react";
import { Table } from "@mantine/core";

// \begin{table}[]
// \centering
// \caption{factors for ``llama-2-7b-chat''. data extraction on ECHR. temperature 0.7. prompt=``[query]''}
// \label{tb:echr_position}
// \resizebox{\columnwidth}{!}{%
// \begin{tabular}{@{}llllll@{}}
// \toprule
// \multicolumn{1}{c}{PII} & factor & accuracy & accuracy [count=1] \\ \midrule
// \multicolumn{1}{c}{\multirow{3}{*}{name}} & PII location [front] & \textbf{34.6} & \textbf{2.49} \\
// \multicolumn{1}{c}{}                      & PII location [middle] & 4.63 & 1.23 \\ 
// \multicolumn{1}{c}{}                      & PII location [end] & 1.35 & 1.26 \\ \midrule

// \multicolumn{1}{c}{\multirow{3}{*}{location}} & PII location [front] & \textbf{31.7} & 6.80 \\
// \multicolumn{1}{c}{}                      & PII location [middle] & 9.47 & 6.45 \\ 
// \multicolumn{1}{c}{}                      & PII location [end] & 8.89 & \textbf{8.00} \\ \midrule

// \multicolumn{1}{c}{\multirow{3}{*}{date}} & PII location [front] & \textbf{9.99} & 5.45 \\
// \multicolumn{1}{c}{}                      & PII location [middle] & 6.83 & \textbf{6.25} \\ 
// \multicolumn{1}{c}{}                      & PII location [end] & 5.64 & 5.66 \\

// \bottomrule
// \end{tabular}%
// }
// \end{table}


const TableFactorsExtractionECHR = () => {
  const rows = [
   { PII: "name", factor: "PII location [front]", accuracy: <b>34.6</b>, accuracyCount: <b>2.49</b> },
   { PII: "name", factor: "PII location [middle]", accuracy: "4.63", accuracyCount: "1.23" },
    { PII: "name", factor: "PII location [end]", accuracy: "1.35", accuracyCount: "1.26" },
  
    { PII: "location", factor: "PII location [front]", accuracy: <b>31.7</b>, accuracyCount: "6.80" },
    { PII: "location", factor: "PII location [middle]", accuracy: "9.47", accuracyCount: "6.45" },
    { PII: "location", factor: "PII location [end]", accuracy: "8.89", accuracyCount: <b>8.00</b> },
  
    { PII: "date", factor: "PII location [front]", accuracy: <b>9.99</b>, accuracyCount: "5.45" },
    { PII: "date", factor: "PII location [middle]", accuracy: "6.83", accuracyCount: <b>6.25</b> },
    { PII: "date", factor: "PII location [end]", accuracy: "5.64", accuracyCount: "5.66" },
  ];
  const elements = rows.map((row, index) => {
    let style = undefined;
    if (index == 2 || index == 5) {
      style = { borderBottom: "2pt solid #CED4DA;" };
    }

    let td = undefined
    if (index == 0) {
      td = <Table.Td rowSpan={3}>name</Table.Td>;
    } else if (index == 3) {
      td = <Table.Td rowSpan={3}>location</Table.Td>;
    } else if (index == 6) {
      td = <Table.Td rowSpan={3}>date</Table.Td>;
    }


    return (
      <Table.Tr key={index} style={style}>
        {td}
        <Table.Td>{row.factor}</Table.Td>
        <Table.Td>{row.accuracy}</Table.Td>
        <Table.Td>{row.accuracyCount}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table striped highlightOnHover withTableBorder captionSide="bottom">
      <Table.Caption>Table 8. factors for “gpt-3.5-0314”. data extraction on Enron.</Table.Caption>
      <Table.Thead>
        <Table.Tr>
        <Table.Th>PII</Table.Th>
          <Table.Th>Factor</Table.Th>
          <Table.Th>Accuracy</Table.Th>
          <Table.Th>Accuracy [count=1]</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{elements}</Table.Tbody>
    </Table>
  );

  // return <div style={{ position: "relative", height: "400px", width: "100%" }}>I'm a table</div>;
};
export default TableFactorsExtractionECHR;
