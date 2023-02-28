import React, { useState } from 'react'
import Chart from "react-apexcharts";
const LineChart = () => {
  // bubble chart for second page to show monthly earning or engaging users
    const [state] = useState({
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept","Oct","Nov","Dec"],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91,55,10,22,55],
        },
        {
          name: "series-2",
          data: [30, 25, 45, 25, 49, 60, 34, 70,45,5,11,26],
        },
        {
          name: "series-3",
          data: [30, 40, 45, 50, 49, 60, 70, 91,55,10,22,55],
        },
        {
          name: "series-4",
          data: [15, 25, 35, 45, 39, 30, 68, 35,90,5,55,26],
        }

      ],
    });
  return <div className="LineChart">
  {/* bubble chart using apexchart */}
 <Chart
              options={state.options}
              series={state.series}

           //   type="scatter"
             // type="bar"
          //   type="pie"
             // type="boxPlot"
              width="1040"
              height={"100%"}
            />
  </div>;
}

export default LineChart;
