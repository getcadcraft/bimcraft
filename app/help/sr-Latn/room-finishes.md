---
title: Završne obrade prostorija i specifikacije završnih obrada
summary: Recite čime su obložen pod, zidovi i plafon svake prostorije, dodajte zone kao što je zaštitna obloga zida od pločica, i dobijte specifikacije po prostoriji, zidu i zoni, sa površinama, brojem pločica uključujući isečene i zapreminama podloge.
keywords: završna obrada, završne obrade, specifikacija završnih obrada, završne obrade prostorija, završna obrada poda, završna obrada zida, završna obrada plafona, podnožna letvica, pločica, pločice, isečene pločice, broj pločica, otpad, podloga, estrih, podložna ploča, malter, zona, zaštitna obloga, obloga do polovine zida, mokro područje, enterijer, količine
from: 8c30498c
---

## Šta ćeš uraditi

Jednom kažeš BimCraft-u čime je završena svaka prostorija. Specifikacije završnih obrada zatim daju površine, pločice za naručivanje i zapremine podloge, i menjaju se sa modelom.

## Koraci

1. Uključi {{ui:Crtanje}}, otvori **Specifikacije** u levom panelu i klikni **Završne obrade prostorija**.
2. Pod **Vrste završne obrade** klikni **Dodaj vrstu završne obrade**. Daj joj naziv, vrstu (Pločica, Ploča, Premaz ili Daska) i debljinu. Za pločicu daj dužinu i širinu pločice, fugu i dozvoljeni otpad u procentima. Ako nešto ide ispod završne obrade (estrih, podložna ploča, sloj maltera), navedi to pod **Podloga** i daj mu debljinu.
3. Pod **Prostorije** izaberi završnu obradu poda, zida i plafona svake prostorije. Upiši naziv podnožne letvice i njenu visinu ako je prostorija ima.
4. Pod **Zone** klikni **Dodaj zonu** za deo prostorije koji dobija drugu završnu obradu:
   - zona **zida** je pojas između dve visine iznad poda (zaštitna obloga od pločica od 0 do 1200, obloga do polovine zida). Važi za svaki zid prostorije, ili izaberi zidove te prostorije u modelu i klikni dugme **Uključi** da je ograničiš na njih;
   - zona **poda** ili **plafona** je površina koju upisuješ. Oduzima se od sopstvene završne obrade prostorije.
5. Klikni **Sačuvaj**. To je jedan korak za {{ui:Opozovi}}. Dužine se upisuju u jedinicama projekta.

## Specifikacije

Četiri stavke se pridružuju listi Specifikacija:

- **Završne obrade po prostoriji**: svaka prostorija sa njenom završnom obradom poda, zida i plafona, njihovim površinama i podnožnom letvicom sa dužinom.
- **Završne obrade po zidu**: svaki deo zida sa strane prostorije i pojas koji pokriva završna obrada, sa dužinom, bruto površinom, odbicima, neto površinom i, za pločice, celim pločicama, isečenim pločicama i pločicama za naručivanje.
- **Završne obrade po zoni**: svaka zona sa svojom završnom obradom, neto površinom, pločicama i zapreminom podloge.
- **Količine završnih obrada**: jedan red po završnoj obradi: neto površina, cele i isečene pločice, pločice za naručivanje, podloga i njena zapremina, i sopstvena zapremina završne obrade.

Grupiši, zbrajaj, čuvaj i izvoz ih kao bilo koju specifikaciju: pogledaj [Oblikovanje, čuvanje i izvoz specifikacije](topic:schedule-layouts). Klikni na brojku da izabereš ono odakle potiče: odbici zida biraju njegova vrata i prozore.

## Kako se završne obrade mere

- **Zidovi**: svaki deo zida sa strane prostorije, njegova dužina duž prostorije puta visina koju završna obrada pokriva, umanjeno za deo svakih vrata i prozora unutar te visine. Zid niži od prostorije završava se do svoje gornje ivice. Merna metoda projekta odlučuje koji otvori su premali da bi se odbili ([Specifikacije](topic:plan-schedules-and-pdf)).
- **Podovi i plafoni**: prostorija unutar lica zidova, umanjeno za ostrva u njoj.
- **Podnožne letvice**: dužina zidova prostorije umanjena za širinu njenih vrata.
- **Pločice**: polažu se kao mreža od jednog ugla površine, sa jednom fugom između pločica. Pločica potpuno na površini je cela pločica; pločica delimično na njoj (uz ivicu, oko otvora) je isečena pločica. Pločice za naručivanje su cele plus isečene, plus dozvoljeni otpad, zaokruženo naviše. Svaka isečena pločica se broji kao nova pločica: ostaci se ne koriste ponovo.
- **Zapremina podloge**: neto površina puta debljina podloge.
- Broj označen sa **≈** izračunat je iz površine umesto polaganja pločicu po pločicu: površina sa zonom koja je upisana i oduzeta od nje, ili vrlo velika površina.

## Dobro je znati

- Završne obrade se čuvaju u datoteci zgrade (skup svojstava `CadCraft_Finishes` na projektu). Svaka prostorija koja ima završnu obradu dobija i standardni IFC skup svojstava `Pset_SpaceCoveringRequirements`, pa ga drugi programi čitaju kao nazive.
- Raspored pločica počinje od ugla. Raspored centriran u prostoriji, uzorak (riblja kost, zidarska veza) i ponovna upotreba ostataka se ne računaju.
- Zakriveljen zid i granica prostorije koja nije zid (razdelnik prostorija) navode se kao **Druga granica** sa dužinom i bez otvora.
- Ranija stavka **Završne obrade** navodi slojeve završne obrade tipova zidova; **Slojevi: površina i zapremina** navodi svaki sloj svakog slojevitog tipa. Završne obrade prostorija ovde su ono što se primenjuje na prostoriju preko tih slojeva.
- Pomoćnik može postaviti završne obrade umesto vas pomoću `finishes_set`: pogledaj [Neka AI pomoćnik radi sa vašim modelom](topic:assistants).
