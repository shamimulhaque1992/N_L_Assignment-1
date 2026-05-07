# When and How to Use Pick and Omit in TypeScript

## Introduction
`Pick` and `Omit` are TypeScript utility types that let us create a new type from an existing one by either keeping only the fields we want or removing the ones we don't need.

Let say I spent some time to make a type or interface now i want a similar type or interface in other place, what should i do? Recreate similar looking type or interface again? We could do that but it will hamper our productivity. Here in this case we can use `Pick` and `Omit` and stopped doing that.

---

## Start with one interface

```typescript
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};
```

---

## Pick — when you want a few fields

```typescript
type LoginForm = Pick<User, "email" | "password">;
```

---

## Omit — when you want to remove a few fields

```typescript
type PublicUser = Omit<User, "password">;
```

---

## Conclusion
That's it. One interface/type, zero copy-paste. If `User` changes, everything updates automatically.