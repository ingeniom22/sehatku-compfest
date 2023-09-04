import React from "react";
import Image from "next/image";
import Techs from "./Techs";
import langchain from "/public/img/Langchain.png";
import meta from "/public/img/meta.png";
import fastapi from "/public/img/fastapi.png";
import nextjs from "/public/img/nextjs.png";
import docker from "/public/img/docker.png";
import gcp from "/public/img/gcp.png";

function TechStack() {
  const projects = [
    {
      imageSrc: langchain,
      title: 'Langchain',
      description: 'Model ini adalah inti dari kecerdasan buatan kami, memungkinkan kami untuk memberikan solusi AI yang canggih dan efektif.',
    },
    {
      imageSrc: meta,
      title: 'Llama2',
      description: 'Model ini memberikan kontribusi tambahan dalam meningkatkan kualitas dan kinerja aplikasi AI kami.',
    },
    {
      imageSrc: fastapi,
      title: 'Fast API',
      description: 'Kami menggunakan FastAPI sebagai kerangka kerja backend yang tangguh dan efisien untuk menyediakan layanan AI dan mengelola permintaan dari frontend.',
    },
    {
      imageSrc: nextjs,
      title: 'Next JS',
      description: 'Frontend kami didukung oleh Next.js, memungkinkan kami untuk menciptakan antarmuka pengguna yang interaktif dan responsif.',
    },
    {
      imageSrc: docker,
      title: 'Docker',
      description: 'Docker digunakan untuk mengelola kontainer aplikasi kami, yang mempermudah penyebaran dan skalabilitas.',
    },
    {
      imageSrc: gcp,
      title: 'Google Cloud Platform',
      description: ' Kami mengandalkan infrastruktur dan layanan canggih dari Google Cloud Platform untuk menyimpan data, melakukan pelatihan model, dan menjalankan aplikasi secara global dan berskala besar.',
    },
    
  
  ]

  return (
    <div className="w-full flex justify-center flex-wrap gap-8">
      {projects.map((project, index) => (
        <Techs
          key={index}
          imageSrc={project.imageSrc}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default TechStack;
