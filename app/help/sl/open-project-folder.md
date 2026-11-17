---
title: Odprite celotno projektno mapo
summary: Usmerite BimCraft na projektno mapo, da hkrati vidite vse modele, njihove varnostne kopije in povezave, in naj polje Začnite tukaj predlaga, na kateri datoteki naj delate.
keywords: mapa, imenik, projektna mapa, omrežni pogon, strežnik, začnite tukaj, katera datoteka, varnostne kopije, povezave, zunanji sklici, nedavne mape, povleci mapo
from: 16fbdce2
---

## Kaj boste naredili

Odprite celotno projektno mapo, na primer tisto, ki vam je bila dodeljena za delo, in naj BimCraft uredi: kateri modeli so tam, katere kopije so varnostne, kaj s čim povezuje, katere datoteke so poškodovane in katero datoteko najverjetneje želite odpreti.

Preberejo se le nekaj kilobajtov, ki jih potrebuje vsaka kartica modela, zato sta mapa na omrežnem pogonu ali sinhronizirana mapa v oblaku v redu.

## Koraki

:::chromium
1. Kliknite {{ui:Odpri mapo}} na levi (ali sredi praznega zaslona).
2. V oknu, ki se odpre, izberite projektno mapo in kliknite **Izberi** (ali **Naloži** ali **Odpri**, odvisno od vašega sistema).
3. Kliknite **Ogled datotek**, ko brskalnik vpraša „Ali naj spletno mesto vidi datoteke?“. To samo omogoči zavihku branje mape; nič se ne naloži.
4. Počakajte, medtem ko vrstica stanja šteje: „Seznam mape: … datotek“, nato „Preverjanje datotek Revit: … od …“.
:::

:::firefox
1. Kliknite {{ui:Odpri mapo}} na levi (ali sredi praznega zaslona).
2. V oknu, ki se odpre, izberite projektno mapo in potrdite. Firefox vas morda vpraša, da potrdite, da lahko stran bere datoteke mape; te kljub temu ostanejo na vašem računalniku.
3. Počakajte, medtem ko vrstica stanja prikazuje „Branje mape: … datotek“, nato „Preverjanje datotek Revit: … od …“.
:::

:::safari
1. Kliknite {{ui:Odpri mapo}} na levi (ali sredi praznega zaslona).
2. V oknu, ki se odpre, izberite projektno mapo in kliknite **Naloži**. Kljub besedi nič ne zapusti vašega Maca: datoteke so samo predane zavihku.
3. Počakajte, medtem ko vrstica stanja prikazuje „Branje mape: … datotek“, nato „Preverjanje datotek Revit: … od …“.
:::

Mapo lahko tudi **povlečete** iz {{pick:mac=Finder|windows=Raziskovalec|linux=vaš upravitelj datotek}} na stran. Povlečena mapa se odpre brez poziva za dovoljenje v vsakem brskalniku.

## Kaj boste videli

Poročilo o mapi zapolni sredino:

- Ime mape, števila modelov, risb CAD, modelov IFC in datotek ter skupna velikost.
- Rdeče ali rumene opombe, če so kakšne datoteke nepopolne ali če v mapi manjkajo kakšne povezane datoteke.
- Polje {{ui:Začnite tukaj}}: datoteka, ki jo BimCraft predlaga za odpiranje, z razlogi.
- **Modeli**: ena vrstica na model, z njegovimi varnostnimi kopijami pod njim.
- **Povezane in sklicane datoteke**, **Modeli IFC**, **Risbe CAD** in **Odložene**, če jih mapa vsebuje.

Na levi povzame podokno {{ui:Mapa}}; **Težave** pove „Brez“, ko je vsaka kopija v redu.

## Uporaba polja Začnite tukaj

Polje navede eno datoteko in pove, zakaj, na primer:

- „Najnovejše shranjeno delo v tej mapi (3. 3. 2025).“
- „*Consultant.rvt* je povezan v druge modele, zato je podlaga, ne datoteka za urejanje.“
- „*Tower.rvt* se zdi očitna izbira, vendar je poškodovan; njegova zadnja dobra kopija je iz …“
- „To je centralni model: v Revitu ga odprite z ‚Create New Local‘ in delajte v lokalni kopiji.“

1. Preberite razloge.
2. Kliknite {{ui:Odpri njeno kartico}}, da preberete kartico te datoteke, ali {{ui:Pokaži na seznamu}}, da najdete njeno vrstico v **Modeli**.
3. Pred uporabo preverite z osebo, ki je nazadnje delala na projektu. Polje to tudi pove: je le najboljši domnevi iz imen, datumov in povezav.

## Odpiranje datotek iz poročila

1. Kliknite ime modela, da odprete njegovo kartico. Kartica preveri vsako povezavo glede na mapo.
2. Kliknite {{ui:Nazaj na}} in ime mape na vrhu kartice (ali {{ui:Nazaj na mapo}} na levi), da se vrnete.
3. Kliknite katero koli datoteko IFC pod **Modeli IFC**, da jo odprete v 3D.
4. Kliknite katero koli DWG ali DXF pod **Risbe CAD**, da jo odprete v 2D. Njene povezane risbe in slike se v mapi samodejno najdejo.

## Ponovno odpiranje mape pozneje

:::chromium
Mape, ki ste jih odprli z {{ui:Odpri mapo}} ali z vlečenjem, so navedene pod {{ui:Nedavne mape}} na levi. Kliknite {{ui:Ponovno odpri}} in ime mape, da jo znova odprete, ne da bi jo izbrali. Po ponovnem zagonu brskalnika Chrome ali Edge vpraša še enkrat; izberite „Dovoli pri vsakem obisku“, da preneha vprašati. Seznam je shranjen samo v tem brskalniku, nikoli se ne pošlje nikamor. Kliknite × za pozabo mape.
:::

:::firefox safari
Ta brskalnik si mape med obiski ne more zapomniti. Mapo znova izberite z {{ui:Odpri mapo}} ali jo povlecite vanj.
:::

## Pogoste napake

- **Izbira prevelike mape.** Več kot 20,000 datotek: „Ta mapa ima več kot 20,000 datotek. Izberite manjšo mapo, na primer en projekt.“ Izberite projektno mapo, ne celotnega pogona.
- **Izbira nadrejene mape več projektov.** Polje {{ui:Začnite tukaj}} nato izbira med projekti. Izberite en projekt.
- **Zdi se, da so Revitove lastne mape prezrte.** Mape `*_backup`, `*_log` in `Revit_temp` so pomožne mape, navedene pod **Odložene**, ne pa prebrane.
- **Pričakovanje, da se bo model iz svoje kartice odprl v 3D.** Projektna datoteka je samo kartica. Odprite njen izvoz IFC.
- **Telefoni in tablični računalniki.** Mnogi mobilni brskalniki sploh ne morejo izbirati map. Uporabite računalnik.

Glejte [Preverjanje mape za poškodovane kopije, manjkajoče povezave in ostanke](topic:check-folder-health) in [Poročilo o mapi: vloge, stanja in povezave](topic:folder-roles).
