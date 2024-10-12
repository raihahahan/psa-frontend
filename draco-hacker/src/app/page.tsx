import {
  AlertButton,
  BarChartStacked,
  PieChartData,
} from "@/features/dashboard/dashboard-components";
import {
  crisisBarChart,
  crisisData,
  crisisStackedData,
} from "@/features/dashboard/dashboard-data";

export default function Page() {
  return (
    <div>
      <AlertButton />
      <div>
        <PieChartData data={crisisData} title="Crisis by type" />
        <br />
        <BarChartStacked
          data={crisisStackedData}
          barChartSeries={crisisBarChart}
          title="Crisis over the year"
        />
      </div>
    </div>
  );
}
