import React from "react";
import { Table, Text } from "@mantine/core";

// \begin{table}[]
// \centering
// \caption{ data extraction under different prompts on Enron}
// \resizebox{\linewidth}{!}{%
// \begin{tabular}{@{}llllll@{}}
// \toprule
// models & prompt & correct &  local & domain & average \\  \midrule
// llama-2-7b-chat t0.5 &  instruct + [query] &  3.87 & 12.51 & 13.38 & 9.92 \\ 
// llama-2-7b-chat t0.5 & jailbreak prompt 1 + [query] &  3.90 & 12.48 & 13.47 & 9.95 \\ 
// llama-2-7b-chat t0.5 & jailbreak prompt 2 + [query] & 3.57 & 11.25 & 12.63 & 9.15 \\ 
// llama-2-7b-chat t0.5 & [query] &  {3.79} & 12.54 & 13.92 & 10.08 \\ \midrule
// % llama-2-7b-chat t0.7 &instruct + [query]  &  3.54 & 12.24 & 12.75 & 9.51 \\ 
// % llama-2-7b-chat t0.7 & jailbreak prompt 1 + [query] & \\ 
// % llama-2-7b-chat t0.7 & jailbreak prompt 2 + [query] & \\ 
// % llama-2-7b-chat t0.7& [query] &  {3.73} & 12.21 & 13.95 & 9.96 \\\midrule
// llama-2-70b-chat t0.5 & instruct + [query] &  4.65 & 14.13 & 14.79 & 11.19 \\ 
// llama-2-70b-chat t0.5 & jailbreak prompt 1 + [query] &   4.50 & 13.41 & 14.16 & 10.69 \\ 
// llama-2-70b-chat t0.5 & jailbreak prompt 2 + [query] & 4.59 & 12.99 & 14.37 & 10.65 \\ 
// llama-2-70b-chat t0.5 &[query] & {5.32} & 14.28 & 16.21 & 11.94 \\ 
// % llama-2-70b-chat t0.7 &  instruct + [query]  &  4.59 & 13.68 & 14.25 & 10.84 \\ 
// % llama-2-70b-chat t0.7 & jailbreak prompt 1 + [query] & \\ 
// % llama-2-70b-chat t0.7 & jailbreak prompt 2 + [query] & \\
// % llama-2-70b-chat t0.7 &[query] &  {5.17} & 14.16 & 16.87 & 12.07 \\
// \bottomrule
// \vspace{0.5mm}
// \end{tabular}%
// }
// \smallskip % Adds a small vertical space
// \small % Makes the following text smaller
// % \begin{bottom}
//     \textit{Note:} ``instruct+ [query]'' prepends [query] with "Please conduct text continuation for the below context:".\\
// %     \textit{takeaways:}
// %     \begin{itemize}
// %     \item vanilla query leads to a higher extraction accuracy for llama2-70b. 
// %     \item the current jailbreak prompts do not significantly improve the acc for llama2. 
// % \end{itemize}
// % \end{bottom}
// \end{table}

const TablePromptsExtractionEnron = () => {
  const rows = [
    { model: 'llama-2-7b-chat t0.5', prompt: 'instruct + [query]', correct: '3.87', local: '12.51', domain: '13.38', average: '9.92' },
    { model: 'llama-2-7b-chat t0.5', prompt: 'jailbreak prompt 1 + [query]', correct: '3.90', local: '12.48', domain: '13.47', average: '9.95' },
    { model: 'llama-2-7b-chat t0.5', prompt: 'jailbreak prompt 2 + [query]', correct: '3.57', local: '11.25', domain: '12.63', average: '9.15' },
    { model: 'llama-2-7b-chat t0.5', prompt: '[query]', correct: '3.79', local: '12.54', domain: '13.92', average: '10.08' },

    { model: 'llama-2-70b-chat t0.5', prompt: 'instruct + [query]', correct: '4.65', local: '14.13', domain: '14.79', average: '11.19' },
    { model: 'llama-2-70b-chat t0.5', prompt: 'jailbreak prompt 1 + [query]', correct: '4.50', local: '13.41', domain: '14.16', average: '10.69' },
    { model: 'llama-2-70b-chat t0.5', prompt: 'jailbreak prompt 2 + [query]', correct: '4.59', local: '12.99', domain: '14.37', average: '10.65' },
    { model: 'llama-2-70b-chat t0.5', prompt: '[query]', correct: '5.32', local: '14.28', domain: '16.21', average: '11.94' },
  ];
  const elements = rows.map((row, index) => {
    let style = undefined;
    if (index == 3) {
      style = { borderBottom: "2pt solid #CED4DA;" };
    }
    return (
      <Table.Tr key={index} style={style}>
        <Table.Td>{row.model}</Table.Td>
        <Table.Td>{row.prompt}</Table.Td>
        <Table.Td>{row.correct}</Table.Td>
        <Table.Td>{row.local}</Table.Td>
        <Table.Td>{row.domain}</Table.Td>
        <Table.Td>{row.average}</Table.Td>
      </Table.Tr>
    );
  });

  return (
  <>
  <Text fw={700} hiddenFrom="sm" c="pink">Get a better experience on larger screens</Text>
    <Table highlightOnHover withTableBorder captionSide="bottom">
      <Table.Caption>Table 3. Data extraction under different prompts on Enron</Table.Caption>
      <Table.Thead>
        <Table.Tr>
        <Table.Th>Models</Table.Th>
          <Table.Th>Prompt</Table.Th>
          <Table.Th>Correct</Table.Th>
          <Table.Th>Local</Table.Th>
          <Table.Th>Domain</Table.Th>
          <Table.Th>Average</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{elements}</Table.Tbody>
    </Table>
    </>
  );

  // return <div style={{ position: "relative", height: "400px", width: "100%" }}>I'm a table</div>;
};
export default TablePromptsExtractionEnron;
