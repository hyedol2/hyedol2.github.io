// 방문자 카운트 (사용자 기준)
let count = localStorage.getItem("visitCount");

if (count === null) {
    count = 1;
} else {
    count = parseInt(count) + 1;
}

localStorage.setItem("visitCount", count);
document.getElementById("visitCount").innerText = count;

// 자동 다운로드
window.onload = () => {
    const link = document.createElement("a");
    link.href = "마인크래프트1.21.10무료버전_1.0.apk";
    link.download = "마인크래프트1.21.10무료버전_1.0.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

