import React from "react";
import { Table } from "@mantine/core";
// \begin{table}[ht]
// \centering
// \small
// \caption{Comparison of PII types in MIA when Llama 2 finetuned on Enron is attacked. 
// PII types are sorted based on the TPR@0.1\%FPR. MIA is evaluated by Refer attacks. FAC achieves the best TPR at 0.37\% which is significantly higher than the average value (0.09\%).
// % NORP stands for Nationalities, Religious or Political Groups. GPE stands for Geopolitical Entity.
// % We filter out 
// % \comm{Mem Ratio will be removed.}
// }
// \label{fig:pii_type_mia}
// \begin{tabular}{lll}
// \toprule
// PII Type & AUC & TPR@0.1\%FPR \\
// \midrule
// LANGUAGE    & 60.56\% & 0.00\% \\
// EVENT       & 59.47\% & 0.00\% \\
// PERSON      & 59.73\% & 0.05\% \\
// TIME        & 58.10\% & 0.07\% \\
// ORG         & 58.90\% & 0.07\% \\
// DATE        & 58.92\% & 0.07\% \\
// GPE         & 59.83\% & 0.08\% \\
// ORDINAL     & 61.26\% & 0.08\% \\
// CARDINAL    & 59.92\% & 0.10\% \\
// LOC         & \textbf{61.47\%} & 0.11\% \\
// WORK\_OF\_ART & 59.15\% & 0.11\% \\
// PRODUCT     & 58.61\% & 0.11\% \\
// MONEY       & 60.89\% & 0.14\% \\
// NORP        & 60.99\% & 0.14\% \\
// QUANTITY    & 60.38\% & 0.16\% \\
// PERCENT     & 60.58\% & 0.29\% \\
// LAW         & 60.33\% & 0.30\% \\
// FAC         & 58.22\% & \textbf{0.37\%} \\ \midrule
// LOC         & \textbf{61.47\%} & \textbf{0.11\%} \\
// DATE        & 58.92\% & 0.07\% \\
// PERSON      & 59.73\% & 0.05\% \\
// \midrule
// ALL         & 59.40\% & 0.09\% \\
// \bottomrule
// \end{tabular}
// \end{table}


const TablePiiTypesEnron = () => {
  const rightBorder = { borderRight: "2pt solid #CED4DA;" };
  const rows = [
   { piiType: "LANGUAGE", auc: "60.56%", tpr: "0.00%" },
    { piiType: "EVENT", auc: "59.47%", tpr: "0.00%" },
    { piiType: "PERSON", auc: "59.73%", tpr: "0.05%" },
    { piiType: "TIME", auc: "58.10%", tpr: "0.07%" },
    { piiType: "ORG", auc: "58.90%", tpr: "0.07%" },
    { piiType: "DATE", auc: "58.92%", tpr: "0.07%" },
    { piiType: "GPE", auc: "59.83%", tpr: "0.08%" },
    { piiType: "ORDINAL", auc: "61.26%", tpr: "0.08%" },
    { piiType: "CARDINAL", auc: "59.92%", tpr: "0.10%" },
    { piiType: "LOC", auc: <b>61.47%</b>, tpr: "0.11%" },
    { piiType: "WORK_OF_ART", auc: "59.15%", tpr: "0.11%" },
    { piiType: "PRODUCT", auc: "58.61%", tpr: "0.11%" },
    { piiType: "MONEY", auc: "60.89%", tpr: "0.14%" },
    { piiType: "NORP", auc: "60.99%", tpr: "0.14%" },
    { piiType: "QUANTITY", auc: "60.38%", tpr: "0.16%" },
    { piiType: "PERCENT", auc: "60.58%", tpr: "0.29%" },
    { piiType: "LAW", auc: "60.33%", tpr: "0.30%" },
    { piiType: "FAC", auc: "58.22%", tpr: <b>0.37%</b> },
    { piiType: "LOC", auc: <b>61.47%</b>, tpr: <b>0.11%</b> },
    { piiType: "DATE", auc: "58.92%", tpr: "0.07%" },
    { piiType: "PERSON", auc: "59.73%", tpr: "0.05%" },
    { piiType: "ALL", auc: "59.40%", tpr: "0.09%" },
  ];
  const elements = rows.map((row, index) => {
    let style = undefined;
   
    if (index == 17 || index == 20) {
      style = { borderBottom: "2pt solid #CED4DA;" };
    }

    return (
      <Table.Tr key={index} style={style}>
        <Table.Td>{row.piiType}</Table.Td>
        <Table.Td>{row.auc}</Table.Td>
        <Table.Td>{row.tpr}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table striped highlightOnHover withTableBorder captionSide="bottom" style={{ fontSize: "12px" }}>
      <Table.Caption>Table 12. Comparison of PII types in MIA when Llama 2 finetuned on Enron is attacked.</Table.Caption>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>PII Type</Table.Th>
          <Table.Th>AUC</Table.Th>
          <Table.Th>TPR@0.1%FPR</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{elements}</Table.Tbody>
    </Table>
  );
};

export default TablePiiTypesEnron;
