---
title: Crtajte u punoj veličini, anotirajte prema razmjeri
summary: Zgrada se uvijek crta u punoj veličini. Tekst, kote, oznake, nazivi prostorija, mjerne mreže i simboli dimenzionišu se na papiru, u milimetrima kako su štampani, i zadržavaju tu veličinu kada se razmjera crteža promijeni sa 1:100 na 1:50.
keywords: razmjera anotacije, anotativno, veličina teksta, visina teksta, visina na papiru, veličina teksta kote, veličina oznake, veličina naziva prostorije, mjerna mreža, veličina simbola, razmjera crteža, 1:50, 1:100, standard kancelarije, natpis, crtanje u 1:1, puna veličina, tekst na listu
from: 94118788
---

## Šta ćete raditi

Podesite koliko su visoka slova na vašim crtežima na papiru, jednom za zgradu. Nikada ne skalirate model i nikada ne mijenjate veličinu teksta za razmjeru: BimCraft računa veličinu iz visine na papiru i razmjere crteža.

## Kako radi

- Model je pune veličine. Zid dug 10 m je 10 000 mm dug u svakoj razmjeri.
- Anotacija ima **visinu na papiru**: visinu velikog slova na štampanom listu, u milimetrima.
- Pri razmjeri 1:100, tekst od 2.5 mm je 250 mm visok u modelu; pri 1:50 je 125 mm. Na papiru je 2.5 mm u oba slučaja.
- Simboli u planu (električni, vodovodni) crtaju se u milimetrima na papiru i slijede isto pravilo.

## Koraci

1. Otvorite pregled projekta. Pod {{ui:Listovi}} kliknite {{ui:Veličine anotacija…}}.
2. Upišite visinu u milimetrima za vrste koje želite podesiti: {{ui:Napomene i oznake}}, {{ui:Tekst kota}}, {{ui:Oznake i nazivi nivoa}}, {{ui:Nazivi prostorija}}, {{ui:Slova mjerne mreže}}, {{ui:Naslovi pogleda na listovima}} i {{ui:Tekst specifikacije}}. Prazno polje zadržava BimCraft-ovu veličinu, prikazanu sivo.
3. Kliknite {{ui:Spasi}}. To je jedan korak koji se može poništiti.

Svaki list, skup crteža, PDF plana te izgledi i presjeci od tada koriste te veličine. Razmak između linije kote i njenog teksta, veličina mjerne mreže i visina reda specifikacije rastu s tekstom.

## Plan sa sopstvenom razmjerom

Dodijelite planu razmjeru u njegovom opsegu pogleda ({{ui:Razmjera}}; vidi [Pogledi i listovi](topic:views-and-sheets)). Tada:

- na ekranu se nazivi prostorija, oznake, tekst kota i mjerne mreže prikazuju u svojoj štampanoj veličini u odnosu na model, pa vidite ono što će list pokazati;
- simboli u planu i njihove oznake dimenzionisani su za tu razmjeru. Promijenite razmjeru sa 1:100 na 1:50 i oni su upola manji u modelu, a isti su na papiru.

Plan bez sopstvene razmjere zadržava svoj fiksni tekst na ekranu, a njegovi simboli su dimenzionisani za 1:50 (1/4" = 1'-0" u stopama i inčima), kao i ranije.

## Veličine vaše kancelarije

Uz uključen dodatak Default Policies, postavite visine kancelarije u Postavke › Globalno › Default Policies › {{ui:Veličine anotacija na papiru}}. Nova zgrada ih preuzima kada kliknete Kreiraj. U zgradi koju ste već započeli, dijalog ima {{ui:Koristi veličine moje kancelarije}}. Vidi [Default Policies](topic:default-policies).

## Veličine iz propisnog paketa

Paket propisa može dati visine teksta koje traži njegovo mjesto (dodatak Building regulations, konvencije za crteže). Označite paket u Postavke › Building regulations, zatim u dijalogu kliknite {{ui:Koristi veličine iz propisnog paketa}}: polja se popune, a vi ih provjerite i spasite. Veličina koju paket daje u tačkama je veličina fonta i pretvara se u visinu velikog slova, pa je provjerite. Ništa se ne postavlja dok ne spasite.

## Šta treba da vidite

- Ista visina teksta u milimetrima na listu u 1:100 i na listu u 1:50, dok je sam plan u 1:50 dvostruko veći.
- Veličine putuju sa zgradom: spašene su u njenoj IFC datoteci.

## Dobro je znati

- BimCraft-ove sopstvene veličine su one koje su njegovi listovi uvijek koristili (oko 1.5 mm velikih slova za tekst kota). To nije crtački standard: postavite standard vaše kancelarije.
- Visina mora biti od 0.5 do 50 mm.
- Tekst natpisnog bloka i legende ključnih oznaka nisu dio ovoga: zadržavaju svoje veličine.
