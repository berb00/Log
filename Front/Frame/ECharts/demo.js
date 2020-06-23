// ==========================Bar             柱状图
// Large Scale Bar Chart
function initBarLarge() {
    var id = 'barLarge';
    var dataCount = 5e3;
    var data = generateData(dataCount);
    var option = {
        title: {
            text: echarts.format.addCommas(dataCount) + ' Data',
            left: 10
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: false
                },
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            bottom: 90
        },
        dataZoom: [{
            type: 'inside'
        }, {
            type: 'slider'
        }],
        xAxis: {
            data: data.categoryData,
            silent: false,
            splitLine: {
                show: false
            },
            splitArea: {
                show: false
            }
        },
        yAxis: {
            splitArea: {
                show: false
            }
        },
        series: [{
            type: 'bar',
            data: data.valueData,
            // Set `large` for large data amount
            large: true
        }]
    };

    var instance = echarts.init(document.getElementById(id));
    instance.clear();
    instance.setOption(option);

    function generateData(count) {
        var baseValue = Math.random() * 1000;
        var time = +new Date(2011, 0, 1);
        var smallBaseValue;

        function next(idx) {
            smallBaseValue = idx % 30 === 0
                ? Math.random() * 700
                : (smallBaseValue + Math.random() * 500 - 250);
            baseValue += Math.random() * 20 - 10;
            return Math.max(
                0,
                Math.round(baseValue + smallBaseValue) + 3000
            );
        }

        var categoryData = [];
        var valueData = [];

        for (var i = 0; i < count; i++) {
            categoryData.push(echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time));
            valueData.push(next(i).toFixed(2));
            time += 1000;
        }

        return {
            categoryData: categoryData,
            valueData: valueData
        };
    }
}

// 堆叠柱状图
function initBarStack() {
    var id = 'barStack';
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '邮件营销',
                type: 'bar',
                stack: '广告',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'bar',
                stack: '广告',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'bar',
                stack: '广告',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '搜索引擎',
                type: 'bar',
                data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                markLine: {
                    lineStyle: {
                        type: 'dashed'
                    },
                    data: [
                        [{type: 'min'}, {type: 'max'}]
                    ]
                }
            },
            {
                name: '百度',
                type: 'bar',
                barWidth: 5,
                stack: '搜索引擎',
                data: [620, 732, 701, 734, 1090, 1130, 1120]
            },
            {
                name: '谷歌',
                type: 'bar',
                stack: '搜索引擎',
                data: [120, 132, 101, 134, 290, 230, 220]
            },
            {
                name: '必应',
                type: 'bar',
                stack: '搜索引擎',
                data: [60, 72, 71, 74, 190, 130, 110]
            },
            {
                name: '其他',
                type: 'bar',
                stack: '搜索引擎',
                data: [62, 82, 91, 84, 109, 110, 120]
            }
        ]
    };

    var instance = echarts.init(document.getElementById(id));
    instance.clear();
    instance.setOption(option);
}

// 交错正负轴标签
function initBarNegative2() {
    var id = 'barNegative2';
    var labelRight = {
        position: 'right'
    };
    var option = {
        title: {
            text: '交错正负轴标签',
            subtext: 'From ExcelHome',
            sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: 80,
            bottom: 30
        },
        xAxis: {
            type: 'value',
            position: 'top',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            type: 'category',
            axisLine: {show: false},
            axisLabel: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
            data: ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
        },
        series: [
            {
                name: '生活费',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    formatter: '{b}'
                },
                data: [
                    {value: -0.07, label: labelRight},
                    {value: -0.09, label: labelRight},
                    0.2, 0.44,
                    {value: -0.23, label: labelRight},
                    0.08,
                    {value: -0.17, label: labelRight},
                    0.47,
                    {value: -0.36, label: labelRight},
                    0.18
                ]
            }
        ]
    };

    var instance = echarts.init(document.getElementById(id));
    instance.clear();
    instance.setOption(option);
}

// ==========================Line            折线图
// ==========================Pie             饼图
// ==========================Scatter         散点图
// Anscombe's quartet
function initScatterAnscombeQuartet() {
    var id = 'scatterAnscombeQuartet';
    var dataAll = [
        [
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68]
        ],
        [
            [10.0, 9.14],
            [8.0, 8.14],
            [13.0, 8.74],
            [9.0, 8.77],
            [11.0, 9.26],
            [14.0, 8.10],
            [6.0, 6.13],
            [4.0, 3.10],
            [12.0, 9.13],
            [7.0, 7.26],
            [5.0, 4.74]
        ],
        [
            [10.0, 7.46],
            [8.0, 6.77],
            [13.0, 12.74],
            [9.0, 7.11],
            [11.0, 7.81],
            [14.0, 8.84],
            [6.0, 6.08],
            [4.0, 5.39],
            [12.0, 8.15],
            [7.0, 6.42],
            [5.0, 5.73]
        ],
        [
            [8.0, 6.58],
            [8.0, 5.76],
            [8.0, 7.71],
            [8.0, 8.84],
            [8.0, 8.47],
            [8.0, 7.04],
            [8.0, 5.25],
            [19.0, 12.50],
            [8.0, 5.56],
            [8.0, 7.91],
            [8.0, 6.89]
        ]
    ];

    var markLineOpt = {
        animation: false,
        label: {
            formatter: 'y = 0.5 * x + 3',
            align: 'right'
        },
        lineStyle: {
            type: 'solid'
        },
        tooltip: {
            formatter: 'y = 0.5 * x + 3'
        },
        data: [[{
            coord: [0, 3],
            symbol: 'none'
        }, {
            coord: [20, 13],
            symbol: 'none'
        }]]
    };

    option = {
        title: {
            text: 'Anscombe\'s quartet',
            left: 'center',
            top: 0
        },
        grid: [
            {x: '7%', y: '7%', width: '38%', height: '38%'},
            {x2: '7%', y: '7%', width: '38%', height: '38%'},
            {x: '7%', y2: '7%', width: '38%', height: '38%'},
            {x2: '7%', y2: '7%', width: '38%', height: '38%'}
        ],
        tooltip: {
            formatter: 'Group {a}: ({c})'
        },
        xAxis: [
            {gridIndex: 0, min: 0, max: 20},
            {gridIndex: 1, min: 0, max: 20},
            {gridIndex: 2, min: 0, max: 20},
            {gridIndex: 3, min: 0, max: 20}
        ],
        yAxis: [
            {gridIndex: 0, min: 0, max: 15},
            {gridIndex: 1, min: 0, max: 15},
            {gridIndex: 2, min: 0, max: 15},
            {gridIndex: 3, min: 0, max: 15}
        ],
        series: [
            {
                name: 'I',
                type: 'scatter',
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: dataAll[0],
                markLine: markLineOpt
            },
            {
                name: 'II',
                type: 'scatter',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: dataAll[1],
                markLine: markLineOpt
            },
            {
                name: 'III',
                type: 'scatter',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: dataAll[2],
                markLine: markLineOpt
            },
            {
                name: 'IV',
                type: 'scatter',
                xAxisIndex: 3,
                yAxisIndex: 3,
                data: dataAll[3],
                markLine: markLineOpt
            }
        ]
    };

    var instance = echarts.init(document.getElementById(id));
    instance.clear();
    instance.setOption(option);
}

// Scatter on Single Axis
function initScatterSingleAxis() {
    var id = 'echart';
    var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a','10a','11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'];
    var days = ['Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

    var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];

    var option = {
        tooltip: {
            position: 'top'
        },
        title: [],
        singleAxis: [],
        series: []
    };

    echarts.util.each(days, function (day, idx) {
        option.title.push({
            textBaseline: 'middle',
            top: (idx + 0.5) * 100 / 7 + '%',
            text: day
        });
        option.singleAxis.push({
            left: 150,
            type: 'category',
            boundaryGap: false,
            data: hours,
            top: (idx * 100 / 7 + 5) + '%',
            height: (100 / 7 - 10) + '%',
            axisLabel: {
                interval: 2
            }
        });
        option.series.push({
            singleAxisIndex: idx,
            coordinateSystem: 'singleAxis',
            type: 'scatter',
            data: [],
            symbolSize: function (dataItem) {
                return dataItem[1] * 4;
            }
        });
    });

    echarts.util.each(data, function (dataItem) {
        option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
    });

    var instance = echarts.init(document.getElementById(id));
    instance.clear();
    instance.setOption(option);
}


// ==========================EffectScatter   涟漪散点图
// ==========================Candlestick     K线图
// ==========================Radar           雷达图
// ==========================Heatmap         热力图
// ==========================Tree            树图
// From Left to Right Tree
function initTreeBasic() {
    var id = 'treeBasic';
    var data = {
        "name":"flare",
        "children":[
            {"name":"analytics",
                "children":[
                    {"name":"cluster",
                        "children":[
                            {"name":"AgglomerativeCluster","value":3938},
                            {"name":"CommunityStructure","value":3812},
                            {"name":"HierarchicalCluster","value":6714},
                            {"name":"MergeEdge","value":743}]
                    },{"name":"graph",
                        "children":[
                            {"name":"BetweennessCentrality","value":3534},
                            {"name":"LinkDistance","value":5731},
                            {"name":"MaxFlowMinCut","value":7840},
                            {"name":"ShortestPaths","value":5914},
                            {"name":"SpanningTree","value":3416}]},
                    {"name":"optimization",
                        "children":[
                            {"name":"AspectRatioBanker","value":7074}]}]},
            {"name":"animate","children":[{"name":"Easing","value":17010},{"name":"FunctionSequence","value":5842},{"name":"interpolate","children":[{"name":"ArrayInterpolator","value":1983},{"name":"ColorInterpolator","value":2047},{"name":"DateInterpolator","value":1375},{"name":"Interpolator","value":8746},{"name":"MatrixInterpolator","value":2202},{"name":"NumberInterpolator","value":1382},{"name":"ObjectInterpolator","value":1629},{"name":"PointInterpolator","value":1675},{"name":"RectangleInterpolator","value":2042}]},{"name":"ISchedulable","value":1041},{"name":"Parallel","value":5176},{"name":"Pause","value":449},{"name":"Scheduler","value":5593},{"name":"Sequence","value":5534},{"name":"Transition","value":9201},{"name":"Transitioner","value":19975},{"name":"TransitionEvent","value":1116},{"name":"Tween","value":6006}]},{"name":"data","children":[{"name":"converters","children":[{"name":"Converters","value":721},{"name":"DelimitedTextConverter","value":4294},{"name":"GraphMLConverter","value":9800},{"name":"IDataConverter","value":1314},{"name":"JSONConverter","value":2220}]},{"name":"DataField","value":1759},{"name":"DataSchema","value":2165},{"name":"DataSet","value":586},{"name":"DataSource","value":3331},{"name":"DataTable","value":772},{"name":"DataUtil","value":3322}]},{"name":"display","children":[{"name":"DirtySprite","value":8833},{"name":"LineSprite","value":1732},{"name":"RectSprite","value":3623},{"name":"TextSprite","value":10066}]},{"name":"flex","children":[{"name":"FlareVis","value":4116}]},{"name":"physics","children":[{"name":"DragForce","value":1082},{"name":"GravityForce","value":1336},{"name":"IForce","value":319},{"name":"NBodyForce","value":10498},{"name":"Particle","value":2822},{"name":"Simulation","value":9983},{"name":"Spring","value":2213},{"name":"SpringForce","value":1681}]},{"name":"query","children":[{"name":"AggregateExpression","value":1616},{"name":"And","value":1027},{"name":"Arithmetic","value":3891},{"name":"Average","value":891},{"name":"BinaryExpression","value":2893},{"name":"Comparison","value":5103},{"name":"CompositeExpression","value":3677},{"name":"Count","value":781},{"name":"DateUtil","value":4141},{"name":"Distinct","value":933},{"name":"Expression","value":5130},{"name":"ExpressionIterator","value":3617},{"name":"Fn","value":3240},{"name":"If","value":2732},{"name":"IsA","value":2039},{"name":"Literal","value":1214},{"name":"Match","value":3748},{"name":"Maximum","value":843},{"name":"methods","children":[{"name":"add","value":593},{"name":"and","value":330},{"name":"average","value":287},{"name":"count","value":277},{"name":"distinct","value":292},{"name":"div","value":595},{"name":"eq","value":594},{"name":"fn","value":460},{"name":"gt","value":603},{"name":"gte","value":625},{"name":"iff","value":748},{"name":"isa","value":461},{"name":"lt","value":597},{"name":"lte","value":619},{"name":"max","value":283},{"name":"min","value":283},{"name":"mod","value":591},{"name":"mul","value":603},{"name":"neq","value":599},{"name":"not","value":386},{"name":"or","value":323},{"name":"orderby","value":307},{"name":"range","value":772},{"name":"select","value":296},{"name":"stddev","value":363},{"name":"sub","value":600},{"name":"sum","value":280},{"name":"update","value":307},{"name":"variance","value":335},{"name":"where","value":299},{"name":"xor","value":354},{"name":"-","value":264}]},{"name":"Minimum","value":843},{"name":"Not","value":1554},{"name":"Or","value":970},{"name":"Query","value":13896},{"name":"Range","value":1594},{"name":"StringUtil","value":4130},{"name":"Sum","value":791},{"name":"Variable","value":1124},{"name":"Variance","value":1876},{"name":"Xor","value":1101}]},{"name":"scale","children":[{"name":"IScaleMap","value":2105},{"name":"LinearScale","value":1316},{"name":"LogScale","value":3151},{"name":"OrdinalScale","value":3770},{"name":"QuantileScale","value":2435},{"name":"QuantitativeScale","value":4839},{"name":"RootScale","value":1756},{"name":"Scale","value":4268},{"name":"ScaleType","value":1821},{"name":"TimeScale","value":5833}]},{"name":"util","children":[{"name":"Arrays","value":8258},{"name":"Colors","value":10001},{"name":"Dates","value":8217},{"name":"Displays","value":12555},{"name":"Filter","value":2324},{"name":"Geometry","value":10993},{"name":"heap","children":[{"name":"FibonacciHeap","value":9354},{"name":"HeapNode","value":1233}]},{"name":"IEvaluable","value":335},{"name":"IPredicate","value":383},{"name":"IValueProxy","value":874},{"name":"math","children":[{"name":"DenseMatrix","value":3165},{"name":"IMatrix","value":2815},{"name":"SparseMatrix","value":3366}]},{"name":"Maths","value":17705},{"name":"Orientation","value":1486},{"name":"palette","children":[{"name":"ColorPalette","value":6367},{"name":"Palette","value":1229},{"name":"ShapePalette","value":2059},{"name":"SizePalette","value":2291}]},{"name":"Property","value":5559},{"name":"Shapes","value":19118},{"name":"Sort","value":6887},{"name":"Stats","value":6557},{"name":"Strings","value":22026}]},{"name":"vis","children":[{"name":"axis","children":[{"name":"Axes","value":1302},{"name":"Axis","value":24593},{"name":"AxisGridLine","value":652},{"name":"AxisLabel","value":636},{"name":"CartesianAxes","value":6703}]},{"name":"controls","children":[{"name":"AnchorControl","value":2138},{"name":"ClickControl","value":3824},{"name":"Control","value":1353},{"name":"ControlList","value":4665},{"name":"DragControl","value":2649},{"name":"ExpandControl","value":2832},{"name":"HoverControl","value":4896},{"name":"IControl","value":763},{"name":"PanZoomControl","value":5222},{"name":"SelectionControl","value":7862},{"name":"TooltipControl","value":8435}]},{"name":"data","children":[{"name":"Data","value":20544},{"name":"DataList","value":19788},{"name":"DataSprite","value":10349},{"name":"EdgeSprite","value":3301},{"name":"NodeSprite","value":19382},{"name":"render","children":[{"name":"ArrowType","value":698},{"name":"EdgeRenderer","value":5569},{"name":"IRenderer","value":353},{"name":"ShapeRenderer","value":2247}]},{"name":"ScaleBinding","value":11275},{"name":"Tree","value":7147},{"name":"TreeBuilder","value":9930}]},{"name":"events","children":[{"name":"DataEvent","value":2313},{"name":"SelectionEvent","value":1880},{"name":"TooltipEvent","value":1701},{"name":"VisualizationEvent","value":1117}]},{"name":"legend","children":[{"name":"Legend","value":20859},{"name":"LegendItem","value":4614},{"name":"LegendRange","value":10530}]},{"name":"operator","children":[{"name":"distortion","children":[{"name":"BifocalDistortion","value":4461},{"name":"Distortion","value":6314},{"name":"FisheyeDistortion","value":3444}]},{"name":"encoder","children":[{"name":"ColorEncoder","value":3179},{"name":"Encoder","value":4060},{"name":"PropertyEncoder","value":4138},{"name":"ShapeEncoder","value":1690},{"name":"SizeEncoder","value":1830}]},{"name":"filter","children":[{"name":"FisheyeTreeFilter","value":5219},{"name":"GraphDistanceFilter","value":3165},{"name":"VisibilityFilter","value":3509}]},{"name":"IOperator","value":1286},{"name":"label","children":[{"name":"Labeler","value":9956},{"name":"RadialLabeler","value":3899},{"name":"StackedAreaLabeler","value":3202}]},{"name":"layout","children":[{"name":"AxisLayout","value":6725},{"name":"BundledEdgeRouter","value":3727},{"name":"CircleLayout","value":9317},{"name":"CirclePackingLayout","value":12003},{"name":"DendrogramLayout","value":4853},{"name":"ForceDirectedLayout","value":8411},{"name":"IcicleTreeLayout","value":4864},{"name":"IndentedTreeLayout","value":3174},{"name":"Layout","value":7881},{"name":"NodeLinkTreeLayout","value":12870},{"name":"PieLayout","value":2728},{"name":"RadialTreeLayout","value":12348},{"name":"RandomLayout","value":870},{"name":"StackedAreaLayout","value":9121},{"name":"TreeMapLayout","value":9191}]},{"name":"Operator","value":2490},{"name":"OperatorList","value":5248},{"name":"OperatorSequence","value":4190},{"name":"OperatorSwitch","value":2581},{"name":"SortOperator","value":2023}]},{"name":"Visualization","value":16540}]}]}

    echarts.util.each(data.children, function (datum, index) {
        index % 2 === 0 && (datum.collapsed = true);
    });

    var option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',

                data: [data],

                top: '1%',
                left: '7%',
                bottom: '1%',
                right: '20%',

                symbolSize: 7,

                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 9
                },

                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    }

    var instance = echarts.init(document.getElementById(id));
    instance.clear();
    instance.setOption(option);
}

// From Top to Bottom Tree
function initTreeVertical() {
    var id = 'treeVertical';
    var data = {
        "name":"flare",
        "children":[
            {"name":"analytics",
                "children":[
                    {"name":"cluster",
                        "children":[
                            {"name":"AgglomerativeCluster","value":3938},
                            {"name":"CommunityStructure","value":3812},
                            {"name":"HierarchicalCluster","value":6714},
                            {"name":"MergeEdge","value":743}]
                    },{"name":"graph",
                        "children":[
                            {"name":"BetweennessCentrality","value":3534},
                            {"name":"LinkDistance","value":5731},
                            {"name":"MaxFlowMinCut","value":7840},
                            {"name":"ShortestPaths","value":5914},
                            {"name":"SpanningTree","value":3416}]},
                    {"name":"optimization",
                        "children":[
                            {"name":"AspectRatioBanker","value":7074}]}]},
            {"name":"animate","children":[{"name":"Easing","value":17010},{"name":"FunctionSequence","value":5842},{"name":"interpolate","children":[{"name":"ArrayInterpolator","value":1983},{"name":"ColorInterpolator","value":2047},{"name":"DateInterpolator","value":1375},{"name":"Interpolator","value":8746},{"name":"MatrixInterpolator","value":2202},{"name":"NumberInterpolator","value":1382},{"name":"ObjectInterpolator","value":1629},{"name":"PointInterpolator","value":1675},{"name":"RectangleInterpolator","value":2042}]},{"name":"ISchedulable","value":1041},{"name":"Parallel","value":5176},{"name":"Pause","value":449},{"name":"Scheduler","value":5593},{"name":"Sequence","value":5534},{"name":"Transition","value":9201},{"name":"Transitioner","value":19975},{"name":"TransitionEvent","value":1116},{"name":"Tween","value":6006}]},{"name":"data","children":[{"name":"converters","children":[{"name":"Converters","value":721},{"name":"DelimitedTextConverter","value":4294},{"name":"GraphMLConverter","value":9800},{"name":"IDataConverter","value":1314},{"name":"JSONConverter","value":2220}]},{"name":"DataField","value":1759},{"name":"DataSchema","value":2165},{"name":"DataSet","value":586},{"name":"DataSource","value":3331},{"name":"DataTable","value":772},{"name":"DataUtil","value":3322}]},{"name":"display","children":[{"name":"DirtySprite","value":8833},{"name":"LineSprite","value":1732},{"name":"RectSprite","value":3623},{"name":"TextSprite","value":10066}]},{"name":"flex","children":[{"name":"FlareVis","value":4116}]},{"name":"physics","children":[{"name":"DragForce","value":1082},{"name":"GravityForce","value":1336},{"name":"IForce","value":319},{"name":"NBodyForce","value":10498},{"name":"Particle","value":2822},{"name":"Simulation","value":9983},{"name":"Spring","value":2213},{"name":"SpringForce","value":1681}]},{"name":"query","children":[{"name":"AggregateExpression","value":1616},{"name":"And","value":1027},{"name":"Arithmetic","value":3891},{"name":"Average","value":891},{"name":"BinaryExpression","value":2893},{"name":"Comparison","value":5103},{"name":"CompositeExpression","value":3677},{"name":"Count","value":781},{"name":"DateUtil","value":4141},{"name":"Distinct","value":933},{"name":"Expression","value":5130},{"name":"ExpressionIterator","value":3617},{"name":"Fn","value":3240},{"name":"If","value":2732},{"name":"IsA","value":2039},{"name":"Literal","value":1214},{"name":"Match","value":3748},{"name":"Maximum","value":843},{"name":"methods","children":[{"name":"add","value":593},{"name":"and","value":330},{"name":"average","value":287},{"name":"count","value":277},{"name":"distinct","value":292},{"name":"div","value":595},{"name":"eq","value":594},{"name":"fn","value":460},{"name":"gt","value":603},{"name":"gte","value":625},{"name":"iff","value":748},{"name":"isa","value":461},{"name":"lt","value":597},{"name":"lte","value":619},{"name":"max","value":283},{"name":"min","value":283},{"name":"mod","value":591},{"name":"mul","value":603},{"name":"neq","value":599},{"name":"not","value":386},{"name":"or","value":323},{"name":"orderby","value":307},{"name":"range","value":772},{"name":"select","value":296},{"name":"stddev","value":363},{"name":"sub","value":600},{"name":"sum","value":280},{"name":"update","value":307},{"name":"variance","value":335},{"name":"where","value":299},{"name":"xor","value":354},{"name":"-","value":264}]},{"name":"Minimum","value":843},{"name":"Not","value":1554},{"name":"Or","value":970},{"name":"Query","value":13896},{"name":"Range","value":1594},{"name":"StringUtil","value":4130},{"name":"Sum","value":791},{"name":"Variable","value":1124},{"name":"Variance","value":1876},{"name":"Xor","value":1101}]},{"name":"scale","children":[{"name":"IScaleMap","value":2105},{"name":"LinearScale","value":1316},{"name":"LogScale","value":3151},{"name":"OrdinalScale","value":3770},{"name":"QuantileScale","value":2435},{"name":"QuantitativeScale","value":4839},{"name":"RootScale","value":1756},{"name":"Scale","value":4268},{"name":"ScaleType","value":1821},{"name":"TimeScale","value":5833}]},{"name":"util","children":[{"name":"Arrays","value":8258},{"name":"Colors","value":10001},{"name":"Dates","value":8217},{"name":"Displays","value":12555},{"name":"Filter","value":2324},{"name":"Geometry","value":10993},{"name":"heap","children":[{"name":"FibonacciHeap","value":9354},{"name":"HeapNode","value":1233}]},{"name":"IEvaluable","value":335},{"name":"IPredicate","value":383},{"name":"IValueProxy","value":874},{"name":"math","children":[{"name":"DenseMatrix","value":3165},{"name":"IMatrix","value":2815},{"name":"SparseMatrix","value":3366}]},{"name":"Maths","value":17705},{"name":"Orientation","value":1486},{"name":"palette","children":[{"name":"ColorPalette","value":6367},{"name":"Palette","value":1229},{"name":"ShapePalette","value":2059},{"name":"SizePalette","value":2291}]},{"name":"Property","value":5559},{"name":"Shapes","value":19118},{"name":"Sort","value":6887},{"name":"Stats","value":6557},{"name":"Strings","value":22026}]},{"name":"vis","children":[{"name":"axis","children":[{"name":"Axes","value":1302},{"name":"Axis","value":24593},{"name":"AxisGridLine","value":652},{"name":"AxisLabel","value":636},{"name":"CartesianAxes","value":6703}]},{"name":"controls","children":[{"name":"AnchorControl","value":2138},{"name":"ClickControl","value":3824},{"name":"Control","value":1353},{"name":"ControlList","value":4665},{"name":"DragControl","value":2649},{"name":"ExpandControl","value":2832},{"name":"HoverControl","value":4896},{"name":"IControl","value":763},{"name":"PanZoomControl","value":5222},{"name":"SelectionControl","value":7862},{"name":"TooltipControl","value":8435}]},{"name":"data","children":[{"name":"Data","value":20544},{"name":"DataList","value":19788},{"name":"DataSprite","value":10349},{"name":"EdgeSprite","value":3301},{"name":"NodeSprite","value":19382},{"name":"render","children":[{"name":"ArrowType","value":698},{"name":"EdgeRenderer","value":5569},{"name":"IRenderer","value":353},{"name":"ShapeRenderer","value":2247}]},{"name":"ScaleBinding","value":11275},{"name":"Tree","value":7147},{"name":"TreeBuilder","value":9930}]},{"name":"events","children":[{"name":"DataEvent","value":2313},{"name":"SelectionEvent","value":1880},{"name":"TooltipEvent","value":1701},{"name":"VisualizationEvent","value":1117}]},{"name":"legend","children":[{"name":"Legend","value":20859},{"name":"LegendItem","value":4614},{"name":"LegendRange","value":10530}]},{"name":"operator","children":[{"name":"distortion","children":[{"name":"BifocalDistortion","value":4461},{"name":"Distortion","value":6314},{"name":"FisheyeDistortion","value":3444}]},{"name":"encoder","children":[{"name":"ColorEncoder","value":3179},{"name":"Encoder","value":4060},{"name":"PropertyEncoder","value":4138},{"name":"ShapeEncoder","value":1690},{"name":"SizeEncoder","value":1830}]},{"name":"filter","children":[{"name":"FisheyeTreeFilter","value":5219},{"name":"GraphDistanceFilter","value":3165},{"name":"VisibilityFilter","value":3509}]},{"name":"IOperator","value":1286},{"name":"label","children":[{"name":"Labeler","value":9956},{"name":"RadialLabeler","value":3899},{"name":"StackedAreaLabeler","value":3202}]},{"name":"layout","children":[{"name":"AxisLayout","value":6725},{"name":"BundledEdgeRouter","value":3727},{"name":"CircleLayout","value":9317},{"name":"CirclePackingLayout","value":12003},{"name":"DendrogramLayout","value":4853},{"name":"ForceDirectedLayout","value":8411},{"name":"IcicleTreeLayout","value":4864},{"name":"IndentedTreeLayout","value":3174},{"name":"Layout","value":7881},{"name":"NodeLinkTreeLayout","value":12870},{"name":"PieLayout","value":2728},{"name":"RadialTreeLayout","value":12348},{"name":"RandomLayout","value":870},{"name":"StackedAreaLayout","value":9121},{"name":"TreeMapLayout","value":9191}]},{"name":"Operator","value":2490},{"name":"OperatorList","value":5248},{"name":"OperatorSequence","value":4190},{"name":"OperatorSwitch","value":2581},{"name":"SortOperator","value":2023}]},{"name":"Visualization","value":16540}]}]}

    var option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series:[
            {
                type: 'tree',

                data: [data],

                left: '2%',
                right: '2%',
                top: '8%',
                bottom: '20%',

                symbol: 'emptyCircle',

                orient: 'vertical',

                expandAndCollapse: true,

                label: {
                    position: 'top',
                    rotate: -90,
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 9
                },

                leaves: {
                    label: {
                        position: 'bottom',
                        rotate: -90,
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                animationDurationUpdate: 750
            }
        ]
    }
    var instance = echarts.init(document.getElementById(id));
    instance.clear();
    instance.setOption(option);
}




// ==========================Treemap         矩形树图
// ==========================Sunburst        旭日图
// ==========================Map             地图
// ==========================Lines           线图

// 网络拓扑图
function initLinesTopology() {
    var id = 'linesTopology';
    var nodes = [{
        x: '8',
        y: '12',
        name: 'DNS',
        img: 'data-1547632686885-o5Rfi3tyk.png',        // 节点图片
    },
        {
            x: '1',
            y: '3',
            name: '爬虫数据',
            img: 'data-1547632686885-o5Rfi3tyk.png',
        },
        {
            x: '3',
            y: '12',
            name: '域名缓存',
            img: 'data-1547632686885-o5Rfi3tyk.png',
        },
        {
            x: '3',
            y: '8',
            name: 'DPI用户面',
            img: 'data-1547632686885-o5Rfi3tyk.png',
        },
        {
            x: '3',
            y: '5',
            name: '场景特征',
            img: 'data-1547632686885-o5Rfi3tyk.png',
        },
        {
            x: '3',
            y: '1',
            name: '终端特征',
            img: 'data-1547632686885-o5Rfi3tyk.png',
        },
        {
            x: '5',
            y: '10',
            name: '增强特征',
            img: 'data-1547632686885-o5Rfi3tyk.png',
        },
        {
            x: '7',
            y: '12',
            name: 'HTTP',
            img: 'data-1547632686885-o5Rfi3tyk.png',
        },
        {
            x: '7',
            y: '8',
            name: '通用',
            img: 'data-1547632686885-o5Rfi3tyk.png',
        },
        {
            x: '9',
            y: '10',
            name: '用户中间表',
            img: 'data-1547632686885-o5Rfi3tyk.png',
        },
        {
            x: '9',
            y: '6',
            name: '网元信息表',
            img: 'data-1547632686885-o5Rfi3tyk.png',
        },
        {
            x: '11',
            y: '8',
            name: '质差网元',
            img: 'data-1547632686885-o5Rfi3tyk.png',
        },
    ]
    var links = [{
        source: 'DNS',
        target: '域名缓存',
        name: '访问'
    },
        {
            source: '爬虫数据',
            target: '场景特征',
            name: '访问'
        },
        {
            source: '爬虫数据',
            target: '终端特征',
            name: '访问'
        },
        {
            source: '域名缓存',
            target: '增强特征',
            name: '访问'
        },
        {
            source: 'DPI用户面',
            target: '增强特征',
            name: '访问'
        },
        {
            source: '场景特征',
            target: '增强特征',
            name: '访问'
        },
        {
            source: '终端特征',
            target: '增强特征',
            name: '访问'
        },
        {
            source: '增强特征',
            target: 'HTTP',
            name: '访问'
        },
        {
            source: '增强特征',
            target: '通用',
            name: '访问'
        },
        {
            source: 'HTTP',
            target: '用户中间表',
            name: '访问'
        },
        {
            source: '通用',
            target: '用户中间表',
            name: '访问'
        },
        {
            source: '用户中间表',
            target: '质差网元',
            name: '访问'
        },
        {
            source: '网元信息表',
            target: '质差网元',
            name: '访问'
        },

    ]
    var charts = {
        nodes: [],
        links: [],
        linesData: []
    }
    var dataMap = new Map()
    for (var j = 0; j < nodes.length; j++) {
        var x = parseInt(nodes[j].x)
        var y = parseInt(nodes[j].y)
        var node = {
            name: nodes[j].name,
            value: [x, y],
            symbolSize: 50,
            alarm: nodes[j].alarm,
            symbol: 'image:///asset/get/s/' + nodes[j].img,
            itemStyle: {
                normal: {
                    color: '#12b5d0',
                }
            }
        }
        dataMap.set(nodes[j].name, [x, y])
        charts.nodes.push(node)
    }
    for (var i = 0; i < links.length; i++) {
        var link = {
            source: links[i].source,
            target: links[i].target,
            label: {
                normal: {
                    show: true,
                    formatter: links[i].name
                }
            },
            lineStyle: {
                normal: {
                    color: '#12b5d0'
                }
            }
        }

        charts.links.push(link)
        // 组装动态移动的效果数据
        var lines = [{
            coord: dataMap.get(links[i].source)
        }, {
            coord: dataMap.get(links[i].target)
        }]
        charts.linesData.push(lines)
    }
    option = {
        title: {
            text: '网络拓扑图'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}',
        },
        backgroundColor: "#F5F5F5",
        xAxis: {
            min: 0,
            max: 12,
            show: false,
            type: 'value'
        },
        yAxis: {
            min: 0,
            max: 12,
            show: false,
            type: 'value'
        },
        series: [{
            type: 'graph',
            layout: 'none',
            id: 'a',
            coordinateSystem: 'cartesian2d',
            edgeSymbol: ['', 'arrow'],
            // symbolSize: 50,
            label: {
                normal: {
                    show: true,
                    position: 'bottom',
                    color: '#12b5d0'
                }
            },
            lineStyle: {
                normal: {
                    width: 2,
                    shadowColor: 'none'
                }
            },
            xAxis: {
                min: 0,
                max: 12,
                show: false,
                type: 'value'
            },
            yAxis: {
                min: 0,
                max: 12,
                show: false,
                type: 'value'
            },
            // edgeSymbolSize: 8,
            draggable: true,
            data: charts.nodes,
            links: charts.links,
            z: 4,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: function(item) {
                            return item.data.name
                        }
                    }
                }
            }
        }, {
            name: 'A',
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            z: 4,
            effect: {
                show: true,
                trailLength: 0,
                symbol: 'arrow',
                color: '#12b5d0',
                symbolSize: 8
            },
            lineStyle: {
                normal: {
                    curveness: 0
                }
            },
            data: charts.linesData,

        }]
    };
    var instance = echarts.init(document.getElementById(id));
    instance.clear();
    instance.setOption(option);
}

// ==========================Graph           关系图
// ==========================Boxplot         箱线图
// ==========================Parallel        平行坐标
// Parallel Mobile Phone
function initParallelMobilePhone() {
    var id = 'parallelMobilePhone';
    var dataYijia5 = [
        ['骁龙835', 8, 128, 3300, 6.01, 79.62, '2', 3499]
    ];
    var dataMix2 = [
        ['骁龙835', 6, 128, 3400, 5.99, 80.79, '1', 3399]
    ];
    var dataMeizu7 = [
        ['Helio X30', 6, 128, 3500, 5.7, 73.7, '2', 3199]
    ];
    var dataOppo11 = [
        ['骁龙660', 6, 128, 3205, 6.01, 85.8, '2', 3599]
    ];
    var dataVivo6 = [
        ['骁龙820', 6, 128, 4080, 5.46, 72.78, '2', 3998]
    ];
    var dataMate10 = [
        ['麒麟970', 6, 128, 4000, 6, 80.88, '2', 5399]
    ];
    var dataNote8 = [
        ['骁龙835', 6, 128, 3300, 6.3, 82.87, '2', 7388]
    ];
    var dataIponex = [
        ['A11', 3, 64, 2716, 5.8, 81.15, '2', 8388]
    ];
    var dataJiangg2 = [
        ['骁龙660', 6, 128, 3500, 5.99, 81.76, '2', 2699]
    ];
    var dataZqm = [
        ['骁龙821', 6, 128, 3180, 5.2, 69.03, '1', 4888]
    ];
    var dataHtc11 = [
        ['骁龙835', 6, 128, 3000, 5.5, 71.39, '1', 3999]
    ];

    var schema = [{
        name: 'CPU',
        index: 0,
        text: 'CPU'
    },
        {
            name: 'RAM',
            index: 1,
            text: 'RAM(G)'
        },
        {
            name: 'ROM',
            index: 2,
            text: 'ROM(G)'
        },
        {
            name: '电池',
            index: 3,
            text: '电池(mAh)'
        },
        {
            name: '主屏尺寸',
            index: 4,
            text: '主屏尺寸(英寸)'
        },
        {
            name: '屏占比',
            index: 5,
            text: '屏占比(%)'
        },
        {
            name: '后摄数',
            index: 6,
            text: '后摄数'
        },
        {
            name: '价格',
            index: 7,
            text: '价格(元)'
        },
    ];
    var lineStyle = {
        normal: {
            width: 1,
            opacity: 1
        }
    };

    var option = {
        color: ['#da0d68', '#975e6d', '#a2b029', '#c78936', '#8c292c', '#f89a1c', '#dd4c51', '#3e0317', '#f2684b', '#be8663', '#6569b0'],
        title: {
            text: 'Mobile Phone',
            subtext: '数据来源网络'
        },

        legend: {
            data: ['一加5T', '小米mix2', '魅族pro7 plus', 'oppo r11s', 'vivo xplay6', '华为mate10 pro', '三星note8', '苹果X', '坚果Pro2', '中兴Axon M', 'HTC U11'],
            bottom: 1
        },
        parallelAxis: [{
            dim: 0,
            name: schema[0].text,
            type: 'category',
            data: ['Helio X30', '骁龙660', '骁龙820', '麒麟970', 'A11', '骁龙821', '骁龙835']
        },
            {
                dim: 1,
                name: schema[1].text,
            },
            {
                dim: 2,
                name: schema[2].text,
                max: 128
            },
            {
                dim: 3,
                name: schema[3].text,
                min: 2500
            },
            {
                dim: 4,
                name: schema[4].text,
                min: 5.2
            },
            {
                dim: 5,
                name: schema[5].text,
                min: 69
            },
            {
                dim: 6,
                name: schema[6].text,
                type: 'category',
                data: ['1', '2']
            },
            {
                dim: 7,
                name: schema[7].text,
                min: 2600
            },
        ],
        parallel: {
            left: '5%',
            right: '13%',
            bottom: '15%',
            top: '16%',
            parallelAxisDefault: {
                type: 'value',
                nameLocation: 'end',
                nameGap: 20
            }
        },
        series: [{
            name: '一加5T',
            type: 'parallel',
            lineStyle: lineStyle,
            smooth: true,
            data: dataYijia5
        },
            {
                name: '小米mix2',
                type: 'parallel',
                lineStyle: lineStyle,
                smooth: 0.2,
                data: dataMix2
            },
            {
                name: '魅族pro7 plus',
                type: 'parallel',
                lineStyle: lineStyle,
                smooth: true,
                data: dataMeizu7
            },
            {
                name: 'oppo r11s',
                type: 'parallel',
                lineStyle: lineStyle,
                smooth: true,
                data: dataOppo11
            },
            {
                name: 'vivo xplay6',
                type: 'parallel',
                lineStyle: lineStyle,
                smooth: true,
                data: dataVivo6
            },
            {
                name: '华为mate10 pro',
                type: 'parallel',
                lineStyle: lineStyle,
                smooth: true,
                data: dataMate10
            },
            {
                name: '三星note8',
                type: 'parallel',
                lineStyle: lineStyle,
                smooth: 0.6,
                data: dataNote8
            },
            {
                name: '苹果X',
                type: 'parallel',
                lineStyle: lineStyle,
                smooth: true,
                data: dataIponex
            },
            {
                name: '坚果Pro2',
                type: 'parallel',
                lineStyle: lineStyle,
                smooth: true,
                data: dataJiangg2
            },
            {
                name: '中兴Axon M',
                type: 'parallel',
                lineStyle: lineStyle,
                smooth: true,
                data: dataZqm
            },
            {
                name: 'HTC U11',
                type: 'parallel',
                lineStyle: lineStyle,
                smooth: true,
                data: dataHtc11
            }
        ]
    };
    var instance = echarts.init(document.getElementById(id));
    instance.clear();
    instance.setOption(option);
}

// ==========================Gauge           仪表盘
// ==========================Funnel          漏斗图
// ==========================Sankey          桑基图
// ==========================ThemeRiver      主题河流图
// ==========================PictorialBar    象形柱图

// Vehicles
function initPictorialBarVehicle() {
    var id = 'echart';
    var pathSymbols = {
        reindeer: 'path://M-22.788,24.521c2.08-0.986,3.611-3.905,4.984-5.892 c-2.686,2.782-5.047,5.884-9.102,7.312c-0.992,0.005-0.25-2.016,0.34-2.362l1.852-0.41c0.564-0.218,0.785-0.842,0.902-1.347 c2.133-0.727,4.91-4.129,6.031-6.194c1.748-0.7,4.443-0.679,5.734-2.293c1.176-1.468,0.393-3.992,1.215-6.557 c0.24-0.754,0.574-1.581,1.008-2.293c-0.611,0.011-1.348-0.061-1.959-0.608c-1.391-1.245-0.785-2.086-1.297-3.313 c1.684,0.744,2.5,2.584,4.426,2.586C-8.46,3.012-8.255,2.901-8.04,2.824c6.031-1.952,15.182-0.165,19.498-3.937 c1.15-3.933-1.24-9.846-1.229-9.938c0.008-0.062-1.314-0.004-1.803-0.258c-1.119-0.771-6.531-3.75-0.17-3.33 c0.314-0.045,0.943,0.259,1.439,0.435c-0.289-1.694-0.92-0.144-3.311-1.946c0,0-1.1-0.855-1.764-1.98 c-0.836-1.09-2.01-2.825-2.992-4.031c-1.523-2.476,1.367,0.709,1.816,1.108c1.768,1.704,1.844,3.281,3.232,3.983 c0.195,0.203,1.453,0.164,0.926-0.468c-0.525-0.632-1.367-1.278-1.775-2.341c-0.293-0.703-1.311-2.326-1.566-2.711 c-0.256-0.384-0.959-1.718-1.67-2.351c-1.047-1.187-0.268-0.902,0.521-0.07c0.789,0.834,1.537,1.821,1.672,2.023 c0.135,0.203,1.584,2.521,1.725,2.387c0.102-0.259-0.035-0.428-0.158-0.852c-0.125-0.423-0.912-2.032-0.961-2.083 c-0.357-0.852-0.566-1.908-0.598-3.333c0.4-2.375,0.648-2.486,0.549-0.705c0.014,1.143,0.031,2.215,0.602,3.247 c0.807,1.496,1.764,4.064,1.836,4.474c0.561,3.176,2.904,1.749,2.281-0.126c-0.068-0.446-0.109-2.014-0.287-2.862 c-0.18-0.849-0.219-1.688-0.113-3.056c0.066-1.389,0.232-2.055,0.277-2.299c0.285-1.023,0.4-1.088,0.408,0.135 c-0.059,0.399-0.131,1.687-0.125,2.655c0.064,0.642-0.043,1.768,0.172,2.486c0.654,1.928-0.027,3.496,1,3.514 c1.805-0.424,2.428-1.218,2.428-2.346c-0.086-0.704-0.121-0.843-0.031-1.193c0.221-0.568,0.359-0.67,0.312-0.076 c-0.055,0.287,0.031,0.533,0.082,0.794c0.264,1.197,0.912,0.114,1.283-0.782c0.15-0.238,0.539-2.154,0.545-2.522 c-0.023-0.617,0.285-0.645,0.309,0.01c0.064,0.422-0.248,2.646-0.205,2.334c-0.338,1.24-1.105,3.402-3.379,4.712 c-0.389,0.12-1.186,1.286-3.328,2.178c0,0,1.729,0.321,3.156,0.246c1.102-0.19,3.707-0.027,4.654,0.269 c1.752,0.494,1.531-0.053,4.084,0.164c2.26-0.4,2.154,2.391-1.496,3.68c-2.549,1.405-3.107,1.475-2.293,2.984 c3.484,7.906,2.865,13.183,2.193,16.466c2.41,0.271,5.732-0.62,7.301,0.725c0.506,0.333,0.648,1.866-0.457,2.86 c-4.105,2.745-9.283,7.022-13.904,7.662c-0.977-0.194,0.156-2.025,0.803-2.247l1.898-0.03c0.596-0.101,0.936-0.669,1.152-1.139 c3.16-0.404,5.045-3.775,8.246-4.818c-4.035-0.718-9.588,3.981-12.162,1.051c-5.043,1.423-11.449,1.84-15.895,1.111 c-3.105,2.687-7.934,4.021-12.115,5.866c-3.271,3.511-5.188,8.086-9.967,10.414c-0.986,0.119-0.48-1.974,0.066-2.385l1.795-0.618 C-22.995,25.682-22.849,25.035-22.788,24.521z',
        plane: 'path://M1.112,32.559l2.998,1.205l-2.882,2.268l-2.215-0.012L1.112,32.559z M37.803,23.96 c0.158-0.838,0.5-1.509,0.961-1.904c-0.096-0.037-0.205-0.071-0.344-0.071c-0.777-0.005-2.068-0.009-3.047-0.009 c-0.633,0-1.217,0.066-1.754,0.18l2.199,1.804H37.803z M39.738,23.036c-0.111,0-0.377,0.325-0.537,0.924h1.076 C40.115,23.361,39.854,23.036,39.738,23.036z M39.934,39.867c-0.166,0-0.674,0.705-0.674,1.986s0.506,1.986,0.674,1.986 s0.672-0.705,0.672-1.986S40.102,39.867,39.934,39.867z M38.963,38.889c-0.098-0.038-0.209-0.07-0.348-0.073 c-0.082,0-0.174,0-0.268-0.001l-7.127,4.671c0.879,0.821,2.42,1.417,4.348,1.417c0.979,0,2.27-0.006,3.047-0.01 c0.139,0,0.25-0.034,0.348-0.072c-0.646-0.555-1.07-1.643-1.07-2.967C37.891,40.529,38.316,39.441,38.963,38.889z M32.713,23.96 l-12.37-10.116l-4.693-0.004c0,0,4,8.222,4.827,10.121H32.713z M59.311,32.374c-0.248,2.104-5.305,3.172-8.018,3.172H39.629 l-25.325,16.61L9.607,52.16c0,0,6.687-8.479,7.95-10.207c1.17-1.6,3.019-3.699,3.027-6.407h-2.138 c-5.839,0-13.816-3.789-18.472-5.583c-2.818-1.085-2.396-4.04-0.031-4.04h0.039l-3.299-11.371h3.617c0,0,4.352,5.696,5.846,7.5 c2,2.416,4.503,3.678,8.228,3.87h30.727c2.17,0,4.311,0.417,6.252,1.046c3.49,1.175,5.863,2.7,7.199,4.027 C59.145,31.584,59.352,32.025,59.311,32.374z M22.069,30.408c0-0.815-0.661-1.475-1.469-1.475c-0.812,0-1.471,0.66-1.471,1.475 s0.658,1.475,1.471,1.475C21.408,31.883,22.069,31.224,22.069,30.408z M27.06,30.408c0-0.815-0.656-1.478-1.466-1.478 c-0.812,0-1.471,0.662-1.471,1.478s0.658,1.477,1.471,1.477C26.404,31.885,27.06,31.224,27.06,30.408z M32.055,30.408 c0-0.815-0.66-1.475-1.469-1.475c-0.808,0-1.466,0.66-1.466,1.475s0.658,1.475,1.466,1.475 C31.398,31.883,32.055,31.224,32.055,30.408z M37.049,30.408c0-0.815-0.658-1.478-1.467-1.478c-0.812,0-1.469,0.662-1.469,1.478 s0.656,1.477,1.469,1.477C36.389,31.885,37.049,31.224,37.049,30.408z M42.039,30.408c0-0.815-0.656-1.478-1.465-1.478 c-0.811,0-1.469,0.662-1.469,1.478s0.658,1.477,1.469,1.477C41.383,31.885,42.039,31.224,42.039,30.408z M55.479,30.565 c-0.701-0.436-1.568-0.896-2.627-1.347c-0.613,0.289-1.551,0.476-2.73,0.476c-1.527,0-1.639,2.263,0.164,2.316 C52.389,32.074,54.627,31.373,55.479,30.565z',
        train: 'path://M67.335,33.596L67.335,33.596c-0.002-1.39-1.153-3.183-3.328-4.218h-9.096v-2.07h5.371 c-4.939-2.07-11.199-4.141-14.89-4.141H19.72v12.421v5.176h38.373c4.033,0,8.457-1.035,9.142-5.176h-0.027 c0.076-0.367,0.129-0.751,0.129-1.165L67.335,33.596L67.335,33.596z M27.999,30.413h-3.105v-4.141h3.105V30.413z M35.245,30.413 h-3.104v-4.141h3.104V30.413z M42.491,30.413h-3.104v-4.141h3.104V30.413z M49.736,30.413h-3.104v-4.141h3.104V30.413z  M14.544,40.764c1.143,0,2.07-0.927,2.07-2.07V35.59V25.237c0-1.145-0.928-2.07-2.07-2.07H-9.265c-1.143,0-2.068,0.926-2.068,2.07 v10.351v3.105c0,1.144,0.926,2.07,2.068,2.07H14.544L14.544,40.764z M8.333,26.272h3.105v4.141H8.333V26.272z M1.087,26.272h3.105 v4.141H1.087V26.272z M-6.159,26.272h3.105v4.141h-3.105V26.272z M-9.265,41.798h69.352v1.035H-9.265V41.798z',
        ship: 'path://M16.678,17.086h9.854l-2.703,5.912c5.596,2.428,11.155,5.575,16.711,8.607c3.387,1.847,6.967,3.75,10.541,5.375 v-6.16l-4.197-2.763v-5.318L33.064,12.197h-11.48L20.43,15.24h-4.533l-1.266,3.286l0.781,0.345L16.678,17.086z M49.6,31.84 l0.047,1.273L27.438,20.998l0.799-1.734L49.6,31.84z M33.031,15.1l12.889,8.82l0.027,0.769L32.551,16.1L33.031,15.1z M22.377,14.045 h9.846l-1.539,3.365l-2.287-1.498h1.371l0.721-1.352h-2.023l-0.553,1.037l-0.541-0.357h-0.34l0.359-0.684h-2.025l-0.361,0.684 h-3.473L22.377,14.045z M23.695,20.678l-0.004,0.004h0.004V20.678z M24.828,18.199h-2.031l-0.719,1.358h2.029L24.828,18.199z  M40.385,34.227c-12.85-7.009-25.729-14.667-38.971-12.527c1.26,8.809,9.08,16.201,8.213,24.328 c-0.553,4.062-3.111,0.828-3.303,7.137c15.799,0,32.379,0,48.166,0l0.066-4.195l1.477-7.23 C50.842,39.812,45.393,36.961,40.385,34.227z M13.99,35.954c-1.213,0-2.195-1.353-2.195-3.035c0-1.665,0.98-3.017,2.195-3.017 c1.219,0,2.195,1.352,2.195,3.017C16.186,34.604,15.213,35.954,13.99,35.954z M23.691,20.682h-2.02l-0.588,1.351h2.023 L23.691,20.682z M19.697,18.199l-0.721,1.358h2.025l0.727-1.358H19.697z',
        car: 'path://M49.592,40.883c-0.053,0.354-0.139,0.697-0.268,0.963c-0.232,0.475-0.455,0.519-1.334,0.475 c-1.135-0.053-2.764,0-4.484,0.068c0,0.476,0.018,0.697,0.018,0.697c0.111,1.299,0.697,1.342,0.931,1.342h3.7 c0.326,0,0.628,0,0.861-0.154c0.301-0.196,0.43-0.772,0.543-1.78c0.017-0.146,0.025-0.336,0.033-0.56v-0.01 c0-0.068,0.008-0.154,0.008-0.25V41.58l0,0C49.6,41.348,49.6,41.09,49.592,40.883L49.592,40.883z M6.057,40.883 c0.053,0.354,0.137,0.697,0.268,0.963c0.23,0.475,0.455,0.519,1.334,0.475c1.137-0.053,2.762,0,4.484,0.068 c0,0.476-0.018,0.697-0.018,0.697c-0.111,1.299-0.697,1.342-0.93,1.342h-3.7c-0.328,0-0.602,0-0.861-0.154 c-0.309-0.18-0.43-0.772-0.541-1.78c-0.018-0.146-0.027-0.336-0.035-0.56v-0.01c0-0.068-0.008-0.154-0.008-0.25V41.58l0,0 C6.057,41.348,6.057,41.09,6.057,40.883L6.057,40.883z M49.867,32.766c0-2.642-0.344-5.224-0.482-5.507 c-0.104-0.207-0.766-0.749-2.271-1.773c-1.522-1.042-1.487-0.887-1.766-1.566c0.25-0.078,0.492-0.224,0.639-0.241 c0.326-0.034,0.345,0.274,1.023,0.274c0.68,0,2.152-0.18,2.453-0.48c0.301-0.303,0.396-0.405,0.396-0.672 c0-0.268-0.156-0.818-0.447-1.146c-0.293-0.327-1.541-0.49-2.273-0.585c-0.729-0.095-0.834,0-1.022,0.121 c-0.304,0.189-0.32,1.919-0.32,1.919l-0.713,0.018c-0.465-1.146-1.11-3.452-2.117-5.269c-1.103-1.979-2.256-2.599-2.737-2.754 c-0.474-0.146-0.904-0.249-4.131-0.576c-3.298-0.344-5.922-0.388-8.262-0.388c-2.342,0-4.967,0.052-8.264,0.388 c-3.229,0.336-3.66,0.43-4.133,0.576s-1.633,0.775-2.736,2.754c-1.006,1.816-1.652,4.123-2.117,5.269L9.87,23.109 c0,0-0.008-1.729-0.318-1.919c-0.189-0.121-0.293-0.225-1.023-0.121c-0.732,0.104-1.98,0.258-2.273,0.585 c-0.293,0.327-0.447,0.878-0.447,1.146c0,0.267,0.094,0.379,0.396,0.672c0.301,0.301,1.773,0.48,2.453,0.48 c0.68,0,0.697-0.309,1.023-0.274c0.146,0.018,0.396,0.163,0.637,0.241c-0.283,0.68-0.24,0.524-1.764,1.566 c-1.506,1.033-2.178,1.566-2.271,1.773c-0.139,0.283-0.482,2.865-0.482,5.508s0.189,5.02,0.189,5.86c0,0.354,0,0.976,0.076,1.565 c0.053,0.354,0.129,0.697,0.268,0.966c0.232,0.473,0.447,0.516,1.334,0.473c1.137-0.051,2.779,0,4.477,0.07 c1.135,0.043,2.297,0.086,3.33,0.11c2.582,0.051,1.826-0.379,2.928-0.36c1.102,0.016,5.447,0.196,9.424,0.196 c3.976,0,8.332-0.182,9.423-0.196c1.102-0.019,0.346,0.411,2.926,0.36c1.033-0.018,2.195-0.067,3.332-0.11 c1.695-0.062,3.348-0.121,4.477-0.07c0.886,0.043,1.103,0,1.332-0.473c0.132-0.269,0.218-0.611,0.269-0.966 c0.086-0.592,0.078-1.213,0.078-1.565C49.678,37.793,49.867,35.408,49.867,32.766L49.867,32.766z M13.219,19.735 c0.412-0.964,1.652-2.9,2.256-3.244c0.145-0.087,1.426-0.491,4.637-0.706c2.953-0.198,6.217-0.276,7.73-0.276 c1.513,0,4.777,0.078,7.729,0.276c3.201,0.215,4.502,0.611,4.639,0.706c0.775,0.533,1.842,2.28,2.256,3.244 c0.412,0.965,0.965,2.858,0.861,3.116c-0.104,0.258,0.104,0.388-1.291,0.275c-1.387-0.103-10.088-0.216-14.185-0.216 c-4.088,0-12.789,0.113-14.184,0.216c-1.395,0.104-1.188-0.018-1.291-0.275C12.254,22.593,12.805,20.708,13.219,19.735 L13.219,19.735z M16.385,30.511c-0.619,0.155-0.988,0.491-1.764,0.482c-0.775,0-2.867-0.353-3.314-0.371 c-0.447-0.017-0.842,0.302-1.076,0.362c-0.23,0.06-0.688-0.104-1.377-0.318c-0.688-0.216-1.092-0.155-1.316-1.094 c-0.232-0.93,0-2.264,0-2.264c1.488-0.068,2.928,0.069,5.621,0.826c2.693,0.758,4.191,2.213,4.191,2.213 S17.004,30.357,16.385,30.511L16.385,30.511z M36.629,37.293c-1.23,0.164-6.386,0.207-8.794,0.207c-2.412,0-7.566-0.051-8.799-0.207 c-1.256-0.164-2.891-1.67-1.764-2.865c1.523-1.627,1.24-1.576,4.701-2.023C24.967,32.018,27.239,32,27.834,32 c0.584,0,2.865,0.025,5.859,0.404c3.461,0.447,3.178,0.396,4.699,2.022C39.521,35.623,37.887,37.129,36.629,37.293L36.629,37.293z  M48.129,29.582c-0.232,0.93-0.629,0.878-1.318,1.093c-0.688,0.216-1.145,0.371-1.377,0.319c-0.231-0.053-0.627-0.371-1.074-0.361 c-0.448,0.018-2.539,0.37-3.313,0.37c-0.772,0-1.146-0.328-1.764-0.481c-0.621-0.154-0.966-0.154-0.966-0.154 s1.49-1.464,4.191-2.213c2.693-0.758,4.131-0.895,5.621-0.826C48.129,27.309,48.361,28.643,48.129,29.582L48.129,29.582z'
    };

    var labelSetting = {
        normal: {
            show: true,
            position: 'right',
            offset: [10, 0],
            textStyle: {
                fontSize: 16
            }
        }
    };


    option = {
        title: {
            text: 'Vehicles in X City'
        },
        legend: {
            data: ['2015', '2016']
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            containLabel: true,
            left: 20
        },
        yAxis: {
            data: ['reindeer', 'ship', 'plane', 'train', 'car'],
            inverse: true,
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {
                margin: 30,
                fontSize: 14
            },
            axisPointer: {
                label: {
                    show: true,
                    margin: 30
                }
            }
        },
        xAxis: {
            splitLine: {show: false},
            axisLabel: {show: false},
            axisTick: {show: false},
            axisLine: {show: false}
        },
        series: [{
            name: '2015',
            type: 'pictorialBar',
            label: labelSetting,
            symbolRepeat: true,
            symbolSize: ['80%', '60%'],
            barCategoryGap: '40%',
            data: [{
                value: 157,
                symbol: pathSymbols.reindeer
            }, {
                value: 21,
                symbol: pathSymbols.ship
            }, {
                value: 66,
                symbol: pathSymbols.plane
            }, {
                value: 78,
                symbol: pathSymbols.train
            }, {
                value: 123,
                symbol: pathSymbols.car
            }]
        }, {
            name: '2016',
            type: 'pictorialBar',
            barGap: '10%',
            label: labelSetting,
            symbolRepeat: true,
            symbolSize: ['80%', '60%'],
            data: [{
                value: 184,
                symbol: pathSymbols.reindeer
            }, {
                value: 29,
                symbol: pathSymbols.ship
            }, {
                value: 73,
                symbol: pathSymbols.plane
            }, {
                value: 91,
                symbol: pathSymbols.train
            }, {
                value: 95,
                symbol: pathSymbols.car
            }]
        }]
    };
    var instance = echarts.init(document.getElementById(id));
    instance.clear();
    instance.setOption(option);
}



// ==========================Custom          自定义系列