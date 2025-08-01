import React from "react";
import { Table, Text } from "@mantine/core";

// \begin{table}[]
// \centering
// \caption{The accuracy of each framework on each dataset}
// \label{accuracy}
// \begin{tabular}{|c|c|c|c|c|c|c|c|}
// \hline
// & LangChain & AutoGen & AgentScope & CrewAI & LlamaIndex & Phidata & PydanticAI\\
// \hline
// GAIA      &0.1515  &0.1030 &0.2000  &0.1697  &0.0788  &0.2182 &0.1394\\
// HumanEval &0.573   &0.884  &0.884   &0.872   &0.872   &0.902  &0.921\\
// MMLU      &0.820   &0.817  &0.827   &0.813   &0.745   &0.792  &0.788\\
// \hline
// \end{tabular}
// \end{table}
const MemAcc = () => {
  const topBorder = { borderTop: "2pt solid #CED4DA;" };
  const rightBorder = { borderRight: "2pt solid #CED4DA;" };
  const rows = [
    { query: "without memory accumulation",  one: "958.2", two: "814.5", three: "865.0", four: "1201.6", five: "977.8", six: "1007.0", seven: "738.0", eight: "3292.4", nine: "941.4",  },
    { query: "with memory accumulation",  one: "1432.8", two: "3002.5", three: "3700.5", four: "4380.0", five: "5392.2", six: "6804.5", seven: "7322.0", eight: "7958.33", nine: "8717.5", },

  ];

  const elements = rows.map((row, index) => {
    let style = undefined;
    if (index == 0 || index == 3) {
      return (
        <Table.Tr key={index} style={style}>
        <Table.Td>{row.query}</Table.Td>
        <Table.Td>{row.one}</Table.Td>
        <Table.Td>{row.two}</Table.Td>
        <Table.Td>{row.three}</Table.Td>
        <Table.Td>{row.four}</Table.Td>
        <Table.Td>{row.five}</Table.Td>
        <Table.Td>{row.six}</Table.Td>
        <Table.Td>{row.seven}</Table.Td>
        <Table.Td>{row.eight}</Table.Td>
        <Table.Td>{row.nine}</Table.Td>
        </Table.Tr>
      );
    }
    return (
      <Table.Tr key={index} style={style}>
        <Table.Td>{row.query}</Table.Td>
        <Table.Td>{row.one}</Table.Td>
        <Table.Td>{row.two}</Table.Td>
        <Table.Td>{row.three}</Table.Td>
        <Table.Td>{row.four}</Table.Td>
        <Table.Td>{row.five}</Table.Td>
        <Table.Td>{row.six}</Table.Td>
        <Table.Td>{row.seven}</Table.Td>
        <Table.Td>{row.eight}</Table.Td>
        <Table.Td>{row.nine}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <>
      <Text fw={700} hiddenFrom="sm" c="pink">
        Get a better experience on larger screens
      </Text>
      <Table highlightOnHover withTableBorder captionSide="bottom" style={{ fontSize: "12px" }} withRowBorders={true}>
        {/* <Table.Caption>Table: The accuracy of each framework on each dataset</Table.Caption> */}
        <Table.Thead>
          <Table.Tr style={topBorder}>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
               Query
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              1
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              2
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              3
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              4
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              5
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              6
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              7
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              8
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              9
            </Table.Th>
          </Table.Tr>
          {/* <Table.Tr style={{ borderBottom: "2pt solid #CED4DA;" }}>
            <Table.Th>Overall</Table.Th>
            <Table.Th>Front</Table.Th>
            <Table.Th>Middle</Table.Th>
            <Table.Th>End</Table.Th>

          </Table.Tr> */}
        </Table.Thead>
        <Table.Tbody>{elements}</Table.Tbody>
      </Table>
    </>
  );

  // return <div style={{ position: "relative", height: "400px", width: "100%" }}>I'm a table</div>;
};
export default MemAcc;
