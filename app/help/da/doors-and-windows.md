---
title: "Døre og vinduer"
summary: "Placér døre og vinduer i tegnede vægge: peg på en væg, se åbningsretningen og afstandene til hjørnerne, og klik; vægåbningen skæres ud af sig selv."
keywords: dør, døre, vindue, vinduer, åbning, åbningsretning, hængsel, hånd, vend, skydedør, lommedør, garageport, dobbeltdør, fløjvindue, enkeltophængt, dobbeltophængt, skyder, fast vindue, brystning, overligger, foldedør, franske døre, ladedør, sidelys, indgangsdør, markisevindue, panoramavindue, overlysvindue, kælderflugtvindue, lysskakt
from: 4d8ac009
---

## Hvad du gør

Placér døre og vinduer i vægge, du har tegnet ([Tegn vægge](topic:draw-walls)). Peg på en væg, og døren eller vinduet viser, hvor det ville stå, hvilken vej det åbner, og hvor langt det er fra hvert hjørne. Klik, og åbningen skæres ud af væggen i planen og i 3D.

## Placér en dør

1. Med {{ui:Tegn}} slået til, klik på {{ui:Dør}} (eller tryk på {{key:D}}).
2. Vælg typen: **Enkeltfløjet dør**, **Dobbeltfløjet dør**, **Skydedør**, **Skjult skydedør**, **Garageport**, **Foldedør til skab**, **Franske døre**, **Ladedør (på væggen)** eller **Indgangsdør med sidelys**. Dens sædvanlige størrelse fylder **W** og **H**; vælg en anden fra størrelseslisten ved siden af, eller skriv andre, for eksempel `2'-8"` eller `800`. Listen tilbyder også dørfamilierne i denne model (se [Familier og deres størrelser](topic:families)).
3. Peg på en væg. Dørens symbol følger markøren langs væggen, og afstanden fra hver ende af vægfladen vises i planen.
4. Døren åbner til den side af væggen, markøren er på. Tryk på {{key:H}} (eller klik på {{ui:Vend}}) for at sætte hængslerne i den anden ende.
5. Klik. Døren placeres, og værktøjet forbliver aktivt til den næste. Peger du på midten af en væg, centrerer døren sig selv.

For at placere den i en præcis afstand: peg på væggen nær det hjørne, du måler fra, skriv afstanden (for eksempel `2'` eller `600`), og tryk på {{key:Enter}}. Afstanden løber fra den nærmeste ende af vægfladen til dørens kant.

## Placér et vindue

1. Klik på {{ui:Vindue}} (eller tryk på {{key:N}}).
2. Vælg typen: **Fast vindue**, **Enkeltophængt vindue**, **Dobbeltophængt vindue**, **Fløjvindue**, **Skydevindue**, **Markisevindue**, **Panoramavindue** eller **Overlysvindue**, og dets **W**, **H** og **Sill** (højden fra gulvet til vinduets underkant).
3. Peg på en væg og klik, eller skriv en afstand og tryk på {{key:Enter}} som ved døre. Et vindue sidder på væggens yderside.

## Flyt, vend, slet

- Med {{ui:Vælg}} slået til, træk en dør eller et vindue langs dens væg. Træk det over på en anden væg for at flytte det dertil.
- {{key:Delete}} sletter de valgte døre og vinduer; væggen lukker sig.
- Flytning eller sletning af en væg flytter eller sletter det, der er i den. Når en vægs start flytter sig langs sin egen linje, beholder dens døre og vinduer deres plads.
- {{ui:Fortryd}} og {{ui:Gentag}} tager hver placering, flytning eller sletning tilbage og frem.

## Hvad der afvises

- **Det passer ikke i væggen.** Døren eller vinduet er bredere end væggen, eller ville stikke ud af dens ende. Prøv en kortere bredde eller en længere væg.
- **Det er højere end væggen.** Brystningen plus højden er over væggens top.

## Hvad der gemmes

Hver dør eller hvert vindue er en IFC-dør eller et IFC-vindue med sin størrelse, sin betjening (for eksempel enkeltfløjet venstre), sin størrelsestype (én type for hver størrelse i dens familie), `Pset_DoorCommon` eller `Pset_WindowCommon` og grundmængder, og det fylder en IFC-åbning i sin væg. Væggens nettosideareal og rumfang udelader åbningen. Andre BIM-programmer åbner den som en dør i en væg.

## Godt at vide

- Planen viser døre åbne ved 90° med deres åbningsretning, skydedøre som to paneler, lommedøre, der glider ind i væggen, garageporte som en stiplet linje ovenover, og vinduer med deres rammer og glaslinjer.
- Bredden er rammens samlede bredde; dørbladet er bredden minus de to dørkarme.
- Kopiering af tegnede døre og vinduer er ikke lavet endnu: placér et nyt.

## Kælderflugtvindue og lysskakt

Vælg **Kælderflugtvindue med lysskakt** i vinduestyplisten. Det starter som et fløjvindue på 36 × 48 inch med en brystning 36 inch over niveauet. Lysskakten er på væggens yderside, med mindst 48 inch fri bredde, 36 inch fremspring og en bund 6 inch under brystningen. Den vises som stiplede linjer i planen og som tre åbne sider i 3D. Lysskakten er en del af vinduets IFC-krop, så gemmer, flytter, ændrer størrelse på eller sletter du vinduet, følger den med. Ved ændring af størrelse holdes mindst 6 inch ved siden af hver dørkarm.

Dette er modelleringsstandarder, ikke en godkendelse af flugtkrav. Kontrollér producentens faktiske frie åbning, lokale krav, terræn, dræning og en eventuelt påkrævet stige separat. Lysskaktens dybde og højde er forudindstillede mål; de følger ikke terrænet.
