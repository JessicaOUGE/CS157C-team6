(function (window) {
    var bookTypeData = [
        {
            type: "Hot",
            include: []
        },
        {
            type: "Audio Book",
            include: [
               
            ]
        },
        {
            type: "Kids",
            include: [
                
            ]
        },
        {
            type: "Music",
            include: [
               
            ]
        },
        {
            type: "History",
            include: [
         
            ]
        },
        {
            type: "Life",
            include: [
               
            ]
        },
        {
            type: "Talk Show",
            include: [
               
            ]
        },
        {
            type: "Language",
            include: [
                
            ]
        },
        {
            type: "Training",
            include: [
               
            ]
        },
        {
            type: "Business",
            include: [
               
            ]
        },
        {
            type: "Health",
            include: [
  
            ]
        },
        {
            type: "News",
            include: [
              
            ]
        },
        {
            type: "Radio",
            include: [
                
            ]
        },
        {
            type: "Technology",
            include: [
               
            ]
        },
        {
            type: "Traval",
            include: [
              
            ]
        },
        {
            type: "Game",
            include: [
              
            ]
        },
        {
            type: "Movie",
            include: [
               
            ]
        },
        {
            type: "Fashion",
            include: [
             
            ]
        },
        {
            type: "Open University",
            include: [
                
            ]
        }
    ];
    //initial sidebar
    function getMenu () {
        var str1 = "";
        bookTypeData.forEach(function (item) {
            var str2 = "";
            var liClass = "",pClass="";
            if(item.type !== "Hot") {
                item.include.forEach(function (item1) {
                    str2 += '<a href="#" class="not-selected link"><span>'+item1+'</span></a>';
                })
            }
            str2 = '<div class="child-menu">' + str2 + '</div>';
            if(item.type === "Hot") {
                liClass = "hot";
                pClass = "active"
            } else if(item.type === "Audio Book") {
                liClass = "not-hot voice-book";
            } else if(item.type === "Kids") {
                liClass = "not-hot child";
            } else {
                liClass = "not-hot not-child not-voice-book"
            }
            str1 += '<li class="'+liClass+'"><p class="'+pClass+'">'+item.type+'</p>' + str2 + '</li>';
        });
        document.querySelector("#menu").innerHTML = str1;
    }
    //initial tied event
    function initEvents() {
        var array = [
            {//Click top-right hor button
                parentElement: "#easy-select",
                childName: "li",
                className: "active",
                eventName: "click"
            },
            {//点击左上方横向选择按钮 click top-left hor button
                parentElement: "#left-top-menu",
                childName: "li",
                className: "active",
                eventName: "click"
            },
            {//click meun
                parentElement: "#catalog",
                childName: "li",
                className: "active",
                eventName: "click"
            }
        ];
        function addEventListeners (arr) {
            arr.forEach(function(item) {
                document.querySelector(item.parentElement).addEventListener("click", function(ev) {
                    this.querySelectorAll(item.childName).forEach(function(item1) {
                        item1.classList.remove(item.className);
                    });
                    if(ev.target.localName === item.childName) {
                        ev.target.classList.add(item.className);
                    }
                })
            });
        }
        //click open，show result
//        function slideUpDown () {
//            var flags = 1;
//            document.querySelector("#slide-up-down").addEventListener("click", function (ev) {
//                if(flags === 1) {
//                    this.classList.remove("up-icon");
//                    this.classList.add("down-icon");
//                    flags = 0;
//                    document.querySelector("#entry").style.display = "block";
//                } else {
//                    this.classList.add("up-icon");
//                    this.classList.remove("down-icon");
//                    flags = 1;
//                    document.querySelector("#entry").style.display = "none";
//                }
//            })
//        }
        //left sidebar
        function controlLeftMenu () {
            //clear format
            function resetSmallTag () {
                document.querySelectorAll("#menu a").forEach(function (value) {
                    value.classList.remove("visited");
                    value.classList.add("not-selected")
                });
            }
        
            function addDir (aText, spanText) {
                document.querySelector("#dir a").textContent = aText;
                document.querySelector("#dir span").innerHTML = spanText;
            }
            //click left sidebar
            document.querySelector("#menu").addEventListener("click", function (ev) {
                this.querySelectorAll("p").forEach(function (value) {
                    value.classList.remove("active");
                });
                if(ev.target.localName === "p") {
                    ev.target.classList.add("active");
                    addDir(ev.target.innerText, "");
                    resetSmallTag();
                }
                if(ev.target.localName === "div") {
                    ev.target.parentNode.querySelector("p").classList.add("active");
                    addDir(ev.target.parentNode.querySelector("p").innerText, "");
                    resetSmallTag();
                }
                if(ev.target.localName === "span") {
                    var target = ev.target.parentNode.parentNode.parentNode;
                    target.querySelector("p").classList.add("active");
                    resetSmallTag();
                    ev.target.parentNode.classList.add("visited");
                    ev.target.parentNode.classList.remove("not-selected");
                    addDir(target.querySelector("p").innerText, ">>&nbsp;"+ev.target.innerText);
                }
            });
            document.querySelector("#dir a").addEventListener("click", function (ev) {
                document.querySelector("#dir span").innerHTML = "";
                resetSmallTag();
            })
        }

        addEventListeners(array);
        controlLeftMenu();
    }
    //initial right side 
    function getContent () {
        var str = "";
        bookList.forEach(function (item) {
            str += '<div class="book-item">' +
                        '<div class="album-item">' +
                            '<div class="album">' +
                                '<img src="'+item.coverImg+'" alt="" height="145" width="145" />' +
                                '<div class="play-count"></div>' +
                            '</div>' +
                            '<div class="album-decorate">' +
                                '<div class="border-one"></div>' +
                                '<div class="border-two"></div>' +
                                '<div class="border-three"></div>' +
                                '<div class="mask"></div>' +
                            '</div>' +
                        '</div>' +
                        '<a href="/bookpage/' + item.title + '" class="title">'+item.title+'</a>' +
                        '<div class="intro">' +
                            '<p class="play-btn"></p>' +
                            '<a href="/bookpage/' + item.title + '">'+item.author+'</a>' +
                        '</div>' +
                    '</div>'
        });
        document.querySelector("#main-content").innerHTML = str;
        //page number initial
        function showPage (totalPage) {
            var str = '<li class="pre">Pre</li>';
            for(var i = 0; i < totalPage; i++) {
                if (i+1 === 1) {
                    str += '<li class="page'+(i+1)+' page-num active">'+(i+1)+'</li>';
                } else if (i+1 < 8) {
                    str += '<li class="page'+(i+1)+' page-num">'+(i+1)+'</li>';
                } else if (i+1 === 8) {
                    str += '<li class="omit">......</li>';
                } else if(i+1 > 8 && i+1 < totalPage-1) {
                    str += "";
                } else {
                    str += '<li class="page'+(i+1)+' page-num">'+(i+1)+'</li>';
                }
            }
            str += '<li class="next">Next</li>';
            document.querySelector("#page ul").innerHTML = str;
        }
        showPage(100);
    }


    //page number controll
    function controlPage (currentPage) { }
    function init () {
        getMenu ();
        getContent ();
    }
    window.param = {
        init: init,
        initEvents: initEvents
    }
}(window));

window.onload = function () {
    param.init();
    param.initEvents();
};


