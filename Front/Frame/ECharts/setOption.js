setOption({


    // ==================坐标系类==================
    // 直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴.
    grid: {},
    // 直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠。
    xAxis: {},
    // 直角坐标系 grid 中的 y 轴，一般情况下单个 grid 组件最多只能放左右两个 y 轴，多于两个 y 轴需要通过配置 offset 属性防止同个位置多个 Y 轴的重叠。
    yAxis: {},

    // 极坐标系，可以用于散点图和折线图。每个极坐标系拥有一个角度轴和一个半径轴。
    polar: {},
    // 极坐标系的径向轴。
    radiusAxis: {},
    // 极坐标系的角度轴。
    angleAxis: {},
    
    // 平行坐标系（Parallel Coordinates） 是一种常用的可视化高维数据的图表。
    parallel: {},
    // 平行坐标系中的坐标轴。
    parallelAxis: {},

    
    // 雷达图坐标系组件，只适用于雷达图。雷达图坐标系与极坐标系不同的是它的每一个轴（indicator 指示器）都是一个单独的维度
    radar: {},
    // 地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
    geo: {},
    // 日历坐标系组件。
    calendar: {},
    

    // ==================组件类==================
    // 标题组件，包含主标题和副标题。
    title: {},
    // 图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
    legend: {},
    // dataZoom 组件 用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响。
    dataZoom: [],
    // visualMap 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
    visualMap: [],
    // 提示框组件。
    tooltip: {
        show: true, // 是否显示提示框组件，包括提示框浮层和 axisPointer。
        trigger: 'item', // 触发类型。item/axis/none
        axisPointer: { // 坐标轴指示器配置项。

        },
        showContent: true, // 是否显示提示框浮层
        alwaysShowContent: false, // 是否永远显示提示框内容，
        triggerOn: 'mousemove|click', // 提示框触发的条件 mousemove、click、mousemove|click、none
        showDelay: 0, // 浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。在 triggerOn 为 'mousemove' 时有效。
        hideDelay: 100, // 浮层隐藏的延迟，单位为 ms，在 alwaysShowContent 为 true 的时候无效。
        enterable: false, // 鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true。
        renderMode: 'html', // 浮层的渲染模式 html、richText
        confine: false, // 是否将 tooltip 框限制在图表的区域内。
        transitionDuration: 0.4,
        position: '...',
        formatter: '...',
        backgroundColor: 'rgba(50,50,50,0.7)',
        borderColor: '#333',
        borderWidth: 0,
        padding: 5,
        textStyle: {},
        extraCssText: '...',
    },
    // 坐标轴指示器（axisPointer）的全局公用设置。坐标轴指示器是指示坐标轴当前刻度的工具。
    axisPointer: {},
    // 工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
    toolbox: {},
    // brush 是区域选择组件，用户可以选择图中一部分数据，从而便于向用户展示被选中数据，或者他们的一些统计计算结果。
    brush: {},
    // timeline 组件，提供了在多个 ECharts option 间进行切换、播放等操作的功能。
    timeline: {},
    // graphic 是原生图形元素组件。
    graphic: {},
    // 数据集（dataset）组件用于单独的数据集声明，从而数据可以单独管理，被多个组件复用，并且可以自由指定数据到视觉的映射。
    dataset: {},
    // 朗读模式
    aria: {},
    // 单轴。可以被应用到散点图中展现一维数据
    singleAxis: {},

    // ==================系列列表==================
    // 系列列表。每个系列通过 type 决定自己的图表类型
    series: [
        // 折线/面积图
        {
            type: 'line'
        },
        // 柱状/条形图
        {type: 'bar'},
        // 饼图
        {type: 'pie'},
        // 散点（气泡）图
        {type: 'scatter'},
        // 带有涟漪特效动画的散点（气泡）图
        {type: 'effectScatter'},
        // 雷达图
        {type: 'radar'},
        // 树图
        {type: 'tree'},
        // Treemap 是一种常见的表达『层级数据』『树状数据』的可视化形式。它主要用面积的方式，便于突出展现出『树』的各层级中重要的节点。
        {type: 'treemap'},
        // 旭日图（Sunburst）由多层的环形图组成，在数据结构上，内圈是外圈的父节点。
        {type: 'sunburst'},
        // Boxplot 中文可以称为『箱形图』、『盒须图』、『盒式图』、『盒状图』、『箱线图』，是一种用作显示一组数据分散情况资料的统计图。它能显示出一组数据的最大值、最小值、中位数、下四分位数及上四分位数。
        {type: 'boxplot'},
        // K线图
        {type: 'candlestick'},
        // 热力图主要通过颜色去表现数值的大小，必须要配合 visualMap 组件使用。
        {type: 'heatmap'},
        // 地图主要用于地理区域数据的可视化，配合 visualMap 组件用于展示不同区域的人口分布密度等数据。
        {type: 'map'},
        // 平行坐标系（Parallel Coordinates） 是一种常用的可视化高维数据的图表。
        {type: 'parallel'},
        // 线图 用于带有起点和终点信息的线数据的绘制，主要用于地图上的航线，路线的可视化。
        {type: 'lines'},
        // 关系图 用于展现节点以及节点之间的关系数据。
        {type: 'graph'},
        //  桑基图 是一种特殊的流图（可以看作是有向无环图）。 它主要用来表示原材料、能量等如何从最初形式经过中间过程的加工或转化达到最终状态。
        {type: 'sankey'},
        // 漏斗图
        {type: 'funnel'},
        // 仪表盘
        {type: 'gauge'},
        // 象形柱图 是可以设置各种具象图形元素（如图片、SVG PathData 等）的柱状图。
        {type: 'pictorialBar'},
        //  主题河流 是一种特殊的流图, 它主要用来表示事件或主题等在一段时间内的变化。
        {type: 'themeRiver'},
        // 自定义系列 自定义系列可以自定义系列中的图形元素渲染。从而能扩展出不同的图表。
        {type: 'custom'},
    ],
    

    // 调色盘颜色列表。
    color: {},
    // 背景色，默认无背景。
    backgroundColor: {},
    // 全局的字体样式。
    textStyle: {},
    // 是否开启动画。
    animation: {},
    // 是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。
    animationThreshold: {},
    // 初始动画的时长，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果：
    animationDuration: {},
    // 初始动画的缓动效果。
    animationEasing: {},
    // 初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果。
    animationDelay: {},
    // 数据更新动画的时长。支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果：
    animationDurationUpdate: {},
    // 数据更新动画的缓动效果。
    animationEasingUpdate: {},
    // 数据更新动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果。
    animationDelayUpdate: {},
    // 图形的混合模式，
    blendMode: {},
    // 图形数量阈值，决定是否开启单独的 hover 层，在整个图表的图形数量大于该阈值时开启单独的 hover 层。
    hoverLayerThreshold: {},
    // 是否使用 UTC 时间。
    useUTC: {},


    // GL类
    // 地球组件。组件提供了地球的绘制以及相应的坐标系
    globe: {},
    // 三维的地理坐标系组件。组件提供了三维 GeoJSON 的绘制以及相应的坐标系，
    geo3D: {},
    // 基于 mapbox-gl-js 的地理组件。支持在 mapbox 的地图上绘制三维的散点图，飞线图，柱状图和地图。
    mapbox3D: {},
    // 三维笛卡尔坐标系组件。需要和 xAxis3D，yAxis3D，zAxis3D 三个坐标轴组件一起使用。
    grid3D: {},
    // 三维笛卡尔坐标系中的 x 轴。可以通过 grid3DIndex 索引所在的三维笛卡尔坐标系。
    xAxis3D: {},
    // 三维笛卡尔坐标系中的 y 轴。可以通过 grid3DIndex 索引所在的三维笛卡尔坐标系。
    yAxis3D: {},
    // 三维笛卡尔坐标系中的 z 轴。可以通过 grid3DIndex 索引所在的三维笛卡尔坐标系。
    zAxis3D: {},
    // 系列列表。每个系列通过 type 决定自己的图表类型。
    series: []

})