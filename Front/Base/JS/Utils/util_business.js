
function compareVector3(v1, v2) {
  return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z
}
function checkIsPhone() {
  var sUserAgent = navigator.userAgent.toLowerCase()
  var bIsIpad = sUserAgent.match(/ipad/i) === 'ipad'
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) === 'iphone os'
  var bIsMidp = sUserAgent.match(/midp/i) === 'midp'
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) === 'rv:1.2.3.4'
  var bIsUc = sUserAgent.match(/ucweb/i) === 'ucweb'
  var bIsAndroid = sUserAgent.match(/android/i) === 'android'
  var bIsCE = sUserAgent.match(/windows ce/i) === 'windows ce'
  var bIsWM = sUserAgent.match(/windows mobile/i) === 'windows mobile'

  return bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM
}

function isIPhoneX() {
  return navigator.userAgent.toLowerCase().match(/iphone/i) === 'iphone' &&
        screen.width === 375 && screen.height === 812 && window.devicePixelRatio === 3
}

function getUrlParameter(name) {
  if (name) {
    var pattern = '(^|&)' + name + '=([^&]*)(&|$)'
    var flags = 'i' // 大小写不记
    var reg = new RegExp(pattern, flags) //构造一个含有目标参数的正则表达式对象
    var result = window.location.search.substr(1).match(reg)  //匹配目标参数
    if (result) return decodeURIComponent(result[2])
    return null //返回参数值
  }
}

function setFullScreen(state) {
  if (state) {
    document.documentElement.requestFullscreen && document.documentElement.requestFullscreen()
    document.documentElement.msRequestFullscreen && document.documentElement.msRequestFullscreen()
    document.documentElement.mozRequestFullScreen && document.documentElement.mozRequestFullScreen()
    document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
  } else {
    document.exitFullscreen && document.exitFullscreen()
    document.msExitFullscreen && document.msExitFullscreen()
    document.mozCancelFullScreen && document.mozCancelFullScreen()
    document.webkitExitFullscreen && document.webkitExitFullscreen()
  }
}

function isLandscape() {
  var isLand

  if (window.orientation % 180 === 0) {
    isLand = false
  } else if (window.orientation === 90 || window.orientation === -90) {
    isLand = true
  }

  return isLand
}

function addStats(container) {
  var stats = new Stats()
  container.appendChild(stats.dom)

  function update () {
    stats.update()
    requestAnimationFrame(update)
  }

  update()
}

function setCursorOnHover(domElement, state) {
  var cur = domElement.style.cursor
  if (!/eraser/.test(cur)) domElement.style.cursor = state ? 'pointer' : 'default'
}

function rgbaColorToString(color) {
  return 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a + ')'
}

function rgbColorToString(color) {
  return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')'
}

function contains(array, item) {
  var contain = false

  for (var i in array) {
    if (array[i] === item) {
      contain = true
    }
  }

  return contain
}

function copyArray(array) {
  var newArray = []

  array.forEach(function (item) { newArray.push(item) })

  return newArray
}

function remove(array, val) {
  var index = array.indexOf(val)
  if (index > -1) {
    array.splice(index, 1)
  }
}

function saveAndDownload(content, filename) {
  var blob = new Blob([content], { type: 'text/plain' })

  window.URL = window.URL || window.webkitURL
  window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder

  var link = document.createElement('a')
  link.style.display = 'none'
  document.body.appendChild(link) // Firefox workaround, see #6594

  link.href = URL.createObjectURL(blob)
  link.download = filename || 'data.json'
  link.click()
}

function getFileName(url) {
  if (!url) return

  if (url.indexOf('.') === -1) {
    return
  }

  var splits = url.split('.')

  return splits[splits.length - 1]
}

function isWebGLSupport() {
  try {
    var canvas = document.createElement('canvas')
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
  } catch (e) {
    return false
  }
}

function UUID8Bit() {
  var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A',
    'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  var uuid = ''
  for (var i = 0; i < 8; ++i) {
    var index = Math.min(Math.floor(Math.random() * 62), 61)
    uuid += chars[index]
  }
  return uuid
}

function formatDateYMDHMS(date) {// 时间格式化函数:年-月-日 时-分-秒
  if (date && typeof date === 'object' && typeof date.getFullYear === 'function') {
    var s = date.getFullYear() + '-'
    s += ('0' + (date.getMonth() + 1)).slice(-2) + '-'
    s += ('0' + date.getDate()).slice(-2)
    s += ' ' + ('0' + date.getHours()).slice(-2) + ':'
    s += ('0' + date.getMinutes()).slice(-2) + ':'
    s += ('0' + date.getSeconds()).slice(-2)
    return s
  } else {
    return ''
  }
}

function endWithString(endStr) {
  var d = this.length - endStr.length
  return (d >= 0 && this.lastIndexOf(endStr) === d)
}

function formatString() {
  if (arguments.length === 0) return this
  var param = arguments[0]
  var s = this
  if (typeof (param) === 'object') {
    for (var key in param) { s = s.replace(new RegExp('\\{' + key + '\\}', 'g'), param[key]) }
    return s
  } else {
    for (var i = 0; i < arguments.length; i++) { s = s.replace(new RegExp('\\{' + i + '\\}', 'g'), arguments[i]) }
    return s
  }
}
function patternDate(fmt) {
  var o = {
    'M+': this.getMonth() + 1, //月份
    'd+': this.getDate(), //日
    'h+': this.getHours() % 12 === 0 ? 12 : this.getHours() % 12, //小时
    'H+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    'S': this.getMilliseconds() //毫秒
  }
  var week = {
    '0': '/u65e5',
    '1': '/u4e00',
    '2': '/u4e8c',
    '3': '/u4e09',
    '4': '/u56db',
    '5': '/u4e94',
    '6': '/u516d'
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') + week[this.getDay() + ''])
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
function throttle(method, delay) {
  var timer = null
  return function () {
    var context = this; var args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      method.apply(context, args)
    }, delay)
  }
}
function debounce(method, delay) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      method.apply(context, args)
    }, delay)
  }
}

function debounce1 (fn, delay) {// 防抖
    let timer = null;
    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    };
}

function throttle1 (fn, delay) {// 节流
    let flag = true;
    return function () {
        if (!flag) return;
        flag = false;

        setTimeout(() => {
            fn.apply(this, arguments);
            flag = true;
        }, delay);
    };
}
function toVector3(position) {
  return new THREE.Vector3(position.x, position.y, -position.z)
}

function dialog(alertMsg, confirmCb, cancleCb, confirmMsg, cancleMsg) {
  if (!alertMsg) return
  confirmMsg = confirmMsg || '确认'
  cancleMsg = cancleMsg || '取消'

  DomElements.cover.style.display = 'block'
  DomElements.commonDialog.style.display = 'block'

  DomElements.dialogText.innerHTML = alertMsg
  DomElements.dialogConfirm.innerHTML = confirmMsg
  DomElements.dialogCancel.innerHTML = cancleMsg

  DomElements.dialogConfirm.onclick = function () {
    if (confirmCb) confirmCb()
    DomElements.cover.style.display = 'none'
    DomElements.commonDialog.style.display = 'none'
  }
  DomElements.dialogCancel.onclick = function () {
    if (cancleCb) cancleCb()
    DomElements.cover.style.display = 'none'
    DomElements.commonDialog.style.display = 'none'
  }
}

function alert(text, title, buttons) {
  $.alert({
    title: title || '',
    content: text,
    animation: 'scale',
    closeAnimation: 'scale',
    buttons: buttons || {
      okay: {
        text: '好/ok'
      }
    }
  })
}

function confirm(text, title, confirmCb, cancelCb) {
  $.confirm({
    title: title || '',
    content: text,
    animation: 'scale',
    closeAnimation: 'scale',
    opacity: 0.5,
    backgroundDismiss: true,
    closeIcon: true,
    buttons: {
      confirm: {
        text: '确认',
        action: function () {
          confirmCb && confirmCb()
        }
      }, cancel: {
        text: '取消',
        action: function () {
          cancelCb && cancelCb()
        }
      }
    }

  })
}

function toast (msg, duration) {
  duration = isNaN(duration) ? 1000 : duration
  var m = document.createElement('div')
  var a = document.createElement('span')
  a.innerHTML = msg
  a.style.cssText = 'padding: 10px 25pxcolor: rgb(255, 255, 255)line-height: 25pxtext-align:centerborder-radius: 5pxfont-size: 14px'
  m.style.cssText = 'width: 90%min-width: 150pxtext-align: centerposition: fixedbottom: 20%background: rgb(122, 122, 122)z-index: 999999margin-left:5%border-radius: 5px'
  m.appendChild(a)
  document.body.appendChild(m)
  setTimeout(function () {
    var d = 0.5
    m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in'
    m.style.opacity = '0'
    setTimeout(function () {
      document.body.removeChild(m)
    }, d * 1000)
  }, duration)
}

function getRealIndex(len, index, offset) {
  var theIndex = index + offset
  if (theIndex >= len) {
    theIndex = theIndex % len
  } else if (len > 0) {
    while (theIndex < 0) {
      theIndex = theIndex + len
    }
  }
  return theIndex
}

function addEvent(dom, type, fn, params) {
  if (params && params.isSwitch) {
    var bindingData = {}
    Object.defineProperty(bindingData, 'isSwitchOn', {
      configurable: false,
      enumerable: false,
      get: function () {
        return dom.title === titleOff
      },
      set: function (val) {
        if (val) {
          dom.title = titleOff
          if (imageDom) imageDom.src = imageOn
          if (clsOn) {
            dom.classList.remove(clsOn)
          }
          if (clsOff) {
            dom.classList.add(clsOff)
          }
        } else {
          dom.title = titleOn
          if (imageDom) imageDom.src = imageOff
          if (clsOff) {
            dom.classList.remove(clsOff)
          }
          if (clsOn) {
            dom.classList.add(clsOn)
          }
        }
        params.onSwitch && params.onSwitch(val)
      }
    })
    var titleOn = params.titleOn
    var titleOff = params.titleOff
    var clsOn = params.clsOn
    var clsOff = params.clsOff
    var imageOn = params.imageOn
    var imageOff = params.imageOff
    var imageDom = params.imageDom
    var flag = dom.title === titleOff
    bindingData.isSwitchOn = flag
    $(dom).data('bindingData', bindingData)
  }
  var aspect = function (e) {
    var data = {}
    var bindingData = $(dom).data('bindingData')
    if (bindingData) {
      data.flag = !bindingData.isSwitchOn
      $(dom).data('bindingData').isSwitchOn = data.flag
    }
    fn && fn(e, data)
  }
  if (dom.addEventListener) {
    dom.addEventListener(type, aspect, false)
  } else if (dom.attachEvent) {
    dom.attachEvent('on' + type, aspect)
  } else {
    dom['on' + type] = aspect
  }
}

function bindDragController(object3D, options, _this) {
  var _util = this
  _disposeDragController(_this)
  _this.dragTarget.active3D = object3D
  var domElement = _this.getRenderer().domElement
  var camera = _this.camera
  var dragStartPosition, dragDeltaPosition
  _this.dragTarget.draging = false
  // 默认鼠标左键拖动
  _this.dragTarget.mouseButton = options.mouseButton || _MouseButton.Left
  _this.dragTarget.excludeViewPort = options.excludeViewPort

  var getIntersectPositionOnGround = function (mousePosition) {
    var position = undefined
    var ground = _this.ground

    var raycaster = new THREE.Raycaster()
    if (camera) {
      raycaster.setFromCamera(mousePosition, camera)
      var intersects = raycaster.intersectObject(ground)

      if (intersects.length > 0) {
        position = intersects[0].point.clone()
      }
    }

    return position
  }
  var getOrigPos = function (e) {
    var x = 0; var y = 0
    if (e.type === 'touchstart' || e.type === 'touchmove') {
      x = e.touches[0].pageX
      y = e.touches[0].pageY
    } else if (e.type === 'touchend') {
      x = e.changedTouches[0].pageX
      y = e.changedTouches[0].pageY
    } else {
      x = e.clientX
      y = e.clientY
    }
    return { x: x, y: y }
  }
  var getMousePosition = function (e) {
    var { x, y } = getOrigPos(e)

    x = x / domElement.clientWidth
    y = y / domElement.clientHeight

    if (_this.camera && _this.camera.viewPort) {
      var left = _this.camera.viewPort.left / Sim.screenWidth
      var top = _this.camera.viewPort.top / Sim.screenHeight
      var width = _this.camera.viewPort.width / Sim.screenWidth
      var height = _this.camera.viewPort.height / Sim.screenHeight

      x = (x - left) / width
      y = (y - top) / height
    }

    var position = new THREE.Vector2()
    position.x = x * 2 - 1
    position.y = -y * 2 + 1
    return position
  }
  var inViewPort = function (e) {
    var { x, y } = getOrigPos(e)
    if (_this.camera.viewPort) {
      var { left, top, width, height } = _this.camera.viewPort
      var inMainViewPort = (x >= left && x <= left + width && y >= top && y <= top + height)
      if (_this.dragTarget.excludeViewPort) {
        var { left, top, width, height } = _this.dragTarget.excludeViewPort
        var inExcludeViewPort = (x >= left && x <= left + width && y >= top && y <= top + height)
        return !inExcludeViewPort && inMainViewPort
      } else {
        return inMainViewPort
      }
    } else {
      return true
    }
  }
  var checkMouseButton = function (e) {
    console.log('type: ' + e.type + ' button: ' + e.button)
    var mouseType = e.type
    if (mouseType === 'touchstart' || mouseType === 'mousedown' && _this.dragTarget.mouseButton === e.button) {
      _this.dragTarget.isPointDown = true
    } else if (mouseType === 'mousedown') {
      _this.dragTarget.isPointDown = false
    }
    return _this.dragTarget.isPointDown
  }
  _this.dragTarget.onDragStart = function (e) {
    if (_this.dragTarget.draging || !inViewPort(e) || !checkMouseButton(e)) return
    var mousePosition = getMousePosition(e)
    dragStartPosition = getIntersectPositionOnGround(mousePosition)
    if (!dragStartPosition) return
    _this.dragTarget.draging = true
    _this.getCurrentControls().enabled = false
    options && options.onDragStart && options.onDragStart(object3D, dragStartPosition)
  }
  _this.dragTarget.onDraging = function (e) {
    if (!_this.dragTarget.draging || app.roomConnector2D.isIn2DViewPort || !inViewPort(e) || !checkMouseButton(e)) return
    var mousePosition = getMousePosition(e)
    var dragPosition = getIntersectPositionOnGround(mousePosition)
    dragDeltaPosition = dragPosition.clone().sub(dragStartPosition)
    dragStartPosition = dragPosition
    _this.getCurrentControls().enabled = false
    options && options.onDraging && options.onDraging(object3D, dragDeltaPosition)
  }
  _this.dragTarget.onDragEnd = function (e) {
    //if (!inViewPort(e)) return
    if (!checkMouseButton(e)) return
    _this.dragTarget.draging = false
    _this.getCurrentControls().enabled = false
    options && options.onDragEnd && options.onDragEnd(object3D)
  }

  _this.getCurrentControls().enabled = false

  if (checkIsPhone()) {
    domElement.addEventListener('touchstart', _this.dragTarget.onDragStart, false)
    domElement.addEventListener('touchmove', _this.dragTarget.onDraging, false)
    domElement.addEventListener('touchend', _this.dragTarget.onDragEnd, false)
  } else {
    document.addEventListener('mousedown', _this.dragTarget.onDragStart, false)
    document.addEventListener('mousemove', _this.dragTarget.onDraging, false)
    document.addEventListener('mouseup', _this.dragTarget.onDragEnd, false)
  }
}

function disposeDragController(_this) {
  // if (!app.isPanoramaView) {
  _this.getCurrentControls().enabled = true
  // }
  if (_this.dragTarget && Object.keys(_this.dragTarget).length > 0) {
    var domElement = _this.getRenderer().domElement
    if (checkIsPhone()) {
      domElement.removeEventListener('touchstart', _this.dragTarget.onDragStart, false)
      domElement.removeEventListener('touchmove', _this.dragTarget.onDraging, false)
      domElement.removeEventListener('touchend', _this.dragTarget.onDragEnd, false)
    } else {
      document.removeEventListener('mousedown', _this.dragTarget.onDragStart, false)
      document.removeEventListener('mousemove', _this.dragTarget.onDraging, false)
      document.removeEventListener('mouseup', _this.dragTarget.onDragEnd, false)
    }
  }
  _this.dragTarget = {}
}

function isEdge() {
  var isEdge = navigator.userAgent.indexOf('Edge')

  return isEdge > -1
}

function tounicode (s) { // 中文转Unidecode
  return s.replace(/([\u4E00-\u9FA5]|[\uFE30-\uFFA0])/g, function (newStr) {
      return "\\u" + newStr.charCodeAt(0).toString(16);
  });
}


//上传base64文件至OSS需转码   atob：解码base64
function base64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
                .replace(/\-/g, '+')
                .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
}

function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;


  var byteCharacters = atob(b64Data);
  var byteArrays = [];


  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);


      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
      }


      var byteArray = new Uint8Array(byteNumbers);


      byteArrays.push(byteArray);
  }


  var blob = new Blob(byteArrays, { type: contentType });
  
  return blob;
}


function getRndInteger(min, max) { // 获取随机整数
    return Math.floor(Math.random() * (max - min) ) + min;
}

function closeWindows() {
    var browserName = navigator.appName
    var browserVer = parseInt(navigator.appVersion)
    //alert(browserName + " : "+browserVer)
    //document.getElementById("flashContent").innerHTML = "<br>&nbsp;<font face='Arial' color='blue' size='2'><b> You have been logged out of the Game. Please Close Your Browser Window.</b></font>"
    if(browserName == "Microsoft Internet Explorer"){
        var ie7 = (document.all && !window.opera && window.XMLHttpRequest) ? true : false;
        if (ie7) { //This method is required to close a window without any prompt for IE7 & greater versions.
            window.open('','_parent','');
            window.close();
        } else { //This method is required to close a window without any prompt for IE6
            this.focus();
            self.opener = this;
            self.close();
        }
    } else { //For NON-IE Browsers except Firefox which doesnt support Auto Close
        try{
            this.focus();
            self.opener = this;
            self.close();
        }
        catch(e){
        }
        try{
            window.open('','_self','');
            window.close();
        }
        catch(e){
        }
    }
}

//#RegExp
const REtelnum = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/        // 校验电话号码
const REhttp = '/^http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?/'                          //校验http(s)链接

module.exports = {
    compareVector3,
    checkIsPhone,
    isIPhoneX,
    getUrlParameter,
    setFullScreen,
    isLandscape,
    addStats,
    setCursorOnHover,
    rgbaColorToString,
    rgbColorToString,
    contains,
    copyArray,
    remove,
    saveAndDownload,
    getFileName,
    isWebGLSupport,
    UUID8Bit,
    formatDateYMDHMS,
    endWithString,
    formatString,
    patternDate,
    throttle,
    debounce,
    throttle1,
    debounce1,
    toVector3,
    dialog,
    alert,
    confirm,
    toast,
    getRealIndex,
    addEvent,
    bindDragController,
    disposeDragController,
    isEdge,
    tounicode,
    base64ToUint8Array,
    b64toBlob,
    getRndInteger,
    REtelnum,
    REhttp
}