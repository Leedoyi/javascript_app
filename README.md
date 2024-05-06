## 📱플레이 자바스크립트
다양한 자바스크립트 게임과 기능을 담은 웹 :smile:

## ⏳프로젝트 기간 
2024.04 ~ 

## 🛠️스킬 스택 
<div style="display:flex; flex-direction:column; align-items:flex-start;">
    <p><strong>Frontend</strong></p>
    <div>
        <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white">
        <img src="https://img.shields.io/badge/canvas-00C4CC?style=flat-square&logo=canvas&logoColor=white"> 
        <img src="https://img.shields.io/badge/netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white"> 
    </div><br/>
</div>

## 💡핵심 기능
<div style="display:flex; flex-direction:column; align-items:flex-start;">
    <p>✅로컬 스토리지를 활용한 로그인 및 할 일 목록(to-do list) 기능,날씨 API를 통한 현재 온도 및 날씨 정보 출력</p>
    <p>✅자바스크립트로 구현한 다양한 게임 기능(지뢰 찾기, 브레이크 아웃, 카드 매치 게임 )</p>
    <p>✅다크 모드 가능 </p>
</div>

## 💡성능 개선 및 상세 구현 내용  
<div style="display:flex; flex-direction:column; align-items:flex-start;">
    <p>✔️지뢰 찾기 </p>
    <p>→  큐(queue)를 사용하여 주변 셀을 효율적으로 탐색, 이를 통해 사용자가 불필요하게 여러 번 클릭하지 않아도 돼 게임 플레이를 더욱 원활하게 만듦</p>
    <p>→ 클릭 이벤트 최적화: 사용자가 지뢰가 아닌 셀을 클릭했을 때, 해당 셀 주변의 안전한 셀들이 자동으로 열리는 기능을 구현</p>
    <p>→ 사용자 피드백 메커니즘: 사용자가 지뢰일 것 같은 셀에 대해 오른쪽 마우스 클릭을 통해 지뢰 예상 셀을 표시하는 기능</p>
    <p>✔️브레이크 아웃 </p>
    <p>→ &lt;canvas&gt; 요소 사용, 캔버스의 2D 그래픽 컨텍스트를 이용해 공, 패들, 블록 등의 요소를 그리는 함수들을 작성</p>
    <p>→ 키보드 입력 최적화: 사용자가 키보드 입력을 통해 패들을 원활하게 제어할 수 있도록, 입력 지연(delay)을 최소화하는 로직으로 구현 </p>
    <p>→ 공과 블록 간의 충돌을 감지하고 처리</p>
    <p>✔️카드 매치 게임  </p>
    <p>→ Fisher-Yates 알고리즘을 사용한 카드 셔플링</p>
    <p>→ Fisher-Yates 알고리즘 모든 순열이 등장할 확률이 동일하게 만듦으로써 공정성을 제공하고 선형 시간 복잡도(O(n))를 가지고 있어서, 배열의 크기와 상관없이 효율성이 좋다는 장점을 가지고 있음</p>
    <p>✔️다크 모드 지원  </p>
    <p>→ input 요소의 type = checkbox를 이용해 라이트 모드와 다크 모드 구분 </p>
    <p>→ localStorage를 사용하여 사용자의 모드 선택을 저장</p>
    <p>→ 다크 모드를 지원함으로써 사용자의 시력을 보호하고 전력 소모를 줄임 </p>
</div>




