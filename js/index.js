
// container元素
var container = document.getElementById("container");

var btcPicCountEle = document.getElementById("btcPicCount");
btcPicCountEle.innerHTML = BTCPicturesCount;

if(window.innerWidth > 760) {
	container.style.maxWidth="660px";
}

if(window.innerWidth > 1300) {
	Chatra("expandWidget");
}
	
// 创建一个数组，存储1到xxx的整数
const sumCount = BTCPicturesCount;
var numbers = [];
for (var i = sumCount; i >= 1; i--) {
  numbers.push(xxxxxpadNumber(i));
}

for (var i = 0; i < sumCount; i++) {
	// 创建一个新的div元素
	var div = document.createElement("div");
	div.className = "btcthumbnail";
	if(window.innerWidth > 760) {
		div.style.width = "20%";
	}
	
	// 创建一个新的a元素
	var a = document.createElement("a");
	a.setAttribute("data-fancybox", "gallery");
	a.setAttribute("href", "upload/" + numbers[i] + ".jpg");
	a.setAttribute("data-download-src", "upload/" + numbers[i] + ".jpg");
	a.setAttribute("data-caption", "比特币精美壁纸：No." + numbers[i]);
	div.appendChild(a);
	
	// 创建一个新的img元素
	var img =  document.createElement("img");
	img.setAttribute("data-src", "thumbnail/" + numbers[i] + ".jpg");
	img.setAttribute("data-placeholder-background", "#eee");
	img.setAttribute("alt", "No." + numbers[i]);
	a.appendChild(img);

	container.appendChild(div);
}

function xxxxxpadNumber(number) {
  return number.toString().padStart(3, '0');
}

const el = document.querySelectorAll('img');
const observer = lozad(el);
observer.observe();

const myl10n = {PANUP:"上移",PANDOWN:"下移",PANLEFT:"左移",PANRIGHT:"右移",ZOOMIN:"放大",ZOOMOUT:"缩小",TOGGLEZOOM:"切换缩放级别",TOGGLE1TO1:"切换缩放级别",ITERATEZOOM:"切换缩放级别",ROTATECCW:"逆时针旋转",ROTATECW:"顺时针旋转",FLIPX:"水平翻转",FLIPY:"垂直翻转",FITX:"水平适应",FITY:"垂直适应",RESET:"重置",TOGGLEFS:"切换全屏",CLOSE:"关闭",NEXT:"下一个",PREV:"上一个",MODAL:"使用 ESC 键关闭",ERROR:"发生了错误，请稍后再试",IMAGE_ERROR:"找不到图像",ELEMENT_NOT_FOUND:"找不到 HTML 元素",AJAX_NOT_FOUND:"载入 AJAX 时出错: 未找到",AJAX_FORBIDDEN:"载入 AJAX 时出错: 被阻止",IFRAME_ERROR:"加载页面出错",TOGGLE_ZOOM:"切换缩放级别",TOGGLE_THUMBS:"切换缩略图",TOGGLE_SLIDESHOW:"开始/暂停幻灯片播放",TOGGLE_FULLSCREEN:"切换全屏",DOWNLOAD:"下载"};

if(window.innerWidth > 760) {
	Fancybox.bind("[data-fancybox]", {
		l10n: myl10n,
		Toolbar : {
			display: {
			  left: ["infobar"],
			  middle: [
				"zoomIn",
				"zoomOut",
				"toggle1to1",
				"rotateCCW",
				"rotateCW",
				"flipX",
				"flipY",
			  ],
			  right: ["slideshow",  "download", "thumbs", "close"],
			},
		}
	});
} else {
	Fancybox.bind("[data-fancybox]", {
		l10n: myl10n
	});
}
