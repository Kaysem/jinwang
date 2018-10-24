<template>
  <div>
    <div class="black_more">
      <div class="black_analyse">
      <div class="black_analyseEcharts">
       <div id="black_analyseEcharts" ref="black_analyseEcharts"></div>
      </div>
    </div>
    </div>
    

  </div>
</template>

<script>
// import EchartsJs from './Echarts.js'
import echarts from "echarts";

export default {
  data() {
    return {
      black_analyseEcharts: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function(params) {
            var tar;
            if (params[1].value != "-") {
              tar = params[1];
            } else {
              tar = params[0];
            }
            return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
          }
        },
        grid: {
          left: "3%",
          right: "3%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#fff",
              width: "2"
            }
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          data: (function() {
            var list = [];
            for (var i = 1; i <= 11; i++) {
              list.push("11月" + i + "日");
            }
            return list;
          })()
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#fff",
              width: "2"
            }
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          }
        },
        series: [
          {
            name: "辅助",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)"
              },
              emphasis: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)"
              }
            },
            data: [0, 12, 10, 15]
          },
          {
            name: "出现时间",
            type: "bar",
            stack: "总量",
            // color: "#5de3e1",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            itemStyle: {
              normal: {
                color: "#5de3e1"
              }
            },
            barWidth: 20,
            data: [9, 16, 15, 18]
          }
        ]
      }
    };
  },
  mounted() {
    // this.setEchartOption()
    this.myChart = echarts.init(
      document.getElementById("black_analyseEcharts")
    );
    this.myChart.setOption(this.black_analyseEcharts);
    window.addEventListener("resize", () => {
      this.myChart.resize();
    });
  },
  methods: {
    setEchartOption() {
      app.count = 11;
      setInterval(function() {
        axisData = new Date().toLocaleTimeString().replace(/^\D*/, "");

        var data0 = option.series[0].data;
        var data1 = option.series[1].data;
        data0.shift();
        data0.push(Math.round(Math.random() * 1000));
        data1.shift();
        data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);
        option.xAxis[1].data.shift();
        option.xAxis[1].data.push(app.count++);

        myChart.setOption(option);
      }, 2100);
    }
  }
};
</script>

<style>
.black_more {
  width: 770px;
}

/* .analyse_top_content {
  overflow: hidden;

  background-color: #313856;
  box-shadow: 1px 1px 18px 0px rgba(64, 128, 255, 0.2);
  border-radius: 16px;
} */
.black_analyseEcharts {
  width: 100%;
  height: 200px;
  background-color: #313856;
  box-shadow: 1px 1px 18px 0px rgba(64, 128, 255, 0.2);
  border-radius: 20px;
}
.particulars {
  padding-left: 50px;
  padding-bottom: 30px;
  clear: both;
}
.particulars h3 {
  display: block;
  padding-bottom: 20px;
  margin-left: -20px;
}
#black_analyseEcharts {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>
