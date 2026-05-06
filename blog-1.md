# When and How to Use Pick and Omit in TypeScript

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