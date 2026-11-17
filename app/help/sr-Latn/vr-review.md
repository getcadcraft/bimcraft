---
title: Pregled modela u VR slušalicama
summary: Šetajte kroz IFC model u punoj veličini u VR slušalicama: skačite, okrećite se, merite, presecite ga, postavljajte BCF probleme sa slikom, pogledajte ga kao model na stolu i sretnite ostale u živoj sesiji.
keywords: vr, virtuelna stvarnost, slušalice, webxr, xr, imerzivno, quest, oculus, vive, index, pico, šetnja, teleportovanje, pregled dizajna, koordinacija, pregled, merenje, presek, sečenje, problem, problemi, bcf, gornja ploča stola, model u razmeri, prisustvo, avatari, uživo, zajedno
from: 8994b36d
---

{{ui:VR}} na traci vas stavlja unutar modela sa VR slušalicama, u punoj veličini. Stojite tamo gde je kamera 3D pogleda, na podu ispod nje, okrenuti u istom smeru. Slušalice prikazuju ono što prikazuje 3D pogled: skriveni spratovi, elementi i modeli ostaju skriveni, a obojeni materijali dolaze sa njima. Ništa se ne otprema: pregledač to crta na ovom računaru (ili u pregledaču same slušalice).

## Šta vam treba

- Slušalice koje pregledač može da koristi (WebXR): pregledač samostalnih slušalica, ili Chrome ili Edge na PC-ju sa povezanim slušalicama.
- Otvoren IFC model, na bezbednoj stranici (https), kao na ovom sajtu.

Kada nema slušalica, {{ui:VR}} je zasivljeno i kaže zašto.

## Početak

1. Podesite 3D pogled tamo gde želite da počnete: u sobi, ili spolja gledajući zgradu.
2. Kliknite {{ui:VR}} na traci.
3. Stavite slušalice.

Meni je na zadnjoj strani leve šake. Pokažite na njega desnim kontrolerom i povucite okidač da izaberete dugme. (Sa samo jednom rukom, meni lebdi ispred mesta na kojem ste počeli.)

## Kretanje

- **Skok:** u {{ui:Pomeri}}, pokažite na pod i povucite okidač; sletite tamo. Ili gurnite palicu napred da nišanite, pa je pustite da skočite. Možete sleteti samo na podove, međuspratne konstrukcije i zemlju (površine okrenute nagore), nikada na zid.
- **Okretanje:** gurnite palicu levo ili desno: okrećete se za 30° svaki put.
- **Hodanje:** u zoni za kretanje jednostavno hodajte.

## Merenje

Izaberite {{ui:Izmeri}}, pa povucite okidač na dve tačke. Rastojanje se prikazuje između njih, u metrima. Tačka blizu ugla se hvata za ugao.

## Presecanje

Izaberite {{ui:Presek}} i povucite okidač na površini:

- na zidu (ili bilo čemu što nije pod): sve između vas i te površine se odseca, pa vidite unutra. Ovo najbolje radi spolja ili preko sobe;
- na podu, odozgo: presek plana 1,2 m iznad tog poda, da zidovi pokažu svoj donji deo.

{{ui:Obriši}} uklanja presek i merenja. Ako [ravan preseka](topic:section-plane) seče model kada počnete, slušalice počinju sa njim.

## Postavljanje problema

Izaberite {{ui:Problem}} i povucite okidač tamo gde je problem. Numerisana igla ga obeležava, a problem ide u karticu {{ui:Problemi}} kao BCF tema, sa slikom onoga što ste videli i kamerom na mestu gde ste stajali, u koordinatama modela. Sačuvajte ih zajedno sa ostalim [problemima](topic:issues-bcf) kao BCF datoteku; drugi alati za koordinaciju ih otvaraju na istom pogledu.

Dodajte komentar problemu nakon što izađete iz VR-a, u kartici Problemi: kucanje u slušalicama još nije napravljeno.

## Pogledajte ga kao model na stolu

{{ui:Gornja ploča stola}} smanjuje model da stane na sto ispred vas; šetajte oko njega ili ga okrećite palicom. {{ui:Puna veličina}} vraća vas tamo gde ste bili.

## Sa drugima, uživo

U [živoj sesiji](topic:work-live), svi u VR-u vide ostale kao glavu i dve ruke u njihovoj boji, sa imenom, i tačku gde svako pokazuje. Izmene koje neko napravi stižu do vaših slušalica za trenutak. Ljudi za stolom još nisu prikazani u slušalicama.

## Izlazak

Izaberite {{ui:Izađi iz VR-a}} (ili skinite slušalice i tamo završite). 3D pogled na ekranu se pomera tamo gde je bila vaša glava.

:::note
Testirano sa emulatorom slušalica, još nije na svim slušalicama. Veliki model može da izazove štucanje u slušalicama: prvo sakrijte spratove ili modele koje ne treba ([sakrij i izoluj](topic:hide-and-isolate)).
:::
