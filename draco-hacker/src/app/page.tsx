import {
  AlertButton,
  BarChartStacked,
  PieChartData,
} from "@/features/dashboard/dashboard-components";
import {
  crisisBarChart,
  crisisData,
  crisisStackedData,
  operationalMatricsData,
  radarData,
  resourceUtilData,
} from "@/features/dashboard/dashboard-data";
import { AreaChart, LineChart, RadarChart } from "@mantine/charts";
import { Card, Grid, GridCol, Text } from "@mantine/core";

export default function Page() {
  return (
    <div>
      <Grid justify="center" align="stretch">
        <GridCol span={{ base: 12, xs: 12, md: 6, lg: 6 }}>
          <Card shadow="lg" withBorder>
            <Text style={{ fontWeight: "bold" }} fz="xs" mb="sm" ta="center">
              Resource Utilisation
            </Text>
            <AreaChart
              style={{ width: "100%" }}
              h={300}
              data={resourceUtilData}
              dataKey="date"
              series={[
                { name: "ContainerSlots", color: "orange.6" },
                { name: "Workforce", color: "red.6" },
                { name: "FuelUsage", color: "green.6" },
              ]}
              curveType="linear"
            />
          </Card>
        </GridCol>

        <GridCol span={{ base: 12, md: 6, lg: 6 }}>
          <Card
            shadow="lg"
            withBorder
            style={{
              alignItems: "center",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <PieChartData data={crisisData} title="Crisis by type" />

            <PieChartData
              data={crisisData}
              title="Crisis Prediction Accuracy"
            />
          </Card>
        </GridCol>

        <GridCol span={{ base: 12, md: 6, lg: 6 }}>
          <Card withBorder shadow="lg">
            <Text style={{ fontWeight: "bold" }} fz="xs" mb="sm" ta="center">
              Resource Usage
            </Text>
            <RadarChart
              h={300}
              data={radarData}
              dataKey="product"
              withPolarRadiusAxis
              series={[{ name: "sales", color: "blue.4", opacity: 0.2 }]}
            />
          </Card>
        </GridCol>

        <GridCol span={{ base: 12, md: 6, lg: 6 }}>
          <Card shadow="lg" withBorder>
            <Text style={{ fontWeight: "bold" }} fz="xs" mb="sm" ta="center">
              Operational Metrics
            </Text>

            <LineChart
              h={300}
              data={operationalMatricsData}
              dataKey="date"
              series={[
                { name: "ShippingDelays", color: "red.6" },
                { name: "PortCongestion", color: "orange.6" },
                { name: "CostImpact", color: "green.6" },
              ]}
              curveType="linear"
            />
          </Card>
        </GridCol>

        <GridCol span={12}>
          <Card withBorder shadow="lg">
            <BarChartStacked
              data={crisisStackedData}
              barChartSeries={crisisBarChart}
              title="Crisis over the year"
            />
          </Card>
        </GridCol>
      </Grid>
      <AlertButton />
    </div>
  );
}
