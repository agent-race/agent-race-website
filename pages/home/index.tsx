import { HeroText } from "@/components/HeroText";
import { Blockquote, Container, rem, Stack, Text, Space, Code, Image } from "@mantine/core";
import css from "../common.module.css";
import { useScrollIntoView } from "@mantine/hooks";
import { IconBlockquote } from "@tabler/icons-react";

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
      <Container>
        <Stack bg="var(--mantine-color-body)" gap="sm">
          <Image src="system_components.png"></Image>
          {/* <p className={css.block_blue}>home_page place holder</p>
          <p className={css.block_green}>home_page place holder</p>
          <p className={css.block_blue}>home_page place holder</p>
          <p className={css.block_green}>home_page place holder</p>
          <p className={css.block_blue}>home_page place holder</p>
          <p className={css.block_green}>home_page place holder</p>
          <p className={css.block_blue}>home_page place holder</p> */}
          <div ref={targetRef}>
            {/* <Blockquote className={css.bibtext} color="blue" radius="md" iconSize={30} icon={icon} mt="xl">
              {display}
            </Blockquote> */}
          </div>

          {/* TODO: 添加 Acknowledgements */}
        </Stack>
      </Container>
    </div>
  );
}
