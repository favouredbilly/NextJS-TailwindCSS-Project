import Head from "next/head";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-black"
      style={{
        "background-image":
          "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/Bili.jpg)",
      }}
    >
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
        <h1 className="text-5xl font-bold text-white max-w-lg">
          Unlimited movies, TV show, and more{" "}
        </h1>
        <h2 className="text-2xl text-white mt-4 mb-8">
          Watch anywhere. Cancel anytime{" "}
        </h2>
        <p className="text-2xl text-white">
          Ready to watch? Enter your email to create your membership{" "}
        </p>
        <div className="flex mt-4">
          <input
            placeholder="Email address"
            className="bg-white pd-4 min-w-[300px]"
          />
          <button className="bg-red-500 text-white text-lg px-5">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
