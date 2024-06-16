"use client"
import React from 'react'
import Image from "next/image";
import styles from "./page.module.css";
import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";
import HomeSlider from '@/components/HomeSlider/HomeSlider';



export default function Home() {
  return (
    <main className={styles.main}>
      <HomeSlider/>
      <MovieCarousel/>

    </main>
  );
}
