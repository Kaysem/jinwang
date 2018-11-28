
<template>
  <div id="usercenter">
    <div class="US_search">
      <el-input v-model="USinput" placeholder="请输入会员id" @keyup.enter.native="enter_search()"></el-input>
      <el-button class="USsearch_btn" @click="enter_search()">查询</el-button>
    </div>
    <div class="top_content clearfix" v-model="vipInfo">
      <div class="fl t_c_l">
        <div class="t_l_img">
          <img src="../assets/images/a1.jpg" alt>
        </div>
        <div id="vip_ico">
          <img src="../assets/images/vip.png" alt="VIP">
          <span>{{vipInfo.memName}}</span>
        </div>
        <div>会员ID:{{vipInfo.memNo}}</div>
      </div>
      <div class="fr t_c_r">
        <el-row>
          <el-col :span="3">
            <p>性别：</p>
            <p class="infoTip">{{vipInfo.sex}}</p>
          </el-col>
          <el-col :span="3">
            <p>年龄：</p>
            <p class="infoTip num">{{vipInfo.age}}</p>
          </el-col>
          <el-col :span="3">
            <p>生肖：</p>
            <p class="infoTip">{{vipInfo.shengxiao}}</p>
          </el-col>
          <el-col :span="3">
            <p>星座：</p>
            <p class="infoTip">{{vipInfo.xingzuo}}</p>
          </el-col>
          <el-col :span="4">
            <p>生日：
              <img src="../assets/images/birthday.png" alt>
            </p>
            <p class="infoTip num">{{vipInfo.birthday}}</p>
          </el-col>
          <el-col :span="4">
            <p>电话：</p>
            <p class="infoTip num">{{vipInfo.memPhone}}</p>
          </el-col>
          <el-col :span="4">
            <p>微信号：</p>
            <p class="infoTip num">{{vipInfo.xingzuo}}</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <p>会员时长：</p>
            <p class="infoTip">{{vipInfo.xingzuo}}</p>
          </el-col>
          <el-col :span="6">
            <p>入住会员时间：</p>
            <p class="infoTip num">{{vipInfo.createDate}}</p>
          </el-col>
          <el-col :span="7">
            <p>最后一次到店时间：</p>
            <p class="infoTip num">{{vipInfo.last_visit_date}}（距今 15 天）</p>
          </el-col>
          <el-col :span="8">
            <p>地址：</p>
            <p class="infoTip">{{vipInfo.native_city}}</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="center_top_box">
      <div class="center_top_box_left">
        <div class="center_top_box_left_title">顾客RFM模型分析</div>
        <div class="center_top_box_left_content">
          <div class="center_top_box_left_content_echarts">
            <div id="RFMEcharts" ref="RFMEcharts"></div>
          </div>
          <div class="center_top_box_left_content_content" v-model="RFMAnalyze">
            <div>
              <img src="../assets/images/RFM_icon.png" class="RFM_icon">
              <p>RFM评分 ：{{RFMAnalyze.rfm}}</p>
              <p>活跃度高、消费能力高</p>
              <p>忠诚度较高,属于高价值顾客</p>
              <p>对产品及服务要求高,需要重点提供优质服务</p>
            </div>
          </div>
        </div>
      </div>
      <div class="center_top_box_right">
        <el-carousel height="390px" loop="true" class="el_carousel__indicators" v-model="recommendProduct">
          <el-carousel-item>
              <h2>推荐商品</h2>
              <ul class="recommend1">
                <li>
                  <span><img src="..\assets\images\top1.png" alt=""></span>
                  <span>伊丽莎白雅顿Elizabeth Arden金胶	</span>
                  <span>¥ 360</span>
                </li>
                <li>
                    <span><img src="..\assets\images\top2.png" alt=""></span>
                    <span>伊丽莎白雅顿Elizabeth Arden金胶	</span>
                    <span>¥ 360</span></li>
                <li>
                  <span><img src="..\assets\images\top3.png" alt=""></span>
                  <span>伊丽莎白雅顿Elizabeth Arden金胶	</span>
                  <span>¥ 360</span>
                </li>
                <li>
                  <span>4</span>
                  <span>伊丽莎白雅顿Elizabeth Arden金胶	</span>
                  <span>¥ 360</span>
                </li>
                <li>
                  <span>5</span>
                  <span>伊丽莎白雅顿Elizabeth Arden金胶	</span>
                  <span>¥ 360</span>
                </li>
              </ul>
          </el-carousel-item>
          <el-carousel-item>
            <h2>推荐商品</h2>
            <ul class="recommend2">
                <li>
                  <span>6</span>
                  <span>伊丽莎白雅顿Elizabeth Arden金胶	</span>
                  <span>¥ 360</span>
                </li>
                <li><span>7</span>
                    <span>伊丽莎白雅顿Elizabeth Arden金胶	</span>
                    <span>¥ 360</span></li>
                <li>
                  <span>8</span>
                  <span>伊丽莎白雅顿Elizabeth Arden金胶	</span>
                  <span>¥ 360</span>
                </li>
                <li>
                  <span>9</span>
                  <span>伊丽莎白雅顿Elizabeth Arden金胶	</span>
                  <span>¥ 360</span>
                </li>
                <li>
                  <span>10</span>
                  <span>伊丽莎白雅顿Elizabeth Arden金胶	</span>
                  <span>¥ 360</span>
                </li>
              </ul>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="center_box">
      <div>
        <el-radio-group v-model="top.valueTimeS" @change="changeTimes()">
          <el-radio label="threeMouth">最近三个月</el-radio>
          <el-radio class="custom" label="custom">自定义
            <el-date-picker
              v-model="top.valueTime"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="top.pickerOptions0"
            ></el-date-picker>
          </el-radio>
        </el-radio-group>
      </div>
      <div class="c_row">
        <el-row>
          <el-col :span="4">
            <p class="c_tips">￥
              <span class="c_tips_num">12.485</span>
            </p>
            <p>总消费</p>
          </el-col>
          <el-col :span="4">
            <p class="c_tips">￥
              <span class="c_tips_num">3.265</span>
            </p>
            <p>平均消费</p>
          </el-col>
          <el-col :span="4">
            <p class="c_tips">
              <span class="c_tips_num">32</span>件
            </p>
            <p>购买件数</p>
          </el-col>
          <el-col :span="4">
            <p class="c_tips">
              <span class="c_tips_num">30</span>次
            </p>
            <p>到店次数</p>
          </el-col>
          <el-col :span="4">
            <p class="c_tips">
              <span class="c_tips_num">32</span>次
            </p>
            <p>购买次数</p>
          </el-col>
          <el-col :span="4">
            <p class="c_tips">
              <span class="c_tips_num">80</span>%
            </p>
            <p>购买率</p>
          </el-col>
        </el-row>
      </div>
      <div class="c_btm clearfix">
        <div class="c_btm_left fl">
          <div id="chart_kind"></div>
        </div>
        <div class="c_btm_right fr" v-model="favoriteProduct">
          <p>行为习惯</p>
          <el-row>
            <el-col :span="12">最喜欢购物时间段：</el-col>
            <el-col :span="12">
              <span class="c_b_tips">{{favoriteProduct.fav_buyTime}} 时</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">最喜欢的购物日：</el-col>
            <el-col :span="12">
              <span class="c_b_tips">{{favoriteProduct.fav_buyDaysoftheweek}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">最喜欢的购物天气：</el-col>
            <el-col :span="12">
              <span class="c_b_tips">{{favoriteProduct.fav_buyweather}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">最爱买的商品类型：</el-col>
            <el-col :span="12">
              <span class="c_b_tips">{{favoriteProduct.fav_skuType}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">最爱买的商品名称：</el-col>
            <el-col :span="12">
              <span class="c_b_tips">{{favoriteProduct.fav_skuName}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">买的最贵的商品：</el-col>
            <el-col :span="12">
              <span class="c_b_tips">{{favoriteProduct.mostexpensive_skuname}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">买的最贵的商品价格：</el-col>
            <el-col :span="12">
              <span class="c_b_tips">¥{{favoriteProduct.maxpay_mount}}元</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">最大订单金额：</el-col>
            <el-col :span="12">
              <span class="c_b_tips">¥{{favoriteProduct.mostexpensive_skuprice}}元</span>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="power_box">
      <div class="chart_powerEcharts">
        <div id="chart_power"></div>
      </div>
      <div class="receipt">
        <div class="receipt_top">
          <div class="receipt_top_left">
            <p>店号: 101177</p>
            <p>机号: 2938</p>
            <p>日期: 2018-01-02</p>
          </div>
          <div class="receipt_top_right">
            <p>流水号: 1929308489080</p>
            <p>收银员: 2384</p>
            <p></p>
          </div>
        </div>
        <div class="receipt_table">
          <el-table
            style="width: 100%"
            max-height="250">
            <el-table-column
              prop="date"
              label="商品名">
            </el-table-column>
            <el-table-column
              prop="name"
              label="数量">
            </el-table-column>
            <el-table-column
              prop="province"
              label="单价">
            </el-table-column>
            <el-table-column
              prop="city"
              label="金额">
            </el-table-column>
          </el-table>
          <div class="receipt_total">
            <p>订单金额: ¥ 258.00</p>
            <p>实际支付: ¥ 258.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "usercenter",
  data() {
    return {
      // memNumber: "", //记录用户编码id ，更改时间的时候传入
      USinput: "",
      userinfo: {},
      vipInfo: {},  // 会员信息
      RFMAnalyze: {}, //顾客RFM模型分析
      recommendProduct: {}, // 推荐商品
      favoriteProduct: {}, // 行为习惯
      top: {
        valueTimeS: "threeMouth",
        valueTime: [], //时间
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() > Date.now() - 8.64e6;
          }
        }
      }, // 时间单选框操作

      chart_kind: {
        option: {
          title: {
            text: "常买商品",
            textStyle: { color: "#444444", fontWeight: "700", fontSize: 20 },
            top: "5%",
            left: "center"
          },
          backgroundColor: "rgba(0,0,0,0)",
          color: ["#4080ff"],
          tooltip: {
            trigger: "axis",
            axisPointer: { type: "line", lineStyle: { opacity: 0 } }
          },
          grid: {
            left: "3%",
            right: "3%",
            bottom: "5%",
            top: "100",
            containLabel: true,
            z: 22
          },
          label: { normal: { show: true, position: "top" } },
          xAxis: [
            {
              type: "category",
              gridIndex: 0,
              axisTick: { show: false },
              splitLine: { show: false },
              axisLine: { lineStyle: { color: "#4080ff" } },
              axisLabel: { textStyle: { color: "#4080ff" } },
              data: [] //name值
            }
          ],
          yAxis: [
            {
              type: "value",
              axisTick: { show: false },
              splitLine: { show: true, lineStyle: { color: "#d4daf8" } },
              axisLine: { lineStyle: { color: "#4080ff" } },
              axisLabel: { textStyle: { color: "#4080ff" } }
            }
          ],
          series: {
              name: "",
              type: "bar",
              barWidth: "10%",
              itemStyle: { normal: { color: "#4080ff", barBorderRadius: 10 } },
              data: [] //数值
            }
        }
      },
      // 顾客消费记录表
      chart_power: {
        color: ["#6666ff","#c466ff"],
        title: {
          text: "顾客消费记录表",
          textStyle: { color: "#444444", fontWeight: "700", fontSize: 20 },
          top: 15,
          left: "center"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["单次单价", "购买件数"],
          top: "10%",
          right: 10,
        },
        grid: {
          top: "25%",
          left: "3%",
          right: "4%",
          bottom: "15%",
          containLabel: true
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
          },
          {
            type: "inside"
          }
        ],
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLine: { lineStyle: { color: "#4080ff" } },
          axisLabel: { textStyle: { color: "#4080ff" } },
        },
        yAxis: {
          type: "value",
          splitLine: { show: true, lineStyle: { color: "#d4daf8" } },
          axisLine: { lineStyle: { color: "#4080ff" } },
          axisLabel: { textStyle: { color: "#4080ff" } }
        },
        series: [
          {
            name: "单次单价",
            type: "line",
            stack: "总量",
            smooth: true, //这个是把线变成曲线
            data: [120, -132, -101, 134, 90, 230, 210]
          },
          {
            name: "购买件数",
            type: "line",
            stack: "总量",
            smooth: true, //这个是把线变成曲线
            data: [220, -182, -191, 234, 290, 330, 310]
          }
        ]
      },
      // RFM Echarts图
      RFMEcharts: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "1%",
          right: "1%",
          bottom: "15%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["活跃度", "忠诚度", "消费能力"],
            // data: [],
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#4b62df", //左边线的颜色
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
                color: "#4b62df",
                width: "2"
              }
            },
            minInterval: 1,
            max: function(value) {
              return value.max + 1;
            },
            splitLine: {
              lineStyle: {
                color: "#d4daf8" // 设置刻度线颜色
              }
            }
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "30%",
            barWidth: 20, //设置柱状宽度
            itemStyle: {
              normal: {
                barBorderRadius: 40,
                color: function(params) {
                  var colorList = ["#6666ff", "#66a3ff", "#c466ff"];
                  return colorList[params.dataIndex];
                }
              }
            },
            data: [2, 3, 3]
          }
        ]
      }
    };
  },
  mounted: function() {
    let _this = this;
    _this.drawEcharts();

    _this.userinfo = JSON.parse(sessionStorage.getItem("userinfo"));
  },
  watch: {
    "top.valueTime": {
      handler: function(val, oldval) {
        console.log(val);
        let _this = this;
        if (val === [] || val === null) {
          _this.top.valueTime = [];
          _this.top.valueTimeS = "";
        }
        if (val != [] && val != null && val.length != 0) {
          _this.top.valueTimeS = "custom";
          let timestamp = _this.getMyDate(new Date().getTime()); //当前时间
          console.log(
            _this.top.valueTime[1].substring(0, 10),
            timestamp,
            _this.top.valueTime[1].substring(0, 10) ==
              timestamp.substring(0, 10)
          );
          if (
            _this.top.valueTime[1].substring(0, 10) ==
            timestamp.substring(0, 10)
          ) {
            _this.top.valueTime[1] = timestamp;
          } else {
            _this.top.valueTime[1] =
              _this.top.valueTime[1].substring(0, 10) + " " + "23:59:59";
          }
        } else {
          _this.top.valueTimeS = "threeMouth";
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
        oTime = oYear + "-" + _this.getzf(oMonth) + "-" + _this.getzf(oDay);
      // " " +
      // _this.getzf(oHour) +
      // ":" +
      // _this.getzf(oMin) +
      // ":" +
      // _this.getzf(oSen); //最后拼接时间
      return oTime;
    },
    getDateTime(str) {
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
          _this.getzf(oDay)+
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
    enter_search() {
      let _this = this;
      if (_this.USinput == "" || _this.USinput == undefined) {
        alert("请输入正确的会员id");
      } else {
        //发送请求  S
        _this.vipInfo();
        //发送请求 E
      }
    },
    drawEcharts() {
      let _this = this;
      let chart_kind = document.getElementById("chart_kind");
      _this.myChartKind = _this.$echarts.init(chart_kind);
      _this.myChartKind.setOption(_this.chart_kind.option);

      _this.myChart = _this.$echarts.init(
        document.getElementById("RFMEcharts")
      );
      _this.myChart.setOption(_this.RFMEcharts);
      let chart_power = document.getElementById("chart_power");
      _this.myChartPower = _this.$echarts.init(chart_power);
      _this.myChartPower.setOption(_this.chart_power);
      window.addEventListener("resize", function() {
        _this.myChartKind.resize();
        _this.myChart.resize();
        _this.myChartPower.resize();
      });
    },

    // 发送请求 查询会员信息
    vipInfo() {
      let _this = this;
      let json = {
        vipID: _this.USinput,
      };
      let formdata = _this.$config.formData(json);
      _this.$axios
        .post(_this.$url.portrait, formdata)
        .then(res => {
          if (res.status == 200) {
            console.log(res)
            let data = res.data.data;
            _this.vipInfo = data.vipInfo;
            _this.RFMAnalyze = data.RFMAnalyze;
            _this.recommendProduct = data.recommendProduct;
            _this.favoriteProduct = data.favoriteProduct;

            _this.chart_kind.option.xAxis.data = [];
            _this.chart_kind.option.series.data =[];
            for(let i=0; i<data.usedBuyProduct.length; i++) {
              let fav_itemName = data.usedBuyProduct.fav_itemName[i];
              let cnt = data.usedBuyProduct.cnt[i];
              _this.chart_kind.option.xAxis.data.push(fav_itemName);
              _this.chart_kind.option.series.data.push(cnt);
            }
          }
        }).catch(err => {
          console.log("异常:",err);
        });
    }
  }
};
</script>

<style scoped>
#usercenter {
  width: 96%;
  background: #fff;
  color: #222;
  border-radius: 10px;
  padding: 2%;
  margin: auto;
  min-width: 870px;
  overflow-x: auto;
}
.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 30%;
}
.el-input input {
  height: 40px;
}
.US_search {
  height: 50px;
}
.US_search input {
  width: 100%;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  font-size: 16px;
}
.el-input--prefix .el-input__inner {
  padding-left: 75px;
}
.el-table__body {
  table-layout: auto !important;
}
.el-table th > .cell {
  font-weight: 400;
}
.it_s {
  font-size: 14px;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.el-col {
  font-size: 14px;
  word-wrap: break-word;
}
.t_c_r .el-col > p:nth-child(1) {
  font-weight: 700;
  color: #757577;
  margin-bottom: 5px;
}
.t_c_r .el-col > p:nth-child(2) {
  font-weight: 700;
  color: black;
}
.el-row {
  margin-bottom: 5px !important;
}
.fx_box .m_pm {
  margin: 0 auto 30px;
}
.el-carousel__indicators {
  width: 100%;
  text-align: center;
}
.el-carousel__indicator {
  margin: 0 10px;
}
.top_content {
  height: 170px;
  background-color: #f3f4fc;
  box-shadow: 0px 0px 16px 1px rgba(75, 98, 223, 0.19);
  border-radius: 14px;
  font-size: 0;
  padding: 20px;
  margin-top: 20px;
}
.t_l_img {
  width: 120px;
  height: 120px;
  margin: auto;
}
.t_l_img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.top_content > div {
  font-size: 14px;
}
.t_c_l {
  width: 20%;
  height: 100%;
  text-align: center;
  color: #4b62df;
  font-weight: 700;
}

#vip_ico {
  width: 100%;
  text-align: center;
}
.t_c_r {
  width: 80%;
  color: #666666;
  padding: 20px 0px;
}
.infoTip {
  color: #000;
  font-size: 16px;
}
.infoTip.num {
  line-height: 26px;
}
.t_c_r .el-row + .el-row {
  margin-top: 30px;
}
.center_top_box {
  height: 100%;
  margin: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.center_top_box .center_top_box_left,
.center_top_box_right {
  width: 48.4%;
  height: 410px;
  padding: 20px 10px 0 10px;
  background-color: #f3f4fc;
  box-shadow: 0px 0px 16px 1px rgba(75, 98, 223, 0.19);
  border-radius: 14px;
}
.center_top_box_left_title {
  width: 100%;
  font-weight: 700;
  color: #444;
  text-align: center;
}
.center_top_box_left_content {
  text-align: center;
}
.center_top_box_left_content_echarts {
  width: 52%;
  height: 388px;
  display: inline-block;
  overflow: hidden;
}
.center_top_box_left_content_content {
  width: 46.5%;
  height: 388px;
  display: inline-block;
  position: relative;
}
.center_top_box_left_content_content > div {
  width: 100%;
  height: 161px;
  /* line-height: 388px; */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: url(../assets/images/RFM.png);
  background-size: 100% 100%;
}
.center_top_box_left_content_content .RFM_icon {
  position: absolute;
  top: -5px;
  right: 13px;
}
.center_top_box_left_content_content > div p:nth-child(2) {
  width: 200px;
  line-height: 30px;
  font-weight: 700;
  margin: 20px 0 5px 25px;
  text-align: left;
}
.center_top_box_left_content_content > div p:nth-child(3),
p:nth-child(4),
p:nth-child(5) {
  width: 300px;
  line-height: 25px;
  font-weight: 700;
  margin: 0 0 0 25px;
  text-align: left;
  color: #6666ff;
  font-size: 12px;
}
.center_top_box .center_top_box_left {
  margin-right: 0.8%;
}
.center_top_box .center_top_box_right {
  margin-left: 0.8%;
}
.el_carousel__indicators {
  width: 100%;
  text-align: center;
}
.el_carousel__indicators table th {
  text-align: center;
}
.el_carousel__indicators >>> .el-carousel__indicator {
  margin: 0 10px;
}
.el_carousel__indicators >>> .el-carousel__button {
  background-color: #6666ff;
  height: 12px;
  width: 12px;
}

.center_box {
  height: 100%;
  padding: 20px;
  background-color: #f3f4fc;
  box-shadow: 0px 0px 16px 1px rgba(75, 98, 223, 0.19);
  border-radius: 14px;
  margin: 20px 0px;
}
.c_row {
  text-align: center;
  font-size: 14px;
  color: #222222;
  margin: 20px 0px 30px;
}
.c_tips {
  color: #6666ff;
}
.c_tips_num {
  font-size: 20px;
}
.c_btm {
  margin: 0px 20px;
  height: 357px;
  font-size: 0;
}
.c_btm > div {
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
.c_btm_left {
  width: 70%;
}
.c_btm_right {
  width: 29%;
}
.c_btm_right p {
  color: #4080ff;
  font-size: 18px;
  margin: 20px 0px;
  text-align: center;
}
.c_btm_right .el-row {
  margin-bottom: 15px !important;
}
.c_btm_right .el-row:last-child {
  margin-bottom: 0px !important;
}
.c_btm_right .el-row > div {
  padding-left: 15px;
}
#chart_kind {
  width: 100%;
  height: 357px;
}
.power_box {
  height: 400px;
  background-color: #f3f4fc;
  box-shadow: 0px 0px 16px 1px rgba(75, 98, 223, 0.19);
  border-radius: 14px;
  padding: 20px;
}
.chart_powerEcharts {
  width: 70%;
  display: inline-block;
  /* overflow: hidden; */
}
#chart_power {
  width: 100%;
  height: 400px;
}
#usercenter .US_search {
}

@media (max-width: 1200px) {
  .c_btm_right .el-row {
    margin-bottom: 0 !important;
  }
}
#RFMEcharts {
  width: 95%;
  height: 100%;
  margin: 0 auto;
  color: #fff;
  overflow: hidden;
}

/* 时间控件样式*/
.center_box >>> .el-radio__inner {
  border-width: 2px;
}
.center_box >>> .el-input__inner {
  width: 364px;
  height: 35px;
  /* background-color: #1a1f37; */
  border-radius: 20px;
  border-color: #91a2eb;
  border-width: 2px;
  /* color: #a8a8a8; */
}
.center_box >>> .el-range-input,
.el-range-separator {
  color: #000;
}
.center_box >>> .el-range-separator {
  color: #000;
}
.receipt {
  width: 29%;
  height: 100%;
  display: inline-block;
  border: 1px solid #dfdff8;
  clear: both;
}
.receipt_top_left {
    /* width: 49%; */
    margin: 2% 1% 2% 2%;
    float: left;
}
.receipt_top_right {
    /* width: 49%; */
    float: right;
    margin: 2% 2% 2% 1%;
}
.receipt_top_left>p,.receipt_top_right>p {
  color: #666666;
  font-weight: 700;
  line-height: 25px;
  font-size: 12px;
}
.receipt_table >>> .el-table{
  float: left;
}
.receipt_total {
    width: 100%;
    float: right;
    display: flex;
    flex-direction: column;
    background-color: #f3f4fc;
    /* border: 1px solid #666666; */
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
}
.receipt_total p {
  text-align: right;
  margin: 10px 20px 0 0;
}
.receipt_total p:nth-child(1) {
  font-size: 12px;
  font-weight: 700;
  color: #666666;
}
.receipt_total p:nth-child(2) {
  font-size: 13px;
  font-weight: 700;
  color: #5c5c5d;
}
.has-guttertable thead tr {
  background-color: #dfdff8;
}
.receipt_table >>> .el-table{
  background-color: #f3f4fc;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
}
.recommend1,.recommend2 {
  width: 80%;
  margin: 20px 10%;
}
.recommend1 li,.recommend2 li {
  line-height: 60px;
}
.recommend1 li>span:nth-child(2),.recommend1 li>span:nth-child(3),.recommend2 li>span:nth-child(2),.recommend2 li>span:nth-child(3) {
  font-weight: 700;
}
.recommend1 li:nth-child(3)>span:nth-child(1),.recommend1 li:nth-child(4)>span:nth-child(1),.recommend1 li:nth-child(5)>span:nth-child(1){
  width: 22px;
  font-size: 18px;
  text-align: center;
  color: #999999;
}
.recommend1 li>span:nth-child(1),.recommend2 li>span:nth-child(1){
  float: left;
}
.recommend1 li>span:nth-child(3),.recommend2 li>span:nth-child(3){
  float: right;
}
.recommend2 li>span:nth-child(1){
  width: 22px;
  font-size: 18px;
  text-align: center;
  color: #999999;
}
</style>
