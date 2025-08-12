import React from "react";
import { Table, Text } from "@mantine/core";

// \begin{table}[]
// \centering
// \caption{\vldbr{
// % Comparison among query-based and poisoning-based DEAs on Enron with Llama-2.
// Comparison among different types of DEAs and jailbreak attacks with Llama-2. For DEAs, we use the Enron Email dataset. For JA, MoP refers to model-generated JA prompts and MaP  refers to manually generated prompts.}}
// \label{tab:deas}
// % \resizebox{\columnwidth}{!}{%
// \begin{tabular}{@{}l|ll|llll@{}}
// \toprule
// \multirow{2}{*}{Models} & \multicolumn{2}{l|}{DEA accuracy (\%)} & \multicolumn{2}{l}{JA success rate (\%)}   \\
// \cmidrule(l){2-3}  \cmidrule(l){4-5}
// & Query     & Poisoning & MoP & MaP     \\ \midrule
// Llama-2 7B              & 3.54            &  1.14     & 72.4 & 58.2                          \\ \midrule
// Llama-2 13B             & 3.72            &  1.47          & 68.0 & 56.7                        \\ \midrule
// Llama-2 70B             & 4.59            &  1.74    & 58.9 & 47.4                             \\ \bottomrule
// \end{tabular}%
// % }
// \end{table}

const TablePrivacyRisksOverDifferentAttacks = () => {
  const topBorder = { borderTop: "2pt solid #CED4DA;" };
  const rightBorder = { borderRight: "2pt solid #CED4DA;" };
  const bottomBorder = { borderBottom: "2pt solid #CED4DA;" };
  const rows = [
    { model: "Llama-2 7B", query: 3.54, poisoning: 1.14, mop: 72.4, map: 58.2 },
    { model: "Llama-2 13B", query: 3.72, poisoning: 1.47, mop: "68.0", map: 56.7 },
    { model: "Llama-2 70B", query: 4.59, poisoning: 1.74, mop: 58.9, map: 47.4 },
  ];
  const elements = rows.map((row, index) => {
    let style = undefined;

    if (index == 3 || index == 6 || index == 9) {
      style = { borderBottom: "2pt solid #CED4DA;" };
    }

    return (
      <Table.Tr key={index} style={style}>
        <Table.Td style={rightBorder}>{row.model}</Table.Td>
        <Table.Td>{row.query}</Table.Td>
        <Table.Td style={rightBorder}>{row.poisoning}%</Table.Td>
        <Table.Td>{row.mop}%</Table.Td>
        <Table.Td>{row.map}%</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <>
      <Text fw={700} hiddenFrom="sm" c="red">
        Please view this table on a larger device
      </Text>
      <Table highlightOnHover withTableBorder captionSide="bottom" style={{ fontSize: "12px" }} visibleFrom="sm">
        <Table.Caption>Table 6. Comparison among different types of DEAs and jailbreak attacks with Llama-2. For DEAs, we use the Enron Email dataset. For JA, MoP refers to model-generated JA prompts and MaP refers to manually generated prompts.</Table.Caption>
        <Table.Thead>
          <Table.Tr style={topBorder}>
            <Table.Th rowSpan={2} style={rightBorder}>
              Models
            </Table.Th>
            <Table.Th colSpan={2} style={{ ...rightBorder, alignItems: "center" }}>
              DEA accuracy (%)
            </Table.Th>
            <Table.Th colSpan={2} style={{ alignItems: "center" }}>
              JA success rate (%)
            </Table.Th>
          </Table.Tr>

          <Table.Tr>
            <Table.Th>Query</Table.Th>
            <Table.Th style={{ ...rightBorder }}>Poisoning</Table.Th>
            <Table.Th>MoP</Table.Th>
            <Table.Th>MaP</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{elements}</Table.Tbody>
      </Table>
    </>
  );
};
export default TablePrivacyRisksOverDifferentAttacks;
