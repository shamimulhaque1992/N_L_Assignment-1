# When and How to Use Generics in TypeScript

**Question: How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?**

## Introduction
Generics is a way to write reusable types in TypeScript that can handle any type instead of being fixed to just one, like `number` or `string`.

Let say I have a function and i want that to returns whatever I pass in. Now I want it to work with numbers, strings, objects — everything. Here in this case we can use `Generics`.

---

## Without Generics

```typescript
function getItem(item: number): number {
  return item;
}
```

This only works with numbers. Not reusable at all.

---

## With Generics

```typescript
function getItem<T>(item: T): T {
  return item;
}

getItem(42);
getItem("hello");
getItem({ id: 1, name: "Kashfee" });
```

`T` is just a placeholder. TypeScript figures out the type automatically.

---

## Strictly typed, no matter what you pass in

Even though `T` accepts anything, TypeScript still knows the exact type at the time we call the function. So if we pass a `string`, the return type is `string` — not `any`. We get full type safety and autocompletion without writing separate functions for each type.

---

## Conclusion
That's it. One generic type, works with anything. If the shape changes, we only update it in one place and everything typed automatically.