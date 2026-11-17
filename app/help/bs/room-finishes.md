---
title: Završne obrade prostorija i specifikacije završnih obrada
summary: Navedite čime su obloženi pod, zidovi i plafon svake prostorije, dodajte zone kao što je obložena zaštita od prskanja, i dobijte specifikacije završnih obrada po prostoriji, zidu i zoni, s površinama, brojem pločica uključujući rezane, i zapreminama podloge.
keywords: završna obrada, završne obrade, specifikacija završnih obrada, završna obrada prostorije, završna obrada poda, završna obrada zida, završna obrada plafona, podnožna letva, pločica, pločice, rezane pločice, broj pločica, otpad, podloga, estrih, podložna ploča, malter, zona, zaštita od prskanja, pojas zida, mokra zona, enterijer, količine
from: 8c30498c
---

## Šta ćete uraditi

Jednom recite BimCraft-u čime je svaka prostorija završena. Specifikacije završnih obrada tada daju površine, pločice za naručivanje i zapremine podloge, i mijenjaju se s modelom.

## Koraci

1. Uključite {{ui:Crtanje}} i u lijevom panelu otvorite **Specifikacije**, pa kliknite **Završne obrade prostorija**.
2. Pod **Vrste završnih obrada** kliknite **Dodaj vrstu završne obrade**. Dajte joj naziv, vrstu (Pločica, Ploča, Premaz ili Daska) i debljinu. Za pločicu navedite dužinu i širinu pločice, fugu i dozvoljeni otpad u procentima. Ako nešto ide ispod završne obrade (estrih, podložna ploča, sloj maltera), navedite to pod **Podloga** i dajte njegovu debljinu.
3. Pod **Prostorije** odaberite završnu obradu poda, zida i plafona svake prostorije. Ako prostorija ima podnožnu letvu, upišite njen naziv i visinu.
4. Pod **Zone** kliknite **Dodaj zonu** za dio prostorije koji dobija drugu završnu obradu:
   - **zona zida** je pojas između dvije visine iznad poda (obložena zaštita od prskanja od 0 do 1200, pojas do pola zida). Ona je na svakom zidu prostorije, ili odaberite zidove te prostorije u modelu i kliknite dugme **Uključeno** da je ograničite na njih;
   - **zona poda** ili **plafona** je površina koju upišete. Oduzima se od vlastite završne obrade prostorije.
5. Kliknite **Spasi**. To je jedan korak u poništavanju. Dužine se upisuju u jedinicama projekta.

## Specifikacije

Četiri stavke se pridružuju listi Specifikacija:

- **Završne obrade po prostoriji**: svaka prostorija s njenom završnom obradom poda, zida i plafona, njihovim površinama, i podnožnom letvom s njenom dužinom.
- **Završne obrade po zidu**: svaki dio zida na strani prostorije i pojas koji završna obrada pokriva, s dužinom, bruto površinom, odbicima, neto površinom i, za pločice, cijelim pločicama, rezanim pločicama i pločicama za naručivanje.
- **Završne obrade po zoni**: svaka zona s njenom završnom obradom, neto površinom, pločicama i zapreminom podloge.
- **Količine završnih obrada**: jedan red po završnoj obradi: neto površina, cijele i rezane pločice, pločice za naručivanje, podloga i njena zapremina, i sopstvena zapremina završne obrade.

Grupišite, sabirajte, spašavajte i izvozite ih kao svaku drugu specifikaciju: vidi [Raspored, čuvanje i izvoz specifikacije](topic:schedule-layouts). Kliknite na brojku da odaberete šta ju je dalo: odbici zida odabiru njegova vrata i prozore.

## Kako se završne obrade mjere

- **Zidovi**: svaki dio zida na strani prostorije, njegova dužina duž prostorije puta visina koju završna obrada pokriva, umanjena za dio svakih vrata i prozora unutar te visine. Zid niži od prostorije završava se do svog vlastitog vrha. Projektna metoda mjerenja odlučuje koji otvori su premali za odbijanje ([Specifikacije](topic:plan-schedules-and-pdf)).
- **Podovi i plafoni**: prostorija unutar lica zidova, umanjena za otoke u njoj.
- **Podnožne letve**: dužina zidova prostorije umanjena za širinu njenih vrata.
- **Pločice**: polažu se kao mreža od jednog ugla površine, s jednom fugom između pločica. Pločica koja je u cijelosti na površini je cijela pločica; pločica koja je djelimično na njoj (uz ivicu, oko otvora) je rezana pločica. Pločice za naručivanje su cijele plus rezane, plus dozvoljeni otpad, zaokruženo naviše. Svaka rezana pločica se broji kao nova pločica: otpaci se ne koriste ponovo.
- **Zapremina podloge**: neto površina puta debljina podloge.
- Broj označen sa **≈** izračunat je iz površine umjesto polaganja pločica jednu po jednu: površina s upisanom zonom izvučenom iz nje, ili vrlo velika površina.

## Dobro je znati

- Završne obrade se čuvaju u datoteci zgrade (skup svojstava `CadCraft_Finishes` na projektu). Svaka prostorija koja ima završnu obradu također dobija standardni IFC skup svojstava `Pset_SpaceCoveringRequirements`, pa ga drugi programi čitaju s nazivima.
- Raspored pločica počinje od ugla. Raspored centriran u prostoriji, uzorak (riblja kost, opeka) i ponovna upotreba otpadaka se ne računaju.
- Zakrivljeni zid i granica prostorije koja nije zid (razdjelnik prostorija) navedeni su kao **Druga granica** s dužinom i bez otvora.
- Stavka **Završne obrade** koja je tu prije navodi slojeve završne obrade tipova zidova; **Slojevi: površina i zapremina** navodi svaki sloj svakog slojevitog tipa. Završne obrade prostorija ovdje su ono što se primjenjuje na prostoriju iznad tih slojeva.
- Pomoćnik može postaviti završne obrade umjesto vas pomoću `finishes_set`: vidi [Dozvolite AI pomoćniku da radi s vašim modelom](topic:assistants).
