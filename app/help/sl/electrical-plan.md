---
title: Električni tloris
summary: Na tloris postavite vtičnice, stikala, luči, senzorje, izvodne škatle in razdelilnike z enakimi simboli kot dodatek Elektrika programa CadCraft, povežite stikala z lučmi, ki jih prižigajo, in naštejte naprave ter tokokroge v razpredelnicah.
keywords: elektrika, električni tloris, vtičnica, dvojna vtičnica, stikalo, tristopenjsko stikalo, three-way, regulator svetlobe, dimmer, luč, stropna luč, vgradna luč, downlight, senzor gibanja, izvodna škatla, razdelilnik, razdelilna plošča, tokokrog, obremenitev, vati, amperi, vod stikala, razpredelnica naprav, razpredelnica razdelilnika
from: f7de1947
---

## Kaj boste naredili

Narišite električni tloris hiše v modelu: vtičnice, stikala in razdelilnike na stenah, luči in senzorje na stropu. Vsaka naprava je pravi električni element v datoteki IFC, z oznako, tokokrogom in obremenitvijo, stikala pa si zapomnijo luči, ki jih prižigajo.

## Postavitev naprav

1. Na etaži odprite {{ui:Zgradba}} in izberite {{ui:Elektrika}}.
2. Izberite napravo: vtičnice (moč, podatki, telefon, avdio-video), stikala in senzorje (tudi termostat in časovnik), luči, detektorje in alarme, izvodno škatlo, razdelilnik ali podrazdelilnik.
3. Vnesite **tokokrog**, če ga poznate (poljubno ime: 1, 2, A-3). Polje **Višina montaže** pustite prazno, da se uporabi običajna višina te naprave.
4. Kliknite na tloris. Vtičnice, stikala in razdelilniki gredo na površino najbližje stene, obrnjeno v prostor; luči, senzorji in izvodne škatle gredo na strop, tam kjer kliknete.

Naprave se označijo, ko jih postavite: **R** za vtičnice, **S** za stikala, **L** za luči, **M** za senzorje gibanja, **J** za izvodne škatle, **P** za razdelilnike. Naprave na steni se premaknejo skupaj z njo, ko premaknete steno.

Raje brskate po sliki? Odprite **Paleto simbolov** iz {{ui:Zgradba}}, da napravo poiščete po imenu, si označite tiste, ki jih uporabljate, in jo postavite z enim klikom: glejte [Paleta simbolov](topic:symbol-palette).

## Povežite stikala z lučmi

1. Izberite stikalo (ali senzor gibanja) in kliknite **Poveži luči** v **{{ui:Lastnosti}}**.
2. Kliknite vsako luč, ki jo ta prižiga. Ponovni klik na povezano luč jo odklopi.
3. Pritisnite {{key:Enter}} ali kliknite **Končano**.

Tloris nariše črtkano krivuljo od stikala do vsake njegove luči. V **{{ui:Lastnosti}}** luči je prikazano, katera stikala jo prižigajo.

## Prostor, v katerem naprava stoji

Vsaka naprava pozna prostor, v katerem stoji. Naprava na steni je v prostoru, na katerega gleda; naprava na stropu je v prostoru, nad katerim je. **{{ui:Lastnosti}}** prikazujejo **Prostor**, razpredelnica **Električne naprave** pa ima stolpec **Prostor** (številka in ime, na primer 101 Kuhinja).

Podatek se sproti posodablja: preimenujete ali preštevilčite prostor, premaknete napravo ali steno, in prostor se v istem koraku prilagodi. Naprava na zunanji strani stavbe ali v prostoru, ki ni prostor, sporoči, da ni v prostoru.

Prostor je zapisan tudi v nabor lastnosti naprave `CadCraft_Location` (Room, RoomNumber, RoomName), zato ga lahko uporabljajo Iskanje, Barvanje po lastnosti in razpredelnica oznak, pa tudi drug program. Simboli v tlorisu in elementi, povezani s simbolom, dobijo isti nabor; glejte [Paleta simbolov](topic:symbol-palette).

## Naj vaš pomočnik postavi naprave

Če je pomočnik povezan (**Nastavitve › Pomočniki**, z dovoljenimi spremembami), lahko naprave zahtevate z besedami, na primer „postavi dvojno vtičnico na vsake 2 m ob stenah dnevne sobe, 300 mm nad tlemi, na tokokrogu 3“ ali „dodaj stropno luč s stikalom ob vratih“. Pomočnik uporablja pet orodij: `devices_add`, `device_change`, `lights_set`, `devices_delete` in `devices_list`. Ustvarijo iste naprave kot orodje Elektrika, na istih stenah, z istimi oznakami, tokokrogi, obremenitvami in višinami; vsak klic je en korak razveljavitve.

Naprava nikoli ne dobi vrste, ki je orodje Elektrika nima: neznana vrsta je zavrnjena, pomočnik pa dobi seznam. Vtičnica ali stikalo mora biti največ 600 mm od površine stene, kot pri kliku, sicer je klic zavrnjen in nič ni postavljeno. Privzete višine so v milimetrih: 300 za vtičnice, 1100 za stikala; stropna naprava visi s stropa.

## Spreminjanje in seznam

Izberite napravo, da spremenite njeno oznako, tokokrog, obremenitev (vati) in višino montaže. Izberite več naprav, da jih vse naenkrat date na isti tokokrog. Pritisnite {{key:Delete}}, da odstranite eno; izbrisana luč se odstrani s stikal, ki so jo prižigala.

V {{ui:Razpredelnice}} izberite **Električne naprave** za vse naprave z etažo, tokokrogom, obremenitvijo, višino in lučmi, ki jih prižiga vsako stikalo, ali **Tokokrogi** za naprave vsakega tokokroga, skupno obremenitev in tok. Obe sta tudi na listu razpredelnic kompleta risb: glejte [Pogledi, prerezi in listi](topic:sheets).

:::note
Višine montaže in obremenitve so privzete vrednosti za načrtovanje (vtičnica 16" nad tlemi in 200 W, stikalo na 48", stropna luč 60 W), ne projekt: elektrikar ali inženir določi tokokroge in preveri predpise.
:::

:::tip
Simboli so enaki tistim, ki jih na instalacijskih načrtih riše dodatek Elektrika programa CadCraft, zato se načrt iz katerega koli od obeh programov bere enako.
:::
