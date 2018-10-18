import React, {Component} from 'react';
import axios from 'axios';
import ChartJS from 'chart.js';

class ChartComponent extends Component {

  componentDidMount() {
    const {bpiDataKeys, bpiDataValues} = this.props.data;
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: bpiDataKeys,
            datasets: [{
                label: 'Value in $',
                data: bpiDataValues,
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
