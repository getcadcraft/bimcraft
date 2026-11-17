---
title: Završne obrade prostorija i specifikacije završnih obrada
summary: Odredite čime su obloženi pod, zidovi i strop svake prostorije, dodajte zone poput pločica iza sudopera te dobijte specifikacije završnih obrada po prostoriji, zidu i zoni, s površinama, brojem pločica uključujući rezane i volumenima podloge.
keywords: završna obrada, završne obrade, specifikacija završnih obrada, završne obrade prostorija, završna obrada poda, završna obrada zida, završna obrada stropa, podnožna letva, pločica, pločice, rezane pločice, broj pločica, otpad, podloga, estrih, podložna ploča, žbuka, zona, zaštita od prskanja, pojas obloge, vlažno područje, unutrašnjost, količine
from: 8c30498c
---

## Što ćete učiniti

Jednom recite BimCraftu čime je završena svaka prostorija. Specifikacije završnih obrada tada daju površine, pločice za narudžbu i volumene podloge te se mijenjaju s modelom.

## Koraci

1. Uključite {{ui:Crtanje}}, otvorite **Specifikacije** u lijevoj ploči i kliknite **Završne obrade prostorija**.
2. Pod **Vrste završnih obrada** kliknite **Dodaj vrstu završne obrade**. Dajte joj naziv, vrstu (Pločica, Tabla, Premaz ili Ploča) i debljinu. Za pločicu unesite dužinu i širinu pločice, spoj i postotak dodatka za otpad. Ako je nešto ispod završne obrade (estrih, podložna ploča, sloj žbuke), imenujte to pod **Podloga** i unesite debljinu.
3. Pod **Prostorije** odaberite završnu obradu poda, zida i stropa svake prostorije. Upišite naziv podnožne letve i njezinu visinu ako je prostorija ima.
4. Pod **Zone** kliknite **Dodaj zonu** za dio prostorije koji dobiva drugu završnu obradu:
   - **zidna** zona je pojas između dviju visina iznad poda (pločice iza sudopera od 0 do 1200, pojas obloge). Ona je na svakom zidu prostorije, ili odaberite zidove te prostorije u modelu i kliknite gumb **Uključeno** da zona ostane samo na njima;
   - **podna** ili **stropna** zona je površina koju upišete. Oduzima se od vlastite završne obrade prostorije.
5. Kliknite **Spremi**. To je jedan korak u poništavanju. Duljine se upisuju u jedinicama projekta.

## Specifikacije

Četiri stavke pridružuju se popisu specifikacija:

- **Završne obrade po prostoriji**: svaka prostorija s njezinom završnom obradom poda, zida i stropa, njihovim površinama te podnožnom letvom s njezinom duljinom.
- **Završne obrade po zidu**: svaki dio zida na strani prostorije i pojas koji završna obrada pokriva, s njegovom duljinom, bruto površinom, odbicima, neto površinom i, za pločice, cijelim pločicama, rezanim pločicama i pločicama za narudžbu.
- **Završne obrade po zoni**: svaka zona s njezinom završnom obradom, neto površinom, pločicama i volumenom podloge.
- **Količine završnih obrada**: jedan redak po završnoj obradi: neto površina, cijele i rezane pločice, pločice za narudžbu, podloga i njezin volumen te vlastiti volumen završne obrade.

Grupirajte, zbrojite, spremite i izvezite ih kao bilo koju specifikaciju: vidi [Oblikovanje, spremanje i izvoz specifikacije](topic:schedule-layouts). Kliknite brojku da odaberete ono od čega dolazi: odbici zida odabiru njegova vrata i prozore.

## Kako se mjere završne obrade

- **Zidovi**: svaki dio zida na strani prostorije, njegova duljina uz prostoriju puta visina koju završna obrada pokriva, umanjena za dio svakih vrata i prozora unutar te visine. Zid niži od prostorije obrađuje se do vlastitog vrha. Metoda mjerenja projekta određuje koji su otvori premali da se odbiju ([Specifikacije](topic:plan-schedules-and-pdf)).
- **Podovi i stropovi**: prostorija unutar lica zidova, umanjena za otoke u njoj.
- **Podnožne letve**: duljina zida prostorije umanjena za širinu njezinih vrata.
- **Pločice**: polažu se kao mreža iz jednog kuta površine, s jednim spojem između pločica. Pločica koja je u cijelosti na površini jest cijela pločica; pločica koja je djelomično na njoj (uz rub, oko otvora) jest rezana pločica. Pločice za narudžbu jesu cijele plus rezane, plus dodatak za otpad, zaokruženo naviše. Svaka rezana pločica broji se kao nova pločica: ostaci se ne koriste ponovno.
- **Volumen podloge**: neto površina puta debljina podloge.
- Broj označen **≈** izračunava se iz površine umjesto da se pločice slažu jedna po jedna: površina s upisanom zonom izuzetom iz nje ili vrlo velika površina.

## Dobro je znati

- Završne obrade čuvaju se u datoteci zgrade (skup svojstava `CadCraft_Finishes` na projektu). Svaka prostorija koja ima završnu obradu dobiva i standardni IFC skup svojstava `Pset_SpaceCoveringRequirements`, pa drugi programi čitaju nazive.
- Raspored pločica počinje od kuta. Raspored centriran na prostoriju, uzorak (riblja kost, zidarski spoj) i ponovno korištenje ostataka nisu izrađeni.
- Zakrivljeni zid i granica prostorije koja nije zid (razdjelnik prostorija) navodi se kao **Druga granica** s duljinom i bez otvora.
- Ranije postojeća stavka **Završne obrade** navodi slojeve završne obrade zidnih tipova; **Slojevi: površina i volumen** navodi svaki sloj svakog slojevitog tipa. Završne obrade prostorija ovdje su ono što se primjenjuje na prostoriju iznad tih slojeva.
- Pomoćnik može postaviti završne obrade umjesto vas pomoću `finishes_set`: vidi [Neka AI pomoćnik radi s vašim modelom](topic:assistants).
