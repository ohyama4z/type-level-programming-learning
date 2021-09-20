// タプル型から T[`length`] でリテラル型を簡単に取り出せる
type tuple = [any, any]
type len = tuple[`length`] // リテラル型の 2

// Repeat型(リテラル型 -> タプル型)
type Repeater<T, N extends number, R extends T[]> = R[`length`] extends N
  ? R
  : Repeater<T, N, [T, ...R]>

export type Repeat<T, N extends number> = Repeater<T, N, []>

type ahoArray = Repeat<`aho`, 2> // [`aho`, `aho`]

// タプル -> リテラル
export type ToNumber<T extends any[]> = T[`length`]

type num = ToNumber<[1, 2, 3]> // 3

// numberからリテラル型を生成
export type NumberToLiteral<T extends number> = ToNumber<Repeat<any, T>>

type num2 = NumberToLiteral<10>
