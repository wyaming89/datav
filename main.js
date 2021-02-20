import {styleJson} from './mapstyle.js'
  const charts = echarts.init(document.getElementById('chart2'));
  // const chart1 = echarts.init(document.getElementById('chart1'));
  const chart4 = echarts.init(document.getElementById('chart4'));
  const chart5 = echarts.init(document.getElementById('chart5'));
  
//chart1.setOption(option1);
  const option = {
    textStyle: {
        color: '#00AA97'
      },
    title: {
      text: '销量',
      left: '10%',
      top: '5%',
      textStyle: {
        color: '#00AA97'
      }
    },
    grid: {
      top: '25%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: {
        data: ["羊肉卷","车厘子","菜心","基围虾","大白菜","土豆"],
        nameTextStyle: {
          color: '#00AA97'
        }
    },
    yAxis: {
      nameTextStyle: {
          color: '#00AA97'
        },
        splitLine: {
            show: true,
            lineStyle: {
              color: '#005864'
            }
          }
    },
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
        textStyle: {
          color: '#4E6576'
        },
        barWidth: 30,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0,0,0,1,[{
            offset:0,
            color: '#00EA8B',
          },{offset:1, color: '#00AA97'}])
        }
    }]
  };
  const option2 = {
    textStyle: {
        color: '#00AA97'
      },
    title: {
      text: '门店销量',
      left: '10%',
      top: '5%',
      textStyle: {
        color: '#00AA97'
      }
    },
    grid: {
      top: '25%',
      bottom: '5%',
      containLabel: true
    },
    yAxis: {
        data: ["名流印象","宝翠花园","帝景花园","骏景花园","明上居店","碧桂园豪园"],
        nameTextStyle: {
          color: '#00AA97'
        }
    },
    xAxis: {
      nameTextStyle: {
          color: '#00AA97'
        },
        splitLine: {
            show: true,
            lineStyle: {
              color: '#005864'
            }
          }
    },
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
        textStyle: {
          color: '#4E6576'
        },
        barWidth: 20,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0,0,1,0,[{
            offset:0,
            color: '#00EA8B',
          },{offset:1, color: '#00AA97'}])
        }
    }]
  };
  const option3 = {
    tooltip: {
        trigger: 'item'
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '60%'],
            avoidLabelOverlap: false,
            top: '10%',
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 0.5
            },
            label: {
                show: true,
                // position: 'outside'
                color: '#00AA97'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '15',
                    // fontWeight: 'bold'
                    formatter: '{b} {d}%',
                    // position: 'center'
                    color: '#00AA97'
                }
            },
            labelLine: {
                // show: false
            },
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'}
            ]
        }
    ]
  };
  const option4 = {
    color: ['#00EA8B','#BAFFFA','#57F9AA','#22292E'],
      title: {
          text: '流量来源',
          textStyle: {
            color: '#00AA97'
          },
          left: '1%'
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              label: {
                  backgroundColor: '#00AA97'
              }
          },
          backgroundColor: '#00AA97'

      },
      legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
          textStyle: {
            color: '#00AA97'
          }
      },
      grid: {
          left: '0',
          right: '4%',
          bottom: '0',
          // containLabel: true
      },
      xAxis: [
          {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
              position: 'top',
              nameTextStyle: {
                color: '#00AA97'
              }
          }
      ],
      yAxis: [
          {
              type: 'value',
              show: false
          }
      ],
      series: [
          {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              smooth: true,
              symbol: 'none',
              emphasis: {
                  focus: 'series'
              },
              data: [500, 132, 101, 134, 90, 230, 210]
          },
          {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              smooth: true,
              symbol: 'none',
              emphasis: {
                  focus: 'series'
              },
              data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              smooth: true,
              symbol: 'none',
              emphasis: {
                  focus: 'series'
              },
              data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              smooth: true,
              symbol: 'none',
              emphasis: {
                  focus: 'series'
              },
              data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              smooth: true,
              symbol: 'none',
              emphasis: {
                  focus: 'series'
              },
              data: [420, 232, 401, 234, 1290, 130, 320],
              markPoint: {
                type: 'max'
              }
          }
      ]
  };
  charts.setOption(option);
  // chart1.setOption(option3);
  chart4.setOption(option2);
  chart5.setOption(option4);
  

  // window.addEventListener('resize', screensize)
var myChart = echarts.init(document.getElementById('chart6'));
var option6;
setTimeout(function () {

    option6 = {
        legend: {
          bottom: '2%',
          textStyle: {
            fontSize: '10',
            color: '#00EA8B'
          }
        },
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
                ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
                ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
                ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
            ]
        },
        xAxis: {
          type: 'category',
          nameTextStyle: {
            color: '#00AA97'
          }
      },
        yAxis: {
          gridIndex: 0,
          nameTextStyle: {
            color: '#00AA97'
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#005864'
            }
          }
        },
        grid: {
          top: '50%',
          bottom: '20%'
        },
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                emphasis: {focus: 'data'},
                label: {
                    formatter: '{b}: {@2012} ({d}%)',
                    color: '#00AA97'
                },
                encode: {
                    itemName: 'product',
                    value: '2012',
                    tooltip: '2012'
                }
            }
        ]
    };

    myChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });

    myChart.setOption(option6);

});
option6&&myChart.setOption(option6);



window.onresize = screensize;
function screensize() {
  // body...
  charts.resize()
  chart5.resize()
  chart4.resize()
  // chart1.resize()
  myChart.resize()
}
  var bmapOption = {
    bmap: {
      center: [113.330605, 23.102168],
      zoom: 11,
      roam: false,
      mapStyle: {styleJson:styleJson}
    },

    series: [
    {
      name: '广东门店',
      type: 'scatter',
      coordinateSystem: 'bmap',
      data:[
        {name: '帝景花园', value: [113.330605, 23.102168, 100]}
      ],
      label: {
        formatter: '{b}',
        position: 'right'
      },
      itemStyle: {
        color: '#ddb926'
      }
    }]
  };
var chartmap = echarts.init(document.getElementById('chart3'));
chartmap.setOption(bmapOption);