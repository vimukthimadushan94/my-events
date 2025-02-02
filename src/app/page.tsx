import Image from "next/image";

export default async function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/background.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Dark Overlay */}
      </div>
      <main className="relative z-10 text-center px-6 sm:px-12">
        <h1 className="text-4xl sm:text-6xl font-bold drop-shadow-lg">
          Welcome to Eventtifi
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-lg mx-auto drop-shadow">
          Manage and plan your daily events with ease.
        </p>
        <button className="mt-6 px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg transition-all">
          Get Started
        </button>
      </main>
    </div>
  );
}
