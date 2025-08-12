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
//  & & \multicolumn{2}{c}{Perplexity} & \multicolumn{4}{c}{MIA AUC} & \multicolumn{4}{c}{MIA TPR@0.1\%FPR} \\
// Models            & PET       & Mem  & Non-Mem    & PPL     & Refer     & LiRA      & Neighbor          & PPL    & Refer & LiRA  & Neighbor \\ \midrule
// % \toprule
// % Models            & PET       & Member PPL & Non-member PPL & PPL      & Refer    & LiRA      & Neighbor  \\  \midrule
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


const TableMiaEnron = () => {
  const topBorder = { borderTop: "2pt solid #CED4DA;" };
  const rightBorder = { borderRight: "2pt solid #CED4DA;" };
  const bottomBorder = { borderBottom: "2pt solid #CED4DA;" };
  const rows = [
    { models: "Llama 2 10 epoch", pet: "none", memPpl: "2.90", nonMemPpl: 8.03, ppl: 60.8, refer: 62.8, lira: 64.1, neighbor: 61.9, ppl_tpr: "0.0", refer_tpr: "0.0", lira_tpr: 0.1, neighbor_tpr: 0.2 },
    { models: "Llama 2", pet: "none", memPpl: 3.47, nonMemPpl: 5.96, ppl: 57.1, refer: 59.5, lira: 60.2, neighbor: 57.8, ppl_tpr: "0.0", refer_tpr: "0.0", lira_tpr: 0.1, neighbor_tpr: "0.0" },
    { models: "Llama 2 10 epoch", pet: "scrubbing", memPpl: 9.56, nonMemPpl: "15.10", ppl: 56.5, refer: 60.8, lira: 60.9, neighbor: 52.6, ppl_tpr: "0.0", refer_tpr: 0.3, lira_tpr: 0.3, neighbor_tpr: 0.2 },
    { models: "Llama 2", pet: "scrubbing", memPpl: 7.01, nonMemPpl: "9.30", ppl: 54.57, refer: 58.4, lira: 58.6, neighbor: 51.9, ppl_tpr: "0.0", refer_tpr: 0.1, lira_tpr: 0.3, neighbor_tpr: 0.2 },

    { models: "Llama 2 LoRA", pet: "none", memPpl: 8.85, nonMemPpl: 9.81, ppl: 49.5, refer: "50.0", lira: 49.9, neighbor: 50.8, ppl_tpr: "0.0", refer_tpr: 0.1, lira_tpr: "0.0", neighbor_tpr: 0.3 },
    { models: "Llama 2 LoRA", pet: "scrubbing", memPpl: 9.11, nonMemPpl: 9.94, ppl: 49.7, refer: 49.4, lira: 49.3, neighbor: 50.7, ppl_tpr: "0.0", refer_tpr: 0.4, lira_tpr: 0.1, neighbor_tpr: 0.5 },
    { models: "Llama 2 LoRA", pet: "DPSGD", memPpl: 9.45, nonMemPpl: 10.45, ppl: 49.6, refer: 50.2, lira: "50.0", neighbor: 49.1, ppl_tpr: "0.0", refer_tpr: 0.1, lira_tpr: "0.0", neighbor_tpr: 0.2 },

    { models: "Llama 2 Chat LoRA", pet: "none", memPpl: 7.69, nonMemPpl: 8.33, ppl: 49.2, refer: 49.6, lira: 49.1, neighbor: 50.6, ppl_tpr: 0.1, refer_tpr: 0.2, lira_tpr: 0.1, neighbor_tpr: 0.2 },
    { models: "Llama 2 Chat LoRA", pet: "scrubbing", memPpl: 9.75, nonMemPpl: 10.46, ppl: 49.6, refer: 49.3, lira: 49.1, neighbor: 50.7, ppl_tpr:"0.0", refer_tpr: 0.3, lira_tpr: 0.1, neighbor_tpr: 0.4 },
    { models: "Llama 2 Chat LoRA", pet: "DPSGD", memPpl: "10.40", nonMemPpl: "11.20", ppl: 49.4, refer: 49.7, lira: 49.7, neighbor: 49.3, ppl_tpr:"0.0", refer_tpr: "0.0", lira_tpr: 0.1, neighbor_tpr: 0.3 },
  ];
  const elements = rows.map((row, index) => {
    let style = undefined;

    if (index == 3 || index == 6 || index == 9) {
      style = { borderBottom: "2pt solid #CED4DA;" };
    }

    return (
      <Table.Tr key={index} style={style}>
        <Table.Td>{row.models}</Table.Td>
        <Table.Td style={rightBorder}>{row.pet}</Table.Td>
        <Table.Td>{row.memPpl}</Table.Td>
        <Table.Td style={rightBorder}>{row.nonMemPpl}</Table.Td>
        <Table.Td>{row.ppl}%</Table.Td>
        <Table.Td>{row.refer}%</Table.Td>
        <Table.Td>{row.lira}%</Table.Td>
        <Table.Td style={rightBorder}>{row.neighbor}%</Table.Td>
        <Table.Td>{row.ppl_tpr}%</Table.Td>
        <Table.Td>{row.refer_tpr}%</Table.Td>
        <Table.Td>{row.lira_tpr}%</Table.Td>
        <Table.Td>{row.neighbor_tpr}%</Table.Td>
      </Table.Tr>
    );
  });
  

  return (
    <>
    <Text fw={700} hiddenFrom="sm" c="red">Please view this table on a larger device</Text>
    <Table highlightOnHover withTableBorder captionSide="bottom"  style={{fontSize: "12px"}} visibleFrom="sm">
      <Table.Caption>Table 5: Membership Inference Attacks on Enron. <br /> The perplexity of member (Mem) and non-member (Non-Mem) samples are reported as benign performance. <br /> Two metrics, AUC and TPR@0.1%FPR are reported for MIA. <br />Refer and Neighbor attacks present non-trivial improvement compared to PPL in terms of TPR.</Table.Caption>
      <Table.Thead>
        <Table.Tr style={topBorder}>
          <Table.Th colSpan={2} style={rightBorder}></Table.Th>
          <Table.Th colSpan={2} style={{...rightBorder, textAlign: "center"}}>Perplexity</Table.Th>
          <Table.Th colSpan={4} style={{...rightBorder, textAlign: "center"}}>MIA AUC</Table.Th>
          <Table.Th colSpan={4} style={{textAlign: "center"}}>MIA TPR@0.1%FPR</Table.Th>
        </Table.Tr>
        <Table.Tr style={bottomBorder}>
          <Table.Th>Models</Table.Th>
          <Table.Th style={rightBorder}>PET</Table.Th>
          <Table.Th>Mem PPL</Table.Th>
          <Table.Th style={rightBorder}>Non-Mem PPL</Table.Th>
          <Table.Th>PPL</Table.Th>
          <Table.Th>Refer</Table.Th>
          <Table.Th>LiRA</Table.Th>
          <Table.Th style={rightBorder}>Neighbor</Table.Th>
          <Table.Th>PPL</Table.Th>
          <Table.Th>Refer</Table.Th>
          <Table.Th>LiRA</Table.Th>
          <Table.Th>Neighbor</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{elements}</Table.Tbody>
    </Table></>
  );
};
export default TableMiaEnron;
