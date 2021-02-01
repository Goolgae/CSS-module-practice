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

> 그리고 CRA에는 이미 들어있기 때문에 따로 무언가를 다운 받을 필요가 없다!

scss도 마찬가지로 사용할 수 있다.

고유화를 시키고 싶지 않다면 :global을 붙인다. (sass도 마찬가지)

:local 과 같은듯 하다.