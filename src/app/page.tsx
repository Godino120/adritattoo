export default function Home() {
  return (
    <div className="grid items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center">
        <section className="bg-[url('/images/main.webp')] bg-cover bg-center w-screen h-screen flex flex-col items-center justify-center text-white ">
          <h1 className="font-[Grenze_Gotisch] font-bold text-8xl text-center sm:text-left">
            Welcome to Adri Tattoo
          </h1>
          <p className="mt-4 text-2xl text-center sm:text-left font-[Tagesschrift]">
            Explore our latest tattoo designs and get inspired for your next piece of art.
          </p>
        </section>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
        
      </footer>
    </div>
  );
}
