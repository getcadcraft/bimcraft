---
title: Preglejte model: prostori, oznake, LOD, kolizije in vmesniki
summary: Zaženite pripravljene preglede za neimenovane prostore, manjkajoče oznake, elemente pod stopnjo razvoja, ki jo zahteva faza projekta, kolizije med strokami in vmesnike LOD 350. Samo nasveti: nič ni blokirano.
keywords: revizija, pregled, neimenovan prostor, manjkajoča oznaka, oznaka, lod, stopnja razvoja, mejnik, faza, kolizija, stroka, koordinacija, vmesnik, lod 350, odprtina, nadpraga, naglavnik, prehod, zaščitna cev, cev, kanal, težave, poročilo o pregledu, svetovanje
from: cc83a14d
---

## Kaj boste naredili

Pred izdajo pregledajte celoten model naenkrat. Revizija zažene pripravljene nabore pravil in to, kar najde, da na seznam {{ui:Problems}} kot nasvet. Nič ni blokirano: popravite ugotovitev ali jo sprejmite z razlogom, kot vsak drug problem.

## Koraki

1. Odprite {{ui:Model checks}} › {{ui:Audit}} v levem podoknu ali {{ui:Tools}} › {{ui:Audit the model…}} (vnesete: `AUDIT`).
2. Izberite {{ui:Project stage}}. Je ista faza kot v podrobnostih risbe.
3. Obkljukajte nabore pravil, ki naj se zaženejo.
4. Kliknite {{ui:Run the audit}}.
5. Preberite vrstico za vsak nabor pravil, nato odprite {{ui:Open the Problems list}}. Klik na ugotovitev izbere njen element.
6. {{ui:The check report}} prenese poročilo: vsako ugotovitev, kdo je kaj sprejel in zakaj, ter nabore pravil, ki so se zagnali.

## Nabori pravil

- **Neimenovani prostori**: prostor brez imena ali še vedno z imenom, ki mu ga je dal program („Room 3“).
- **Manjkajoče oznake**: vrata ali okno brez oznake, prostor brez številke, električna naprava brez oznake.
- **Elementi pod LOD etape**: vsaka stena, tla, strop, streha, vrata in okno, katerih LOD je pod tem, kar zahteva etapa. Element prebere oznako LOD svojega tipa; element, preverjen na terenu, je LOD 500. Elementi brez oznake so šteti v eni opombi, ker jih ni mogoče preveriti.
- **Kolizije med strokami**: elementi dveh strok (arhitektura, konstrukcija, strojništvo, vodovod, elektrika, po razredu IFC), ki se med seboj zadevajo. Streha, ki počiva na svojih stenah, se ne šteje.
- **Vmesniki LOD 350**: vsaka vrata in okno sedita v odprtini svoje stene, odprtina se prilega v steno, dve odprtini se ne prekrivata, odprtina, širša od meje, ima nadprago ali naglavnik (element nad njo ali opombo na vratih ali oknu), in cev, kanal ali kabelska polica, ki prečka steno ali ploščo, ima tam odprtino. Ugotovitve se štejejo po paru strok.
- **Prepoznani elementi, ki jih nihče ni preveril**: stene, vrata, okna in prostori, prebrani iz PDF-ja, skena ali risbe, ki so še neoverjeni. Glejte [Označite elemente kot preverjene ali preverjene na terenu](topic:verification).

## LOD, ki ga zahteva vsaka etapa

Odprite {{ui:The LOD each stage asks for}}, če želite pogledati ali spremeniti tabelo.

:::note
Tabela in širina nadpraga sta izhodiščni vrednosti CadCraft. Nista vzeti iz standarda: projekt nastavi LOD po etapah v svojem načrtu izvedbe BIM. Nastavite jih na svoje vrednosti. Pisarna lahko tabelo nastavi za vse v Nastavitve › Default Policies › Revizija; sprememba v razdelku Revizija se shrani na tem računalniku.
:::

## Dobro je vedeti

- Nadpraga lahko opišete namesto modeliranja: izberite vrata ali okno in izpolnite {{ui:Lintel or header note}} pod {{ui:Verification}} v **Lastnosti**.
- Cev, ki poteka skozi pravo odprtino, ne seka površine in ni prijavljena. Tista, ki je modelirana naravnost skozi steno, je.
- Preverjanje kolizij se po nekaj sekundah ustavi na zelo velikem modelu in to pove. Za poln pregled dveh izbranih nizov uporabite [Poiščite kolizije med elementi](topic:clash-check).
- Po spremembi modela zaženite revizijo znova. Sprejete ugotovitve ostanejo sprejete, dokler se njihove številke ne spremenijo.
- Revizija bere model. Ne nadomešča koordinacijskega pregleda odgovornih oseb.

## Naprej

- [Preverite model za pogoste težave](topic:model-checks)
- [Poiščite kolizije med elementi](topic:clash-check)
- [Označite elemente kot preverjene ali preverjene na terenu](topic:verification)
