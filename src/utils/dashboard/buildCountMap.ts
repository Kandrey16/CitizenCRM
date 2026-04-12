export function buildCountMap(items: string[]) {
  return items.reduce<Map<string, number>>((acc, item) => {
    acc.set(item, (acc.get(item) ?? 0) + 1)
    return acc
  }, new Map())
}
