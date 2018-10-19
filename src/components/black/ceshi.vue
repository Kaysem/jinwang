<template>
  <div>
    <div class="analyse_center">
        <h3>重点行业</h3>
      <div class="analyse_center_content">
       <div id="hourCountEcharts" ref="hourCountEcharts"></div>
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
      //   ageEcharts: {
      //     color: ["#547ee6"],
      //     tooltip: {
      //       trigger: "axis",
      //       axisPointer: {
      //         // 坐标轴指示器，坐标轴触发有效
      //         type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      //       }
      //     },
      //     grid: {
      //       left: "3%",
      //       right: "4%",
      //       bottom: "3%",
      //       containLabel: true
      //     },
      //     xAxis: [
      //       {
      //         type: "category",
      //         data: ["18岁至25岁", "26岁至35岁", "36岁至45岁", "46岁至55岁"],
      //         axisTick: {
      //           alignWithLabel: true
      //         }

      //         // axisLabel: {
      //         //   interval:0,
      //         //   rotate:40
      //         // },
      //       }
      //     ],
      //     yAxis: [
      //       {
      //         type: "value"
      //       }
      //     ],
      //     series: [
      //       {
      //         name: "直接访问",
      //         type: "bar",
      //         barWidth: "30%",
      //         itemStyle: {
      //           normal: {
      //             barBorderRadius: 40
      //           }
      //         },
      //         data: [
      //           20,
      //           52,
      //           18,
      //           55,
      //
      //         ]
      //       }
      //     ]
      //   }
      //   sexEcharts: {
      //     color: ["#d780f0", "#4b77e5"],
      //     tooltip: {
      //       trigger: "item",
      //       formatter: "{a} <br/>{b}: {c} ({d}%)",
      //       position: function(p) {
      //         //其中p为当前鼠标的位置
      //         return [p[0] + 10, p[1] - 10];
      //       },
      //       extraCssText: "width:160px;height:40px;background:rgba(0,0,0,0.2);"
      //     },
      //     legend: {
      //       orient: "horizontal",
      //       x: "right",
      //       data: ["女性", "男性"],
      //       textStyle: {
      //         color: "#fff"
      //       }
      //     },
      //     series: [
      //       {
      //         name: "访问来源",
      //         type: "pie",
      //         radius: ["50%", "70%"],
      //         avoidLabelOverlap: false,
      //         label: {
      //           normal: {
      //             show: false,
      //             position: "center"
      //           },
      //           emphasis: {
      //             show: true,
      //             textStyle: {
      //               fontSize: "30",
      //               fontWeight: "bold"
      //             }
      //           }
      //         },
      //         data: [{ value: 335, name: "女性" }, { value: 310, name: "男性" }]
      //       }
      //     ]
      //   }
      hourCountEcharts: {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }
    };
  },
  mounted() {
    // this.setEchartOption()
    this.myChart = echarts.init(document.getElementById("hourCountEcharts"));
    this.myChart.setOption(this.hourCountEcharts);
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
.analyse_center {
  width: 100%;
}
/* .analyse_top_content {
  overflow: hidden;

  background-color: #313856;
  box-shadow: 1px 1px 18px 0px rgba(64, 128, 255, 0.2);
  border-radius: 16px;
} */
.analyse_center_content {
  width: 100%;
  height: 360px;
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
#hourCountEcharts {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>
