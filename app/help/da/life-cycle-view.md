---
title: Se hvad der slides over halvtreds år
summary: Vinduer, døre, overflader og tag i modellen, deres levetid, hvilke år hver enkelt udskiftes, og omkostningen pr. år samt nutidsværdien, når du skriver en pris pr. enhed.
keywords: livscyklus, levetid, serviceliv, udskiftning, vedligeholdelse, omkostning, nutidsværdi, diskontering, inflation, 50 år, vinduer, maling, tag, overflader, hele levetiden
from: 1b849545
---

Sektionen {{ui:Livscyklusvisning}} i venstre panel viser det, modellen indeholder, som slides op, og hvornår det udskiftes i studieperioden (50 år til at begynde med). Intet i modellen ændres.

## Sådan læser du den

Hver del viser sin mængde (målt fra modellen: vinduesareal, udvendige og indvendige døre, finish på ydervæg, maling indvendigt, gulv- og loftsfinish, tagets fodaftryk, trapper), en **levetid i år** og en **pris pr. enhed**. En del udskiftes ved sin levetid, to gange sin levetid og så videre, så længe det er før studieperiodens udløb, så et 30-årigt vindue i en 50-årig studie udskiftes én gang, i år 30. Levetiderne er typiske planlægningstal: ændr dem til dine produkter og dit klima. Der antages ingen pris; skriv en for at se pengene pr. år, totalen og nutidsværdien. Tilføj en diskonteringsrente og en inflationsrente, hvis du vil have dem med.

{{ui:Gem planen (CSV)}} skriver delene og årene. Rør, kanaler, kabler og udstyr er også med (se nedenfor).

## Rør, kanaler, kabler og udstyr

- **Rør og kanaler** er meter af hver tegnet strækning. **Udstyr** (pumper, ventilatorer, ventiler, terminaler, armaturer, stikkontakter, afbrydere, tavler og de andre ting, fanen Aktiver registrerer) tælles pr. type, og hver type har en planlægningslevetid. En genstand, hvis egen *levetid* er sat i fanen Aktiver, får sin egen linje med den levetid, og har den en installationsdato, starter den med sin alder: en pumpe, der er 16 år gammel med en levetid på 10 år, skal udskiftes nu, derefter hvert tiende år.
- **Kabler** er et **skøn**: planafstanden fra tavlen langs enhederne i hvert kredsløb, nærmeste først, ganget med 1.25 for ruteføringen. Modellen tegner ingen kabel, så kontrollér det mod dit eget mængdeudtræk.
- Levetider er planlægningstal, der skal gennemgås, ikke en kilde.

## Indlejret CO2 pr. udskiftning

Sæt kryds i {{ui:Medregn den indlejrede CO2 for hver udskiftning}}. Et nyt vindue, en ny dør, trappe, tag, rør eller stykke udstyr regnes med den CO2, modellens egne elementer af den slags har (faktorerne på CO2-fanen, pr. enhed). En del uden element eller faktor, såsom maling, overflader og kabler, viser en streg og står på listen. Den gamle dels afslutning af levetid og arbejdet med at udskifte den regnes ikke med.
