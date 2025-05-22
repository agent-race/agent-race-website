import { Container, Image, rem, Stack, Text, Title } from "@mantine/core";
import css from "../common.module.css";
import Chart from "chart.js/auto";
import MyLineChart from "./chart";
import TablePiiDefinitions from "../insights/table.pii.definitions";

// Register ChartJS components using ChartJS.register

export default function Leaderboard() {
  return (
    <Container>
      <Title order={1} className={css.pagetitle}>
        LangChiain
      </Title>

      <Title order={1} className={css.pagetitle}>
        AutoGen
      </Title>


      <Title order={1} className={css.pagetitle}>
        AgentScope
      </Title>

      <Title order={1} className={css.pagetitle}>
        CrewAI
      </Title>


      <Title order={1} className={css.pagetitle}>
        Llamaindex
      </Title>

      <Title order={1} className={css.pagetitle}>
        Phidata
      </Title>

      <Title order={1} className={css.pagetitle}>
        PydanticAI
      </Title>
      {/* <Title order={1} className={css.pagetitle}>
        Attacks
      </Title>
      <Stack bg="var(--mantine-color-body)" gap="sm">
        <Image src="attacks.png" alt="attacks" radius="md" h="auto" w="100%" fit="contain" />
        <Text ta="center" c="dimmed">
          Figure 8. The taxonomy of privacy-related attack methods for LLMs.
        </Text>

        <Image src="table_attack.png" alt="defense table" radius="md" h="auto" w="100%" fit="contain" />
        <Text ta="center" c="dimmed">Table 8: Summarization of existing attacks on LLMs.<br />
        Black-box/white-box: ○=white-box, ◑=gray-box, ●=black-box. <br />
        Cost: ○=high, ◑=moderate,●=low <br />
        Privacy/Scalability/Utility: ○=poor, ◑=moderate, ●=good. <br /></Text>


        <Text fw={700}>Takeaways (Data Extraction Attack):</Text>
        <Text>The effectiveness of data extraction attacks depends on several factors: the inherent memorization ability of language models (e.g., scaled with model size), the strategic crafting of prompts (e.g.,  context length and the use of jailbreaking prompts), and training data distribution (like repeated or poisoned data). While alignment techniques are successful in guiding LLMs to avoid producing sensitive information, they do not eliminate memorization and can be easily bypassed using jailbreaking prompts.</Text>
        <Text fw={700}>Takeaways (Membership Inference Attacks):</Text>
        <Text>Membership inference attacks could happen in different stages of LLM lifecycle despite the number of member/training samples. When attacking LLMs, using difficulty calibration is more effective than merely thresholding the outputs of LLMs.</Text>
        <Text fw={700}>Takeaways (Jailbreaking):</Text>
        <Text>Manually crafted jailbreaking prompts, although straightforward and convenient to use, tend to lose their effectiveness rapidly due to the swift evolution of LLMs. In contrast, methods that automatically generate jailbreaking prompts offer greater resilience against these updates, albeit at the cost of increased computational demands.</Text>
        <Text fw={700}>Takeaways (Jailbreaking - Additional):</Text>
        <Text>As the size of LLMs increases, there is a decrease in their susceptibility to jailbreaking, likely due to more rigorous policy-related instruction tuning.</Text>
      </Stack>

      <Title order={1} className={css.pagetitle}>
        Defenses
      </Title>
      <Stack bg="var(--mantine-color-body)" gap="sm">
        <Image src="defenses.png" alt="defenses" radius="md" h="auto" w="100%" fit="contain" />
        <Text ta="center" c="dimmed">
          Figure 9. The taxonomy of privacy-related defense methods for LLM.
        </Text>

        <Image src="table_defense.png" alt="defense table" radius="md" h="auto" w="100%" fit="contain" />
        <Text ta="center" c="dimmed">Table 9: Summarization of existing defenses on LLMs. <br />
        Applicable stages: ○=non-applicable, ●=applicable. <br />
        Privacy/Scalability/Utility: ○=poor, ◑=moderate, ●=good. <br />
        Cost: ○=high, ◑=moderate,●=low</Text>

        <Text fw={700}>Takeaways:</Text>
        <Text>Implementing exact machine unlearning in LLMs necessitates altering their training process, a strategy currently impractical due to the substantial computational demands of these models. In contrast, approximate machine unlearning presents a more feasible approach, typically accomplished by fine-tuning the LLMs with a specific, tailored objective.</Text>
      </Stack>

      <Title order={1} className={css.pagetitle}>
        PII types defined for scrubbing defense
      </Title>
      <Stack bg="var(--mantine-color-body)" gap="sm">
        <TablePiiDefinitions />
        <Text>
          Definitions are from <a href="https://arxiv.org/abs/2302.00539">Lukas et al., 2023</a>.
        </Text>
      </Stack> */}
    </Container>
  );
}
