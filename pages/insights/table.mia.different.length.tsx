import React from "react";
import { Table, Text } from "@mantine/core";

// \begin{table}[]
// \centering
// \smallskip % Adds a small vertical space
// \small % Makes the following text smaller
// \caption{Factors for Llama 2 finetuned for 4 epoch by MIA REFER. We present the AUC for REFER. Samples are categorized by their length (number of tokens). The bins of contexts are set to include similar number of samples.
// \jytd{Summarize this as data dependent. Emphasize the diff.}
// \jytd{The difference in data: ECHR is formated? ECHR includes more PII?}
// }
// \label{tbl:len_type_MIA_echr}
// \resizebox{0.5\textwidth}{!}{%
// \begin{tabular}{l|ll|ll}
// \toprule
// & \multicolumn{2}{c}{Perplexity} & \multicolumn{2}{c}{MIA} \\
// Length & Mem & Non-Mem & AUC & TPR@0.1\% FPR \\
// \midrule
// \multicolumn{5}{c}{\textbf{ECHR}} \\
// % (-1, 50] & 5327 & 4.06 & 4.36 & 53.6\% & 0.2\% \\
// % (50, 100] & 7332 & 4.29 & 4.82 & 57.5\% & 0.2\% \\
// % (100, 200] & 5227 & 4.39 & 5.13 & 63.0\% & 0.4\% \\
// % (200, inf] & 2114 & 4.60 & 5.35 & 64.4\% & 0.2\% \\
// (-1, 50]   & 4.06 & 4.36 & 55.9\% & 0.19\% \\
// (50, 100]  & 4.29 & 4.82 & 62.8\% & \textbf{0.30\%} \\
// (100, 200] & 4.39 & 5.13 & 72.9\% & 0.19\% \\
// (200, inf] & 4.60 & 5.35 & \textbf{82.2\%} & 0.09\% \\

// \midrule
// \multicolumn{5}{c}{\textbf{Enron}} \\
// (-1, 150]  & 6.36 & 10.11 & \textbf{61.7\%} & 0.07\% \\
// (150, 350] & 3.11 & 4.51  & 59.3\% & 0.07\% \\
// (350, 750] & 3.03 & 4.23  & 58.2\% & \textbf{0.17\%} \\
// (750, inf] & 2.99 & 4.18  & 58.5\% & 0.16\% \\
// % Category & Size & Member PPL & Nonmember PPL & PPL & REFER & LIRA & LOWER\_CASE \\
// % \midrule
// % Length (-1, 50] & 112 & 4.4553 & 4.4496 & 49.29\% & 52.52\% & 54.97\% & 53.52\% \\
// % Length (50, 100] & 1896 & 3.5899 & 3.7739 & 52.23\% & 53.65\% & 54.50\% & 52.23\% \\
// % Length (100, 200] & 4623 & 4.1356 & 4.4942 & 54.49\% & 58.02\% & 58.93\% & 51.79\% \\
// % % DATE & 16676 & 4.0397 & 4.5494 & 58.67\% & 60.65\% & 59.52\% & 52.12\% \\
// % % PERSON & 4752 & 4.8744 & 5.6385 & 61.50\% & 65.76\% & 63.85\% & 53.68\% \\
// % % LOC & 372 & 4.3056 & 5.1294 & 62.24\% & 63.65\% & 61.84\% & 51.62\% \\
// \bottomrule
// \end{tabular}
// }
// % \begin{bottom}
// %     \textit{takeaways:}
// %     \begin{itemize}
// %     \item factor length; location
// % \end{itemize}
// % \end{bottom}
// \end{table}

const TableMiaDifferentLength = () => {
  const topBorder = { borderTop: "2pt solid #CED4DA;" };
  const rightBorder = { borderRight: "2pt solid #CED4DA;" };
  const rows = [
    { length: "ECHR", memPpl: -1, nonMemPpl: -1, auc: -1, tpr: -1 },
    { length: "(0, 50]", memPpl: 4.06, nonMemPpl: 4.36, auc: 55.9, tpr: 0.19 },
    { length: "(50, 100]", memPpl: 4.29, nonMemPpl: 4.82, auc: 62.8, tpr: <b>0.30</b> },
    { length: "(100, 200]", memPpl: 4.39, nonMemPpl: 5.13, auc: 72.9, tpr: 0.19 },
    { length: "(200, inf]", memPpl: <b>4.60</b>, nonMemPpl: <b>5.35</b>, auc: <b>82.2</b>, tpr: 0.09 },
    { length: "Enron", memPpl: -1, nonMemPpl: -1, auc: -1, tpr: -1 },
    { length: "(0, 150]", memPpl: <b>6.36</b>, nonMemPpl: <b>10.11</b>, auc: <b>61.7</b>, tpr: 0.07 },
    { length: "(150, 350]", memPpl: 3.11, nonMemPpl: 4.51, auc: 59.3, tpr: 0.07 },
    { length: "(350, 750]", memPpl: 3.03, nonMemPpl: 4.23, auc: 58.2, tpr: <b>0.17</b> },
    { length: "(750, inf]", memPpl: 2.99, nonMemPpl: 4.18, auc: 58.5, tpr: 0.16 },
  ];
  const elements = rows.map((row, index) => {
    if (row.length == "ECHR" || row.length == "Enron") {
      return (
        <Table.Tr key={index}>
          <Table.Td rowSpan={5} style={{ textAlign: "center", ...rightBorder }}>
            <b>{row.length}</b>
          </Table.Td>
        </Table.Tr>
      );
    }

    let style = undefined;
    if (index == 4 || index == 9) {
      style = { borderBottom: "2pt solid #CED4DA;" };
    }

    return (
      <Table.Tr key={index} style={style}>
        <Table.Td style={rightBorder}>{row.length}</Table.Td>
        <Table.Td>{row.memPpl}</Table.Td>
        <Table.Td style={rightBorder}>{row.nonMemPpl}</Table.Td>
        <Table.Td style={{ textAlign: "center" }}>{row.auc}%</Table.Td>
        {/* <Table.Td>{row.tpr}%</Table.Td> */}
      </Table.Tr>
    );
  });

  return (
    <>
      <Text fw={700} hiddenFrom="sm" c="pink">
        Get a better experience on larger screens
      </Text>
      <Table highlightOnHover withTableBorder captionSide="bottom" style={{ fontSize: "12px" }} withRowBorders={true}>
        <Table.Caption>Table 4: MIAs on Llama-2 with different data lengths.</Table.Caption>
        <Table.Thead>
          <Table.Tr style={topBorder}>
            <Table.Th rowSpan={2} style={{ textAlign: "center", ...rightBorder }}>
              Datasets
            </Table.Th>
            <Table.Th rowSpan={2} style={{ textAlign: "center", ...rightBorder }}>
              Length
            </Table.Th>
            <Table.Th colSpan={2} style={{ textAlign: "center", ...rightBorder }}>
              Perplexity
            </Table.Th>
            <Table.Th rowSpan={2} style={{ textAlign: "center" }}>
              AUC
            </Table.Th>
          </Table.Tr>
          <Table.Tr style={{ borderBottom: "2pt solid #CED4DA;" }}>

            <Table.Th>Mem</Table.Th>
            <Table.Th style={rightBorder}>Non-Mem</Table.Th>
            {/* <Table.Th>TPR@0.1%FPR</Table.Th> */}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{elements}</Table.Tbody>
      </Table>
    </>
  );

  // return <div style={{ position: "relative", height: "400px", width: "100%" }}>I'm a table</div>;
};
export default TableMiaDifferentLength;
