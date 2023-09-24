import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header";
import { Button, ButtonGroup } from "@chakra-ui/react";
import CallToActionWithIllustration from "@/components/HomePage";
import Navigation from "@/components/homePage/Navigation";
// import LargeWithAppLinksAndSocial from "@/components/homePage/Footer";
import LargeWithLogoLeft from "@/components/homePage/Footer";

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
      {/* <main className={`${styles.main} ${inter.className}`}>
        <h1>Hello</h1>
      </main> */}
      <main>
        <Navigation />
        <CallToActionWithIllustration />
        <LargeWithLogoLeft />
      </main>
    </>
  );
}
