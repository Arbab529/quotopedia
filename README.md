## Data Fetching

- SSR (Server Side Rendering)
  - {cache:'no-store'} //do not cache data always refetch
- SSG (Static Site Generation)
  - By default NextJS is SSG
- ISG (Incremental Static Generation)
  - {next: {revalidate: 10}} //cache data and after 10sec refetch fresh data
