import { Container, Stack, Title, Accordion, Image, Text, Table, Code, List, Anchor } from "@mantine/core";
import css from "../common.module.css";
import { IconAlt, IconClock24, IconComponents, IconDimensions, IconFeather, IconFileDescription, IconFileSettings, IconGhost, IconLockSquare, IconPackage, IconRulerMeasure, IconScale, IconSettings, IconShieldHalfFilled, IconShieldLock, IconTank, IconTemperature } from "@tabler/icons-react";
import TableModelSize from "./table.model.size";
import TableMiaEchr from "./table.mia.echr";
import TableMiaEnron from "./table.mia.enron";
import TableMiaDifferentLength from "./table.mia.different.length";
import TableLeakageLlama from "./table.leakage.llama";
import TablePromptDefense from "./table.prompts.defense";
import TableMiaDeaEchr from "./table.mia.dea.echr";
import TablePrivacyRisksOverDifferentAttacks from "./table.privacy.different.attacks";
import TableLeakageGpt4 from "./table.leakage.gpt4";
import TableLeakageUserData from "./table.leakage.user.data";
import TableDeaDifferentPosition from "./table.dea.different.position";

const time_and_token = [
  {
    emoji: <IconDimensions />,
    value: "Effect of Model Size",
    description: (
      <>
        {/* <TableModelSize /> */}
        <figure>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Image radius="md" src="figure3.jpg" alt="" h="auto" w="100%" fit="contain" style={{ maxWidth: "500px" }} />
          </div>
          <Text ta="center" c="dimmed">
            Figure 3. Token consumption and execution time per query of different frameworks.
          </Text>
        </figure>
        <div>
          <Title order={4}>Takeaways:</Title>
          <Text>
            Figure 3. presents the breakdown of agent execution time across four benchmark scenarios. Across all settings, LLM inference consistently dominates runtime. Even in the GAIA scenario, which is explicitly designed to be tool-intensive and involves frequent calls to external APIs, LLM inference accounts for more than 85\% of the total execution time in most frameworks. In simpler workflows such as HumanEval and AlpacaEval, the proportion exceeds 95\%. This highlights that LLM inference, due to its computational demands and frequent invocation, remains the primary bottleneck in agent execution, regardless of the complexity or type of task.<br />
            Moreover, we observe that the cost of LLM inference is further exacerbated by large variations in token efficiency across frameworks. There is a strong positive correlation between LLM inference time and token consumption. Some frameworks, notably CrewAI, LlamaIndex, and AgentScope, consistently exhibit higher token usage, leading to significantly prolonged inference times and increased resource consumption. We identify two main causes of token inefficiency: <Text weight={700}>appending unnecessary history to prompts</Text> and <Text weight={700}>using verbose prompts</Text>.<br />
            We observe that CrewAI and AgentScope elevated token usage arises from their design choice. In their implementation, the LLM stores all intermediate inputs and outputs as memory and appends this memory to each new prompt. As a result, the prompt length—and thus token count—grows with every step of reasoning. <br />
          </Text>
        </div>
      </>
    ),
  },
  // {
  //   emoji: <IconFeather />,
  //   value: "Effect of Data Characteristics",
  //   description: (
  //     <>
  //       <div>
  //         <Title order={4} className={css.pagetitle}>
  //           Position and Type of Private Data
  //         </Title>
  //         <TableDeaDifferentPosition />
  //         <p></p>
  //         <Title order={4} className={css.pagetitle}>
  //           Data Length
  //         </Title>
  //         <TableMiaDifferentLength />
  //         <Text ta="center" c="dimmed">
  //           For Enron, short emails have higher perplexity due to their informal nature and variability, which provides less context and makes them harder for the model to predict accurately. For ECHR, longer legal documents have higher perplexity due to their complexity and dense information,
  //           making them challenging for the model.
  //         </Text>
  //         <Text ta="center" c="dimmed">
  //           Higher perplexity indicates the model struggles more, creating distinct patterns between training and non-training data, leading to increased MIA AUC and higher privacy risks for these samples.
  //         </Text>
  //         <p></p>
  //         <Title order={4} className={css.pagetitle}>
  //           Pretraining data size
  //         </Title>
  //         <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
  //           <Image radius="md" src="fig6.dea_token.png" alt="dea_accuracy_with_diff_tokens" h="auto" w="100%" fit="contain" style={{ maxWidth: "600px" }} />
  //         </div>
  //         <Text ta="center" c="dimmed">
  //           Figure 6. DEA accuracy with different training tokens. <br />
  //           Besides the model size, when increasing the number of training tokens, LLM’s memorization capacity also increases. Consequently, this leads to a rise in data extraction accuracy
  //         </Text>
  //         <p></p>
  //         <Title order={4}>Takeaways:</Title>
  //         <Text>
  //           Our findings reveal that data type, data position, data length, and pretraining data size collectively impact privacy risks on Llama-2. Data with richer contextual information (e.g., locations) tends to be more susceptible to memorization during fine-tuning. Private data at the end of a sample is more vulnerable to extraction. Data samples that are harder to predict, indicated by higher perplexity, are more easily identified in MIAs. Additionally, increasing the size of the training data enhances the model’s memorization capacity, leading to higher privacy risks. These insights highlight the necessity for targeted privacy strategies that address the specific characteristics of different data types in LLMs.
  //         </Text>
  //       </div>
  //     </>
  //   ),
  // },
];

const tool_call = [
  {
    emoji: <IconTank color="#1864AB" />,
    value: "Leakage Ratio on Different Attacks",
    description: (
      <>
        <div>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Image radius="md" src="fuzz_rate.png" alt="fuzz_rate" h="auto" w="100%" fit="contain" style={{ maxWidth: "500px" }} />
          </div>
          <Text ta="center" c="dimmed">
            Figure 7. The FuzzRate of different attacks on different models. <br /> The ignore_print and spell_check are the two strongest attacks on Llama2-70b-chat.
          </Text>
          <p></p>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Image radius="md" src="90_fuzz_rate.png" alt="90fuzz_rate" h="auto" w="100%" fit="contain" style={{ maxWidth: "500px" }} />
          </div>
          <Text ta="center" c="dimmed">
            Figure 8. The leakage ratio (%) of samples that have FuzzRate over 90. <br /> Consistent with results measured by the average FuzzRate, ignore_print is the strongest attack on Llama-2-70b-chat.
          </Text>
          <p></p>
          <Title order={4}>Takeaways:</Title>
          <Text>Prompts can be easily leaked with prompting attacks. Directly asking LLMs to ignore and print the previous instructions can leak to serious prompt leakage in many LLMs.</Text>
        </div>
      </>
    ),
  },
  {
    emoji: <IconPackage color="#1864AB" />,
    value: "Leakage Ratio on Different Models",
    description: (
      <>
        <div>
          <TableLeakageLlama />
          <p></p>
          <Title order={4}>Takeaways:</Title>
          <Text>For the same series of models, the larger model has a higher risk of prompt leakage, potentially because they are better at following the PLA instructions to output the private prompts.</Text>
          {/* <Title order={4}>Takeaways:</Title> */}
          {/* <p></p> */}
        </div>
      </>
    ),
  },
  {
    emoji: <IconShieldHalfFilled color="#1864AB" />,
    value: "Effectiveness of Defensive Prompting",
    description: (
      <>
        <div>
          <TableLeakageGpt4 />
          <p></p>
          <Title order={4}>Takeaways:</Title>
          <Text>Using manually designed defensive prompts to protect the private prompts has limited effects. It is essential to develop a rigorous mechanism that can preserve the privacy of prompts.</Text>
        </div>
      </>
    ),
  },
];

const rag = [
  {
    emoji: <IconPackage color="#1864AB" />,
    value: "Privacy Risks over Different Models",
    description: (
      <>
        <div>
          <TableLeakageUserData />
          <p></p>
          <Title order={4}>Takeaways:</Title>
          <Text>LLMs can extract user data from input context due to their advanced reasoning capabilities. Developing techniques that aim to enable the private usage of LLMs while safeguarding query prompts is necessary.</Text>
        </div>
      </>
    ),
  },
];

const com_size = [
  {
    emoji: <IconPackage color="#1864AB" />,
    value: "Privacy Risks over Different Models",
    description: (
      <>
        <div>
          <TableLeakageUserData />
          <p></p>
          <Title order={4}>Takeaways:</Title>
          <Text>LLMs can extract user data from input context due to their advanced reasoning capabilities. Developing techniques that aim to enable the private usage of LLMs while safeguarding query prompts is necessary.</Text>
        </div>
      </>
    ),
  },
];


export default function Benchmark() {
  const items_time_and_token = time_and_token.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  const items_tool_call = tool_call.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  const items_rag = rag.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  const items_com_size = com_size.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Container>
      <Title order={1} className={css.pagetitle}>
        Insights
      </Title>

      <Title order={2} className={css.pagetitle}>
        Execution Time and Token Consumption
      </Title>
      <Text c="dimmed">We focus on answering the following research questions:</Text>

      <List mb="sm" type="ordered" c="dimmed">
        <List.Item>?</List.Item>
        <List.Item>?</List.Item>
        <List.Item>?</List.Item>
      </List>

      <Stack bg="var(--mantine-color-body)" gap="sm">
        <Accordion variant="contained" radius="md" defaultValue="">
          {items_time_and_token}
        </Accordion>
      </Stack>

      <Title order={2} className={css.pagetitle}>
        Tool Calling
      </Title>

      <Text c="dimmed">We conduct a comprehensive evaluation of prompt privacy using different Prompt Leaking Attack (PLA) methods, models, and potential defenses. We focus on answering the following research questions:</Text>
      <List mb="sm" type="ordered" c="dimmed">
        <List.Item>?</List.Item>
        <List.Item>?</List.Item>
        <List.Item>?</List.Item>
      </List>

      <Stack bg="var(--mantine-color-body)" gap="sm">
        <Accordion variant="contained" radius="md" defaultValue="">
          {items_tool_call}
        </Accordion>
      </Stack>

      <Title order={2} className={css.pagetitle}>
        RAG
      </Title>
      {/* <Text mb="sm" c="dimmed">
        We use an open-sourced{" "}
        <Anchor href="https://github.com/eth-sri/SynthPAI/" target="_blank">
          toolkit
        </Anchor>{" "}
        to explore the potential leakage of user data when using LLMs
      </Text> */}
      <Stack bg="var(--mantine-color-body)" gap="sm">
        <Accordion variant="contained" radius="md" defaultValue="">
          {items_rag}
        </Accordion>
      </Stack>

      <Title order={2} className={css.pagetitle}>
        Communication Size
      </Title>
      {/* <Text mb="sm" c="dimmed">
        We use an open-sourced{" "}
        <Anchor href="https://github.com/eth-sri/SynthPAI/" target="_blank">
          toolkit
        </Anchor>{" "}
        to explore the potential leakage of user data when using LLMs
      </Text> */}
      <Stack bg="var(--mantine-color-body)" gap="sm">
        <Accordion variant="contained" radius="md" defaultValue="">
          {items_com_size}
        </Accordion>
      </Stack>

      
    </Container>
  );
}
