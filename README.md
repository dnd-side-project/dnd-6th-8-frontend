# DND - 6๊ธฐ 8์กฐ Front-End

์ฐธ๊ณ  : [Back-End Repo](https://github.com/dnd-side-project/dnd-6th-8-backend)

## ๐ ์ฌํ ์์นด์ด๋น ํ๋ซํผ ๊ฐ๋ฐ

### ๐ป Front-End Team mate

| [<img src="https://avatars.githubusercontent.com/u/52497708?v=4" width="100">](https://github.com/wish0ne)| [<img src="https://avatars.githubusercontent.com/u/63600953?v=4" width="100">](https://github.com/colo1211) | 
| :-----------------------------------: | :---------------------------------------: |
|[์ฅ์์](https://github.com/wish0ne)|[๊น๊ฒฝ์](https://github.com/colo1211)|

### ๐ป Skill Stack

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
- Google Login API
- Kakao Login API

**State ๊ด๋ฆฌ ํด**

- Redux
- Redux Saga (๋ณด๋ฅ)
- react-redux
- redux-devtools-extension

**Request Library**

- Axios

**Styling**

- SCSS (SASS)
- react-icons

### ๐ป Git Convention

---

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmJ7X1%2FbtqNIFmYqnq%2FA5umcZufzgkAKeepJVTpm0%2Ftfile.svg)

#### 1. main(master) branch <br>

: ๋ฐฐํฌ๋ฅผ ์ํ branch

#### 2. develop branch <br>

- feature ๋ค์ ๊ฐ๋ฐํ ์ดํ PR ์์ฒญ ์ดํ merge ๋๋ฉด ๋ค์ branch์์ pull์ ๋ฐ๊ธฐ ์ํ branch
- ํญ์ develop branch ๋ ์ต์  ๋ฒ์ ์ผ๋ก ์ ์ง

#### 3. feature(feat) branch <br>

: ํ๋์ ๊ธฐ๋ฅ์ ๊ฐ๋ฐํ๊ธฐ ์ํ branch

`feature/number` ์ ๋ง๋ค๊ธฐ ์ํ ๋ฐฉ๋ฒ : `issue๋ฅผ ํ์ฉ`

---

### ๐ป feature issue Number ์์ฑ ๋ฐฉ๋ฒ

1. ๊ธฐ๋ฅ ๊ฐ๋ฐ์ ํ๊ธฐ ์ํด์ issue ํ์ด์ง๋ก ์์ฅ.

![image](https://user-images.githubusercontent.com/63600953/150306502-269ab5b1-f1b8-4855-9aca-1bd8af06f648.png)

2. ๊ธฐ๋ฅ ๊ฐ๋ฐ์ ์ํด์ ์ด์๋ฅผ ๋ง๋ ๋ค.
   ์์ฑ ์ฌํญ
   1. ์ด์ ์ ๋ชฉ
   2. ์ด์ ๋ด์ฉ
   3. ์ด์ ๋ผ๋ฒจ (๊ฐ๋ฐ ์ค์ผ๋๋ `in progress`)

![image](https://user-images.githubusercontent.com/63600953/150307156-22a055fd-95f0-40bd-aff8-c7eea9782b6f.png)

3. ์๋์ผ๋ก ์์ฑ๋๋ issue ๋ฒํธ์ ๋ง๊ฒ๋ ์๋ก์ด ๋ธ๋์น๋ฅผ ์์ฑํ๊ณ  ๊ทธ ๋ธ๋์น ๋ด์์ ๊ธฐ๋ฅ์ ๊ฐ๋ฐ.

![image](https://user-images.githubusercontent.com/63600953/150307644-e4023fbe-ffd7-4107-8ffd-8efde15693cc.png)

- ์ด์ ๋๋ฒ์ ๋ง๊ฒ ๋ธ๋์น ์์ฑ

```
> git branch feature/1
```

- ๊ธฐ๋ฅ ๊ฐ๋ฐ (์ฝ๋ ์์ฑ) ์ดํ, ์ปค๋ฐ ๋ฉ์ธ์ง

```
> git add .
> git commit -m "feature: ์ด์ ํ์คํธ๋ฅผ ์ํ ํ์คํธ(#1)"
> git push origin feature/1
```

- ์ปค๋ฐ ๋ง์ง๋ง์ (# ์ด์๋ฒํธ)

### ๐ป ์ปค๋ฐ๋ฉ์์ง

---
| ํ์ | ์ค๋ช                                 |
| --------- | ------------------------------------ |
| feat | ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ (์ค์ํ ๊ธฐ๋ฅ ๊ฐ๋ฐ ํ  ๋ ๋ง๋ค) |
| chore | ๋น๋ ์๋ฌด ์์ , ํจํค์ง ๋งค๋์  ์์  (์ก๋คํ ๊ฒ, ์๋ฏธ์๋ ๊ฒ..?) |
| fix | ๋ฒ๊ทธ ์์  |
| style | ์ฝ๋ ํฌ๋งทํ, ์ธ๋ฏธ์ฝ๋ก  ๋๋ฝ, ์ฝ๋ ๋ณ๊ฒฝ์ด ์๋ ๊ฒฝ์ฐ |
| refactor | ์ฝ๋ ๋ฆฌํฉํ ๋ง |
| design | css๋ฑ UI ๋ณ๊ฒฝ  |
| comment | ์ฃผ์ ์ถ๊ฐ, ๋ณ๊ฒฝ|
| docs | ๋ฌธ์ ์์  ex) README.md |
| test | ํ์คํธ ์ถ๊ฐ |
| rename | ํ์ผ or ํด๋๋ช ์์ ํ๊ฑฐ๋ ์ฎ๊ธฐ๋ ์์๋ง ์ํํ  ๊ฒฝ์ฐ |
| remove | ํ์ผ ์ญ์ ๋ง ์ํ |

### ๐ป React Code Rule

---

- `.tsx` : ์ปดํฌ๋ํธ๋ฅผ ์์ฑํ๋ค๋ฉด, .tsx๋ก ํ์ผ ํ์ฅ์ ๋ช์ ์์ฑํ๋ค.
- `.ts` : ํ์์คํฌ๋ฆฝํธ๋ฅผ ํ์ฉํ ๋ก์ง๋ง์ ์ํ ํ์ผ์ด๋ผ๋ฉด .ts๋ก ํ์ผ ํ์ฅ์ ๋ช์ ์์ฑํ๋ค.

### ๐ป ํด๋ ๊ตฌ์กฐ

---
