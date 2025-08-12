import { Container, Image, rem, Stack, Text, Title, Code } from "@mantine/core";
import { CodeHighlight } from '@mantine/code-highlight';
import '@mantine/code-highlight/styles.css';
import css from "../common.module.css";
import Chart from "chart.js/auto";
import MyLineChart from "./chart";
import ScatterPlot from "./scatter";
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
        Bugs/Features
      </Title>
      <Text>This page summarizes the observed abnormal behaviours of studied frameworks during our experiments.<br />
      </Text>

      <Title order={2} className={css.pagetitle}>
        LangChain
      </Title>
      <Stack bg="var(--mantine-color-body)" gap="sm">
        <Image src="langchain_abs.png" alt="defenses" radius="md" h="auto" w="50%" fit="contain" mx="auto"/>
        <Text>LangChain's high level of abstraction and encapsulation posed challenges in measuring specific metrics during our experiments.<br />
        </Text>
        <Image src="langchain_bug.png" alt="defenses" radius="md" h="auto" w="100%" fit="contain" mx="auto"/>
        <Text>
        Additionally, LangChain occasionally terminated processes prematurely after reading files from the GAIA dataset, returning the file content directly rather than proceeding with the expected operations.
        </Text>
      </Stack>

      <Title order={2} className={css.pagetitle}>
        AutoGen
      </Title>
        <Text>Due to the default system prompt being relatively long and containing irrelevant instructions, the RAG workflow may consume unnecessary tokens or produce unexpected errors (e.g., attempting to invoke non-existent tools). Therefore, it is necessary for users to customize the system prompt.</Text>
        

      <Title order={2} className={css.pagetitle}>
        AgentScope
      </Title>
      <Stack bg="var(--mantine-color-body)" gap="sm">
        <Text>
        AgentScope’s image and audio processing tools internally rely on OpenAI models, causing their execution time to partially overlap with that of the LLM itself. This overlap can lead to inflated or inaccurate measurements of LLM processing time. Researchers and practitioners should be mindful of this issue when conducting time-based evaluations involving AgentScope.<br />
        </Text>
        <CodeHighlight code={exampleCode} language="python"  />
        <Text>
        Meanwhile, AgentScope's vector database module, LlamaIndexKnowledge, is implemented based on the BM25Retriever from the llamaindex library. However, the original implementation relies on an outdated version of llamaindex, and recent updates to the library introduced structural changes that break compatibility with the original import statements.<br />
        </Text>
        <CodeHighlight code={exampleCode2} language="python"  />
        <Text>
        To ensure a consistent environment without modifying the framework’s built-in vector database logic, we resolved the issue by duplicating the LlamaIndexKnowledge module and updating the import paths to match the newer llamaindex version.
        </Text>
        <CodeHighlight code={exampleCode3} language="python"  />
      </Stack>  

      <Title order={2} className={css.pagetitle}>
        CrewAI
      </Title>

      <Text>When our MOA invokes a large number of agents (&gt;=12), CrewAI system occasionally fails to call all agents completely during execution as intended. For example, when we request 12 sub-agents to be activated, some queries may only trigger 9 or fewer agents.</Text>


      <Title order={2} className={css.pagetitle}>
        Llamaindex
      </Title>
      <Stack bg="var(--mantine-color-body)" gap="sm">
        <Image src="llamaindex_bug.jpg" alt="radar" radius="md" h="auto" w="75%" fit="contain" mx="auto"/>
        <Text>LlamaIndex frequently fails to invoke tools correctly, primarily due to the lack of prompt constraints and insufficient post-processing checks on LLM outputs. Without explicit guidance and validation mechanisms, the LLM often produces outputs that do not conform to the expected dictionary format, resulting in tool invocation failures.</Text>
      </Stack>

      <Title order={2} className={css.pagetitle}>
        Phidata
      </Title>
      <Stack bg="var(--mantine-color-body)" gap="sm">
        <Image src="phidata_feature.jpg" alt="radar" radius="md" h="auto" w="100%" fit="contain" mx="auto"/>
        <Text>In the ReAct workflow, Phidata passes the available tools to the LLM via the "tools" field. Unlike Llamaindex, which emphasizes the functionality and usage of tools in the system prompt, Phidata rarely invokes the code execution tool when processing queries from humaneval.</Text>
      </Stack>

      <Title order={2} className={css.pagetitle}>
        PydanticAI
      </Title>
      <Stack bg="var(--mantine-color-body)" gap="sm">
        <Image src="radar_tools.jpg" alt="radar" radius="md" h="auto" w="50%" fit="contain" mx="auto"/>
        <Image src="pydantic_bug2.jpg" alt="radar" radius="md" h="auto" w="100%" fit="contain" mx="auto"/>
        <Text>
          Within the Pydantic ReAct framework, we observed multiple simultaneous invocations of the same tool, which may lead to inefficiencies. Additionally, similar to Phidata, the code execution tool was seldom triggered.<br />
          Furthermore, the MoA implementation in the Pydantic framework is tool-based, and not all three models are invoked for every query.
        </Text>
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
