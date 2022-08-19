# DND - 6기 8조 Front-End

참고 : [Back-End Repo](https://github.com/dnd-side-project/dnd-6th-8-backend)

## 🚅 여행 아카이빙 플랫폼 개발

### 💻 Front-End Team mate

| [<img src="https://avatars.githubusercontent.com/u/52497708?v=4" width="100">](https://github.com/wish0ne)| [<img src="https://avatars.githubusercontent.com/u/63600953?v=4" width="100">](https://github.com/colo1211) | 
| :-----------------------------------: | :---------------------------------------: |
|[장소원](https://github.com/wish0ne)|[김경원](https://github.com/colo1211)|

### 💻 Skill Stack

---

**IDE**

- VSC

**Framework**

- React (Functional Component), Typescript
- React Hooks

**Routing**

- React-router-dom

**Social Login**

- Naver Login API
- Kakao Login API

**State 관리 툴**

- Redux
- MiddleWare : Redux-Thunk
- react-redux
- redux-devtools-extension
- redux-persist : for refresh-issue

**Request Library**

- Axios

**Styling**

- SCSS (SASS)
- react-icons

### 💻 Git Convention

---

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmJ7X1%2FbtqNIFmYqnq%2FA5umcZufzgkAKeepJVTpm0%2Ftfile.svg)

#### 1. main(master) branch <br>

: 배포를 위한 branch

#### 2. develop branch <br>

- feature 들을 개발한 이후 PR 요청 이후 merge 되면 다음 branch에서 pull을 받기 위한 branch
- 항상 develop branch 는 최신 버전으로 유지

#### 3. feature(feat) branch <br>

: 하나의 기능을 개발하기 위한 branch

`feature/number` 을 만들기 위한 방법 : `issue를 활용`

---

### 💻 feature issue Number 생성 방법

1. 기능 개발을 하기 위해서 issue 페이지로 입장.

![image](https://user-images.githubusercontent.com/63600953/150306502-269ab5b1-f1b8-4855-9aca-1bd8af06f648.png)

2. 기능 개발을 위해서 이슈를 만든다.
   작성 사항
   1. 이슈 제목
   2. 이슈 내용
   3. 이슈 라벨 (개발 중일때는 `in progress`)

![image](https://user-images.githubusercontent.com/63600953/150307156-22a055fd-95f0-40bd-aff8-c7eea9782b6f.png)

3. 자동으로 생성되는 issue 번호에 맞게끔 새로운 브랜치를 생성하고 그 브랜치 내에서 기능을 개발.

![image](https://user-images.githubusercontent.com/63600953/150307644-e4023fbe-ffd7-4107-8ffd-8efde15693cc.png)

- 이슈 넘버에 맞게 브랜치 생성

```
> git branch feature/1
```

- 기능 개발 (코드 작성) 이후, 커밋 메세지

```
> git add .
> git commit -m "feature: 이슈 테스트를 위한 테스트(#1)"
> git push origin feature/1
```

- 커밋 마지막에 (# 이슈번호)

### 💻 커밋메시지

---
| 타입 | 설명                                 |
| --------- | ------------------------------------ |
| feat | 새로운 기능 추가 (중요한 기능 개발 할 때 마다) |
| chore | 빌드 업무 수정, 패키지 매니저 수정 (잡다한 것, 의미없는 것..?) |
| fix | 버그 수정 |
| style | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 |
| refactor | 코드 리팩토링 |
| design | css등 UI 변경  |
| comment | 주석 추가, 변경|
| docs | 문서 수정 ex) README.md |
| test | 테스트 추가 |
| rename | 파일 or 폴더명 수정하거나 옮기는 작업만 수행할 경우 |
| remove | 파일 삭제만 수행 |
