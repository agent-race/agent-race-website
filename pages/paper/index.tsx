import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Text } from '@mantine/core';
export default function Page() {
    const target = '/AgentRace.pdf';
    const {push} = useRouter();
    useEffect(() => {
        push(target);
    }, []);
    return <Text fw={700} ta="center" mt="xl">If not redirected, please view the paper at https://llm-pbe.github.io{target}</Text>;
    // return <Text fw={700} ta="center" mt="xl">Paper is currently unavailable, please wait for our camera-ready version.</Text>
}
