---
title: Pročelja, presjeci i listovi
summary: Nacrtajte linije presjeka na tlocrtu, zatim otvorite Listove za komplet spreman za ispis izrađen iz modela: tlocrte svake razine, četiri pročelja, presjeke zgrade, specifikacije i konstrukciju zidova, sa zaglavljima i mjerilima, kao jedan PDF.
keywords: listovi, komplet crteža, građevinska dokumentacija, ispis, plotanje, pdf, pročelje, pročelja, sjeverno pročelje, presjek, presjek zgrade, linija presjeka, rez, skrivene linije, zaglavlje, broj lista, mjerilo, 1/4" = 1'-0", 1:50, 1:100, papir, 11x17, 24x36, A3, A1, komplet za dozvolu
from: 91ed0cde
---

## Što ćete napraviti

Izradite komplet crteža iz modela: tlocrt svake razine, sjeverno, istočno, južno i zapadno pročelje, presjek zgrade za svaku liniju presjeka, tablice vrata, prozora, prostorija i drvene građe, te pročelje svakog zida s konstrukcijom. Komplet se ponovno crta iz modela svaki put kad ga otvorite, pa se uvijek slaže s onim što ste izgradili.

## Nacrtajte liniju presjeka

1. Na razini otvorite {{ui:Izgradnja}} i odaberite {{ui:Linija presjeka}}.
2. Kliknite gdje linija počinje i gdje završava. Kratka linija na sredini pokazuje stranu prema kojoj presjek gleda: lijevu stranu linije, idući od prvog klika prema drugom.
3. Linija se prikazuje na tlocrtu sa svojim oznakama i slovom (A, zatim B, i tako dalje).

Odaberite liniju da je promijenite u **Svojstvima**: njezino slovo, **Okreni pogled** da gledate u drugom smjeru, i **Gledaj dalje do** da zaustavite pogled na zadanoj udaljenosti iza reza (0 prikazuje sve iza nje). Pritisnite {{key:Delete}} za uklanjanje.

## Otvorite listove

1. Kliknite {{ui:Listovi}} u traci modela (pored {{ui:Ispis}}).
2. Listovi su na popisu lijevo: **A-101** i dalje za tlocrte, **A-201** za pročelja, **A-301** za presjeke, **A-401** za tablice i **S-101** za konstrukciju zidova. Kliknite jedan da ga vidite.
3. Odaberite **Papir**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 ili A1. Papir zadržava svoj standardni naziv, a njegova veličina je zapisana u {{ui:Jedinice}} koje ste odabrali, npr. *Letter · 8.5 × 11 in* ili *A3 · 297 × 420 mm*.
4. Kliknite {{ui:Preuzmi komplet kao PDF}}: jedna stranica po listu.

## Standardne napomene iz paketa propisa

Na listu, {{ui:Standardne napomene}} omogućuje postavljanje napomena iz paketa propisa (po disciplini) u desni stupac lista. Svaka napomena zadržava paket i članak iz kojeg dolazi, a ispisani list kaže kad paket nije provjeren. Napomene su polazište: osoba odgovorna za crtež odlučuje što će pisati. Potreban im je dodatak Propisi o gradnji.

## Što je na listovima

- **Tlocrti** prikazuju zidove, vrata, prozore, prostorije s njihovim površinama, kote i linije presjeka, u najvećem standardnom mjerilu koje stane: 1/4" = 1'-0" ili manje (1:50 ili manje u milimetrima).
- **Pročelja** se crtaju iz 3D modela bez skrivenih linija, dva na listu, sva u istom mjerilu, s linijom tla ispod. Krov, temelji i tlo prikazuju se kako su modelirani.
- **Presjeci** popunjavaju ono kroz što rez prolazi (zidovi, podovi, krov) i crtaju ono što se vidi iza njega.
- **Pročelja i presjeci nose svoje oznake:** oznaka za svaku razinu s nazivom i visinom desno, visina između razina lijevo, a na pročelju širina zgrade ispod njega i oznaka (D1, W1) na svakim vratima i prozoru u zidu okrenutom prema vama. Za zidove jedne prostorije pogledajte [Unutarnji prikazi](topic:interior-elevations).
- **Tablice** su iste kao {{ui:Specifikacije}} u traci modela.
- **Konstrukcija** prikazuje stupiće, pojasnice, nadvoje i podprozornike svakog zida s konstrukcijom gledano s njegove vanjske strane, kako bi ekipa mogla iscrtati. Pogledajte [Konstrukcija zidova, podova i krovova](topic:framing).

Svaki list ima zaglavlje (naslovni blok) s brojem, naslovom, nazivom datoteke i datumom.

:::tip
Listovi dolaze iz modela: da promijenite crtež, promijenite model i ponovno otvorite {{ui:Listovi}}.
:::

:::note
Pročelja i presjeci prikazuju samo linije i ispune: kote, oznake razina i napomene na njima još nisu izrađene.
:::
