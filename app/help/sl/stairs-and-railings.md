---
title: Stopnišča in ograje
summary: Narišite ravna stopnišča ter stopnišča v obliki L, U in vijačna, ki iz višine med etažami sami določijo višine in gaze stopnic, z oprijemali, tralnimi in izrezom stopniščne odprtine v etaži nad njimi; ob terasah in okoli odprtin narišite varovalne ograje.
keywords: vijačno, okroglo stopnišče, stopnišče, stopnice, tek, stopnica, gaz, podest, klinasta stopnica, stopnišče L, stopnišče U, zavijanje, oprijemalo, varovalna ograja, ograja, tralna, steber, drog, stopniščna odprtina, svetla višina, terasa, balkon
from: 16e5ace4
---

## Kaj boste naredili

Dodajte stopnišča med etažami in ograje tam, kjer jih ljudje potrebujejo. Stopnišče si iz višine med etažami določi lastne stopnice, drži se običajnih stanovanjskih omejitev, na odprtih straneh postavi oprijemala in v etaži nad njim izreže stopniščno odprtino.

## Narišite stopnišče

1. Na etaži, kjer se stopnišče začne, odprite {{ui:Zgradba}} in izberite {{ui:Stopnišče}}.
2. Izberite vrsto — **Ravno**, **L s podestom**, **U s podestom** ali **L s klinastimi stopnicami** —, smer, v katero **zavija**, njegovo **širino** in kje naj bodo njegova **oprijemala**.
3. Kliknite, kjer se stopnišče začne: na sredino sprednjega roba spodnje stopnice.
4. Premaknite kazalec v smeri, v katero stopnišče vodi navzgor; stopnice mu sledijo, s številom stopnic in gazov. Lovi se na stene in na korake po 15°; držite {{key:Shift}}, da ostane pravokotno.
5. Kliknite. {{key:Esc}} začne znova.

## Narišite vijačno stopnišče

1. Odprite {{ui:Zgradba}}, izberite {{ui:Stopnišče}} in nato za vrsto izberite **Vijačno**.
2. Nastavite **Zavoj**, v katero smer se vije navzgor (levo je v nasprotni smeri urnega kazalca).
3. Kliknite središče njegovega droga.
4. Kliknite v smeri, v katero kaže spodnji gaz.

Začne se 30" široko (gaz, od droga do zunanjega roba), z drogom 4½". Stopnice se izračunajo iz višine med tlemi etaže in etažo nad njo, največ 9½" po privzetku. Gazi so na hodni črti 7½" globoki, 12" od droga. Oprijemalo teče na zunanji strani.

V **Lastnostih** vijačno stopnišče doda **Središčni drog** s svojim premerom. Polje **Gaz** se meri na hodni črti. Njegove kontrole so označene kot privzete vrednosti za vijačna stopnišča: 26" svetla širina, vsaj 6¾" gaza na hodni črti, stopnice največ 9½" in oprijemala 34"–38". Niso inženirski izračuni; odloča gradbeni inšpektor.

## Kako se izračunajo stopnice

Višina med tlemi etaže in etažo nad njo se razdeli na enake stopnice, ki niso višje od 7¾", vsak gaz pa je 10" globok (oboje lahko spremenite v **Lastnostih**). Podest šteje kot ena stopnica; klinaste stopnice so tri stopnice, razporejene v vrsto okoli notranjega vogala. Če spremenite višino etaže, se vsako stopnišče na njej ponovno izračuna.

:::warning
Stopnice 7¾", gazi 10", širina 36", svetla višina 6'-8" in oprijemala 34"–38" so privzete vrednosti po običajnem stanovanjskem predpisu, niso inženirski izračuni. **Lastnosti** pove, katere so izpolnjene; vaš gradbeni inšpektor odloči, kaj velja.
:::

## Spremenite stopnišče

Izberite ga (kliknite ga na tlorisu ali v 3D-pogledu) in spremenite v **Lastnostih**: njegovo vrsto in zavoj, širino, najvišjo stopnico, globino gaza, oprijemala in njihovo višino ter **Izreži tla nad** za stopniščno odprtino. Stopnice in gazi, ki jih je stopnišče na koncu dobilo, so prikazani spodaj.

## Stopniščna odprtina

Če ima etaža nad njim tla, stopnišče v njih izreže odprtino tam, kjer bi imele stopnice manj kot 6'-8" svetle višine. Izrez se premika s stopniščem in izgine, ko stopnišče izbrišete.

## Narišite ograjo

1. Odprite {{ui:Zgradba}} in izberite {{ui:Ograja}}.
2. Izberite **Varovalna ograja** (visoka 36") ali **Oprijemalo** ter njegovo višino.
3. Kliknite vzdolž roba — terase, balkona, okoli stopniščne odprtine — in dvokliknite ali pritisnite {{key:Enter}}, da končate.

Ograje dobijo stebričke na koncih in vogalih ter tralne z razmiki pod 4". Izberite jo, da spremenite njeno vrsto, višino ali koliko nad tlemi se začne.

## Narišite plot

Izberite **Plot** v istem orodju za ograje, nastavite njegovo višino (sprva 1800 mm), kliknite vzdolž črte plota in pritisnite {{key:Enter}}.

- Plot dobi stebriček na vsakem koncu in vogalu ter stebriček na največ vsakih 2.4 m med njimi. Plot s paneli ima panel med stebrički; plot z letvami ima dve prečki. Te velikosti so običajne izbire, ne zahteva predpisov; lokalna pravila omejujejo višino plota.
- Je en element v modelu (IfcRailing z imenom Fence) z naborom lastnosti {{ui:CadCraft_Fence}}: slog, višina, stebrički, paneli, prečke, vrata, dolžina in površina panelov. En korak razveljavitve.
- Tu ni narisano: vratca (generator v CivilCraftu jih razporedi), količki, teren (plot stoji na etaži) in izbor posameznega stebrička.

## Kaj se shrani

Stopnišče se shrani kot stopnišče IFC iz stopniških tekov (z njihovimi stopnicami, višino stopnic in dolžino gazov), podestov, klinastih stopnic in oprijemal; stopniščna odprtina je odprtina v plošči tal nad njim. Ograje so ograje IFC z njihovo dolžino ter številom tralnih in stebričkov.
