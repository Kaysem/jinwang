<template>
    <div id="blackadd">
        <div class="b_top">
            <h4 class="page_title">黑名单分析</h4>
            <div class="top_content inline_block searChstore">
                <span>门店：</span>
                <el-select v-model="searChstore" clearable placeholder="请选择" size="medium">
                  <el-option
                    v-for="item in storeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </div>
            <div class="top_content inline_block time">
                <span>时间：</span>
                <el-radio-group v-model="top.valueTimeS" @change="changeTimes()">
                    <el-radio label="threeMouth">最近3个月</el-radio>
                    <el-radio label="sixMouth">最近6个月</el-radio>
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
            <div class="top_content inline_block timesCount">
                <span>次数：</span>
                <div>
                    <el-radio-group v-model="top.valueCount">
                        <el-radio label="ALL">全部</el-radio>
                        <el-radio label="1">1次</el-radio>
                        <el-radio label="2">2次</el-radio>
                        <el-radio label="3">3次及以上</el-radio>
                    </el-radio-group>   
                </div>
            </div>
            
            <div class="top_content inline_block operaty">
                <span>操作：</span>
                <div class="todo_search" @click.stop="blackanalyse()"> <span class="search_icon"></span> 查询 </div>
            </div>
        </div>
        <div class="b_btm">
            <div class="analyse_top">
                <div class="analyse_top_left analyse_top_all inline_block" :data ="black_person">
                    <div class="analyse_top_name">Key Point</div>
                    <div class="analyse_top_content">
                        <!-- <img src="../../assets/images/jinwang01.jpg" alt="用户照片"> -->
                        <img :src="black_person.url" alt="用户照片">
                        <div class="analyse_top_content_period">
                            <div>周期: {{black_person.comeWeek}}</div>
                            <div>时间: {{black_person.comehour}}</div>
                        </div>
                    </div>
                </div>
                <div class="analyse_top_center analyse_top_all inline_block">
                    <div class="analyse_top_name">年龄</div>
                    <div class="analyse_top_content">
                        <div id="ageEcharts" ref="ageEcharts"></div>
                    </div>
                </div>
                <div class="analyse_top_right analyse_top_all inline_block">
                    <div class="analyse_top_name">性别</div>
                    <div class="analyse_top_content">
                      <div id="sexEcharts" ref="sexEcharts"></div>
                    </div>
                </div>
            </div>
            <div class="analyse_center">
                <div class="analyse_top_name">时间</div>
                <div class="analyse_center_content">
                  <div id="hourCountEcharts" ref="hourCountEcharts"></div>
                </div>
            </div>
            <div class="analyse_bottom">
                <div class="analyse_top_left analyse_top_all inline_block">
                    <div class="analyse_top_name">天</div>
                    <div class="analyse_top_content">
                      <div id="weekCountEcharts" ref="weekCountEcharts"></div>
                    </div>
                </div>
                <div class="analyse_top_center analyse_top_all inline_block">
                    <div class="analyse_top_name">月</div>
                    <div class="analyse_top_content">
                      <div id="mouthCountEcharts" ref="mouthCountEcharts"></div>
                    </div>
                </div>
                <div class="analyse_top_right analyse_top_all inline_block">
                    <div class="analyse_top_name">次数</div>
                    <div class="analyse_top_content">
                      <div id="timesCountEcharts" ref="timesCountEcharts"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "Analyse",
  data() {
    return {
      userInfo:{},
      shoplistInfo:null,
      // 门店下拉选择框 s
      storeOptions: [
        {
          value: "",
          label: "全部门店"
        }
      ],
      searChstore: "",

      // 门店下拉选择框 end

      top: {
        valueTimeS: "threeMouth",
        valueTime: [], //时间
        valueSex: "ALL", //性别
        valueCount: "ALL" // 出现次数
      },
      black_person: {},
      // 详情部分 top 部分 年龄图表 start
      resData: "",
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
          }]
      },
      // 详情部分 top部分  图表样式 end

      // 详情部分 top 部分 性别图表 start
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
      // 详情部分 top部分  图表样式 end

      // 详情部分 中间部分  图表样式 start
      hourCountEcharts: {
        tooltip: {
          trigger: "axis",
          formatter: "{a} <br/>{b}->{c}人 ",
          position: function(p) {
            //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
          },
          extraCssText: "width:160px;height:40px;background:rgba(0,0,0,0.2);"
        },
        grid: {
          left: "3%",
          right: "3%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [],
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "2" //坐标线的宽度
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
        series: {
            name: "黑名单人数",
            type: "line",
            data: [],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [
                { type: "average", name: "平均值" },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max"
                  },
                  {
                    symbol: "circle",
                    label: {
                      normal: {
                        position: "start",
                        formatter: "最大值"
                      }
                    },
                    type: "max",
                    name: "最高点"
                  }
                ]
              ]
            }
          }
      },
       // 详情部分 中间部分  图表样式 End

      // 详情部分 bottom 部分 周期图表 start
      weekCountEcharts: {
        color: ["#d780f0"],
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
            data: []
          }
        ]
      },
      // 详情部分 bottom 部分 周期图表 end

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
            data: []
          }
        ]
      },
      // 详情部分 bottom 部分 月份图表 end

      // 详情部分 bottom 部分 次数图表 start
      timesCountEcharts: {
        color: ["#5bdada"],
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
            data: []
          }
        ]
      },
      // 详情部分 bottom 部分 次数图表 end
    };
  },
  beforeMount() {
    let _this = this;
    console.log("挂载前执行");
    // _this.blackanalyse();
  },
  mounted: function() {
    let _this = this;
    _this.userinfo = JSON.parse(sessionStorage.getItem("userinfo"));
    // _this.shoplistInfo = sessionStorage.getItem("shoplistInfo");

    // 获取门店数据
    let storeInfo_list = JSON.parse(sessionStorage.getItem("storeInfo_list"));
    let storeInfo_listJSON={
        value: "",
        label: ""  
    };
    for (let i=0; i<storeInfo_list.length; i++){
     let storeCode=storeInfo_list[i].storeCode;
     let storeName=storeInfo_list[i].storeName;
     storeInfo_listJSON={
        value: storeCode,
        label: storeName  
    }
    _this.storeOptions.push(storeInfo_listJSON);
    }
    //
    // _this.drawEcharts();
    _this.blackanalyse();
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
    changeTimes() {
      let _this = this;
      if (_this.top.valueTimeS != "custom") {
        _this.top.valueTime = [];
      }
      // 时间改变发起数据列表请求
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
          _this.getzf(oDay);
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
    drawEcharts () {
    let _this = this;
    _this.myChart = echarts.init(document.getElementById("ageEcharts"));
    _this.myChart.setOption(_this.ageEcharts);

    _this.myChart1 = echarts.init(document.getElementById("sexEcharts"));
    _this.myChart1.setOption(_this.sexEcharts);

    _this.myChart2 = echarts.init(document.getElementById("hourCountEcharts"));
    _this.myChart2.setOption(_this.hourCountEcharts);

    _this.myChart3 = echarts.init(document.getElementById("weekCountEcharts"));
    _this.myChart3.setOption(_this.weekCountEcharts);

    _this.myChart4 = echarts.init(document.getElementById("mouthCountEcharts"));
    _this.myChart4.setOption(_this.mouthCountEcharts);

    _this.myChart5 = echarts.init(document.getElementById("timesCountEcharts"));
    _this.myChart5.setOption(_this.timesCountEcharts);

    window.addEventListener("resize", () => {
      _this.myChart.resize();
      _this.myChart1.resize();
      _this.myChart2.resize();
      _this.myChart3.resize();
      _this.myChart4.resize();
      _this.myChart5.resize();
    });
  },
    
    /*
      获取分析数据
    */
   blackanalyse (){
      let _this = this;
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
      console.log(_this.shoplistInfo);
      let valueSex = '';
      if (_this.top.valueSex != "ALL"){
        let valueSex = _this.top.valueSex;
      }
      let valueCount = '';
      if (_this.top.valueCount != "ALL"){
        let valueCount = _this.top.valueCount;
      }
      let json = {
        storeid: _this.top.searChstore,
        sex: valueSex,
        comeCnt: valueCount,
        start_time: timeStart,
        end_time: timeEnd
      };
      let formdata = _this.$config.formData(json);
      _this.$axios
        .post(_this.$url.black_analyze, formdata)
        .then(res => {
          console.log("列表重新渲染了");
          if (res.status == 200) {
            let data = res.data;
            let List = [];
            List = data.data;
            console.log(res.data);

            // 最黑的黑名单
            _this.black_person = List.black_person;
            
            // 年龄echarts
            let black_age = List.black_age;
            _this.ageEcharts.xAxis[0].data=[];
            _this.ageEcharts.series[0].data=[];            
            for (let j = 0; j < black_age.length; j++) {
              _this.ageEcharts.xAxis[0].data.push(black_age[j].age_groups);
              _this.ageEcharts.series[0].data.push(black_age[j].age_cnt) ;
            }

            // 性别echarts
            let black_sex = List.black_sex;
            _this.sexEcharts.legend.data= [];
            _this.sexEcharts.series[0].data= [];
            _this.sexEcharts.series[1].data= [];
            for (let i = 0; i < black_sex.length; i++) {
              let legendData  = black_sex[i].sex+'性';
              let sexEcharts_series_data = {
                value: black_sex[i].sex_cnt,
                name : black_sex[i].sex+'性'
              };
              _this.sexEcharts.legend.data.push(legendData);
              _this.sexEcharts.series[0].data.push(sexEcharts_series_data);
              _this.sexEcharts.series[1].data.push(sexEcharts_series_data);
            }
            
            // 时间 echarts
            let black_hour = List.black_hour;
            _this.hourCountEcharts.xAxis.data=[];
            _this.hourCountEcharts.series.data=[];
            for (let i = 0; i < black_hour.length; i++) {

              _this.hourCountEcharts.xAxis.data.push(black_hour[i].hour+'时');
              _this.hourCountEcharts.series.data.push(black_hour[i].hour_cnt);
              // _this.sexEcharts.series[1].data.push(sexEcharts_series_data);
            }

            // 星期echarts
            let black_week = List.black_week;
            _this.weekCountEcharts.xAxis[0].data=[];
            _this.weekCountEcharts.series[0].data=[];
            for (let i = 0; i < black_week.length; i++) {

              _this.weekCountEcharts.xAxis[0].data.push(black_week[i].day_of_week_name);
              _this.weekCountEcharts.series[0].data.push(black_week[i].dayofweek_cnt);
              // _this.sexEcharts.series[1].data.push(sexEcharts_series_data);
            }


            // 月份echarts
            let black_month = List.black_month;
            _this.mouthCountEcharts.xAxis[0].data=[];
            _this.mouthCountEcharts.series[0].data=[];
            for (let i = 0; i < black_month.length; i++) {

              _this.mouthCountEcharts.xAxis[0].data.push(black_month[i].month+'月');
              _this.mouthCountEcharts.series[0].data.push(black_month[i].month_cnt);
              // _this.sexEcharts.series[1].data.push(sexEcharts_series_data);
            }

            // 次数echarts
            let black_times = List.black_times;
            _this.timesCountEcharts.xAxis[0].data=[];
            _this.timesCountEcharts.series[0].data=[];
            for (let i = 0; i < black_times.length; i++) {

              _this.timesCountEcharts.xAxis[0].data.push(black_times[i].come_tag);
              _this.timesCountEcharts.series[0].data.push(black_times[i].count);
              // _this.sexEcharts.series[1].data.push(sexEcharts_series_data);
            }


            _this.$nextTick(() => {
              _this.drawEcharts();
            });
          }
        })
        .catch(err => {
          // _this.$message("请求出错，请稍后重试！");
          // _this.btm.times.listContent = [];
        });
    }
  },


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#analyse {
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
#analyse > div {
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
  padding: 20px 20px 168px 20px;
}
.page_title {
  font-size: 20px;
  font-weight: 400;
}

.top_content {
  margin-top: 15px;
  /* display: inline-block;
    margin-right: 134px; */
  margin-right: 120px;
}

/* 设置元素为行内块元素 */
.inline_block {
  display: inline-block;
}

/* 门店下拉框*/
.el-select {
  width: 138px;
  height: 38px;
  justify-content: flex-start;
}
.searChstore span {
  margin-right: 10px;
}
/* 出现次数 */
.timesCount > div {
  display: inline-block;
  vertical-align: middle;
  margin: 0px 10px;
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
/* 查询操作按钮 */
.operaty > div:hover {
  background: rgb(54, 63, 104);
  color: #fff;
  cursor: pointer;
}

/* 详情块css  start  */
.analyse_top {
  margin-top: 30px;
}
/* .analyse_top_left {
  margin: 0 40px;
} */
/* .analyse_top_center {
  margin: 0 106px;
} */
.analyse_top_all {
  margin: 0 40px 20px;
}
/* .analyse_top_center div{
    float: left;
    width: 50%;
  } */

.analyse_top_content {
  overflow: hidden;
  width: 458px;
  height: 360px;
  background-color: #313856;
  box-shadow: 1px 1px 18px 0px rgba(64, 128, 255, 0.2);
  border-radius: 16px;
}
.analyse_top_content img {
  width: 162px;
  height: 187px;
  margin: 84px 0 0 47px;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.5);
}

.analyse_top_content_period {
  float: right;
  display: inline-block;
  margin: 160px 90px 0 0;
  font-size: 14px;
  font-family: "微软雅黑";
  font-weight: 700;
}
.analyse_top_content_period div {
  margin: 10px 0;
}

/* 详情部分-top部分-标题*/
.analyse_top_name {
  margin: 0 0 22px 14px;
}
/* 按时段分析图表部分 */
.analyse_center {
  width: 100%;
  margin: 40px 0 0 24px;
}
.analyse_center_content {
  width: 98%;
  height: 360px;
  background-color: #313856;
  box-shadow: 1px 1px 18px 0px rgba(64, 128, 255, 0.2);
  border-radius: 20px;
}
.analyse_bottom {
  margin-top: 40px;
}

/*echarts图表样式*/
#ageEcharts {
  width: 95%;
  height: 340px;
  margin: 0 auto;
  color: #fff;
  overflow: hidden;
}
#sexEcharts {
  width: 97%;
  height: 350px;
  margin: 10px auto;
  overflow: hidden;
}
#hourCountEcharts {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
#weekCountEcharts {
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
#timesCountEcharts {
  width: 95%;
  height: 340px;
  margin: 0 auto;
  color: #fff;
  overflow: hidden;
}
</style>
