import {
  mysqlTable,
  serial,
  varchar,
  int,
  uniqueIndex,
  index,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
});

export const quotes = mysqlTable(
  "quotes",
  {
    id: int("id").autoincrement().primaryKey().notNull(),
    quote: varchar("quote", { length: 255 }).notNull(),
    authorId: int("author_id").notNull(),
    categoryId: int("category_id").notNull(),
  },
  (table) => {
    return {
      quote: uniqueIndex("quote").on(table.quote),
      authorIdIdx: index("author_id_idx").on(table.authorId),
      categoryIdIdx: index("category_id_idx").on(table.categoryId),
    };
  }
);
