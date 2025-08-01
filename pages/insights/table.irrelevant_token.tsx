import React from "react";
import { Table, Text } from "@mantine/core";

const IrrelevantToken = () => {
  const firstTableData = [
    {
      seq: "No irrelevant tools",
      langchain_p: "7199.33", langchain_c: "553.2", langchain_t: "7753.0",
      autogen_p: "1195.98", autogen_c: "185.19", autogen_t: "1381.18",
      agentscope_p: "17161.55", agentscope_c: "828.68", agentscope_t: "17990.23",
      crewai_p: "16475.12", crewai_c: "582.82", crewai_t: "17057.95",
      llamaindex_p: "101042.29", llamaindex_c: "729.57", llamaindex_t: "101771.86",
      phidata_p: "3293.59", phidata_c: "270,75", phidata_t: "3564.33",
      pydanticai_p: "13273.91", pydanticai_c: "373.74", pydanticai_t: "13647.66",
    },
    {
      seq: "10 irrelevant tools",
      langchain_p: "11489.89", langchain_c: "586.61", langchain_t: "12076.50",
      autogen_p: "2200.19", autogen_c: "191.82", autogen_t: "2392.01",
      agentscope_p: "31878.31", agentscope_c: "780.23", agentscope_t: "32658.54",
      crewai_p: "11670.07", crewai_c: "552.16", crewai_t: "12222.23",
      llamaindex_p: "35111.65", llamaindex_c: "348.83", llamaindex_t: "35460.48",
      phidata_p: "4957.96", phidata_c: "295.79", phidata_t: "5253.75",
      pydanticai_p: "12356.90", pydanticai_c: "321.95", pydanticai_t: "12678.85",
    },
    {
      seq: "20 irrelevant tools",
      langchain_p: "12779.90", langchain_c: "502.75", langchain_t: "13282.65",
      autogen_p: "3011.2", autogen_c: "182.87", autogen_t: "3194.07",
      agentscope_p: "32464.93", agentscope_c: "804.56", agentscope_t: "33269.48",
      crewai_p: "17398.34", crewai_c: "557.75", crewai_t: "17956.09",
      llamaindex_p: "32899.47", llamaindex_c: "253.21", llamaindex_t: "33152.68",
      phidata_p: "6104.55", phidata_c: "267.34", phidata_t: "6371.88",
      pydanticai_p: "16682.93", pydanticai_c: "324.13", pydanticai_t: "17025.06",
    },

  ];


  return (
    <>
      <Text fw={700} hiddenFrom="sm" c="blue">
        Table: GAIA Detailed Results
      </Text>

      <Table highlightOnHover withTableBorder withRowBorders style={{ fontSize: "12px", marginBottom: "20px" }}>
        <Table.Caption>Token Consumption per Framework on GAIA Dataset</Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th rowSpan={2}> </Table.Th>
            <Table.Th colSpan={3}>LangChain</Table.Th>
            <Table.Th colSpan={3}>AutoGen</Table.Th>
            <Table.Th colSpan={3}>AgentScope</Table.Th>
            <Table.Th colSpan={3}>CrewAI</Table.Th>
            <Table.Th colSpan={3}>LlamaIndex</Table.Th>
            <Table.Th colSpan={3}>Phidata</Table.Th>
            <Table.Th colSpan={3}>PydanticAI</Table.Th>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Prompt</Table.Th>
            <Table.Th>Completion</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Prompt</Table.Th>
            <Table.Th>Completion</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Prompt</Table.Th>
            <Table.Th>Completion</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Prompt</Table.Th>
            <Table.Th>Completion</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Prompt</Table.Th>
            <Table.Th>Completion</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Prompt</Table.Th>
            <Table.Th>Completion</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Prompt</Table.Th>
            <Table.Th>Completion</Table.Th>
            <Table.Th>Total</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {firstTableData.map((row, i) => (
            <Table.Tr key={i}>
              <Table.Td>{row.seq}</Table.Td>
              <Table.Td>{row.langchain_p}</Table.Td>
              <Table.Td>{row.langchain_c}</Table.Td>
              <Table.Td>{row.langchain_t}</Table.Td>
              <Table.Td>{row.autogen_p}</Table.Td>
              <Table.Td>{row.autogen_c}</Table.Td>
              <Table.Td>{row.autogen_t}</Table.Td>
              <Table.Td>{row.agentscope_p}</Table.Td>
              <Table.Td>{row.agentscope_c}</Table.Td>
              <Table.Td>{row.agentscope_t}</Table.Td>
              <Table.Td>{row.crewai_p}</Table.Td>
              <Table.Td>{row.crewai_c}</Table.Td>
              <Table.Td>{row.crewai_t}</Table.Td>
              <Table.Td>{row.llamaindex_p}</Table.Td>
              <Table.Td>{row.llamaindex_c}</Table.Td>
              <Table.Td>{row.llamaindex_t}</Table.Td>
              <Table.Td>{row.phidata_p}</Table.Td>
              <Table.Td>{row.phidata_c}</Table.Td>
              <Table.Td>{row.phidata_t}</Table.Td>
              <Table.Td>{row.pydanticai_p}</Table.Td>
              <Table.Td>{row.pydanticai_c}</Table.Td>
              <Table.Td>{row.pydanticai_t}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

    </>
  );
};

export default IrrelevantToken;
