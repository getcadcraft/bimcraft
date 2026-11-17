---
title: Pošiljanje prizora igralnemu pogonu
summary: Studio lahko zapiše prizor v projekt Unreal Engine in ga ob vsakem pošiljanju drži usklajenega; vaše lastne spremembe so v plasti, ki je CadCraft nikoli ne zapiše. Vtičnik, ki ga odpre, še ni izdan.
keywords: unreal, unreal engine, igralni pogon, povezava, pošlji, usd stage, projekt, v živo, cine camera, čakalna vrsta upodobitev filma
from: 154d55ef
---

V CadCraft Studiu lahko seznam pogonov vsebuje **povezavo** do projekta Unreal Engine. Samo ena smer: od CadCraft do Unreal.

## Pošiljanje prizora

1. Izberite vnos Unreal na seznamu pogonov. Prvič vas Studio prosi, da izberete mapo svojega projekta (tisto z datoteko `.uproject`); zapomni si jo.
2. Kliknite {{ui:Pošlji}}. Studio zapiše `CadCraft/<ime datoteke>/` v projekt: prizor kot datoteko USD, datoteko z nastavitvami, profile svetlobe in dve majhni datoteki plasti.
3. Spremenite model, shranite in znova pošljite. Zamenjata se samo prizor in datoteka z nastavitvami.

## Vaše lastne spremembe so varne

Oder USD, ki ga Unreal odpre, je majhna korenska plast, narejena enkrat, z dvema plastema pod njo: **vaša** zgoraj (`<name>.user.usda`, sprva prazna, CadCraft je nikoli ne prepiše) in CadCraftov prizor spodaj. Spremembe, ki jih shranite v svojo plast, ostanejo, ko se prizor znova pošlje. Luči in drugi akterji, ki jih postavite v nivoju Unreal, so zunaj odra in se prav tako ne spreminjajo.

## Brez Studia

V brskalniku ali na računalniku, kjer Studio ne najde Unreal, izberite **Mapa projekta Unreal (.zip)** na seznamu pogonov in kliknite {{ui:Upodobitev}}. Shrani isto mapo kot zip: razpakirajte jo v mapo `CadCraft` svojega projekta. Prvič pustite **Vključi datoteke odra** vklopljeno; pri poznejših shranjevanjih ga izklopite, tako zip vsebuje samo prizor in datoteko z nastavitvami, vaša lastna plast pa se nikoli ne zamenja.

:::note
Vtičnik Unreal, ki odpre oder, uporabi sonce, svetilke, kamere in izpostavljenost, sledi vsakemu pošiljanju in upodobi kamero, **še ni izdan** in v Unreal ni bil zagnan. Do takrat Pošlji da datoteke v projekt, orodja Unreal za USD pa jih lahko odprejo. Prvi je sistem Windows; sledi macOS.
:::
