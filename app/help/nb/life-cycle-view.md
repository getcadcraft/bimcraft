---
title: Se hva som slites ut i løpet av femti år
summary: Vinduene, dørene, overflatene og taket i modellen, deres levetid, årene hver del skiftes ut, og kostnaden per år og nåverdien når du skriver inn en kostnad per enhet.
keywords: livssyklus, levetid, brukstid, utskifting, vedlikehold, kostnad, nåverdi, diskonto, inflasjon, 50 år, vinduer, maling, tak, overflater, hele livsløpet
from: 1b849545
---

Delen {{ui:Livssyklusvisning}} i venstre panel lister opp det i modellen som slites ut, og når det skiftes ut i studieperioden (50 år til å begynne med). Ingenting i modellen endres.

## Slik leses den

Hver del viser mengden (målt fra modellen: vindusareal, ytre og indre dører, finish på yttervegg, innendørs maling, gulv- og takfinish, takets fotavtrykk, trapper), en **levetid i år** og en **kostnad per enhet**. En del skiftes ut ved sin levetid, ved to ganger levetiden og så videre, så lenge det er før studieperiodens slutt. Et 30 år gammelt vindu i en 50 års studie skiftes derfor ut én gang, ved år 30. Brukstidene er typiske planleggingstall: endre dem til dine produkter og ditt klima. Det er ingen kostnad forutsatt. Skriv inn én for å se pengene per år, totalen og nåverdien. Legg til en diskonteringsrente og en inflasjonsrate hvis du vil ha dem.

{{ui:Lagre planen (CSV)}} skriver ut komponentene og årene. Rør, kanaler, kabling og utstyr er også listet (se under).

## Rør, kanaler, kabling og utstyr

- **Rør og kanaler** er meter av hvert tegnet strekk. **Utstyr** (pumper, vifter, ventiler, terminaler, armaturer, uttak, brytere, tavler og de andre tingene fanen Eiendeler sporer) telles etter type, og hver type har en planleggingslevetid. Et element som har sin egen *brukstid* satt i fanen Eiendeler, får en egen linje med den levetiden. Har det en installasjonsdato, starter det med sin alder: en pumpe som er 16 år gammel med en levetid på 10 år skiftes ut nå, deretter hvert tiende år.
- **Kabling** er et **anslag**: planavstanden fra tavlen langs enhetene på hver krets, nærmeste først, ganger 1,25 for traseen. Modellen tegner ingen kabel, så kontroller det mot ditt eget mengdeuttak.
- Levetider er planleggingstall som skal gjennomgås, ikke en kilde.

## Karbon per utskifting

Kryss av for {{ui:Ta med innebygd karbon fra hver utskifting}}. Et nytt vindu, dør, trapp, tak, rør eller stykke utstyr regnes med det karbonet modellens egne elementer av den typen har (faktorene i fanen Karbon, per enhet). En del uten element eller faktor, som maling, finish og kabling, viser en strek og listes. Den gamle delens slutt på levetiden og arbeidet med å skifte den regnes ikke med.
