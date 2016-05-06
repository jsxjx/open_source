$(function () {
    var wenku = $('#wenku').highcharts({
        title: {
            text: '',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: date_no_hour
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
             formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+this.x +': '+ this.y +'个';
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        //plotOptions: {
        //    line: {
        //        dataLabels: {
        //            enabled: true
        //        },
        //        enableMouseTracking: false
        //    }
        //},
        credits:{
          enabled:false
        },
        series: [{
            name: '文库采集',
            data: wenku_caiji_data
        }, {
            name: '保密检查告警',
            data: secret_check_alert
        }, {
            name: '已保密检查',
            data: secret_check
        }, {
            name: '隐写检查告警',
            data: yx_check_alert
        }, {
            name: '已隐写检查',
            data: yx_check
        }]
    });
    //////////
      var schoolar = $('#schoolar').highcharts({
        title: {
            text: '',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: date_no_hour_schoolar
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
             formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+this.x +': '+ this.y +'个';
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        }
        //  ,
        //plotOptions: {
        //    line: {
        //        dataLabels: {
        //            enabled: true
        //        },
        //        enableMouseTracking: true
        //    }
        //}
          ,
        credits:{
          enabled:false
        },
        series: [{
            name: '万方采集',
            data: wanfang
        },{
            name: 'ACM采集',
            data: acm
        },{
            name: 'IEEE采集',
            data: ieee
        },{
            name: 'CNKI采集',
            data: cnki
        }
        ]
    });
    //////////////////////
        //////////
      var baike = $('#baike').highcharts({
        title: {
            text: '',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: date_no_hour_baike
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
             formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+this.x +': '+ this.y +'个';
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: true
            }
        },
        credits:{
          enabled:false
        },
        series: [{
            name: '百科采集',
            data: baike1
        }]
    });
    //////////////////////
         var homepage = $('#homepage').highcharts({
        title: {
            text: '',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: date_no_hour_homepage
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
             formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+this.x +': '+ this.y +'个';
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: true
            }
        },
        credits:{
          enabled:false
        },
        series: [{
            name: 'LinkedIn采集',
            data: linkedin
        }]
    });
    //////////////////////
     //////////////////////
         var anwang = $('#anwang').highcharts({
        title: {
            text: '',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: date_no_hour_anwang
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
             formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+this.x +': '+ this.y +'个';
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: true
            }
        },
        credits:{
          enabled:false
        },
        series: [{
            name: '暗网采集',
            data: anwang1
        }]
    });
    //////////////////////

});
