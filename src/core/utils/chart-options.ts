export const ChartOptions = {
  /**Indicates whether the chart is responsive or not */
  responsive: true,
  /**Elements of the chart */
  elements: {
    line: {
      tension: 0.4,
    },
    point: {
      radius: 3,
    },
  },
  /** The dataset of the chart. Configures the bar, line, dot, etc. */
  datasets: {
    bar: {
      barPercentage: 0.5,
    },
    line: {
      fill: false,
    },
  },
  /** Define plugins for the chart. legend, title, etc. */
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        usePointStyle: true,
        pointStyleWidth: 10,
        boxHeight: 8,
      },
    },
    title: {
      display: true,
      text: "Chart Title",
    },
  },
  /** Handle mostly the axes and grid lines of the chart */
  scales: {
    xAxes: {
      stacked: false,
      grid: {
        display: false,
      },
    },
    yAxes: {
      grid: {
        display: false,
      },
    },
  },
};
