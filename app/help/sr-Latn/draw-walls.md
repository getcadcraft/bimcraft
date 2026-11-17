---
title: Crtanje zidova
summary: Crtajte zidove na osnovi svakog nivoa klikom na uglove ili unosom dužina; uglovi se spajaju sami, a zidovi se čuvaju kao IFC.
keywords: krivi, luk, linija položaja, poravnanje, zid, zidovi, crtanje, osnova, osnova sprata, prostorija, ugao, spajanje, tip zida, 2x6, 2x4, cmu, beton, visina, nivo, nivoi, sprat, uneta dužina, ortogonalno, hvatanje
from: 8269cd4b
---

## Šta ćete uraditi

Nacrtajte zidove zgrade na osnovi svakog nivoa. Kliknite mesto gde zid počinje, pa svaki ugao. BimCraft spaja uglove umesto vas, daje svakom zidu njegove slojeve (fasadna obloga, podloga, rebra konstrukcije, gipskarton …) i podiže ga do nivoa iznad. Prikaz 3D pokazuje zidove dok ih crtate.

## Otvorite osnovu

1. Započnite novu zgradu ([Započnite novu zgradu](topic:start-a-new-building)) ili otvorite IFC model.
2. Kliknite {{ui:Crtanje}} na traci sa alatkama. Otvara se nova zgrada sa već uključenim crtanjem.
3. Osnova nivoa prikazuje se levo, a 3D prikaz desno. Izaberite nivo na listi na vrhu osnove, ili okruglim dugmetom pored nje, na panelu **Nivoi**.
4. {{ui:Plan}}, {{ui:Podeli}} i {{ui:3D}} su alati u redu {{ui:Prikaz}} na traci sa alatkama (komande PLAN, SPLIT i tasteri rade kao i pre). Koristite {{ui:Plan}} za samu osnovu, {{ui:Podeli}} za oba prikaza, a {{ui:3D}} da zatvorite osnovu. Kada je prozor uzak (ili je veličina interfejsa velika), {{ui:Podeli}} stavlja osnovu iznad 3D prikaza, a ne pored njega.

Osnova preseca nivo na 4'-0" (1200 mm) iznad poda, kao što to radi osnova sprata. Točkićem miša zumirajte, a prevucite srednjim ili desnim dugmetom (ili držite {{key:Space}} i prevucite) da pomerate pogled; kada je {{ui:Izaberi}} uključeno, obično prevlačenje takođe pomera pogled. {{key:F}} sa pokazivačem iznad osnove uklapa je u prozor.

## Nacrtajte prostoriju

1. Kliknite {{ui:Zid}} (ili pritisnite {{key:W}}).
2. Izaberite tip zida na prvoj listi, na primer **Spoljašnji 2×6** ili **Unutrašnji 2×4**.
3. Izaberite visinu: **Do nivoa iznad** (zid prati taj nivo ako se pomeri), **Do** viši nivo za zid koji prolazi kroz nekoliko nivoa (hol stepeništa, prostorija dvostruke visine, visok zabat), ili **Fiksna visina** i ukucajte je. Takav zid pripada nivou na kome ga crtate. Osnove nivoa kroz koje prolazi prikazuju ga svetlije, prostorije se tamo naslanjaju na njega, a vrata i prozore možete kliknuti u njega sa tih osnova (vrata stoje na podu tog nivoa). Da biste pomerili ili preoblikovali sam zid, idite na nivo na kome on počinje.
4. Kliknite mesto gde prvi zid počinje.
5. Kliknite svaki ugao. Svaki klik pravi zid, a sledeći počinje tamo gde se prethodni završio. Dužina i ugao prikazuju se pored pokazivača.
6. Kliknite prvu tačku ponovo da zatvorite prostoriju. Statusna linija kaže koliko zidova ima prostorija, a u režimu središnje linije svaki zid dobija spoljašnji sloj sa spoljne strane prostorije.
7. Pritisnite {{key:Esc}} (ili desni klik, ili dupli klik) da prekinete bez zatvaranja.

Uglovi se spajaju sami: dva zida se sastaju u pokosu, zid koji se završava na drugom zaustavlja se na njegovoj površini (T spoj), a tri ili više zidova u jednoj tački dele ugao. Zidovi koji se seku ostaju kakvi jesu.

Ceo prostor odjednom: otvorite {{ui:Oblici}} za pravougaonik, zarotirani pravougaonik, mnogougao, lukove, zidove na izabranim linijama ili oko konture (vidi [Oblici zidova, podela, pomeranje, razvlačenje i zaključavanje](topic:wall-tools)).

## Izaberite referencu crtanja

Izaberite **Središnja linija**, **Unutrašnja strana** ili **Spoljašnja strana** pre prvog klika. Kada je izabrana strana, vaši klikovi i unete dužine opisuju tu stranu. BimCraft pomera osovinu zida za polovinu ukupne debljine i spaja uzastopne uglove. Izaberite **Spolja levo** ili **Spolja desno** u odnosu na smer crtanja. Za zatvorenu konturu nacrtanu suprotno kretanju kazaljke na satu spoljna strana je desno; u smeru kazaljke, levo. Sa **Unutrašnja strana** telo zida ide na spoljnu stranu vaše linije; sa **Spoljašnja strana**, na drugu stranu. Crtanje po strani zadržava izabranu spoljnu stranu kada zatvorite petlju. Na središnjoj liniji, zidovi koji ne zatvaraju prostoriju preuzimaju spoljnu stranu koju ste izabrali. Zatvaranje prostorije samo po sebi postavlja spoljnu stranu svakog zida na spoljnu stranu prostorije, bez obzira na to kojim smerom ste crtali.

Promena tipa zida, reference ili spoljne strane prekida trenutni lanac. Blizu povratnog ugla dugi pokosi se ograničavaju ostavljanjem pravih krajeva.

Dok crtate, krajnja tačka preko praznog prostora može se poravnati vodoravno ili uspravno sa krajnjom tačkom zida ili sa ranijim uglom. Isprekidana vodilica spaja tu tačku sa pokazivačem koji se hvata. {{key:Shift}} održava smer crtanja pravim; poravnanje se tada zaustavlja duž tog smera. Bliže krajnje tačke, sredine i preseci zidova imaju prednost nad udaljenim poravnanjem.

## Linija položaja

Sa **Referenca** na **Spoljašnja strana** ili **Unutrašnja strana**, zid zadržava tu stranu kao svoju liniju položaja. Kasnije, ako zid postane deblji ili se njegova spoljna strana okrene, ta strana ostaje na mestu, a zid raste ili se okreće oko nje. Ravan zid koji se u uglu sastaje sa njom prati je, pa se ugao i dalje zatvara. Liniju položaja možete kasnije promeniti na **Svojstva**: vidi [Promena zida, vrata ili prozora](topic:change-a-wall-or-door).

## Nacrtajte krivi zid

1. Kliknite {{ui:Zid}}, pa izaberite **Zakrivljen** na listi **Oblik** u redu opcija.
2. Kliknite mesto gde zid počinje, pa mesto gde se završava.
3. Kliknite tačku na njegovom luku. Ili ukucajte visinu luka i pritisnite {{key:Enter}}.
4. Lanac se nastavlja od kraja zida. Pritisnite {{key:Esc}} da ga završite.

Krivi zid se spaja sa zidovima na svojim krajevima (uglovi i T spojevi rade), pravi prostorije i nosi vrata i prozore duž svog luka. Oni ostaju prave jedinice, normalne na zid na sredini, a njihovo rastojanje meri se duž luka. Zid može da skrene najviše tri četvrtine kruga. Hvata se za svoje krajeve i za sredinu luka.

Još nije napravljeno za krive zidove: {{ui:Skrati / produži}} i {{ui:Ugao}}, konstrukcija, automatske kote na osnovi i hvatanje duž luka. Vidi [Šta još nije napravljeno](topic:not-built-yet).

## Unesite dužinu umesto klika

Posle prvog klika ukucajte i pritisnite {{key:Enter}}:

| Unos | Crta |
|---|---|
| `12'6"` ili `3810` | zid te dužine, u smeru koji pokazuje pokazivač |
| `12'6"<90` | te dužine, pod tim uglom (stepeni, suprotno kretanju kazaljke na satu od desno) |
| `@3000,0` | do tačke udaljene toliko od poslednje, vodoravno i uspravno |
| `1200,3400` | do te tačke na osnovi |

Kada je alat Zid uključen, ukucavanje broja ide direktno u polje {{ui:Dužina}}. U stopama i inčima običan broj znači inče; u milimetrima znači milimetre. Jedinicu uvek možete ukucati: `3.5 m`, `10 ft`, `6 1/2"`.

## Hvatanje

- Krajevi zidova, njihovi uglovi lica i sredine zidova hvataju se kada je pokazivač blizu njih (kvadrat, trougao).
- Pokazivač se hvata za središnju liniju zida ili za bilo koju njegovu stranu (krst).
- Od poslednje tačke smer se drži na svakih 15° kada je blizu. Držite {{key:Shift}} da ga zadržite na 0°, 90°, 180° ili 270°.
- Slobodni smerovi zaokružuju dužinu na 1/2" (ili 10 mm).

## Promena, opoziv, brisanje

- Svaki zid je jedan korak u {{ui:Izmene}}: {{ui:Opozovi}} i {{ui:Ponovi}} vraćaju zidove unazad i ponovo ih postavljaju.
- Sa uključenim {{ui:Izaberi}} kliknite zid na osnovi da ga izaberete; 3D prikaz i **Svojstva** prate izbor. {{key:Delete}} briše izabrane zidove, a zidovi koje su spajali ponovo se čiste.

## Nivoi

Panel **Nivoi** navodi svaki nivo sa njegovom kotom i visinom.

- Ukucajte novo ime, kotu ili visinu i pritisnite {{key:Enter}}. Promena visine (ili kote) nivoa pomera nivoe iznad njega za isti iznos, a zidovi koji idu do nivoa prate ga.
- {{ui:Dodaj nivo na vrhu}} dodaje nivo iznad najvišeg, iste visine.
- {{ui:Dodaj nivo ispod}} dodaje nivo ispod najnižeg (podrum), iste visine kao on: kota mu je negativna kada je najniži nivo na 0, a nijedan drugi nivo se ne pomera. {{ui:Opozovi}} ga uklanja.
- {{ui:Kopiraj ovaj nivo…}} ponovo crta ono što je na nivou koji gledate, na drugom nivou ili na novom iznad: zidove sa vratima i prozorima, podove i plafone (ne krovove). Zidovi koji su išli do nivoa iznad idu do nivoa iznad novog, a prostorije se pojavljuju same. Jedno {{ui:Opozovi}} vraća sve. Ako drugi nivo već ima zidove, kopija se dodaje njima.
- {{ui:Jedinice}} na traci sa alatkama bira jedinice (stope i inči, inči, decimalne stope, milimetri, centimetri ili metri) za sve što alati prikazuju i čitaju.

## Čuvanje

Kliknite {{ui:Sačuvaj kao IFC}}. Svaki zid je IFC zid sa svojom središnjom linijom, spojenim oblikom, tipom i slojevima, `Pset_WallCommon` i osnovnim količinama (dužina, visina, površine i zapremine), pa ga drugi BIM programi mogu otvoriti i popisati.

## Dobro je znati

- Zidovi se crtaju na svojoj središnjoj liniji. Debljina dolazi iz tipa zida.
- Osnova prikazuje zidove nacrtane ovde punjene, a sve ostalo (stavke iz biblioteke, modeli iz drugih programa) preseče ista ravan, sa onim što je ispod preseka prikazano tankim linijama.
- Zidovi napravljeni u drugim programima prikazuju se na osnovi, ali se još ne mogu menjati ovim alatima.
