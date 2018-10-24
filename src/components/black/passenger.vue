<template>
    <div id="blackadd">
        <div class="b_top">
            <h4 class="page_title">客流报表</h4>
            <div class="top_content inline_block time">
                <span>时间：</span>
                <el-radio-group v-model="top.valueTimeS" @change="changeTimes()">
                    <el-radio label="threeMouth">最近三个月</el-radio>
                    <el-radio label="sixMouth">最近六个月</el-radio>
                    <el-radio class="custom" label="custom">自定义
                        <el-date-picker 
                            v-model="top.valueTime"
                            value-format="yyyy-MM-dd HH:mm:ss"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                        </el-date-picker>
                    </el-radio>
                </el-radio-group>
            </div>
            <div class="top_content inline_block sex">
                <span>性别：</span>
                <el-radio-group v-model="top.valueSex">
                    <el-radio label="ALL">全部</el-radio>
                    <el-radio label="男">男性</el-radio>
                    <el-radio label="女">女性</el-radio>
                </el-radio-group>
            </div>
            <div class="top_content inline_block sex">
                <span>身份：</span>
                <el-radio-group v-model="top.valueMemtype">
                    <el-radio label="ALL">全部</el-radio>
                    <el-radio label="VIP顾客">VIP</el-radio>
                    <el-radio label="消费顾客">消费顾客</el-radio>
                    <el-radio label="未消费顾客">未消费顾客</el-radio>
                </el-radio-group>
            </div>
            <div class="top_content inline_block age">
                <span>年龄：</span>
                <div>
                    <div class="startage">
                        <input type="text" id="startage" v-model="top.age.startAge" placeholder="" >
                    </div>
                    <span class="age_line"></span>
                    <div class="endage">
                        <input type="text" id="endage" v-model="top.age.endAge" placeholder="" >
                    </div>
                </div>
            </div>
            <!-- <div class="top_content kind">
                <span>查看方式：</span>
                <el-radio-group v-model="top.kind" @change="changeKind()">
                    <el-radio-button label="按位置"></el-radio-button>
                    <el-radio-button label="按时间"></el-radio-button>
                </el-radio-group>
            </div> -->
            <div class="top_content inline_block operaty">
                <span>操作：</span>
                <div class="todo_search" @click.stop="getPassenger()"> <span class="search_icon"></span> 查询 </div>
            </div>
        </div>
        <div class="b_btm">
            <div class="passenger_top">
                <div class="passenger_top_name">客流分析</div>
                <div class="passenger_top_content">
                    <div class="passenger_top_content_charts">
                      <div id="passengerCountEcharts" ref="passengerCountEcharts"></div>
                    </div>
                    <div class="passenger_top_content_charts">
                      <div id="passengerTypeDayEcharts" ref="passengerTypeDayEcharts"></div>
                    </div>
                    <div class="passenger_top_content_charts">
                      <div id="passengerTypeHourEcharts" ref="passengerTypeHourEcharts"></div>
                    </div>
                </div>
            </div>
            <div class="passenger_bottom">
                <div class="passenger_bottom_content">
                    <div class="passenger_bottom_content_name">年龄</div>
                    <div class="passenger_bottom_content_charts">
                      <div id="ageEcharts" ref="ageEcharts"></div>
                    </div>
                </div>
                <div class="passenger_bottom_content">
                    <div class="passenger_bottom_content_name">月</div>
                    <div class="passenger_bottom_content_charts">
                      <div id="mouthCountEcharts" ref="mouthCountEcharts"></div>
                    </div>
                </div>
                <div class="passenger_bottom_content">
                    <div class="passenger_bottom_content_name">类型</div>
                    <div class="passenger_bottom_content_charts">
                      <div id="typeEcharts" ref="typeEcharts"></div>
                    </div>
                </div>
                <div class="passenger_bottom_content">
                    <div class="passenger_bottom_content_name">性别</div>
                    <div class="passenger_bottom_content_charts">
                      <div id="sexEcharts" ref="sexEcharts"></div>
                    </div>
                </div>
                <div class="passenger_bottom_content">
                    <div class="passenger_bottom_content_name">性格</div>
                    <div class="passenger_bottom_content_charts">
                      <div id="traitEcharts" ref="traitEcharts"></div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: "Passenger",
  data() {
    return {
      top: {
        valueTimeS: "threeMouth",
        valueTime: [], //时间
        valueSex: "ALL", //性别
        valueMemtype: "ALL", //身份
        age: {
          startAge: "1",
          endAge: "99"
        },
        // kind: "按时间" //位置按时不需要
      },

      // echarts图表详情设置
      passengerCountEcharts: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          itemWidth: 60,
          itemGap: 30,
          top: 15,
          textStyle: {
            fontSize: 12,
            color: "#fff"
          },
          data: ["总客流量", "支付客流量", "支付率"]
        },
        toolbox: {
          show: true,
          itemGap: 20,
          orient: "vertical", // 布局方式，默认为水平布局，可选为：
          // 'horizontal' ¦ 'vertical'
          x: "right", // 水平安放位置，默认为全图右对齐，可选为：
          // 'center' ¦ 'left' ¦ 'right'
          // ¦ {number}（x坐标，单位px）
          y: "center", // 垂直安放位置，默认为全图顶端，可选为：
          // 'top' ¦ 'bottom' ¦ 'center'
          // ¦ {number}（y坐标，单位px）
          color: ["#1e90ff", "#22bb22", "#4b0082", "#d2691e"],
          backgroundColor: "rgba(0,0,0,0)", // 工具箱背景颜色
          borderColor: "#ccc", // 工具箱边框颜色
          borderWidth: 0, // 工具箱边框线宽，单位px，默认为0（无边框）
          padding: 15, // 工具箱内边距，单位px，默认各方向内边距为5，
          margin: 5,
          showTitle: true,
          feature: {
            dataView: {
              show: true,
              title: "数据视图",
              readOnly: true,
              optionToContent: function(opt) {
                var axisData = opt.xAxis[0].data;
                var series = opt.series;
                var table =
                  '<table style="width:100%;text-align:center"><tbody><tr>' +
                  "<td>时间</td>" +
                  "<td>" +
                  series[0].name +
                  "</td>" +
                  "<td>" +
                  series[1].name +
                  "</td>" +
                  "</tr>";
                for (var i = 0, l = axisData.length; i < l; i++) {
                  table +=
                    "<tr>" +
                    "<td>" +
                    axisData[i] +
                    "</td>" +
                    "<td>" +
                    series[0].data[i] +
                    "</td>" +
                    "<td>" +
                    series[1].data[i] +
                    "</td>" +
                    "</tr>";
                }
                table += "</tbody></table>";
                return table;
              }
            },
            magicType: {
              show: true,
              title: {
                line: "折线图",
                bar: "柱形图"
              },
              type: ["line", "bar"]
            },
            restore: {
              show: true,
              title: "还原",
              color: "black"
            },
            saveAsImage: {
              show: true,
              title: "保存为图片",
              type: "png",
              lang: ["点击本地保存"],
              backgroundColor: "#313856",
              name: "总客流量与支付客流量对比图"
            }
          }
        },
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 65,
            end: 100,
            bottom: 15,
            backgroundColor: "#fff",
            dataBackground: {
              lineStyle: {
                color: "#EE0000"
              },
              areaStyle: {
                color: "#030303"
              }
            }
          }
        ],
        grid: {
          left: "3%",
          right: "4%",
          bottom: "15%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          // data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          data: [],
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
        yAxis: [
          {
            name: "总客流量 ( 单位 : 人 )",
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
          {
            name: "支付率 ( 单位 : % )",
            type: "value",
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#fff",
                width: "2"
              }
            },
            axisLabel: {
              formatter: "{value}%",
              textStyle: {
                color: "#fff"
              }
            }
          }
        ],
        series: [
          {
            name: "总客流量",
            type: "line",
            stack: "总量1",
            smooth: true, //这个是把线变成曲线
            areaStyle: { normal: {
              // 颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(112,73,240,1)"
                  },
                  // {
                  //   offset: 0.8,
                  //   color: "rgba(112,73,240,0.8)"
                  // },
                  {
                    offset: 1,
                    color: "rgba(112,73,240,0)"
                  }
                ])
            } },
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: "#7049f0",
                lineStyle: {
                  color: "#7049f0"
                }
              }
            },
            // data: [2520, 2782, 2691, 2534, 2190, 2530, 2310]
            data: []
          },
          {
            name: "支付客流量",
            type: "line",
            stack: "总量2",
            smooth: true, //这个是把线变成曲线
            
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: "#1a9bfc",
                lineStyle: {
                  color: "#1a9bfc"
                }
              }
            },
            areaStyle: {
              normal: {
                // 颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(26,155,252,1)"
                  },
                  // {
                  //   offset: 0.8,
                  //   color: "rgba(26,155,252,0.8)"
                  // },
                  {
                    offset: 1,
                    color: "rgba(26,155,252,0)"
                  }
                ])
              }
            },
            // data: [820, 982, 791, 534, 1190, 530, 310]
            data:[]
          },
          {
            name: "支付率",
            type: "line",
            stack: "总量3",
            yAxisIndex: 1,
            smooth: true, //这个是把线变成曲线
            itemStyle: {
              normal: {
                color: "#fa704d",
                lineStyle: {
                  color: "#fa704d"
                }
              }
            },
            // data: [65, 99, 18, 87, 91, 57, 69]
            data:[]
          }
        ]
      },

      // echarts图表详情设置
      passengerTypeDayEcharts: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          itemWidth: 60,
          itemGap: 30,
          top: 15,
          textStyle: {
            fontSize: 12,
            color: "#fff"
          },
          data: ["VIP顾客", "消费顾客", "非消费顾客"]
        },
        toolbox: {
          show: true,
          itemGap: 20,
          orient: "vertical", // 布局方式，默认为水平布局，可选为：
          // 'horizontal' ¦ 'vertical'
          x: "right", // 水平安放位置，默认为全图右对齐，可选为：
          // 'center' ¦ 'left' ¦ 'right'
          // ¦ {number}（x坐标，单位px）
          y: "center", // 垂直安放位置，默认为全图顶端，可选为：
          // 'top' ¦ 'bottom' ¦ 'center'
          // ¦ {number}（y坐标，单位px）
          color: ["#1e90ff", "#22bb22", "#4b0082", "#d2691e"],
          backgroundColor: "rgba(0,0,0,0)", // 工具箱背景颜色
          borderColor: "#ccc", // 工具箱边框颜色
          borderWidth: 0, // 工具箱边框线宽，单位px，默认为0（无边框）
          padding: 15, // 工具箱内边距，单位px，默认各方向内边距为5，
          margin: 5,
          showTitle: true,
          feature: {
            dataView: {
              show: true,
              title: "数据视图",
              readOnly: true,
              optionToContent: function(opt) {
                var axisData = opt.xAxis[0].data;
                var series = opt.series;
                var table =
                  '<table style="width:100%;text-align:center"><tbody><tr>' +
                  "<td>时间</td>" +
                  "<td>" +
                  series[0].name +
                  "</td>" +
                  "<td>" +
                  series[1].name +
                  "</td>" +
                  "</tr>";
                for (var i = 0, l = axisData.length; i < l; i++) {
                  table +=
                    "<tr>" +
                    "<td>" +
                    axisData[i] +
                    "</td>" +
                    "<td>" +
                    series[0].data[i] +
                    "</td>" +
                    "<td>" +
                    series[1].data[i] +
                    "</td>" +
                    "</tr>";
                }
                table += "</tbody></table>";
                return table;
              }
            },
            magicType: {
              show: true,
              title: {
                line: "折线图",
                bar: "柱形图"
              },
              type: ["line", "bar"]
            },
            restore: {
              show: true,
              title: "还原",
              color: "black"
            },
            saveAsImage: {
              show: true,
              title: "保存为图片",
              type: "png",
              lang: ["点击本地保存"],
              backgroundColor: "#313856",
              name: "总客流量与支付客流量对比图"
            }
          }
        },
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 0,
            end: 100,
            bottom: 15,
            backgroundColor: "#fff",
            dataBackground: {
              lineStyle: {
                color: "#EE0000"
              },
              areaStyle: {
                color: "#030303"
              }
            }
          }
        ],
        grid: {
          left: "3%",
          right: "4%",
          bottom: "15%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [],
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#fff",
              width: "2"
            }
          },
          axisLabel: {
            interval:0,
            rotate:20,
            textStyle: {
              color: "#fff"
            },
          }
        },
        yAxis: [
          {
            name: "顾客流量 ( 单位 : 人/当天 )",
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
          }
        ],
        series: [
          {
            name: "VIP顾客",
            type: "line",
            stack: "总量1",
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: "#f1bd2a",
                lineStyle: {
                  color: "#f1bd2a"
                }
              }
            },
            data: []
          },
          {
            name: "消费顾客",
            type: "line",
            stack: "总量2",
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: "#CD2626",
                lineStyle: {
                  color: "#CD2626"
                }
              }
            },
            data: []
          },
          {
            name: "非消费顾客",
            type: "line",
            stack: "总量3",
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: "#2ec7c9",
                lineStyle: {
                  color: "#2ec7c9"
                }
              }
            },
            data: []
          }
        ]
      },

      // echarts图表详情设置
      passengerTypeHourEcharts: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          itemWidth: 60,
          itemGap: 30,
          top: 15,
          textStyle: {
            fontSize: 12,
            color: "#fff"
          },
          data: ["VIP顾客", "消费顾客", "非消费顾客"]
        },
        toolbox: {
          show: true,
          itemGap: 20,
          orient: "vertical", // 布局方式，默认为水平布局，可选为：
          // 'horizontal' ¦ 'vertical'
          x: "right", // 水平安放位置，默认为全图右对齐，可选为：
          // 'center' ¦ 'left' ¦ 'right'
          // ¦ {number}（x坐标，单位px）
          y: "center", // 垂直安放位置，默认为全图顶端，可选为：
          // 'top' ¦ 'bottom' ¦ 'center'
          // ¦ {number}（y坐标，单位px）
          color: ["#1e90ff", "#22bb22", "#4b0082", "#d2691e"],
          backgroundColor: "rgba(0,0,0,0)", // 工具箱背景颜色
          borderColor: "#ccc", // 工具箱边框颜色
          borderWidth: 0, // 工具箱边框线宽，单位px，默认为0（无边框）
          padding: 15, // 工具箱内边距，单位px，默认各方向内边距为5，
          margin: 5,
          showTitle: true,
          feature: {
            dataView: {
              show: true,
              title: "数据视图",
              readOnly: true,
              optionToContent: function(opt) {
                var axisData = opt.xAxis[0].data;
                var series = opt.series;
                var table =
                  '<table style="width:100%;text-align:center"><tbody><tr>' +
                  "<td>时间</td>" +
                  "<td>" +
                  series[0].name +
                  "</td>" +
                  "<td>" +
                  series[1].name +
                  "</td>" +
                  "</tr>";
                for (var i = 0, l = axisData.length; i < l; i++) {
                  table +=
                    "<tr>" +
                    "<td>" +
                    axisData[i] +
                    "</td>" +
                    "<td>" +
                    series[0].data[i] +
                    "</td>" +
                    "<td>" +
                    series[1].data[i] +
                    "</td>" +
                    "</tr>";
                }
                table += "</tbody></table>";
                return table;
              }
            },
            magicType: {
              show: true,
              title: {
                line: "折线图",
                bar: "柱形图"
              },
              type: ["line", "bar"]
            },
            restore: {
              show: true,
              title: "还原",
              color: "black"
            },
            saveAsImage: {
              show: true,
              title: "保存为图片",
              type: "png",
              lang: ["点击本地保存"],
              backgroundColor: "#313856",
              name: "总客流量与支付客流量对比图"
            }
          }
        },
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 0,
            end: 100,
            bottom: 15,
            backgroundColor: "#fff",
            dataBackground: {
              lineStyle: {
                color: "#EE0000"
              },
              areaStyle: {
                color: "#030303"
              }
            }
          }
        ],
        grid: {
          left: "3%",
          right: "4%",
          bottom: "15%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [],
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
            },
            rotate:40
          }
        },
        yAxis: [
          {
            name: "顾客流量 ( 单位 : 人/当时 )",
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
          }
        ],
        series: [
          {
            name: "VIP顾客",
            type: "line",
            stack: "总量1",
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: "#f1bd2a",
                lineStyle: {
                  color: "#f1bd2a"
                }
              }
            },
            data: []
          },
          {
            name: "消费顾客",
            type: "line",
            stack: "总量2",
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: "#CD2626",
                lineStyle: {
                  color: "#CD2626"
                }
              }
            },
            data: []
          },
          {
            name: "非消费顾客",
            type: "line",
            stack: "总量3",
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: "#2ec7c9",
                lineStyle: {
                  color: "#2ec7c9"
                }
              }
            },
            data: []
          }
        ]
      },

      // 详情部分 bottom 部分 年龄图表 start
      ageEcharts: {
        color: ["#547ee6"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "1%",
          right: "3%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            // data: ["18岁至25岁", "26岁至35岁", "36岁至45岁", "46岁至55岁"],
            data: [],
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#fff", //左边线的颜色
                width: "2" //坐标线的宽度
              }
            }
            // axisLabel: {
            //   interval:0,
            //   rotate:40
            // },
          }
        ],
        yAxis: [
          {
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
          }
        ],
        series: [{
            name: "直接访问",
            type: "bar",
            barWidth: "30%",
            itemStyle: {
              normal: {
                barBorderRadius: 40
              }
            },
            data: [],
            // data: [
            //   20,
            //   52,
            //   18,
            //   55,
            //   46,
            //   35,
            //   29,
            //   50,
            //   32,
            //   38,
            //   52,
            //   18,
            //   55,
            //   46,
            //   20,
            //   52,
            //   18,
            //   55,
            //   46,
            //   35,
            //   29,
            //   50,
            //   32,
            //   38,
            //   52,
            //   18,
            //   55,
            //   46
            // ]
          }]
      },

      // 详情部分 bottom 部分 月份图表 start
      mouthCountEcharts: {
        color: ["#ceaa1b"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "1%",
          right: "3%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data:[],
            // data: ["7月", "8月", "9月"],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              formatter: "{value}月",
            },
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#fff", //左边线的颜色
                width: "2" //坐标线的宽度
              }
            }
            // axisLabel: {
            //   interval:0,
            //   rotate:40
            // },
          }
        ],
        yAxis: [
          {
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
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "30%",
            itemStyle: {
              normal: {
                barBorderRadius: 40
              }
            },
            data: [],
            // data: [
            //   20,
            //   52,
            //   18,
            //   55,
            //   46,
            //   35,
            //   29,
            //   50,
            //   32,
            //   38,
            //   52,
            //   18,
            //   55,
            //   46,
            //   20,
            //   52,
            //   18,
            //   55,
            //   46,
            //   35,
            //   29,
            //   50,
            //   32,
            //   38,
            //   52,
            //   18,
            //   55,
            //   46
            // ]
          }
        ]
      },

      // 详情部分 bottom 部分 类型图表 start
      typeEcharts: {
        color: [ "#4b77e5","#f1bd2a", "#d780f0"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          position: function(p) {
            //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
          },
          extraCssText: "width:160px;height:40px;background:rgba(0,0,0,0.2);"
        },
        legend: {
          orient: "horizontal",
          x: "right",
          // data: ["VIP顾客", "消费顾客", "未消费顾客"],
          data:[],
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "40%"],

            label: {
              normal: {
                position: "inner"
              },
              emphasis: {
                show: true,
                formatter: " {b}：{c} \n\n",
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold"
                }
              }
            },
            data: []
              // { value: 1335, name: "VIP顾客" },
              // { value: 1910, name: "消费顾客" },
              // { value: 310, name: "未消费顾客" }
            
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            // label: {
            //   normal: {
            //     show: false,
            //     position: "center"
            //   },
            //   emphasis: {
            //     show: true,
            //     textStyle: {
            //       fontSize: "30",
            //       fontWeight: "bold"
            //     }
            //   }
            // },
            label: {
              normal: {
                // \n\n可让文字居于牵引线上方，很关键
                //  {b}  代表显示的内容标题
                // {c}代表数据
                formatter: " {b}：{c} \n\n",
                show: true,
                position: "outside",
                borderWidth: 20,
                borderRadius: 4,
                margin: 10,
                padding: [0, -50],
                rich: {
                  a: {
                    // color: '#333',
                    fontSize: 12,
                    lineHeight: 20
                  },
                  b: {
                    fontSize: 12,
                    lineHeight: 20
                    // color: '#333'
                  }
                }
              },
              emphasis: {
                show: true,
                position: "center",
                formatter: "{c} \n\n",
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 50
                // lineStyle: {
                //     color: '#333'
                // }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold"
                }
              }
            },

            data: []
          }
        ]
      },

      // 详情部分 bottom 部分 性别图表 start
      sexEcharts: {
        color: [  "#d780f0","#4b77e5"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          position: function(p) {
            //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
          },
          extraCssText: "width:160px;height:40px;background:rgba(0,0,0,0.2);"
        },
        legend: {
          orient: "horizontal",
          x: "right",
          // data: ["VIP顾客", "消费顾客", "未消费顾客"],
          data:[],
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "40%"],

            label: {
              normal: {
                position: "inner"
              },
              emphasis: {
                show: true,
                formatter: " {b}：{c} \n\n",
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold"
                }
              }
            },
            data: []
              // { value: 1335, name: "VIP顾客" },
              // { value: 1910, name: "消费顾客" },
              // { value: 310, name: "未消费顾客" }
            
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            // label: {
            //   normal: {
            //     show: false,
            //     position: "center"
            //   },
            //   emphasis: {
            //     show: true,
            //     textStyle: {
            //       fontSize: "30",
            //       fontWeight: "bold"
            //     }
            //   }
            // },
            label: {
              normal: {
                // \n\n可让文字居于牵引线上方，很关键
                //  {b}  代表显示的内容标题
                // {c}代表数据
                formatter: " {b}：{c} \n\n",
                show: true,
                position: "outside",
                borderWidth: 20,
                borderRadius: 4,
                margin: 10,
                padding: [0, -50],
                rich: {
                  a: {
                    // color: '#333',
                    fontSize: 12,
                    lineHeight: 20
                  },
                  b: {
                    fontSize: 12,
                    lineHeight: 20
                    // color: '#333'
                  }
                }
              },
              emphasis: {
                show: true,
                position: "center",
                formatter: "{c} \n\n",
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 50
                // lineStyle: {
                //     color: '#333'
                // }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold"
                }
              }
            },

            data: []
          }
        ]
      },

      // 详情部分 bottom 部分 性格图表 start
      traitEcharts: {
        color: [  "#d780f0","#4b77e5"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          position: function(p) {
            //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
          },
          extraCssText: "width:160px;height:40px;background:rgba(0,0,0,0.2);"
        },
        legend: {
          orient: "horizontal",
          x: "right",
          // data: ["VIP顾客", "消费顾客", "未消费顾客"],
          data:[],
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "40%"],

            label: {
              normal: {
                position: "inner"
              },
              emphasis: {
                show: true,
                formatter: " {b}：{c} \n\n",
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold"
                }
              }
            },
            data: []
              // { value: 1335, name: "VIP顾客" },
              // { value: 1910, name: "消费顾客" },
              // { value: 310, name: "未消费顾客" }
            
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            // label: {
            //   normal: {
            //     show: false,
            //     position: "center"
            //   },
            //   emphasis: {
            //     show: true,
            //     textStyle: {
            //       fontSize: "30",
            //       fontWeight: "bold"
            //     }
            //   }
            // },
            label: {
              normal: {
                // \n\n可让文字居于牵引线上方，很关键
                //  {b}  代表显示的内容标题
                // {c}代表数据
                formatter: " {b}：{c} \n\n",
                show: true,
                position: "outside",
                borderWidth: 20,
                borderRadius: 4,
                margin: 10,
                padding: [0, -50],
                rich: {
                  a: {
                    // color: '#333',
                    fontSize: 12,
                    lineHeight: 20
                  },
                  b: {
                    fontSize: 12,
                    lineHeight: 20
                    // color: '#333'
                  }
                }
              },
              emphasis: {
                show: true,
                position: "center",
                formatter: "{c} \n\n",
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 50
                // lineStyle: {
                //     color: '#333'
                // }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold"
                }
              }
            },

            data: []
          }
        ]
      }
    };
  },
  beforeMount() {
    let _this = this;
    console.log("挂载前执行");
    // _this.getPassenger()
  },
  mounted: function() {
    let _this = this;
    //组件挂载的时候获取页面数据
    _this.getPassenger();

    // _this.drawEcharts();
  },
  watch: {
    "top.valueTime": {
      handler: function(val, oldval) {
        let _this = this;
        if (val === null) {
          val = [];
        }
        if (val != null && val.length != 0) {
          _this.top.valueTimeS = "custom";
        }
      },
      deep: true
    }
  },
  methods: {
    /**
     *时间改变
     */
    changeTimes() {
      let _this = this;
      if (_this.top.valueTimeS != "custom") {
        _this.top.valueTime = [];
      }
    },
    getMyDate(str) {
      let _this = this;
      var oDate = new Date(str),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate(),
        oHour = oDate.getHours(),
        oMin = oDate.getMinutes(),
        oSen = oDate.getSeconds(),
        oTime =
          oYear +
          "-" +
          _this.getzf(oMonth) +
          "-" +
          _this.getzf(oDay) 
          // " " +
          // _this.getzf(oHour) +
          // ":" +
          // _this.getzf(oMin) +
          // ":" +
          // _this.getzf(oSen); //最后拼接时间
      return oTime;
    },
    //补0操作
    getzf(num) {
      if (parseInt(num) < 10) {
        num = "0" + num;
      }
      return num;
    },

  /**
     *  获取客流分析数据
     *   */
    getPassenger () {
      let _this = this;
      // console.log(_this.$route.params.storeCode);
      let timestamp = new Date().getTime(); //当前时间
      let timeStart = "";
      let timeEnd = "";
      if (_this.top.valueTimeS == "threeMouth") {
        timeStart = _this.getMyDate((timestamp / 1000 - 7776000) * 1000);
        timeEnd = _this.getMyDate(timestamp);
      } else if (_this.top.valueTimeS == "sixMouth") {
        timeStart = _this.getMyDate((timestamp / 1000 - 15552000) * 1000);
        timeEnd = _this.getMyDate(timestamp);
      } else {
        timeStart = _this.top.valueTime[0];
        timeEnd = _this.top.valueTime[1];
      }
      console.log(timeStart,timeEnd);
      let top_valueSex = '';
      if (_this.top.valueSex != "ALL") {
        top_valueSex = _this.top.valueSex;
      }
      let top_valueMemtype = '';
      if (_this.top.valueMemtype != "ALL") {
        top_valueMemtype = _this.top.valueMemtype;
      }
      console.log(_this.$route.params.storeCode);
      sessionStorage.setItem('sid', JSON.stringify(_this.$route.params.storeCode))
      let storeCode = JSON.parse(sessionStorage.getItem('sid'));
      let json = {
        sid: storeCode,
        sex: top_valueSex,
        sa: _this.top.age.startAge,
        ea: _this.top.age.endAge,
        memtype: top_valueMemtype,
        st: timeStart,
        et: timeEnd
      };
      let formdata = _this.$config.formData(json);


      // 客流报表->总客流+支付客流+支付率
      _this.$axios
        .post(_this.$url.exec_flowAllPay, formdata)
        .then(res => {
          console.log("总客流量返回成功");
          if (res.status == 200) {
            let data = res.data;
            console.log(data);
            
            // _this.passengerCountEcharts.series.data = data.start;
            let List1 = [];
            List1 = data.data;
            for (let i = 0; i < List1.length; i++) {
              let xAxisValue1  = _this.getMyDate(parseInt(List1[i]["ds"]));
              let seriesFlowCntData1  = List1[i].flowCnt;
              let seriesPayCntData1  = List1[i].payCnt;
              let seriesPayRateData1  = List1[i].payRate;
              _this.passengerCountEcharts.xAxis.data.push(xAxisValue1);
              _this.passengerCountEcharts.series[0].data.push(seriesFlowCntData1);
              _this.passengerCountEcharts.series[1].data.push(seriesPayCntData1);
              _this.passengerCountEcharts.series[2].data.push(seriesPayRateData1);
            }
            _this.$nextTick(() => {
              _this.drawEcharts();
            });
          }
        })
        .catch(err => {
          _this.$message("请求出错，请稍后重试！");
      });

      // 客流报表->客流日期趋势
      _this.$axios
        .post(_this.$url.exec_flowTrendDate, formdata)
        .then(res => {
          console.log("日期客流返回成功");
          if (res.status == 200) {
            let data = res.data;
            console.log(data)
            let List2 = [];
            List2 = data.datas;
            console.log(List2)
            for (let i = 0; i < List2.length; i++) {
              let xAxisValue2  = _this.getMyDate(parseInt(List2[i]["date"]));
              let seriesVipcntData2  = List2[i].vipcnt;
              let seriesPayCntData2  = List2[i].paycnt;
              let seriesNopaycntData2  = List2[i].nopaycnt;
              _this.passengerTypeDayEcharts.xAxis.data.push(xAxisValue2);
              _this.passengerTypeDayEcharts.series[0].data.push(seriesVipcntData2);
              _this.passengerTypeDayEcharts.series[1].data.push(seriesPayCntData2);
              _this.passengerTypeDayEcharts.series[2].data.push(seriesNopaycntData2);
            }
            _this.$nextTick(() => {
              _this.drawEcharts();
            });
          }
        })
        .catch(err => {
          _this.$message("请求出错，请稍后重试！");
        });
      
      
      // 客流报表->客流时间趋势
      _this.$axios
        .post(_this.$url.flow_flowTrendTime, formdata)
        .then(res => {
          console.log("时间客流返回成功");
          if (res.status == 200) {
            let data = res.data;
            console.log(data)
            let List3 = [];
            List3 = data.datas;
            console.log(List3)
            for (let i = 0; i < List3.length; i++) {
              let xAxisValue3  = _this.getMyDate(parseInt(List3[i]["date"]))+' '+List3[i].hour+'时';
              let seriesVipcntData3  = List3[i].vipcnt;
              let seriesPayCntData3  = List3[i].paycnt;
              let seriesNopaycntData3  = List2[i].nopaycnt;
              _this.passengerTypeDayEcharts.xAxis.data.push(xAxisValue3);
              _this.passengerTypeDayEcharts.series[0].data.push(seriesVipcntData3);
              _this.passengerTypeDayEcharts.series[1].data.push(seriesPayCntData3);
              _this.passengerTypeDayEcharts.series[2].data.push(seriesNopaycntData3);
            }
            _this.$nextTick(() => {
              _this.drawEcharts();
            });
          }
        })
        .catch(err => {
          _this.$message("请求出错，请稍后重试！");
        });

      
      
      // 客流报表->年龄组统计
      _this.$axios
        .post(_this.$url.flow_byAgeCnt, formdata)
        .then(res => {
          if (res.status == 200) {
            let data = res.data;
            console.log(res);
            // _this.passengerCountEcharts.series.data = data.start;
            let List4 = [];
            List4 = data.data;
            console.log(List4);
            for (let i = 0; i < List4.length; i++) {
              let xAxisValue4  = List4[i].age_groups;
              let seriesCntData4  = List4[i].cnt;
              _this.ageEcharts.xAxis[0].data.push(xAxisValue4);
              _this.ageEcharts.series[0].data.push(seriesCntData4);
            }
            _this.$nextTick(() => {
              _this.drawEcharts();
            });
            
          }
        })
        .catch(err => {
          _this.$message("请求出错，请稍后重试！");
        });
      // _this.byAgeCnt();
      
      
      // 客流报表->月份组统计
      _this.$axios
        .post(_this.$url.flow_byMonthCnt, formdata)
        .then(res => {
          console.log("月份返回成功");
          if (res.status == 200) {
            let data = res.data;
            console.log(res);
            // _this.passengerCountEcharts.series.data = data.start;
            let List5 = [];
            List5 = data.data;
            console.log(List5);
            for (let i = 0; i < List5.length; i++) {
              let xAxisValue5  = List5[i].month;
              let seriesCntData5  = List5[i].cnt;
              _this.mouthCountEcharts.xAxis[0].data.push(xAxisValue5);
              _this.mouthCountEcharts.series[0].data.push(seriesCntData5);
            }
            _this.$nextTick(() => {
              _this.drawEcharts();
            });
          }
        })
        .catch(err => {
          _this.$message("请求出错，请稍后重试！");
        });

      
      
      
      // 客流报表->会员类型统计
      _this.$axios
        .post(_this.$url.flow_byMemtypeCnt, formdata)
        .then(res => {
          console.log("会员类型返回成功");
          if (res.status == 200) {
           let data = res.data;
            console.log(res);
            // _this.passengerCountEcharts.series.data = data.start;
            let List6 = [];
            List6 = data.data;
            console.log(List6);
            for (let i = 0; i < List6.length; i++) {
              // // let legend6  = List6[i].memtype;
              // let seriesvalueData6  = List6[i].cnt;
              let seriesnameData6  = List6[i].memtype;
              let typeEcharts_series_data = {
                value: List6[i].cnt,
                name : List6[i].memtype
              };
              _this.typeEcharts.legend.data.push(seriesnameData6);
              // _this.typeEcharts.series[0].data[i].value=seriesvalueData6;
              // _this.typeEcharts.series[0].data[i].name = seriesnameData6;

              _this.typeEcharts.series[0].data.push(typeEcharts_series_data);
              _this.typeEcharts.series[1].data.push(typeEcharts_series_data);

            }
            _this.$nextTick(() => {
              _this.drawEcharts();
            });
            console.log(_this.typeEcharts.series[0].data)
            // console.log(_this.typeEcharts.series[0].data[i].name)
          }
        })
        .catch(err => {
          _this.$message("请求出错，请稍后重试！");
        });

      
      
      
      // 客流报表->会员性格统计
      _this.$axios
        .post(_this.$url.flow_byTraitCnt, formdata)
        .then(res => {
          console.log("性格返回成功");
          if (res.status == 200) {
            let data = res.data;
            console.log(res);
            let List7 = [];
            List7 = data.data;
            console.log(List7);
            for (let i = 0; i < List7.length; i++) {
              // // let legend6  = List6[i].memtype;
              // let seriesvalueData6  = List6[i].cnt;
              let seriesnameData7  = List7[i].sex;
              let traitEcharts_series_data = {
                value: List7[i].cnt,
                name : List7[i].sex
              };
              _this.traitEcharts.legend.data.push(seriesnameData7);
              // _this.typeEcharts.series[0].data[i].value=seriesvalueData6;
              // _this.typeEcharts.series[0].data[i].name = seriesnameData6;

              _this.traitEcharts.series[0].data.push(traitEcharts_series_data);
              _this.traitEcharts.series[1].data.push(traitEcharts_series_data);

            }
            _this.$nextTick(() => {
              _this.drawEcharts();
            });
          }
        })
        .catch(err => {
          _this.$message("请求出错，请稍后重试！");
        });

      
      
      
      // 客流报表->会员性别统计
      _this.$axios
        .post(_this.$url.flow_bySexCnt, formdata)
        .then(res => {
          console.log("性别返回成功");
          if (res.status == 200) {
            let data = res.data;
            console.log(res);
            let List8 = [];
            List8 = data.data;
            console.log(List8);
            for (let i = 0; i < List8.length; i++) {
              // // let legend6  = List6[i].memtype;
              // let seriesvalueData6  = List6[i].cnt;
              let seriesnameData8  = List8[i].sex;
              let sexEcharts_series_data = {
                value: List8[i].cnt,
                name : List8[i].sex
              };
              _this.sexEcharts.legend.data.push(seriesnameData8);
              // _this.typeEcharts.series[0].data[i].value=seriesvalueData6;
              // _this.typeEcharts.series[0].data[i].name = seriesnameData6;

              _this.sexEcharts.series[0].data.push(sexEcharts_series_data);
              _this.sexEcharts.series[1].data.push(sexEcharts_series_data);

            }
            _this.$nextTick(() => {
              _this.drawEcharts();
            });
          }
        })
        .catch(err => {
          _this.$message("请求出错，请稍后重试！");
        });
        
    },
    
      

    drawEcharts () {
      let _this = this;
      _this.myChart1 = _this.$echarts.init(
      document.getElementById("passengerCountEcharts")
    );
    _this.myChart1.setOption(_this.passengerCountEcharts);

    _this.myChart2 = _this.$echarts.init(
      document.getElementById("passengerTypeDayEcharts")
    );
    _this.myChart2.setOption(_this.passengerTypeDayEcharts);

    _this.myChart3 = _this.$echarts.init(
      document.getElementById("passengerTypeHourEcharts")
    );
    _this.myChart3.setOption(_this.passengerTypeHourEcharts);

    _this.myChart4 = _this.$echarts.init(document.getElementById("ageEcharts"));
    _this.myChart4.setOption(_this.ageEcharts);

    _this.myChart5 = _this.$echarts.init(
      document.getElementById("mouthCountEcharts")
    );
    _this.myChart5.setOption(_this.mouthCountEcharts);

    _this.myChart6 = _this.$echarts.init(
      document.getElementById("typeEcharts")
    );
    _this.myChart6.setOption(_this.typeEcharts);

    _this.myChart7 = _this.$echarts.init(document.getElementById("sexEcharts"));
    _this.myChart7.setOption(_this.sexEcharts);

    _this.myChart8 = _this.$echarts.init(
      document.getElementById("traitEcharts")
    );
    _this.myChart8.setOption(_this.traitEcharts);

    window.addEventListener("resize", () => {
      _this.myChart1.resize();
      _this.myChart2.resize();
      _this.myChart3.resize();
      _this.myChart4.resize();
      _this.myChart6.resize();
      _this.myChart7.resize();
      _this.myChart8.resize();
    });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#passenger {
  width: 100%;
  /* min-height: 539px; */
  color: #fff;
  border-radius: 10px;
  /* padding: 2%; */
  margin: auto;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  min-width: 1021px;
  overflow-x: auto;
}
#browse > div {
  /* width: 98%; */
  padding: 20px;
}
.b_top {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
}
.b_btm {
  background: rgba(255, 255, 255, 0.1);
  margin-top: 20px;
  padding: 20px;
}
.page_title {
  font-size: 20px;
  font-weight: 400;
}

.timeLis {
  display: inline-block;
  vertical-align: middle;
}
.timeLis > li {
  float: left;
  height: 40px;
  line-height: 40px;
  vertical-align: middle;
  margin: 0px 10px;
  color: #c5c5c5;
  cursor: pointer;
}
.timeLis > li.active {
  color: #fff;
}
.top_content {
  margin-top: 15px;
  margin-right: 60px;
}
.age > div {
  display: inline-block;
  vertical-align: middle;
  margin: 0px 10px;
}
.startage input {
  border: 1px solid #91a2eb;
  background: rgba(0, 0, 0, 0);
  border-radius: 20px;
  color: #c5c5c5;
  outline: none;
  width: 100%;
  height: 100%;
  padding-left: 24px;
  box-sizing: border-box;
}
.endage input {
  border: 1px solid #91a2eb;
  background: rgba(0, 0, 0, 0);
  border-radius: 20px;
  color: #c5c5c5;
  outline: none;
  width: 100%;
  height: 100%;
  padding-left: 24px;
  box-sizing: border-box;
}
.age_line {
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 1px;
  background: #91a2eb;
}
.startage {
  display: inline-block;
  position: relative;
  width: 78px;
  height: 36px;
}
.endage {
  display: inline-block;
  position: relative;
  width: 78px;
  height: 36px;
}
.startage:after {
  content: "岁";
  display: block;
  position: absolute;
  right: 15px;
  top: 47%;
  transform: translateY(-50%);
  color: #c5c5c5;
  font-size: 13px;
}
.endage:after {
  content: "岁";
  display: block;
  position: absolute;
  right: 15px;
  top: 47%;
  transform: translateY(-50%);
  color: #c5c5c5;
  font-size: 13px;
}
.operaty > div {
  display: inline-block;
  color: #c5c5c5;
  font-size: 14px;
  margin: 0px 10px;
  width: 110px;
  height: 40px;
  line-height: 40px;
  border: none;
  border-radius: 20px;
  text-align: center;
}
.operaty > div:hover {
  background: rgb(54, 63, 104);
  color: #fff;
  cursor: pointer;
}
.operaty > div:active {
  opacity: 0.8;
}
.search_icon {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  background: url("../../assets/images/search_icon.png") no-repeat;
  background-size: 100% 100%;
}
.todo_search:hover .search_icon {
  background: url("../../assets/images/search_icon_hover.png") no-repeat;
  background-size: 100% 100%;
}

/* 设置元素为行内块元素 */
.inline_block {
  display: inline-block;
}

/* 分析内容详情部分 */
.passenger_top {
  width: 100%;
  margin: 0 15px;
}
/*客流分析标题*/
.passenger_top_name {
  margin: 20px 0 0 40px;
}

.passenger_top_content {
}
.passenger_top_content_charts {
  overflow: hidden;
  width: 98%;
  height: 420px;
  background-color: #313856;
  box-shadow: 1px 1px 18px 0px rgba(64, 128, 255, 0.2);
  border-radius: 16px;
  margin-top: 21px;
  margin-bottom: 42px;
}
.passenger_bottom_content {
  display: inline-block;
  margin: 0 40px;
}
.passenger_bottom_content_name {
  margin: 0 0 22px 14px;
}
.passenger_bottom_content_charts {
  overflow: hidden;
  width: 458px;
  height: 360px;
  background-color: #313856;
  box-shadow: 1px 1px 18px 0px rgba(64, 128, 255, 0.2);
  border-radius: 16px;
  margin-top: 21px;
  margin-bottom: 42px;
}

/*  内容详情部分 echarts画布*/
#passengerCountEcharts {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

#passengerTypeDayEcharts {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

#passengerTypeHourEcharts {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

#ageEcharts {
  width: 95%;
  height: 340px;
  margin: 0 auto;
  color: #fff;
  overflow: hidden;
}

#mouthCountEcharts {
  width: 95%;
  height: 340px;
  margin: 0 auto;
  color: #fff;
  overflow: hidden;
}

#typeEcharts {
  width: 97%;
  height: 350px;
  margin: 10px auto;
  overflow: hidden;
}

#sexEcharts {
  width: 97%;
  height: 350px;
  margin: 10px auto;
  overflow: hidden;
}

#traitEcharts {
  width: 97%;
  height: 350px;
  margin: 10px auto;
  overflow: hidden;
}
</style>
