---
title: Radna ravnina: postavite je, prikažite je, pogledajte je izravno
summary: Radna ravnina je ravnina koju koriste linije modela, tekst modela i Preglednik radne ravnine. Postavite je na razinu, plohu, imenovanu referentnu ravninu ili liniju; prikažite je u prikazima; otvorite preglednik da crtate na uspravnoj ravnini.
keywords: radna ravnina, postavi radnu ravninu, prikaži radnu ravninu, referentna ravnina, preglednik radne ravnine, imenovana ravnina, ploha, razina, uspravna ravnina, okomita ravnina, crtanje na zidu, crtež pročelja, hvatanje, poravnanje, ref ravnina
from: 8aceee1d
---

## Što ćete učiniti

Odaberite ravninu na kojoj crtate, pogledajte gdje se nalazi i crtajte na ravnini koja stoji uspravno.

## Koraci

1. Uključite **Crtanje** i otvorite izbornik **Izgradnja** (u rasporedu s vrpcom: kartica Arhitektura, Radna ravnina).
2. Odaberite **Postavi radnu ravninu**. Zatim učinite jedno od sljedećeg:
   - odaberite razinu u **Postavi na**;
   - odaberite imenovanu referentnu ravninu s popisa pokraj njega;
   - kliknite liniju u tlocrtu: zid, liniju mreže, referentnu ravninu, model liniju ili sustav zavjese. Radna ravnina postaje uspravna ravnina kroz tu liniju;
   - kliknite ravnu plohu u 3D prikazu. Radna ravnina leži na toj plohi.
3. Odaberite **Prikaži radnu ravninu** da je vidite: obojena ploha s mrežom u metrima u 3D prikazu, isprekidani obris ili linija u tlocrtu te isprekidani obris u panelu pročelja i presjeka. Ponovno je odaberite da je sakrijete.
4. Odaberite **Preglednik radne ravnine** da izravno pogledate ravninu. Crne linije su model presječen ravninom. Koristite njegove alate da na ravnini nacrtate model liniju, model tekst ili referentnu ravninu. **Pogledaj je u 3D** okreće 3D prikaz tako da bude okrenut prema ravnini.

## Referentne ravnine

Referentna ravnina je imenovana ravnina koju crtate kao liniju.

1. Odaberite **Referentna ravnina**. Upišite naziv u njezin redak ako ga želite (inače se imenuje automatski) i visinu.
2. Kliknite gdje počinje i gdje završava. U tlocrtu to stvara uspravnu ravninu. U Preglednik radne ravnine stvara ravninu koja stoji okomito na radnu ravninu.
3. Prikazuje se kao isprekidana zelena linija s nazivom u tlocrtu, kao isprekidani obris u 3D prikazu te u panelu pročelja i presjeka.
4. Odaberite je da joj promijenite naziv, duljinu, visinu i podnožje ili pritisnite **Koristi kao radnu ravninu**.

Dvije referentne ravnine ne mogu imati isti naziv, jer se po nazivu biraju.

## Dobro je znati

- Model bez postavljene radne ravnine radi na svojoj najnižoj razini.
- Radna ravnina sprema se u datoteku. Prikazivanje ili skrivanje pamti se u ovom pregledniku, a ne u datoteci.
- Ako radna ravnina slijedi referentnu ravninu i pomaknete tu ravninu, radna ravnina se pomiče s njom.
- Na uspravnoj radnoj ravnini alati Model linija i Model tekst otvaraju preglednik, jer tlocrt ne može pokazivati visinu.
- Alati za crtanje hvataju krajeve referentnih ravnina nacrtanih u tlocrtu jednako kao što hvataju krajeve drugih linija u pregledniku.

## U IFC datoteci

- Radna ravnina je skup svojstava (CadCraft_WorkPlane) na projektu.
- Referentna ravnina je IfcAnnotation s vrstom objekta ReferencePlane i svojim nazivom. Njezin oblik je zatvoreni obris ravnine, pa drugi program prikazuje gdje se nalazi. Njezin skup CadCraft_ReferencePlane sadrži ishodište, smjer, normalu i opseg. IFC nema klasu za referentnu ravninu; anotacija se ne broji kao građevinski element i ne omeđuje prostorije.
