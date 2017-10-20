//天气
 var showLocale = function(objD) {
				    var str, colorhead, colorfoot;
				    var yy = objD.getYear();
				    if (yy < 1900) yy = yy + 1900;
				    var MM = objD.getMonth() + 1;
				    if (MM < 10) MM = '0' + MM;
				    var dd = objD.getDate();
				    if (dd < 10) dd = '0' + dd;
				    var hh = objD.getHours();
				    if (hh < 10) hh = '0' + hh;
				    var mm = objD.getMinutes();
				    if (mm < 10) mm = '0' + mm;
				    var ss = objD.getSeconds();
				    if (ss < 10) ss = '0' + ss;
				    var ww = objD.getDay();
				    if (ww == 0) colorhead = "";
				    if (ww > 0 && ww < 6) colorhead = "";
				    if (ww == 6) colorhead = "";
				    if (ww == 0) ww = "星期日";
				    if (ww == 1) ww = "星期一";
				    if (ww == 2) ww = "星期二";
				    if (ww == 3) ww = "星期三";
				    if (ww == 4) ww = "星期四";
				    if (ww == 5) ww = "星期五";
				    if (ww == 6) ww = "星期六";
				    colorfoot = ""
				    str = "<div class='rj' style='font-size:14px;font-weight:bold;line-height:40px;'>" + colorhead + yy + "-" + MM + "-" + dd + " " + ww + colorfoot + "</div>"
				        + "<div class='sj' style='font-size:41px;font-weight:bold;line-height:35px;'>" + colorhead + hh + ":" + mm + " " + colorfoot + "</div>";
				    return (str);
				}

				var tick = function(cssSelector) {
				    var today;
				    today = new Date();
				    $(cssSelector).html(showLocale(today));
				    window.setTimeout("tick('" + cssSelector + "')", 60*1000);
				};
				//天气
				var getWeather = function(){
				    $.getScript('http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&day=0&city=北京&dfc=1&charset=utf-8',function(a){
				        var weatherCode = {};
				        weatherCode["晴"] = "0.png";
				        weatherCode["多云"] = "1.png";
				        weatherCode["阴"] = "2.png";
				        weatherCode["阵雨"] = "3.png";
				        weatherCode["雷阵雨"] = "4.png";
				        weatherCode["雷阵雨伴有冰雹"] = "5.png";
				        weatherCode["雨夹雪"] = "6.png";
				        weatherCode["小雨"] = "7.png";
				        weatherCode["中雨"] = "8.png";
				        weatherCode["大雨"] = "9.png";
				        weatherCode["暴雨"] = "10.png";
				        weatherCode["大暴雨"] = "11.png";
				        weatherCode["特大暴雨"] = "12.png";
				        weatherCode["阵雪"] = "13.png";
				        weatherCode["小雪"] = "14.png";
				        weatherCode["中雪"] = "15.png";
				        weatherCode["大雪"] = "16.png";
				        weatherCode["暴雪"] = "17.png";
				        weatherCode["雾"] = "18.png";
				        weatherCode["冻雨"] = "19.png";
				        weatherCode["沙尘暴"] = "20.png";
				        weatherCode["小雨-中雨"] = "21.png";
				        weatherCode["中雨-大雨"] = "22.png";
				        weatherCode["大雨-暴雨"] = "23.png";
				        weatherCode["暴雨-大暴雨"] = "24.png";
				        weatherCode["大暴雨-特大暴雨"] = "25.png";
				        weatherCode["小雪-中雪"] = "26.png";
				        weatherCode["中雪-大雪"] = "27.png";
				        weatherCode["大雪-暴雪"] = "28.png";
				        weatherCode["浮尘"] = "29.png";
				        weatherCode["扬沙"] = "30.png";
				        weatherCode["强沙尘暴"] = "31.png";
				        weatherCode["浓雾"] = "32.png";
				        weatherCode["台风"] = "39.png";
				        weatherCode["强浓雾"] = "49.png";
				        weatherCode["霾"] = "53.png";
				        weatherCode["中毒霾"] = "54.png";
				        weatherCode["重度霾"] = "55.png";
				        weatherCode["严重霾"] = "56.png";
				        weatherCode["大雾"] = "57.png";
				        weatherCode["特强浓雾"] = "58.png";
				        weatherCode["无"] = "99.png";
				        weatherCode["雨"] = "301.png";
				        weatherCode["雪"] = "302.png";

				        var s="重庆",r="",q="";
				        for(s in window.SWther.w){
				            q=SWther.w[s][0];
				//	        r={city:s,date:SWther.add.now.split(" ")[0]||"",day_weather:q.s1,night_weather:q.s2,day_temp:q.t1,night_temp:q.t2,day_wind:q.p1,night_wind:q.p2};
				            if(weatherCode[q.s1] != null && weatherCode[q.s1] != undefined){
				                $("#img").html("<img alt='"+q.s1+"' src='../weather/"+weatherCode[q.s1]+"' style='width:60px;'>");
				                $("#msg").html(q.s1+q.t2+"-"+q.t1+"℃");
				//	        	alert(q.s1+" "+q.t1+"-"+q.t2)
				            }
				        }
				    });
				}
          
     
    // 卡口排名
          var kakoupaiming = function(containerId,data){
		    $("#"+containerId).empty();
		    if(data && data.length > 0){
		        var maxValue = data[0].count;
		        if(maxValue < 1) maxValue = 1;
		        $.each(data,function(i,n){
		            var progress = $("<div class='progress-container'><div class='progress-title'>" + n.name + "</div>"
		                + "<div class='progress-content'>"
		                + "<div class='legalRate' style='width:" + (n.count/maxValue)*100 + "%;'>"
		                + "<div class='shuzi' style='color: white;'>" + n.count + "</div></div></div>"
		                + "<div style='width: 20%;box-sizing: border-box;padding: 2.4% 6%;'><i class='fa fa-lg'></i></div></div>");
		            if(n.trend > 0) {
		                var icon = progress.find("i");
		                icon.addClass("fa-arrow-up");
		                icon.css("color", "red");
		            }
		            else if(n.trend < 0) {
		                var icon = progress.find("i");
		                icon.addClass("fa-arrow-down");
		                icon.css("color", "green");
		            }
		            else {
		                var icon = progress.find("i");
		                icon.addClass("fa-minus");
		                icon.css("color", "#2678d7");
		            }
		            $("#"+containerId).append(progress);
		        })
		    }else{
		        $("#"+containerId).html("<span>暂时没有数据</span>")
		    }
		};
       //收费站流量排名
          var totel_pm = function(containerId,data){
		    $("#"+containerId).empty();
		    if(data && data.length > 0){
		        var maxValue = data[0].count;
		        if(maxValue < 1) maxValue = 1;
		        $.each(data,function(i,n){
		            var progress = $("<div class='progress-container'><div class='progress-title'>" + n.name + "</div>"
		                + "<div class='progress-content'>"
		                + "<div class='legalRate' style='width:" + (n.count/maxValue)*100 + "%;'>"
		                + "<div class='shuzi' style='color: white;'>" + n.count + "</div></div></div>"
		                + "<div style='width: 20%;box-sizing: border-box;padding: 2.4% 6%;'><i class='fa fa-lg'></i></div></div>");
		            if(n.trend > 0) {
		                var icon = progress.find("i");
		                icon.addClass("fa-arrow-up");
		                icon.css("color", "red");
		            }
		            else if(n.trend < 0) {
		                var icon = progress.find("i");
		                icon.addClass("fa-arrow-down");
		                icon.css("color", "green");
		            }
		            else {
		                var icon = progress.find("i");
		                icon.addClass("fa-minus");
		                icon.css("color", "#2678d7");
		            }
		            $("#"+containerId).append(progress);
		        })
		    }else{
		        $("#"+containerId).html("<span>暂时没有数据</span>")
		    }
		};   

   //车辆类型排名top10
    var cllxpm = function(containerId,data){
	    $("#"+containerId).empty();
	    console.log(data);
	     var chart_type = echarts.init(document.getElementById(containerId));
	     var arr1 = [];
	    $.each(data,function(i,n){
	        arr1.push(n.name);
	    })
	    console.log(arr1);
	     option = {
	                 color:["#f7ca43","#fd6354","#79a5c7","#46d3be","#70cf28","#c78127","#d27d6b","#bf3037","#2a3f5a"],

	               tooltip : {
	                          trigger: 'item',
	                            // formatter: "{a} <br/>{b} : {c} ({d}%)",
	                          formatter:  function(data){
	                                  return  '全省'+data.name +'通行总量<br><span style="color: yellow;font-size: 20px;margin-left: 40px;">'+data.value + '</span>辆';
	                              }
	                      },
	           
	                legend: {
	                    show: true,
	                    data: arr1,
	                    top: '3%',
	                    
	                    x: 'left',
	                    y: 'top',
	                    textStyle:{
	                        fontSize:14,
	                        color: 'white'
	                    },
	                    formatter: function (name) {
	                        if(name.length >= 8){
	                            return name.substring(0,8) + "...";
	                        }else{
	                            return name;
	                        }
	                        //return echarts.format.truncateText(name, 150, '14px Microsoft Yahei', '...');
	                    },
	                  },
	              series : [
	                  {
	                      name: '访问来源',
	                      type: 'pie',
	                      radius : [20,90],
	                      center: ['50%', '60%'],
	                       roseType : 'radius',
	                      itemStyle: {
	                              normal : { 
	                                        borderWidth : 5,
	                                        borderColor : 'white'
	                                        },
	                                   },
	                      label: {
	                          normal:{
	                              formatter: '{b}({c}辆)',
	                              textStyle:{
	                                  color: 'white'
	                              },
	                              fontFamily: 'Microsoft YaHei'
	                          }
	                      },
	                      labelLine: {
	                              normal: {
	                                lineStyle: {
	                                  color: 'white'
	                                }
	                              }
	                            },
	                      data:data,
	                      itemStyle: {
	                          emphasis: {
	                              shadowBlur: 10,
	                              shadowOffsetX: 0,
	                              shadowColor: 'rgba(0, 0, 0, 0.5)'
	                          }
	                      }
	                  }
	              ]
	     }
	     chart_type.setOption(option);

	  }

 //外省外埠车辆来源排名
var traveltime = function(containerId,data){
 
        $("#"+containerId).empty();
       data = data.sort(function(a,b){
        return a.value<b.value;
        })
          if(data){
            $.each(data,function(i,n){
               progressStr = "<tr><td>"+(i+1)+"</td><td>"+n.name+"</td><td>"+n.value+"</td></tr>"
              $("#"+containerId).append($(progressStr));
            })
    }else{
      $("#"+containerId).html("<span>暂时没有数据</span>")
    }
 }


  //数据的统一处理
  var refreshData = function(){
    $.get("../json/hebeishuju.json",function(data){
      console.log(data);
        //top 实时流量 外埠机动车 重点车辆流量 今日违法
    $('#ssll_Total').html(data.ssll + '<span>辆</span>');
    $('#wbjdc_Total').html(data.wbjdc + '<span>辆</span>');
    $('#zdc_Total').html(data.zdclll+'<span>辆</span>')
    $('#jrwf_Total').html(data.jrsf+'<span>辆</span>')
     // 卡口排名
        kakoupaiming("bay_rank",data.kkllpm); 
     // 收费站流量排名
        totel_pm("totel_pm",data.sfzllpm);
     //车辆类型排名top10
        cllxpm('cllxpm',data.cllxpm); 
     //外省外埠车辆来源排名
        traveltime('hour_content',data.wswbclpm);
    	    });
};

    $(document).ready(function(){
    	          refreshData();
		          tick("#time");
		          getWeather();
		       })  