
<template>
 <div id="usercenter">
    <div class="US_search">
      <el-input :disabled="S_isdisabled" v-model="USinput" placeholder='请输入会员id' @keyup.enter.native="enter_search()"></el-input>
      <el-button class="USsearch_btn" @click="searchNum()" >查询</el-button>
    </div> 
    <div class="top_content clearfix">
        <div class="fl t_c_l">
            <div class="t_l_img">
                <img src="../assets/images/a1.jpg" alt="">
            </div>
            <div id="vip_ico">
                <img src="../assets/images/vip.png" alt="VIP">
                <span>李雪茹</span>
            </div>
            <div>会员ID:12321023</div>
            
        </div>
        <div class="fr t_c_r">
            <el-row>
                <el-col :span="3">
                    <p>性别：</p>
                    <p class="infoTip">女</p>
                </el-col>
                <el-col :span="3">
                    <p>年龄：</p>
                    <p class="infoTip num">18</p>
                </el-col>
                <el-col :span="3">
                    <p>生肖：</p>
                    <p class="infoTip">猪</p>
                </el-col>
                <el-col :span="3">
                    <p>星座：</p>
                    <p class="infoTip">巨蟹座</p>
                </el-col>
                <el-col :span="4">
                    <p>生日：<img src="../assets/images/birthday.png" alt=""></p>
                    <p class="infoTip num">1995-01-02</p>
                </el-col>
                <el-col :span="4">
                    <p>电话：</p>
                    <p class="infoTip num">13621541236</p>
                </el-col>
                <el-col :span="4">
                    <p>微信号：</p>
                    <p class="infoTip num">13621541236</p>
                </el-col>
            </el-row> 
            <el-row>
                <el-col :span="3">
                    <p>会员时长：</p>
                    <p class="infoTip">238天</p>
                </el-col>
                <el-col :span="6">
                    <p>入住会员时间：</p>
                    <p class="infoTip num">2017-12-14  12:00:59</p>
                </el-col>
                <el-col :span="7">
                    <p>最后一次到店时间：</p>
                    <p class="infoTip num">2018-08-02  13:25（距今 15 天）</p>
                </el-col>
                <el-col :span="8">
                    <p>地址：</p>
                    <p class="infoTip">北京市海淀区宝胜东路20号院20号楼</p>
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
                <div class="center_top_box_left_content_content">
                    <div>
                        <img src="../assets/images/RFM_icon.png" class="RFM_icon">
                        <p>RFM评分 ：233</p>
                        <p>活跃度高、消费能力高</p>
                        <p>忠诚度较高,属于高价值顾客</p>
                        <p>对产品及服务要求高,需要重点提供优质服务</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="center_top_box_right">
            <el-carousel height="410px" loop = "true">
                <el-carousel-item>
                  <h3>1</h3>
                </el-carousel-item>
                <el-carousel-item>
                  <h3>2</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
    <div class="center_box">
        <div>
            <el-radio-group v-model="radio_time" >
                <el-radio label="week">本周</el-radio>
                <el-radio label="month">本月</el-radio>
                <el-radio label="woman">本季度</el-radio>
                <el-radio label="year">本年</el-radio>
            </el-radio-group>
        </div>
        <div class="c_row">
            <el-row>
                <el-col :span="6">
                    <p class="c_tips">￥<span class="c_tips_num">12.485</span> </p>
                    <p>总消费</p>
                </el-col>
                <el-col :span="6">
                    <p class="c_tips">￥<span class="c_tips_num">3.265</span> </p>
                    <p>平均消费</p>
                </el-col>
                <el-col :span="6">
                    <p class="c_tips"><span class="c_tips_num">32</span>次</p>
                    <p>到店次数</p>
                </el-col>
                <el-col :span="6">
                    <p class="c_tips"><span class="c_tips_num">30</span>次</p>
                    <p>购买次数</p>
                </el-col>
            </el-row>
        </div>
        <div class="label">
            <div class="labels">
                aaa
            </div>
            <div class="labels">
                aaa
            </div>
            <div class="labels">
                aaa
            </div>
            <div class="labels">
                aaa
            </div>
            <div class="labels">
                aaa
            </div>
            <div class="labels">
                aaa
            </div>
            <div class="labels">
                aaa
            </div>
            <div class="labels">
                aaa
            </div>
        </div>
        <div class="proportion">
            <div class="proportions">
                日化4095元（15%）
            </div>
            <div class="proportions">
                蔬菜4095元（15%）
            </div>
            <div class="proportions">
                袋装4095元（15%）
            </div>
            <div class="proportions">
                其他4095元（15%）
            </div>
            <div class="proportions">
                其他4095元（15%）
            </div>
        </div>
        <div class="c_btm clearfix">
            <div class="c_btm_left fl">
                <div id="chart_kind"></div>
            </div>
            <div class="c_btm_right fr">
                <p>行为习惯</p>
                <el-row>
                    <el-col :span="12"> 最喜欢购物时间段： </el-col>
                    <el-col :span="12"> <span class="c_b_tips">12:00-14:00</span> </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"> 最喜欢的购物日： </el-col>
                    <el-col :span="12"> <span class="c_b_tips">周四、周日</span> </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"> 最喜欢的购物天气： </el-col>
                    <el-col :span="12"> <span class="c_b_tips">晴天</span> </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"> 最爱买的商品类型： </el-col>
                    <el-col :span="12"> <span class="c_b_tips">包装食品</span> </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"> 最爱买的商品名称： </el-col>
                    <el-col :span="12"> <span class="c_b_tips">钱雷精品面点</span> </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"> 买的最贵的商品： </el-col>
                    <el-col :span="12"> <span class="c_b_tips">西王玉米胚芽油5L</span> </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"> 买的最贵的商品价格： </el-col>
                    <el-col :span="12"> <span class="c_b_tips">¥189元</span> </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"> 最大订单金额： </el-col>
                    <el-col :span="12"> <span class="c_b_tips">¥1203元</span> </el-col>
                </el-row>
            </div>
        </div>
    </div>   
    <div class="power_box">
        <div id="chart_power"></div>
    </div>     

    <transition name="el-fade-in">
        <div class="user_jl clearfix" v-show="btm_show">
            <!-- 用户消费记录时间轴 -->
            <div class="box_btms" style="width: 70%; height: 400px;" >
                <div id="lins_times" style="height: 400px;"></div>
            </div>
            <!-- 右侧账单信息 -->
            <div class="bills">
                <div class="bill_head">
                    <el-date-picker
                        v-model="valueTime"
                        type="daterange"
                        value-format="yyyy-MM-dd"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        @change="change_times"
                        :picker-options="pickerOptions"
                        >
                    </el-date-picker>

                </div>
                <div class="bill_body">
                    <el-carousel height="450px" style="font-size: 16px;" ref="cardPane" 
                    :interval='5000' :initial-index="carousel_start"
                    >
                        <!-- <el-carousel-item v-for="item in bill_content"> -->
                        <el-carousel-item v-for="item in bill_content" :key="item.id">
                            <el-row>
                                <el-col :span="12">店号: <i v-text="item.dh"></i> </el-col>
                                <el-col :span="12">流水号： <i v-text="item.lsh"></i> </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">机号: <i v-text="item.jh"></i> </el-col>
                                <el-col :span="12">收银员： <i v-text="item.syy"></i> </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">日期: <i class="line_choose_time" v-text="item.rq"></i> </el-col>
                            </el-row>
                            <el-table
                            :data="item.tableData"
                            height="250"
                            width="100%"
                            :default-sort = "{prop: 'date', order: 'descending'}"
                            >
                                <el-table-column
                                prop="name"
                                label="商品名"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="num"
                                label="数量"
                                sortable
                                >
                                </el-table-column>
                                <el-table-column
                                prop="pre"
                                label="单价"
                                sortable
                                >
                                </el-table-column>
                                <el-table-column
                                prop="money"
                                label="金额"
                                sortable
                                >
                                </el-table-column>
                            </el-table>
                            <p style="margin: 10px auto 15px; font-size: 14px;">订单金额：<i v-text="item.ddje"></i> </p>
                            <!-- <el-row class="take_money">
                                <el-col :span="12">收款总额: <i v-text="item.skze"></i> </el-col>
                                <el-col :span="12">找回： <i v-text="item.zh"></i> </el-col>
                            </el-row> -->
                            <h4>实际支付：<i  v-text="item.sjzf"></i></h4>
                        </el-carousel-item>
                    </el-carousel>
                    
                </div>

            </div>
        </div>
    </transition>
 </div>

</template>

<script>
export default {
  name: "usercenter",
  data() {
    return {
      S_isdisabled: true,
      carousel_start: 0, //轮播初始
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 8.64e7;
        }
      },
      valueTime: [],
      memNumber: "", //记录用户编码id ，更改时间的时候传入
      today_times: new Date(), //初始化时间
      btm_show: false, //有数据时 显示内容
      msg: "我是会员中心",
      USinput: "",
      userinfodata: {
        title: "",
        vip: "",
        content: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
      }, //用户基本信息
      userpointdata: {}, //用户特征
      rightInfo_ls: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}], //右侧信息
      right_box: true, //右侧盒子显示隐藏
      lines_times: {
        title: {
          text: "当前用户消费时间轴"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          data: []
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            label: {
              normal: {
                show: true,
                formatter: function(data) {
                  return data;
                },
                position: "top",
                textStyle: {
                  fontFamily: "微软雅黑",
                  fontSize: 12,
                  color: "#999"
                }
              }
            },
            data: [],
            type: "line"
          }
        ]
      }, // 用户消费记录时间轴
      times_data: [], //用户消费记录时间轴数据
      bill_content: [
        {
          dh: "",
          lsh: "",
          jh: "",
          syy: "",
          rq: "",
          tableData: [],
          ddje: "",
          sjzf: ""
        }
      ], //小票信息
      userinfo: {},
      menuList: [],
      menuoperate: [], //页面操作

      radio_time: "week", //单选框操作
      chart_kind: {
        option: {
          title: {
            text: "常买商品",
            textStyle: { color: "#4080ff", fontWeight: "400", fontSize: 20 },
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
            left: "5%",
            right: "5%",
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
              data: ["苹果", "安慕希", "冰淇淋"] //name值
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
          series: [
            {
              name: "",
              type: "bar",
              barWidth: "10%",
              itemStyle: { normal: { color: "#4080ff", barBorderRadius: 10 } },
              data: ["20", "1", "3"] //数值
            }
          ]
        }
      },
      chart_power: {
        option: {
          title: {
            text: "竞争力分析",
            textStyle: { color: "#4080ff", fontWeight: "400", fontSize: 20 },
            top: "5%",
            left: "center"
          },
          backgroundColor: "rgba(0,0,0,0)",
          color: ["#4080ff"],
          tooltip: {
            trigger: "axis",
            axisPointer: { type: "line", lineStyle: { opacity: 0 } },
            formatter: function(params, ticket, callback) {
              let X = params[0].name;
              let str = X + "<br/>";
              for (let i = 0; i < params.length; i++) {
                let marker = params[i].marker; //提示图标颜色
                let title = params[i].seriesName;
                let value = params[i].value;
                str +=
                  marker + title + "：&nbsp;&nbsp;" + value + "%" + " <br/> ";
              }
              return str;
            }
          },
          legend: {
            data: ["总消费", "星座", "年龄", "性别"],
            right: "0%",
            top: "10%",
            textStyle: { color: "#4080ff", fontWeight: "bold", fontSize: 10 }
          },
          grid: {
            left: "5%",
            right: "5%",
            bottom: "5%",
            top: "100",
            containLabel: true,
            z: 22
          },
          xAxis: [
            {
              type: "category",
              axisTick: { show: false },
              splitLine: { show: false },
              axisLine: { lineStyle: { color: "#4080ff" } },
              axisLabel: { textStyle: { color: "#4080ff" } },
              data: ["1月", "2yue", "3yue"]
            }
          ],
          yAxis: [
            {
              type: "value",
              axisTick: { show: false },
              splitLine: { show: true, lineStyle: { color: "#d4daf8" } },
              axisLine: { lineStyle: { color: "#4080ff" } },
              axisLabel: {
                textStyle: { color: "#4080ff" },
                formatter: "{value} %"
              }
            }
          ],
          series: [
            {
              name: "总消费",
              type: "bar",
              barWidth: "15",
              itemStyle: { normal: { color: "#5793f3", barBorderRadius: 30 } },
              data: [1, 3, 5, 2]
            },
            {
              name: "星座",
              type: "bar",
              barWidth: "15",
              itemStyle: { normal: { color: "#d14a61", barBorderRadius: 30 } },
              data: [1, 3, 5, 2]
            },
            {
              name: "年龄",
              type: "bar",
              barWidth: "15",
              itemStyle: { normal: { color: "#6666ff", barBorderRadius: 30 } },
              data: [1, 3, 5, 2]
            },
            {
              name: "性别",
              type: "bar",
              barWidth: "15",
              itemStyle: { normal: { color: "#00000b", barBorderRadius: 30 } },
              data: [1, 3, 5, 2]
            }
          ]
        }
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
  methods: {
    change_times(val) {
      let _this = this;
      _this.valueTime = val;
      _this.myChartTimes.clear();
      _this.userTime(_this.memNumber, _this.valueTime);
      _this.tobuy(_this.memNumber, _this.valueTime);
    },
    dataChange(data) {
      let _this = this;
      _this.today_times = data;
      _this.tobuy(_this.memNumber, _this.today_times);
    },
    enter_search() {
      let _this = this;
      _this.searchNum();
    },
    searchNum() {
      let _this = this;
      if (_this.USinput == "" || _this.USinput == undefined) {
        alert("请输入正确用户id");
        _this.clearpage();
      } else {
        //发送请求  S
        _this.sendpage(_this.USinput);
        //发送请求 E
      }
    },
    change_line() {
      let _this = this;
      _this.lines_times.xAxis.data = [];
      _this.lines_times.series[0].data = [];
      $.each(_this.times_data, function(v, k) {
        _this.lines_times.xAxis.data.push(k.time);
        _this.lines_times.series[0].data.push(k.value);
      });
      _this.lines_times.series[0].label.normal.formatter = function(params) {
        let t = [];
        $.each(_this.times_data, function(v, k) {
          t.push(k.event);
        });
        return t[params.dataIndex];
      };
      $(".box_btms").html('<div id="lins_times"></div>'); //点击事件重复执行， 将原先div清空。
      $("#lins_times").css("height", "400px");
      let dom_times = document.getElementById("lins_times");
      _this.myChartTimes = _this.$echarts.init(dom_times);
      _this.myChartTimes.clear(); //只是清理画布，而不会删除 生成的元素节点
      _this.myChartTimes.setOption(_this.lines_times);
      _this.myChartTimes.on("click", function(param) {
        let line_time = param.name;
        let tick_dom = $(".el-carousel__container .el-carousel__item");
        for (let i = 0; i < tick_dom.length; i++) {
          let dom_time = $(tick_dom[i])
            .children()
            .eq(2)
            .children("div")
            .children()
            .html();
          if (line_time === dom_time) {
            _this.setActiveItem(i);
            return;
          }
        }
      });
      window.addEventListener("resize", function() {
        _this.myChartTimes.resize();
      });
    },
    //设置手动更改轮播
    setActiveItem(index) {
      let _this = this;
      _this.$refs.cardPane.setActiveItem(index);
    },
    clearpage() {
      let _this = this;
      _this.userinfodata = {
        title: "",
        vip: "",
        content: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
      }; //用户基本信息
      _this.userpointdata = {}; //用户特征
      _this.rightInfo_ls = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]; //右侧信息
      _this.news_ls = [];
      // _this.news_cy = [];
      // _this.news_jd = [];
      (_this.right_box = true), //右侧盒子显示隐藏
        (_this.btm_show = true); //顶部折线图显示隐藏
      _this.myChartTimes.clear();
      _this.bill_content = [
        {
          dh: "",
          lsh: "",
          jh: "",
          syy: "",
          rq: "",
          tableData: [],
          ddje: "",
          sjzf: ""
        }
      ];
      _this.times_data = []; //用户消费记录时间轴数据;
      // _this.beat_m = [];
    }, //清空页面信息
    //   消费小票
    tobuy(Uname, dataTime) {
      let _this = this;
      let json_xp = {
        vid: _this.userinfo.store_root_id,
        memNo: Uname,
        st: dataTime[0],
        et: dataTime[1]
      };
      // let json_xp = { 'memNo' : "18630716" , 'datestr': "2017-12-05" };
      let formdata_xp = _this.$config.formData(json_xp);
      _this.$axios.post(_this.$url.getTicketinfo, formdata_xp).then(res => {
        //循环操作小票 ，按照订单号分类
        let bills = res.data;
        _this.bill_content = [];
        let i = 0;
        for (; i < bills.length; i++) {
          let tmpValueI = bills[i];
          let value = {};
          value["dh"] = tmpValueI.orderStore;
          value["lsh"] = tmpValueI.orderNo;
          value["syy"] = tmpValueI.cashier;
          value["jh"] = tmpValueI.posCode;
          value["rq"] = tmpValueI.createdate;
          let ary_table = new Array();
          let map1 = {
            name: tmpValueI.skuName,
            num: tmpValueI.skuNum,
            pre: tmpValueI.realPrice,
            money: tmpValueI.amount
          };
          ary_table.push(map1);
          let j = i + 1;
          for (; j < bills.length; j++) {
            let tmpValueJ = bills[j];
            if (tmpValueI.orderNo == tmpValueJ.orderNo) {
              //tab td + row
              let map2 = {
                name: tmpValueJ.skuName,
                num: tmpValueJ.skuNum,
                pre: tmpValueJ.realPrice,
                money: tmpValueJ.amount
              };
              ary_table.push(map2);
              i++;
            } else {
              i = j - 1;
              break;
            }
          }
          //div + 1个
          value["tableData"] = ary_table;
          value["ddje"] = tmpValueI.orderAmount;
          value["sjzf"] = tmpValueI.realPayAmount;
          _this.bill_content.push(value);
        }
      });
    },
    userTime(uname, dataTime) {
      let _this = this;
      _this.$axios
        .get(
          _this.$url.getLine1 +
            "?memNo=" +
            uname +
            "&startDate=" +
            dataTime[0] +
            "&endDate=" +
            dataTime[1] +
            "&vid=" +
            _this.userinfo.store_root_id
        )
        .then(res => {
          if (res.data.length > 0) {
            let arr = res.data;
            // arr.reverse();
            _this.times_data = [];
            $.each(arr, function(v, k) {
              let value = [];
              value["time"] = k.createdate;
              value["value"] = k.amount;
              value["event"] = k.amount;
              _this.times_data.push(value);
            });
            _this.change_line();
          } else {
            _this.times_data = [];
          }
        });
    },
    sendpage(uname = "0") {
      //开始请求  S  ==============================================================
      //请求基本信息 和 用户特征
      let _this = this;
      let json = { memNo: uname };
      _this.memNumber = uname;
      let formdata = _this.$config.formData(json);
      // ===========================
      _this.$axios
        .post(_this.$url.getMemInfo, formdata)
        .then(res => {
          if (res.data != "") {
            _this.right_box = true;
            _this.btm_show = true;
            // // 用户基本信息
            let baseInfo = res.data.baseInfo; //基本信息
            let baseBehaviour = res.data.baseBehaviour; //零售
            let baseTrait = res.data.baseTrait; //用户特征
            let baseInfoImage = {}; //用户头像

            //  //用户头像
            if (res.data.baseInfoImage == null) {
              baseInfoImage = {
                imgPath: ""
              };
            } else {
              baseInfoImage = res.data.baseInfoImage;
            }
            _this.userinfodata.content[0].头像 = baseInfoImage.imgPath;
            // 用户信息
            _this.userinfodata.content[1].性别 = baseInfo.sex;
            _this.userinfodata.content[2].生日 = baseInfo.birthday;
            _this.userinfodata.content[3].年龄 = baseInfo.age;
            _this.userinfodata.content[4].户籍地 = baseInfo.native_city;
            _this.userinfodata.content[5].生肖 = baseInfo.shengxiao;
            _this.userinfodata.content[6].信誉额度 = baseInfo.creditLine;
            _this.userinfodata.content[7].工作地 = baseInfo.work_city;
            if (baseInfo.memberSource == 0) {
              _this.userinfodata.content[8].会员来源 = "微信";
            } else if (baseInfo.memberSource == 1) {
              _this.userinfodata.content[8].会员来源 = "微博";
            } else if (baseInfo.memberSource == 2) {
              _this.userinfodata.content[8].会员来源 = "逛街路过";
            } else if (baseInfo.memberSource == 3) {
              _this.userinfodata.content[8].会员来源 = "朋友推荐";
            } else if (baseInfo.memberSource == 4) {
              _this.userinfodata.content[8].会员来源 = "其他媒体";
            } else {
              _this.userinfodata.content[8].会员来源 = "";
            }
            _this.userinfodata.content[9].累计积分 = baseInfo.memPointAmount;
            _this.userinfodata.content[10].会员编号 = uname;
            // 用户特征
            delete baseTrait["memNo"];
            _this.userpointdata = baseTrait;
            //零售信息
            _this.rightInfo_ls[0].总购买金额 = baseBehaviour.tt_mount;
            _this.rightInfo_ls[1].总购买次数 = baseBehaviour.tt_times;
            _this.rightInfo_ls[2].最爱买的商品类型 = baseBehaviour.fav_skuType;
            _this.rightInfo_ls[3].最爱买的商品名称 = baseBehaviour.fav_skuName;
            _this.rightInfo_ls[4].最喜欢的购物时间段 =
              baseBehaviour.fav_buyTime;
            _this.rightInfo_ls[5].最喜欢的购物日周几 =
              baseBehaviour.fav_buyDate;
            _this.rightInfo_ls[6].最喜欢的聚会日 = baseBehaviour.fav_partyDate;
            _this.rightInfo_ls[7].第一次到店时间 = baseBehaviour.fst_comeDate;
            _this.rightInfo_ls[8].最后一次到店时间 = baseBehaviour.lst_ComeDate;
            _this.rightInfo_ls[9].第一次买的产品 = baseBehaviour.fst_skuName;
            _this.rightInfo_ls[10].买的最贵的商品 = baseBehaviour.mst_expsku;
            _this.rightInfo_ls[11].买的最贵的商品价格 =
              baseBehaviour.mst_expskuPrice;
            _this.rightInfo_ls[12].最大一笔支出最大订单金额 =
              baseBehaviour.mst_payAmount;
            _this.news_ls = _this.rightInfo_ls;
            // 用户提示信息
            // _this.$axios.get( _this.$url.getMsg , {params:{ "vid" : _this.userinfo.store_root_id , uid: uname}}).then((res)=>{
            //     if( res.data != ""){
            //         _this.important = res.data;
            //     }else {
            //         _this.important="";
            //     }
            // });
            //用户消费记录时间
            _this.userTime(uname, _this.valueTime);
          } else {
          }

          // // 消费小票
          _this.tobuy(uname, _this.valueTime);
        })
        .catch(err => {
          alert("请确认会员id是否存在！");
          _this.clearpage();
        });
      //开始请求  E  ===============================================================
    },
    //             插入
    // 参数说明：str表示原字符串变量，flg表示要插入的字符串，sn表示要插入的位置
    insert_flg(str, flg, sn) {
      let newstr = "";
      for (let i = 0; i < str.length; i += sn) {
        let tmp = str.substring(i, i + sn);
        newstr += tmp + flg;
      }
      newstr = newstr.substring(0, newstr.length - 1);
      return newstr;
    },
    find(str, cha, num) {
      var x = str.indexOf(cha);
      for (var i = 0; i < num; i++) {
        x = str.indexOf(cha, x + 1);
      }
      return x;
    },
    menu(allmenu, nowmenu) {
      let _this = this;
      let operate = {};
      allmenu.forEach(function(v, i, arr) {
        if (v.url === nowmenu) {
          operate = v;
        }
        if (v.children != undefined && v.children.length != 0) {
          _this.menu(v.children, nowmenu);
        }
      });
      return operate;
    },
    M_List() {
      let _this = this;
      _this.menuList = [];
      _this.menuList = JSON.parse(sessionStorage.getItem("menus"));
      let O = _this.menu(_this.menuList, _this.$route.path);
      _this.menuoperate = O.operate;
      _this.menuoperate.forEach(function(v, i, arr) {
        if (v == 6) {
          //可以搜索
          _this.S_isdisabled = false;
          return;
        }
      });
    },
    ChartKind() {
      let _this = this;
      let chart_kind = document.getElementById("chart_kind");
      _this.myChartKind = _this.$echarts.init(chart_kind);
      _this.myChartKind.setOption(_this.chart_kind.option);

      _this.myChart = _this.$echarts.init(
        document.getElementById("RFMEcharts")
      );
      _this.myChart.setOption(_this.RFMEcharts);

      window.addEventListener("resize", function() {
        _this.myChartKind.resize();
        _this.myChart.resize();
      });
    },
    Power() {
      let _this = this;
      let chart_power = document.getElementById("chart_power");
      _this.myChartPower = _this.$echarts.init(chart_power);
      _this.myChartPower.setOption(_this.chart_power.option);
      window.addEventListener("resize", function() {
        _this.myChartPower.resize();
      });
    }
  },
  mounted: function() {
    let _this = this;

    _this.ChartKind();
    _this.Power();

    $(".info_two").height();

    _this.userinfo = JSON.parse(sessionStorage.getItem("userinfo"));
    _this.M_List();

    if (this.$route.params.dataid == undefined) {
      _this.USinput = "";
      _this.btm_show = false;
      _this.right_box = true; //右侧盒子显示隐藏
    } else {
      _this.USinput = this.$route.params.dataid;
      _this.btm_show = true;
      _this.right_box = true; //右侧盒子显示隐藏
      _this.sendpage(_this.USinput);
    }
    // 设置开始结束时间  半年
    let dt = new Date();
    let now = dt.toLocaleString();
    let before_now = now.substr(0, now.indexOf(" "));
    let real_now = before_now.replace(/\//g, "-");
    dt.setMonth(dt.getMonth() - 6);
    let before = dt.toLocaleString();
    let before_t = before.substr(0, before.indexOf(" "));
    let real_before = before_t.replace(/\//g, "-");

    let S_time_M =
      Number(_this.find(real_before, "-", 1)) -
      Number(_this.find(real_before, "-", 0)); //开始时间 的月份 是否加0
    let E_time_M =
      Number(_this.find(real_now, "-", 1)) -
      Number(_this.find(real_now, "-", 0)); //结束时间 的月份 是否加0
    var B_T;
    let N_T;
    if (S_time_M == 2) {
      real_before = _this.insert_flg(real_before, "0", 5);
    }
    if (E_time_M == 2) {
      real_now = _this.insert_flg(real_now, "0", 5);
    }
    B_T = real_before;
    N_T = real_now;
    if (real_before.length - real_before.lastIndexOf("-") == 2) {
      B_T = _this.insert_flg(real_before, "0", real_before.length - 1);
    }
    if (real_now.length - real_now.lastIndexOf("-") == 2) {
      N_T = _this.insert_flg(real_now, "0", real_now.length - 1);
    }
    _this.valueTime = [B_T, N_T];
  },
  watch: {
    bill_content: {
      handler: function(val, old) {
        let _this = this;
        let timer = setInterval(function() {
          _this.$refs.cardPane.resetItemPosition();
          clearInterval(timer);
        }, 100);
      },
      deep: true
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
.user_jl {
  font-size: 0;
  margin: 20px 0;
  position: relative;
}
.user_jl > div {
  font-size: 16px;
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
}
.user_jl > .box_btms {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.bills {
  width: 30%;
  height: 500px;
  border: 1px solid #ccc;
  float: right;
  box-sizing: border-box;
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
.bill_head {
  position: relative;
  height: 40px;
  background: #8496f2;
}
.bill_head .el-input__inner {
  border: 0;
  background: rgba(0, 0, 0, 0);
  color: #fff;
}
.bill_head > div {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.bill_body {
  padding: 5px;
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
  /* .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
.center_box {
  height: 600px;
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
.label {
  font-size: 0;
  margin: 0px 40px;
}
.labels {
  width: 11%;
  height: 36px;
  line-height: 36px;
  background-color: #00000b;
  border-radius: 24px;
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  text-align: center;
  margin-right: 1.7%;
}
.labels:last-child {
  margin-right: 0;
}
.labels:nth-child(1) {
  background-color: #d14a61;
}
.labels:nth-child(2) {
  background-color: #5793f3;
}
.labels:nth-child(3) {
  background-color: #000;
}
.labels:nth-child(4) {
  background-color: #6666ff;
}
.labels:nth-child(5) {
  background-color: #d14a61;
}
.labels:nth-child(6) {
  background-color: #5793f3;
}
.labels:nth-child(7) {
  background-color: #000;
}
.labels:nth-child(8) {
  background-color: #6666ff;
}
.proportion {
  margin: 30px 20px;
  background: pink;
  height: 36px;
  line-height: 36px;
  font-size: 0;
  border-radius: 20px;
  overflow: hidden;
}
.proportions {
  width: 20%;
  height: 100%;
  font-size: 14px;
  display: inline-block;
  text-align: center;
  color: #fff;
}
.proportions:nth-child(1) {
  background-color: #5793f3;
}
.proportions:nth-child(2) {
  background-color: #d14a61;
}
.proportions:nth-child(3) {
  background-color: #6666ff;
}
.proportions:nth-child(4) {
  background-color: #000;
}
.proportions:nth-child(5) {
  background-color: #3c874c;
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
  width: 60%;
}
.c_btm_right {
  width: 35%;
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
  height: 357px;
}
.power_box {
  height: 300px;
  background-color: #f3f4fc;
  box-shadow: 0px 0px 16px 1px rgba(75, 98, 223, 0.19);
  border-radius: 14px;
}
#chart_power {
  height: 300px;
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
</style>
