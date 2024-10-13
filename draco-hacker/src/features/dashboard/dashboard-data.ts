import { BarChartSeries, DonutChartCell } from "@mantine/charts";

export const crisisData: DonutChartCell[] = [
  { name: "Labor Strike", value: 66, color: "pink" },
  { name: "Cybersecurity Threat", value: 60, color: "red" },
  { name: "Supply Chain Delay", value: 71, color: "red" },
  { name: "Geopolitical Crisis", value: 16, color: "indigo" },
  { name: "Natural Disaster", value: 23, color: "teal" },
  { name: "Operational Disruption", value: 97, color: "yellow" },
];

export const crisisBarChart: BarChartSeries[] = [
  { name: "Labor Strike", color: "pink" },
  { name: "Cybersecurity Threat", color: "red" },
  { name: "Supply Chain Delay", color: "red" },
  { name: "Geopolitical Crisis", color: "indigo" },
  { name: "Natural Disaster", color: "teal" },
  { name: "Operational Disruption", color: "yellow" },
];

export const crisisStackedData = [
  {
    month: "Jan",
    "Labor Strike": 5,
    "Cybersecurity Threat": 7,
    "Supply Chain Delay": 3,
    "Geopolitical Crisis": 2,
    "Natural Disaster": 1,
    "Operational Disruption": 8,
  },
  {
    month: "Feb",
    "Labor Strike": 4,
    "Cybersecurity Threat": 9,
    "Supply Chain Delay": 6,
    "Geopolitical Crisis": 3,
    "Natural Disaster": 0,
    "Operational Disruption": 5,
  },
  {
    month: "Mar",
    "Labor Strike": 6,
    "Cybersecurity Threat": 5,
    "Supply Chain Delay": 4,
    "Geopolitical Crisis": 1,
    "Natural Disaster": 2,
    "Operational Disruption": 7,
  },
  {
    month: "Apr",
    "Labor Strike": 2,
    "Cybersecurity Threat": 4,
    "Supply Chain Delay": 7,
    "Geopolitical Crisis": 3,
    "Natural Disaster": 1,
    "Operational Disruption": 6,
  },
  {
    month: "May",
    "Labor Strike": 3,
    "Cybersecurity Threat": 8,
    "Supply Chain Delay": 5,
    "Geopolitical Crisis": 2,
    "Natural Disaster": 3,
    "Operational Disruption": 9,
  },
  {
    month: "Jun",
    "Labor Strike": 4,
    "Cybersecurity Threat": 6,
    "Supply Chain Delay": 8,
    "Geopolitical Crisis": 1,
    "Natural Disaster": 2,
    "Operational Disruption": 10,
  },
  {
    month: "Jul",
    "Labor Strike": 1,
    "Cybersecurity Threat": 9,
    "Supply Chain Delay": 4,
    "Geopolitical Crisis": 3,
    "Natural Disaster": 0,
    "Operational Disruption": 7,
  },
  {
    month: "Aug",
    "Labor Strike": 5,
    "Cybersecurity Threat": 7,
    "Supply Chain Delay": 6,
    "Geopolitical Crisis": 2,
    "Natural Disaster": 2,
    "Operational Disruption": 8,
  },
  {
    month: "Sep",
    "Labor Strike": 6,
    "Cybersecurity Threat": 6,
    "Supply Chain Delay": 5,
    "Geopolitical Crisis": 1,
    "Natural Disaster": 1,
    "Operational Disruption": 7,
  },
  {
    month: "Oct",
    "Labor Strike": 2,
    "Cybersecurity Threat": 8,
    "Supply Chain Delay": 7,
    "Geopolitical Crisis": 2,
    "Natural Disaster": 0,
    "Operational Disruption": 9,
  },
  {
    month: "Nov",
    "Labor Strike": 3,
    "Cybersecurity Threat": 5,
    "Supply Chain Delay": 4,
    "Geopolitical Crisis": 3,
    "Natural Disaster": 1,
    "Operational Disruption": 6,
  },
  {
    month: "Dec",
    "Labor Strike": 4,
    "Cybersecurity Threat": 7,
    "Supply Chain Delay": 6,
    "Geopolitical Crisis": 2,
    "Natural Disaster": 1,
    "Operational Disruption": 8,
  },
];

export const operationalMatricsData = [
  {
    date: "Mar 22",
    ShippingDelays: 5, // in hours
    PortCongestion: 75, // percentage
    CostImpact: 1000, // in thousands of dollars
  },
  {
    date: "Mar 23",
    ShippingDelays: 6,
    PortCongestion: 82,
    CostImpact: 1200,
  },
  {
    date: "Mar 24",
    ShippingDelays: 7,
    PortCongestion: 85,
    CostImpact: 1500,
  },
  {
    date: "Mar 25",
    ShippingDelays: 9,
    PortCongestion: 90,
    CostImpact: 2000,
  },
  {
    date: "Mar 26",
    ShippingDelays: 4,
    PortCongestion: 70,
    CostImpact: 900,
  },
];

export const resourceUtilData = [
  {
    crisisType: "Natural Disasters",
    occurrences: 120,
  },
  {
    crisisType: "Political Instability",
    occurrences: 98,
  },
  {
    crisisType: "Supply Chain Disruptions",
    occurrences: 86,
  },
  {
    crisisType: "Cybersecurity Threats",
    occurrences: 99,
  },
  {
    crisisType: "Pandemics",
    occurrences: 85,
  },
  {
    crisisType: "Energy Shortages",
    occurrences: 65,
  },
];
