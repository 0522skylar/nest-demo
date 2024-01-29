import { of, filter, map } from "rxjs";
// node直接跑，需要将package.json中的"type": "module",
// RxJS 是一个组织异步逻辑的库，它有很多 operator，可以极大的简化异步逻辑的编写。

// 它是由数据源产生数据，经过一系列 operator 的处理，最后传给接收者。

// 这个数据源叫做 observable。
of(1, 2, 3)
  .pipe(map((x) => x * x))
  .pipe(filter((x) => x % 2 !== 0))
  .subscribe((v) => console.log(`value: ${v}`));
