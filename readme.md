Knex.js Migrations & Seeds

###This repository provides a simple example of how to structure Knex.js migration and seed files for a PostgreSQL database based on the following ERD:

```

┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│    trails    │       │    trail     │       │    runners   │
│              │       │  conditions  │       │              │
│──────────────│       │──────────────│       │──────────────│
│ id           │       │ id           │       │ id           │
│ name         │       │ trail_id     │       │ first_name   │
│ length       │      ╱│ user_id      │╲      │ last_name    │
│ elev_gain    │───────│ condition    │───────│              │
│              │      ╲│ creation_date│╱      │              │
└──────────────┘       └──────────────┘       └──────────────┘

```
