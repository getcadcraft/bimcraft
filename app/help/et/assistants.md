---
title: Lase tehisintellekti assistendil töötada sinu mudeliga
summary: Lülita assistendid sisse menüüs Sätted, et sinu arvutis olev assistent saaks leida elemente, lugeda nende omadusi, eraldada need vaates ja joonistada seinu, uksi, aknaid, põrandaid, tasandeid ja ruudustikke CadCraft Studio kaudu. Väljas, kuni sa need sisse lülitad.
keywords: tehisintellekt, assistent, mcp, skript, automatiseerimine, studio, leia elemendid, eralda, omadused, õigused, katkesta ühendus, tegevused, joonista seinu, lisa uksi, lisa aknaid, tasandid, ruudustikud, põrandad, võta tagasi, salvesta, käsurida, cli, peata, kasuta tehisintellekti assistentidega
from: 66d72742
---

## Mida sa õpid

Kuidas lasta tehisintellekti assistendil (mis tahes assistent, mis räägib MCP-d) vaadata sinu avatud IFC-mudelisse ja sinna joonistada, mida ta saab ja mida ei saa teha ning kuidas teda peatada.

## Mida assistent BimCraftis teha saab

| Ta palub | Mis juhtub | Vajab |
|---|---|---|
| Leida elemente | Ta saab elementide loendi klassi, korruse, nime või omaduse väärtuse järgi, nagu teeb **Otsi** | Lugemine |
| Lugeda omadusi | Ta saab ühe elemendi atribuudid, tüübi, omadusehulgad ja kogused, nagu need näitab **Omadused** | Lugemine |
| Kirjeldada mudelit, loetleda seinu | Ta saab tasandid, seinad, uksed, aknad, ruumid, põrandad, ruudustikud ja tulbad ning iga seina otsad, tüübi ja kõrguse | Lugemine |
| Eraldada, läbipaistvaks teha, peita või näidata | 3D-vaade muutub nii, nagu oleksid kasutanud menüüd {{ui:Näita}} | Muuda vaadet ja joonista |
| Joonistada seinu, uksi, aknaid, põrandaid, tasandeid või ruudustiku jooni | Mudel muutub nii, nagu oleksid kasutanud tööriistu {{ui:Joonista}}: seinad ühendatakse, ruumid, põrandad ja katused järgivad | Muuda vaadet ja joonista |
| Muuta nime või omaduse väärtust | Ühe elemendi Nimi, Kirjeldus, Objekti tüüp või Silt või ühe omaduse väärtus. Väärtus, mida ta jagab teiste elementidega, kopeeritakse talle esmalt; tüübi väärtus muutub ainult siis, kui assistent nii ütleb, sest iga selle tüübi element järgib seda | Muuda vaadet ja joonista |
| Teisaldada, kustutada, muuta seinu, uksi ja aknaid | Elemendid liiguvad või kustutatakse koos nendega, mis neid kannavad; tööriistadega {{ui:Joonista}} joonistatud seinad muutuvad otste või tüübi järgi, uksed ja aknad asukoha, suuruse või tüübi järgi ning ruumid ja ühendused järgivad | Muuda vaadet ja joonista |
| Seadistada, korraldada ja lugeda loendit | „Uste loend korruse järgi, koos tulepüsivusklassi ja lukustusvahenditega“: assistent nimetab loendi, selle tulbad (omadus või silt muutub tulbaks) ja rühmituse; BimCraft täidab loendi mudelist ja paigutab selle, võttes selle, mida assistent ei maininud, ettevõtte standardist. Seadistus lisandub sinu loendite nimekirja. Iga tagastatav rida nimetab oma elemendid, et assistent saaks need valida | Lugemine lugemiseks; seadistuse salvestamiseks Muuda vaadet ja joonista |
| Eksportida loendit | CSV, Excel või tabulaatoriga eraldatud tekst, mida kleepida Google Sheetsi (midagi ei saadeta Google'ile) | Eksport |
| Lugeda ja määrata ruumi viimistlusi | Viimistlustüübid, iga ruumi põranda, seina ja lae viimistlus, tsoonid; alad, plaatide arv ja aluskihi mahud tulevad seejärel viimistlusloenditest | Lugemine; määramiseks Muuda vaadet ja joonista |
| Valida elemente, võtta tagasi oma samme | Elemendid valitakse vaates; tema viimane samm võetakse tagasi | Muuda vaadet ja joonista |
| Salvestada | Uus IFC-fail koos kõigi muudatustega, nagu seda teeb {{ui:Salvesta IFC-na}} (originaali ei muudeta kunagi) | Salvesta |
| Eksportida USD | Avatud mudelid OpenUSD-na (.usda, .usdc või .usdz), nagu seda kirjutab tööriistaribal {{ui:USD}} | Eksport |
| Renderdada pilt, käivitada renderdusjärjekord | Pilt 3D-vaatest, nagu seda teeb dialoog {{ui:Renderda}} sinu renderdusseadetega, välja arvatud juhul, kui ta küsib teisi; või kvaliteetsed pildid, mis lisatakse dialoogi järjekorda ja renderdatakse ükshaaval (järjekord nõuab WebGPU-d). Mudelis midagi ei muutu ([Pildi renderdamine](topic:render)) | Eksport |

Iga muudatus, mille assistent teeb, on üks samm menüüs **Muudatused**, nimega „Assistent: …“ (näiteks „Assistent: lisa 4 seina“), nii et {{key:Mod+Z}} võtab tagasi kogu tema toimingu ning sa näed, kelle samm see oli. Aknas ei saa ta faile avada: sina avad mudeli, tema töötab avatud mudeliga.

## Lülita sisse

Assistendid pääsevad BimCraftini läbi CadCraft Studio oma arvutis; tavaline brauser sinna ligi ei pääse.

1. Ava {{ui:Sätted}} ja vali sakk **BimCraft**.
2. Jaotises **Assistendid** märgi **Luba tehisintellekti assistentidel ja skriptidel kasutada BimCraftit**.
3. **Lugemine** on sulle juba märgitud. Märgi **Muuda vaadet ja joonista**, kui assistent võib eraldada ja peita elemente ning joonistada, ja **Salvesta**, kui ta võib mudeli salvestada uue failina.
4. Ühenda assistent Studios (Studio näitab aadressi ja seaded, mis tuleb assistenti kleepida).

## Kui assistent on ühendatud

Paremas paneelis on märge, mis ütleb, milline assistent on ühendatud ja mida ta saab teha. Klõpsa {{ui:Katkesta ühendus}}, et tema seanss kohe lõpetada; ta peab uuesti ühenduma, et jätkata.

**Tegevused** jaotises **Assistendid** sätetes loetleb kõik kutsed, mille assistent tegi, uusimad ees, koos märkega, kas need õnnestusid.

:::tip
Küsi tavakeeles, näiteks „eralda välisseinad tasandil 1“, „millistel ustel pole tulepüsivusklassi?“ või „joonista 6 x 4 meetri suurune ruum tasandil 1, lõunaseinas uks“. Assistent leiab elemendid ja näitab neid sinu vaates või joonistab need.
:::

## Ilma aknata: skriptid ja käsurida

Samad joonistamistööriistad töötavad IFC-failidega kaustades, mille sina nimetad, ilma avatud aknata: CadCraft MCP-server ja käsurida saavad alustada uut hoonet või avada IFC-faili, kirjeldada seda, lisada seinu, uksi, aknaid, põrandaid, tasandeid ja ruudustikke, võtta tagasi ning salvestada uue `.ifc`-failina. Veel neli tööriista sobivad skriptidele: `ifc_batch` käivitab kuni 200 muutmissammu ühena (kõik või mitte midagi: üks tagasivõtmine võtab kogu paketi tagasi ning tagasilükatud samm võtab tagasi ülejäänud ja nimetab sammu); `ifc_describe` loetleb tasandid ja iga seina koos selle uste ja akendega; `ifc_render_png` kirjutab mudelist lamedalt varjutatud kontrollpildi (ilma materjalide, tekstuuride ja varjudeta) ilma aknata; `usd_export` kirjutab `.usda`, `.usdc` või `.usdz`. Käsureal `cadcraft bim script.json --from model.ifc -o out.ifc` käivitab sammude skripti, ja `--usd`, `--png` ning `--plan` kirjutavad samast käivitusest USD-faili, pildi või plaani. Sina otsustad, millistes kaustades see tohib töötada ja kas tal on lubatud midagi muuta või salvestada.

## Lülita välja

Eemalda märge valikult **Luba tehisintellekti assistentidel ja skriptidel kasutada BimCraftit**. Iga assistent katkestatakse kohe ja seade jääb järgmiseks korraks alles.

## Vaata ka

- [Retseptid tehisintellekti assistentidele](common:assistants-recipes): töötatud näited, igaühel tööriistad, mida see kasutab.
- [Otsi elemente klassi, nime või omaduse järgi](topic:find)
- [Peida, eralda ja tee elemendid läbipaistvaks](topic:hide-and-isolate)
- [BimCraftі sätted](topic:settings)
