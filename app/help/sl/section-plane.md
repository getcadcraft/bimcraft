---
title: Prerežite model IFC z ravnino reza
summary: Prerežite 3D model z vrha, sprednje ali stranske strani ali ohranite le, kar je znotraj kvadra prereza ali prostornine iz več kvadrov z nagnjenimi ploskvami, da vidite notranjost; reza premaknete z vlečenjem ali vpisom, ga obrnete in izberete, kaj reza prikaže.
keywords: prerez, ravnina prereza, kvader prereza, ročice, vlečenje, odmik, izbirni kvader, kvader za rezanje, rez, obrezovanje, rezina, tloris, tloris prereza, pogled, notranjost, obrni, prostornina prereza, stopničasti prerez, L-oblika, nagib, poševni rez, dodatna ravnina
from: 6315e71a
---

## Kaj boste naredili

Z eno ravnino prerežite model IFC, da vidite notranjost: z vrha za tloris ali s sprednje ali stranske strani za prerez skozi stavbo.

## Koraki

1. Odprite model IFC. Glejte [Odprite model IFC in si oglejte 3D](topic:open-ifc-model).
2. Kliknite {{ui:Prerez}} na orodni vrstici ali pritisnite {{key:X}}. Model je prerezan na polovici višine, pod orodno vrstico pa se pojavi vrstica.
3. Izberite, od kod rezati: {{ui:Zgoraj}}, {{ui:Spredaj}} ali {{ui:Bok}}. Možnosti Spredaj in Bok tudi obrneta pogled, da si ogledate rez.
4. Premaknite rez: povlecite drsnik **Odmik** ali v polje vpišite razdaljo v metrih in pritisnite {{key:Enter}}. Lahko vpišete tudi milimetre, na primer `1200 mm`.
5. Kliknite {{ui:Obrni}}, da obdržite drugo stran reza.
6. Kliknite element na rezu, da vidite njegove lastnosti.
7. Kliknite {{ui:Izklopljeno}}, ponovno kliknite {{ui:Prerez}} ali pritisnite {{key:X}}, da rez odstranite.

## Kvader prereza

Kliknite {{ui:Kvader}} v isti vrstici, da obdržite le to, kar je znotraj kvadra. Vsak od {{ui:X}}, {{ui:Y}} in {{ui:Z}} ima dva drsnika: kje se kvader začne in kje konča, v metrih od roba modela. Vrednosti se prikažejo ob njih.

- {{ui:Kvader okoli izbora}} prilagodi kvader elementom, ki ste jih izbrali, in pribllive nanje. Pusti 300 mm prostora na vsaki strani; to spremenite v {{ui:Nastavitve}} › {{ui:BimCraft}} › {{ui:Rezerva okoli izbora}}.
- Če so elementi izbrani, {{ui:Pokaži}} › {{ui:Prerezni kvader okoli izbora}} ali {{key:Shift+X}} naredi isto v enem koraku, tudi če rez ni vklopljen.
- **Ročice** na kvadru ga premikajo s kazalcem: povlecite kvadratek na sredini ploskve, da premaknete to ploskev, tistega na sredini roba, da premaknete obe ploskvi, ki se tam srečata, ali enega na vogalu, da premaknete vse tri. Drsniki sledijo. V {{ui:Zgoraj}} vogal premakne kvader v tlorisu, v {{ui:Spredaj}} ali {{ui:Bok}} pa v pogledu.
- {{ui:Cel model}} spet odpre kvader na ves model.
- {{ui:Zgoraj}}, {{ui:Spredaj}} ali {{ui:Bok}} se vrnejo na eno ravnino.

## Prostornina iz več kvadrov, nagnjene ploskve in dodatne ravnine

Kvader ni vedno oblika, ki jo potrebujete: stopničasti prerez, L-oblično krilo ali rez vzdolž stene, ki ni pravokotna na mrežo.

1. V {{ui:Kvader}} kliknite {{ui:Dodaj kvader}}. Rez zdaj obdrži, kar je znotraj **katerega koli** kvadra, tako da dva kvadra naredita stopničasto ali L-oblično prostornino. Seznam ob tem pove, kateri kvader spreminjajo drsniki ({{ui:Kvader 1}}, {{ui:Kvader 2}} …); {{ui:Odstrani ta kvader}} odstrani izbranega. Prostornina zajema do 8 kvadrov.
2. Odprite {{ui:Nagib in ravnine}}, da oblikujete izbrani kvader:
   - Izberite {{ui:Ploskev}} in vpišite, koliko se nagne na vsako stran, v stopinjah (do 80). Ploskev se obrne okoli svoje sredine; druge ploskve ostanejo tam, kamor jih postavijo drsniki. {{ui:Pravokotno}} jo vrne nazaj.
   - {{ui:Dodaj ravnino}} prereže kvader z dodatno ravnino. {{ui:Ploskve}} je smer, v kateri je odrezana stran obrnjena, v stopinjah od X proti Y; {{ui:Naklon}} pove, koliko se ta navzgor zavrti (0 za pokončno ravnino, 90 za vodoravno); {{ui:Odmik}} je, kako daleč je ravnina od sredine kvadra, v metrih. × jo odstrani. Kvader ima do 6 dodatnih ravnin.
3. Kjer prostornina prereže trdna telesa, so rezne ploskve zapolnjene kot prej, tudi tam, kjer se dva kvadra srečata v stopnici.

:::tip
Če obris izgine in ničesar ni več, nagibi ali ravnine ne pustijo ničesar znotraj tega kvadra; vrstica to pove. Nagnite ploskev nazaj ali spremenite odmik ravnine.
:::

## Stavba, obrnjena na svojem zemljišču

Mnogi modeli postavijo stavbo pod kotom glede na osi datoteke (pravi sever, skupne koordinate). Ko so stene pod kotom, se nov prerez začne pravokotno na stavbo: {{ui:Spredaj}}, {{ui:Bok}} in kvader tečejo vzdolž njenih lastnih sten, {{ui:Pravokotno na stavbo}} v vrstici prereza pa je vklopljeno. Kliknite ga za osi modela, in še enkrat, da se vrnete nazaj (vrstica stanja pove, za koliko je stavba obrnjena). S **Nastavitve › BimCraft › Stavba, obrnjena na svojem zemljišču › Kot je postavljena na zemljišču** se prerezi in pogledi začnejo na oseh modela. Glejte [Nastavitve](topic:settings).

## Kaj bi morali videti

- **Zgoraj** ohrani, kar je pod rezom, tako da gledate v sobe od zgoraj. Odmik se meri navzgor od dna modela.
- **Spredaj** ohrani, kar je za rezom, gledano od spredaj; **Bok** ohrani, kar je za njim, gledano z boka. Odmik se meri od sprednje ali stranske strani modela.
- Tanek barvni obris kaže, kje je ravnina.
- Kjer ravnina seka steno, ploščo ali drugo trdno telo, je rez zapolnjen s temno barvo, kot pri narisanem prerezu. {{ui:Polnilo}} v vrstici to vklopi in izklopi.
- Kocka pogleda v spodnjem desnem kotu zavrti model, da si rez ogledate z vseh strani.
- Klik izbere, kar vidite: kar je odrezano, ni izbirno.

## Pogoste napake

- **Nič se ni spremenilo.** Rez je lahko nad streho ali zunaj modela. Povlecite drsnik ali vpišite manjši odmik.
- **Odmik je skočil nazaj.** Razdalja čez model se premakne na njegov konec, vrstica stanja to pove.
- **Zadeva prikazuje le del moje prostornine.** Zadeva (BCF) obdrži en kvader z nagnjenimi ploskvami in ravninami: prvi kvader prostornine. Vrstica stanja to pove, ko zadevo ustvarite.
- **Rez je votel.** {{ui:Polnilo}} v vrstici je izklopljeno: kliknite ga, da zapolnite rezne ploskve sten, plošč in drugih trdnih teles.
- **Zapolnjen rez je packast ali manjka kos.** Zapolnjevanje potrebuje zaprta telesa; element, katerega oblika v datoteki ni zaprta (posamezen list, listje drevesa), ostane nezapolnjen, namesto da bi ga prebarvali. Element iz delov različnih barv (okvir in njegovo steklo) se zapolni, kadar se njegovi deli tesno stikajo.
- **Kje je vrstica prereza?** Je na vrhu 3D pogleda, ki ga reže: na 3D polovici v {{ui:Razdeli}}, pod vrstico za risanje v {{ui:Tloris}} sam. V kratkem pogledu se pomika.

## Naprej

- [Pokažite in skrijte etaže, prostore in robove](topic:storeys-and-spaces)
- [Oglejte si risbo DWG ali DXF v 3D](topic:dwg-in-3d) — risbe v 3D imajo enako ravnino reza
