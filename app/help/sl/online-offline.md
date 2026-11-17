---
title: Na spletu in brez povezave
summary: Kaj BimCraft naloži s spletnega mesta, kako Shrani za delo brez povezave omogoči odpiranje modelov IFC in risb DWG brez povezave ter zakaj se nič, kar odprete, nikoli ne naloži.
keywords: brez povezave, na spletu, internet, povezava, brez omrežja, način za letalo, obisk na mestu, shrani za delo brez povezave, pripravljeno za delo brez povezave, naloži, zasebnost, wasm, webassembly, motor IFC, DWG, oblak
from: 39e5c7eb
---

BimCraft bere vaše datoteke znotraj zavihka brskalnika. Odpiranje, pregledovanje, urejanje in shranjevanje nikoli ne pošljejo vaših datotek nikamor, ne na spletu ne brez povezave. [Delo brez povezave](common:offline) pojasni, kako delujejo kopije brez povezave v vseh aplikacijah; ta stran pokriva, kar je značilno za BimCraft.

## Kaj BimCraft naloži s spletnega mesta

| Del | Kdaj se naloži brez kopije brez povezave | Velikost |
|---|---|---|
| Sama aplikacija, z 3D preglednikom in kodo motorja IFC | Ko odprete BimCraft | Več megabajtov |
| Del motorja IFC v WebAssembly | Prva datoteka IFC, ki jo odprete v zavihku: „Zaganjanje motorja IFC …“ | Približno 1,6 MB |

Datoteke DWG in DXF, projektne in družinske datoteke ter mape ne potrebujejo nič dodatnega: njihovi bralniki so del aplikacije.

## Shranjevanje BimCraft za uporabo brez povezave

1. Odprite BimCraft, medtem ko ste na spletu.
2. Kliknite {{ui:Shrani za delo brez povezave}} v zgornji vrstici aplikacije.
3. Opazujte, kako gumb šteje, na primer: „Shranjevanje 40 od 212“. Kopija BimCraft je približno 11 MB, ker vključuje motor IFC.
4. Počakajte na {{ui:Pripravljeno za delo brez povezave}}.

Ko piše {{ui:Pripravljeno za delo brez povezave}}, se modeli IFC, risbe DWG in DXF, projektne datoteke, mape in ta pomoč odprejo brez povezave. Ni vam treba najprej odpreti IFC ali DWG, da bi „ogreli“ bralnike.

Če želite posodobiti ali odstraniti kopijo, kliknite {{ui:Pripravljeno za delo brez povezave}} in izberite {{ui:Shrani znova (pridobi najnovejšo različico)}} ali {{ui:Odstrani kopijo brez povezave}}.

## Kaj pomeni gumb

| Gumb | Pomeni |
|---|---|
| {{ui:Shrani za delo brez povezave}} | Kopije v tem brskalniku še ni. Kliknite, da jo shranite |
| „Shranjevanje *n* od *m*“ | Shranjevanje; zavihek naj ostane odprt, dokler se ne konča |
| {{ui:Pripravljeno za delo brez povezave}} | Shranjeno. Z miško se pokaže, kdaj; kliknite za meni |
| {{ui:Shranjevanje ni uspelo}} | Nekatere datoteke se niso prenesle. Preverite povezavo in kliknite, da poskusite znova. Zadnja dobra kopija, če obstaja, ostane |
| {{ui:Delo brez povezave ni na voljo}} | To okno ne more hraniti kopije brez povezave (zasebno okno ali upravljani računalnik). Glejte [Delo brez povezave](common:offline) |

:::offline
Brez povezave ste.

- Če gumb pravi {{ui:Pripravljeno za delo brez povezave}}, se vsaka vrsta datoteke odpre kot običajno.
- Če ne, se odpre le tisto, kar je zavihek že naložil: bralnik, ki se v tem zavihku še ni naložil, ne more zagnati, odpiranje take datoteke pa pokaže napako brskalnika v vrstici stanja. Ne ponovno nalagajte zavihka, dokler spet niste na spletu.
:::

## Kaj nikoli ne potrebuje povezave

Ko je BimCraft odprt v zavihku, ti delujejo brez povezave, tudi brez shranjene kopije:

- Branje projektnih in družinskih datotek ter preverjanje map.
- Izbiranje elementov, branje lastnosti in urejanje vrednosti IFC v modelu, ki je že odprt.
- {{ui:Shrani kot IFC}} in {{ui:Prenesi CSV}}: oba sta prenosa, narejena v zavihku.

## Kaj še ni na voljo

- **Shranjevanje v oblak.** Datoteke se shranjujejo samo v vaš računalnik.

Glejte [Kam gredo vaše datoteke](common:your-files).
