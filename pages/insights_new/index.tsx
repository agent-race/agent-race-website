import { Container, Image, rem, Stack, Text, Title, Code } from "@mantine/core";
import { Table, List } from "@mantine/core";
import { CodeHighlight } from '@mantine/code-highlight';
import '@mantine/code-highlight/styles.css';
import css from "../common.module.css";
// import { VictoryBoxPlotExample } from "./race";

// Register ChartJS components using ChartJS.register

const exampleCode = `def openai_image_to_text(
    image_urls: Union[str, list[str]],
    api_key: str,
    prompt: str = "Describe the image",
    model: Literal["gpt-4o", "gpt-4-turbo"] = "gpt-4o",
) -> ServiceResponse:
    """
    Generate descriptive text for given image(s) using a specified model, and
    return the generated text.

    Args:
        image_urls (\`Union[str, list[str]]\`):
            The URL or list of URLs pointing to the images that need to be
            described.
        api_key (\`str\`):
            The API key for the OpenAI API.
        prompt (\`str\`, defaults to \`"Describe the image"\`):
            The prompt that instructs the model on how to describe
            the image(s).
        model (\`Literal["gpt-4o", "gpt-4-turbo"]\`, defaults to \`"gpt-4o"\`):
            The model to use for generating the text descriptions.

    Returns:
        \`ServiceResponse\`:
            A dictionary with two variables: \`status\` and \`content\`.
            If \`status\` is \`ServiceExecStatus.SUCCESS\`,
            the \`content\` contains the generated text description(s).

    Example:

        .. code-block:: python

            image_url = "https://example.com/image.jpg"
            api_key = "YOUR_API_KEY"
            print(openai_image_to_text(image_url, api_key))

        > {
        >     'status': 'SUCCESS',
        >     'content': "A detailed description of the image..."
        > }
    """
    openai_chat_wrapper = OpenAIChatWrapper(
        config_name="image_to_text_service_call",
        model_name=model,
        api_key=api_key,
    )
    messages = Msg(
        name="service_call",
        role="user",
        content=prompt,
        url=image_urls,
    )
    openai_messages = openai_chat_wrapper.format(messages)
    try:
        response = openai_chat_wrapper(openai_messages)
        return ServiceResponse(ServiceExecStatus.SUCCESS, response.text)
    except Exception as e:
        return ServiceResponse(ServiceExecStatus.ERROR, str(e))

def openai_audio_to_text(
    audio_file_url: str,
    api_key: str,
    language: str = "en",
    temperature: float = 0.2,
) -> ServiceResponse:
    """
    Convert an audio file to text using OpenAI's transcription service.

    Args:
        audio_file_url (\`str\`):
            The file path or URL to the audio file that needs to be
            transcribed.
        api_key (\`str\`):
            The API key for the OpenAI API.
        language (\`str\`, defaults to \`"en"\`):
            The language of the input audio. Supplying the input language in
            [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
            format will improve accuracy and latency.
        temperature (\`float\`, defaults to \`0.2\`):
            The temperature for the transcription, which affects the
            randomness of the output.

    Returns:
        \`ServiceResponse\`:
            A dictionary with two variables: \`status\` and \`content\`.
            If \`status\` is \`ServiceExecStatus.SUCCESS\`,
            the \`content\` contains a dictionary with key 'transcription' and
            value as the transcribed text.

    Example:

        .. code-block:: python

            audio_file_url = "/path/to/audio.mp3"
            api_key = "YOUR_API_KEY"
            print(openai_audio_to_text(audio_file_url, api_key))

        > {
        >     'status': 'SUCCESS',
        >     'content': {'transcription': 'This is the transcribed text from
        the audio file.'}
        > }
    """
    try:
        import openai
    except ImportError as e:
        raise ImportError(
            "The \`openai\` library is not installed. Please install it by "
            "running \`pip install openai\`.",
        ) from e

    client = openai.OpenAI(api_key=api_key)
    audio_file_url = os.path.abspath(audio_file_url)
    with open(audio_file_url, "rb") as audio_file:
        try:
            transcription = client.audio.transcriptions.create(
                model="whisper-1",
                file=audio_file,
                language=language,
                temperature=temperature,
            )
            return ServiceResponse(
                ServiceExecStatus.SUCCESS,
                {"transcription": transcription.text},
            )
        except Exception as e:
            return ServiceResponse(
                ServiceExecStatus.ERROR,
                f"Error: Failed to transcribe audio {str(e)}",
)`;


const exampleCode2 = `from llama_index.retrievers.bm25 import BM25Retriever`
const exampleCode3 = `from llama_index.legacy.retrievers.bm25_retriever import BM25Retriever`

export default function Leaderboard() {
  return (
    <Container>
      {/* <ScatterPlot /> */}
      {/* <VictoryBoxPlotExample /> */}
      <Title order={1} className={css.pagetitle}>
        Insights
      </Title>
      <Text>This page summarizes the key insights and analyses.<br />
      </Text>

      <Title order={2} className={css.pagetitle}>
        Execution Time and Token Consumption
      </Title>
      <Stack bg="var(--mantine-color-body)" gap="sm">
        <List withPadding>
        <List.Item>
          LLM inference usually dominates runtime across all agent frameworks, and inefficient prompt engineering, such as appending full histories and using verbose prompts, exacerbates both latency and cost.
          <List withPadding>
            <List.Item>
              Two main causes of token inefficiency: <b>appending unnecessary history to prompts</b> and <b>using verbose prompts</b>.
            </List.Item>
            <List.Item>
              <b>AgentScope and CrewAI frequently use the Web tool for precise results</b>, leading to higher token usage due to long text outputs.
            </List.Item>
            <List.Item>
              <b>AgentScope often writes and executes code to solve problems</b>, which requires returning large code blocks, increasing token usage.
            </List.Item>
          </List>
        </List.Item>

        <List.Item>
          Token consumption may vary across frameworks even when executing the same workflow, owing to differences in implementation strategies.
          <List withPadding>
            <List.Item>
              Token usage varies significantly across frameworks and datasets, especially in GAIA due to its complexity. AgentScope and CrewAI (ReAct workflow) consume large tokens because they <b>include full memory or context in every LLM call</b>, leading to prompt length growth with more reasoning steps.
            </List.Item>
            <List.Item>
              <b>LlamaIndex and Pydantic mainly incur token overhead from returning detailed tool observations</b>, which becomes costly in tool-heavy GAIA tasks.
            </List.Item>
            <List.Item>
              <b>MoA workflows show differences in coordination efficiency</b>: PydanticAI reduces token usage by selectively invoking sub-agents, while CrewAI's centralized global agent accumulates tokens over multiple sequential LLM calls—an issue that worsens as sub-agent count increases.
            </List.Item>
          </List>
        </List.Item>

        <List.Item>
          Parallel invocation reduces overall runtime.
          <List withPadding>
            <List.Item>
              PydanticAI achieves shorter total runtime than the sum of individual tool and LLM calls by using <b>parallel execution and asynchronous scheduling</b>, allowing multiple components to run simultaneously and reducing end-to-end latency.
            </List.Item>
          </List>
        </List.Item>
      </List>

      <Title order={2} mt="lg">Tool Calling</Title>
      <List withPadding>
        <List.Item>
          Tool execution efficiency varies widely across frameworks, with search and figure-related tools introducing disproportionately high latency.
          <List withPadding>
            <List.Item>
              Tool execution efficiency varies significantly across frameworks, especially for high-latency tools like search and figure loaders.
            </List.Item>
            <List.Item>
              Lightweight tools (e.g., <code>txt_tool</code>, <code>docx_tool</code>) show minimal variance, while medium-latency tools (e.g., <code>pdf_tool</code>, <code>python_tool</code>) exhibit moderate differences due to implementation and I/O strategy.
            </List.Item>
            <List.Item>
              Frameworks like AgentScope suffer from excessive tool processing time, mainly due to inefficient multimedia handling, which becomes critical in tool-heavy or multimodal tasks.
            </List.Item>
            <List.Item>
              <b>LLM inference is generally the main bottleneck, but in complex scenarios, tool execution can dominate</b>, highlighting the need for better tool orchestration and API integration in such frameworks.
            </List.Item>
          </List>
        </List.Item>

        <List.Item>
          While increasing the number of tools has minimal effect on execution time, it does have a noticeable impact on LLM token usage.
          <List withPadding>
            <List.Item>
              <b>LlamaIndex shows a sharp drop in token usage as more tools are added</b>, because the model struggles to select the correct tool. This reduces the depth of ReAct reasoning and leads to fewer tool calls and lower overall token consumption.
            </List.Item>
            <List.Item>
              <b>Execution failures increase with more tools</b>, as some samples exceed the LLM’s context window, highlighting scalability issues in large tool settings.
            </List.Item>
          </List>
        </List.Item>
      </List>

      <Title order={2} mt="lg">RAG</Title>
      <List withPadding>
        <List.Item>
          While agents usually involve external databases for information retrieval, the database performance is overlooked in several frameworks. Vector database is recommended.
          <List withPadding>
            <List.Item>
              RAG workflow performance is heavily affected by <b>embedding and retrieval latency</b>.
            </List.Item>
            <List.Item>
              AgentScope shows high vectorization latency due to using a <b>large embedding model</b> as a separate LLM call during setup.
            </List.Item>
            <List.Item>
              Phidata also suffers from <b>slow vectorization</b>, caused by a <b>two-step process</b> involving a slow <code>csv_tool</code> and a SentenceTransformer model for embedding.
            </List.Item>
          </List>
        </List.Item>
      </List>

      <Title order={2} mt="lg">Communication Size</Title>
      <List withPadding>
        <List.Item>
          Inefficient communication architecture and package design lead to high communication overhead in the multi-agent setting.
          <List withPadding>
            <List.Item>
              Centralized frameworks like CrewAI incur high communication costs due to <b>sequential sub-agent coordination</b>, where prompt and message size grow with each interaction.
            </List.Item>
            <List.Item>
              Phidata adds further overhead by duplicating message content and including <b>extra metadata</b>, inflating total communication size.
            </List.Item>
          </List>
        </List.Item>
      </List>

      <Title order={2} mt="lg">Accuracy</Title>
      <List withPadding>
        <List.Item>
          The complete absence of output constraints in LLMs may lead to tool invocation failures, whereas excessively strict output validation can incur substantial token overhead and decrease the response success rate.
          <List withPadding>
            <List.Item>
              <b>Frameworks like LlamaIndex are prone to tool invocation failures</b> due to GPT-4o’s inconsistent structured outputs, as they require strict input formats; this leads to lower accuracy in complex datasets like GAIA unless input formats are explicitly enforced.
            </List.Item>
            <List.Item>
              <b>LangChain improves robustness</b> through stricter output validation and auto-retries. While such mechanisms increase robustness against malformed outputs, they may backfire in certain scenarios.
            </List.Item>
          </List>
        </List.Item>
        </List>
      </Stack>

      

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
