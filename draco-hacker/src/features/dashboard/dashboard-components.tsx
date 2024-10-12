"use client";

import { AlertListener } from "../alert/AlertService";
import { useEffect } from "react";
import {
  BarChart,
  BarChartSeries,
  DonutChart,
  DonutChartCell,
} from "@mantine/charts";
import { Group, Text } from "@mantine/core";

export function AlertButton() {
  useEffect(() => {
    AlertListener();
  }, []);

  return <></>;
}

export function PieChartData({
  data,
  title,
}: {
  data: DonutChartCell[];
  title: string;
}) {
  return (
    <Group>
      <div>
        <Text style={{ fontWeight: "bold" }} fz="xs" mb="sm" ta="center">
          {title}
        </Text>
        <DonutChart data={data} />
      </div>
    </Group>
  );
}

export function BarChartStacked({
  data,
  barChartSeries,
  title,
}: {
  data: Record<string, any>[];
  barChartSeries: BarChartSeries[];
  title: string;
}) {
  return (
    <div>
      <Text style={{ fontWeight: "bold" }} fz="xs" mb="sm" ta="center">
        {title}
      </Text>
      <BarChart
        h={300}
        data={data}
        dataKey="month"
        type="stacked"
        series={barChartSeries}
      />
    </div>
  );
}
