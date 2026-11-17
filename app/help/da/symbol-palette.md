---
title: Symbolpaletten
summary: Find el- og VVS-symboler efter navn eller billede, marker dem du bruger med en stjerne, og placér dem i planen med ét klik.
keywords: symbolpalette, symbolknap i værktøjslinjen, væg følger, symboler, elektriske symboler, VVS-symboler, VVS-plan, vandklosset, WC, toilet, håndvask, lavatory, vask, badekar, bruser, gulvafløb, rensning, slangehane, væghydrant, varmtvandsbeholder, ventil, spjældventil, koldt vand, varmt vand, spildevand, udluftning, linjestil, favoritter, søgning
from: 67f20bc0
---

## Hvad du skal gøre

Åbn ét panel, der viser de elektriske symboler og VVS-planens symboler med billeder og navne, find det, du vil have, og placér det i planen. Intet her kræver internettet: symbolerne følger med programmet.

## Åbn den og placér et symbol

1. Åbn en model, og åbn {{ui:Build}} › {{ui:Symbolpalette}} (skrevet kommando: SYMBOLS). Den samme knap findes i menuen Værktøjer på tegnelinjen og som **Symboler** i gruppen Bibliotek på værktøjslinjen.
2. Vælg et sæt: **El** eller **VVS**, eller **Alle sæt**. Skriv i søgefeltet for at indsnævre listen. Du kan søge efter navn eller forkortelse (WC, CW, HB).
3. Klik på et symbol. Planen er klar til at placere det.
   - Et **elektrisk** symbol starter El-værktøjet med den enhed valgt, så alt på [El-planen](topic:electrical-plan) gælder: klik i planen, ét trin i fortryd.
   - Et **VVS**-symbol starter værktøjet for VVS-planens symboler. Klik i planen. En armatur, der sidder på en væg (et toilet, en håndvask, et badekar, en vask, en slangehane), fastgøres til den nærmeste vægflade med ryggen mod væggen; afløb, ventiler, varmtvandsbeholderen og linjestile placeres dér, hvor du klikker.
4. Tryk {{key:R}} for at dreje symbolet 90 grader ({{key:Shift}}+{{key:R}} drejer den anden vej), eller skriv en vinkel i **Rotation** på indstillingslinjen. Tryk {{key:Esc}} for at stoppe.

En armatur eller slangehane, der er fastgjort til en vægflade, husker den væg: når væggen flyttes, flyttes symbolet med den (samme flade, samme afstand langs væggen) i samme fortrydelsestrin. Hvis du sletter væggen, bliver symbolet, hvor det var, og Problemer viser "mistede sin væg"; flyt det eller slet det. Symboler placeret væk fra vægge er ikke knyttet til noget.

Hvert symbol, du placerer, er ét fortrydelsestrin. Et placeret symbol er en plannotering i IFC-filen med sin tag (WC1, WC2, ...). Vælg det for at ændre dets tag eller drejning i **Egenskaber**, eller tryk {{key:Delete}}.

## Hvad VVS-sættet har

Armaturer (vandklosset, urinal, håndvask, badekar, bruser, køkkenvask, enkelt vask), et gulvafløb, gulv- og vægrensninger, en slangehane, en væghydrant, en varmtvandsbeholder, ventiler (spjældventil, gennemgangsventil, kugleventil, tilbageslagsventil, sommerfuglventil, trykreducerende ventil) og linjestile med deres forkortelser: koldt vand (CW), varmt vand (HW), varmtvandsretur (HWR), spildevand (W), udluftning (V), regnvandsafløb (SD) og gas (G). Tegningerne skaleres med planen, så de beholder deres størrelse på det udskrevne ark. En linjestil er en kort stump, der viser stilen i planen; tegn de rigtige rørstrækninger med rørværktøjerne.

:::note
Dette er almindelige konventioner for VVS-planer, tegnet af os; ikke certificeret efter ISO 4067-1 eller ASME Y32.4. De er sammenlignet med offentlige tegningslegender og undervisningsmateriale (listen står i sættets kildenote, der siger, hvor vi stemmer overens, og hvor vi afviger), ikke kopieret fra et produkt, og de er frie at bruge (Apache-2.0). Tegningssæt er forskellige, så kontrollér legenden i dit eget projekt. De er planssymboler, ikke et VVS-design: de dimensionerer ikke rør og kontrollerer ikke normer.
:::

## Favoritter og tastatur

- Klik på stjernen ved et symbol (eller tryk {{key:F}} på det) for at gemme det som favorit. Favoritter vises først og bliver i denne browser. **Kun favoritter** viser kun dem.
- {{key:Down}} fra søgefeltet flytter ind i symbolerne; piletasterne, {{key:Home}} og {{key:End}} flytter mellem dem; {{key:Enter}} vælger det markerede; {{key:Esc}} lukker paletten.
- På en telefon er paletten et ark nederst på skærmen; det træder til side, når du vælger et symbol, så du kan se planen. Åbn den igen fra menuen Build eller knappen **Palet** på indstillingslinjen.

:::tip
Hvis en fil bruger et symbolsæt, denne version ikke har, viser planen en boks, hvor symbolet var, og Problemer viser det.
:::

## Forbind et placeret element til et symbol

Et lysarmatur fra biblioteket er et 3D-element, men et elektrisk layout viser det som sit symbol. Du placerer det **én gang** og forbinder det:

1. Vælg Build › **Symbolforbindelse** (eller skriv SYMBOLLINK). Et afsnit Symbolforbindelse åbnes i venstre panel.
2. Vælg de placerede elementer i planen eller i 3D. Afsnittet siger, hvor mange der er valgt, og hvad de er forbundet til.
3. Vælg **Symbol** (fra et hvilket som helst symbolsæt: El, VVS), og vælg **Forbind**.

Elementet er stadig ét element, og hver liste tæller det én gang:

- **3D** viser altid dets krop.
- En **plan** viser sin planform, som før.
- En plan, hvor **Denne visning viser forbundne elementer som** er sat til **Dets symbol (et installationslayout)**, viser symbolet på dets plads. Et klik på symbolet vælger elementet. Valget gemmes i filen for den visning (en etages gulvplan, dens loftsplan eller et henvisningsfelt).

**Drej symbolet 90°** drejer symbolet i forhold til sit element. **Fjern forbindelsen** fjerner forbindelsen; elementet bliver. Listen **Forbundne symboler** viser hvert forbundet element én gang med dets etage og det rum, det står i.

Ikke lavet endnu: en visnings valg på et ark er valget af den etageplan, den viser; enheder placeret med El-værktøjet er symboler i alle planer, som før.
