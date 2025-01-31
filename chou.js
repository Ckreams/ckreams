// 抽签数据
const lotteries = [ /* 这里放置之前生成的109个签数据 */ ];

// DOM元素引用
const drawBtn = document.querySelector('.draw-btn');
const resultBox = document.querySelector('.result-box');
const resultTitle = document.getElementById('resultTitle');
const resultContent = document.getElementById('resultContent');

// 事件监听（现代事件绑定方式）
drawBtn.addEventListener('click', drawLottery);
document.querySelector('.confirm-btn').addEventListener('click', closeResult);

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