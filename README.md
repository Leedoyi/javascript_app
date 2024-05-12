## 📱플레이 자바스크립트
다양한 자바스크립트 게임과 기능을 담은 웹 :smile:

## ⏳프로젝트 기간 
2024.04

## 🛠️스킬 스택 
<div style="display:flex; flex-direction:column; align-items:flex-start;">
    <p><strong>Frontend</strong></p>
    <div>
        <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white">
        <img src="https://img.shields.io/badge/canvas-00C4CC?style=flat-square&logo=canvas&logoColor=white"> 
        <img src="https://img.shields.io/badge/netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white"> 
    </div><br/>
</div>

## 💡기능 구현 
* **로컬 스토리지를 활용한 로그인 및 할 일 목록(to-do list) 기능,날씨 API를 통한 현재 온도 및 날씨 정보 출력**
* **자바스크립트로 구현한 다양한 게임 기능(지뢰 찾기, 브레이크 아웃, 카드 매치 게임 )**
  * **지뢰 찾기**
    * 큐(queue)를 사용하여 주변 셀을 효율적으로 탐색, 이를 통해 사용자가 불필요하게 여러 번 클릭하지 않아도 돼 게임 플레이를 더욱 원활하게 만듦
    * 클릭 이벤트 최적화: 사용자가 지뢰가 아닌 셀을 클릭했을 때, 해당 셀 주변의 안전한 셀들이 자동으로 열리는 기능을 구현
    * 사용자 피드백 메커니즘: 사용자가 지뢰일 것 같은 셀에 대해 오른쪽 마우스 클릭을 통해 지뢰 예상 셀을 표시하는 기능
  * **브레이크 아웃**
    * <canvas> 요소 사용, 캔버스의 2D 그래픽 컨텍스트를 이용해 공, 패들, 블록 등의 요소를 그리는 함수들을 작성
    * 키보드 입력 최적화: 사용자가 키보드 입력을 통해 패들을 원활하게 제어할 수 있도록, 입력 지연(delay)을 최소화하는 로직으로 구현
  * **카드 매치**
    * Fisher-Yates 알고리즘을 사용한 카드 셔플링
    * Fisher-Yates 알고리즘 모든 순열이 등장할 확률이 동일하게 만듦으로써 공정성을 제공하고 선형 시간 복잡도(O(n))를 가지고 있어서, 배열의 크기와 상관없이 효율성이 좋다는 장점을 가지고 있음


## 📌트러블 슈팅
* **지뢰 찾기**
  * 문제 : 모서리 셀 이웃 지뢰 개수 표시 오류(측면이 이어져 있는 것으로 인식)
  * 원인 : 이웃 주변 지뢰 개수를 표시할 때 현재 셀의 위치를 고려하지 않고 표시하고 있었음
  * 해결 : 모서리를 넘어가는 인접 셀을 지뢰 개수를 세는 로직에서 제외

  * 문제 : 지뢰가 아닌 셀을 모두 클릭해도 게임 성공 알림 창이 안 뜸
  * 원인 : 지금까지 클릭한 셀의 개수가 축적되는 것이 아니라 사용자가 셀을 클릭할 때마다 업데이트되고 있었음
  * 해결 : 지금까지 클릭한 셀 개수를 로컬 변수 대신 전역 변수를 사용하여 셀의 총개수를 추적하는 방식으로 로직을 수정하고 게임 오버 시 리셋되는 방식으로 바꿈

## 📌시연영상 
 1. **다크모드** 
<p align="left">
  <img src="https://github.com/doyi0107/starting_plant/assets/93458143/cf7a5c3f-f104-48c8-a126-e32fe5eccfa8" width="700" height="400">
</p>

 2. **지뢰 찾기**
<p align="left">
  <img src="https://github.com/doyi0107/starting_plant/assets/93458143/a3edcf28-3d55-4d02-94c5-f8ec2c03fba5" width="700" height="400">
</p>

 3. **브레이크 아웃**
<p align="left">
  <img src="https://github.com/doyi0107/starting_plant/assets/93458143/2288541a-0a06-4013-8474-874b55334273" width="700" height="400">
</p>

 4. **카드매치**
<p align="left">
  <img src="https://github.com/doyi0107/starting_plant/assets/93458143/f237d2aa-d9bd-4415-9a6a-f58a88455bc4" width="700" height="400">
</p>







