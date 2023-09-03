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
      description: 'Versi khusus code dari Llama 2 yang dibuat dengan melatih Llama 2 lebih lanjut pada kumpulan data khusus code',
    },
    {
      imageSrc: meta,
      title: 'Llama2',
      description: 'Versi khusus code dari Llama 2 yang dibuat dengan melatih Llama 2 lebih lanjut pada kumpulan data khusus code',
    },
    {
      imageSrc: fastapi,
      title: 'Fast API',
      description: 'Versi khusus code dari Llama 2 yang dibuat dengan melatih Llama 2 lebih lanjut pada kumpulan data khusus code',
    },
    {
      imageSrc: nextjs,
      title: 'Next JS',
      description: 'Versi khusus code dari Llama 2 yang dibuat dengan melatih Llama 2 lebih lanjut pada kumpulan data khusus code',
    },
    {
      imageSrc: docker,
      title: 'Docker',
      description: 'Versi khusus code dari Llama 2 yang dibuat dengan melatih Llama 2 lebih lanjut pada kumpulan data khusus code',
    },
    {
      imageSrc: gcp,
      title: 'Google Cloud Platform',
      description: 'Versi khusus code dari Llama 2 yang dibuat dengan melatih Llama 2 lebih lanjut pada kumpulan data khusus code',
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
