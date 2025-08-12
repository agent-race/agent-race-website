import React from "react";
import { Table } from "@mantine/core";

// \begin{table}[ht]
// \centering
// \small
// \caption{Comparison of PII types in MIA when Llama 2 finetuned on ECHR is attacked.
// PII types are sorted based on the TPR@0.1\%FPR. MIA is evaluated by Refer attacks. LANGUAGE achieves the best TPR at 5.56\% which is significantly higher than the average value (0.17\%).
// \jytd{Select some PIIs only.}
// % NORP stands for Nationalities, Religious or Political Groups. GPE stands for Geopolitical Entity.
// % We filter out
// % \comm{Mem Ratio will be removed.}
// }
// \label{fig:pii_type_mia_echr}
// \begin{tabular}{lll}
// \toprule
// PII Type & AUC & TPR@0.1\%FPR \\
// \midrule
// WORK\_OF\_ART & 77.37\% & 0.00\% \\
// FAC         & 71.38\% & 0.00\% \\
// EVENT       & 69.32\% & 0.00\% \\
// LOC         & 63.65\% & 0.00\% \\
// CARDINAL    & 62.79\% & 0.16\% \\
// DATE        & 60.65\% & 0.18\% \\
// NORP        & 71.50\% & 0.18\% \\
// TIME        & 68.83\% & 0.19\% \\
// ORG         & 62.34\% & 0.21\% \\
// MONEY       & 65.68\% & 0.23\% \\
// PERSON      & 65.76\% & 0.25\% \\
// LAW         & 70.09\% & 0.26\% \\
// GPE         & 63.28\% & 0.34\% \\
// ORDINAL     & 63.01\% & 0.75\% \\
// QUANTITY    & 69.07\% & 0.86\% \\
// PERCENT     & \textbf{77.83}\% & 1.25\% \\
// PRODUCT     & 74.19\% & 5.50\% \\
// LANGUAGE    & 60.88\% & \textbf{5.56\%} \\
// \midrule
// LOC         & 63.65\% & 0.00\% \\
// DATE        & 60.65\% & 0.18\% \\
// PERSON      & \textbf{65.76\%} & \textbf{0.25\%} \\
// \midrule
// ALL         & 60.73\% & 0.17\% \\
// \bottomrule
// \end{tabular}
// \end{table}

const TablePiiTypesEchr = () => {
  const rightBorder = { borderRight: "2pt solid #CED4DA;" };
  const rows = [
    { piiType: "WORK_OF_ART", auc: "77.37%", tpr: "0.00%" },
    { piiType: "FAC", auc: "71.38%", tpr: "0.00%" },
    { piiType: "EVENT", auc: "69.32%", tpr: "0.00%" },
    { piiType: "LOC", auc: "63.65%", tpr: "0.00%" },
    { piiType: "CARDINAL", auc: "62.79%", tpr: "0.16%" },
    { piiType: "DATE", auc: "60.65%", tpr: "0.18%" },
    { piiType: "NORP", auc: "71.50%", tpr: "0.18%" },
    { piiType: "TIME", auc: "68.83%", tpr: "0.19%" },
    { piiType: "ORG", auc: "62.34%", tpr: "0.21%" },
    { piiType: "MONEY", auc: "65.68%", tpr: "0.23%" },
    { piiType: "PERSON", auc: "65.76%", tpr: "0.25%" },
    { piiType: "LAW", auc: "70.09%", tpr: "0.26%" },
    { piiType: "GPE", auc: "63.28%", tpr: "0.34%" },
    { piiType: "ORDINAL", auc: "63.01%", tpr: "0.75%" },
    { piiType: "QUANTITY", auc: "69.07%", tpr: "0.86%" },
    { piiType: "PERCENT", auc: <b>77.83%</b>, tpr: "1.25%" },
    { piiType: "PRODUCT", auc: "74.19%", tpr: "5.50%" },
    { piiType: "LANGUAGE", auc: "60.88%", tpr: <b>5.56%</b> },
    { piiType: "LOC", auc: "63.65%", tpr: "0.00%" },
    { piiType: "DATE", auc: "60.65%", tpr: "0.18%" },
    { piiType: "PERSON", auc: <b>65.76%</b>, tpr: <b>0.25%</b> },
    { piiType: "ALL", auc: "60.73%", tpr: "0.17%" },
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
    <Table highlightOnHover withTableBorder captionSide="bottom" style={{ fontSize: "12px" }}>
      <Table.Caption>Table 11. Comparison of PII types in MIA when Llama 2 finetuned on ECHR is attacked.</Table.Caption>
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
export default TablePiiTypesEchr;
