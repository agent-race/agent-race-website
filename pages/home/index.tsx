import { HeroText } from "@/components/HeroText";
import {
  Blockquote,
  Container,
  rem,
  Stack,
  Text,
  Space,
  Code,
  Image,
  Card,
  Divider,
  Grid,
  Group
} from "@mantine/core";
import css from "../common.module.css";
import { useScrollIntoView } from "@mantine/hooks";
import { IconBlockquote } from "@tabler/icons-react";
import { Title } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";

export default function Home() {
  const icon = <IconBlockquote />;
  const bibtext = `
@misc{
}`;

  const procLine = (line: string, key: number) => {
    let space = <Space w="md" />;
    if (line.startsWith("}") || line.startsWith("@")) {
      space = <></>;
    }
    return (
      <div style={{ display: "flex" }} key={key}>
        {space}
        <Text>{line}</Text>
      </div>
    );
  }; 

  const display = bibtext.split("\n").map((line, key) => procLine(line, key));

  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 100,
    duration: 1000,
  });

  return (
    <div>
      {HeroText(scrollIntoView)}

      <Container size="lg">
        <Stack bg="var(--mantine-color-body)" gap="xl">
          {/* 页面简述 */}
          <Group justify="center" mb="lg">
            <IconArrowDown size={28} color="#41B755" />
            <Text ta="center" size="lg" >
              Explore the core <strong>architecture</strong> and <strong>pipeline</strong> design below.
            </Text>
          </Group>
          {/* <Divider /> */}

          {/* Architecture Section */}
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={2} className={css.pagetitle} mb="sm">
              The Architecture of AgentRace
            </Title>
            <Text color="dimmed" mb="md">
              AgentRace comprises four interconnected modules, including{" "}
              <strong>Data</strong>,{" "}
              <strong>Agent</strong>,{" "}
              <strong>Framework</strong>, and{" "}
              <strong>Analysis</strong>, designed to capture
              diverse agent frameworks, execution workflows, task complexities, and
              performance analysis.
            </Text>
            <Image src="system_components.png" alt="System Architecture of AgentRace" radius="md" />
          </Card>

          {/* <Divider /> */}

          {/* Pipeline Section */}
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={2} className={css.pagetitle} mb="sm">
              The Pipeline of AgentRace
            </Title>
            <Text color="dimmed" mb="md">
            The pipeline is fully modular and consists of three main stages: (1) configuration, (2) execution and monitoring, and (3) analysis and visualization. <br/>
            ● In the configuration stage, users specify experimental parameters (e.g., framework, workflow, dataset, and tools) in a YAML file. <br/>
            ● The executor parses this file and instantiates the corresponding agent with unified interfaces. 
            During execution, the agent interacts with the chosen framework and tools under controlled settings, while a monitoring layer is dynamically attached to capture runtime behavior. <br/>
            ● Finally, the analysis stage aggregates the collected traces into structured logs and performance visualizations for reproducibility and cross-framework comparison.
            </Text>
            <Image src="pipeline.jpg" alt="Pipeline of AgentRace" radius="md" />
          </Card>

          <Divider />

          {/* 引用/致谢部分 */}
          <div ref={targetRef}>
            {/* 如果你将来需要引用文献，直接解开注释 */}
            {/* 
            <Blockquote
              className={css.bibtext}
              color="blue"
              radius="md"
              iconSize={30}
              icon={icon}
              mt="xl"
            >
              {display}
            </Blockquote> 
            */}
          </div>

          {/* TODO: 添加 Acknowledgements */}
        </Stack>
      </Container>
    </div>
  );
}