import { Sub, Mod } from "./Calculate"

type FizzBuzz<T extends number> = Mod<T, 15> extends 0
  ? `FizzBuzz`
  : Mod<T, 5> extends 0
  ? `Buzz`
  : Mod<T, 3> extends 0
  ? `Fizz`
  : T

type fizzbuzz1 = FizzBuzz<30> // "FizzBuzz"

type Range<T extends number> = T extends 0 ? [] : [...Range<Sub<T, 1>>, T]

type range10 = Range<10>

type FizzBuzzList<T extends number> = T extends 0
  ? []
  : [...FizzBuzzList<Sub<T, 1>>, FizzBuzz<T>]

type fizzBuzzList1 = FizzBuzzList<22>
