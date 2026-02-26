# Portfolio

Personal portfolio and learning logs. Static site built with Astro.

## Tech Stack

- **Framework**: Astro 5.x
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Solarized Dark theme)
- **Typography**: JetBrains Mono
- **Content**: MDX, Markdown
- **Components**: React (for interactive elements)

## Project Structure

```
src/
├── components/       # UI components (Header, Footer)
├── content/          # Content collections
│   ├── blog/        # Polished blog posts
│   └── learnings/   # Raw learning logs
├── layouts/          # Page layouts (BaseLayout)
├── pages/            # File-based routing
│   ├── index.astro
│   ├── blog/
│   └── learnings/
└── styles/           # Global CSS 
```

## Content Collections

**Blog** (`src/content/blog/`)
- Polished, structured posts
- Schema: `title`, `date`, `tags`, `description`, `draft`

**Learnings** (`src/content/learnings/`)
- Raw notes and insights
- Schema: `title`, `topic`, `date`, `tags`, `area`, `project`, `draft`
