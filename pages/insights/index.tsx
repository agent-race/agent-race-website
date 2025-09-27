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
import FailureNum from "./table.failure_num";
import MemAcc from "./table.mem_acc";
import MoaSeq from "./table.moa_sequence";
import CrewAIMemoryWindowTable from "./table.acc-eff";
import AlpacaEvalScalabilityTable from "./table.scalalability-moa";
import LeetCodeToolsEffectTable from "./table.extra-tools-time"
import LeetCodeEffectTable from "./table.extra-tools-token";
import NumberOfFailedRunsTable from "./table.extra-tools-failure";
import HumanEvalDetailedResultsTable from "./table.detail-humaneval";
import HumanEvalRun2Table from "./table.run2-humaneval"
import HumanEvalRun3Table from "./table.run3-humaneval"
import GAIARun1Table from "./table.run1-gaia"
import GAIARun2Table from "./table.run2-gaia"
import GAIARun3Table from "./table.run3-gaia";
import TableIrrelevantTime from "./table.irrelevant_time";
import IrrelevantFailure from "./table.irrelevant_failure";
import TableIrrelevantToken from "./table.irrelevant_token";

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
        <figure>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Image radius="md" src="ok-vqa.jpg" alt="" h="auto" w="50%" fit="contain" style={{ maxWidth: "700px" }} />
          </div>
          <Text ta="center" c="dimmed">
            Figure 5. OK-VQA
          </Text>
        </figure>
        <div>
          <Title order={4}>Key Observations</Title>
          <Text>
          Figure 3 presents the breakdown of agent execution time across four benchmark scenarios. The results on OK-VQA are available at shown in Figure 5;. Across all settings, LLM inference consistently dominates runtime. Even in the GAIA scenario, which is explicitly designed to be tool-intensive and involves frequent calls to external APIs, LLM inference accounts for more than 85\% of the total execution time in most frameworks. This highlights that LLM inference, due to its computational demands and frequent invocation, remains the primary bottleneck in agent execution, regardless of the complexity or type of task. Moreover, we observe that the cost of LLM inference is further exacerbated by large variations in token efficiency across frameworks. There is a strong positive correlation between LLM inference time and token consumption. <br/>
          </Text>
          <Title order={4}><span style={{color: 'red'}}>[Unique]</span> Underlying Mechanism: Appending Full History to Prompts</Title>
          <Text>
          We observe that CrewAI and AgentScope elevate token usage arises from their design choice. In their implementation, the LLM stores all intermediate inputs and outputs in memory and appends this memory to each new prompt. As a result, the prompt length grows with every step of reasoning, causing a high token consumption. 
          </Text>
          <Title order={4}><span style={{color: 'red'}}>[Unique]</span> Underlying Mechanism: Using Verbose Prompts</Title>
          <Text>
          In the ReAct workflow, LlamaIndex consumes a significant amount of prompts, primarily due to the observation portion returned to the LLM after tool invocation. Additionally, for queries that fail to execute successfully, the number of reasoning and action iterations increases, leading to a corresponding growth in the observation-related prompts. 
          </Text>
          <Title order={4}>Potential Optimizations</Title>
          <Text>
          While LLM inference remains the dominant bottleneck in most of our benchmarks, more complex, tool-heavy scenarios, such as document analysis or multimodal agent tasks, may shift the performance bottleneck toward tool execution. Frameworks aiming to support such use cases must pay greater attention to optimizing tool orchestration and external API integration.
          </Text>
          {/* <FailureNum/> */}
        </div>
        <div>
          <Title order={4}>In-depth Analysis</Title>
          <Text>
          ● <span style={{ fontWeight: 'bold' }}>AgentScope and CrewAI frequently use the Web tool for precise results</span>, leading to higher token usage due to long text outputs. In our tests, they called the Web tool 494 and 608 times, far more than other frameworks (max 102).<br />
          ● <span style={{ fontWeight: 'bold' }}>AgentScope often writes and executes code to solve problems</span>, which requires returning large code blocks, increasing token usage. It used the code execution tool 122 times, while others used it no more than 21 times. <br/> <br/>
          AgentScope stands out by retaining memory across queries, continuously appending prior interactions to the prompt. Unlike earlier tests that re-instantiated the Agent to avoid memory buildup, running 9 GAIA queries without resets confirmed clear memory accumulation. <br />
          </Text>
          <MemAcc/>
          <Text> <br />
          In the MoA study, we observed that some frameworks invoke LLMs sequentially. We explored the impact of changing the order of LLM calls on token consumption. there are some results: <br /><br />
          </Text>
          <MoaSeq/>
          <Text>
          Note: GLM, Qwen, and DS refer to GLM-Z1-Rumination-32B-0414, Qwen2.5-7B-Instruct, and DeepSeek-V3, respectively.
          </Text>
        </div>

      </>
    ),
  },
  // {
  //   emoji: <IconDimensions color="#41B755" />,
  //   value: "Token consumption may vary across frameworks even when executing the same workflow, owing to differences in implementation strategies.",
  //   description: (
  //     <>
  //       <TableGaiaDetailedResults />
  //       <TableHumanEvalDetailedResults />
  //       <AlpacaEvalTable/>
  //       {/* <figure>
  //         <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
  //           <Image radius="md" src="figure3.jpg" alt="" h="auto" w="100%" fit="contain" style={{ maxWidth: "700px" }} />
  //         </div>
  //         <Text ta="center" c="dimmed">
  //           Figure 3. Token consumption and execution time per query of different frameworks.
  //         </Text>
  //       </figure> */}
  //       <div>
  //         <Title order={4}>Key Observations</Title>
  //         <Text>
  //           In the results of ReAct workflow, it can be observed that even when using the same ReAct workflow, AgentScope exhibits a significant discrepancy in token usage between the GAIA and HumanEval datasets, with exceptionally high token consumption on GAIA. This is primarily because AgentScope includes the entire memory of the agent in the prompt during every LLM invocation. As the number of reasoning steps increases, the prompt length grows rapidly. While this issue is less apparent in the relatively simple HumanEval dataset, it becomes prominent in the more complex GAIA tasks.<br/>
  //           The high token usage observed in CrewAI's ReAct workflow can be attributed to the same reason. In fact, this issue is even more pronounced in CrewAI than in AgentScope, with significantly elevated token consumption observed across both the GAIA and HumanEval datasets.
  //         </Text>
  //         <Title order={4}>Underlying Mechanism: Overly Detailed Observations</Title>
  //         <Text>
  //           In contrast, the majority of token consumption in LlamaIndex and Pydantic arises from the observation segments returned to the LLM after tool invocations. In the GAIA dataset, where tasks are complex and involve frequent tool usage, this results in substantial prompt token overhead.
  //         </Text>
  //       </div>
  //     </>
  //   ),
  // },
  // {
  //   emoji: <IconCornerUpRightDouble color="#41B755" />,
  //   value: "Parallel invocation reduces overall runtime.",
  //   description: (
  //     <>
  //       {/* <TableModelSize /> */}
  //       {/* <figure>
  //         <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
  //           <Image radius="md" src="figure3.jpg" alt="" h="auto" w="100%" fit="contain" style={{ maxWidth: "700px" }} />
  //         </div>
  //         <Text ta="center" c="dimmed">
  //           Figure 3. Token consumption and execution time per query of different frameworks.
  //         </Text>
  //       </figure> */}
  //       <div>
  //         <Title order={4}>Takeaways:</Title>
  //         <Text>
  //           In some frameworks such as PydanticAI, the total runtime is observed to be shorter than the sum of individual tool and LLM invocation times on datasets such as GAIA and MoA. This improvement is attributed to its parallel execution architecture and asynchronous scheduling, which enables simultaneous invocation of multiple tools or LLMs, thereby effectively reducing end-to-end latency.
  //         </Text>
  //       </div>
  //     </>
  //   ),
  // },
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
          <Title order={4}>Key Observations</Title>
          <Text>
            We analyze the execution cost of various tool types across multiple LLM agent frameworks, as illustrated in Figure 4. The results reveal substantial variation in tool execution efficiency between frameworks, particularly for high-cost operations. Among all tool categories, search and figure-related tools usually incur the highest latency, often dominating total tool execution time within a workflow. 
            For instance, the figure loader takes 2.7 seconds to execute in CrewAI, but exceeds 30 seconds in AgentScope, indicating considerable framework-dependent overhead. In contrast, lightweight tools such as <span style={{ fontWeight: 'bold',fontFamily: 'monospace',backgroundColor: '#f5f5f5', padding: '2px 4px', borderRadius: '3px', color: '#d63384' }}>Text file reader</span> and <span style={{ fontWeight: 'bold',fontFamily: 'monospace',backgroundColor: '#f5f5f5', padding: '2px 4px', borderRadius: '3px', color: '#d63384' }}>doc reader</span> typically complete in under a millisecond, demonstrating minimal variance. <br/>

            Additionally, some frameworks (e.g., AgentScope) show disproportionately high total tool processing time, driven primarily by inefficient handling of image processing or multimedia tasks. This highlights the importance of optimizing high-latency tools, particularly in scenarios where tool invocation is frequent or tightly coupled with LLM inference.
          </Text>
          <Title order={4}><span style={{color: 'red'}}>[Variational]</span>Underlying Mechanism: Orchestration Depth and I/O Overhead</Title>
          <Text>  
            The pronounced disparity in execution times can be attributed to heterogeneous orchestration layers and I/O pathways across frameworks. Heavy operations, especially image-centric routines in figure-related tools, trigger large data transfers and repeated external API calls, amplifying serialization and network overhead. Frameworks with leaner orchestration logic (e.g., CrewAI) perform these steps with fewer intermediate abstractions, thereby reducing latency, whereas frameworks with deeper abstraction stacks (e.g., AgentScope) accumulate additional processing overhead. Consequently, tool latency scales not only with the intrinsic cost of the operation but also with the efficiency of each framework’s data handling, scheduling, and resource management pipelines. 
          </Text>
          <Title order={4}>Potential Optimizations</Title>
          <Text>
          While LLM inference remains the dominant bottleneck in most of our benchmarks, more complex, tool-heavy scenarios, such as document analysis or multimodal agent tasks, may shift the performance bottleneck toward tool execution. Frameworks aiming to support such use cases must pay greater attention to optimizing tool orchestration and external API integration.
          </Text>
        </div>
      </>
    ),
  },
  // {
  //   emoji: <IconTool color="#41B755" />,
  //   value: "While increasing the number of tools has minimal effect on execution time, it does have a noticeable impact on LLM token usage.",
  //   description: (
  //     <>
  //       <div>
  //         {/* <TableLeakageLlama /> */}
  //         <p></p>
  //         <Title order={4}>Takeaways:</Title>
  //         <Text>We evaluated the impact of scaling the number of tools by adding 10 and 20 additional tools—unrelated to the GAIA task (e.g., simple utilities such as addition or matrix multiplication)—to different frameworks under the same experimental setup. The results are as follows:</Text>
  //         <TableIrrelevantTime />
  //         <TableIrrelevantToken />
  //         <Text>
  //           The reason for the cliff-like drop in the number of tokens for the LlamaIndex framework is that, as the number of tools increases, the model fails to accurately select the appropriate tool for execution. For example, under the setting with no additional tools, the web tool was successfully called 172 times, while under the settings with 10 and 20 additional tools, it was only called 136 and 132 times, respectively. As a result of the model’s inability to select the correct tool, the depth of ReAct execution significantly decreases, ultimately leading to a dramatic drop in token usage. 
  //         </Text>
          
  //         <Text>
  //           <br />
  //           In addition, we observed that as the number of tools increases, some test samples encountered execution failures due to the LLM exceeding its context window. The detailed experimental results are shown in the table below: <br /><br />
  //         </Text>
  //         <IrrelevantFailure />

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
          <Title order={4}>Key Obervations</Title>
          <Text>
          While RAG workflows are increasingly adopted to enhance factual grounding, our benchmarking reveals that database performance, particularly during embedding and retrieval, is a critical yet frequently neglected factor. Figure....... illustrates the variation in retrieval latency across frameworks, exposing significant performance disparities.
          </Text>
          <Title order={4}><span style={{color: 'red'}}>[Variational]</span>Underlying Mechanism: Embedding-Pipeline Design</Title>
          <Text>
          One notable example is AgentScope, which demonstrates high vectorization latency. This stems from its design: during the database setup phase, AgentScope invokes a large embedding model to compute dense vector representations. The latency of this embedding model, often implemented as a separate LLM call, substantially increases the overall vectorization time. Similarly, Phidata exhibits elevated vectorization latency due to its use of a two-step pipeline. First, its built-in <span style={{ fontWeight: 'bold',fontFamily: 'monospace',backgroundColor: '#f5f5f5', padding: '2px 4px', borderRadius: '3px', color: '#d63384' }}>csv_tool</span> loads documents row-by-row; then, it applies a <span style={{ fontWeight: 'bold',fontFamily: 'monospace',backgroundColor: '#f5f5f5', padding: '2px 4px', borderRadius: '3px', color: '#d63384' }}>SentenceTransformer</span> model to compute embeddings. Our benchmark confirms that Phidata's <span style={{ fontWeight: 'bold',fontFamily: 'monospace',backgroundColor: '#f5f5f5', padding: '2px 4px', borderRadius: '3px', color: '#d63384' }}>csv_tool</span> itself is a relatively slow component, compounding the overall vectorization time. From our observation, vector databases such as Faiss are good choices.
          </Text>
          <Title order={4}>Potential Optimizations</Title>
          <Text>
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
          <Title order={4}>Key Observations</Title>
          <Text>
            In multi-agent frameworks, communication between agents is often overlooked as a source of inefficiency. However, our analysis reveals large discrepancies in communication size across frameworks, as shown in Table 2. These differences arise not only from framework-specific message formats but also from architectural design choices.
          </Text>
          <Title order={4}><span style={{color: 'red'}}>[Unique]</span>Underlying Mechanism: Inefficient Communication Architecture</Title>
          <Text>
            Frameworks such as CrewAI, which adopt a centralized communication pattern, exhibit significantly higher communication costs. In these designs, a central agent coordinates multiple sub-agents by sequentially delegating subtasks and collecting responses. For example, in CrewAI's MoA implementation, the center agent queries three sub-agents in sequence and aggregates their outputs. Each LLM invocation by the center agent accumulates prior messages in memory, causing the prompt size and the communication payload to grow linearly with the number of sub-agents. 
          </Text>
          <Title order={4}><span style={{color: 'red'}}>[Unique]</span>Underlying Mechanism: Package Design</Title>
          <Text>
          In addition to the core message, Phidata returns a duplicated <span style={{ fontWeight: 'bold',fontFamily: 'monospace',backgroundColor: '#f5f5f5', padding: '2px 4px', borderRadius: '3px', color: '#d63384' }}>content</span> field that mirrors the final message. This, combined with additional metadata fields, results in large communication sizes.
          </Text>
          <Title order={4}>Potential Optimizations</Title>
          <Text>  
            Future agent frameworks should consider decentralized communication protocols and agent sampling to reduce unnecessary transfer overhead.
          </Text>
        </div>
      </>
    ),
  },
];



const scalability = [
  {
    emoji: <IconPackage color="#41B755" />,
    value: "MoA scalability is governed by agent-invocation policy.",
    description: (
      <>
        <div>
          {/* <TableComSize /> */}
          <AlpacaEvalScalabilityTable />
          <p></p>
          <Title order={4}>Key Observations</Title>
          <Text>
          We evaluate the scalability of the MoA workflow by increasing the number of worker agents from 3 to 6, 9, 12, and 15, while keeping the additional agents identical in configuration to the original ones. Table 3 reports the results on AlpacaEval. For frameworks such as AgentScope and LangChain, both execution time and token consumption grow almost linearly with the number of worker agents, reflecting sequential scheduling policies. In contrast, frameworks like PydanticAI exhibit a significantly slower growth rate, suggesting a fundamentally different invocation strategy. 
          </Text>
          <Title order={4}><span style={{color: 'red'}}>[Variational]</span>Underlying Mechanism: Parallel Execution</Title>
          <Text>
          In PydanticAI, the observed runtime is shorter than the aggregate of individual tool and LLM invocation times. This efficiency stems from its parallel execution architecture: agent calls and tool invocations are dispatched asynchronously, allowing multiple operations to overlap in time. As a result, the end-to-end latency is effectively bounded by the slowest operation rather than the sum of all operations.
          </Text>
          <Title order={4}>Potential Optimizations</Title>
          <Text>  
          Our analysis indicates that task-level parallelism remains largely underexplored in current frameworks. Incorporating asynchronous scheduling and concurrent invocation can substantially improve scalability in multi-agent workflows, especially under real-world conditions where latency and throughput are critical.
          </Text>
        </div>
      </>
    ),
  },
  
];

const scalability2 = [
  {
    emoji: <IconPackage color="#41B755" />,
    value: "Increasing the number of tools has only a minimal impact on execution time across frameworks, but it leads to a noticeable variation in LLM token usage and can cause execution failures when the input exceeds the LLM’s maximum context length.",
    description: (
      <>
        <div>
          {/* <TableComSize /> */}
          <LeetCodeToolsEffectTable />
          <LeetCodeEffectTable />
          <NumberOfFailedRunsTable />
          <p></p>
          <Title order={4}>Key Observations</Title>
          <Text>
            We conduct scalability experiments on the GAIA dataset, examining the effect of varying the number of tools across different frameworks. In addition to each framework’s original tool set, we introduce extra LeetCode-solving tools, which are irrelevant for solving the GAIA dataset. The results in Table 19 and 20 show that while increasing the number of tools has only a minimal impact on execution time, it leads to a noticeable increase in LLM token usage. In addition, it can be observed that as the number of tools increases, some test samples encountered execution failures because the input exceed the LLM’s maximum context length (see Table 21). Notably, in the LlamaIndex framework, the addition of the extra LeetCode-solving tools results in a significant decrease in both token consumption and execution time. 
          </Text>
          <Title order={4}><span style={{color: 'red'}}>[Common]</span>Underlying Mechanism: Reduced Tool-Call Tendency</Title>
          <Text>
          Increasing the size of the tool inventory paradoxically reduces the agent’s propensity to invoke tools. On the same test set, adding 10 or 20 LeetCode-solving tools raises the number of queries that make no tool calls from 17 (no extras) to 27 and 25, respectively. Consistent with this shift, the total tool-call counts drop from 630 (0 extra tools) to 454 and 467 (10 and 20 extra tools). These patterns indicate a shallower ReAct trajectory, which in turn reduces LLM token consumption and overall execution time.
          </Text>
          <Title order={4}>Potential Optimizations</Title>
          <Text>  
          Building on these findings, agent frameworks should emphasize relevance-aware tool-set curation and dynamic exposure to tools to contain prompt growth and reduce the risk of context-length failures. Regulating ReAct depth and enforcing explicit token budgets can curb unnecessary tool exploration, while compact, standardized tool specifications help decouple token usage from catalog size.
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
          <Title order={4}>Key Observations</Title>
          <Text>
            In our evaluation, we find that when the model skips tool invocation and instead provides a direct answer (this happens especially with some of the simpler queries in the HumanEval dataset), the framework retries the prompt, often multiple times. Each retry includes previous failed attempts in the context, leading to a rapid increase in prompt length and token consumption as well as a lower likelihood of producing a clean, valid output on later attempts.
          </Text>
          <Title order={4}><span style={{color: 'red'}}>[Variational]</span>Underlying Mechanism: Structured Output Misalignment</Title>
          <Text>
          Some frameworks, such as LlamaIndex, require tool inputs to conform to a strict dictionary format. However, GPT-4o does not consistently produce structured outputs that align with these expectations, leading to frequent tool invocation failures. This issue can be partially mitigated if the framework explicitly enforces the format requirement during the registration phase or input schema definition. In contrast, other frameworks such as LangChain adopt stricter enforcement mechanisms. ReAct-style agents in these systems perform rigid output validation and initiate automatic retries when the model's response deviates from the expected invocation structure. While such mechanisms increase robustness against malformed outputs, they may backfire in certain scenarios.
          </Text>
        </div>
      </>
    ),
  },
  
];

const accuracy2=[
  {
    emoji: <IconComponents color="#41B755" />,
    value: "Token consumption may vary across frameworks even when executing the same workflow, owing to differences in implementation strategies.",
    description: (
      <>
        <div>
          {/* <TableAccuracy /> */}
          <p></p>
          <Title order={4}>Key Observations</Title>
          <Text>
          In the results of ReAct workflow, it can be observed that even when using the same ReAct workflow, AgentScope exhibits a significant discrepancy in token usage between the GAIA and HumanEval datasets, with exceptionally high token consumption on GAIA. This is primarily because AgentScope includes the entire memory of the agent in the prompt during every LLM invocation. As the number of reasoning steps increases, the prompt length grows rapidly. While this issue is less apparent in the relatively simple HumanEval dataset, it becomes prominent in the more complex GAIA tasks. <br/>
          The high token usage observed in CrewAI's ReAct workflow can be attributed to the same reason. In fact, this issue is even more pronounced in CrewAI than in AgentScope, with significantly elevated token consumption observed across both the GAIA and HumanEval datasets.
          </Text>
          <Title order={4}><span style={{color: 'red'}}>[Unique]</span> Underlying Mechanism: Overly Detailed Observations</Title>
          <Text>
          In contrast, the majority of token consumption in LlamaIndex and Pydantic arises from the observation segments returned to the LLM after tool invocations. In the GAIA dataset, where tasks are complex and involve frequent tool usage, this results in substantial prompt token overhead.
          </Text>
        </div>
      </>
    ),
  },
];



const tradeoff = [
  {
    emoji: <IconComponents color="#41B755" />,
    value: "The complete absence of output constraints in LLMs may lead to tool invocation failures, whereas excessively strict output validation can incur substantial token overhead and decrease the response success rate.",
    description: (
      <>
        <div>
          {/* <TableAccuracy /> */}
          <CrewAIMemoryWindowTable />
          <p></p>
          <Title order={4}>Key Observations</Title>
          <Text>
          To investigate whether the built-in historical memory of the CrewAI framework affects accuracy, we compared four settings on the GAIA dataset: (i) using 1 memory window size, (ii) using 25 memory window size, (iii) using 35 memory window size, and (iv) using default memory window size. Results are shown in Table 6.
          </Text>
          <Title order={4}><span style={{color: 'red'}}>[Unique]</span>Underlying Mechanism: Accuracy-Efficiency Tradeoff</Title>
          <Text>
          Task accuracy reaches its peak when an appropriate memory window size is selected. 
          </Text>
        </div>
      </>
    ),
  },
];


const reproducibility = [
  {
    emoji: <IconComponents color="#41B755" />,
    value: "Experimental reproducibility is underpinned by the stability of token usage, while variability arises from stochastic tool behaviors and fluctuating LLM invocation dynamics.",
    description: (
      <>
        <div>
          {/* <TableAccuracy /> */}
          <HumanEvalDetailedResultsTable />
          <HumanEvalRun2Table />
          <HumanEvalRun3Table />
          <GAIARun1Table />
          <GAIARun2Table />
          <GAIARun3Table />
          <figure>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <Image radius="md" src="Figure8.jpg" alt="" h="auto" w="100%" fit="contain" style={{ maxWidth: "700px" }} />
            </div>
            <Text ta="center" c="dimmed">
              Figure 8. Consistency of Token Consumption and Latency in Repeated Experiments (HumanEval)
            </Text>
          </figure>
          <figure>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <Image radius="md" src="Figure9.jpg" alt="" h="auto" w="100%" fit="contain" style={{ maxWidth: "700px" }} />
            </div>
            <Text ta="center" c="dimmed">
              Figure 9. Consistency of Token Consumption and Latency in Repeated Experiments (GAIA)
            </Text>
          </figure>
          <p></p>
          <Title order={4}>Key Observations</Title>
          <Text>
          To verify the reliability and reproducibility of our results, we conduct repeated experiments on the HumanEval and GAIA datasets. The outcomes are reported in Table 8, 24, 25 for HumanEval and in Table 26, Table 27, Table 28 for GAIA.
          As illustrated by the error bars in Figure 8 and 9, the token consumption in our experiment is relatively stable. In general, the execution time is usually positively related to the token consumption.
          </Text>
          <Title order={4}><span style={{color: 'red'}}>[Unique]</span>Underlying Mechanism: Stochastic Tool Behaviors</Title>
          <Text>
          Figure 9 indicates that the LlamaIndex framework yields a relatively high standard deviation on the GAIA dataset. This can be attributed to the stochastic nature of tool invocations and the consequent variations in the number of LLM invocation rounds. 
          </Text>
          <Title order={4}><span style={{color: 'red'}}>[Unique]</span>Underlying Mechanism: Fluctuating LLM invocation dynamics</Title>
          <Text>
            The inherent randomness of certain LlamaIndex built-in tools—such as the use of whisper in audio-visual models—further amplifies this effect, resulting in a larger standard deviation in the GAIA test results.<br/>
            Nevertheless, the overall trend remains reproducible.
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

  const items_accuracy2 = accuracy2.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  const items_tradeoff = tradeoff.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  const items_scalability = scalability.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  const items_scalability2 = scalability2.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  const items_reproducibility = reproducibility.map((item) => (
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
      <Text>
        This page documents the insights gathered during the experimentation process, with each insight accompanied by explanations of the Key Observations and the Underlying Mechanisms. The underlying mechanisms are categorized as follows: <br/>
        <span style={{ fontWeight: 'bold' }}>Common Mechanisms</span> represent fundamental patterns or bottlenecks that are consistent across all agent frameworks. <br/>
        <span style={{ fontWeight: 'bold' }}>Variational Mechanisms</span> arise from differing design choices in implementing core agent functionalities, which lead to significant performance variations between frameworks. <br/>
        <span style={{ fontWeight: 'bold' }}>Unique Mechanisms</span> are idiosyncratic to a specific framework, often stemming from a particular architectural decision or optimization that is not found elsewhere, thereby defining its unique performance profile.
      </Text>

      <Title order={2} className={css.pagetitle}>
        Common Insights
      </Title>

      <Title order={3} className={css.pagetitle}>
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

      <Title order={3} className={css.pagetitle}>
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

      

      

      <Title order={3} className={css.pagetitle}>
        Scalability
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
          {items_scalability2}
        </Accordion>
      </Stack>

    

      <Title order={3} className={css.pagetitle}>
        Reproducibility
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
          {items_reproducibility}
        </Accordion>
      </Stack>

      <Title order={2} className={css.pagetitle}>
        Variational Insights
      </Title>
      
      <Title order={3} className={css.pagetitle}>
        Scalability
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
          {items_scalability}
        </Accordion>
      </Stack>
      

      <Title order={3} className={css.pagetitle}>
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

      <Title order={3} className={css.pagetitle}>
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


      <Title order={2} className={css.pagetitle}>
        Unique Insights
      </Title>


      <Title order={3} className={css.pagetitle}>
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


      <Title order={3} className={css.pagetitle}>
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
          {items_accuracy2}
        </Accordion>
      </Stack>

      <Title order={3} className={css.pagetitle}>
        Accuracy-Efficiency Tradeoff
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
          {items_tradeoff}
        </Accordion>
      </Stack>

    </Container>
  );
}
