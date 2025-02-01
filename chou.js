// 抽签数据
const lotteries = [
    {
        "title": "第十签 中平",
        "content": `亥宫。
石芷无价宝和珍，只管他乡外界寻；
宛如持灯理觅火，不如收拾枉劳心。

解曰：姻缘会遇，何事不成，
须无别意，眼前是真。
此签持灯觅火之象，万事待时成就也。`
    },
    {
        "title": "第十一签 中平",
        "td": "中平",
        "content": `亥宫。
欲求万事喜非常，争奈亲姻只暂忙；
到头毕竟乘鹿箭，贵人指引贵人乡。

解曰：变换得缘，啼哭双全，
要求光明，因灾作福。
此签因祸得福之象，万事营谋大吉也。`
    },
    {
        "title": "第十二签 上上",
        "content": `亥宫。
否极泰来咫尺间，抖擞君子出于山；
若遇虎兔佳音信，立志忙中事不难。

解曰：有意兴发，到彼安然，
若问用事，得遇贵人。
此签因祸得福，逢凶化吉，万事营谋大吉也。`
    },
    {
        "title": "第十三签 上上",
        "content": `亥宫。
自小生在富贵家，眼前万事总奢华；
蒙君赐紫金鱼带，四海传名足可夸。

解曰：囚有逢赦，病即安然，
龙门得遇，名遍皇宫。
此签　万事皆大吉也。`
    },
    {
        "title": "第十四签 上上",
        "content": `卯宫。
宛如仙鹤出樊笼，脱得樊笼处处空；
南北东西无障碍，任君直上九霄宫。

解曰：任君无疑，路有亨通，
随心自在，逍遥得意。
此签万事先凶后吉也。`
    },
    {
        "title": "第十五签 下下",
        "content": `卯宫。
行人一口气难吞，却有灾事近来临；
鸟投林巢无所宿，好寻深处稳安身。

解曰：若得人愁，何时可伸，
好言不信，守旧待时。
此签鸟投林巢之象，凡事宜忍耐，终应心也，宜耐守已。`
    },
    {
        "title": "第十六签 上上",
        "content": `卯宫。
愁眉思虑渐时开，启出云宵喜日来；
宛如粪土一块玉，良工一举出尘埃。

解曰：得处无失，损中有益，
不用多求，必定遇吉。
在签良工举玉之象，凡事谋皆大吉。`
    },
    {
        "title": "第十七签 下下",
        "content": `卯宫。
莫听闲言说是非，晨昏只好念阿弥；
若将妄语为真实，画饼如何止得饥。

解曰：心中不定，枉看经文，
恰似画饼，空自欢心，
此签画饼充饥之象，凡事乱交，虚多实少。`
    },
    {
        "title": "第十八签 中平",
        "content": `卯宫。
金鸡西坠兔东升，日夜循环古自今；
僧道得之无不利，工商农士各从心。

解曰：心中无事，所谋有功，
如弓上箭，当空。
此签阳长阴短之象，凡事皆遂心也。`
    },
    {
        "title": "第十九签 下下",
        "content": `辰宫。
急水滩头放船儿，狂风作浪欲何为；
若要安然求稳静，守时浪静过此危。

解曰：急水登船，静处待时，
若问求谋，佛前施善。
此签凡事守旧待时也。`
    },
    {
        "title": "第二十签 上上",
        "content": `辰宫。
当春久雨喜初晴，玉兔金鸡渐渐明；
旧事销散新事遂，看看一跳过龙门。

解曰：佛力扶持，有灾无危，
福自天生，百事遂意。
此签阴阳会合之象，凡事和合大吉也。`
    },
    {
        "title": "第二十一签 上上",
        "content": `辰宫。
阴阳道合总由天，女嫁男婚岂偶然；
但看龙蛇相会合，熊罢入梦喜团圆。

解曰：谋望从心，婚姻孕男，
资财进盖，更利田蚕。
此签凡事和合大吉也。`
    },
    {
        "title": "第二十二签 中平",
        "content": `巳宫。
旱时田地皆枯竭，谢天甘雨下霖淋；
花果草木都润泽，始知一雨值千金。

解曰：田蚕倍熟，命运相生，
病遇良药，行人便回。
此签旱逢甘雨之象，凡事有救也。`
    },
    {
        "title": "第二十三签 中平",
        "content": `巳宫。
欲攀仙桂入蟾宫，岂在天门不放行；
忽然一般音信好，高人自送岭头云。

解曰：商家利益，行芷有危，
病安讼遂，务需善施。
此签凡事后必亨通也。`
    },
    {
        "title": "第二十四签 下下",
        "content": `巳宫。
不成理论不成家，水性痴人似落花；
若问君恩难得力，到头毕竟事如麻。

解曰：是非莫说，必须仔细，
心正理顺，即不伤身。
此签痴人蒙塞之象，凡事守旧待时也。`
    },
    {
        "title": "第二十五签 中平",
        "content": `巳宫。
过了忧危第几重，从今再历永无凶；
宽心自有宽心计，得遇高人护大功。

解曰：讼终自理，病得安痊，
出入求谋，古井逢泉。
此签凡事贵人成就也。`
    },
    {
        "title": "第二十六签 下下",
    "content": `午宫。
上下传来事总虚，天边收得一封书；
书中许我功名事，在终时亦是空。

解曰：目下心烦，求闲不闲，
欲望名利，守旧心安。
此签凡事防小人守旧也。`
    },
    {
        "title": "第二十七签 中平",
        "content": `午宫。
一谋一用一番机，虑後思前不敢为；
时至贵人相助力，银墙铁壁好安居。

解曰：改旧成新，寒花遇春，
从前阻隔，今得贵人。
此签凡事近贵人好也。`
    },
    {
        "title": "第二十八签 下下",
    "content": `午宫。
东方月上正婵娟，顷刻云遮亦暗存；
或有圆时还有缺，更言非看复皆全。

解曰：浮云遮月，还需疑惑，
等到云散，便见明月。
此签凡事昏迷未定也。`
    },
    {
        "title": "第二十九签 上上",
        "content": `午宫。
宝剑出匣跃光明，在匣全然不惹尘；
今得贵人携出现，有威有势众人钦。

解曰：宝剑出匣，光芒万丈，
贵人指引，百事欢畅。
此签凡事旧时得利也。`
    }
];

// DOM元素引用
const drawBtn = document.querySelector('.draw-btn');
const resultBox = document.querySelector('.result-box');
const resultTitle = document.getElementById('resultTitle');
const resultContent = document.getElementById('resultContent');
const confirmBtn = document.querySelector('.confirm-btn');

// 事件监听
document.addEventListener('DOMContentLoaded', () => {
    drawBtn.addEventListener('click', drawLottery);
    confirmBtn.addEventListener('click', closeResult);
});

// 核心功能函数
function drawLottery() {
    // 淡出按钮动画
    drawBtn.style.opacity = '0';
    
    // 500ms后执行抽签
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * lotteries.length);
        const selected = lotteries[randomIndex];
        
        // 更新结果内容
        resultTitle.textContent = selected.title;
        resultContent.textContent = selected.content;
        
        // 显示结果弹窗
        resultBox.classList.add('show');
    }, 500);
}

function closeResult() {
    // 隐藏结果弹窗
    resultBox.classList.remove('show');
    
    // 重置按钮状态
    drawBtn.style.opacity = '1';
}
