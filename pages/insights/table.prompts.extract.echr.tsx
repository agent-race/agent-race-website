import React from "react";
import { Table } from "@mantine/core";

`
\begin{table}[]
\centering
\caption{data extraction under different prompts on ECHR. temperature 0.7.}
\resizebox{\columnwidth}{!}{%
\begin{tabular}{@{}llllll@{}}
\toprule
\multicolumn{1}{c}{PII} & models & prompt & accuracy \\ \midrule
\multicolumn{1}{c}{\multirow{4}{*}{name}} & {\multirow{4}{*}{llama-2-7b-chat}} & instruct + [query] & 10.6 \\
\multicolumn{1}{c}{}                      &  & jailbreak prompt 1 + [query] & 13.6 \\ 
\multicolumn{1}{c}{}                      & & jailbreak prompt 2 + [query] &   \\ 
\multicolumn{1}{c}{}                      &  & [query] & 13.4 \\ \midrule

\multicolumn{1}{c}{\multirow{4}{*}{location}} & {\multirow{4}{*}{llama-2-7b-chat}} & instruct + [query] & 11.7 \\
\multicolumn{1}{c}{}                      &  & jailbreak prompt 1 + [query] & 16.5 \\ 
\multicolumn{1}{c}{}                      & & jailbreak prompt 2 + [query] &   \\ 
\multicolumn{1}{c}{}                      &  & [query] & 18.8\\ \midrule

\multicolumn{1}{c}{\multirow{4}{*}{date}} & {\multirow{4}{*}{llama-2-7b-chat}} & instruct + [query] & 4.40 \\
\multicolumn{1}{c}{}                      &  & jailbreak prompt 1 + [query] & 4.98 \\ 
\multicolumn{1}{c}{}                      & & jailbreak prompt 2 + [query] &   \\ 
\multicolumn{1}{c}{}                      &  & [query] & 7.64 \\


\bottomrule
\end{tabular}%`;

const TablePromptsExtractionEchr = () => {
  const rows = [
    { PII: "name", model: "llama-2-7b-chat", prompt: "instruct + [query]", accuracy: "10.6" },
    { PII: "name", model: "llama-2-7b-chat", prompt: "jailbreak prompt 1 + [query]", accuracy: "13.6" },
    { PII: "name", model: "llama-2-7b-chat", prompt: "jailbreak prompt 2 + [query]", accuracy: "" },
    { PII: "name", model: "llama-2-7b-chat", prompt: "[query]", accuracy: "13.4" },

    { PII: "location", model: "llama-2-7b-chat", prompt: "instruct + [query]", accuracy: "11.7" },
    { PII: "location", model: "llama-2-7b-chat", prompt: "jailbreak prompt 1 + [query]", accuracy: "16.5" },
    { PII: "location", model: "llama-2-7b-chat", prompt: "jailbreak prompt 2 + [query]", accuracy: "" },
    { PII: "location", model: "llama-2-7b-chat", prompt: "[query]", accuracy: "18.8" },

    { PII: "date", model: "llama-2-7b-chat", prompt: "instruct + [query]", accuracy: "4.40" },
    { PII: "date", model: "llama-2-7b-chat", prompt: "jailbreak prompt 1 + [query]", accuracy: "4.98" },
    { PII: "date", model: "llama-2-7b-chat", prompt: "jailbreak prompt 2 + [query]", accuracy: "" },
    { PII: "date", model: "llama-2-7b-chat", prompt: "[query]", accuracy: "7.64" },
  ];
  const elements = rows.map((row, index) => {
    let style = undefined;
    if (index == 3 || index == 7) {
      style = { borderBottom: "2pt solid #CED4DA;" };
    }

    let td = undefined;
    if (index == 0) {
      td = <Table.Td rowSpan={4}>name</Table.Td>;
    } else if (index == 4) {
      td = <Table.Td rowSpan={4}>location</Table.Td>;
    } else if (index == 8) {
      td = <Table.Td rowSpan={4}>date</Table.Td>;
    }

    return (
      <Table.Tr key={index} style={style}>
        {td}
        <Table.Td>{row.model}</Table.Td>
        <Table.Td>{row.prompt}</Table.Td>
        <Table.Td>{row.accuracy}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table striped highlightOnHover withTableBorder captionSide="bottom">
      <Table.Caption>Table 6. Data extraction under different prompts on Echr. temperature 0.7.</Table.Caption>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>PII</Table.Th>
          <Table.Th>Models</Table.Th>
          <Table.Th>Prompt</Table.Th>
          <Table.Th>Accuracy</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{elements}</Table.Tbody>
    </Table>
  );
};
export default TablePromptsExtractionEchr;
