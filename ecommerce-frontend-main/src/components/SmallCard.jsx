import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Grid } from '@mantine/core';

function Samllcard(props) {
    const theme = useMantineTheme();
    const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];
    const { List } = props ;
    return (
        <Grid>
            {List.map(item => (
                <Grid.Col md={6} lg={2.4}>
                    <Card shadow="sm" p="lg">
                    <Card.Section component="a" href="https://mantine.dev" target="_blank">
                        <Image
                        src={item.src}
                        height={160}
                        alt="Norway"
                        />
                    </Card.Section>

                    <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                        <Text weight={500}>Norway Fjord Adventures</Text>
                        <Badge color="pink" variant="light">
                            {item.status}
                        </Badge>
                    </Group>

                    <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                        {item.text}
                    </Text>

                    <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                        Buy Now
                    </Button>
                </Card>
            </Grid.Col>
            ))}
        </Grid>
    );
}

export default Samllcard;