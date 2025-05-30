import { Container, Stack, Title, Accordion, Image, Text, Table, Code, List, Anchor } from "@mantine/core";
import css from "../common.module.css";
import { IconAlt, IconClock24, IconCornerUpRightDouble,IconComponents, IconDimensions, IconDatabase, IconFileDescription, IconFileSettings, IconGhost, IconLockSquare, IconPackage, IconRulerMeasure, IconScale, IconSettings, IconShieldHalfFilled, IconShieldLock, IconTool, IconTemperature, IconClock } from "@tabler/icons-react";
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
import TableComSize from "./table.com_size"
import TableAccuracy from "./table.framework_accuracy";
import TableGaiaDetailedResults from "./table.gaia_detail";
import TableHumanEvalDetailedResults from "./table.humaneval_detail";
import AlpacaEvalTable from "./table.alpacaeval_detail";

const time_and_token = [
  {
    emoji: <IconClock color="#41B755" />,
    value: "LLM inference usually dominates runtime across all agent frameworks, and inefficient prompt engineering, such as appending full histories and using verbose prompts, exacerbates both latency and cost.",
    description: (
      <>
        {/* <TableModelSize /> */}
        <figure>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Image radius="md" src="figure3.jpg" alt="" h="auto" w="100%" fit="contain" style={{ maxWidth: "700px" }} />
          </div>
          <Text ta="center" c="dimmed">
            Figure 3. Token consumption and execution time per query of different frameworks.
          </Text>
        </figure>
        <div>
          <Title order={4}>Takeaways:</Title>
          <Text>
            Figure 3. presents the breakdown of agent execution time across four benchmark scenarios. Across all settings, LLM inference consistently dominates runtime. Even in the GAIA scenario, which is explicitly designed to be tool-intensive and involves frequent calls to external APIs, LLM inference accounts for more than 85% of the total execution time in most frameworks. In simpler workflows such as HumanEval and AlpacaEval, the proportion exceeds 95%. This highlights that LLM inference, due to its computational demands and frequent invocation, remains the primary bottleneck in agent execution, regardless of the complexity or type of task.<br />
            Moreover, we observe that the cost of LLM inference is further exacerbated by large variations in token efficiency across frameworks. There is a strong positive correlation between LLM inference time and token consumption. Some frameworks, notably CrewAI, LlamaIndex, and AgentScope, consistently exhibit higher token usage, leading to significantly prolonged inference times and increased resource consumption. We identify two main causes of token inefficiency: <span style={{ fontWeight: 'bold' }}>appending unnecessary history to prompts</span> and <span style={{ fontWeight: 'bold' }}>using verbose prompts</span>.<br />
            We observe that CrewAI and AgentScope elevated token usage arises from their design choice. In their implementation, the LLM stores all intermediate inputs and outputs as memory and appends this memory to each new prompt. As a result, the prompt length—and thus token count—grows with every step of reasoning. <br />
            In the ReAct workflow, LlamaIndex consumes a significant amount of prompts, primarily due to the observation portion returned to the LLM after tool invocation. Additionally, for queries that fail to execute successfully, the number of reasoning + action iterations increases, leading to a corresponding growth in the observation-related prompts.
          </Text>
        </div>
      </>
    ),
  },
  {
    emoji: <IconDimensions color="#41B755" />,
    value: "Token consumption may vary across frameworks even when executing the same workflow, owing to differences in implementation strategies.",
    description: (
      <>
        <TableGaiaDetailedResults />
        <TableHumanEvalDetailedResults />
        <AlpacaEvalTable/>
        {/* <figure>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Image radius="md" src="figure3.jpg" alt="" h="auto" w="100%" fit="contain" style={{ maxWidth: "700px" }} />
          </div>
          <Text ta="center" c="dimmed">
            Figure 3. Token consumption and execution time per query of different frameworks.
          </Text>
        </figure> */}
        <div>
          <Title order={4}>Takeaways:</Title>
          <Text>
          In the results of ReAct workflow, it can be observed that even when using the same ReAct workflow, AgentScope exhibits a significant discrepancy in token usage between the GAIA and HumanEval datasets, with exceptionally high token consumption on GAIA. This is primarily because AgentScope includes the entire memory of the agent in the prompt during every LLM invocation. As the number of reasoning steps increases, the prompt length grows rapidly. While this issue is less apparent in the relatively simple HumanEval dataset, it becomes prominent in the more complex GAIA tasks.<br />
          The high token usage observed in CrewAI's ReAct workflow can be attributed to the same reason. In fact, this issue is even more pronounced in CrewAI than in AgentScope, with significantly elevated token consumption observed across both the GAIA and HumanEval datasets.<br />
          In contrast, the majority of token consumption in LlamaIndex and Pydantic arises from the observation segments returned to the LLM after tool invocations. In the GAIA dataset, where tasks are complex and involve frequent tool usage, this results in substantial prompt token overhead.<br />
          There are also some issues observed in the MoA workflow. For example, PydanticAI does not require the invocation of all sub-agents during MoA execution, thereby reducing token consumption and runtime overhead.<br />
          Another example is that in the CrewAI framework, MoA is centrally managed by a global agent, which also plays the role of aggregation agent. The global agent receives the task and sequentially assigns it to sub-agents (e.g., agent1, agent2, agent3). Each sub-agent completes its part and returns the result to the global agent, which then decides the next step. After all agents have responded, the global agent summarizes the results and outputs the final answer.<br />
          In this setup, the global agent calls the LLM multiple times—once after each sub-agent’s response. Because LLMs retain the full context of previous inputs and outputs in a single session, each new call includes all prior interactions. This leads to token accumulation, especially by the third or fourth step, where the prompt becomes much longer. As a result, total token usage becomes higher than in frameworks with different coordination or memory strategies.This phenomenon will become more apparent in Scalability part as the number of sub agents increases.
          </Text>
        </div>
      </>
    ),
  },
  {
    emoji: <IconCornerUpRightDouble color="#41B755" />,
    value: "Parallel invocation reduces overall runtime.",
    description: (
      <>
        {/* <TableModelSize /> */}
        {/* <figure>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Image radius="md" src="figure3.jpg" alt="" h="auto" w="100%" fit="contain" style={{ maxWidth: "700px" }} />
          </div>
          <Text ta="center" c="dimmed">
            Figure 3. Token consumption and execution time per query of different frameworks.
          </Text>
        </figure> */}
        <div>
          <Title order={4}>Takeaways:</Title>
          <Text>
            In some frameworks such as PydanticAI, the total runtime is observed to be shorter than the sum of individual tool and LLM invocation times on datasets such as GAIA and MoA. This improvement is attributed to its parallel execution architecture and asynchronous scheduling, which enables simultaneous invocation of multiple tools or LLMs, thereby effectively reducing end-to-end latency.
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
    emoji: <IconTool color="#41B755" />,
    value: "Tool execution efficiency varies widely across frameworks, with search and figure-related tools introducing disproportionately high latency.",
    description: (
      <>
        <figure>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <Image radius="md" src="Figure4.jpg" alt="" h="auto" w="100%" fit="contain" style={{ maxWidth: "700px" }} />
            </div>
            <Text ta="center" c="dimmed">
              Figure 4. The execution time per call for each tool.
            </Text>
        </figure>
        <div>
          <p></p>
          <Title order={4}>Takeaways:</Title>
          <Text>
            We analyze the execution cost of various tool types across multiple LLM agent frameworks, as illustrated in Figure 4. The results reveal substantial variation in tool execution efficiency between frameworks, particularly for high-cost operations. Among all tool categories, search and figure-related tools usually incur the highest latency, often dominating total tool execution time within a workflow.<br />
            For instance, the figure loader takes 2.7 seconds to execute in CrewAI, but exceeds 30 seconds in AgentScope, indicating considerable framework-dependent overhead. In contrast, lightweight tools such as <span style={{ fontWeight: 'bold',fontFamily: 'monospace',backgroundColor: '#f5f5f5', padding: '2px 4px', borderRadius: '3px', color: '#d63384' }}>txt_tool</span> and <span style={{ fontWeight: 'bold',fontFamily: 'monospace',backgroundColor: '#f5f5f5', padding: '2px 4px', borderRadius: '3px', color: '#d63384' }}>docx_tool</span> typically complete in under a millisecond, demonstrating minimal variance. Tools like <span style={{ fontWeight: 'bold',fontFamily: 'monospace',backgroundColor: '#f5f5f5', padding: '2px 4px', borderRadius: '3px', color: '#d63384' }}>pdf_tool</span> and <span style={{ fontWeight: 'bold',fontFamily: 'monospace',backgroundColor: '#f5f5f5', padding: '2px 4px', borderRadius: '3px', color: '#d63384' }}>python_tool</span> exhibit moderate differences in runtime, depending on each framework’s implementation and I/O strategy. <br /> 
            Additionally, some frameworks (e.g., AgentScope) show disproportionately high total tool processing time, driven primarily by inefficient handling of image processing or multimedia tasks. This highlights the importance of optimizing high-latency tools, particularly in scenarios where tool invocation is frequent or tightly coupled with LLM inference. <br /> 
            While LLM inference remains the dominant bottleneck in most of our benchmarks, more complex, tool-heavy scenarios, such as document analysis or multimodal agent tasks, may shift the performance bottleneck toward tool execution. Frameworks aiming to support such use cases must pay greater attention to optimizing tool orchestration and external API integration.

          </Text>
        </div>
      </>
    ),
  },
  // {
  //   emoji: <IconPackage color="#1864AB" />,
  //   value: "Leakage Ratio on Different Models",
  //   description: (
  //     <>
  //       <div>
  //         <TableLeakageLlama />
  //         <p></p>
  //         <Title order={4}>Takeaways:</Title>
  //         <Text>For the same series of models, the larger model has a higher risk of prompt leakage, potentially because they are better at following the PLA instructions to output the private prompts.</Text>
  //         {/* <Title order={4}>Takeaways:</Title> */}
  //         {/* <p></p> */}
  //       </div>
  //     </>
  //   ),
  // },
  // {
  //   emoji: <IconShieldHalfFilled color="#1864AB" />,
  //   value: "Effectiveness of Defensive Prompting",
  //   description: (
  //     <>
  //       <div>
  //         <TableLeakageGpt4 />
  //         <p></p>
  //         <Title order={4}>Takeaways:</Title>
  //         <Text>Using manually designed defensive prompts to protect the private prompts has limited effects. It is essential to develop a rigorous mechanism that can preserve the privacy of prompts.</Text>
  //       </div>
  //     </>
  //   ),
  // },
];

const rag = [
  {
    emoji: <IconDatabase color="#41B755" />,
    value: "While agents usually involve external databases for information retrieval, the database performance is overlooked in several frameworks. Vector database is recommended.",
    description: (
      <>
        <div>
          {/* <TableLeakageUserData />
          <p></p> */}
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Image radius="md" src="figure3.jpg" alt="" h="auto" w="100%" fit="contain" style={{ maxWidth: "700px" }} />
          </div>
          <Text ta="center" c="dimmed">
            Figure 3. Token consumption and execution time per query of different frameworks.
          </Text>
          <Title order={4}>Takeaways:</Title>
          <Text>
            While RAG workflows are increasingly adopted to enhance factual grounding, our benchmarking reveals that database performance, particularly during embedding and retrieval, is a critical yet frequently neglected factor. Figure 3(c). illustrates the variation in retrieval latency across frameworks, exposing significant performance disparities.<br />
            One notable example is AgentScope, which demonstrates high vectorization latency. This stems from its design: during the database setup phase, AgentScope invokes a large embedding model to compute dense vector representations. The latency of this embedding model, often implemented as a separate LLM call, substantially increases the overall vectorization time. Similarly, Phidata exhibits elevated vectorization latency due to its use of a two-step pipeline. First, its built-in <span style={{ fontWeight: 'bold',fontFamily: 'monospace',backgroundColor: '#f5f5f5', padding: '2px 4px', borderRadius: '3px', color: '#d63384' }}>csv_tool</span> loads documents row-by-row; then, it applies a SentenceTransformer model to compute embeddings. Our benchmark confirms that Phidata's <span style={{ fontWeight: 'bold',fontFamily: 'monospace',backgroundColor: '#f5f5f5', padding: '2px 4px', borderRadius: '3px', color: '#d63384' }}>csv_tool</span> itself is a relatively slow component, compounding the overall vectorization time. From our observation, vector databases such as Faiss are faster than other implementations.<br />
            These observations highlight the need for more attention to retrieval pipeline design, especially in frameworks that aim to support real-time or large-scale RAG deployments. Optimization opportunities include batching document embeddings, using faster embedding models, minimizing redundant file reads, and caching frequent queries.
          </Text>
        </div>
      </>
    ),
  },
];

const com_size = [
  {
    emoji: <IconPackage color="#41B755" />,
    value: "Inefficient communication architecture and package design lead to high communication overhead in the multi-agent setting.",
    description: (
      <>
        <div>
          <TableComSize />
          <p></p>
          <Title order={4}>Takeaways:</Title>
          <Text>
            In multi-agent frameworks, communication between agents is often overlooked as a source of inefficiency. However, our analysis reveals large discrepancies in communication size across frameworks, as shown in Table 2. These differences arise not only from framework-specific message formats but also from architectural design choices, especially in multi-agent workflows like MoA.<br />
            Notably, frameworks such as CrewAI, which adopt a centralized communication pattern, exhibit significantly higher communication costs. In these designs, a central agent coordinates multiple sub-agents by sequentially delegating subtasks and collecting responses. For example, in CrewAI's MoA implementation, the center agent queries three sub-agents in sequence and aggregates their outputs. Each LLM invocation by the center agent accumulates prior messages in memory, causing the prompt size and the communication payload to grow linearly with the number of sub-agents. Phidata, on the other hand, incurs substantial communication overhead due to its design. In addition to the core message, it returns a duplicated <span style={{ fontWeight: 'bold' }}>content</span> field that mirrors the final message. This, combined with additional metadata fields, results in large overhead sizes.<br />
            These findings indicate that communication cost is not merely a function of task complexity but also of framework design. In large-scale deployments or bandwidth-constrained environments, excessive inter-agent message sizes, especially those driven by redundant content or sequential message accumulation, can significantly impact system performance and cost. Future agent frameworks should consider streamlined communication protocols, selective message summarization, or compressing intermediate results to reduce unnecessary transfer overhead.
          </Text>
        </div>
      </>
    ),
  },
];


const accuracy = [
  {
    emoji: <IconComponents color="#41B755" />,
    value: "The complete absence of output constraints in LLMs may lead to tool invocation failures, whereas excessively strict output validation can incur substantial token overhead and decrease the response success rate.",
    description: (
      <>
        <div>
          <TableAccuracy />
          <p></p>
          <Title order={4}>Takeaways:</Title>
          <Text>
          Some frameworks, such as LlamaIndex, require tool inputs to conform to a strict dictionary format. However, GPT-4o does not consistently produce structured outputs that align with these expectations, leading to frequent tool invocation failures, which caused a lower accuracy in GAIA dataset. This issue can be partially mitigated if the framework explicitly enforces the format requirement during the registration phase or input schema definition.<br />
          In contrast, other frameworks such as LangChain adopt stricter enforcement mechanisms. ReAct-style agents in these systems perform rigid output validation and initiate automatic retries when the model's response deviates from the expected invocation structure. While such mechanisms increase robustness against malformed outputs, they may backfire in certain scenarios. <br />
          In our evaluation, we found that when the model skips tool invocation and instead provides a direct answer (this happens especially with some of the simpler queries in the HumanEval dataset), the framework retries the prompt, often multiple times. Each retry includes previous failed attempts in the context, leading to a rapid increase in prompt length and token consumption as well as a lower likelihood of producing a clean, valid output on later attempts.<br />
          An additional point to clarify is that the GAIA dataset exhibits relatively low accuracy. This is primarily because GAIA tasks often require complex task planning and the use of multiple tools, posing significant challenges for all evaluated frameworks. It is important to note that the primary focus of this study is not on accuracy, but rather on comparing the performance overhead (e.g., time, token usage) across different frameworks. Therefore, we ensured that the accuracy across frameworks remains broadly comparable, without conducting detailed task-level progress analysis as seen in some related work. By carefully controlling experimental parameters, the fairness of our comparisons remains valid, even in the presence of lower absolute accuracy.
          </Text>
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

  const items_accuracy = accuracy.map((item) => (
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
      {/* <Text c="dimmed">We focus on answering the following research questions:</Text>

      <List mb="sm" type="ordered" c="dimmed">
        <List.Item>?</List.Item>
      </List> */}

      <Stack bg="var(--mantine-color-body)" gap="sm">
        <Accordion variant="contained" radius="md" defaultValue="">
          {items_time_and_token}
        </Accordion>
      </Stack>

      <Title order={2} className={css.pagetitle}>
        Tool Calling
      </Title>

      {/* <Text c="dimmed">We focus on answering the following research questions:</Text>
      <List mb="sm" type="ordered" c="dimmed">
        <List.Item>?</List.Item>
        <List.Item>?</List.Item>
      </List> */}

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

      <Title order={2} className={css.pagetitle}>
        Accuracy
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
          {items_accuracy}
        </Accordion>
      </Stack>

      
    </Container>
  );
}
