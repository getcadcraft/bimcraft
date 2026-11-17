---
title: Radna ravan: postavite je, prikažite, pogledajte je ravno
summary: Radna ravan je ravan koju koriste linije modela, tekst modela i Pregledač radne ravni. Postavite je na nivo, plohu, imenovanu referentnu ravan ili liniju; prikažite je u pogledima; otvorite pregledač da crtate na uspravnoj ravni.
keywords: radna ravan, postavi radnu ravan, prikaži radnu ravan, referentna ravan, pregledač radne ravni, imenovana ravan, ploha, nivo, uspravna ravan, vertikalna ravan, crtanje na zidu, crtež izgleda, hvatanje, poravnanje, ref ravan
from: 8aceee1d
---

## Šta ćete raditi

Izaberete ravan na kojoj crtate, vidite gdje se nalazi, i crtate na ravni koja stoji uspravno.

## Koraci

1. Uključite **Crtanje** i otvorite meni **Gradnja** (u rasporedu s trakom: kartica Arhitektura, Radna ravan).
2. Izaberite **Postavi radnu ravan**. Zatim uradite jedno od ovoga:
   - izaberite nivo u **Postavi na**;
   - izaberite imenovanu referentnu ravan s liste pored njega;
   - kliknite liniju u tlocrtu: zid, liniju mreže, referentnu ravan, liniju modela ili sistem zavjese. Radna ravan postaje uspravna ravan kroz tu liniju;
   - kliknite ravnu plohu u 3D prikazu. Radna ravan leži na toj plohi.
3. Izaberite **Prikaži radnu ravan** da je vidite: obojeni list s mrežom u metrima u 3D prikazu, isprekidani obris ili liniju u tlocrtu, i isprekidani obris u panelu izgleda i presjeka. Izaberite ponovo da je sakrijete.
4. Izaberite **Pregledač radne ravni** da pogledate ravan ravno. Crne linije su model presječen ravni. Koristite njegove alate da nacrtate liniju modela, tekst modela ili referentnu ravan na ravni. **Pogledaj u 3D** okreće 3D prikaz da bude okrenut prema ravni.

## Referentne ravni

Referentna ravan je imenovana ravan koju crtate kao liniju.

1. Izaberite **Referentna ravan**. Upišite ime u njen red ako ga želite (inače se dobija automatski) i visinu.
2. Kliknite gdje počinje i gdje završava. U tlocrtu ovo pravi uspravnu ravan. U Pregledaču radne ravni pravi ravan koja stoji pod pravim uglom prema radnoj ravni.
3. Prikazuje se kao isprekidana zelena linija s imenom u tlocrtu, isprekidani obris u 3D prikazu i u panelu izgleda i presjeka.
4. Izaberite je da je preimenujete, promijenite dužinu, visinu i podnožje, ili pritisnete **Koristi kao radnu ravan**.

Dvije referentne ravni ne mogu imati isto ime, jer se po imenu biraju.

## Dobro je znati

- Model bez postavljene radne ravni radi na svom najnižem nivou.
- Radna ravan se čuva u datoteci. Prikazivanje ili sakrivanje pamti se u ovom pregledaču, a ne u datoteci.
- Ako radna ravan prati referentnu ravan i pomjerite tu ravan, radna ravan se pomjera s njom.
- Na uspravnoj radnoj ravni alati Linija modela i Tekst modela otvaraju pregledač, jer tlocrt ne može pokazati visinu.
- Alati za crtanje hvataju krajeve referentnih ravni nacrtanih u tlocrtu na isti način kao što hvataju krajeve drugih linija u pregledaču.

## U IFC datoteci

- Radna ravan je skup svojstava (CadCraft_WorkPlane) na projektu.
- Referentna ravan je IfcAnnotation s tipom objekta ReferencePlane i svojim imenom. Njen oblik je zatvoreni obris ravni, pa je drugi programi prikazuju gdje se nalazi. Njen skup CadCraft_ReferencePlane sadrži ishodište, smjer, normalu i obuhvat. IFC nema klasu za referentnu ravan; anotacija se ne računa kao građevinski element i ne ograničava prostorije.
