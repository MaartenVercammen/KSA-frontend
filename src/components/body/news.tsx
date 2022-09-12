import React from "react";
import NewsItem from "./newsItem";

const News = () => {
  return (
    <div className="news" id="news">
      <h1>News</h1>
      <ul>
        <li>
          <NewsItem
            title="Welkom op de nieuwe website"
            content="Na lang wachten is eindelijk de nieuwer en werkende website er. laat weten wat je er van vind"
          />
        </li>
        <li>
          <NewsItem
            title="Inschrijving van uw kind"
            content="Krijgt u de Braggel niet per mail? Vraag dan zeker even na of uw kind ingeschreven is. De inschrijving is voltooid na het invullen van het inschrijvingsformulier en na het ontvangen van uw betaling. Een testperiode is mogelijk; er kan drie vergaderingen meegespeeld worden! Hierna is uw kind niet verzekerd, let hier zeker mee op!

Met vragen kan u steeds bij ons terecht."
          />
        </li>
        <li>
          <NewsItem
            title="Trooper"
            content="Vanaf nu kan je KSA Aarschot steunen door online te shoppen via Trooper

Hoe werkt dit?

Bezoek onze pagina via deze link: <a href='https://trooper.be/ksa-aarschot'>https://trooper.be/ksa-aarschot</a>
Kies de webshop waar je online wil shoppen en klik op de afbeelding, Trooper registreert dan dat je via onze link bent doorverwezen
Doe je aankopen zoals gewoonlijk, zonder extra te betalen
De webshop geeft KSA Aarschot gemiddeld 5% van de aankoopprijs.
Zeg het door en wij danken je van harte!"
          />
        </li>
      </ul>
    </div>
  );
};

export default News;
