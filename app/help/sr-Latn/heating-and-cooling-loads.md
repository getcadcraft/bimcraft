---
title: Proceni opterećenja grejanja i hlađenja
summary: Gubitak toplote svake prostorije, njeno grejanje tokom godine po stepen-danima i vrh hlađenja, iz onoga što je ograničava u modelu i U-vrednosti svakog elementa, sa svim ulazima prikazanim. Pomoćno sredstvo za projektovanje, a ne provera usaglašenosti.
keywords: energija, grejanje, hlađenje, gubitak toplote, toplotno opterećenje, opterećenje hlađenja, U-vrednost, koeficijent prolaza toplote, stepen-dani, hdd, ventilacija, izmene vazduha, unutrašnji dobici, solarni dobitak, lambda, provodljivost, izolacija, rana faza projektovanja, analiza, prostorije, prostori
from: ec312d20
---

Na kartici {{ui:Dnevna svetlost}}, posle {{ui:Izračunaj}}, otvorite {{ui:Opterećenja grejanja i hlađenja}} i kliknite {{ui:Izračunaj opterećenja}}. Svaka prostorija dobija svoj **gubitak toplote** za hladan projektni dan, svoje **grejanje tokom godine** i svoj **vrh hlađenja** za vruć dan. Ništa se ne otprema; ništa se ne menja u modelu, osim ako ne upišete U-vrednost.

:::warning
Ovo je **pomoćno sredstvo za projektovanje, a ne provera usaglašenosti**: procena u stacionarnom stanju sa svim ulazima na ekranu. **Nije** metoda ISO 52016-1, nije simulacija i nije energetski sertifikat; ne dimenzioniše kotlove, toplotne pumpe ni rashladne jedinice. Rezultate proverite, a opremu dimenzionišite sa inženjerom.
:::

## Šta ograničava svaku prostoriju

BimCraft to nalazi u samom modelu, pa radi sa IFC-om bilo kog programa (ne treba mu granice prostora koje neki programi izvoze). Iz svakog dela površine svake prostorije gleda ravno napolje:

- prvi zid, prozor, vrata, pod, krov, obloga, zavesni zid ili greda koju sretne **ograničava** taj deo;
- odmah iza tog elementa, ili **druga prostorija** (računa se kao susedna, na istoj temperaturi: bez gubitka), ili **ništa** (spolja), ili, pod podom na najnižem nivou, **tlo**;
- otvoreni prolaz u drugu prostoriju računa se kao susedni; deo koji ne sretne ništa (u okviru 1.5 m u stranu ili nadole, 8 m nagore) navodi se pod prostorijom i ne uzima se u obzir.

Prozori i vrata uzimaju svoju veličinu iz IFC-a (ukupna širina × visina) iz zida u kome se nalaze. Kliknite prostoriju u tabeli da vidite svaki element koji je ograničava, sa njegovom površinom, U-vrednošću i odakle je U-vrednost došla.

## U-vrednosti

Za svaki element BimCraft koristi ovim redom:

1. **U-vrednost iz samog IFC-a** — `ThermalTransmittance` u zajedničkom skupu svojstava elementa (na primer `Pset_WallCommon`) ili u skupu njegovog tipa. Većina projektantskih programa može da je upiše.
2. **Njegovi slojevi materijala** — 1 ÷ (unutrašnji otpor površine + debljina svakog sloja ÷ njegova provodljivost λ + spoljašnji otpor površine), sa uobičajenim otporima površine (0.13 i 0.04 m²K/W za zidove; 0.10 nagore i 0.17 nadole unutra). Tipične provodljivosti za početak (mineralna vuna 0.035, cigla 0.77, beton 1.4…); pod {{ui:Provodljivost materijala}} upišite proizvođačevu, i svaka U-vrednost iz tih slojeva to prati.
3. **Tipična vrednost** (zidovi 0.3, krovovi 0.2, podovi 0.25, prozori 1.4, vrata 1.6 W/m²K), označena kao takva — upišite svoju.

Upisana U-vrednost u detalju prostorije zapisuje se u zajednički skup svojstava elementa kao `ThermalTransmittance` (jedan korak; {{key:Mod+Z}} je opoziva). Ako više elemenata deli taj skup (na primer jedan tip zida), svi se menjaju zajedno, a statusna linija kaže koliko ih je.

## Grejanje

- **Gubitak toplote** = Σ U × A × (unutra − spolja) za sve što ide ka spolju + Σ U × A × (unutra − tlo) za podove na tlu + 0.335 × izmene vazduha na sat × zapremina prostorije × (unutra − spolja). 0.335 Wh po m³ po kelvinu je gustina vazduha (1.2 kg/m³) puta njegov toplotni kapacitet (1005 J/kgK).
- **Grejanje tokom godine** = (gubitak prostorije po stepenu ka spolju, kroz konstrukciju i vazduh, plus njen gubitak ka tlu srazmeran istoj razlici) × **stepen-dani** × 24 ÷ 1000, u kWh. Upišite stepen-dane za to mesto, ili {{ui:Pročitaj stepen-dane iz CSV-a…}} (jedan red po danu ili mesecu; zbraja se poslednji broj u svakom redu). Koristite stepen-dane za baznu temperaturu koju koristi vaš izvor: ta osnova već uzima u obzir besplatnu toplotu ljudi, svetla i sunca.

## Hlađenje

**Vrh hlađenja** = toplota kroz konstrukciju i vazduh na letnjoj projektnoj temperaturi + ljudi (površina poda po osobi × toplota po osobi) + osvetljenje i oprema po m² poda + **sunce**: vrh {{ui:Sunce kroz prozore na datum}} za tu prostoriju. Prvo izračunajte sunce, za vruć dan; dok to ne uradite, sunce se računa kao 0 i odeljak to kaže. Vrhovi svakog dela se sabiraju, čak i kad padaju u različite sate, pa je zbir malo preuveličan.

## Šta izostavlja

- Mesečne i časovne metode ISO 52016-1 (plaćen standard), toplotu uskladištenu u masi zgrade, toplotne mostove, rad sistema grejanja i hlađenja i klimatske datoteke.
- Susedne prostorije uzimaju se na istoj temperaturi; negrejani prostori nisu modelirani.

Pogledajte i [Procena dnevne svetlosti u svakoj prostoriji](topic:daylight-factor).
