import { useEffect, useState } from "react";
import { Container, Group, Burger, Drawer, Menu, rem, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import classes from "./header.module.css";
import { useRouter } from "next/router";
import { IconBrandGithub, IconExternalLink, IconChartBar, IconFileLambda, IconFlagCode, IconHome, IconTrophy, IconShieldHalfFilled } from "@tabler/icons-react";

// define a type
type Link = {
  link: string;
  label: string;
  icon: JSX.Element;
};

const links = [
  { link: "/home", label: "Home", icon: <IconHome style={{ width: rem(14), height: rem(14) }} /> },
  { link: "/insights", label: "Insights", icon: <IconFlagCode style={{ width: rem(14), height: rem(14) }} /> },
  { link: "/attackanddefense", label: "Appendix", icon: <IconTrophy style={{ width: rem(14), height: rem(14) }} /> },
  { link: "/paper", label: "Paper", icon: <IconFileLambda style={{ width: rem(14), height: rem(14) }} /> },
  { link: "https://github.com/agent-race", label: "GitHub", icon: <IconBrandGithub style={{ width: rem(14), height: rem(14) }} /> },
];

export function Header() {
  const router = useRouter();
  const [active, setActive] = useState(router.pathname == "/" ? "/home" : router.pathname);

  useEffect(() => {
    setActive(router.pathname);
  }, [router.pathname]);

  
  const getLinkName = (link: Link) => {
    if (link.link.startsWith("http")) {
      return (
        <div style={{ display: "flex", gap: "4px" }}>
          {link.label}
          <IconExternalLink style={{ width: 14, height: 14 }} />
        </div>
      );
    } else {
      return <div style={{ display: "flex", gap: "4px" }}>{link.label}</div>;
    }
  };

  const items = links.map((link) => (
    <a key={link.label} href={link.link} className={classes.link} data-active={active === link.link || undefined}>
      {getLinkName(link)}
    </a>
  ));

  return (
    <header className={classes.header}>
      <title>AgentRace: Benchmarking Efficiency in LLM Agent Frameworks</title>
      <meta property='og:title' content="AgentRace: Benchmarking Efficiency in LLM Agent Frameworks" />
      <meta property='og:description' content="A toolkit crafted specifically for the systematic evaluation of data privacy risks in LLMs, incorporating diverse attack and defense strategies, and handling various data types and metrics." />
      <Container size="md" className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Text visibleFrom="xs">AgentRace: Benchmarking Efficiency in LLM Agent Frameworks</Text>
        <Text hiddenFrom="xs">AgentRace</Text> {/* 再小的话，就只显示 LLM-PBE */}
        <Group gap={5} visibleFrom="md">
          {items}
        </Group>
        <Menu>
          <Menu.Target>
            <Burger hiddenFrom="md" size="md" />
          </Menu.Target>
          <Menu.Dropdown>{items}</Menu.Dropdown>
        </Menu>
      </Container>
      <script async src="https://us.umami.is/script.js" data-website-id="5d999a58-aa74-47db-897c-1c811cb73612"></script>
      <script defer src="https://umami.xtra.science/script.js" data-website-id="81e4d054-90e2-428a-af65-f0a20b460201"></script>
    </header>
  );
}
