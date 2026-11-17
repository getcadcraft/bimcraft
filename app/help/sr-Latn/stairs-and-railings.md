---
title: Stepeništa i ograde
summary: Crtaj prava, L, U i zavojna stepeništa koja sama određuju visine i gazišta stepenika iz visine od poda do poda, sa rukohvatima i balustrima, i isečenim otvorom stepeništa u spratu iznad; crtaj zaštitne ograde duž terasa i oko otvora.
keywords: spiralno, okruglo stepenište, stepenište, stepenice, krak, stepenik, visina stepenika, gazište, podest, zavojni stepenik, L stepenište, U stepenište, serpentina, rukohvat, zaštitna ograda, ograda, balustar, stub, otvor stepeništa, slobodna visina, terasa, balkon
from: 16e5ace4
---

## Šta ćete uraditi

Dodajte stepeništa između nivoa i ograde tamo gde su potrebne. Stepenište samo računa svoje stepenike iz visine od poda do poda, drži ih u uobičajenim stambenim granicama, postavlja rukohvate na otvorenim stranama i seče otvor stepeništa u spratu iznad.

## Nacrtaj stepenište

1. Na nivou sa kojeg stepenište počinje, otvorite {{ui:Verzija}} i izaberite {{ui:Stepenište}}.
2. Izaberite vrstu — **Prava**, **L sa podestom**, **U sa podestom** ili **L sa zavojnim stepenicima** — u kom smeru **skreće**, njenu **širinu** i gde idu njeni **rukohvati**.
3. Kliknite tamo gde stepenište počinje: sredina prednje ivice donjeg stepenika.
4. Pomerite pokazivač u smeru u kojem stepenište ide; stepenici prate pokazivač, sa brojem visina i gazišta. Hvata se za zidove i za korake od 15°; držite {{key:Shift}} da ostane pod pravim uglom.
5. Kliknite. {{key:Esc}} počinje ispočetka.

## Nacrtaj spiralno stepenište

1. Otvorite {{ui:Verzija}}, izaberite {{ui:Stepenište}}, zatim izaberite **Spiralno** kao vrstu.
2. Podesite **Skretanje**, u kom smeru se stepenište diže (levo je suprotno od kazaljke na satu).
3. Kliknite u centar njegovog stuba.
4. Kliknite u smeru u kojem gleda donje gazište.

Počinje širinom 30" (gazište, od stuba do spoljne ivice), sa stubom od 4½". Visine stepenika računaju se iz visine od poda do poda, najviše 9½" po podrazumevanoj vrednosti. Gazišta su duboka 7½" na liniji hoda, 12" od stuba. Rukohvat ide sa spoljne strane.

U **Svojstvima** spiralno stepenište dodaje **Centralni stub**, njegov prečnik. Polje **Gazište** meri se na liniji hoda. Njegove provere su označene kao podrazumevane vrednosti za spiralna stepeništa: 26" slobodne širine, najmanje 6¾" gazišta na liniji hoda, visine stepenika najviše 9½" i rukohvati 34"–38". Nisu to inženjerski proračuni; o tome odlučuje nadležni inspektor za građevinarstvo.

## Kako se računaju stepenici

Visina između poda nivoa i nivoa iznad deli se na jednake visine stepenika, ne veće od 7¾", a svako gazište je duboko 10" (oba se mogu promeniti u **Svojstvima**). Podest se računa kao jedan korak; zavojni stepenici su tri koraka raspoređena oko unutrašnjeg ugla. Promena visine nivoa ponovo računa svako stepenište na njemu.

:::warning
Visine stepenika 7¾", gazišta 10", širina 36", slobodna visina 6'-8" i rukohvati 34"–38" su podrazumevane vrednosti prema uobičajenom stambenom propisu, a ne inženjerski proračun. **Svojstva** pokazuju koje su ispunjene; vaš nadležni inspektor odlučuje šta važi.
:::

## Izmeni stepenište

Izaberite ga (kliknite na njega u planu ili u 3D pogledu) i menjajte u **Svojstvima**: njegovu vrstu i skretanje, širinu, najvišu visinu stepenika, dubinu gazišta, rukohvate i njihovu visinu, i **Iseci pod iznad** za otvor stepeništa. Visine stepenika i gazišta koja je stepenište na kraju dobilo prikazana su ispod.

## Otvor stepeništa

Kada nivo iznad ima pod, stepenište ga seče tamo gde bi stepenici imali manje od 6'-8" slobodne visine. Isečeni deo se pomera sa stepeništem i nestaje kada se stepenište obriše.

## Nacrtaj ogradu

1. Otvorite {{ui:Verzija}} i izaberite {{ui:Ograda}}.
2. Izaberite **Zaštitnu ogradu** (36" visoka) ili **Rukohvat**, i njenu visinu.
3. Kliknite duž ivice — terase, balkona, oko otvora stepeništa — i dvaput kliknite ili pritisnite {{key:Enter}} da završite.

Ograde dobijaju stubove na krajevima i uglovima i balustre sa razmacima manjim od 4". Izaberite jednu da promenite njenu vrstu, visinu ili koliko počinje iznad poda.

## Nacrtaj ograđu

Izaberite **Ograđa** u istom alatu za ograde, podesite njenu visinu (1800 mm za početak), kliknite duž linije ograđe i pritisnite {{key:Enter}}.

- Ograđa dobija stub na svakom kraju i uglu, i stub najviše na svakih 2.4 m između njih. Ograda sa panelima ima panel između stubova; ograda od letvi ima dve šine. Ove dimenzije su uobičajeni izbori, a ne zahtev propisa; lokalni propisi ograničavaju visinu ograđe.
- To je jedan element u modelu (IfcRailing nazvan Fence) sa skupom svojstava {{ui:CadCraft_Fence}}: stil, visina, stubovi, paneli, šine, kapije, dužina i površina panela. Jedan korak opoziva.
- Ovde se ne crtaju: kapije (generator u CivilCraft-u ih raspoređuje), letve, teren (ograđa stoji na nivou) i izbor pojedinačnog stuba.

## Šta se čuva

Stepenište se čuva kao IFC stepenište napravljeno od krakova (sa njihovim visinama stepenika, gazištima i dužinom gazišta), podestima, zavojnim stepenicima i rukohvatima; otvor stepeništa je otvor u ploči poda sprata iznad. Ograde su IFC ograde sa svojom dužinom i brojem balustara i stubova.
