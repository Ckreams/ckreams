// 抽签数据
const lotteries = [
    {
        title: "上上",
        content: `子宫
天开地辟作良缘，日吉时良万物全；
若得此签非小可，公行忠正帝王宣。

解曰：急速非速，年来直时，
佛神择笔，先报君知。
此签万事求谋具吉利也。`
    },
    {
        title: "中平",
        content: `子宫
鲸鱼未变守江湖，不可升腾离碧波；
异日峥嵘身变化，许君一跃跳龙门。

解曰：得忍且忍，得耐且耐，
须用时，叫功名定在。
此签几多有进，退则吉也。`
    },
    {
        title: "下下",
        content: `子宫
临风冒雨去还归，役役劳身似燕儿；
衔得泥来若作垒，到头垒坏复成泥。

解曰：千般百计，晨昏不爽，
谁心此事，劳心到底。
此签燕子衔泥之象，万事芝心费力也。`
    },
    {
        title: "中平",
        content: `子丑宫
千年古镜复重圆，女再求夫男再婚；
自此门庭多改换，更添福禄共子孙。

解曰：五五二五，骑龙跨凤，
须事劳心，于中有补。
此签古镜重圆之象，万事有贵人也。`
    },
    {
        title: "中平",
        content: `子宫
一锄凿地要求泉，努力求之得最难；
无意俄然遇知己，相逢携手上青天。

解曰：欲求心事，西方可求，
不论灾讼，立地可谋。
此签掘地求泉之象，万事劳心有益也。`
    },
    {
        title: "中平",
        content: `丑宫
报君岩下铜鸟居，须是还他大丈夫；
舍得金宝谁可得，通行天下此人无。

解曰：会用无富，身清岂贫，
待时乐利，相与哲人。
此签报岩铜鸟之象，凡事宜真乃吉也。`
    },
    {
        title: "下下",
        content: `丑宫
奔波阻隔重重险，带水拖泥又渡山；
更望他乡求用事，千山万水未回还。

解曰：退身可得，进步难为，
只可守旧，莫望高位。
此签带水拖泥之象，万事守旧则吉也。`
    },
    {
        title: "上上",
        content: `丑宫
茂林松柏正兴旺，雨雪风霜总不摧；
异日自然成大用，功名作个栋梁材。

解曰：路有亨通，终身有功，
田蚕丰熟，谷稻兴隆。
此签茂林松柏之象，万事有贵气也。`
    },
    {
        title: "上上",
        content: `丑宫
愿君勿问心中事，此意偏宜说向公；
一片明心清皎月，恰如晧月正当中。

解曰：平心正直，理顺则宽，
圣无私语，终有分明。
此签晧月当空之象，万事光明通达。`
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
