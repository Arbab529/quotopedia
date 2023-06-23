import Feed from '@components/Feed';

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <div className="orange_gradient text-center">
          Interesting Quotes
        </div>
      </h1>
      <p className="desc text-center">Quotopedia is an open-source quote providing tool for modern world to discover, create and share creative quotes</p>

      {/* Feed */}
      <Feed />
    </section>
  )
}
