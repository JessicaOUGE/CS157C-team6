(function (window) {
    var bookTypeData = [
        {
            type: "Hot",
            include: []
        },
        {
            type: "Audio Book",
            include: [
                "言情","悬疑","都市","幻想","武侠","文学","历史","官场商战","经管","社科","推理","女生最爱","男生最爱","QQ阅读",
                "读客图书","果麦文化","中信出版","博集天卷","磨铁阅读","蓝狮子","速播专区"
            ]
        },
        {
            type: "Kids",
            include: [
                "绘本","儿歌","小学教材","幻想","科普","英语","国学","家教","故事","卡通","名著"
            ]
        },
        {
            type: "Music",
            include: [
                "老歌","纯音乐","影视","欧美","古风","古典","民谣","翻唱","催眠","动漫游戏","日韩","电子","铃声","音乐小讲堂",
                "创作达人"
            ]
        },
        {
            type: "History",
            include: [
                "世界史","百家讲坛","中国史","名人传","春秋战国","秦汉","三国","魏晋","隋唐","宋元","明清","民国","侃野史"
            ]
        },
        {
            type: "Life",
            include: [
                "睡前夜话","恋爱技巧","情绪压力","婚姻家庭","职场人际","个人成长","心里健康","魅力养成","品质生活","亲子感情"
            ]
        },
        {
            type: "Talk Show",
            include: [
                "干货铺子","情怀江湖","奇葩绽放","财声话痨","深情无忌","歪果仁说"
            ]
        },
        {
            type: "Language",
            include: [
                "口语","少儿","教材","词汇","职场","考试","入门","美文","脱口秀","名著","演讲","影视","旅游","精品"
            ]
        },
        {
            type: "Training",
            include: [
                "人际沟通","心理调节","中小学","高效管理","当众演讲","职业技能","大学生","女性励志","名企大咖","行业新知"
            ]
        },
        {
            type: "Business",
            include: [
                "泛财经","股评","理财","创业","管理"
            ]
        },
        {
            type: "Health",
            include: [
                "中医养生","健身减肥","知识大讲堂","美丽女人经","护肝养肾","食疗课堂","儿童健康管理"
            ]
        },
        {
            type: "News",
            include: [
                "环球视野","体育娱乐","财经科技","文化百态"
            ]
        },
        {
            type: "Radio",
            include: [
                "文艺台","音乐台","校园台","故事台","都市台","交通台","心里健康","魅力养成","品质生活","亲子感情","明清","民国","侃野史","音乐小讲堂",
                "创作达人","果麦文化","中信出版","博集天卷","磨铁阅读","蓝狮子","速播专区"
            ]
        },
        {
            type: "Technology",
            include: [
                "科普","互联网","数码","智能","大数据","创客"
            ]
        },
        {
            type: "Traval",
            include: [
                "环球风物","走遍中国","游记攻略","语音导游","旅游玩家"
            ]
        },
        {
            type: "Game",
            include: [
                "ACG脱口秀","二次元大本营","ACG广播","美女主播","ACG音乐","英雄联盟","ACG咨询","有声轻小说","魔兽世界","睡前","古风","CV配音","鬼畜娱乐","实况解说"
            ]
        },
        {
            type: "Movie",
            include: [
                "影评地带","原声记忆","大话影人","电影资讯","必听影单"
            ]
        },
        {
            type: "Fashion",
            include: [
                "美食","生活家","美容","时尚","运动","萌宠","精品推荐"
            ]
        },
        {
            type: "Open University",
            include: [
                "古诗词","诗歌词赋","现代诗","诗人电台","首席朗诵","启蒙","评赏"
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
                    main: "时尚生活",
                    junior: ["生活家","美容"]
                },
                {
                    main: "诗歌",
                    junior: ["诗歌词赋","现代诗"]
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
                    main: "时尚生活",
                    junior: ["生活家","美容"]
                },
                {
                    main: "诗歌",
                    junior: ["诗歌词赋","现代诗"]
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
                    main: "时尚生活",
                    junior: ["生活家","美容"]
                },
                {
                    main: "诗歌",
                    junior: ["诗歌词赋","现代诗"]
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
                    main: "时尚生活",
                    junior: ["生活家","美容"]
                },
                {
                    main: "诗歌",
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
                    main: "时尚生活",
                    junior: ["生活家","美容"]
                },
                {
                    main: "诗歌",
                    junior: ["诗歌词赋","现代诗"]
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
                    main: "时尚生活",
                    junior: ["生活家","美容"]
                },
                {
                    main: "诗歌",
                    junior: ["诗歌词赋","现代诗"]
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
                    main: "时尚生活",
                    junior: ["生活家","美容"]
                },
                {
                    main: "诗歌",
                    junior: ["诗歌词赋","现代诗"]
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
                    main: "时尚生活",
                    junior: ["生活家","美容"]
                },
                {
                    main: "诗歌",
                    junior: ["诗歌词赋","现代诗"]
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
                    main: "时尚生活",
                    junior: ["生活家","美容"]
                },
                {
                    main: "诗歌",
                    junior: ["诗歌词赋","现代诗"]
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
                    main: "时尚生活",
                    junior: ["生活家","美容"]
                },
                {
                    main: "诗歌",
                    junior: ["诗歌词赋","现代诗"]
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
                    main: "时尚生活",
                    junior: ["生活家","美容"]
                },
                {
                    main: "诗歌",
                    junior: ["诗歌词赋","现代诗"]
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
                    main: "时尚生活",
                    junior: ["生活家","美容"]
                },
                {
                    main: "诗歌",
                    junior: ["诗歌词赋","现代诗"]
                }
            ]

        },

    ];
    //初始化左侧菜单
    function getMenu () {
        var str1 = "";
        bookTypeData.forEach(function (item) {
            var str2 = "";
            var liClass = "",pClass="";
            if(item.type !== "热门") {
                item.include.forEach(function (item1) {
                    str2 += '<a href="#" class="not-selected link"><span>'+item1+'</span></a>';
                })
            }
            str2 = '<div class="child-menu">' + str2 + '</div>';
            if(item.type === "热门") {
                liClass = "hot";
                pClass = "active"
            } else if(item.type === "有声书") {
                liClass = "not-hot voice-book";
            } else if(item.type === "儿童") {
                liClass = "not-hot child";
            } else {
                liClass = "not-hot not-child not-voice-book"
            }
            str1 += '<li class="'+liClass+'"><p class="'+pClass+'">'+item.type+'</p>' + str2 + '</li>';
        });
        document.querySelector("#menu").innerHTML = str1;
    }
    //初始化绑定事件
    function initEvents() {
        var array = [
            {//点击右上方横向选择按钮
                parentElement: "#easy-select",
                childName: "li",
                className: "active",
                eventName: "click"
            },
            {//点击左上方横向选择按钮
                parentElement: "#left-top-menu",
                childName: "li",
                className: "active",
                eventName: "click"
            },
            {//点击导航栏
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
        //点击搜索框，显示下拉菜单
        function controlSearch () {
            document.querySelector("#search").addEventListener("mouseover", function(ev) {
                this.querySelector("ul").style.display = "block";
            });
            document.querySelector("#search").addEventListener("mouseout", function(ev) {
                this.querySelector("ul").style.display = "none";
            });
        }
        //点击展开，显示下方内容
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
        //左侧筛选菜单控制逻辑
        function controlLeftMenu () {
            //清除小标签的样式
            function resetSmallTag () {
                document.querySelectorAll("#menu a").forEach(function (value) {
                    value.classList.remove("visited");
                    value.classList.add("not-selected")
                });
            }
            //改变面包屑的内容
            function addDir (aText, spanText) {
                document.querySelector("#dir a").textContent = aText;
                document.querySelector("#dir span").innerHTML = spanText;
            }
            //点击左侧菜单
            document.querySelector("#menu").addEventListener("click", function (ev) {
                //将父元素menu下的所有p元素移除类active
                this.querySelectorAll("p").forEach(function (value) {
                    value.classList.remove("active");
                });
                //点击的元素是p元素则
                if(ev.target.localName === "p") {
                    ev.target.classList.add("active");
                    addDir(ev.target.innerText, "");
                    resetSmallTag();
                }
                //点击的元素是p元素的兄弟元素
                if(ev.target.localName === "div") {
                    ev.target.parentNode.querySelector("p").classList.add("active");
                    addDir(ev.target.parentNode.querySelector("p").innerText, "");
                    resetSmallTag();
                }
                //如果点击的元素是p元素的兄弟元素的子元素span：
                if(ev.target.localName === "span") {
                    var target = ev.target.parentNode.parentNode.parentNode;
                    target.querySelector("p").classList.add("active");
                    resetSmallTag();
                    ev.target.parentNode.classList.add("visited");
                    ev.target.parentNode.classList.remove("not-selected");
                    addDir(target.querySelector("p").innerText, ">>&nbsp;"+ev.target.innerText);
                }
            });
            //点击面包屑
            document.querySelector("#dir a").addEventListener("click", function (ev) {
                document.querySelector("#dir span").innerHTML = "";
                resetSmallTag();
            })
        }

        controlSearch ();
        addEventListeners(array);
        controlLeftMenu();
        slideUpDown ();
    }
    //初始化右侧内容区
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
                        '<a href="#" class="title">'+item.name+'</a>' +
                        '<div class="intro">' +
                            '<p class="play-btn"></p>' +
                            '<a href="#">'+item.intro+'</a>' +
                        '</div>' +
                    '</div>'
        });
        document.querySelector("#main-content").innerHTML = str;
        //页码初始化
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
    //页码控制逻辑
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
