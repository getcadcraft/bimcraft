---
title: Izvēlieties elementu un izlasiet tā rekvizītus
summary: Noklikšķiniet uz jebkura elementa 3D IFC modelī, lai to iezīmētu un izlasītu tā nosaukumu, tipu, marķējumu, GlobalId, rekvizītu kopas un daudzumus.
keywords: rekvizīti, izvēle, atlasīt, klikšķis, elements, parametri, rekvizītu kopas, pset, daudzumi, globalid, guid, tips, pārbaudīt
from: 43b80aa8
---

## Ko jūs darīsiet

Izvēlieties elementus IFC modelī un izlasiet visu, ko fails par tiem saka: atribūtus, rekvizītu kopas, tipa rekvizītus un daudzumus.

## Soļi

1. Atveriet IFC modeli.
2. Noklikšķiniet uz elementa, piemēram, durvīm. Noklikšķiniet, nevelkot: vilkšana vairāk nekā dažus pikseļus griež skatu, nevis izvēlas.
3. Paskatieties uz elementu: tas tiek iezīmēts zilā krāsā.
4. Paskatieties uz paneli {{ui:Rekvizīti}} pa labi. Augšā ir elementa veids (piemēram, "Door" vai "WallStandardCase") un tā nosaukums.
5. Izlasiet pirmo bloku: **Nosaukums**, **Tips**, **Objekta tips**, **Marķējums**, **Apraksts**, **GlobalId** un **Rinda**.
6. Ritiniet uz leju līdz rekvizītu kopām. Pirmās trīs ir atvērtas; noklikšķiniet uz jebkuras citas kopas nosaukuma, lai to atvērtu.
7. Noklikšķiniet uz cita elementa, lai pārslēgtos uz to.
8. Nospiediet {{key:Esc}} vai noklikšķiniet uz tukša fona, lai notīrītu atlasi.

## Ko jūs redzēsiet

- Iezīmēto elementu un tā datus pa labi.
- Rekvizītu kopas alfabētiskā secībā. Kopas, kas nāk no elementa **tipa**, nosaukuma beigās ir ar " (tips)" un piezīmi "Tipa rekvizīts: izmaiņas šeit attiecas uz katru šī tipa elementu."
- Daudzumu kopas (piemēram, garumi, laukumi un tilpumi) uzskaitītas kopā ar citām kopām. Daudzumi ir tikai lasāmi.
- Vērtības, ko varat mainīt, izskatās kā pogas. [IFC rekvizītu maiņa un rediģētas kopijas saglabāšana](topic:edit-ifc-properties) parāda, kā.

[Rekvizītu paneļa lauki](topic:properties-panel) izskaidro katru lauku.

## Piekļuve paslēptiem elementiem

1. Lai nokļūtu kaut kam ēkas iekšienē, noņemiet atzīmi no stāviem virs tā sarakstā {{ui:Stāvi}}.
2. Lai nokļūtu pie sienas aiz telpas tilpuma, izslēdziet {{ui:Telpas}}.
3. Noklikšķiniet uz elementa.

## Biežākās kļūdas

- **Nedaudz pavelkot, klikšķinot.** BimCraft to uztver kā skata griešanu un neizvēlas. Turiet peli nekustīgi.
- **Gaidot mērvienības blakus skaitļiem.** Vērtības tiek rādītas tā, kā tās saglabātas failā, noapaļotas līdz četrām zīmēm aiz decimālzīmes, bez mērvienību simbola. Garumi metriskā eksportā parasti ir milimetri vai metri; pārbaudiet eksportētāja iestatījumus.
- **Meklējot parametru pēc tā pazīstamā nosaukuma.** Eksportētāji pārdēvē un pārgrupē parametrus IFC rekvizītu kopās, piemēram, `Pset_WallCommon`. Pārlūkojiet katru kopu; pielāgoti parametri bieži atrodas kopā, kas nosaukta pēc eksportējošās programmas vai jūsu uzņēmuma.
- **Gaidot meklēšanas lodziņu.** Noklikšķiniet, lai izvēlētos elementu; {{key:Mod}}+klikšķis vai {{key:Shift}}+klikšķis izvēlas vairāk, un {{key:Mod+A}} izvēlas katru redzamo elementu. Saraksts {{ui:Elementi}} kreisajā pusē tikai saskaita elementus pēc veida; tas nav klikšķināms.
- **Izvēloties projekta faila kartīti.** Faila kartītē nav elementu, ko izvēlēties: "Elementu rekvizītiem vajag 3D modeli. Atveriet šī faila IFC eksportu, lai tos redzētu."
