---
title: Radna ravan: postavi je, prikaži je, pogledaj je pravo
summary: Radna ravan je ravan koju koriste linije modela, tekst modela i Prikaz radne ravni. Postavi je na nivo, površinu, imenovanu referentnu ravan ili liniju; prikaži je u pogledima; otvori prikaz da crtaš na uspravnoj ravni.
keywords: radna ravan, postavi radnu ravan, prikaži radnu ravan, referentna ravan, prikaz radne ravni, imenovana ravan, površina, nivo, uspravna ravan, vertikalna ravan, crtaj na zidu, crtež izgleda, hvatanje, osovina, ref ravan
from: 8aceee1d
---

## Šta ćeš raditi

Izaberi ravan na kojoj crtaš, vidi gde se nalazi i crtaj na ravni koja stoji uspravno.

## Koraci

1. Uključi **Crtanje** i otvori meni **Gradnja** (u rasporedu sa trakom: kartica Arhitektura, Radna ravan).
2. Izaberi **Postavi radnu ravan**. Zatim uradi jedno od ovoga:
   - izaberi nivo u **Postavi na**;
   - izaberi imenovanu referentnu ravan iz liste pored nje;
   - klikni liniju u osnovi: zid, liniju mreže, referentnu ravan, model liniju ili sistem zavese. Radna ravan postaje uspravna ravan kroz tu liniju;
   - klikni ravnu površinu u 3D prikazu. Radna ravan leži na toj površini.
3. Izaberi **Prikaži radnu ravan** da je vidiš: obojeni list sa mrežom od metra u 3D prikazu, isprekidani obris ili linija u osnovi i isprekidani obris u panelu izgleda i preseka. Izaberi je ponovo da je sakriješ.
4. Izaberi **Prikaz radne ravni** da pogledaš ravan pravo. Crne linije su model presečen ravni. Koristi njegove alatke da na ravni nacrtaš model liniju, model tekst ili referentnu ravan. **Pogledaj u 3D** okreće 3D prikaz tako da bude okrenut ka ravni.

## Referentne ravni

Referentna ravan je imenovana ravan koju crtaš kao liniju.

1. Izaberi **Referentna ravan**. Ukucaj ime u njenom redu ako želiš (inače dobija ime automatski) i visinu.
2. Klikni gde počinje i gde se završava. U osnovi ovo pravi uspravnu ravan. U Prikazu radne ravni pravi ravan koja stoji normalno na radnu ravan.
3. Prikazuje se kao isprekidana zelena linija sa imenom u osnovi, isprekidani obris u 3D prikazu i u panelu izgleda i preseka.
4. Izaberi je da joj promeniš ime, dužinu, visinu i podnožje, ili pritisni **Koristi kao radnu ravan**.

Dve referentne ravni ne mogu imati isto ime, jer se po imenu biraju.

## Dobro je znati

- Model bez postavljene radne ravni radi na svom najnižem nivou.
- Radna ravan se čuva u datoteci. Prikazivanje ili skrivanje pamti se u ovom pregledaču, a ne u datoteci.
- Ako radna ravan prati referentnu ravan i pomeriš tu ravan, radna ravan se pomera zajedno s njom.
- Na uspravnoj radnoj ravni alatke Model linija i Model tekst otvaraju prikaz, jer osnova ne može da pokaže visinu.
- Alatke za crtanje hvataju krajeve referentnih ravni nacrtanih u osnovi isto kao što hvataju krajeve drugih linija u prikazu.

## U IFC datoteci

- Radna ravan je skup svojstava (CadCraft_WorkPlane) na projektu.
- Referentna ravan je IfcAnnotation sa tipom objekta ReferencePlane i svojim imenom. Njen oblik je zatvoreni obris ravni, pa drugi program prikazuje gde se nalazi. Njen skup CadCraft_ReferencePlane sadrži početnu tačku, pravac, normalu i opseg. IFC nema klasu za referentnu ravan; anotacija se ne broji kao građevinski element i ne ograničava prostorije.
