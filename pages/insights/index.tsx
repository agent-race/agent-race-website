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

const section4 = [
  {
    emoji: <IconDimensions />,
    value: "Effect of Model Size",
    description: (
      <>
        {/* <TableModelSize /> */}
        <figure>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Image radius="md" src="fig4.dea.jpg" alt="" h="auto" w="100%" fit="contain" style={{ maxWidth: "500px" }} />
          </div>
          <Text ta="center" c="dimmed">
            Figure 4. The model utility (ARC-Easy), data extraction accuracy on Enron, and data extraction accuracy on a synthetic email dataset across different Pythia model sizes.
          </Text>
        </figure>
        <div>
          <Title order={4}>Takeaways:</Title>
          <Text>
            Within the same series of LLMs trained on identical data in the same order, as the size of the models increases, their capacities on language tasks also increase. Concurrently, these larger models exhibit enhanced extraction accuracy with existing Data Extraction Attacks, due to their
            advanced memorization capacities. Notably, the rate of increase in data extraction accuracy on Enron out-paces the improvements in ARC-Easy for Pythia, suggesting a growing privacy risk as models scale.
          </Text>
        </div>
      </>
    ),
  },
  {
    emoji: <IconFeather />,
    value: "Effect of Data Characteristics",
    description: (
      <>
        <div>
          <Title order={4} className={css.pagetitle}>
            Position and Type of Private Data
          </Title>
          <TableDeaDifferentPosition />
          <p></p>
          <Title order={4} className={css.pagetitle}>
            Data Length
          </Title>
          <TableMiaDifferentLength />
          <Text ta="center" c="dimmed">
            For Enron, short emails have higher perplexity due to their informal nature and variability, which provides less context and makes them harder for the model to predict accurately. For ECHR, longer legal documents have higher perplexity due to their complexity and dense information,
            making them challenging for the model.
          </Text>
          <Text ta="center" c="dimmed">
            Higher perplexity indicates the model struggles more, creating distinct patterns between training and non-training data, leading to increased MIA AUC and higher privacy risks for these samples.
          </Text>
          <p></p>
          <Title order={4} className={css.pagetitle}>
            Pretraining data size
          </Title>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Image radius="md" src="fig6.dea_token.png" alt="dea_accuracy_with_diff_tokens" h="auto" w="100%" fit="contain" style={{ maxWidth: "600px" }} />
          </div>
          <Text ta="center" c="dimmed">
            Figure 6. DEA accuracy with different training tokens. <br />
            Besides the model size, when increasing the number of training tokens, LLM’s memorization capacity also increases. Consequently, this leads to a rise in data extraction accuracy
          </Text>
          <p></p>
          <Title order={4}>Takeaways:</Title>
          <Text>
            Our findings reveal that data type, data position, data length, and pretraining data size collectively impact privacy risks on Llama-2. Data with richer contextual information (e.g., locations) tends to be more susceptible to memorization during fine-tuning. Private data at the end of a sample is more vulnerable to extraction. Data samples that are harder to predict, indicated by higher perplexity, are more easily identified in MIAs. Additionally, increasing the size of the training data enhances the model’s memorization capacity, leading to higher privacy risks. These insights highlight the necessity for targeted privacy strategies that address the specific characteristics of different data types in LLMs.
          </Text>
        </div>
      </>
    ),
  },
  {
    emoji: <IconShieldLock />,
    value: "Practicality of Privacy-Enhancing Technologies (PETs) on Fine-tuning of LLMs",
    //
    description: (
      <>
        <div>
          <TableMiaDeaEchr />
          <p></p>
          <Title order={4}>Takeaways:</Title>
          <Text>Our investigation shows that scrubbing and DP effectively reduce the privacy risks of MIA while degrading model performance. This underscores the need for further research to develop techniques that achieve a better privacy-utility tradeoff.</Text>
        </div>
      </>
    ),
  },
  {
    emoji: <IconTank />,
    value: "Privacy Risks over Different Attacks",
    description: (
      <>
        <div>
          <TablePrivacyRisksOverDifferentAttacks />

          <p></p>
          <Title order={4}>Takeaways:</Title>
          <Text>While model-generated attack prompts are more effective than manually created ones for jailbreak attacks, the evaluated poisoning attack is less effective than pure querybased method, potentially due to suboptimal poison data pattern design. Moreover, the trend of attack success rate changes with model sizes is consistent among different types of attacks.</Text>
        </div>
      </>
    ),
  },
];

const section5 = [
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

const section6 = [
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
  const items_section4 = section4.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  const items_section5 = section5.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  const items_section6 = section6.map((item) => (
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
          {items_section4}
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
          {items_section5}
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
          {items_section6}
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
          {items_section6}
        </Accordion>
      </Stack>

      
    </Container>
  );
}
