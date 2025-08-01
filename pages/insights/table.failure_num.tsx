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
const FailureNum = () => {
  const topBorder = { borderTop: "2pt solid #CED4DA;" };
  const rightBorder = { borderRight: "2pt solid #CED4DA;" };
  const rows = [
    { calls: "1",  agentscope: "7",  crewai: "14", llamaindex: "79", pydantic: "26", phidata: "22", },
    { calls: "2",  agentscope: "18", crewai: "31", llamaindex: "16", pydantic: "59", phidata: "57", },
    { calls: "3",  agentscope: "30", crewai: "32", llamaindex: "23", pydantic: "39", phidata: "35", },
    { calls: "4",  agentscope: "23", crewai: "12", llamaindex: "14", pydantic: "18", phidata: "21", },
    { calls: "5",  agentscope: "22", crewai: "14", llamaindex: "13", pydantic: "14", phidata: "14", },
    { calls: "6",  agentscope: "14", crewai: "20",  llamaindex: "6", pydantic: "7",  phidata: "5", },
    { calls: "7",  agentscope: "11",  crewai: "9",  llamaindex: "7", pydantic: "2",  phidata: "4", },
    { calls: "8",  agentscope: "9",  crewai: "12",  llamaindex: "1",  pydantic: "0", phidata: "6", },
    { calls: "9",  agentscope: "12",  crewai: "5",  llamaindex: "2",  pydantic: "0", phidata: "0", },
    { calls: "10", agentscope: "5",   crewai: "2",  llamaindex: "3",  pydantic: "0", phidata: "0", },
    { calls: "11", agentscope: "18",  crewai: "4",  llamaindex: "0",  pydantic: "0", phidata: "0", },
    { calls: "12", agentscope: "0",   crewai: "2",  llamaindex: "0",  pydantic: "0", phidata: "0", },
    { calls: "13", agentscope: "0",   crewai: "1",  llamaindex: "1",  pydantic: "0", phidata: "0", },
    { calls: "14", agentscope: "0",   crewai: "2",  llamaindex: "0",  pydantic: "0", phidata: "0", },
    { calls: "15", agentscope: "0",   crewai: "1",  llamaindex: "0",  pydantic: "0", phidata: "0", },
    { calls: "16", agentscope: "0",   crewai: "1",  llamaindex: "0",  pydantic: "0", phidata: "0", },
    { calls: "17", agentscope: "0",   crewai: "0",  llamaindex: "0",  pydantic: "0", phidata: "1", },
  ];

  const elements = rows.map((row, index) => {
    let style = undefined;
    if (index == 0 || index == 3) {
      return (
        <Table.Tr key={index} style={style}>
        <Table.Td>{row.calls}</Table.Td>
        <Table.Td>{row.agentscope}</Table.Td>
        <Table.Td>{row.crewai}</Table.Td>
        <Table.Td>{row.llamaindex}</Table.Td>
        <Table.Td>{row.pydantic}</Table.Td>
        <Table.Td>{row.phidata}</Table.Td>
        {/* <Table.Td>{row.phidata}</Table.Td>
        <Table.Td>{row.pydantic}</Table.Td> */}
        </Table.Tr>
      );
    }
    return (
      <Table.Tr key={index} style={style}>
        <Table.Td>{row.calls}</Table.Td>
        <Table.Td>{row.agentscope}</Table.Td>
        <Table.Td>{row.crewai}</Table.Td>
        <Table.Td>{row.llamaindex}</Table.Td>
        <Table.Td>{row.pydantic}</Table.Td>
        <Table.Td>{row.phidata}</Table.Td>
        {/* <Table.Td>{row.phidata}</Table.Td>
        <Table.Td>{row.pydantic}</Table.Td> */}
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
               LLM Call Frequency
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
              PydanticAI
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              Phidata
            </Table.Th>
            {/* <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              -
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
              -
            </Table.Th> */}
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
export default FailureNum;
