import React from "react";
import { Table, Text } from "@mantine/core";


// \begin{table*}[ht]
// \centering
// \caption{ Membership Inference Attacks on Enron.
// The perplexity of member (Mem) and non-member (Non-Mem) samples are reported as benign performance.
// Two metrics, AUC and TPR@0.1\%FPR are reported for MIA.
// Refer and Neighbor attacks present non-trivial improvement compared to PPL in terms of TPR.
// \jytd{Try a smaller fine-tuning set.}
// }
// \label{tbl:mia_enron}
// \resizebox{\textwidth}{!}{%
// \begin{tabular}{@{}ll|ll|*{4}{l}|*{4}{l}@{}}
// \toprule
//  & & \multicolumn{2}{c}{Perplexity} & \multicolumn{4}{c}{MIA AUC} & \multicolumn{4}{c}{MIA TPR@0.1     PET       & Mem  & Non-Mem    & PPL     & Refer     & LiRA      & Neighbor          & PPL    & Refer & LiRA  & Neighbor \\ \midrule
//      PET       & Member PPL & Non-member PPL & PPL      & Refer    & LiRA      & Neighbor  \\  \midrule
// Llama 2 10 epoch  & none      & 2.90      & 8.03          & 60.8\%  & 62.8\%  & 64.1\%   & 61.9\%   & 0\%    & 0\%   & 0.1\% & 0.2\%   \\
// Llama 2           & none      & 3.47      & 5.96          & 57.1\%  & 59.5\%  & 60.2\%   & 57.8\%   & 0\%    & 0\%   & 0.1\% & 0\%     \\
// Llama 2 10 epoch  & scrubbing & 9.56      & 15.10         & 56.5\%  & 60.8\%  & 60.9\%   & 52.6\%   & 0\%    & 0.3\% & 0.3\% & 0.2\%   \\
// Llama 2           & scrubbing & 7.01      & 9.30          & 54.57\%  & 58.4\%  & 58.6\%   & 51.9\%   & 0\%    & 0.1\% & 0.3\% & 0.2\%   \\       \midrule
// Llama 2 LoRA      & none      & 8.85       & 9.81           & 49.5\%   &  50.0\%  & 49.9\%    & 50.8\%    & 0.0\%  & 0.1\% & 0.0\% & 0.3\%   \\
// Llama 2 LoRA      & scrubbing & 9.11       &  9.94          & 49.7\%   & 49.4\%   & 49.3\%    & 50.7\%    & 0.0\%  & 0.4\% & 0.1\% & 0.5\%   \\
// Llama 2 LoRA      & DPSGD     & 9.45      & 10.45         & 49.6\%  & 50.2\%  & 50.0\%   & 49.1\%   & 0.0\%  & 0.1\% & 0.0\% & 0.2\%   \\   \midrule
// Llama 2 Chat LoRA & none      & 7.69       &  8.33          & 49.2\%   & 49.6\%   & 49.1\%    & 50.6\%    & 0.1\%  & 0.2\% & 0.1\% & 0.2\%   \\
// Llama 2 Chat LoRA & scrubbing & 9.75       &  10.46         & 49.6\%   & 49.3\%   & 49.1\%    & 50.7\%    & 0.0\%  & 0.3\% & 0.1\% & 0.4\%   \\
// Llama 2 Chat LoRA & DPSGD     & 10.40     & 11.20         & 49.4\%  & 49.7\%  & 49.7\%   & 49.3\%   & 0.0\%  & 0.1\% & 0.1\% & 0.3\%   \\
// \bottomrule
// \vspace{0.5mm}
// \end{tabular}%
// }
// \end{table*}


const TableMiaDeaEchr = () => {
  const topBorder = { borderTop: "2pt solid #CED4DA;" };
  const rightBorder = { borderRight: "2pt solid #CED4DA;" };
  const bottomBorder = { borderBottom: "2pt solid #CED4DA;" };
  const rows = [
    {      pet: "none", perplexity: "7.53", ppl: 97.9, refer: 97.7, lira: '95.0', mink: 97.5, dea: 24.2},
    {      pet: "scrubbing", perplexity: 14.01, ppl: '87.0', refer: 87.3, lira: 86.8, mink: 74.1, dea: '4.0'},
    {      pet: "DP (𝜖=8)", perplexity: "8.02", ppl: 50.9, refer: 49.0, lira: 48.7, mink: 50.3, dea:3.2},
  ];
  const elements = rows.map((row, index) => {
    let style = undefined;

    if (index == 3 || index == 6 || index == 9) {
      style = { borderBottom: "2pt solid #CED4DA;" };
    }

    return (
      <Table.Tr key={index} style={style}>
        <Table.Td style={rightBorder}>{row.pet}</Table.Td>
        <Table.Td style={rightBorder}>{row.perplexity}</Table.Td>
        <Table.Td>{row.ppl}%</Table.Td>
        <Table.Td>{row.refer}%</Table.Td>
        <Table.Td>{row.lira}%</Table.Td>
        <Table.Td style={rightBorder}>{row.mink}%</Table.Td>
        <Table.Td>{row.dea}%</Table.Td>
      </Table.Tr>
    );
  });
  

  return (
    <>
    <Text fw={700} hiddenFrom="sm" c="red">Please view this table on a larger device</Text>
    <Table highlightOnHover withTableBorder captionSide="bottom"  style={{fontSize: "12px"}} visibleFrom="sm">
      <Table.Caption>Table 5. MIAs and DEAs on ECHR. We report the perplexity of
non-member data, AUC of different MIA attack approaches
(PPL, Refer, and MIN-K), and the attack success rate of DEA.</Table.Caption>
      <Table.Thead>
        <Table.Tr style={topBorder}>
          <Table.Th style={rightBorder}>PET</Table.Th>
          <Table.Th style={{...rightBorder}}>Perplexity</Table.Th>
          <Table.Th >PPL</Table.Th>
          <Table.Th >Refer</Table.Th>
          <Table.Th >LiRA</Table.Th>
          <Table.Th style={{...rightBorder}}>MIN-K</Table.Th>
          <Table.Th >DEA</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{elements}</Table.Tbody>
    </Table></>
  );
};
export default TableMiaDeaEchr;
