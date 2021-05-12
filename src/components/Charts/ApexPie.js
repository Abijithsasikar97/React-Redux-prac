import React from "react";
import Chart from "react-apexcharts";
import PropTypes from "prop-types";
import { Card } from "antd";
import { COLORS } from "../../redux/constants/ChartConstant";

export const ApexPie = ({ series, labels, extra, height, width, title }) => {
  const options = {
    colors: [COLORS[0], COLORS[1]],
    labels: labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  

  return (
    <Card>
      <div className="text-center">
        <Chart
          type="donut"
          options={options}
          series={series}
          width={width}
          height={height}
        />
        {extra}
      </div>
    </Card>
  );
};

ApexPie.prototype = {
  series: PropTypes.array,
  labels: PropTypes.array,
  extra: PropTypes.element,
};

ApexPie.defaultProps = {
  series: [],
  labels: [],
  title: "",
  height: 300,
  width: "100%",
};

export default ApexPie;
