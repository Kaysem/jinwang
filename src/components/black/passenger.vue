<template>
    <div id="blackadd">
        <div class="b_top">
            <h4 class="page_title">客流报表</h4>
            <div class="top_content inline_block time">
                <span>时间：</span>
                <el-radio-group v-model="top.valueTimeS" @change="changeTimes()">
                    <el-radio label="half">最近半小时</el-radio>
                    <el-radio label="hour">最近一小时</el-radio>
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
                <el-radio-group v-model="top.valueSex" @change="changeSex()">
                    <el-radio label="ALL">全部</el-radio>
                    <el-radio label="男">男性</el-radio>
                    <el-radio label="女">女性</el-radio>
                </el-radio-group>
            </div>
            <div class="top_content inline_block sex">
                <span>身份：</span>
                <el-radio-group v-model="top.valueStatus" @change="changeSex()">
                    <el-radio label="ALL">全部</el-radio>
                    <el-radio label="vip">VIP</el-radio>
                    <el-radio label="buy">消费顾客</el-radio>
                    <el-radio label="notBuy">未消费顾客</el-radio>
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
                <div class="todo_search" @click.stop="usercomein_list()"> <span class="search_icon"></span> 查询 </div>
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
        valueTimeS: "half",
        valueTime: [], //时间
        valueSex: "ALL", //性别
        valueStatus: "ALL", //身份
        age: {
          startAge: "1",
          endAge: "99"
        },
        kind: "按时间" //位置按时不需要
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
              backgroundColor:'#313856',
              name : '总客流量与支付客流量对比图',
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
            areaStyle: { normal: {} },
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: "#f1bd2a",
                lineStyle: {
                  color: "#f1bd2a"
                }
              }
            },
            data: [1200, 1320, 1010, 1340, 900, 2300, 2100]
          },
          {
            name: "支付客流量",
            type: "line",
            stack: "总量2",
            areaStyle: { normal: {} },
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: "#CD2626",
                lineStyle: {
                  color: "#CD2626"
                }
              }
            },
            data: [820, 982, 791, 534, 1190, 530, 310]
          },
          {
            name: "支付率",
            type: "line",
            stack: "总量3",
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#2ec7c9",
                lineStyle: {
                  color: "#2ec7c9"
                }
              }
            },
            data: [65, 99, 18, 87, 91, 57, 69]
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
              backgroundColor:'#313856',
              name : '总客流量与支付客流量对比图',
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
          data: ["00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00"],
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
            data: [1200, 1320, 1010, 1340, 900, 2300, 2100]
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
            data: [820, 982, 791, 534, 1190, 530, 310]
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
            data: [65, 99, 18, 87, 91, 57, 69]
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
              backgroundColor:'#313856',
              name : '总客流量与支付客流量对比图',
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
          data: ["00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00"],
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
            data: [1200, 1320, 1010, 1340, 900, 2300, 2100]
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
            data: [820, 982, 791, 534, 1190, 530, 310]
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
            data: [65, 99, 18, 87, 91, 57, 69]
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
            data: ["18岁至25岁", "26岁至35岁", "36岁至45岁", "46岁至55岁"],
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
            data: [
              20,
              52,
              18,
              55,
              46,
              35,
              29,
              50,
              32,
              38,
              52,
              18,
              55,
              46,
              20,
              52,
              18,
              55,
              46,
              35,
              29,
              50,
              32,
              38,
              52,
              18,
              55,
              46
            ]
          }
        ]
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
            data: ["7月", "8月", "9月"],
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
            data: [
              20,
              52,
              18,
              55,
              46,
              35,
              29,
              50,
              32,
              38,
              52,
              18,
              55,
              46,
              20,
              52,
              18,
              55,
              46,
              35,
              29,
              50,
              32,
              38,
              52,
              18,
              55,
              46
            ]
          }
        ]
      },

      // 详情部分 top 部分 类型图表 start
      typeEcharts: {
        color: ["#f1bd2a", "#4b77e5", "#d780f0"],
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
          data: ["VIP顾客", "消费顾客","未消费顾客"],
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            data: [{ value: 1335, name: "VIP顾客" }, { value: 1910, name: "消费顾客" },{ value: 310, name: "未消费顾客" }]
          }
        ]
      },

      // 详情部分 top 部分 性别图表 start
      sexEcharts: {
        color: ["#d780f0", "#4b77e5"],
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
          data: ["女性", "男性"],
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            data: [{ value: 335, name: "女性" }, { value: 310, name: "男性" }]
          }
        ]
      },

      // 详情部分 top 部分 性格图表 start
      traitEcharts: {
        color: ["#d780f0", "#4b77e5"],
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
          data: ["感性消费", "理性消费"],
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            data: [{ value: 8335, name: "感性消费" }, { value: 7310, name: "理性消费" }]
          }
        ]
      },
    };
  },
  beforeMount() {
    let _this = this;
    console.log("挂载前执行");
  },
  mounted: function() {
    let _this = this;
    _this.myChart1 = _this.$echarts.init(document.getElementById("passengerCountEcharts"));
    _this.myChart1.setOption(_this.passengerCountEcharts);

    _this.myChart2 = _this.$echarts.init(document.getElementById("passengerTypeDayEcharts"));
    _this.myChart2.setOption(_this.passengerTypeDayEcharts);

    _this.myChart3 = _this.$echarts.init(document.getElementById("passengerTypeHourEcharts"));
    _this.myChart3.setOption(_this.passengerTypeHourEcharts);
    
    _this.myChart4 = _this.$echarts.init(document.getElementById("ageEcharts"));
    _this.myChart4.setOption(_this.ageEcharts);

    _this.myChart5 = _this.$echarts.init(document.getElementById("mouthCountEcharts"));
    _this.myChart5.setOption(_this.mouthCountEcharts);

    _this.myChart6 = _this.$echarts.init(document.getElementById("typeEcharts"));
    _this.myChart6.setOption(_this.typeEcharts);

    _this.myChart7 = _this.$echarts.init(document.getElementById("sexEcharts"));
    _this.myChart7.setOption(_this.sexEcharts);

    _this.myChart8 = _this.$echarts.init(document.getElementById("traitEcharts"));
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
    /**
     * 时间更改事件
     */
    ClickTime(e, state) {
      let _this = this;
      if ($(e.target).prop("tagName") != "LI") {
        $(".timeLis li")
          .eq(2)
          .addClass("active")
          .siblings("li")
          .removeClass("active");
      } else {
        $(e.target)
          .addClass("active")
          .siblings("li")
          .removeClass("active");
      }
    },
    /**
     * 更改性别
     */
    changeSex(val) {
      let _this = this;
    },

    /**
     * 按时间多选框
     */
    checkBoxChange_T(item, index) {
      let _this = this;
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
          _this.getzf(oDay) +
          " " +
          _this.getzf(oHour) +
          ":" +
          _this.getzf(oMin) +
          ":" +
          _this.getzf(oSen); //最后拼接时间
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
     * 列表数据
     */
    usercomein_list(p = 1) {
      let _this = this;
      let timestamp = new Date().getTime(); //当前时间
      let timeStart = "";
      let timeEnd = "";
      if (_this.top.valueTimeS == "half") {
        timeStart = _this.getMyDate((timestamp / 1000 - 1800) * 1000);
        timeEnd = _this.getMyDate(timestamp);
      } else if (_this.top.valueTimeS == "hour") {
        timeStart = _this.getMyDate((timestamp / 1000 - 3600) * 1000);
        timeEnd = _this.getMyDate(timestamp);
      } else {
        timeStart = _this.top.valueTime[0];
        timeEnd = _this.top.valueTime[1];
      }
      let json = {
        page: p,
        sex: _this.top.valueSex,
        ageStart: _this.top.age.startAge,
        ageEnd: _this.top.age.endAge,
        timeStart: timeStart,
        timeEnd: timeEnd
      };
      let formdata = _this.$config.formData(json);
      _this.$axios
        .post(_this.$url.usercomein_list, formdata)
        .then(res => {
          console.log("列表重新渲染了");
          if (res.status == 200) {
            let data = res.data;
            _this.page.currentPage = data.start;
            _this.page.total = data.count;
            _this.page.allPages = data.pages;
            let List = [];
            List = data.datas;
            for (let i = 0; i < List.length; i++) {
              List[i]["checked"] = false;
              List[i]["ts"] = _this.getMyDate(parseInt(List[i]["time"]));
            }
            _this.btm.times.listContent = List;
            _this.$nextTick(() => {
              _this.Time_picsMargin();
            });
          }
        })
        .catch(err => {
          // _this.$message("请求出错，请稍后重试！");
          _this.btm.times.listContent = [];
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
