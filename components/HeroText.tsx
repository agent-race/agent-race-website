import { Title, Text, Button, Container, Badge, rem, Anchor } from "@mantine/core";

import { Dots } from "./Dots";
import classes from "./HeroText.module.css";
import { useRouter } from "next/router";
import { IconAward, IconCertificate, IconBolt } from "@tabler/icons-react";

export function HeroText(scrollIntoView: any) {
  const router = useRouter();
  return (
    <Container className={classes.wrapper} size={1400}>
      {/* <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} /> */}
      <IconBolt className={classes.dots} style={{ left: 0, top: 0 }} />
      <IconBolt className={classes.dots} style={{ left: 60, top: 0 }} />
      <IconBolt className={classes.dots} style={{ left: 0, top: 140 }} />
      <IconBolt className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
        AgentRace: Benchmarking  {" "}

          <Text component="span" className={classes.highlight} inherit>
          Efficiency
          </Text>
          <br />{" "} in LLM Agent Frameworks

        </Title>
        {/* <Title order={3} className={classes.subtitle}>Published in VLDB 2024</Title> */}
        {/* <Anchor mb="sm" href="vldb2024_nomination_Qinbin.pdf">

        <Badge variant="light" color="red" leftSection={<IconAward style={{width:rem(12), height:rem(12)}}></IconAward>}> Best Research Paper Nomination!</Badge>
        </Anchor> */}

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
          The first benchmark specifically designed to systematically evaluate the efficiency of LLM agent frameworks across representative workloads. 
          <br/>

          </Text>
          <Text size="xs" c="#ff8787" className={classes.description}>WARNING: This paper contains model outputs that may be considered offensive.</Text>
        </Container>

        <div className={classes.controls}>
          {/* <Button
            className={classes.control}
            size="lg"
            variant="default"
            color="gray"
            onClick={() =>
              scrollIntoView({
                alignment: "center",
              })
            }
          >
            Cite the paper
          </Button> */}
          <Button className={classes.control} size="lg" variant="danger" onClick={()=>{
            router.push("/insights");
          }}>
            {" "}
            See our insights
          </Button>
        </div>
      </div>
    </Container>
  );
}
