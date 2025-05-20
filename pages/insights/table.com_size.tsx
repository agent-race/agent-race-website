import React from "react";
import { Table, Text } from "@mantine/core";

// \begin{table}[]
// \centering
// \caption{Communication size between agents (Unit: Byte). We report the content size (e.g., the transferred outputs from the last agent) and overhead size (e.g., header), separated by /.}
// \label{tab:communication_size}
// \resizebox{\textwidth}{!}{%
// \begin{tabular}{@{}lllllllll@{}}
// \toprule
//  &  & \textbf{LangChain} & \textbf{AutoGen}  & \textbf{AgentScope} & \textbf{CrewAI} & \textbf{LlamaIndex} & \textbf{Phidata} & \textbf{PydanticAI} \\ \midrule
// \multirow{3}{*}{\shortstack{\textbf{From Global}\\\textbf{Agent}}}
//  & Agent1 & 165.07/0 & 209.08/44.01 & 284.078/0 & 514.962/0 & 1180.078/898 & 354.508/0 & 96.022/0 \\ 
//  & Agent2 & 165.07/0 & 209.08/44.01 & 284.078/0 & 483.740/0 & 1171.078/889 & 341.160/0 & 95.425/0 \\ 
//  & Agent3 & 165.07/0 & 209.08/44.01 & 284.078/0 & 619.516/0 & 1164.078/882 & 343.219/0 & 97.116/0 \\ \midrule
// \multirow{3}{*}{\shortstack{\textbf{To Aggregation}\\\textbf{Agent}}}
//  & Agent1 & 1983.02/3 & 2066.04/52.4 & 1659.318/0 & 2497.929/0 & 2022.417/33.689 & 6128.259/2639.113 & 2000.542/0 \\ 
//  & Agent2 & 2011.83/3 & 2071.24/57.38 & 1511.311/0 & 1754.701/0 & 2054.878/39.118 & 6131.272/2629.426 & 1927.093/0 \\ 
//  & Agent3 & 2072.98/3 & 2156.04/66.81 & 1889.247/0 & 2151.097/0 & 2116.377/48.641 & 5715.126/2465.817 & 1892.344/0 \\ \bottomrule
// \end{tabular}%
// }
// \end{table}

const TableComSize = () => {
  const topBorder = { borderTop: "2pt solid #CED4DA;" };
  const rightBorder = { borderRight: "2pt solid #CED4DA;" };
  const rows = [
    { model: "From Global Agent", type: "Agent1", langchain: "165.07/0", autogen: "209.08/44.01", agentscope: "284.078/0", crewai: "514.962/0", llamaindex: "1180.078/898", phidata: "354.508/0", pydantic:"96.022/0" },
    { model: "From Global Agent", type: "Agent2", langchain: "165.07/0", autogen: "209.08/44.01", agentscope: "284.078/0", crewai: "483.740/0", llamaindex: "1180.078/898", phidata: "354.508/0", pydantic:"96.022/0" },
    { model: "From Global Agent", type: "Agent3", langchain: "165.07/0", autogen: "209.08/44.01", agentscope: "284.078/0", crewai: "619.516/0", llamaindex: "1180.078/898", phidata: "354.508/0", pydantic:"96.022/0" },
    { model: "To Aggregation Agent", type: "Agent1", langchain: "1983.02/3", autogen: "2066.04/52.4", agentscope: "1659.318/0", crewai: "2497.929/0", llamaindex: "1180.078/898", phidata: "354.508/0", pydantic:"96.022/0" },
    { model: "To Aggregation Agent", type: "Agent2", langchain: "2011.83/3", autogen: "2071.24/57.38", agentscope: "1511.311/0", crewai: "1754.701/0", llamaindex: "1180.078/898", phidata: "354.508/0", pydantic:"96.022/0" },
    { model: "To Aggregation Agent", type: "Agent3", langchain: "2072.98/3", autogen: "2156.04/66.81", agentscope: "1889.247/0", crewai: "2151.097/0", llamaindex: "1180.078/898", phidata: "354.508/0", pydantic:"96.022/0" },
  ];

  const elements = rows.map((row, index) => {
    let style = undefined;
    if (index == 0 || index == 3) {
      return (
        <Table.Tr key={index} style={style}>
          <Table.Td rowSpan={3} style={{textAlign: 'center'}}>{row.model}</Table.Td>
          <Table.Td>{row.type}</Table.Td>
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
        <Table.Td>{row.type}</Table.Td>
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
        <Table.Caption>Table 2: Communication size between agents (Unit: Byte). We report the content size (e.g., the transferred outputs from the last agent) and overhead size (e.g., header), separated by /.</Table.Caption>
        <Table.Thead>
          <Table.Tr style={topBorder}>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
               
            </Table.Th>
            <Table.Th rowSpan={1} style={{ textAlign: "center" }}>
               
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
export default TableComSize;
