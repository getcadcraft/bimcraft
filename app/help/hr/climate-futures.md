---
title: "Klimatska budućnost: 2050. i 2080. poplave, vrućine i šumski požari"
summary: Ponovno pokrenite proračun poplave, energetske godine i prethodne procjene šumskog požara s budućom klimom (scenariji SSP2-4.5 i SSP5-8.5, godine 2050 i 2080) iz paketa klimatskih podataka, prikazano uz sadašnjost.
keywords: klima, klimatske promjene, budućnost, 2050, 2080, ssp, cmip6, scenarij, razina mora, poplava, vrućina, vremenska datoteka, epw, morph, energyplus, šumski požar, požar, vremenski uvjeti za požar
from: 224ecd08
---

Klimatske podatke daje **paket podataka**, a ne sama aplikacija. Uključite dodatak {{ui:Klimatska budućnost}} u Postavke › Dodaci ili učitajte vlastitu datoteku paketa u bloku {{ui:Klimatska budućnost}}.

:::warning
Paket koji dolazi uz dodatak je **uzorak**: tri mjesta (Denver, Miami, Johannesburg), jedan klimatski model i pet godina u svakom 20-godišnjem razdoblju. Služi za isprobavanje alata, **nije za projektiranje**. Okno to ispisuje podebljano dok se koristi. Puni paket (mnogo modela, sve godine, više mjesta) izrađuje se pomoću `tools/climate/build-pack.mjs` iz NASA-inih NEX-GDDP-CMIP6 podataka.
:::

## Odaberite budućnost

U lijevoj ploči, pod {{ui:Reprodukcija opasnosti}}, odaberite **Scenarij** (SSP2-4.5, srednji put, ili SSP5-8.5, visoke emisije) i **Godinu** (2050 znači 2041-2060, a 2080 znači 2071-2090; obje u odnosu na 1995-2014). **Mjesto** je mjesto u paketu najbliže lokaciji modela (IfcSite geografska širina i dužina) ili ono koje odaberete. Ako je daleko od svih mjesta, koriste se globalne prosječne promjene paketa i okno to navodi.

## Poplava, sadašnja uz buduću

Kad je odabran scenarij, postavite **Vrstu poplave**: obalna (dodaje porast razine mora), rijeka ili jaka kiša (dublja za promjenu kiše najvlažnijeg dana) ili oboje. Pritisnite Pokreni: poplava se odigrava kao i prije, a tablica prikazuje sadašnju i buduću poplavu jednu uz drugu (razina vode, prostorije koje se pokvase, najdublja voda). Pretpostavke su navedene ispod:

- obalna razina raste za cijeli porast razine mora; olujni val i valovi se ne mijenjaju;
- protok rijeke raste jedan prema jedan s kišom najvlažnijeg dana, a dubina prati protok na potenciju 0.6 (Manningova jednadžba za široki kanal);
- ta dva dijela se jednostavno zbrajaju.

## Vrućina: buduća vremenska datoteka

Odaberite vrstu {{ui:Vrućina: buduća vremenska datoteka}}, odaberite sadašnju `.epw` vremensku datoteku i pritisnite {{ui:Napravi buduću vremensku datoteku}}. Datoteka se **morfira** mjesec po mjesec objavljenom metodom pomaka i rastezanja (Belcher, Hacker i Powell 2005.): prosjek mjeseca se zagrijava za promjenu paketa, vrući popodnevni sati za promjenu dnevnog maksimuma, a hladne noći za promjenu dnevnog minimuma; relativna vlažnost pomiče se za promjenu paketa, a rosište se ponovno izračunava. Tlak i vjetar ostaju kakvi su bili. Tablica uspoređuje prosječne i najviše temperature, projektne temperature za hlađenje (0.4 %) i grijanje (99.6 %), sate na 30 °C i 35 °C te stupanj-dane.

{{ui:Spremi buduću vremensku datoteku}} sprema je; {{ui:Upotrijebi je u energetskoj provjeri}} predaje je provjeri s EnergyPlusom (kartica Energija). Buduća datoteka je ista tipična godina, samo toplija: ne dodaje nove toplinske valove.

## Energetska godina, sadašnja uz buduću

U provjeri s EnergyPlusom na kartici Energija (zaseban dodatak, s vlastitim motorom) odaberite sadašnju vremensku datoteku, zatim scenarij i godinu u njezinu bloku {{ui:Klimatska budućnost}}, i pritisnite {{ui:Simuliraj godinu: sadašnjost i budućnost}}: godina se izvodi na sadašnjoj datoteci i na njezinoj morfiranoj budućoj verziji, a grijanje i hlađenje svake prostorije navode se jedno uz drugo.

## Izloženost šumskom požaru (samo prethodna procjena)

Odaberite vrstu {{ui:Izloženost šumskom požaru (samo prethodna procjena)}}: najbližu vegetaciju, uzbrdicu od nje do zgrade i udaljenost do nje. Rezultat je pojas od vrlo niskog do ekstremnog, sadašnji i budući.

:::warning
**Samo prethodna procjena.** Ovo je naša vlastita relativna ljestvica koja služi da se vidi treba li lokacija pravu procjenu rizika od šumskog požara, a nije ocjena prema propisu ni bushfire attack level. Množi težinu za vegetaciju, faktor nagiba (požar otprilike udvostruči brzinu za svakih 10 stupnjeva uzbrdo, računajući do 20 stupnjeva), faktor udaljenosti (10 m podijeljeno s udaljenošću, najviše 1) i promjenu indeksa vremenskih uvjeta za požar iz paketa.
:::

## Odakle dolaze brojke

- **Temperatura, vlažnost, sunčanje, oborine, vremenski uvjeti za požar:** NASA NEX-GDDP-CMIP6, dnevni rezultati CMIP6 modela smanjeni na lokalnu razinu. Rezultati svakog modela su pod licencom CC BY 4.0. Promjena vremenskih uvjeta za požar je kanadski indeks vremenskih uvjeta za požar (Canadian Fire Weather Index) izračunat dan po dan iz vremena modela (uz dnevnu vlažnost umjesto podnevne).
- **Porast razine mora:** globalna srednja vrijednost IPCC AR6 (ne lokalna; dizanje ili spuštanje zemlje u njoj nije uključeno), osim ako paket nosi lokalne podatke.
- Paket navodi svoj izvor, licencu i datum; okno ih prikazuje.
