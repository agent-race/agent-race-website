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
const IrrelevantTime = () => {
  const topBorder = { borderTop: "2pt solid #CED4DA;" };
  const rightBorder = { borderRight: "2pt solid #CED4DA;" };
  const rows = [
    { calls: "No irrelevant tools",  langchain: "12.86",  autogen: "8.41", agentscope: "19.57", crewai: "11.87", llamaindex: "24.26", phidata: "10.23", pydantic: "10.31" },
    { calls: "10 irrelevant tools",  langchain: "11.79", autogen: "8.58", agentscope: "22.31", crewai: "10.35", llamaindex: "19.47", phidata: "10.99", pydantic: "8.33" },
    { calls: "20 irrelevant tools",  langchain: "10.78", autogen: "8.36", agentscope: "21.95", crewai: "11.14", llamaindex: "20.89", phidata: "10.98", pydantic: "9.58" },
  ];

  const elements = rows.map((row, index) => {
    let style = undefined;
    if (index == 0 || index == 3) {
      return (
        <Table.Tr key={index} style={style}>
        <Table.Td>{row.calls}</Table.Td>
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
        <Table.Td>{row.calls}</Table.Td>
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
        <Table.Caption>Table: Total Run Time per Framework on GAIA Dataset (seconds)</Table.Caption>
        <Table.Thead>
          <Table.Tr style={topBorder}>
            <Table.Th rowSpan={1} style={{ textAlign: "left" }}>
              
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "left" }}>
              LangChain
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "left" }}>
              AutoGen
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "left" }}>
              AgentScope
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "left" }}>
              CrewAI
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "left" }}>
              LlamaIndex
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "left" }}>
              Phidata
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "left" }}>
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
export default IrrelevantTime;
