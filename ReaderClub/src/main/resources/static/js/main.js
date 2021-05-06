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
    var bookData = [
        {
            name: "50 Classic Children Short Stories",
            playCount: 663814,
            intro: "The best bedtime story",
            imgUrl: "https://m.media-amazon.com/images/I/51fcENE5o0L._SL500_.jpg",
            type: [
                {
                    main: "",
                    junior: []
                },
                {
                    main: "",
                    junior: [""]
                }
            ]

        },
        {
            name: "The Craft",
            playCount: 720089,
            intro: "How the Freemasons Made the Modern World",
            imgUrl: "https://m.media-amazon.com/images/I/51xhe3Y-9HL._SL500_.jpg",
            type: [
                {
                    main: "",
                    junior: [""]
                },
                {
                    main: "诗歌",
                    junior: [""]
                }
            ]

        },
        {
            name: "The Struggle is Real",
            playCount: 260616,
            intro: "Getting Better at Life, Stronger in Faith",
            imgUrl: "https://m.media-amazon.com/images/I/41yU74dVDHL._SL500_.jpg",
            type: [
                {
                    main: "",
                    junior: [""]
                },
                {
                    main: "",
                    junior: [""]
                }
            ]

        },
        {
            name: "Psychopath Free: Expanded Edition",
            playCount: 260616,
            intro: "Recovering from Emotionally Abusive",
            imgUrl: "https://m.media-amazon.com/images/I/41Cs5gI6WZL._SL500_.jpg",
            type: [
                {
                    main: "",
                    junior: [""]
                },
                {
                    main: "",
                    junior: ["诗歌词赋","现代诗"]
                }
            ]

        },
        {
            name: "Live Free or Die",
            playCount: 1841879,
            intro: "America (and the World) on the Brink",
            imgUrl: "https://m.media-amazon.com/images/I/51tz0xaXfYL._SL500_.jpg",
            type: [
                {
                    main: "",
                    junior: [""]
                },
                {
                    main: "",
                    junior: [""]
                }
            ]

        },
        {
            name: "52 Ways to Live a Kick-Ass Life",
            playCount: 2959157,
            intro: "BS-Free Wisdom to Ignite Your Inner Badass",
            imgUrl: "https://m.media-amazon.com/images/I/51ZGmjjHpXL._SL500_.jpg",
            type: [
                {
                    main: "",
                    junior: [""]
                },
                {
                    main: "",
                    junior: [""]
                }
            ]

        },
        {
            name: "Cluttered Mess to Organized Success",
            playCount: 389326001,
            intro: "Decluttering Your Home and Life ",
            imgUrl: "https://m.media-amazon.com/images/I/51zxw8aY68L._SL500_.jpg",
            type: [
                {
                    main: "",
                    junior: [""]
                },
                {
                    main: "",
                    junior: [""]
                }
            ]

        },
        {
            name: "The Best Intelligent Investor",
            playCount: 1635884,
            intro: "Beginner’s Guide for a Foundation in Personal Finance",
            imgUrl: "https://m.media-amazon.com/images/I/51+fKN8x01L._SL500_.jpg",
            type: [
                {
                    main: "",
                    junior: [""]
                },
                {
                    main: "",
                    junior: [""]
                }
            ]

        },
        {
            name: "The Free Lunch",
            playCount: 1491418,
            intro: "By: Spider Robinson",
            imgUrl: "https://m.media-amazon.com/images/I/51JjhKzNn3L._SL500_.jpg",
            type: [
                {
                    main: "",
                    junior: [""]
                },
                {
                    main: "",
                    junior: [""]
                }
            ]

        },
        {
            name: "Freefall to Fly",
            playCount: 46172983,
            intro: "A Breathtaking Journey Toward a Life of Meaning",
            imgUrl: "https://m.media-amazon.com/images/I/61hXuqdQYnL._SL500_.jpg",
            type: [
                {
                    main: "",
                    junior: [""]
                },
                {
                    main: "",
                    junior: [""]
                }
            ]

        },
        {
            name: "The Worry-Free Mind",
            playCount: 43346974,
            intro: "Train Your Brain, Calm the Stress Spin Cycle",
            imgUrl: "https://m.media-amazon.com/images/I/51x4H1IhUVL._SL500_.jpg",
            type: [
                {
                    main: "",
                    junior: [""]
                },
                {
                    main: "",
                    junior: [""]
                }
            ]

        },
        {
            name: "Alice's Adventures in Wonderland",
            playCount: 43346974,
            intro: "Have a nice dream",
            imgUrl: "https://m.media-amazon.com/images/I/51ZqipZ77PL._SL500_.jpg",
            type: [
                {
                    main: "",
                    junior: [""]
                },
                {
                    main: "",
                    junior: [""]
                }
            ]

        },

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
        function slideUpDown () {
            var flags = 1;
            document.querySelector("#slide-up-down").addEventListener("click", function (ev) {
                if(flags === 1) {
                    this.classList.remove("up-icon");
                    this.classList.add("down-icon");
                    flags = 0;
                    document.querySelector("#entry").style.display = "block";
                } else {
                    this.classList.add("up-icon");
                    this.classList.remove("down-icon");
                    flags = 1;
                    document.querySelector("#entry").style.display = "none";
                }
            })
        }
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
        slideUpDown ();
    }
    //initial right side 
    function getContent () {
        var str = "";
        bookData.forEach(function (item) {
            str += '<div class="book-item">' +
                        '<div class="album-item">' +
                            '<div class="album">' +
                                '<img src="'+item.imgUrl+'" alt="">' +
                                '<div class="play-count">'+item.playCount+'</div>' +
                            '</div>' +
                            '<div class="album-decorate">' +
                                '<div class="border-one"></div>' +
                                '<div class="border-two"></div>' +
                                '<div class="border-three"></div>' +
                                '<div class="mask"></div>' +
                            '</div>' +
                        '</div>' +
                        '<a href="/bookpage/' + item.name + '" class="title">'+item.name+'</a>' +
                        '<div class="intro">' +
                            '<p class="play-btn"></p>' +
                            '<a href="#">'+item.intro+'</a>' +
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

function clicked() {
    console.log("clicked")
    var keyword = document.getElementById("sKeyword").value;
    keyword = keyword.replace(/(^\s*)|(\s*$)/g, '');
    keyword = "k="+keyword;
    var xmlhttp;
    if(window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log("success");
        }
    };
    var targeturl= "/welcome/"+keyword;
    xmlhttp.open("GET",targeturl, true);
    xmlhttp.send(keyword);
    window.location.href=targeturl;
}