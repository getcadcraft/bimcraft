---
title: Ogrodje sten, tal in streh
summary: Ustvarite stojke, vence, preklade, lege ali rogove iz modela in jih ohranite z njim; naredijo se znova, ko se zidovi, odprtine, tla ali streha spremenijo, seznam Les pa je rezalni seznam.
keywords: TJI, I-nosilec, tabela razponov leg, naložite tabelo, ogrodje, okvir, stojka, stojke, venec, zgornji venec, preklada, glavna stojka, pomožna stojka, obrobna lega, kratka stojka, grobi prag, vogal, kalifornijski vogal, T-spoj, lega, obodna lega, obrobna lega, lata, streha, rog, čopni rog, dolinski rog, pomožni rog, slemenska letev, stropna lega, zatezna vez, paličje, les, rezalni seznam, board feet, 2x4, 2x6, razmik, od središča do središča
from: 76d0ffb5
---

## Kaj boste naredili

Ogrodite stavbo iz tega, kar ste narisali. BimCraft razporedi stojke, venec in preklade v stenah, lege v tleh ter rogove (ali paličje) v strehi, jih dimenzionira po privzetih tabelah z oznako, jih ohrani z modelom in naredi znova, kadar se spremeni to, kar ogrodijo. Seznam **Les** je rezalni seznam.

## Ogrodite jo

1. Na nivoju odprite {{ui:Zgradba}} in izberite {{ui:Ogrodje}}.
2. Izberite **razmik** (16 in ali 24 in od središča do središča; 400 ali 600 mm), **vogale** (tri stojke ali kalifornijski), **Rogovi** ali **Paličje** za strehe in ali stene dobijo vrsto **podložnih letev** na sredini višine. Za tla izberite **Žagan les** ali **TJI (predhodno)** ter nastavite smer leg na samodejno, tloris X ali tloris Y.
3. Kliknite **Ogrodi vse stene** ali kliknite eno steno, tla ali streho (na nivoju, na katerem stoji streha), da ogrodite samo to.

Izklopite **Prikaži ogrodje**, da skrijete vse dele ogrodja, kot sloj; **Prosojno** skrije stene, tla in strehe, ki so ogrojene, da si lahko ogledate samo ogrodje.

## Kaj dobite

- **Stene**: spodnji venec (prirezan pri vratih), dvojni zgornji venec, stojke po razporeditvi od začetka stene, glavne in pomožne stojke ter preklade pri vsakih vratih in oknih, kratke stojke nad prekladami in pod okni, grobi okenski prag pod okni, vogali tam, kjer se stene stikajo (stena, ki gre skozi, prevzame vogalne stojke), dve podporni stojki, kjer se vanjo v obliki črke T priključuje druga stena, ter podložne letve med stojkami.
- **Tla**: lege čez krajšo stran tal privzeto ali vzdolž izbrane osi tlorisa; obodne lege okoli roba in dvojne obrobne lege ter preklade okoli stopnišča, pri čemer so lege, ki gredo skozi, prirezane na kratko (repne lege). Način TJI izbere najmanjšo navedeno serijo in višino, ki pri izbranem razmiku doseže izmerjeni prosti raspon.
- **Strehe**: navadni rogovi, pravokotni na vsak napušč, pomožni rogovi tam, kjer čopi in doline jih režejo, čopni in dolinski rogovi, slemenske letve, stropne lege na vencih in zatezne vezi – ali preprosto paličje v razmiku, vsak kos posebej.

## Spremenite jo

Izberite kateri koli del ogrodja v 3D-pogledu ali drevesu modela. **Lastnosti** prikažejo njegovo ogrodje: spremenite razmik, vrsto in smer leg tal, vogale, podložne letve ali ogrodje strehe. Premikanje zidov, vrat in oken ali spreminjanje tal ali strehe samodejno naredi ogrodje znova.

Da ohranite kos, ki ste ga postavili namenoma, ko se ogrodje naredi znova, ga izberite in izberite **Ohrani ta kos, ko se ogrodje ponovno naredi**. Ohranjeni kos ostane tam, kjer je; ko se ogrodje okoli njega spremeni, je označen, da ga lahko preverite.

## Tla iz tabele TJI, ki jo naložite

BimCraft ne prinaša tabel razponov proizvajalcev nosilcev (te so last proizvajalca in se spreminjajo z vsako izdajo). Izberite ogrodje tal, nastavite **Lege tal** na **TJI (predhodno)** in izberite **Naloži tabelo…** v **Lastnostih**: datoteko v formatu `cadcraft-tji-table`, JSON ali CSV, ki ste jo pripravili iz trenutnih tabel razponov proizvajalca. Navaja proizvajalca, izdelek, izdajo in vir številk, za vsak obtežni primer (koristna obtežba, stalna obtežba, mejo pomika, dolžino ležišča) pa največji prosti raspon vsake serije in višine pri vsakem razmiku.

- BimCraft vzame **prosti raspon** tal, izbere najmanjšo višino in znotraj nje serijo, katere navedeni raspon pri izbranem razmiku in obtežnem primeru zadostuje, ter z njo ogrodi tla. Če je raspon ali razmik zunaj tabele, to pove in nič ne spremeni.
- Obtežbe, meja pomika, dolžina ležišča, tabela in stavek „Predhodne smernice za razporeditev; končna izbira zahteva tabele proizvajalca in projektne obtežbe“ so natisnjeni na seznamu Les, zapisani v model z ogrodjem in navedeni v podoknu **Težave** kot opomba. Tabela, označena kot primer, to pove v opozorilu.
- Z vklopljenim dodatkom **Gradbeni predpisi** njegovo pravilo za lege tal prav tako prebere naloženo tabelo; brez tabele se TJI lege iz tega preverjanja izpustijo, kot prej.
- Tabela ostane v tem brskalniku, dokler je ne izbrišete ali naložite druge. Datoteka: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: in, ft, psf; ali `metric`: mm, m, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) in `rows` (`series`, `depth`, `spans`: za vsak `id` primera razmik in največji prosti raspon, na primer `"16": "15-6"`). V CSV so ista dejstva zapisana v vrsticah `# key = value`, nato `series,depth,case,spacing,span`.
- Brez naložene tabele je razporeditev TJI zavrnjena in nič se ne spremeni: **Naložite tabelo TJI: tabele proizvajalca so njihove in niso vgrajene.** Model, ogrodjen s starejšo vgrajeno tabelo TJI (pred to spremembo), obdrži vse svoje lege; Lastnosti in Težave navajajo, da je tabela potrebna, tla pa je mogoče ponovno ogrodit, ko naložite eno. Lege iz trdnega žaganega lesa delujejo kot prej.

To je smernica za razporeditev. Končna izbira leg zahteva tabele proizvajalca, projektne obtežbe in inženirja.

## Rezalni seznam

V podoknu Razpredelnice izberite **Les**: vsak kos ogrodja, zbran po velikosti in po standardni dolžini, ki bi jo kupili (cele dolžine po 2' od 8' naprej; koraki po 600 mm od 2400 mm pri metričnih enotah), s številom kosov in **board feet**. **CSV** prenese seznam.

:::warning
Velikosti prekladov, leg, rogov in stropnih leg prihajajo iz označenih privzetih tabel za tipično enonadstropno ali dvonadstropno hišo, niso inženirski izračun. **Lastnosti** povedo, kdaj je raspon ali odprtina zunaj svoje tabele. Projektant ali inženir preveri raspone, obtežbe in spoje.

Razporeditve TJI uporabljajo samo tabelo, ki jo naložite in ste jo pripravili iz trenutnih tabel razponov proizvajalca; BimCraft jih ne prinaša. Predlog ne preverja ležišča, točkovnih obtežb, konzol, lukenj, prekladov stopnišč ali spojev, velikost I-profila modela pa je shematska.
:::

## Kaj se shrani

Vsak ogrojen zid, tla ali streha je sestav elementov IFC („Ogrodje“), sestavljen iz palic IFC (stojke, venci, rogovi, zatezne vezi, podložne letve, paličje) in nosilcev IFC (preklade, lege, obodne lege, slemenske letve), vsak z velikostjo, dolžino in board feet.
