// 图表配置
var options = {
    chart: {
        type: 'column',
    },
    title: {
        text: ''                 // 标题
    },
    legend: {
        borderColor: '#909090',
        borderWidth: 1,
        borderRadius: 4,
        itemStyle: {
            color: '#274b6d',
            fontSize: '12px'
        },
        symbolHeight: 12,
        symbolWidth: 16,
        symbolRadius: 0

    },
    xAxis: {
        categories: [
            '10-04','10-05','10-06','10-07','10-08','10-09','10-10','10-11','10-12','10-13','10-14','10-15','10-16','10-17','10-18','10-19','10-20','10-21','10-22','10-23','10-24','10-25','10-26','10-27','10-28','10-29','10-30','10-31','11-01','11-02','11-03','11-04'
        ],
        labels:{
            style:{
                color: '#1aa095',
            }
        }
    },
    yAxis: {
        min: 0,
        gridLineColor: "transparent",
		title: {
            text: '能耗',
            style:{
                fontSize: '17px',
                color: '#4d759e'
            }
        },
        labels:{
            style:{
                color: '#1aa095'
            }
        }
	},
    series: [{
		name: '用电量',
        data: [{"y":1.3,"color":"#FFCE44","name":""}, 1.2, 1.18, 1.27, 0.8, 0.4, {"y":0.7,"color":"#FFCE44","name":""}, {"y":1.3,"color":"#FFCE44","name":""}, 1.2, 1.18, 1.27, 0.8, 0.4, {"y":0.7,"color":"#FFCE44","name":""},{"y":0.9,"color":"#FFCE44","name":""}, 1.2, 1.18, 1.27, 0.8, 0.4, {"y":0.4,"color":"#FFCE44","name":""},{"y":0.8,"color":"#FFCE44","name":""}, 1.2, 1.18, 1.27, 0.8, 0.4, {"y":0.8,"color":"#FFCE44","name":""},{"y":0.76,"color":"#FFCE44","name":""}, 1.2, 1.18, 0.2],
        color:'#2f7ed8'
    }],
    credits: {
        enabled: false
    },
};
// 图表初始化函数
var chart = Highcharts.chart('leftChart', options);