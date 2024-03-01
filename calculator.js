function calculate() {
    // 각 화폐 단위별 갯수를 가져옴
    const amount50k = parseInt(document.getElementById("amount50k").value, 10);
    const amount10k = parseInt(document.getElementById("amount10k").value, 10);
    const amount5k = parseInt(document.getElementById("amount5k").value, 10);
    const amount1k = parseInt(document.getElementById("amount1k").value, 10);
    const amount500 = parseInt(document.getElementById("amount500").value, 10);

    // 화폐 단위값을 가져옴 (이 예시에서는 이미 값이 화폐 단위에 따라 설정되어 있음)
    const value50k = 50000;
    const value10k = 10000;
    const value5k = 5000;
    const value1k = 1000;
    const value500 = 500;

    // 총액을 계산
    const total = (amount50k * value50k) + (amount10k * value10k) + (amount5k * value5k) + 
                   (amount1k * value1k) + (amount500 * value500);

    // 결과를 표시
    document.getElementById("result").innerText = `총액은 ${total}원입니다.`;
}
