---
title: Pregledajte model u VR naočarima
summary: Hodajte kroz IFC model u punoj veličini u VR naočarima: skačite okolo, okrećite se, mjerite, presijecajte ga, postavljajte BCF probleme sa slikom, pogledajte ga kao model na stolu i sretnite ostale u sesiji uživo.
keywords: vr, virtuelna stvarnost, naočare, webxr, xr, uronjenje, quest, oculus, vive, index, pico, hodanje, obilazak, teleportacija, pregled dizajna, koordinacija, pregled, mjerenje, presjek, presijecanje, problem, problemi, bcf, radna ploča, model na stolu, prisustvo, avatari, uživo, zajedno
from: 8994b36d
---

{{ui:VR}} na traci alata stavlja vas unutar modela s VR naočarima, u punoj veličini. Stojite gdje je kamera 3D pogleda, na podu ispod nje, okrenuti u istom smjeru. Naočare prikazuju ono što prikazuje 3D pogled: skriveni spratovi, elementi i modeli ostaju sakriveni, a obojeni materijali se prenose. Ništa se ne šalje: pregledač to crta na ovom računaru (ili u pregledaču samih naočara).

## Šta vam treba

- Naočare koje pregledač može da pokreće (WebXR): pregledač samostalnih naočara, ili Chrome ili Edge na PC-u s priključenim naočarima.
- Otvoren IFC model, na sigurnoj stranici (https), kao što je na ovoj stranici.

Kada nema naočara, {{ui:VR}} je zasivljeno i kaže zašto.

## Početak

1. Postavite 3D pogled tamo gdje želite da počnete: u sobi, ili napolju gledajući zgradu.
2. Kliknite {{ui:VR}} na traci alata.
3. Stavite naočare.

Meni je na zadnjoj strani vaše lijeve ruke. Pokažite na njega desnim kontrolerom i povucite okidač da izaberete dugme. (Samo s jednom rukom, meni lebdi ispred mjesta gdje ste počeli.)

## Krećite se

- **Skok:** u {{ui:Move}}, pokažite na pod i povucite okidač; sletite tamo. Ili gurnite palicu naprijed da ciljate, i pustite da skočite. Možete sletjeti samo na podove, ploče i tlo (površine okrenute nagore), nikada na zid.
- **Okret:** gurnite palicu lijevo ili desno: okrenete se za 30° svaki put.
- **Hodanje:** u vašoj zoni kretanja, jednostavno hodajte.

## Mjerenje

Izaberite {{ui:Measure}}, zatim povucite okidač na dvije tačke. Rastojanje se prikazuje između njih, u metrima. Tačka blizu ugla se hvata za ugao.

## Presijecanje

Izaberite {{ui:Section}} i povucite okidač na površinu:

- na zidu (ili bilo čemu što nije pod): sve između vas i te površine se odsijeca, pa vidite unutra. Ovo radi najbolje spolja, ili preko sobe;
- na podu, odozgo: presjek plana 1,2 m iznad tog poda, pa zidovi pokazuju svoj donji dio.

{{ui:Clear}} uklanja presjek i mjerenja. Ako [ravan presjeka](topic:section-plane) siječe model kada počnete, naočare počinju s njim.

## Postavite problem

Izaberite {{ui:Issue}} i povucite okidač na mjestu problema. Numerisana igla ga označava, a problem ide na karticu {{ui:Issues}} kao BCF tema, sa slikom onoga što ste vidjeli i kamerom gdje ste stajali, u sopstvenim koordinatama modela. Sačuvajte ih s ostalim [problemima](topic:issues-bcf) kao BCF datoteku; drugi alati za koordinaciju ih otvaraju u istom pogledu.

Dodajte komentar problemu nakon što izađete iz VR-a, na kartici Problemi: kucanje u naočarama još nije izgrađeno.

## Pogledajte kao model na stolu

{{ui:Table top}} smanjuje model da stane na sto ispred vas; hodajte oko njega, ili ga okrećite palicom. {{ui:Full size}} vraća vas tamo gdje ste bili.

## Sa drugima, uživo

U [sesiji uživo](topic:work-live), svako u VR-u vidi druge kao glavu i dvije ruke u njihovoj boji, s njihovim imenom, i tačku gdje svako pokazuje. Izmjene koje neko napravi stižu do vaših naočara za trenutak. Ljudi za stolom još nisu prikazani u naočarima.

## Izlaz

Izaberite {{ui:Leave VR}} (ili skinite naočare i završite tamo). 3D pogled na ekranu se pomjera na mjesto gdje je bila vaša glava.

:::note
Testirano s emulatorom naočara, još ne na svim naočarima. Veliki model može uzrokovati zastoj u naočarima: prvo sakrijte spratove ili modele koji vam ne trebaju ([sakrij i izoluj](topic:hide-and-isolate)).
:::
