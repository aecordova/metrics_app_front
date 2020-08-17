import React from "react";
import Chart from "../chart/chart.component";
import "./chartContainer.styles.scss";

export default class ChartContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      metrics: {
        uptime: "500",
        latency: "1230",
      },
    };
  }

  formatData(data) {
    return Object.keys(data).map((key) => {
      return { x: key, total: data[key] };
    });
  }

  render() {
    const formattedData = this.formatData(this.state.metrics);
    return (
      <div>
        <Chart data={formattedData}> Last Hour</Chart>
      </div>
    );
  }
}
