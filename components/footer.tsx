import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import { IconBrandGithub, IconClipboardData, IconReportAnalytics } from "@tabler/icons-react";
import classes from "./footer.module.css";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          {/* <MantineLogo size={30} /> */}
          <p>AgentRace</p>
          <Text size="xs" c="dimmed" className={classes.description}>
          The first benchmark specifically designed to systematically evaluate the efficiency of LLM agent frameworks across representative workloads.
          </Text>
        </div>

        {/* <div>
          <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
            <ActionIcon
              onClick={(event) => {
                window.open("https://github.com/QinbinLi/LLM-PBE");
              }}
              size="lg"
              color="gray"
              variant="subtle"
            >
              <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              onClick={(event) => {
                window.open("https://umami.xtra.science/share/9uV9uTMOpbgvtlqz/llm-pbe.github.io");
              }}
              size="lg"
              color="gray"
              variant="subtle"
            >
              <IconReportAnalytics style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          </Group>
        </div> */}
      </Container>
    </footer>
  );
}
