// タプル型から T[`length`] でリテラル型を簡単に取り出せる
type tuple = [any, any]
type len = tuple[`length`] // リテラル型の 2

// Repeat型(リテラル型 -> タプル型)
type Repeater<T, N extends number, R extends T[]> = R[`length`] extends N
  ? R
  : Repeater<T, N, [T, ...R]>

type Repeat<T, N extends number> = Repeater<T, N, []>

type ahoArray = Repeat<`aho`, 2> // [`aho`, `aho`]

// タプル -> リテラル
type ToNumber<T extends any[]> = T["length"]

type num = ToNumber<[1, 2, 3]> // 3
