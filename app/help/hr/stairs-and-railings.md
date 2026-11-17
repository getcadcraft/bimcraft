---
title: Stubišta i ograde
summary: Crtajte ravna, L, U i zakretna stubišta koja sama određuju čela stuba i gazišta prema visini između razina, s rukohvatima i balustrima te izrezom stubišne jame u podu iznad; crtajte zaštitne ograde uz terase i oko otvora.
keywords: spiralno, okruglo stubište, stubište, stubišta, stepenice, krak, čelo stuba, gazište, podest, zakretno, L stubište, U stubište, serpentina, rukohvat, zaštitna ograda, ograda, balustar, stup, stubišna jama, slobodna visina, terasa, balkon
from: 16e5ace4
---

## Što ćete učiniti

Dodajte stubišta između razina i ograde tamo gdje su potrebne. Stubište samo izračunava stepenice iz visine između razina, drži ih unutar uobičajenih stambenih granica, postavlja rukohvate na svoje otvorene strane i izrezuje svoju stubišnu jamu u podu iznad.

## Crtanje stubišta

1. Na razini s koje stubište počinje otvorite {{ui:Izgradnja}} i odaberite {{ui:Stubište}}.
2. Odaberite vrstu — **Ravno**, **L s podestom**, **U s podestom** ili **L sa zakretnim gazištima** — u kojem smjeru se **okreće**, njegovu **širinu** i gdje idu njegovi **rukohvati**.
3. Kliknite mjesto gdje stubište počinje: na sredini prednjeg brida donjeg gazišta.
4. Pomaknite pokazivač u smjeru u kojem stubište ide prema gore; gazišta ga slijede, s brojem čela stuba i gazišta. Privlači se zidovima i koracima od 15°; držite {{key:Shift}} da ostane pod pravim kutom.
5. Kliknite. {{key:Esc}} počinje ispočetka.

## Crtanje spiralnog stubišta

1. Otvorite {{ui:Izgradnja}}, odaberite {{ui:Stubište}}, zatim odaberite **Spiralno** kao vrstu.
2. Postavite **Okret** — u koju stranu se namotava idući prema gore (lijevo je suprotno kazaljci na satu).
3. Kliknite središte svog stupa.
4. Kliknite smjer u kojem gazište pokazuje.

Počinje širinom 30" (gazište, od stupa do vanjske strane), sa stupom od 4½". Čela stuba izračunavaju se iz visine između etaža, najviše 9½" prema zadanoj postavci. Gazišta su duboka 7½" na liniji hoda, 12" od stupa. Rukohvat ide s vanjske strane.

U **Svojstvima** spiralno stubište dodaje **Središnji stup**, njegov promjer. Polje **Gazište** mjeri se na liniji hoda. Njegove provjere označene su kao zadane vrijednosti za spiralna stubišta: 26" slobodne širine, najmanje 6¾" gazišta na liniji hoda, čela stuba najviše 9½" i rukohvati 34"–38". Nisu tehnički proračun; o tome odlučuje nadležni građevinski inspektor.

## Kako se izračunavaju stepenice

Visina između poda razine i razine iznad podijeljena je na jednaka čela stuba najviše 7¾", a svako gazište je duboko 10" (oboje se može promijeniti u **Svojstvima**). Podest se računa kao jedan korak; zakretna gazišta su tri koraka raširena oko unutarnjeg kuta. Promijenite visinu razine i svako stubište na njoj se ponovno izračunava.

:::warning
7¾" čela stuba, 10" gazišta, 36" širina, 6'-8" slobodne visine i 34"–38" rukohvati su zadane vrijednosti prema uobičajenom stambenom propisu, a ne tehnički proračun. **Svojstva** pokazuju koje su zadovoljene; vaš nadležni građevinski inspektor odlučuje što se primjenjuje.
:::

## Promjena stubišta

Odaberite ga (kliknite ga na tlocrtu ili u 3D prikazu) i promijenite u **Svojstvima**: vrstu i okret, širinu, najvišu visinu čela stuba, dubinu gazišta, rukohvate i njihovu visinu te **Izreži pod iznad** za stubišnu jamu. Čela stuba i gazišta koja je stubište na kraju dobilo prikazana su ispod.

## Stubišna jama

Kada razina iznad ima pod, stubište ga izreže tamo gdje bi stepenice imale manje od 6'-8" slobodne visine. Izrez se pomiče sa stubištem i nestaje kada se stubište obriše.

## Crtanje ograde

1. Otvorite {{ui:Izgradnja}} i odaberite {{ui:Ograda}}.
2. Odaberite **Zaštitna ograda** (36" visine) ili **Rukohvat** te njegovu visinu.
3. Kliknite duž ruba — terase, balkona, oko stubišne jame — i dvaput kliknite ili pritisnite {{key:Enter}} za završetak.

Ograde dobivaju stupove na krajevima i na kutovima te balustre s razmakom manjim od 4". Odaberite jednu da promijenite njezinu vrstu, visinu ili koliko iznad poda počinje.

## Crtanje vanjske ograde

Odaberite **Vanjska ograda** u istom alatu Ograda, postavite njezinu visinu (1800 mm za početak), kliknite duž linije ograde i pritisnite {{key:Enter}}.

- Vanjska ograda dobiva stup na svakom kraju i na svakom kutu te stup najviše svakih 2.4 m između njih. Ograda s panelima ima panel između stupova; ograda s letvama ima dvije letve. Ove dimenzije su uobičajeni izbori, a ne zahtjev propisa: lokalna pravila ograničavaju visinu ograde.
- To je jedan element u modelu (IfcRailing imenovan Fence) sa skupom svojstava {{ui:CadCraft_Fence}}: stil, visina, stupovi, paneli, letve, kapije, duljina i površina panela. Jedan korak poništavanja.
- Ovdje se ne crta: kapije (generator u CivilCraftu ih raspoređuje), šiljci ograde, teren (ograda stoji na razini) i odabir pojedinog stupa.

## Što se sprema

Stubište se sprema kao IFC stubište sastavljeno od krakova (s njihovim čelima stuba, gazištima, visinom čela i dužinom gazišta), podesta, zakretnih gazišta i rukohvata; stubišna jama je otvor u podnoj ploči iznad. Ograde su IFC ograde s duljinom te brojem balustara i stupova.
