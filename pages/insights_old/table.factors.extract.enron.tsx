import React from "react";
import { Table } from "@mantine/core";

// \begin{table}[]
// \centering
// \caption{factors for ``gpt-3.5-0314''. data extraction on Enron. temperature 0.7. prompt=``Please conduct text continuation for the below context:  [query]''}
// \label{tb:enron_length}
// % \resizebox{\textwidth}{!}{%
// \begin{tabular}{@{}llllll@{}}
// \toprule
// token length  &  correct &  local & domain & average \\  \midrule
//  50 &  3.49 & 12.51  & 9.41 & 8.47  \\
//  100 &  4.17  & 13.90 & 11.11 & 9.72 \\
//  200 &  5.23 & 14.74 & 13.06 & 11.01 \\
// % PII location  & front &    \\
// % PII location  & middle &    \\
// % PII location & end &  \\
// \bottomrule
// \end{tabular}%
// % }
// \smallskip % Adds a small vertical space
// \small % Makes the following text smaller
// % \begin{bottom}
// %     \textit{takeaways:}
// %     \begin{itemize}
// %     \item factor length; location
// % \end{itemize}
// % \end{bottom}
// \end{table}

const TableFactorsExtractionEnron = () => {
  const rows = [
    { tokenLength: '50', correct: '3.49', local: '12.51', domain: '9.41', average: '8.47' },
    { tokenLength: '100', correct: '4.17', local: '13.90', domain: '11.11', average: '9.72' },
    { tokenLength: '200', correct: '5.23', local: '14.74', domain: '13.06', average: '11.01' },
  ];
  const elements = rows.map((row, index) => {
    let style = undefined;
    if (index == 3) {
      style = { borderBottom: "2pt solid #CED4DA;" };
    }
    return (
      <Table.Tr key={index} style={style}>
        <Table.Td>{row.tokenLength}</Table.Td>
        <Table.Td>{row.correct}</Table.Td>
        <Table.Td>{row.local}</Table.Td>
        <Table.Td>{row.domain}</Table.Td>
        <Table.Td>{row.average}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table striped highlightOnHover withTableBorder captionSide="bottom">
      <Table.Caption>Table 6. factors for “gpt-3.5-0314”. data extraction on Enron.</Table.Caption>
      <Table.Thead>
        <Table.Tr>
        <Table.Th>Token Length</Table.Th>
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
export default TableFactorsExtractionEnron;
