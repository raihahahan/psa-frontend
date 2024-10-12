"use client";

import { Card, Text } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

export function SquareCardAlert({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <Card
      radius="md"
      p="lg"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#721c24", // Dark red text
      }}
    >
      <IconAlertCircle size={40} color="#721c24" />
      <Text size="lg" mt="md">
        {title}
      </Text>
      <Text size="sm" style={{ flex: 1 }}>
        {message}
      </Text>
    </Card>
  );
}
