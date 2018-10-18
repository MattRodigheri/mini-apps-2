import React from 'react';
import axios from 'axios';
import ChartJS from 'chart.js';

class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: this.props.data.bpiDataKeys,
            datasets: [{
                label: 'Value in $',
                data: this.props.data.bpiDataValues,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:false
                    }
                }]
            }
        }
    });
  }

  render() {
    return (
      <div>
        <canvas id="myChart" ></canvas>
      </div>
    )
  }
}

export default ChartComponent;
