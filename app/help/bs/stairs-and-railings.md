---
title: Stepenište i ograde
summary: Crtaj ravna, L, U i zaokretna stepeništa koja računaju svoje stepenice iz visine od poda do poda, s rukohvatima i balustrima, te isijecaj otvor stubišta u podu iznad; crtaj zaštitne ograde duž terasa i oko otvora.
keywords: spiralno, okruglo stepenište, stepenište, stepenice, krak, gazište, podest, zaokretne stepenice, L stepenište, U stepenište, povratno stepenište, rukohvat, zaštitna ograda, ograda, balustar, stubić, stub, otvor stubišta, visina prolaza, terasa, balkon
from: 16e5ace4
---

## Šta ćeš uraditi

Dodaj stepenice između nivoa i ograde tamo gdje su ljudima potrebne. Stepenište samo računa svoje stepenice iz visine između nivoa, drži se uobičajenih stambenih ograničenja, stavlja rukohvate na svoje otvorene strane i isijeca svoj otvor stubišta u podu iznad.

## Nacrtaj stepenište

1. Na nivou sa kojeg stepenište polazi otvori {{ui:Verzija}} i izaberi {{ui:Stepenište}}.
2. Izaberi vrstu — **Ravno**, **L sa podestom**, **U sa podestom** ili **L sa zaokretnim stepenicama** — u kojem smjeru se **okreće**, njegovu **širinu** i gdje idu njegovi **rukohvati**.
3. Klikni gdje stepenište počinje: sredina prednje ivice donje stepenice.
4. Pomjeri pokazivač u smjeru u kojem se stepenište penje; stepenice ga prate, sa brojem podiznica i gazišta. Hvata se za zidove i za korake od 15°; drži {{key:Shift}} da ostane pod pravim uglom.
5. Klikni. {{key:Esc}} počinje ispočetka.

## Nacrtaj spiralno stepenište

1. Otvori {{ui:Verzija}}, izaberi {{ui:Stepenište}}, pa izaberi **Spiralno** kao vrstu.
2. Podesi **Okret**, u kojem smjeru se vije pri penjanju (lijevo je suprotno kazaljci na satu).
3. Klikni centar svog stuba.
4. Klikni smjer u kojem pokazuje donje gazište.

Počinje široko 30" (gazište, od stuba do vanjske strane), sa stubom od 4½". Podiznice se računaju iz visine od poda do poda, najviše 9½" po zadanim postavkama. Gazišta su duboka 7½" na liniji hoda, 12" od stuba. Rukohvat ide s vanjske strane.

U **Svojstvima** spiralno stepenište dodaje **Centralni stub**, njegov prečnik. Polje **Gazište** se mjeri na liniji hoda. Njegove provjere su označene kao zadane vrijednosti za spiralna stepeništa: slobodna širina 26", najmanje 6¾" gazišta na liniji hoda, podiznice najviše 9½" i rukohvati 34"–38". To nisu inženjerske vrijednosti; o tome odlučuje nadležni građevinski organ.

## Kako se računaju stepenice

Visina između poda nivoa i nivoa iznad podijeljena je na jednake podiznice, najviše po 7¾", a svako gazište je duboko 10" (oba se mogu promijeniti u **Svojstvima**). Podest se računa kao jedna stepenica; zaokretne stepenice su tri stepenice raspoređene oko unutrašnjeg ugla. Promijeni visinu nivoa, pa se svako stepenište na njemu ponovo računa.

:::warning
7¾" podiznice, 10" gazišta, 36" širina, 6'-8" visina prolaza i rukohvati 34"–38" su zadane vrijednosti prema uobičajenom stambenom propisu, a ne inženjerske vrijednosti. **Svojstva** pokazuju koje su ispunjene; nadležni građevinski organ odlučuje šta se primjenjuje.
:::

## Promijeni stepenište

Odaberi ga (klikni na plan ili u 3D prikazu) i promijeni u **Svojstvima**: njegovu vrstu i smjer okreta, širinu, najvišu podiznicu, dubinu gazišta, rukohvate i njihovu visinu, te **Isijeci pod iznad** za otvor stubišta. Podiznice i gazišta koja je na kraju dobilo prikazana su ispod.

## Otvor stubišta

Kad nivo iznad ima pod, stepenište ga isijeca tamo gdje bi stepenice imale manje od 6'-8" visine prolaza. Izrez se pomjera sa stepeništem i nestaje kad se stepenište obriše.

## Nacrtaj ogradu

1. Otvori {{ui:Verzija}} i izaberi {{ui:Ograda}}.
2. Izaberi **Zaštitna ograda** (visine 36") ili **Rukohvat**, pa njegovu visinu.
3. Klikni duž ivice — terase, balkona, oko otvora stubišta — pa dvaput klikni ili pritisni {{key:Enter}} da završiš.

Ograde dobijaju stubiće na krajevima i uglovima te balustre s razmakom manjim od 4". Odaberi jednu da promijeniš njenu vrstu, visinu ili koliko iznad poda počinje.

## Nacrtaj plot

Izaberi **Plot** u istom alatu za ogradu, podesi njegovu visinu (1800 mm za početak), klikni duž linije plota i pritisni {{key:Enter}}.

- Plot dobija stub na svakom kraju i na svakom uglu, te stub na najviše svakih 2.4 m između njih. Panel-plot ima panel između stubova; plot od letvi ima dvije letve. Ove dimenzije su uobičajeni izbori, a ne propisani zahtjev: lokalni propisi ograničavaju visinu plota.
- To je jedan element u modelu (IfcRailing sa imenom Fence) sa skupom svojstava {{ui:CadCraft_Fence}}: stil, visina, stubovi, paneli, letve, kapije, dužina i površina panela. Jedan korak poništavanja.
- Ovdje se ne crta: kapije (generator u CivilCraftu ih raspoređuje), ukrasni prutovi, teren (plot stoji na nivou) i odabir pojedinačnog stuba.

## Šta se čuva

Stepenište se čuva kao IFC stepenište napravljeno od krakova (sa svojim podiznicama, gazištima, visinom podiznice i dužinom gazišta), podesta, zaokretnih stepenica i rukohvata; otvor stubišta je otvor u podnoj ploči iznad. Ograde su IFC ograde sa svojom dužinom i brojem balustara i stubova.
