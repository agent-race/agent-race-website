import React from "react";
import { Table } from "@mantine/core";

// \begin{table}[ht]
//     \centering
//     \caption{The leakage ratio (LR \%) of samples that have FuzzRate over 90, 99 or 99.9. Attacks are carried on GPT-4.}
//     % Prompt defense cannot significantly reduce the risks. The best defense can only slightly reduce the leakage ratio by 2.7\%.}
//     \label{tab:leak_ratio@FR_defense}
//     \begin{tabular}{llll}
//     \toprule
//     defense & LR@90FR & LR@99FR & LR@99.9FR \\ \midrule
//     no defense & 80.7 & 49.7 & 38.0 \\ \midrule
//     ignore-ignore-inst & 79.7 & 48.3 & 36.0 \\
//     no-repeat & 80.3 & \textbf{47.0} & \textbf{35.3} \\
//     top-secret & 80.7 & 48.7 & 37.7 \\
//     no-ignore & \textbf{79.3} & 49.0 & 36.0 \\
//     eaten & \textbf{79.3} & 48.0 & 34.0 \\
//     \bottomrule
//     \end{tabular}
// \end{table}

const TableLeakageGpt4 = () => {
  const rows = [
    { defense: "no defense", lr90fr: "80.7", lr99fr: "49.7", lr999fr: "38.0" },
    { defense: "ignore-ignore-inst", lr90fr: "79.7", lr99fr: "48.3", lr999fr: "36.0" },
    { defense: "no-repeat", lr90fr: "80.3", lr99fr: <b>47.0</b>, lr999fr: <b>35.3</b> },
    { defense: "top-secret", lr90fr: "80.7", lr99fr: "48.7", lr999fr: "37.7" },
    { defense: "no-ignore", lr90fr: <b>79.3</b>, lr99fr: "49.0", lr999fr: "36.0" },
    { defense: "eaten", lr90fr: <b>79.3</b>, lr99fr: "48.0", lr999fr: "34.0" },
  ];
  const headingLine = { borderTop: "2pt solid #CED4DA;" };
  const bottomLine = { borderBottom: "2pt solid #CED4DA;" };
  const elements = rows.map((row, index) => {
    let style = undefined;
    if (index == 0) {
      style = bottomLine;
    }
    return (
      <Table.Tr key={index} style={style}>
        <Table.Td>{row.defense}</Table.Td>
        <Table.Td>{row.lr90fr}</Table.Td>
        <Table.Td>{row.lr99fr}</Table.Td>
        <Table.Td>{row.lr999fr}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders={true}>
      <Table.Caption>Table 8. The leakage ratio (LR %) of samples that have FuzzRate over 90, 99 or 99.9. Attacks are carried on GPT-4.</Table.Caption>
      <Table.Thead>
        <Table.Tr style={{ ...bottomLine, ...headingLine }}>
          <Table.Th>defense</Table.Th>
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
export default TableLeakageGpt4;
