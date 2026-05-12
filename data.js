const gameData = {
    chapters: [
        {
            id: "shed",
            number: 1,
            name: "棚屋",
            nameEn: "The Shed",
            theme: "怨恨与工具",
            duration: "1.5-2小时",
            mechanics: ["锤子", "钉子"],
            minigames: 2,
            color: "#8B5CF6",
            desc: "玩家初入游戏，学习基础合作机制。小梅手持锤子，科迪手持钉子，两者配合贯穿整个章节。本章包含序章教学、吸尘器Boss战、工具箱Boss战等核心内容。",
            sections: [
                { name: "序章：愿望成真", desc: "教程关卡，学习移动、跳跃、互动、二段跳、冲刺等基础操作" },
                { name: "奄奄一息", desc: "黑暗管道探索，学习管道解谜，最终遭遇吸尘器Boss" },
                { name: "万丈深渊", desc: "垂直攀爬关卡，包含\"暴打科迪\"和\"转动开关\"两个小游戏" },
                { name: "接好电线", desc: "双人配合充当作电线，通过电流连接电路解谜" },
                { name: "工具箱Boss战", desc: "本章最终Boss，三阶段战斗，考验配合" }
            ],
            boss: { name: "工具箱", desc: "三阶段Boss战，需钉子固定手臂后攻击锁头", strategy: "用钉子固定手臂作为跳板，小梅用锤子敲击锁头打开工具箱" },
            walkthrough: "科迪先跳到工具箱手臂上钉钉子固定，小梅跳上去敲击锁头。第二阶段躲避钉子雨和旋转横杆。第三阶段利用铲子弹跳攻击。",
            tips: "钉子固定后要快速跳上攻击，时间窗口有限",
            image: "https://images.licensed-game.com/chapters/shed-detailed.jpg"
        },
        {
            id: "tree",
            number: 2,
            name: "大树",
            nameEn: "The Tree",
            theme: "外部冲突",
            duration: "2-2.5小时",
            mechanics: ["树脂枪", "火焰枪"],
            minigames: 2,
            color: "#10B981",
            desc: "进入松鼠与黄蜂的战争世界。科迪的火焰枪与小梅的树脂枪配合点燃敌人。本章包含巨型甲壳虫、蜂后等Boss战，以及拔河、马桶塞等趣味小游戏。",
            sections: [
                { name: "新鲜空气", desc: "获取新武器，学习树脂+火焰的燃烧机制" },
                { name: "俘虏", desc: "松鼠基地，包含拔河小游戏" },
                { name: "根深蒂固", desc: "生物发光根部，包含马桶塞塞乐小游戏" },
                { name: "根除", desc: "突袭黄蜂巢穴，最终挑战蜂后Boss" }
            ],
            boss: { name: "蜂后", desc: "三阶段战斗，需点燃蜂后护甲", strategy: "科迪喷树脂，小梅点燃，摧毁蜂后前后4块护甲" },
            walkthrough: "第一阶段蜂后正面攻击，喷树脂在护甲上点燃。第二阶段俯视视角，绕后攻击。第三阶段攻击锁链将蜂后拉下来。",
            tips: "二阶段俯视视角要注意位置配合，分屏后需快速沟通",
            image: "https://images.licensed-game.com/chapters/tree-detailed.jpg"
        },
        {
            id: "rose",
            number: 3,
            name: "罗斯的房间",
            nameEn: "Rose's Room",
            theme: "忽视与想象",
            duration: "3-4小时",
            mechanics: ["重力靴", "磁力器", "时间操控"],
            minigames: 7,
            color: "#EC4899",
            desc: "最丰富的章节，包含多种玩法变化。穿越太空、玩具世界、桌游等主题区域。有7个小游戏，包括坦克大战、激光网球等。",
            sections: [
                { name: "枕头堡垒", desc: "温馨的被子迷宫，包含坦克兄弟小游戏" },
                { name: "太空漫步", desc: "重力变动的科幻空间，太空漫步和激光网球小游戏" },
                { name: "跳房子", desc: "桌游世界，牛仔竞技、喂食爬行动物、击球队等多个小游戏" },
                { name: "很久以前", desc: "童话故事主题，鸟中明星音游小游戏" },
                { name: "太空猴子Boss", desc: "激光反射与平台跳跃Boss战" },
                { name: "海盗船章鱼", desc: "操控海盗船对战巨型章鱼" }
            ],
            boss: { name: "太空猴子", desc: "激光反射与飞碟导弹攻击", strategy: "一人吸引激光反射激活平台，另一人操作导弹反击" },
            walkthrough: "先反射激光到3个机关激活平台。进入飞碟后一人破解一人操作。外侧玩家骑乘导弹反击飞碟。",
            tips: "激光反射需要精确配合，多试几次即可",
            image: "https://images.licensed-game.com/chapters/rose-detailed.jpg"
        },
        {
            id: "clock",
            number: 4,
            name: "布谷鸟钟",
            nameEn: "Cuckoo Clock",
            theme: "时间与遗憾",
            duration: "1.5-2小时",
            mechanics: ["时间倒流", "时间冻结"],
            minigames: 2,
            color: "#F59E0B",
            desc: "操控时间的章节。科迪可以倒流时间，小梅可以冻结时间。配合解开复杂的时间悖论谜题。包含赛马和轰炸航路两个小游戏。",
            sections: [
                { name: "时间之门", desc: "时间操控基础学习，包含赛马小游戏" },
                { name: "双重麻烦", desc: "双人时间同步解谜，小梅放分身，科迪倒流时间" },
                { name: "钟楼之心", desc: "核心机关挑战，包含轰炸航路小游戏" },
                { name: "时钟Boss战", desc: "时间悖论Boss，需配合操控时间" }
            ],
            boss: { name: "时钟", desc: "时间悖论Boss战", strategy: "利用时间倒流和冻结配合攻击Boss弱点" },
            walkthrough: "小梅放分身踩按钮，本体和科迪各踩一个，触发瞬间小梅传送。Boss战中利用时间机制创造输出窗口。",
            tips: "三重按钮是本章难点，需反复练习配合节奏",
            image: "https://images.licensed-game.com/chapters/clock-detailed.jpg"
        },
        {
            id: "snowglobe",
            number: 5,
            name: "雪景球",
            nameEn: "Snow Globe",
            theme: "吸引与距离",
            duration: "1.5-2小时",
            mechanics: ["磁力吸引", "磁力排斥"],
            minigames: 4,
            color: "#06B6D4",
            desc: "磁力为核心的章节。科迪吸引金属，小梅排斥金属。包含投掷冰柱、沙狐球、雪球大战、俄罗斯方块等4个小游戏。",
            sections: [
                { name: "冬日小镇", desc: "冰雪覆盖的小镇探索，3个小游戏" },
                { name: "冰湖深处", desc: "冰下轨道挑战，俄罗斯方块小游戏" },
                { name: "雪人王国", desc: "雪人Boss战，磁力机制是关键" }
            ],
            boss: { name: "雪人王", desc: "磁力机制Boss战", strategy: "利用磁力吸引雪球，排斥冰刺，创造输出窗口" },
            walkthrough: "科迪用磁力把雪球吸到Boss脸上，小梅推开冰刺保护两人。找到Boss攻击间隙输出。",
            tips: "观察地面阴影预判雪球落点，磁力使用时机很关键",
            image: "https://images.licensed-game.com/chapters/snowglobe-detailed.jpg"
        },
        {
            id: "garden",
            number: 6,
            name: "花园",
            nameEn: "Garden",
            theme: "激情与培育",
            duration: "2-2.5小时",
            mechanics: ["生长", "枯萎"],
            minigames: 3,
            color: "#84CC16",
            desc: "植物生长为主题。科迪让植物生长，小梅让植物枯萎。包含幼虫篮子、空气曲棍球等小游戏，以及最终Boss乔伊的初战。",
            sections: [
                { name: "种子", desc: "花园基础机制学习" },
                { name: "丰收", desc: "植物战斗与成长，空气曲棍球小游戏" },
                { name: "斩草除根", desc: "Boss战准备，幼虫篮子小游戏" },
                { name: "乔伊初战", desc: "最终Boss前的大型植物Boss战" }
            ],
            boss: { name: "乔伊", desc: "最终Boss前的大型植物Boss", strategy: "利用生长和枯萎机制控制植物，配合攻击" },
            walkthrough: "科迪生长藤蔓搭桥，小梅枯萎障碍开路。Boss战中控制场地植物限制Boss移动。",
            tips: "生长和枯萎顺序很重要，要提前商定好操作节奏",
            image: "https://images.licensed-game.com/chapters/garden-detailed.jpg"
        },
        {
            id: "attic",
            number: 7,
            name: "阁楼",
            nameEn: "The Attic",
            theme: "和谐与音乐",
            duration: "2-2.5小时",
            mechanics: ["音乐", "飞行"],
            minigames: 5,
            color: "#A855F7",
            desc: "最终章节。音乐节奏玩法，两人需配合跳跃。包含最终Boss乔伊·乔伊三阶段战斗，以及追逐、音乐椅子、鼓手对决等多个小游戏。",
            sections: [
                { name: "留声机", desc: "音乐节奏基础，追逐和音乐椅子小游戏" },
                { name: "唱片", desc: "轨道飞行挑战，鼓手对决和飞行小游戏" },
                { name: "最终乐章", desc: "最终Boss战与完美结局" }
            ],
            boss: { name: "乔伊·乔伊", desc: "最终Boss，需三次净化腐化物", strategy: "无血条限制，需三次净化腐化物，每次净化进入新形态" },
            walkthrough: "一阶段躲避植物攻击净化。二阶段躲避根须缠绕净化。三阶段全屏攻击，找到安全位置净化。倒在盘子上快速复活。",
            tips: "保持冷静，注意Boss攻击前摇，倒在盘子上快速复活",
            image: "https://images.licensed-game.com/chapters/attic-detailed.jpg"
        }
    ],
    
    bosses: [
        {
            id: "vacuum",
            name: "吸尘器",
            chapter: "棚屋",
            chapterId: "shed",
            difficulty: "简单",
            phases: [
                { name: "第一阶段", attacks: ["吸力攻击", "障碍物喷射"], strategy: "一人抬管瞄准，一人扣动扳机发射罐子" },
                { name: "第二阶段", attacks: ["灰尘喷射", "旋转冲击波"] }
            ],
            strategy: "一人抬管瞄准并吸住罐子形成炮台，另一人负责扣动扳机发射。需躲避Boss的冲击波攻击。被击倒可立即复活继续战斗。",
            tips: "保持移动，避免被吸入。炮台充能时是最佳攻击窗口。",
            rewards: "解锁小梅的锤子和科迪的钉子",
            image: "https://images.licensed-game.com/bosses/vacuum-detailed.jpg"
        },
        {
            id: "toolbox",
            name: "工具箱",
            chapter: "棚屋",
            chapterId: "shed",
            difficulty: "中等",
            phases: [
                { name: "第一阶段", attacks: ["手臂挥击", "锤子砸地"], strategy: "钉子固定手臂，跳上攻击锁头" },
                { name: "第二阶段", attacks: ["旋转横杆", "钉子雨"] },
                { name: "第三阶段", attacks: ["铲子拍击", "弹跳平台"] }
            ],
            strategy: "用科迪的钉子固定Boss手臂作为跳板，小梅用锤子敲击锁头打开工具箱。躲避旋转横杆和钉子雨。二阶段利用铲子弹跳进行空中攻击。",
            tips: "钉子固定后要快速跳上攻击锁头，时间窗口有限。第三阶段是难点，需要精准配合。",
            rewards: "完成第一章，解锁树章节",
            image: "https://images.licensed-game.com/bosses/toolbox-detailed.jpg"
        },
        {
            id: "beetle",
            name: "巨型甲壳虫",
            chapter: "大树",
            chapterId: "tree",
            difficulty: "中等",
            phases: [
                { name: "战斗阶段", attacks: ["冲撞", "冲击波", "地面震动"] }
            ],
            strategy: "两人轮流引诱甲虫冲撞。当甲虫撞墙眩晕时，科迪在场地坑洞中填充树脂，小梅引爆对Boss造成伤害。重复三次即可击败。",
            tips: "利用场地障碍物让甲虫眩晕，创造输出机会。",
            rewards: "解锁松鼠友好关系",
            image: "https://images.licensed-game.com/bosses/beetle-detailed.jpg"
        },
        {
            id: "wasp-queen",
            name: "蜂后",
            chapter: "大树",
            chapterId: "tree",
            difficulty: "困难",
            phases: [
                { name: "第一阶段", attacks: ["黄蜂锤击", "火焰喷射"], strategy: "喷涂树脂在护甲上点燃" },
                { name: "第二阶段", attacks: ["炸弹轰炸", "剪刀旋转"] },
                { name: "第三阶段", attacks: ["锁链横扫", "冲锋碾压"] }
            ],
            strategy: "科迪用树脂枪在蜂后护甲上喷涂，小梅用火焰枪引爆。需摧毁蜂后前后共4块护甲。利用滑轨躲避攻击并绕到背后攻击。",
            tips: "第二阶段视角会变为俯视，分屏后需快速找到护甲位置。第三阶段攻击锁链即可将蜂后拉下来。",
            rewards: "完成第二章，解锁罗斯的房间",
            image: "https://images.licensed-game.com/bosses/wasp-queen-detailed.jpg"
        },
        {
            id: "monkey",
            name: "太空猴子",
            chapter: "罗斯的房间",
            chapterId: "rose",
            difficulty: "中等",
            phases: [
                { name: "第一阶段", attacks: ["激光射击", "平台跳跃"], strategy: "反射激光激活机关" },
                { name: "第二阶段", attacks: ["飞碟攻击", "导弹追击"] }
            ],
            strategy: "一人吸引激光并将其反射到机关处激活平台。进入飞碟内部后，科迪破解机关，小梅操作导弹。外侧玩家骑乘导弹反击飞碟。",
            tips: "激光反射需要精确配合，多尝试几次即可掌握节奏。",
            rewards: "解锁重力操控能力",
            image: "https://images.licensed-game.com/bosses/monkey-detailed.jpg"
        },
        {
            id: "octopus",
            name: "巨型章鱼",
            chapter: "罗斯的房间",
            chapterId: "rose",
            difficulty: "中等",
            phases: [
                { name: "战斗阶段", attacks: ["触手拍击", "炸弹鸭", "墨汁攻击"] }
            ],
            strategy: "两人配合操控海盗船，左侧玩家控制前进后退，右侧玩家负责转向。一人攻击触手一人瞄准脸部。保持船身稳定避免被触手拍击。",
            tips: "优先清理炸弹鸭避免被击中。转向时注意提前量。",
            rewards: "解锁海盗船冒险记忆",
            image: "https://images.licensed-game.com/bosses/octopus-detailed.jpg"
        },
        {
            id: "snowman",
            name: "雪人王",
            chapter: "雪景球",
            chapterId: "snowglobe",
            difficulty: "中等",
            phases: [
                { name: "第一阶段", attacks: ["雪球轰炸", "冰刺攻击"], strategy: "磁力吸引雪球反击" },
                { name: "第二阶段", attacks: ["磁力陷阱", "冰墙崩塌"] }
            ],
            strategy: "利用磁力机制躲避攻击和反击。科迪用磁力吸引操控雪球，小梅用排斥力推开冰刺。找到攻击窗口进行输出。",
            tips: "注意观察地面阴影预判雪球落点。磁力使用时机很关键。",
            rewards: "完成第五章，解锁花园",
            image: "https://images.licensed-game.com/bosses/snowman-detailed.jpg"
        },
        {
            id: "joey",
            name: "乔伊",
            chapter: "花园",
            chapterId: "garden",
            difficulty: "中等",
            phases: [
                { name: "形态一", attacks: ["植物攻击", "孢子喷射"] },
                { name: "形态二", attacks: ["根须缠绕", "毒液攻击"] }
            ],
            strategy: "科迪让平台生长，小梅让障碍枯萎。配合控制植物限制Boss移动，找到输出时机。",
            tips: "生长和枯萎顺序要协调，避免互相干扰。",
            rewards: "解锁阁楼章节通道",
            image: "https://images.licensed-game.com/bosses/joey-detailed.jpg"
        },
        {
            id: "joey-final",
            name: "乔伊·乔伊",
            chapter: "阁楼",
            chapterId: "attic",
            difficulty: "困难",
            phases: [
                { name: "形态一", attacks: ["植物攻击", "孢子喷射"], strategy: "躲避并净化腐化物" },
                { name: "形态二", attacks: ["根须缠绕", "毒液攻击"] },
                { name: "最终形态", attacks: ["全屏攻击", "腐化物净化"] }
            ],
            strategy: "最终Boss无血条限制，需进行三次腐化物净化。每次净化后Boss会进入新形态。需配合躲避各种攻击并在安全时机输出。倒在盘子上可快速复活。",
            tips: "保持冷静，注意Boss攻击前摇。倒在盘子上可以快速复活。三次净化即可胜利。",
            rewards: "完美结局，观看结局动画",
            image: "https://images.licensed-game.com/bosses/joey-final-detailed.jpg"
        }
    ],
    
    minigames: [
        { id: 1, name: "暴打科迪", chapter: "棚屋", section: "万丈深渊", desc: "类似打地鼠游戏。科迪在洞中移动躲避，小梅用锤子敲击。", tips: "科迪玩家注意观察锤子轨迹提前预判。", type: "对战", difficulty: "简单" },
        { id: 2, name: "转动开关", chapter: "棚屋", section: "万丈深渊", desc: "科迪用钉子击中转盘得分，小梅用锤子敲击得分。可用钉子控制对方时间。", tips: "利用钉子控制对手节奏可以获得额外得分。", type: "对战", difficulty: "中等" },
        { id: 3, name: "拔河", chapter: "大树", section: "捕获俘虏", desc: "简单小游戏，只需反复按键比拼手速。", tips: "保持节奏均匀发力，不要一开始就用力过猛。", type: "对战", difficulty: "简单" },
        { id: 4, name: "马桶塞塞乐", chapter: "大树", section: "根深蒂固", desc: "双方各操控马桶炮台打靶，被打中的靶子会滑向对方。", tips: "手柄玩家需要适应瞄准手感，提前量很重要。", type: "对战", difficulty: "中等" },
        { id: 5, name: "坦克兄弟", chapter: "罗斯的房间", section: "枕头堡垒", desc: "双方各操控坦克对战，有3条命限制。", tips: "利用提前量和预判击中对手，注意走位躲避。", type: "对战", difficulty: "中等" },
        { id: 6, name: "太空漫步", chapter: "罗斯的房间", section: "太空之旅", desc: "踩上红色方块得分，跳跃后重力会变化。", tips: "跳跃后注意重力方向调整落点。", type: "竞技", difficulty: "中等" },
        { id: 7, name: "激光网球", chapter: "罗斯的房间", section: "太空之旅", desc: "踩发光方块发射拦截光束，对方需躲避。", tips: "观察对方位置，预判移动路线。", type: "对战", difficulty: "中等" },
        { id: 8, name: "牛仔竞技赛", chapter: "罗斯的房间", section: "跳房子", desc: "按节奏按键保持平衡，节奏会逐渐加快。", tips: "前面会有容错机会，后面需集中注意力。", type: "节奏", difficulty: "中等" },
        { id: 9, name: "喂食爬行动物", chapter: "罗斯的房间", section: "跳房子", desc: "捡起红球抛入动物嘴中得分。", tips: "抛投时注意抛物线预判。", type: "投掷", difficulty: "简单" },
        { id: 10, name: "击球队", chapter: "罗斯的房间", section: "跳房子", desc: "击打球体得分，受力关系会影响球的转速。", tips: "考虑提前量，不同位置击打效果不同。", type: "运动", difficulty: "中等" },
        { id: 11, name: "鸟中明星", chapter: "罗斯的房间", section: "很久很久以前", desc: "音游玩法，按掉落音符按键得分。", tips: "难度随节拍逐渐上升，保持专注。", type: "节奏", difficulty: "中等" },
        { id: 12, name: "赛马", chapter: "布谷鸟钟", section: "时间之门", desc: "跳跃蹲下躲避障碍物，先到终点获胜。", tips: "不要贪快，稳扎稳打避免撞障碍。", type: "竞速", difficulty: "简单" },
        { id: 13, name: "轰炸航路", chapter: "布谷鸟钟", section: "时间之门", desc: "背着炸弹跑酷，黄色光球可增加倒计时。", tips: "善用钩索和地图机制加速。", type: "跑酷", difficulty: "中等" },
        { id: 14, name: "投掷冰柱", chapter: "雪景球", section: "冬日小镇", desc: "投掷冰柱击中靶心得分，透过加分环得双倍。", tips: "键盘鼠标调整视角更自在，有优势。", type: "投掷", difficulty: "中等" },
        { id: 15, name: "沙狐球", chapter: "雪景球", section: "冬日小镇", desc: "类似冰壶，蓄力发射球体到数字区域得分。", tips: "控制力度和方向是关键。", type: "休闲", difficulty: "简单" },
        { id: 16, name: "雪球大战", chapter: "雪景球", section: "冬日小镇", desc: "用雪球击中对方5次获胜，各有5颗雪球。", tips: "利用辅助瞄准，在对方出手瞬间闪避反击。", type: "对战", difficulty: "中等" },
        { id: 17, name: "俄罗斯方块", chapter: "雪景球", section: "冰湖深处", desc: "经典俄罗斯方块对战模式。", tips: "观察对方堆叠情况，针对性消除。", type: "益智", difficulty: "中等" },
        { id: 18, name: "幼虫篮子", chapter: "花园", section: "斩草除根", desc: "收集从天而降的幼虫放入篮子。", tips: "找准位置等待幼虫落下。", type: "收集", difficulty: "简单" },
        { id: 19, name: "空气曲棍球", chapter: "花园", section: "开花", desc: "空气曲棍球对战。", tips: "快速反应，找准击球时机。", type: "运动", difficulty: "中等" },
        { id: 20, name: "追逐", chapter: "阁楼", section: "留声机", desc: "追逐小游戏，抢先到达终点获胜。", tips: "注意节奏和跳跃时机。", type: "竞速", difficulty: "中等" },
        { id: 21, name: "音乐椅子", chapter: "阁楼", section: "留声机", desc: "音乐停止时抢椅子。", tips: "提前看好空位，音乐结束时快速移动。", type: "反应", difficulty: "简单" },
        { id: 22, name: "鼓手对决", chapter: "阁楼", section: "唱片", desc: "双人对战节奏游戏。", tips: "跟随鼓点击键，节奏感很重要。", type: "节奏", difficulty: "中等" },
        { id: 23, name: "飞行", chapter: "阁楼", section: "唱片", desc: "飞行竞速小游戏。", tips: "保持稳定速度，注意障碍物。", type: "竞速", difficulty: "中等" },
        { id: 24, name: "万花筒", chapter: "阁楼", section: "万花筒终章", desc: "视觉错觉解谜小游戏。", tips: "利用视觉错觉找到正确路径。", type: "解谜", difficulty: "中等" },
        { id: 25, name: "信件", chapter: "阁楼", section: "信件", desc: "情感向小游戏，阅读游戏结局信件。", tips: "这是收集向小游戏，认真阅读剧情。", type: "剧情", difficulty: "简单" }
    ],
    
    tips: [
        {
            id: 1,
            title: "新图技能通报",
            category: "核心技巧",
            desc: "进入新章节或获得新技能时，先明确通报各自持有的技能及其功能，再进行操作。",
            icon: "megaphone"
        },
        {
            id: 2,
            title: "跳跃口令同步",
            category: "核心技巧",
            desc: "跳跃环节实行口令制，指定一人指挥喊出\"1、2、跳\"，双方同步按键，避免各自行动导致失误。",
            icon: "users"
        },
        {
            id: 3,
            title: "BOSS战分工轮换",
            category: "核心技巧",
            desc: "BOSS战提前分工，一人负责拉仇恨，一人负责攻击弱点。每轮结束后互换角色，确保公平与节奏。",
            icon: "target"
        },
        {
            id: 4,
            title: "解谜试错与兜底",
            category: "核心技巧",
            desc: "解谜时一人负责动手尝试操作，另一人负责全局观察问题，避免两人同时盲目操作。",
            icon: "search"
        },
        {
            id: 5,
            title: "鼓励代替指责",
            category: "核心技巧",
            desc: "失误时一句\"没事，再来\"比抱怨更能提升默契度，减少游戏内矛盾。",
            icon: "heart"
        },
        {
            id: 6,
            title: "善用角色能力",
            category: "核心技巧",
            desc: "科迪的时间倒流可挽救小梅的失误，小梅的冰墙/树脂能保护科迪安全输出。",
            icon: "target"
        },
        {
            id: 7,
            title: "沟通优先",
            category: "核心技巧",
            desc: "时刻说出你的计划，如\"我吸引Boss注意力，你去拉左边开关\"，避免操作冲突。",
            icon: "megaphone"
        },
        {
            id: 8,
            title: "动态分工",
            category: "核心技巧",
            desc: "根据能力差异调整角色，操作较好的玩家负责精准跳跃，逻辑思维强的负责解谜。",
            icon: "users"
        },
        {
            id: 9,
            title: "棚屋关卡钉子技巧",
            category: "章节避坑",
            desc: "小梅要把钉子射在墙面特定位置，科迪用锤子敲击固定。锤子轻敲固定，重敲会破坏机关。",
            icon: "alert"
        },
        {
            id: 10,
            title: "大树章节树脂配合",
            category: "章节避坑",
            desc: "黄蜂女王Boss战时，科迪用树脂枪封住蜂巢，小梅立刻用火焰枪点燃，顺序绝对不能反。",
            icon: "alert"
        },
        {
            id: 11,
            title: "时钟关卡三重按钮",
            category: "章节避坑",
            desc: "小梅放分身踩一个按钮，本体和科迪各踩一个，触发瞬间小梅传送至分身处，就能解锁机关。",
            icon: "alert"
        },
        {
            id: 12,
            title: "太空失重跳跃规则",
            category: "章节避坑",
            desc: "禁止连跳，落地后方可进行第二次跳跃。遵循\"慢就是快\"原则。",
            icon: "alert"
        },
        {
            id: 13,
            title: "磁铁关卡正负极区分",
            category: "章节避坑",
            desc: "区分正负极，拉队友用异极（吸引），弹障碍用同极（排斥），避免误操作。",
            icon: "alert"
        },
        {
            id: 14,
            title: "花园生长枯萎顺序",
            category: "章节避坑",
            desc: "科迪生长与小梅枯萎互斥，需提前商定操作顺序，操作后通报对方。",
            icon: "alert"
        },
        {
            id: 15,
            title: "阁楼最终Boss技巧",
            category: "章节避坑",
            desc: "倒在盘子上可以快速复活！充分利用这个机制，三次净化即可胜利。",
            icon: "alert"
        }
    ],
    
    operations: [
        {
            title: "手柄操作",
            icon: "🎮",
            controls: [
                { action: "移动", keys: "左摇杆" },
                { action: "快跑", keys: "按住左摇杆" },
                { action: "调整视角", keys: "右摇杆" },
                { action: "查找队友", keys: "按下右摇杆" },
                { action: "冲刺", keys: "X" },
                { action: "互动", keys: "Y" },
                { action: "跳跃", keys: "A" },
                { action: "取消", keys: "B" },
                { action: "绳索/抓钩", keys: "RB" },
                { action: "章节能力", keys: "LT/RT" }
            ]
        },
        {
            title: "键盘操作",
            icon: "⌨️",
            controls: [
                { action: "移动", keys: "W/S/A/D" },
                { action: "快跑", keys: "CapsLock" },
                { action: "调整视角", keys: "鼠标移动" },
                { action: "查找队友", keys: "鼠标中键" },
                { action: "冲刺", keys: "左Shift" },
                { action: "互动", keys: "E" },
                { action: "跳跃", keys: "空格" },
                { action: "取消", keys: "Q" },
                { action: "绳索/抓钩", keys: "F" },
                { action: "章节能力", keys: "鼠标左/右键" }
            ]
        }
    ],
    
    onlineGuide: {
        title: "在线联机指南",
        sections: [
            {
                title: "本地双人设置",
                content: "连接至少一个手柄（无法仅用一套键鼠），进入游戏选择\"离线游玩\"。一方使用键盘鼠标，另一方使用手柄，分别选择角色。调整分屏比例（垂直/水平），确保双方视野清晰。"
            },
            {
                title: "在线联机教程",
                content: "没有购买游戏的玩家下载双人成行好友通行证，房主进入游戏点击在线游玩，点击邀请好友，邀请Origin好友，好友需下载通行证版。等待好友加入房间，点击继续。"
            },
            {
                title: "远程同乐",
                content: "进入游戏后按下Shift+Tab，弹出Steam好友界面，右键邀请好友远程畅玩。"
            }
        ]
    },
    
    gameInfo: {
        title: "游戏基础信息",
        developer: "Hazelight Studios",
        publisher: "Electronic Arts",
        releaseDate: "2021年3月26日",
        platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Nintendo Switch"],
        awards: ["TGA 2021 年度最佳游戏", "TGA 2021 最佳多人游戏", "TGA 2021 最佳家庭游戏"],
        sales: "超过2000万套",
        rating: "Steam好评率96%",
        playtime: "12-15小时主线剧情，全收集约20小时"
    },
    
    searchData: [
        { type: "chapter", id: "shed", name: "棚屋", keyword: "棚屋 第一章 锤子 钉子 工具箱 吸尘器" },
        { type: "chapter", id: "tree", name: "大树", keyword: "大树 第二章 树脂 火焰 蜂后 甲壳虫" },
        { type: "chapter", id: "rose", name: "罗斯的房间", keyword: "罗斯的房间 第三章 太空 玩具 猴子 章鱼" },
        { type: "chapter", id: "clock", name: "布谷鸟钟", keyword: "布谷鸟钟 第四章 时间 倒流 冻结" },
        { type: "chapter", id: "snowglobe", name: "雪景球", keyword: "雪景球 第五章 磁力 雪人 磁铁" },
        { type: "chapter", id: "garden", name: "花园", keyword: "花园 第六章 植物 生长 枯萎 乔伊" },
        { type: "chapter", id: "attic", name: "阁楼", keyword: "阁楼 第七章 音乐 最终 乔伊 结局" },
        { type: "boss", id: "vacuum", name: "吸尘器", keyword: "吸尘器 Boss 棚屋 第一章" },
        { type: "boss", id: "toolbox", name: "工具箱", keyword: "工具箱 Boss 棚屋 第一章" },
        { type: "boss", id: "beetle", name: "巨型甲壳虫", keyword: "甲壳虫 Boss 大树 第二章" },
        { type: "boss", id: "wasp-queen", name: "蜂后", keyword: "蜂后 Boss 大树 第二章" },
        { type: "boss", id: "monkey", name: "太空猴子", keyword: "太空猴子 Boss 罗斯 第三章" },
        { type: "boss", id: "octopus", name: "巨型章鱼", keyword: "章鱼 Boss 罗斯 第三章" },
        { type: "boss", id: "snowman", name: "雪人王", keyword: "雪人 Boss 雪景球 第五章" },
        { type: "boss", id: "joey", name: "乔伊", keyword: "乔伊 Boss 花园 第六章" },
        { type: "boss", id: "joey-final", name: "乔伊·乔伊", keyword: "乔伊·乔伊 最终 Boss 阁楼 第七章" },
        { type: "minigame", id: 1, name: "暴打科迪", keyword: "暴打科迪 小游戏 棚屋 第一章" },
        { type: "minigame", id: 2, name: "转动开关", keyword: "转动开关 小游戏 棚屋 第一章" },
        { type: "minigame", id: 3, name: "拔河", keyword: "拔河 小游戏 大树 第二章" },
        { type: "minigame", id: 4, name: "马桶塞塞乐", keyword: "马桶塞 小游戏 大树 第二章" },
        { type: "tip", id: 1, name: "新图技能通报", keyword: "技能通报 配合 技巧" },
        { type: "tip", id: 2, name: "跳跃口令同步", keyword: "跳跃 口令 同步 配合" },
        { type: "guide", id: 1, name: "联机操作", keyword: "联机 操作 手柄 键盘 控制" },
        { type: "guide", id: 2, name: "在线联机", keyword: "在线 联机 远程 同乐 好友" }
    ]
};
