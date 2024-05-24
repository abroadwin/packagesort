import sort from "./sort.ts";
import { expect, test } from 'vitest'

test('Packages with dimensions less than 150cm and mass less than 20kg are classified as standard', () => {
  expect(sort(149, 10, 10, 19)).toEqual("STANDARD")
  expect(sort(10, 149, 10, 19)).toEqual("STANDARD")
  expect(sort(10, 10, 149, 19)).toEqual("STANDARD")
})

test('Packages with a volume equal to 1,000,000cm3 are classified as special', () => {
  expect(sort(100, 100, 100, 10)).toEqual("SPECIAL")
})

test('Packages with a volume greater than 1,000,000cm3 are classified as special', () => {
  expect(sort(110, 110, 110, 10)).toEqual("SPECIAL")
})

test('Packages with a dimension equal to 150cm are classified as special', () => {
  expect(sort(150, 10, 10, 10)).toEqual("SPECIAL")
  expect(sort(10, 150, 10, 10)).toEqual("SPECIAL")
  expect(sort(10, 10, 150, 10)).toEqual("SPECIAL")
})

test('Packages with a dimension greater than 150cm are classified as special', () => {
  expect(sort(151, 10, 10, 10)).toEqual("SPECIAL")
  expect(sort(10, 151, 10, 10)).toEqual("SPECIAL")
  expect(sort(10, 10, 151, 10)).toEqual("SPECIAL")
})

test('Packages with a mass equal to 20kg as special', () => {
  expect(sort(10, 10, 10, 20)).toEqual("SPECIAL")
})

test('Packages with a mass greater than 20kg as special', () => {
  expect(sort(10, 10, 10, 21)).toEqual("SPECIAL")
})

test('Packages with a mass greater than 20kg and a dimension equal to 150cm are rejected', () => {
  expect(sort(150, 10, 10, 21)).toEqual("REJECTED")
  expect(sort(10, 150, 10, 21)).toEqual("REJECTED")
  expect(sort(10, 10, 150, 21)).toEqual("REJECTED")
})

test('Packages with a mass greater than 20kg and a volume greater than 1,000,000cm3 are rejected', () => {
  expect(sort(100, 100, 110, 21)).toEqual("REJECTED")
})