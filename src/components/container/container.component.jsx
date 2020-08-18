import React from "react";
import Chart from "../chart/chart.component";
import Form from "../form/form.component";
import "./container.styles.scss";

export default class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      metrics: {},
      lastUpdated: "",
    };
  }

  componentDidMount() {
    this.fetchMetricsData('/api/v1/metrics');
  }

  fetchMetricsData = async (url) => {
    data = await fetch(url).then(r => r.json);
  };

  formatData(data) {
    return Object.keys(data).map((key) => {
      return { x: key, total: data[key] };
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
  }

  render() {
    const formattedData = this.formatData(this.state.metrics);
    return (
      <div>
        <Form className="metric-form" onSubmit={this.handleSubmit} />
        <Chart className="metric-chart" data={formattedData}>
          Last Hour Metrics
        </Chart>
      </div>
    );
  }
}
