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
const TableAccuracy = () => {
  const topBorder = { borderTop: "2pt solid #CED4DA;" };
  const rightBorder = { borderRight: "2pt solid #CED4DA;" };
  const rows = [
    { datasets: "GAIA", langchain: "0.152±0.012", autogen: "0.107±0.003", agentscope: "0.212±0.012", crewai: "0.222±0.009", llamaindex: "0.198±0.015", phidata: "0.191±0.026", pydantic:"0.157±0.012" },
    { datasets: "HumanEval", langchain: "0.573", autogen: "0.884", agentscope: "0.884", crewai: "0.872", llamaindex: "0.872", phidata: "0.902", pydantic:"0.921" },
    { datasets: "MMLU", langchain: "0.820", autogen: "0.817", agentscope: "0.827", crewai: "0.813", llamaindex: "0.745", phidata: "0.792", pydantic:"0.788" },
    { datasets: "OK-VQA", langchain: "-", autogen: "0.305", agentscope: "0.436", crewai: "0.362", llamaindex: "0.307", phidata: "0.331", pydantic:"0.317" },
  ];

  const elements = rows.map((row, index) => {
    let style = undefined;
    if (index == 0 || index == 3) {
      return (
        <Table.Tr key={index} style={style}>
        <Table.Td>{row.datasets}</Table.Td>
        <Table.Td>{row.langchain}</Table.Td>
        <Table.Td>{row.autogen}</Table.Td>
        <Table.Td>{row.agentscope}</Table.Td>
        <Table.Td>{row.crewai}</Table.Td>
        <Table.Td>{row.llamaindex}</Table.Td>
        <Table.Td>{row.phidata}</Table.Td>
        <Table.Td>{row.pydantic}</Table.Td>
        </Table.Tr>
      );
    }
    return (
      <Table.Tr key={index} style={style}>
        <Table.Td>{row.datasets}</Table.Td>
        <Table.Td>{row.langchain}</Table.Td>
        <Table.Td>{row.autogen}</Table.Td>
        <Table.Td>{row.agentscope}</Table.Td>
        <Table.Td>{row.crewai}</Table.Td>
        <Table.Td>{row.llamaindex}</Table.Td>
        <Table.Td>{row.phidata}</Table.Td>
        <Table.Td>{row.pydantic}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <>
      <Text fw={700} hiddenFrom="sm" c="pink">
        Get a better experience on larger screens
      </Text>
      <Table highlightOnHover withTableBorder captionSide="bottom" style={{ fontSize: "12px" }} withRowBorders={true}>
        <Table.Caption>Table 3: The accuracy of each framework on each dataset</Table.Caption>
        <Table.Thead>
          <Table.Tr style={topBorder}>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
               Datasets
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              LangChain
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              AutoGen
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              AgentScope
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              CrewAI
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              LlamaIndex
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              Phidata
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              PydanticAI
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
export default TableAccuracy;
