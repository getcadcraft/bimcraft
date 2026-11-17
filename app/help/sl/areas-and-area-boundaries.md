---
title: Površine in meje površin
summary: Izmerite bruto površino stavbe ali najemno površino znotraj mejnih črt, ki jih narišete ali vzamete iz zidov, in površine uvrstite v razpredelnico.
keywords: površina, površine, meja površine, shema površin, bruto površina stavbe, bruto tlorisna površina, GFA, najemna, tloris površin, razpredelnica površin, izbira zidov, ni zaprto
from: c79f96d2
---

## Kaj boste naredili

Narišite meje sheme površin, postavite površine znotraj njih in preberite vsote.

## Kje so orodja

- Postavitve s trakom: {{ui:Architecture}} › **Prostor in površina** › {{ui:Area}} in {{ui:Area Boundary}}.
- Klasična postavitev: vrstica Risanje › meni {{ui:Rooms}}.

## Koraki

1. Izberite {{ui:Area Boundary}}. V vrstici izberite {{ui:Scheme}}: **Bruto stavbe** ali **Najemna**. Vsaka shema ima svoje meje.
2. Izberite, kako narisati črte v {{ui:Make by}}:
   - **Risanje**: kliknite točko za točko.
   - **Izberite zidove: središčnica**: kliknite zid in njegova središčnica je meja.
   - **Izberite zidove: kliknjena stran**: kliknite zid na strani, ki jo želite; ta stran je meja. Za bruto površino stavbe kliknite zunanjo stran zunanjih zidov.
3. Izberite {{ui:Area}}. Izberite isto shemo, po želji vnesite ime, številko ali tip in kliknite znotraj meja.
4. Površina je takoj izmerjena. Izberite jo, da spremenite njeno ime, številko ali tip v **Lastnosti**.

## Kaj sledi čemu

- Meja, narisana z izbiro zidu, sledi temu zidu: premaknete zid in površina se v istem koraku izmeri znova.
- Meja, ki ste jo narisali, ostane tam, kjer ste jo narisali.
- Površine zidov, ki se stikajo v kotu, se tam tudi srečajo, zato štirje izbrani zidovi zaprejo površino brez vrzeli.
- Meje površin se prikažejo na tlorisu, medtem ko imate v roki orodje za prostor ali površino, sicer pa tloris ostane pregleden.

## Če meje niso zaprte

Površina je še vedno postavljena. Piše **Ni zaprto** in ne izmeri ničesar, dokler se meje okoli nje ne zaprejo. To je nasvet: nič ni zavrnjeno.

## Razpredelnica

Levo podokno › {{ui:Schedules}} › **Površine**: shema, številka, ime, tip, etaža, površina in obseg, z vsoto. Klik na vrstico izbere površino. {{ui:Download CSV}} prinese isto tabelo.

## V IFC

Površina je IfcSpace brez telesa: PredefinedType GFA za shemo bruto stavbe, USERDEFINED z ObjectType Rentable za najemno. Nosi GrossFloorArea in GrossPerimeter, nima pa neto površine, zato je ne zamenjate s prostorom. Meja je IfcVirtualElement.

## Še ni izdelano

- Sheme po meri (samo Bruto stavbe in Najemna).
- Barvni zapolnitve po tipu površine.
- Pravila, ki postavijo mejo namesto vas, na primer „do linije stekla“.

Glejte tudi [Prostori in ločilniki prostorov](topic:rooms-and-separators), [Oznake prostorov in površin](topic:room-and-area-tags).
