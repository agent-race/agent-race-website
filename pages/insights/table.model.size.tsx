import React from "react";
import { Table } from "@mantine/core";

// \begin{table}[]
// \centering
// \caption{The data extraction accuracy on Enron. ``correct'', ``local'', and "domain" measures the extraction accuracy of the whole email address, the local part, and the domain part, respectively.}
// \label{tab:model_size_de}
// % \caption{data extraction on Enron. temperature 0.7. prompt=``Please conduct text continuation for the below context: \n  [query]''}
// % \resizebox{\columnwidth}{!}{%
// \begin{tabular}{@{}llllll@{}}
// \toprule
// models & correct &  local & domain & average \\  \midrule
// % gpt-4-0314 & 3.19 & 8.4  & 8.88 & 6.82 \\
// % % gpt-3.5-0314 & 5.23 & 14.74 & 13.06 & 11.01 \\
// % gpt-3.5-turbo-0301 &  4.53 & 14.25 & 10.68 & 9.82 \\ 
// % gpt-3.5-turbo-0613 &  3.58 & 13.16 & 12.88 & 9.87 \\ 
// % gpt-3.5-turbo-1106 &  3.39 & 10.11 & 9.69 & 7.73 \\ 
// % \midrule
// llama-2-7b-chat &  3.54 & 12.24 & 12.75 & 9.51 \\ 
// llama-2-13b-chat &  3.72 & 12.42 & 13.77 & 9.97 \\ 
// llama-2-70b-chat &  \textbf{4.59} & \tb{13.68} & \tb{14.25} & \tb{10.84} \\ \midrule
// vicuna-7b-v1.5 &  3.54 & 11.49 & 14.82 & 9.95 \\
// vicuna-13b-v1.5 &  \textbf{4.02} & \tb{13.41} & \tb{15.03} & \tb{10.82} \\ 
//   \midrule
// falcon-7b-instruct &  2.28 & 9.06 & 11.07 & 7.47 \\   
// falcon-40b-instruct & \textbf{3.99} & \tb{12.00} & \tb{13.38} & \tb{9.79} \\ \midrule
// EleutherAI-pythia-14m &  0.00 & 0.24 & 8.22 & 2.82 \\ 
// EleutherAI-pythia-31m &  0.00 & 0.60 & 8.22 & 2.94 \\ 
// EleutherAI-pythia-70m &  0.00 & 0.96 & 8.37 & 3.11 \\ 
// EleutherAI-pythia-160m &  0.03 & 1.80 & 9.06 & 3.63 \\ 
// EleutherAI-pythia-410m &  0.57 & 4.20 & 11.04 & 5.27 \\ 
// EleutherAI-pythia-1b &  1.05 & 4.38 & 12.30 & 5.91 \\ 
// EleutherAI-pythia-1.4b &  1.32 & 4.92 & 13.20 & 6.48 \\ 
// EleutherAI-pythia-2.8b &  2.58 & 6.36 & 14.73 & 7.89 \\ 
// EleutherAI-pythia-6.9b &  4.68 & 8.25 & 17.25 & 10.06 \\ 
// EleutherAI-pythia-12b & \textbf{6.54} & \tb{10.38} & \tb{18.39} & \tb{11.77} \\ 
// \bottomrule
// % llama-2-7B-enron-checkpoint-451 &  4.38 & 8.61 & 16.89 & 9.96 \\ 
// % llama-2-7B-enron-checkpoint-902 &  8.19 & 12.75 & 20.04 & 13.66 \\ 
// % llama-2-7B-enron-checkpoint-1353 &  11.16 & 14.94 & 22.68 & 16.26 \\ 
// % llama-2-7B-enron-checkpoint-1804 &  12.51 & 15.96 & 23.55 & 17.34 \\ 
// % llama-2-7B-enron-checkpoint-2255 &  \textbf{19.08} & 22.28 & 30.67 & 24.01 \\ 
// % \bottomrule
// \end{tabular}%
// % }
// \end{table}
const TableModelSize = () => {
  const rows = [
    { model: "llama-2-7b-chat", correct: "3.54", local: "12.24", domain: "12.75", average: "9.51" },
    { model: "llama-2-13b-chat", correct: "3.72", local: "12.42", domain: "13.77", average: "9.97" },
    { model: "llama-2-70b-chat", correct: <b>4.59</b>, local: <b>13.68</b>, domain: <b>14.25</b>, average: <b>10.84</b> },
    { model: "vicuna-7b-v1.5", correct: "3.54", local: "11.49", domain: "14.82", average: "9.95" },
    { model: "vicuna-13b-v1.5", correct: <b>4.02</b>, local: "13.41", domain: "15.03", average: "10.82" },
    { model: "falcon-7b-instruct", correct: "2.28", local: "9.06", domain: "11.07", average: "7.47" },
    { model: "falcon-40b-instruct", correct: <b>3.99</b>, local: "12.00", domain: "13.38", average: "9.79" },
    { model: "EleutherAI-pythia-14m", correct: "0.00", local: "0.24", domain: "8.22", average: "2.82" },
    { model: "EleutherAI-pythia-31m", correct: "0.00", local: "0.60", domain: "8.22", average: "2.94" },
    { model: "EleutherAI-pythia-70m", correct: "0.00", local: "0.96", domain: "8.37", average: "3.11" },
    { model: "EleutherAI-pythia-160m", correct: "0.03", local: "1.80", domain: "9.06", average: "3.63" },
    { model: "EleutherAI-pythia-410m", correct: "0.57", local: "4.20", domain: "11.04", average: "5.27" },
    { model: "EleutherAI-pythia-1b", correct: "1.05", local: "4.38", domain: "12.30", average: "5.91" },
    { model: "EleutherAI-pythia-1.4b", correct: "1.32", local: "4.92", domain: "13.20", average: "6.48" },
    { model: "EleutherAI-pythia-2.8b", correct: "2.58", local: "6.36", domain: "14.73", average: "7.89" },
    { model: "EleutherAI-pythia-6.9b", correct: "4.68", local: "8.25", domain: "17.25", average: "10.06" },
    { model: "EleutherAI-pythia-12b", correct: <b>6.54</b>, local: <b>10.38</b>, domain: <b>18.39</b>, average: <b>11.77</b> },
  ];
  const headingLine = { borderTop: "2pt solid #CED4DA;" };
  const bottomLine = { borderBottom: "2pt solid #CED4DA;" };
  const elements = rows.map((row, index) => {
    let style = undefined;
    if (index == 2 || index == 4 || index == 6 || index == 16) {
      style = bottomLine;
    }
    return (
      <Table.Tr key={index} style={style}>
        <Table.Td>{row.model}</Table.Td>
        <Table.Td>{row.correct}</Table.Td>
        <Table.Td>{row.local}</Table.Td>
        <Table.Td>{row.domain}</Table.Td>
        <Table.Td>{row.average}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table highlightOnHover withTableBorder captionSide="bottom" withRowBorders={true}>
      <Table.Caption>Table 2: The data extraction accuracy on Enron. “correct”, “local”, and "domain" measures the extraction accuracy of the whole email address, the local part, and the domain part, respectively.</Table.Caption>
      <Table.Thead>
        <Table.Tr style={{...bottomLine, ...headingLine}}>
          <Table.Th>Model</Table.Th>
          <Table.Th>Correct</Table.Th>
          <Table.Th>Local</Table.Th>
          <Table.Th>Domain</Table.Th>
          <Table.Th>Average</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{elements}</Table.Tbody>
    </Table>
  );

  // return <div style={{ position: "relative", height: "400px", width: "100%" }}>I'm a table</div>;
};
export default TableModelSize;
