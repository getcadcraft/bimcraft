---
title: Delo med dvema programoma BIM
summary: Pošljite model iz enega programa BIM v drugega prek IFC, pri čemer je BimCraft vmes; ohranite GlobalId-je, nabore lastnosti in klasifikacije, nastavite oba programa na iste lastnosti in preverite, kaj se je vrnilo.
keywords: ifc, krožno pretvarjanje, interoperabilnost, globalid, guid, nabori lastnosti, psets, klasifikacije, skupni parametri, preslikava lastnosti, prevajalnik, bcf, koordinacija, izmenjava
from: 9f224176
---

## Kaj boste naredili

Premaknite model med dvema programoma BIM, na primer iz Revit v Archicad in nazaj, prek IFC; BimCraft je vmes, da ga preveri, dopolni in poroča, kaj je preživelo. Lastna datotečna oblika nobenega od programov se ne bere: vse potuje kot IFC.

## Kaj ohrani BimCraft

Ko spremenite model v BimCraft in kliknete {{ui:Shrani kot IFC}}, se vsaka vrstica, ki je niste spremenili, zapiše nazaj natanko takšna, kot je bila. Torej:

- **GlobalId-ji** ostanejo enaki, drugi program lahko vsak element ujame z elementom, ki ga je poslal.
- **Nabori lastnosti** in njihove vrednosti ostanejo, razen vrednosti, ki ste jih spremenili.
- **Klasifikacije** ostanejo pripete na svoje elemente.

## Nastavite oba programa na iste lastnosti

1. Odprite model v BimCraft (in paket projekta, če ga imate: njegove skupine lastnosti se dodajo).
2. V levem podoknu odprite {{ui:Med dvema programoma BIM}}.
3. Pod **Preslikava lastnosti** prenesite, kar vsak program potrebuje:
   - {{ui:Skupni parametri}}: datoteka skupnih parametrov. V Revit jo naložite z Upravljanje › Skupni parametri in parametre dodate kategorijam, ki jih potrebujejo.
   - {{ui:Nabori lastnosti za izvoz IFC}}: datoteka naborov lastnosti, ki jih določi uporabnik. V nastavitvah izvoza IFC v Revit jo izberite pod naborji lastnosti, ki jih določi uporabnik, da izvoženi IFC nosi isti nabor in ista imena lastnosti.
   - {{ui:Preslikovalna tabela (CSV)}}: vsaka lastnost z naborom IFC, imenom, tipom in ustreznimi imeni v vsakem programu. Preslikovalne datoteke Archicad niso objavljen format, zato njegov prevajalnik IFC in upravitelja lastnosti nastavite ročno po tej tabeli.
   - {{ui:Datoteka preslikave}}: celotna preslikava kot ena datoteka, ki jo hranite s projektom.

Standardni nabori (`Pset_` in `Qto_`) so izpuščeni iz datoteke skupnih parametrov: oba programa jih zapišeta iz svojih podatkov.

## Pošljite model in ga vrnite

1. Izvozite IFC iz prvega programa z ohranjenimi GlobalId-ji (Revit: "Store the IFC GUID in an element parameter after export" vklopljeno).
2. Odprite ga v BimCraft, preverite ({{ui:Preverjanja modela}}, {{ui:Preverjanje kolizij}}), dodajte zadeve ({{ui:Zadeve}}, BCF), po potrebi spremenite vrednosti in {{ui:Shrani kot IFC}}.
3. Shranjeni IFC odprite v drugem programu, delajte na njem in izvozite IFC od tam z ohranjenimi GlobalId-ji (prevajalnik Archicad: "Global Unique Identifiers: Keep existing").
4. Nazaj v BimCraft odprite model, ki je bil poslan, nato dodajte tistega, ki se je vrnil ({{ui:Dodaj model}} pod Modeli).
5. V {{ui:Med dvema programoma BIM}} izberite **Poslano** in **Vrnjeno** ter kliknite {{ui:Izdelaj poročilo}}.

## Preberite poročilo

- **Elementi**: koliko jih je vrnjenih z istim GlobalId-jem, koliko manjka in koliko je novih. Elementi z novim GlobalId-jem se prikažejo kot en manjkajoč in en nov: drugi program ga ni ohranil.
- **Spremenjen razred IFC**: elementi, ki so se vrnili kot druga vrsta elementa.
- **Ohranjene vrednosti lastnosti**: delež vrednosti, ki so se vrnile nespremenjene. Spodnji seznam prikaže lastnosti z največ spremenjenimi ali manjkajočimi vrednostmi.
- **Klasifikacije**: ohranjene, spremenjene (isti sistem, druga koda) ali manjkajoče.

{{ui:Prenesi poročilo (CSV)}} da vsako lastnost s številom. Če želite videti, kateri elementi so se premaknili ali spremenili obliko, uporabite {{ui:Primerjava različic}} na istih dveh modelih.

:::note
BimCraft ne zažene nobenega od obeh programov. Katere nastavitve prenesejo vrednost, je odvisno od IFC nastavitev vsakega programa: poročilo pokaže, kaj je dejansko prišlo nazaj, zato poskusite nastavitev, znova izvozite in primerjajte.
:::

## Zadeve potujejo kot BCF

Zadeve, ki jih dvignete v BimCraft, se izvozijo kot BCF ({{ui:Zadeve}}), ki ju lahko oba programa berejo s svojimi orodji BCF, tako da vprašanje o elementu doseže osebo, ki dela v drugem programu, skupaj s svojim pogledom.

Glejte tudi [Odpri paket projekta](topic:open-project-bundle), [Od projektne datoteke do BimCraft prek IFC](topic:rvt-to-ifc) in [Primerjava dveh različic modela](topic:compare-versions).
