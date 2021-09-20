import { Repeat, ToNumber } from "./TupleToLiteral"

type Add<A extends number, B extends number> = [
  ...Repeat<any, A>,
  ...Repeat<any, B>
][`length`]

type add1 = Add<10, 3> // 13

type preSub<A extends any[], B extends any[]> = A extends [...B, ...infer R]
  ? R
  : never

type Sub<A extends number, B extends number> = ToNumber<
  preSub<Repeat<any, A>, Repeat<any, B>>
>

type sub1 = Sub<10, 3> // 7
