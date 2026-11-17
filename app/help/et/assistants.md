---
title: Lase AI-assistendil töötada su mudeliga
summary: Lülita sätetes sisse assistendid, et sinu arvutis olev assistent saaks leida elemente, lugeda nende omadusi, need vaates eraldada ning joonistada seinu, uksi, aknaid, põrandaid, tasandeid ja ruudustikke CadCraft Studio kaudu. Väljas, kuni sa selle sisse lülitad.
keywords: ai, assistent, mcp, skript, automatiseerimine, studio, leia elemendid, eralda, omadused, õigused, katkesta ühendus, tegevus, joonista seinad, lisa uksed, lisa aknad, tasandid, ruudustikud, põrandad, tagasi võtta, salvesta, käsurida, cli, ilma aknata, kasuta AI-assistentidega
from: c5ee595b
---

## Mida õpid

Kuidas lasta AI-assistendil (igal assistendil, mis räägib MCP-d) vaadata avatud IFC-mudelit ja joonistada seda, mida ta saab ja mida ei saa teha, ning kuidas teda peatada.

## Mida assistent BimCraftis teha saab

| Ta palub | Mis juhtub | Vajab |
|---|---|---|
| Leia elemendid | Ta saab elementide loendi klassi, korruse, nime või omaduse väärtuse järgi, nagu teeb **Leia** | Lugemine |
| Loe omadusi | Ta saab ühe elemendi atribuudid, tüübi, omaduste hulgad ja kogused, nagu need on **Omadustes** | Lugemine |
| Kirjelda mudelit, loetle seinad | Ta saab tasandid, seinad, uksed, aknad, ruumid, põrandad, ruudustikud ja tugisambad ning iga seina otsad, tüübi ja kõrguse | Lugemine |
| Eralda, muuda läbipaistvaks, peida või näita | 3D-vaade muutub nii, nagu oleksid kasutanud menüüd {{ui:Näita}} | Vaate muutmine ja joonistamine |
| Joonista seinad, uksed, aknad, põrandad, tasandid või ruudustiku jooned | Mudel muutub nii, nagu oleksid kasutanud tööriistu {{ui:Joonista}}: seinad liituvad, ruumid, põrandad ja katused järgivad | Vaate muutmine ja joonistamine |
| Muuda nime või omaduse väärtust | Ühe elemendi Name, Description, Object type või Tag, või ühe omaduse väärtus. Väärtus, mida ta jagab teiste elementidega, kopeeritakse tema jaoks esmalt; tüübi väärtus muutub ainult siis, kui assistent nii ütleb, sest iga selle tüübi element järgib seda | Vaate muutmine ja joonistamine |
| Teisalda, kustuta, muuda seinu, uksi ja aknaid | Elemendid liiguvad või kustutatakse koos sellega, mis neid hoiab; {{ui:Joonista}} tööriistadega joonistatud seinad muutuvad otste või tüübi järgi, uksed ja aknad koha, suuruse või tüübi järgi, ruumid ja liitekohad järgivad | Vaate muutmine ja joonistamine |
| Seadista, korralda ja loe loendit | „Uste loend korruse kaupa, tuleohutuse klassi ja okuvarustusega“: assistent nimetab loendi, selle veerud (omadus või silt muutub veeruks) ja grupeerimise; BimCraft täidab selle mudelist ja paigutab, võttes selle, mida assistent ei öelnud, büroo standardist. Seadistus lisandub su loendite nimekirja. Iga rida, mis tagasi tuleb, nimetab oma elemendid, nii et assistent saab need valida | Lugemine lugemiseks; vaate muutmine ja joonistamine seadistuse salvestamiseks |
| Ekspordi loend | CSV, Excel või tabulaatoriga eraldatud tekst, mida kleepida Google Sheetsi (midagi ei saadeta Google'ile) | Eksport |
| Loe ja määra ruumi viimistlused | Viimistlustüübid, iga ruumi põranda-, seina- ja laeviimistlus, tsoonid; pindalad, plaatide arv ja alusmahud tulevad siis viimistluse loenditest | Lugemine; määramiseks vaate muutmine ja joonistamine |
| Vali elemendid, võta tagasi oma viimane samm | Elemendid valitakse vaates; tema viimane samm võetakse tagasi | Vaate muutmine ja joonistamine |
| Salvesta | Uus IFC-fail koos kõigi muudatustega, nagu teeb {{ui:Salvesta IFC-na}} (originaali ei muudeta kunagi) | Salvestamine |
| Ekspordi USD | Avatud mudelid OpenUSD-na (.usda, .usdc või .usdz), nagu kirjutab tööriistaribal {{ui:USD}} | Eksport |
| Renderda pilt, käivita renderdusjärjekord | Pilt 3D-vaatest, nagu teeb dialoog {{ui:Renderda}} sinu renderdusseadetega, kui ta ei nõua teisi, või kvaliteetsed pildid, mis lisatakse dialoogi järjekorda ja renderdatakse üksteise järel (järjekord vajab WebGPU-d). Mudelis midagi ei muutu ([Renderda pilt](topic:render)) | Eksport |

Iga muudatus, mille assistent teeb, on üks samm jaotises **Muudatused**, nimega „Assistent: …“ (nt „Assistent: lisa 4 seina“), nii et {{key:Mod+Z}} võtab tagasi kogu tema tegevuse ja sa näed, kelle samm see oli. Aknas ei saa ta faile avada: sina avad mudeli ja ta töötab avatud mudeliga.

## Lülita sisse

Assistendid pääsevad BimCraftini läbi CadCraft Studio sinu arvutis; tavaline brauser sellele teed ei oma.

1. Ava {{ui:Sätted}} ja vali vahekaart **BimCraft**.
2. Jaotises **Assistendid** märgi **Lase AI-assistentidel ja skriptidel BimCraftit kasutada**.
3. **Lugemine** on sinu jaoks juba märgitud. Märgi ka **Vaate muutmine ja joonistamine**, kui assistent tohib eraldada ja peita elemente ning joonistada, ja **Salvesta**, kui ta tohib mudeli salvestada uue failina.
4. Ühenda assistent Studios (Studio näitab aadressi ja seaded, mis sinna kleepida).

## Kui assistent on ühendatud

Märkus parema paneeli ülaosas ütleb, milline assistent on ühendatud ja mida ta saab teha. Klõpsa {{ui:Katkesta ühendus}}, et lõpetada tema seanss kohe; ta peab uuesti ühenduma, et jätkata.

**Tegevus** jaotises **Assistendid** sätetes loetleb iga kõne, mille assistent tegi, uusimast vanimani, koos sellega, kas see õnnestus.

:::tip
Küsi tavakeeles, nt „eralda välisseinad korrusel 1“, „millistel ustel pole tuletõkke klassi?“ või „joonista korrusele 1 6 x 4 meetri ruum uksega lõunaseinas“. Assistent leiab elemendid ja näitab neid su vaates või joonistab need.
:::

## Ilma aknata: skriptid ja käsurida

Samad joonistamistööriistad töötavad IFC-failidega kaustades, mille sina nimetad, ilma avatud aknata: CadCraft'i MCP-server ja käsurida saavad alustada uut hoonet või avada IFC-faili, seda kirjeldada, lisada seinu, uksi, aknaid, põrandaid, tasandeid ja ruudustikke, võtta tagasi ja salvestada uue `.ifc`-failina. Sina otsustad, millistes kaustades ta tohib töötada ja kas ta tohib midagi muuta või salvestada.

## Lülita välja

Eemalda linnuke **Lase AI-assistentidel ja skriptidel BimCraftit kasutada**. Iga assistent katkestatakse kohe ja seadistus jääb järgmiseks korraks alles.

## Vaata ka

- [Retseptid AI-assistentidele](common:assistants-recipes): töönäited, igaüks koos kutsutavate tööriistadega.
- [Leia elemendid klassi, nime või omaduse järgi](topic:find)
- [Peida, eralda ja muuda elemendid läbipaistvaks](topic:hide-and-isolate)
- [BimCraft'i sätted](topic:settings)
