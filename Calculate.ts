import { Repeat } from "./TupleToLiteral"

export type Add<A extends number, B extends number> = [
  ...Repeat<any, A>,
  ...Repeat<any, B>
][`length`]

type add1 = Add<10, 3> // 13

export type Sub<A extends number, B extends number> = Repeat<any, A> extends [
  ...Repeat<any, B>,
  ...infer R
]
  ? R[`length`]
  : never

type sub1 = Sub<10, 3> // 7

export type Mul<A extends number, B extends number> = A extends 0
  ? 0
  : B extends 0
  ? 0
  : B extends 1
  ? A
  : Add<Mul<A, Sub<B, 1>>, A>

type mul1 = Mul<20, 3> // 60

export type Div<A extends number, B extends number> = A extends 0
  ? 0
  : B extends 0
  ? never
  : Sub<A, B> extends never
  ? 0
  : Add<1, Div<Sub<A, B> extends never ? 0 : Sub<A, B>, B>>

type div1 = Div<12, 3> // 4

export type Mod<A extends number, B extends number> = Sub<A, B> extends never
  ? A
  : Mod<Sub<A, B>, B>

type mod1 = Mod<11, 3> // 2
