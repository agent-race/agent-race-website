import React from "react";
import { Table, Text } from "@mantine/core";

// % MIA Results
// \begin{table*}[ht]
// \centering
// \caption{ Membership Inference Attacks on ECHR.
// The perplexity of member (Mem) and non-member (Non-Mem) samples are reported as benign performance.
// Two metrics, AUC and TPR@0.1\%FPR are reported for MIA.
// Although some attacks are effective in terms of AUC, they are less effective in TPR.
// % \jytd{We follow Carlini's principle and get conclusions aligned with them when comparing TPR vs AUC. Also summarize some high-level conclusions.}
// % Best
// }
// \label{tbl:mia_echr}
// \resizebox{\linewidth}{!}{%
// \begin{tabular}{@{}ll|ll|*{4}{l}|*{4}{l}@{}}
// \toprule
//  & & \multicolumn{2}{c}{Perplexity} & \multicolumn{4}{c}{MIA AUC} & \multicolumn{4}{c}{MIA TPR@0.1\%FPR} \\
// Models            & PET       & Mem  & Non-Mem    & PPL     & Refer     & LiRA      & Neighbor          & PPL    & Refer & LiRA  & Neighbor \\ \midrule
// GPT-2             & none      & 9.06       & 10.32            & 55.7\%  & 54.9\%  & 53.8\%    & 50.0\%  &  0.9\% & 1.1\% & 0.2\% & 0.1\% \\
// GPT-2             & scrubbing & 22.87      & 25.09            & 54.1\%  & 54.2\%  & 53.6\%    & 49.9\%  &  0.7\% & 0.6\% & 0.1\% & 0.5\% \\
// GPT-2             & DPSGD     & 21.23      & 20.80            & 50.2\%  & 49.0\%  & 48.8\%    & 49.1\%  &  0.1\% & 0.0\% & 0.1\% & 0.2\% \\ \midrule
// Llama 2 10 epoch  & none      & 2.83       & 37.84            & 95.6\% & 95.8\%   & 95.0\%   & 67.4\% & 12.2\% & 9.9\% & 1.3\% & 1.0\%  \\
// Llama 2           & none      & 4.25       & 4.89             & 59.4\% & 61.4\%   & 60.0\%   & 49.8\% &  0.8\% & 0.7\% & 0.2\% & 0.3\%  \\
// Llama 2 10 epoch  & scrubbing & 6.04       & 8.28             & 69.6\% & 72.3\%   & 71.3\%   & 51.9\% &  0.7\% & 0.7\% & 0.1\% & 0.2\% \\
// Llama 2           & scrubbing & 6.01       & 6.93             & 60.2\% & 62.6\%   & 61.7\%   & 49.8\% &  0.7\% & 0.7\% & 0.2\% & 0.3\% \\ \midrule
// Llama 2 LoRA      & none      & 5.50       & 5.50             & 51.3\% & 49.6\%   & 49.1\%   & 48.9\% &  0.6\% & 0.5\% & 0.2\% & 0.2\% \\
// Llama 2 LoRA      & scrubbing & 6.81       & 6.85             & 51.0\% & 49.7\%   & 49.5\%   & 48.9\% &  0.9\% & 0.5\% & 0.1\% & 0.5\% \\
// Llama 2 LoRA      & DPSGD     & 5.88       & 5.86             & 51.0\% & 49.1\%   & 48.7\%   & 49.0\% &  0.5\% & 0.7\% & 0.1\% & 0.3\% \\ \midrule
// Llama 2 Chat LoRA & none      & 5.39       & 5.42             & 51.7\% & 49.9\%   & 48.8\%   & 48.8\% &  0.5\% & 0.5\% & 0.5\% & 0.4\% \\
// Llama 2 Chat LoRA & scrubbing & 7.27       & 7.33             & 51.1\% & 49.0\%   & 48.4\%   & 48.8\% &  0.7\% & 0.8\% & 0.2\% & 0.4\% \\
// Llama 2 Chat LoRA & DPSGD     & 6.61       & 6.59             & 50.9\% & 48.5\%   & 47.6\%   & 48.9\% &  0.3\% & 0.2\% & 0.1\% & 0.2\% \\
// % Models            & PET       & M PPL  & Non-M PPL    & PPL     & Refer     & LiRA      & Neighbor      \\  \midrule
// % GPT-2             & none      & 9.057       & 10.319            & 55.7\%  & 54.9\%    & 53.8\%    & 50.0\%       \\
// % GPT-2             & scrubbing & 22.874      & 25.086            & 54.1\%  & 54.2\%    & 53.6\%    & 49.9\%       \\
// % GPT-2             & DPSGD     & 21.233      & 20.799            & 50.2\%  & 49.0\%    & 48.8\%    & 49.1\%      \\       \midrule
// % % Llama 2 10 epoch  & none      & 2.831       & 37.835            & 95.64\% & 95.81\%   & 95.00\%   & 67.42\%     \\
// % Llama 2   & none      & 4.247       & 4.885             & 59.41\% & 61.36\%   & 60.00\%   & 49.82\%     \\
// % % Llama 2 10 epoch  & scrubbing & 6.037       & 8.279             & 69.59\% & 72.28\%   & 71.34\%   & 51.91\%     \\
// % Llama 2   & scrubbing & 6.005       & 6.927             & 60.17\% & 62.63\%   & 61.70\%   & 49.75\%     \\       \midrule
// % Llama 2 lora      & none      & 5.504       & 5.503             & 51.29\% & 49.55\%   & 49.09\%   & 48.87\%     \\
// % Llama 2 lora      & scrubbing & 6.805       & 6.852             & 51.03\% & 49.69\%   & 49.49\%   & 48.89\%     \\
// % Llama 2 lora      & DPSGD     & 5.879       & 5.860             & 51.02\% & 49.13\%   & 48.71\%   & 48.95\%     \\   \midrule
// % Llama 2 Chat lora & none      & 5.388       & 5.424             & 51.66\% & 49.90\%   & 48.82\%   & 48.84\%     \\
// % Llama 2 Chat lora & scrubbing & 7.267       & 7.330             & 51.13\% & 49.01\%   & 48.41\%   & 48.80\%     \\
// % Llama 2 Chat lora & DPSGD     & 6.613       & 6.591             & 50.88\% & 48.46\%   & 47.58\%   & 48.92\%     \\
// \bottomrule
// \vspace{0.5mm}
// \end{tabular}%
// }
// \end{table*}

const TableMiaEchr = () => {
  const topBorder = { borderTop: "2pt solid #CED4DA;" };
  const rightBorder = { borderRight: "2pt solid #CED4DA;" };
  const bottomBorder = { borderBottom: "2pt solid #CED4DA;" };
  const rows = [
    { models: "GPT-2", pet: "none", memPpl: 9.06, nonMemPpl: 10.32, ppl: 55.7, refer: 54.9, lira: 53.8, neighbor: "50.0", ppl_tpr: 0.9, refer_tpr: 1.1, lira_tpr: 0.2, neighbor_tpr: 0.1 },
    { models: "GPT-2", pet: "scrubbing", memPpl: 22.87, nonMemPpl: 25.09, ppl: 54.1, refer: 54.2, lira: 53.6, neighbor: 49.9, ppl_tpr: 0.7, refer_tpr: 0.6, lira_tpr: 0.1, neighbor_tpr: 0.5 },
    { models: "GPT-2", pet: "DPSGD", memPpl: 21.23, nonMemPpl: 20.8, ppl: 50.2, refer: "49.0", lira: 48.8, neighbor: 49.1, ppl_tpr: 0.1, refer_tpr: " 0.0", lira_tpr: 0.1, neighbor_tpr: 0.2 },

    { models: "Llama 2 10 epoch", pet: "none", memPpl: 2.83, nonMemPpl: 37.84, ppl: 95.6, refer: 95.8, lira: "95.0", neighbor: 67.4, ppl_tpr: 12.2, refer_tpr: 9.9, lira_tpr: 1.3, neighbor_tpr: "1.0" },
    { models: "Llama 2", pet: "none", memPpl: 4.25, nonMemPpl: 4.89, ppl: 59.4, refer: 61.4, lira: "60.0", neighbor: 49.8, ppl_tpr: 0.8, refer_tpr: 0.7, lira_tpr: 0.2, neighbor_tpr: 0.3 },
    { models: "Llama 2 10 epoch", pet: "scrubbing", memPpl: 6.04, nonMemPpl: 8.28, ppl: 69.6, refer: 72.3, lira: 71.3, neighbor: 51.9, ppl_tpr: 0.7, refer_tpr: 0.7, lira_tpr: 0.1, neighbor_tpr: 0.2 },
    { models: "Llama 2", pet: "scrubbing", memPpl: 6.01, nonMemPpl: 6.93, ppl: 60.2, refer: 62.6, lira: 61.7, neighbor: 49.8, ppl_tpr: 0.7, refer_tpr: 0.7, lira_tpr: 0.2, neighbor_tpr: 0.3 },

    { models: "Llama 2 LoRA", pet: "none", memPpl: "5.50", nonMemPpl: "5.50", ppl: 51.3, refer: 49.6, lira: 49.1, neighbor: 48.9, ppl_tpr: 0.6, refer_tpr: 0.5, lira_tpr: 0.2, neighbor_tpr: 0.2 },
    { models: "Llama 2 LoRA", pet: "scrubbing", memPpl: 6.81, nonMemPpl: 6.85, ppl: "51.0", refer: 49.7, lira: 49.5, neighbor: 48.9, ppl_tpr: 0.9, refer_tpr: 0.5, lira_tpr: 0.1, neighbor_tpr: 0.5 },
    { models: "Llama 2 LoRA", pet: "DPSGD", memPpl: 5.88, nonMemPpl: 5.86, ppl: "51.0", refer: 49.1, lira: 48.7, neighbor: "49.0", ppl_tpr: 0.5, refer_tpr: 0.7, lira_tpr: 0.1, neighbor_tpr: 0.3 },

    { models: "Llama 2 Chat LoRA", pet: "none", memPpl: 5.39, nonMemPpl: 5.42, ppl: 51.7, refer: 49.9, lira: 48.8, neighbor: 48.8, ppl_tpr: 0.5, refer_tpr: 0.5, lira_tpr: 0.5, neighbor_tpr: 0.4 },
    { models: "Llama 2 Chat LoRA", pet: "scrubbing", memPpl: 7.27, nonMemPpl: 7.33, ppl: 51.1, refer: "49.0", lira: 48.4, neighbor: 48.8, ppl_tpr: 0.7, refer_tpr: 0.8, lira_tpr: 0.2, neighbor_tpr: 0.4 },
    { models: "Llama 2 Chat LoRA", pet: "DPSGD", memPpl: 6.61, nonMemPpl: 6.59, ppl: 50.9, refer: 48.5, lira: 47.6, neighbor: 48.9, ppl_tpr: 0.3, refer_tpr: 0.2, lira_tpr: 0.1, neighbor_tpr: 0.2 },
  ];
  const elements = rows.map((row, index) => {
    let style = undefined;

    if (index == 2 || index == 6 || index == 9 || index == 12) {
      style =bottomBorder;
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
    <Table highlightOnHover withTableBorder captionSide="bottom" style={{ fontSize: "12px" }} visibleFrom="sm">
      <Table.Caption>Table 4: Membership Inference Attacks on ECHR. <br /> The perplexity of member (Mem) and non-member (Non-Mem) samples are reported as benign performance. <br /> Two metrics, AUC and TPR@0.1%FPR are reported for MIA. <br /> Although some attacks are effective in terms of AUC, they are less effective in TPR.</Table.Caption>
      <Table.Thead>
        <Table.Tr style={topBorder}>
          <Table.Th colSpan={2} style={rightBorder}></Table.Th>
          <Table.Th colSpan={2} style={{ ...rightBorder, textAlign: "center" }}>
            Perplexity
          </Table.Th>
          <Table.Th colSpan={4} style={{ ...rightBorder, textAlign: "center" }}>
            MIA AUC
          </Table.Th>
          <Table.Th colSpan={4} style={{ textAlign: "center" }}>
            MIA TPR@0.1%FPR
          </Table.Th>
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

  // return <div style={{ position: "relative", height: "400px", width: "100%" }}>I'm a table</div>;
};
export default TableMiaEchr;
