---
title: Soek elemente volgens klas, naam of eienskap
summary: Soek elke element wat by een of meer reëls pas — sy klas, naam, tipe, verdieping, materiaal of enige eienskapwaarde — kies hulle almal, en hou die reëls as 'n benoemde soekstel.
keywords: soek, soektog, filter, navraag, reël, soekstel, keuestel, gestoorde soektog, eienskap, waarde, klas, materiaal, kies alles
from: 3d293bc2
---

## Wat jy gaan doen

Kies elke element van een soort of met een waarde in 'n enkele stap: elke deur, elke muur op Vlak 2, elke element met brandgraad EI60, elke muur wat meer as 'n vasgestelde bedrag kos.

## Stappe

1. Maak 'n IFC-model oop.
2. Maak {{ui:Soek}} oop in die linkerpaneel.
3. Kies in die eerste reël 'n eienskap (die element se eie eienskappe eerste, soos {{ui:Klas}} en {{ui:Verdieping}}, dan die model se eiendomstelle), hoe om te vergelyk, en 'n waarde. Die waardeboks stel die waardes voor wat die model het.
4. Om dit te verfyn, klik {{ui:Voeg 'n reël by}}. Kies {{ui:Elke reël}} as almal moet pas, of {{ui:Enige reël}} as een van hulle genoeg is.
5. Klik {{ui:Soek}}, of druk {{key:Enter}} in 'n waardeboks. Wat pas, word gekies.
6. Om die reëls te hou, klik {{ui:Stoor as 'n stel}}, tik 'n naam en klik dit weer. Klik later op 'n stel se naam om daarmee te soek.

## Wat jy behoort te sien

- Die passings is gekies in die 3D-aansig en die modelboom, en {{ui:Eienskappe}} sê hoeveel volgens klas. Druk {{key:I}} om net hulle te wys, en {{key:H}} om hulle te versteek.
- Woorde pas sonder om na hoofletters te kyk. Getalle vergelyk as getalle: "is meer as 1000" beteken die waarde, nie die teks nie.
- {{ui:het 'n waarde}} en {{ui:het geen waarde nie}} benodig geen waarde nie; hulle vind wat ingevul is, of wat ontbreek.
- Gestoorde stelle bly in hierdie blaaier vir elke model wat jy oopmaak.

## Algemene foute

- **Niks word gevind nie.** 'n Reël het 'n waarde nodig wat dit kan pas: kyk na die voorstelle in die waardeboks.
- **'n Eienskap ontbreek in die lys.** Geen element met 'n vorm in hierdie model het dit nie.

## Volgende

- [Kleur elemente volgens 'n eienskap](topic:color-by-property)
- [Versteek, isoleer en sien deur elemente](topic:hide-and-isolate)
