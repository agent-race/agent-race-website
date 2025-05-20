import React from "react";
import { Table } from "@mantine/core";
// \begin{table*}[]
//     \centering
//     \caption{PII types defined for scrubbing defense. Definitions are from \cite{lukas2023analyzing}.}
//     \label{tab:pii_types}
//     \begin{tabular}{c|l}
//     \toprule
//         Abbreviation & Definition \\ \midrule
//         CARDINAL    & A numerical quantity or value, e.g., 1,2. \\
//         DATE        & A date. \\
//         FAC         & A specific building or facility. \\
//         GPE         & A geopolitical entity. \\
//         LANGUAGE    & A natural language, such as English or Spanish. \\
//         LAW         & A legal document, such as a law or treaty. \\
//         LOC         & A general location, such as a mountain range or body of water. \\
//         MONEY       & A monetary value, such as a dollar amount or currency symbol. \\
//         NORP        & A national or religious group, such as 'the French' or 'the Muslim community'. \\
//         ORDINAL     & A numerical ranking or position, such as 'first', 'second', or 'third'. \\
//         ORG         & An organization, such as a company or institution. \\
//         PERCENT     & A percentage value, such as '50\%' or '75\%'. \\
//         PERSON      & A specific individual or group of people, such as a celebrity or family. \\
//         PRODUCT     & A specific product or brand, such as a car or electronics. \\
//         QUANTITY    & A quantity, such as '12 ounces' or '3 meters'. \\
//         TIME        & A specific time of day or duration, such as '3:00 PM' or 'three hours'. \\
//         WORK\_OF\_ART & A creative work, such as a book, painting, or movie. \\
//         EVENT       & A specific event or occurrence, such as a concert or sports game \\
//     \bottomrule
//     \end{tabular}
// \end{table*}

const TablePiiDefinitions = () => {
  const rows = [
    { abbr: "CARDINAL", def: "A numerical quantity or value, e.g., 1,2." },
    { abbr: "DATE", def: "A date." },
    { abbr: "FAC", def: "A specific building or facility." },
    { abbr: "GPE", def: "A geopolitical entity." },
    { abbr: "LANGUAGE", def: "A natural language, such as English or Spanish." },
    { abbr: "LAW", def: "A legal document, such as a law or treaty." },
    { abbr: "LOC", def: "A general location, such as a mountain range or body of water." },
    { abbr: "MONEY", def: "A monetary value, such as a dollar amount or currency symbol." },
    { abbr: "NORP", def: "A national or religious group, such as 'the French' or 'the Muslim community'." },
    { abbr: "ORDINAL", def: "A numerical ranking or position, such as 'first', 'second', or 'third'." },
    { abbr: "ORG", def: "An organization, such as a company or institution." },
    { abbr: "PERCENT", def: "A percentage value, such as '50%' or '75%'." },
    { abbr: "PERSON", def: "A specific individual or group of people, such as a celebrity or family." },
    { abbr: "PRODUCT", def: "A specific product or brand, such as a car or electronics." },
    { abbr: "QUANTITY", def: "A quantity, such as '12 ounces' or '3 meters'." },
    { abbr: "TIME", def: "A specific time of day or duration, such as '3:00 PM' or 'three hours'." },
    { abbr: "WORK_OF_ART", def: "A creative work, such as a book, painting, or movie." },
    { abbr: "EVENT", def: "A specific event or occurrence, such as a concert or sports game" },
  ];
  const elements = rows.map((row, index) => {
    return (
      <Table.Tr key={index}>
        <Table.Td>{row.abbr}</Table.Td>
        <Table.Td>{row.def}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table highlightOnHover withTableBorder captionSide="bottom" style={{ fontSize: "12px" }}>
      <Table.Caption>Table 13. PII types defined for scrubbing defense.</Table.Caption>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Abbreviation</Table.Th>
          <Table.Th>Definition</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{elements}</Table.Tbody>
    </Table>
  );
};

export default TablePiiDefinitions;
