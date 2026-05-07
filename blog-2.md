# When and How to Use Generics in TypeScript

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

## Conclusion

That's it. One generic type, works with anything. If the shape changes, we only update it in one place and everything typed automatically.