---
title: Kumoa sovellusten välillä CadCraft Studio -ympäristössä
summary: Studiossa BimCraft ilmoittaa jokaisen valmistuneen vaiheen CadCraft Studio -ohjelmalle, jotta viimeisen vaiheen voi kumota siinä ikkunassa, jossa työskentelit viimeksi.
keywords: kumoa, studio, sovellusten välillä, projektin kumoaminen, historia, päiväkirja, ikkuna
from: c66dd0c1
---

## Mitä se tekee

CadCraft Studio -ympäristössä jokainen sovellusikkuna kertoo Studiolle, kun vaihe on valmis (seinä piirretty, joukko seiniä hyväksytty skannauksesta). Studio säilyttää vaiheet siinä järjestyksessä, jossa työskentelit, ja voi pyytää sitä ikkunaa, joka teki viimeisimmän vaiheen, kumoamaan sen oman kumoustoimintonsa avulla. Ctrl+Z BimCraft-sovelluksessa pysyy BimCraftin omana toimintona, ja myös se ilmoitetaan Studiolle.

## Mihin kannattaa kiinnittää huomiota

- Studio pyytää ikkunaa kumoamaan vain silloin, kun sen kumoamisluettelo on täsmälleen sellainen kuin vaihe jätti sen. Tallennuksen jälkeen (joka aloittaa uuden muutosluettelon) tai kun mallia vaihdetaan, BimCraft vastaa, että luettelo on siirtynyt, ja Studio ohittaa tämän ikkunan. Mitään ei pakoteta.
- Yhden sovelluksen vaikutusten kumoamista toisessa ei ole vielä toteutettu.
- Studion ulkopuolella mikään ei muutu.
- Studio-valikon kohta, joka pyytää kumoamista, tulee mukaan Studio-version myötä; siihen asti vaiheet ilmoitetaan, mutta mikään valikon kohta ei käytä niitä.

## Seuraavaksi

- [Työskentele reaaliajassa muiden kanssa](topic:work-live)
