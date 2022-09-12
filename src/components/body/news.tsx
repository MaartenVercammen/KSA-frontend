import React from "react";
import NewsItem from "./newsItem";

const News = () => {
  return (
    <div className="news" id="news">
      <h1>News</h1>
      <ul>
        <li>
          <NewsItem title="Inschrijven" date="2022-09-12" text="<p>Vanaf dit jaar kan je je kinderen online inschrijven via onderstaande link. </p>
<a href='https://forms.gle/Gsp12EvqJeTeFHxUA'>https://forms.gle/Gsp12EvqJeTeFHxUA</a> "/>
        </li>
        <li>
          <NewsItem
          
            title="Welkom op de nieuwe website"
            text="<p>Na lang wachten is eindelijk de nieuwer en werkende website er.</p><p> laat weten wat je er van vind</p>"
            date="2022-09-12"
          />
        </li>
        <li>
          <NewsItem
            title="Inschrijving van uw kind"
            text="<p>Krijgt u de Braggel niet per mail?</p><p> Vraag dan zeker even na of uw kind ingeschreven is.</p><p> De inschrijving is voltooid na het invullen van het inschrijvingsformulier en na het ontvangen van uw betaling.</p><p> Een testperiode is mogelijk; er kan drie vergaderingen meegespeeld worden! Hierna is uw kind niet verzekerd, let hier zeker mee op!</p>

<p>Met vragen kan u steeds bij ons terecht.</p>"
date="2022-09-12"
          />
        </li>
        <li>
          <NewsItem
            title="Trooper"
            text="<p>Vanaf nu kan je KSA Aarschot steunen door online te shoppen via Trooper</p>

<p>Hoe werkt dit?</p>

<p>Bezoek onze pagina via deze <a href='https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.trooper.be%2Fnl%2Ftrooperverenigingen%2Fksaaarschot&h=AT11QUx7kyjoMsbKfsNNpa2r3sA93gKRcJOioGyRUDGcPpFcl7SM12Bh69e4hsDuqr2W1tI6C1SiuBD56mNVgDs8yUth9IoJZ3kotuGmq5Zp6yl_WSk7ZUzWRNRwlc48j15rB9V_nmc-RiHHNoLvRw'>link</a>
Kies de webshop waar je online wil shoppen en klik op de afbeelding, Trooper registreert dan dat je via onze link bent doorverwezen
Doe je aankopen zoals gewoonlijk, zonder extra te betalen
De webshop geeft KSA Aarschot gemiddeld 5% van de aankoopprijs.
Zeg het door en wij danken je van harte!</p>"
date="2022-09-12"
          />
        </li>

      </ul>
    </div>
  );
};

export default News;
