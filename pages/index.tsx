import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Card from "../components/common/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full min-h-screen bg-black text-center text-white">
        <div className="text-7xl pt-20">one-three</div>
        <div className="opacity-50">thirteen three.js experiments</div>

        <div className="w-full max-w-7xl m-auto grid grid-cols-1 lg:grid-cols-2 p-8 gap-8">
          <Card title="one" />
          <Card title="two" />
          <Card title="three" />
          <Card title="four" />
          <Card title="five" />
          <Card title="six" />
          <Card title="seven" />
          <Card title="eight" />
          <Card title="nine" />
          <Card title="ten" />
          <Card title="eleven" />
          <Card title="twelve" />
          <Card title="thirteen" />
        </div>
      </main>
    </>
  );
}
