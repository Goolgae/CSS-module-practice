# CSS Module

> 사용하는곳

- 레거시 프로젝트에 리액트를 도입 할 때
- CSS 클래스 네이밍 규칙 만들기 귀찮을때

CRA를 사용한 프로젝트에서는 `.module.css`로 끝내면 된다.

- 불러올때

```js
import styles from "./{name}.module.css"
```

이렇게 할시 고유화가 된다고 한다.