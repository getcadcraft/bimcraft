---
title: Izgledi, preseci i listovi
summary: Nacrtaj linije preseka na osnovi, pa otvori Listovi za set spreman za štampu napravljen iz modela: osnove svakog nivoa, četiri izgleda, preseke zgrade, specifikacije i konstrukciju zidova, sa natpisnim blokovima i razmerama, kao jedan PDF.
keywords: listovi, set crteža, građevinska dokumentacija, štampa, plot, pdf, izgled, izgledi, severni izgled, presek, presek zgrade, linija preseka, sečenje, skrivene linije, natpisni blok, broj lista, razmera, 1:50, 1:100, papir, 11x17, 24x36, A3, A1, set za dozvolu
from: 91ed0cde
---

## Šta ćeš raditi

Napravi set crteža iz modela: osnovu svakog nivoa, severni, istočni, južni i zapadni izgled, presek zgrade za svaku liniju preseka, tabele vrata, prozora, prostorija i građe, i izgled svakog zida sa konstrukcijom. Set se ponovo crta iz modela svaki put kad ga otvoriš, pa uvek odgovara onome što si sagradio.

## Nacrtaj liniju preseka

1. Na nivou otvori {{ui:Verzija}} i izaberi {{ui:Linija preseka}}.
2. Klikni gde linija počinje i gde se završava. Kratka linija na sredini pokazuje stranu prema kojoj presek gleda: levo od linije, idući od prvog klika ka drugom.
3. Linija se na osnovi prikazuje sa svojim krajevima i slovom (A, zatim B, i tako dalje).

Izaberi liniju da je promeniš u **Svojstvima**: njeno slovo, **Okreni pogled** da gledaš na drugu stranu, i **Gledaj do** da zaustaviš pogled na zadatoj udaljenosti iza preseka (0 prikazuje sve iza njega). Pritisni {{key:Delete}} da je ukloniš.

## Otvori listove

1. Klikni {{ui:Listovi}} u traci modela (pored {{ui:Štampaj}}).
2. Listovi su navedeni levo: **A-101** i dalje za osnove, **A-201** za izglede, **A-301** za preseke, **A-401** za specifikacije i **S-101** za konstrukciju zidova. Klikni jedan da ga vidiš.
3. Izaberi **Papir**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 ili A1. Papir zadržava svoj standardni naziv, a njegova veličina je zapisana u {{ui:Jedinice}} koje si izabrao, na primer *Letter · 8.5 × 11 in* ili *A3 · 297 × 420 mm*.
4. Klikni {{ui:Preuzmi set kao PDF}}: jedna stranica po listu.

## Standardne napomene iz paketa propisa

U listu, {{ui:Standardne napomene}} omogućava da postaviš napomene iz paketa propisa (po disciplini) u desnu kolonu lista. Svaka napomena čuva paket i tačku iz kojeg potiče, a odštampan list kaže kada je paket neproveren. Napomene su polazna tačka: odgovorna osoba za crtež odlučuje šta one kažu. Potreban im je dodatak Građevinski propisi.

## Šta je na listovima

- **Osnove** prikazuju zidove, vrata, prozore, prostorije sa njihovim površinama, kote i linije preseka, u najvećoj standardnoj razmeri koja staje: 1/4" = 1'-0" ili manja (1:50 ili manja u milimetrima).
- **Izgledi** se crtaju iz 3D modela sa uklonjenim skrivenim linijama, dva po listu, sve u istoj razmeri, sa linijom tla ispod. Krov, temelji i tlo prikazani su onako kako su modelovani.
- **Preseci** popunjavaju ono što seče (zidovi, podovi, krov) i crtaju ono što se vidi iza njega.
- **Izgledi i preseci nose svoje oznake:** oznaku za svaki nivo sa imenom i visinom desno, visinu između nivoa levo, a na izgledu širinu zgrade ispod i oznaku (D1, W1) na svakim vratima i prozoru u zidu okrenutom ka tebi. Za zidove jedne prostorije vidi [Unutrašnji izgledi](topic:interior-elevations).
- **Specifikacije** su iste tabele kao {{ui:Specifikacije}} u traci modela.
- **Konstrukcija** prikazuje stubiće, rame, nadvratnike i podprozornike svakog zida sa konstrukcijom, kako se vidi sa spoljne strane, da bi ekipa mogla da ga obeleži. Vidi [Konstrukcija zidova, podova i krovova](topic:framing).

Svaki list ima natpisni blok sa svojim brojem, nazivom, imenom datoteke i datumom.

:::tip
Listovi dolaze iz modela: da promeniš crtež, promeni model pa ponovo otvori {{ui:Listovi}}.
:::

:::note
Izgledi i preseci prikazuju samo linije i popune: kote, oznake nivoa i napomene na njima još nisu napravljene.
:::
