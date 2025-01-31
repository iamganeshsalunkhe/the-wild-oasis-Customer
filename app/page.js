import Image from "next/image";
import Link from "next/link";
import bg from '@/Public/bg.png';

export default function Home() {
  return (
    <main className="mt-24">
      <Image src={bg} fill className="object-cover object-top"  alt="Mountains and forests with two cabins" />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 rounded-xl text-primary-800 text-lg font-bold hover:bg-accent-700 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
