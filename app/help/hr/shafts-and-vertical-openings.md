---
title: Šahtovi i otvori kroz etaže
summary: Šaht je jedan obris koji siječe svaki pod, strop i krov između dviju razina. Vertikalni otvor siječe jedan od njih. Otvor u zidu siječe zid.
keywords: šaht, šaht dizala, šaht lifta, otvor za stubište, čelo stuba, vertikalni otvor, otvor u podu, otvor u stropu, otvor u krovu, svjetlarnik, rupa u podu, otvor u zidu, IfcOpeningElement, odbitak, neto površina
from: 8e9e1641
---

## Što ćete napraviti

Prokopajte šaht dizala kroz zgradu jednom skicom, izrežite rupu u jednoj etaži i pročitajte što je oduzeto od površina.

## Gdje su alati

- Izgledi s vrpcom: {{ui:Arhitektura}} › **Otvor** › {{ui:Šaht}}, {{ui:Vertikalni otvor}} i {{ui:Otvor u zidu}}.
- Klasični izgled: traka {{ui:Crtanje}} › izbornik {{ui:Prostorije}} (Šaht, Vertikalni otvor) i › izbornik {{ui:Zidovi}} (Otvor u zidu).

## Šaht

1. Otvorite tlocrt razine na kojoj šaht počinje. Odaberite {{ui:Šaht}}.
2. U retku odaberite {{ui:Donja razina}} i {{ui:Gornja razina}}, te odmake ako počinje ili završava iznad ili ispod njih.
3. Kliknite kutove obrisa. Ponovno kliknite prvi kut, dvaput kliknite ili pritisnite Enter za završetak.
4. Svaki pod, strop i krov između dviju visina bit će presječen. Statusni redak kaže koliko ih je.

Šaht je jedna cjelina. Odaberite njegov obris na bilo kojoj razini kroz koju prolazi: u **Svojstvima** su njegov naziv, razine i odmaci, što siječe i površina koja je oduzeta. Promijenite ga i svaki otvor slijedi. Izbrišete li ga, nestaju svi otvori. Svaka je promjena jedan korak poništavanja.

Nastavlja rezati: pod napravljen kasnije između njegovih razina bit će presječen bez traženja, a pod koji izbrišete se oslobađa.

Pod na kojem šaht stoji nije presječen (njegov gornji dio je donja razina). Dajte donjoj razini negativan odmak da ga presječete i njega. Dajte gornjoj razini pozitivan odmak da šaht prođe kroz krov.

## Vertikalni otvor

1. Odaberite {{ui:Vertikalni otvor}}. U retku odaberite što se siječe: pod, strop ili krov.
2. Kliknite kutove obrisa i završite kao gore.
3. Pod, strop ili krov ove razine ispod obrisa bit će presječen. Otvor pripada tom jednom elementu: izbrišete li pod, otvor nestaje s njim.

## Otvor u zidu

{{ui:Otvor u zidu}} je alat iz [Oblikovanje zida](topic:wall-shape): kliknite zid na tlocrtu ili dvije točke na njegovoj plohi u 3D.

## Količine

Prema pravilu mjerenja za podove, neto površina elementa je njegova bruto površina umanjena za ono što je iz njega izrezano. Šaht ili vertikalni otvor je odbitak na svakom podu i stropu koji siječe; tablice podova i završnih obrada te IFC količine pokazuju iste brojke. Na krovu je odbitak površina krovne plohe: tlocrtna površina podijeljena kosinusom nagiba.

Obris koji visi preko ruba oduzima samo dio koji leži na elementu.

## Ako ništa nije presječeno

Šaht bez ičega na putu i dalje se izrađuje i to javlja: presjeći će ono što se kasnije izgradi na tom mjestu. Vertikalni otvor treba nešto ispod sebe; bez toga statusni redak to javlja i ništa se ne izrađuje.

## U IFC-u

Svaki rez je IfcOpeningElement s IfcRelVoidsElement prema elementu koji siječe, pa svaki IFC program prikazuje rupu. Krov se siječe plohu po plohu. Sam šaht je IfcGroup svojih otvora.

## Još nije izrađeno

- Zakrivljeni obrisi.
- Zidovi šahta: nacrtajte ih alatom Zid.
- Uređivanje obrisa povlačenjem kutova (promijenite ga u Svojstvima ili izbrišite i ponovno skicirajte).
- Svojstva nacrtanog poda pokazuju njegovu površinu umanjenu samo za vlastite otvore; tablice i IFC količine uključuju one šahta.

Pogledajte i [Prostorije i razdjelnici prostora](topic:rooms-and-separators).
