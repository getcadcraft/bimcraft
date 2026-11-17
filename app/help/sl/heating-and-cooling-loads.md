---
title: Ocena toplotnih in hladilnih obremenitev
summary: Toplotna izguba vsake sobe, njeno ogrevanje v letu po stopinjskih dnevih in njen vrh hlajenja iz tega, kar jo omejuje v modelu, ter U-vrednosti vsakega elementa, z vsemi vnosi na ogled. Pripomoček za zasnovo, ne izračun skladnosti.
keywords: energija, ogrevanje, hlajenje, toplotna izguba, toplotna obremenitev, hladilna obremenitev, U-vrednost, toplotna prehodnost, stopinjski dnevi, hdd, prezračevanje, menjave zraka, notranji dobitki, sončni dobitek, lambda, toplotna prevodnost, toplotna izolacija, zgodnja zasnova, analiza, sobe, prostori
from: ec312d20
---

V zavihku {{ui:Daylight}} po {{ui:Calculate}} odprite {{ui:Heating and cooling loads}} in kliknite {{ui:Work out the loads}}. Vsaka soba dobi svojo **toplotno izgubo** na hladen projektni dan, svoje **ogrevanje v letu** in svoj **vrh hlajenja** na vroč dan. Nič se ne pošlje; v modelu se nič ne spremeni, razen če vpišete U-vrednost.

:::warning
To je **pripomoček za zasnovo, ne izračun skladnosti**: ocena v stacionarnem stanju z vsemi vnosi na zaslonu. **Ni** metoda ISO 52016-1, ne simulacija in ne energetski certifikat; ne določa velikosti kotlov, toplotnih črpalk ali hladilnikov. Rezultate preverite, velikost opreme pa določite z inženirjem.
:::

## Kaj omejuje vsako sobo

BimCraft to najde v samem modelu, zato deluje z IFC katerega koli programa (ne potrebuje mej prostorov, ki jih nekateri programi izvozijo). Od vsakega kosa površine vsake sobe pogleda ravno ven:

- prva stena, okno, vrata, tla, streha, obloga, zavesna stena ali nosilec, na katerega naleti, **omejuje** ta kos;
- takoj za tem elementom je bodisi **druga soba** (šteje se kot sosednja, na isti temperaturi: brez izgube), bodisi **nič** (zunaj), ali pa, pod tlemi na najnižji etaži, **tla**;
- odprt prehod v drugo sobo šteje kot sosednja soba; kos, ki ne naleti na nič (v 1.5 m vstran ali navzdol, 8 m navzgor), je naveden pod sobo in izpuščen.

Okna in vrata prevzamejo svojo velikost iz IFC (skupna širina × višina) iz stene, v kateri sta. Kliknite sobo v tabeli, da vidite vsak element, ki jo omejuje, z njegovo površino, U-vrednostjo in virom U-vrednosti.

## U-vrednosti

Za vsak element BimCraft uporabi v tem vrstnem redu:

1. **Lastna U-vrednost IFC** — `ThermalTransmittance` v naboru splošnih lastnosti elementa (na primer `Pset_WallCommon`) ali v njegovem tipu. Večina projektnih programov jo zna zapisati.
2. **Njegove plasti materiala** — 1 ÷ (notranji površinski upor + debelina vsake plasti ÷ njena toplotna prevodnost λ + zunanji površinski upor), z običajnimi površinskimi upori (0.13 in 0.04 m²K/W za stene; 0.10 navzgor, 0.17 navzdol znotraj). Tipične prevodnosti za začetek (kamena volna 0.035, opeka 0.77, beton 1.4 …); pod {{ui:toplotna prevodnost materialov}} vpišite proizvajalčevo, in vsaka U-vrednost iz teh plasti se temu prilagodi.
3. **Tipična vrednost** (stene 0.3, strehe 0.2, tla 0.25, okna 1.4, vrata 1.6 W/m²K), označena kot taka — vpišite svojo.

Vnesena U-vrednost v podrobnostih sobe se zapiše v splošni nabor lastnosti elementa kot `ThermalTransmittance` (en korak; {{key:Mod+Z}} jo razveljavi). Če več elementov deli ta nabor (na primer en tip stene), se vsi spremenijo skupaj, vrstica stanja pa pove, koliko jih je.

## Ogrevanje

- **Toplotna izguba** = Σ U × A × (notranja − zunanja) za vse proti zunanjosti + Σ U × A × (notranja − tla) za tla na terenu + 0.335 × menjave zraka na uro × prostornina sobe × (notranja − zunanja). 0.335 Wh na m³ in kelvin je gostota zraka (1.2 kg/m³) × toplotna kapaciteta zraka (1005 J/kgK).
- **Ogrevanje v letu** = (izguba sobe na stopinjo proti zunanjosti, skozi ovoj in zrak, plus njena izguba v tla, sorazmerno z isto razliko) × **stopinjski dnevi** × 24 ÷ 1000, v kWh. Vpišite stopinjske dneve za kraj ali {{ui:Preberi stopinjske dneve iz CSV …}} (ena vrstica na dan ali mesec; zadnje število v vsaki vrstici se sešteje). Uporabite stopinjske dneve do bazne temperature vašega vira: ta baza že upošteva brezplačno toploto ljudi, luči in sonca.

## Hlajenje

**Vrh hlajenja** = toplota skozi ovoj in zrak pri poletni projektni temperaturi + ljudje (površina na osebo × toplota na osebo) + osvetlitev in oprema na m² tlorisne površine + **sonce**: vrh {{ui:Sonce skozi okna na izbrani datum}} za to sobo. Najprej izračunajte sonce na vroč dan; do takrat sonce šteje 0 in razdelek to pove. Vrhovi posameznih delov se seštejejo, tudi če so ob različnih urah, kar nekoliko preceni rezultat.

## Kaj izpušča

- Mesečne in urne metode ISO 52016-1 (plačan standard), toploto, shranjeno v masi stavbe, toplotne mostove, delovanje sistemov ogrevanja in hlajenja ter podnebne datoteke.
- Sobe, ki si sosedujejo, se obravnavajo na isti temperaturi; neogrevani prostori niso modelirani.

Glejte tudi [Ocena dnevne svetlobe v vsaki sobi](topic:daylight-factor).
