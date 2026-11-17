---
title: Presjeci, izgledi i listovi
summary: Nacrtajte linije presjeka na tlocrtu, zatim otvorite Listove za set spreman za štampu, napravljen iz modela: tlocrte svakog nivoa, četiri izgleda, presjeke zgrade, specifikacije i konstrukciju zidova, s blokovima naslova i razmjerama, kao jedan PDF.
keywords: listovi, set crteža, građevinska dokumentacija, štampa, ispis, pdf, izgled, izgledi, sjeverni izgled, presjek, presjek zgrade, linija presjeka, rez, skrivene linije, blok naslova, broj lista, razmjera, papir, 11x17, 24x36, A3, A1, set za dozvolu
from: 91ed0cde
---

## Šta ćete uraditi

Napraviti set crteža iz modela: tlocrt svakog nivoa, sjeverni, istočni, južni i zapadni izgled, presjek zgrade za svaku liniju presjeka, specifikacije vrata, prozora, prostorija i građe, te izgled svakog zida s konstrukcijom. Set se ponovo crta iz modela svaki put kada ga otvorite, pa uvijek odgovara onome što ste izgradili.

## Nacrtajte liniju presjeka

1. Na nivou otvorite {{ui:Verzija}} i odaberite {{ui:Linija presjeka}}.
2. Kliknite gdje linija počinje i gdje završava. Kratka linija na njenoj sredini pokazuje stranu prema kojoj gleda presjek: lijevo od linije, idući od prvog do drugog klika.
3. Linija se prikazuje na tlocrtu s oznakama na krajevima i svojim slovom (A, zatim B, i tako dalje).

Odaberite liniju da je promijenite u **Svojstvima**: njeno slovo, **Okreni pogled** da gledate u suprotnom smjeru, i **Vidi do** da zaustavite pogled na zadanoj udaljenosti iza reza (0 prikazuje sve iza njega). Pritisnite {{key:Delete}} da je uklonite.

## Otvorite listove

1. Kliknite {{ui:Listovi}} u traci modela (pored {{ui:Štampaj}}).
2. Listovi su navedeni lijevo: **A-101** i dalje za tlocrte, **A-201** za izglede, **A-301** za presjeke, **A-401** za specifikacije i **S-101** za konstrukciju zidova. Kliknite jedan da ga vidite.
3. Odaberite **Papir**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 ili A1. Papir zadržava svoj standardni naziv, a njegova veličina ispisana je u {{ui:Jedinice}} koje ste odabrali, na primjer *Letter · 8.5 × 11 in* ili *A3 · 297 × 420 mm*.
4. Kliknite {{ui:Preuzmi set kao PDF}}: jedna stranica po listu.

## Standardne napomene iz paketa propisa

U listu, {{ui:Standardne napomene}} omogućava da postavite napomene iz paketa propisa (po disciplini) u desnu kolonu lista. Svaka napomena čuva paket i član iz kojeg dolazi, a odštampani list kaže kada paket nije provjeren. Napomene su polazna tačka: osoba odgovorna za crtež odlučuje šta one znače. Potreban im je dodatak Propisi o gradnji.

## Šta je na listovima

- **Tlocrti** prikazuju zidove, vrata, prozore, prostorije s njihovim površinama, kote i linije presjeka, u najvećoj standardnoj razmjeri koja stane: 1/4" = 1'-0" ili manje (1:50 ili manje u milimetrima).
- **Izgledi** se crtaju iz 3D modela s uklonjenim skrivenim linijama, dva po listu, sve u istoj razmjeri, s linijom tla ispod. Krov, temelji i tlo prikazani su kako su modelirani.
- **Presjeci** popunjavaju ono što rez prolazi kroz (zidove, podove, krov) i crtaju ono što se vidi iza njega.
- **Izgledi i presjeci nose svoje napomene:** oznaku za svaki nivo s njegovim imenom i visinom desno, visinu između nivoa lijevo, a na izgledu širinu zgrade ispod i oznaku (D1, W1) na svakim vratima i prozoru u zidu okrenutom prema vama. Za unutrašnje zidove jedne prostorije pogledajte [Unutrašnji izgledi](topic:interior-elevations).
- **Specifikacije** su iste tabele kao {{ui:Specifikacije}} u traci modela.
- **Konstrukcija** prikazuje stubove, rame, nadvratnike i podprozornike svakog okvirnog zida kako se vide s njegove vanjske strane, da ekipa može da ga isplanira. Pogledajte [Konstrukcija zidova, podova i krovova](topic:framing).

Svaki list ima blok naslova s brojem, naslovom, imenom datoteke i datumom.

:::tip
Listovi dolaze iz modela: da promijenite crtež, promijenite model i ponovo otvorite {{ui:Listovi}}.
:::

:::note
Izgledi i presjeci prikazuju samo linije i ispune: kote, oznake nivoa i napomene na njima još nisu napravljene.
:::
