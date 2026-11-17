---
title: Crtajte u punoj veličini, anotirajte prema mjerilu
summary: Zgrada se uvijek crta u punoj veličini. Tekst, kote, oznake, nazivi prostorija, oznake mreže i simboli mjere se na papiru, u milimetrima kako se ispisuju, i zadržavaju tu veličinu kad se mjerilo crteža promijeni s 1:100 na 1:50.
keywords: mjerilo anotacija, anotativno, veličina teksta, visina teksta, visina na papiru, veličina teksta kote, veličina oznake, veličina naziva prostorije, oznaka mreže, veličina simbola, mjerilo crteža, 1:50, 1:100, standard ureda, pisanje, crtanje u 1:1, puna veličina, tekst na listu
from: 94118788
---

## Što ćete učiniti

Postavite koliko su visoka slova na vašim crtežima na papiru, jednom za zgradu. Nikad ne skalirate model i ne mijenjate veličinu teksta za mjerilo: BimCraft računa veličinu iz visine na papiru i mjerila crteža.

## Kako radi

- Model je u punoj veličini. Zid dug 10 m je 10 000 mm dug u svakom mjerilu.
- Anotacija ima **visinu na papiru**: visinu velikog slova na ispisanom listu, u milimetrima.
- Pri mjerilu 1:100 tekst od 2.5 mm je 250 mm visok u modelu; pri 1:50 je 125 mm. Na papiru je 2.5 mm u oba slučaja.
- Tlocrtni simboli (električni, vodovodni) crtaju se u milimetrima papira i slijede isto pravilo.

## Koraci

1. Otvorite preglednik projekta. Pod {{ui:Sheets}} kliknite {{ui:Annotation sizes…}}.
2. Upišite visinu u milimetrima za vrste koje želite postaviti: {{ui:Notes and labels}}, {{ui:Dimension text}}, {{ui:Tags and level names}}, {{ui:Room names}}, {{ui:Grid bubble letters}}, {{ui:View titles on sheets}} i {{ui:Schedule text}}. Prazno polje zadržava vlastitu veličinu BimCraft, prikazanu sivo.
3. Kliknite {{ui:Save}}. To je jedan korak koji možete poništiti.

Svaki list, skup crteža, PDF tlocrta, nacrti pročelja i presjeka od tada koriste te veličine. Razmak između linije kote i njezina teksta, veličina oznake mreže i visina retka specifikacije rastu zajedno s tekstom.

## Tlocrt sa vlastitim mjerilom

Dajte tlocrtu mjerilo u njegovom rasponu pogleda ({{ui:Scale}}; pogledajte [Pogledi i listovi](topic:views-and-sheets)). Tada:

- na ekranu se nazivi prostorija, oznake, tekst kota i oznake mreže crtaju u svojoj ispisanoj veličini naspram modela, pa vidite ono što će list prikazati;
- tlocrtni simboli i njihove oznake dimenzioniraju se za to mjerilo. Promijenite mjerilo s 1:100 na 1:50 pa su upola manji u modelu, a isti su na papiru.

Tlocrt bez vlastitog mjerila zadržava svoj fiksni tekst na ekranu, a njegovi simboli dimenzioniraju se za 1:50 (1/4" = 1'-0" u stopama i palčevima), kao i prije.

## Veličine vašeg ureda

S uključenim dodatkom Default Policies postavite visine ureda u Postavke › Globalne › Default Policies › {{ui:Annotation sizes on paper}}. Nova zgrada ih preuzima kad kliknete Stvori. U zgradi koju ste već započeli dijalog ima {{ui:Use my office's sizes}}. Pogledajte [Default Policies](topic:default-policies).

## Veličine iz paketa propisa

Paket propisa može dati visine teksta koje njegovo mjesto traži (dodatak Building regulations, konvencije crteža). Označite paket u Postavke › Building regulations, zatim u dijalogu kliknite {{ui:Use a regulation pack's sizes}}: polja se popune, provjerite ih i spremite. Veličina koju paket daje u točkama je veličina fonta i pretvara se u visinu velikog slova, pa je provjerite. Ništa se ne postavlja dok ne spremite.

## Što ćete vidjeti

- Ista visina teksta u milimetrima na listu pri 1:100 i na listu pri 1:50, dok je sam tlocrt pri 1:50 dvostruko veći.
- Veličine putuju sa zgradom: spremljene su u njezinoj IFC datoteci.

## Dobro je znati

- Vlastite veličine BimCraft su one koje su njegovi listovi uvijek koristili (oko 1.5 mm velikih slova za tekst kota). Nisu crtački standard: postavite standard svog ureda.
- Visina mora biti od 0.5 do 50 mm.
- Slova naslovnog bloka i legende ključnih oznaka nisu dio ovoga: zadržavaju vlastite veličine.
