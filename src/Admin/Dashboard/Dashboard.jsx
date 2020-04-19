import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./Dashboard.css";
import { getSummary } from "./DashboardActions";

import { Chart } from "react-google-charts";
import ContentHeader from "../../component/ContentHeader/ContentHeader";
import Content from "../../component/Content/Content";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: { ...props.search },
      summary: props.summary,
      dataTaskChat: [],
    };
    this.renderTaskChart = this.renderTaskChart.bind(this);
  }

  componentDidMount() {
    this.props.getSummary(this.props.search);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.search.eventSelected !== this.props.search.eventSelected) {
      this.setState({ search: { ...this.props.search } });
      this.props.getSummary(this.props.search);
    }

    if (prevProps.summary !== this.props.summary) {
      this.setState({ summary: { ...this.props.summary } });
      this.renderTaskChart();
    }
  }

  renderTaskChart() {
    const { taskSummary } = this.props.summary || {};

    let dataContent = Object.keys(taskSummary).map((key, index) => {
      const keyItem = taskSummary[key]["TaskStatus.taskStatusName"];
      const valueItem = taskSummary[key]["taskCount"];
      let item = [keyItem, valueItem];

      return item;
    });

    const data = [["Tarefas", "Quantidade de tarefas"], ...dataContent];

    this.setState({ dataTaskChat: data });

    return;
  }

  render() {
    return (
      <React.Fragment>
        <ContentHeader
          title="Dashboard"
          subtitle="Resumo das atividades administrativas"
          icon="bar-chart"
        />
        <Content>
          <div className="dashboard-charts">
            <div className="dashboard-chart-item">
              <Chart
                width={450}
                height={300}
                chartType="ColumnChart"
                loader={<div>Carregando gráfico...</div>}
                data={[
                  ["City", "2010 Population", "2000 Population"],
                  ["New York City, NY", 8175000, 8008000],
                  ["Los Angeles, CA", 3792000, 3694000],
                  ["Chicago, IL", 2695000, 2896000],
                  ["Houston, TX", 2099000, 1953000],
                  ["Philadelphia, PA", 1526000, 1517000],
                ]}
                options={{
                  title: "Population of Largest U.S. Cities",
                  chartArea: { width: "40%", height: "60%" },
                  hAxis: {
                    title: "Total Population",
                    minValue: 0,
                  },
                  vAxis: {
                    title: "City",
                  },
                }}
                legendToggle
              />
            </div>
            <div className="dashboard-chart-item">
              <Chart
                width={450}
                height={300}
                chartType="AreaChart"
                loader={<div>Carregando gráfico...</div>}
                data={[
                  ["Year", "Sales", "Expenses"],
                  ["2013", 1000, 400],
                  ["2014", 1170, 460],
                  ["2015", 660, 1120],
                  ["2016", 1030, 540],
                ]}
                options={{
                  title: "Company Performance",
                  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
                  vAxis: { minValue: 0 },
                  // For the legend to fit, we make the chart area smaller
                  chartArea: { width: "50%", height: "70%" },
                  // lineWidth: 25
                }}
              />
            </div>
          </div>
          <div className="dashboard-charts">
            <div className="dashboard-chart-item row">
              <Chart
                width={450}
                height={300}
                chartType="PieChart"
                loader={<div>Carregando gráfico...</div>}
                data={this.state.dataTaskChat}
                options={{
                  title: "Atividades de Eventos em andamento",
                  // Just add this option
                  is3D: true,
                }}
                rootProps={{ "data-testid": "2" }}
              />
            </div>
            <div className="dashboard-chart-item">
              <Chart
                width={450}
                height={300}
                chartType="LineChart"
                loader={<div>Carregando gráfico...</div>}
                data={[
                  [
                    { type: "number", label: "x" },
                    { type: "number", label: "values" },
                    { id: "i0", type: "number", role: "interval" },
                    { id: "i1", type: "number", role: "interval" },
                    { id: "i2", type: "number", role: "interval" },
                    { id: "i2", type: "number", role: "interval" },
                    { id: "i2", type: "number", role: "interval" },
                    { id: "i2", type: "number", role: "interval" },
                  ],
                  [1, 100, 90, 110, 85, 96, 104, 120],
                  [2, 120, 95, 130, 90, 113, 124, 140],
                  [3, 130, 105, 140, 100, 117, 133, 139],
                  [4, 90, 85, 95, 85, 88, 92, 95],
                  [5, 70, 74, 63, 67, 69, 70, 72],
                  [6, 30, 39, 22, 21, 28, 34, 40],
                  [7, 80, 77, 83, 70, 77, 85, 90],
                  [8, 100, 90, 110, 85, 95, 102, 110],
                ]}
                options={{
                  intervals: { style: "sticks" },
                  legend: "none",
                }}
              />
            </div>
          </div>
        </Content>
      </React.Fragment>
    );
  }
}

const mapStateProps = (state) => ({
  summary: state.dashboard.summary,
  search: state.app.search,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getSummary }, dispatch);
export default connect(mapStateProps, mapDispatchToProps)(Dashboard);
