const echarts = {
    init, // 
    connect, // 
    disconnect, // 
    dispose, // 
    dispose, // 
    getInstanceByDom, // 
    registerMap, // 
    getMap, // 
    registerTheme, // 
    graphic: {
        extendShape, // 
        registerShape, // 
        getShapeClass, // 
        clipPointsByRect, // 
        clipRectByRect, // 
    }
}

const echartsInstance = {
    group, // 
    setOption, // 
    getWidth, // 
    getHeight, // 
    getDom, // 
    getOption, // 
    resize, // 
    dispatchAction, // 
    on, // 
    off, // 
    convertToPixel, // 
    convertFromPixel, // 
    containPixel, // 
    showLoading, // 
    hideLoading, // 
    getDataURL, // 
    getConnectedDataURL, // 
    appendData, // 
    clear, // 
    isDisposed, // 
    dispose
}

const action = {
    highlight, // 
    downplay, // 
    legend: {
        legendSelect, // 
        legendUnSelect, // 
        legendToggleSelect, // 
        legendScroll
    }, // 
    tooltip: {
        showTip, // 
        hideTip
    }, // 
    dataZoom: {
        dataZoom, // 
        takeGlobalCursor
    }, // 
    visualMap: {
        selectDataRange
    }, // 
    timeline: {
        timelineChange, // 
        timelinePlayChange, // 
    }, // 
    toolbox: {
        restore
    }, // 
    pie: {
        pieSelect, // 
        pieUnSelect, // 
        pieToggleSelect
    }, // 
    geo: {
        geoSelect, // 
        geoUnSelect, // 
        geoToggleSelect
    }, // 
    map: {
        mapSelect, // 
        mapUnSelect, // 
        mapToggleSelect
    }, // 
    graph: {
        focusNodeAdjacency, // 
        unfocusNodeAdjacency
    }, // 
    brush: {
        brush, // 
        takeGlobalCursor
    }
}


const events = {
    // 鼠标事件
    click, // 
    dblclick, // 
    mousedown, // 
    mousemove, // 
    mouseup, // 
    mouseover, // 
    mouseout, // 
    globalout, // 
    contextmenu, // 

    // 调用 dispatchAction 后触发的事件
    legendselectchanged, // 切换图例选中状态后的事件
    legendselected, // 图例选中后的事件
    legendunselected, // 图例取消选中后的事件
    legendscroll, // 图例滚动事件
    datazoom, // 数据区域缩放后的事件
    datarangeselected, // selectDataRange 视觉映射组件中，range 值改变后触发的事件
    timelinechanged, // 时间轴中的时间点改变后的事件
    timelineplaychanged, // 时间轴中播放状态的切换事件
    restore, // 重置 option 事件
    dataviewchanged, // 工具栏中数据视图的修改事件。
    magictypechanged, // 工具栏中动态类型切换的切换事件。
    geoselectchanged, // geo 中地图区域切换选中状态的事件。用户点击选中会触发该事件。
    geoselected, // geo 中地图区域选中后的事件。使用dispatchAction可触发此事件
    geounselected, // geo 中地图区域取消选中后的事件。使用dispatchAction可触发此事件
    pieselectchanged, // series-pie 中饼图扇形切换选中状态的事件。用户点击选中会触发该事件
    pieselected, // series-pie 中饼图扇形选中后的事件。使用dispatchAction可触发此事件
    pieunselected, // series-pie 中饼图扇形取消选中后的事件。使用dispatchAction可触发此事件
    mapselectchanged, // series-map 中地图区域切换选中状态的事件。用户点击选中会触发该事件。
    mapselected, // series-map 中地图区域选中后的事件。使用dispatchAction可触发此事件
    mapunselected, // series-map 中地图区域取消选中后的事件。使用dispatchAction可触发此事件
    axisareaselected, // 平行坐标轴 (Parallel)范围选取事件。当进行坐标轴范围选取时
    focusnodeadjacency, // graph的邻接节点高亮事件。
    unfocusnodeadjacency, // graph的邻接节点取消高亮事件。
    brush, // 选框添加事件。即发出 brush action 得到的事件。
    brushselected, // 对外通知当前选中了什么。
    globalCursorTaken, // 
    rendered, // 渲染结束事件(该事件并不代表渲染动画或者渐进渲染停止，只代表本帧的渲染结束)
    finished  // 渲染完成事件。当渲染动画或者渐进渲停止时触发。
}

