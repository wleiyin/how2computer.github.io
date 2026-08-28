/* MacOS 操作系统 */
const guides = {
    wifi: {
        title: "Wi-Fi教程",
        steps: [
            "找到桌面右上角的网络图标。",
            "用鼠标点击。",
            "在表里找出我们家的 Wi-Fi 名称，点击它。CCM开头的",
            "点击连接。",
            "输入 Wi-Fi 密码，然后按回车键 （return）。"
        ]
    },
    photo: {
        title: "照片教程",
        steps: [
            "哎呀，用中文简直太麻烦了。还不如用英文呢。希望你还在做 Duolingo!",
            "Find the apps button in the lower left corner. Click it.",
            "Use the keyboard and search Photo Booth",
            "Click the red circle button on the bottom of the screen.",
            "Once you take a photo, click the upload button on the bottom right corner.",
            "Press upload to photos. You have finished 照片教程。"
        ]
    },
    zoom: {
        title: "如何放大",
        steps: [
            "Put two fingers on the Apple haptic touchpad.",
            "Put the two fingers together, then slowly widen them.",
            "If you want to zoom in, do the opposite."
        ]
    },
    volume: {
        title: "电脑声音教程",
        steps: [
            "找到放大 logo (F12)",
            "用手点击 logo",
            "如果想要把声音静音，按 F10 键。",
            "要是想把声音放小， 按 F11 键。"
        ]
    }
};

function showGuide(guideKey) {
    const displayCard = document.getElementById('guide-display');
    const titleElem = document.getElementById('guide-title');
    const stepsElem = document.getElementById('guide-steps');

    const selectedGuide = guides[guideKey];

    if (selectedGuide) {
        titleElem.textContent = selectedGuide.title;

        stepsElem.innerHTML = '';

        selectedGuide.steps.forEach(stepText => {
            const li = document.createElement('li');
            li.textContent = stepText;
            stepsElem.appendChild(li);
        });

        
        displayCard.classList.remove('hidden');
    }
}
