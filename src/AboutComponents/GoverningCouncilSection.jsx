import React from "react";
import adam from "../asset/Adam.jpg"
import Akinaride from "../asset/Akinrinade.jpg"
import Elley from "../asset/Elley.jpg"
import Galadinma from "../asset/Galadinma.jpg"
import Issa from "../asset/Issa.jpg"
import joy from "../asset/joy.jpg"
import Mike from "../asset/Mike.jpg"
import Muhammed from "../asset/muhammed.jpg"
import Oyewole from "../asset/Oyewole.jpg"
import Stephen from "../asset/Stephen.jpg"
import Udeh from "../asset/Udeh.jpg"
import Mustapha from "../asset/mustapha.jpg"
const council = [
  {
    name: "Prof. Mike Ikupolati, FCPDM",
    role: "National President/Chairman Governing Council",
    bio: "Chartered Diplomat with over 30 years experience in international relations.",
    img: Mike,
  },
  {
    name: "Dr. Oyewole Sarumi, FCPDM",
    role: "Registrar/Secretary Governing Council",
    bio: "Overseeing administrative excellence and academic curriculum development.",
    img: Oyewole
  },
  {
    name: "Stephen Odukoya, FCPDM",
    role: "Executive Director",
    bio: "Strategic advisor on corporate governance and public communications.",
    img: Stephen
  },
  {
    name: "Isa Wasagu Muhammed-Nasir",
    role: "Governing Council, Member Abuja",
    bio: "Focusing on technological integration in diplomatic processes.",
    img: Issa,
  },
  {
    name: "Akinaride Morakinyo O.",
    role: "Governing Council, Member Lagos",
    bio: "Chartered Diplomat with over 30 years experience in international relations.",
    img: Akinaride
  },
  {
    name: "Udeh Augustine Nkem",
    role: "Governing Council, Member Abuja",
    bio: "Overseeing administrative excellence and academic curriculum development.",
    img: Udeh
  },
  {
    name: "Mustapha Rahman Olademiji",
    role: "Governing Council, Member Kwara State",
    bio: "Strategic advisor on corporate governance and public communications.",
    img: Mustapha
  },
  {
    name: "Obiogbe Joy Aina",
    role: "Governing Council, Member Abuja",
    bio: "Focusing on technological integration in diplomatic processes.",
    img: joy
  },
  {
    name: "Hayatudeen Mohammed Adam",
    role: "Governing Council, Member Borno State",
    bio: "Chartered Diplomat with over 30 years experience in international relations.",
    img: adam,
  },
  {
    name: "Muhammed Salihu Olowo",
    role: "Governing Council, Member Abuja",
    bio: "Overseeing administrative excellence and academic curriculum development.",
    img: Muhammed
  },
  {
    name: "Elleh Oyoboy Edman",
    role: "Governing Council, Member Rivers State",
    bio: "Strategic advisor on corporate governance and public communications.",
    img: Elley
  },
  {
    name: "Galadinma Daniel Habila",
    role: "Governing Council, Member Abuja",
    bio: "Focusing on technological integration in diplomatic processes.",
    img: Galadinma
  },
];

export default function GoverningCouncilSection() {
  return (
    <section className="bg-[var(--background-light)] px-6 py-20  lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="mb-3 text-sm font-bold tracking-widest text-[var(--primary)] uppercase">
              Leadership
            </h2>
            <h3 className="text-3xl font-bold text-[var(--text-dark)] ">
              Governing Council
            </h3>
          </div>

          <button className="flex items-center gap-2 text-sm font-bold text-[var(--primary)] hover:underline">
            View Full Directory <span className="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {council.map((m) => (
            <div key={m.name} className="group flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="size-32 overflow-hidden rounded-full border-4 border-white shadow-lg transition-transform group-hover:scale-105 dark:border-[var(--primary)]/20 lg:size-48">
                  <img src={m.img} alt={m.name} className="h-full w-full object-contain" loading="lazy" />
                </div>
              </div>

              <h4 className="mb-1 text-lg font-bold text-[var(--text-dark)]">
                {m.name}
              </h4>
              <p className="mb-3 text-sm font-semibold text-[var(--primary)]">{m.role}</p>
              <p className="px-4 text-xs text-gray-500 ">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
