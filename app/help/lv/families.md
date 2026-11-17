---
title: Ģimenes un to izmēri
summary: Durvis, logi un mēbeles ir ģimenēs. Katrs ģimenes izmērs ir viens tips IFC failā, tātad tipu saraksts BimCraft paliek īss, kamēr citas BIM programmas lasa vienkāršus tipus.
keywords: ģimene, ģimenes, tips, tipi, izmērs, izmēri, durvju tips, logu tips, mēbeles, galds, plaukts, skapis, jauns izmērs, dublēt, novietot ģimeni, ģimenes fails, ccfamily, ifc bibliotēka, projekta bibliotēka, grupa, redzamība, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Kas ir ģimene

Ģimene ir viena veida lieta vairākos izmēros: viena vērtņu durvis, kas ir 32, 36 un 42 collas platas, vai galds, kas ir garš un īss. BimCraft jūs redzat ģimeni vienu reizi, ar tās izmēriem zem tās, nevis garu tipu sarakstu.

IFC ģimeņu nav. Failā katrs izmērs ir parasts tips (durvju tips, logu tips, mēbeļu tips…), un ģimene ir grupa, kas uzskaita tās izmērus. Citas BIM programmas lasa tipus un grupu tādus, kādi tie ir; BimCraft no tiem atjauno ģimeni.

## Kur tās atrast

- Projekta pārlūka grupa **Ģimenes** uzskaita šī modeļa ģimenes, ar katras izmēru skaitu un to, cik ir novietotas. Zem tām ir **Sākuma ģimenes**: durvis un logi no Durvju un Logu rīkiem, kā arī galds, plauktu bloks un virtuves skapis.
- {{ui:Build}} › {{ui:Families…}} rāda to pašu sarakstu logā.
- Noklikšķiniet uz ģimenes, lai to atvērtu: tās izmērus, katra izmēra vērtības un to, cik elementi izmanto katru izmēru.

## Durvis un logi

Durvju un logu rīki uzskaita attiecīgā veida ģimenes un blakus tām **izmēru sarakstu**. Izvēlieties izmēru vai ierakstiet **W** un **H**: platums un augstums, kāds vēl nevienam izmēram nav, kļūst par jaunu ģimenes izmēru, kad novietojat durvis. Durvis ar vienādu izmēru dala vienu tipu.

Sadaļā {{ui:Properties}} izvēlētām durvīm vai logam rādīta to **Ģimene** un **Izmērs**. Izvēlieties citu izmēru no saraksta vai ierakstiet jaunu platumu vai augstumu. {{ui:Open the family}} atver ģimeni, kurai tās pieder.

Katra durvju vai logu rāmis seko savas sienas biezumam, kā tas bija arī pirms ģimenēm. Izmēra tips arī saglabā durvis, kas zīmētas 140 mm sienā, programmām, kas lasa tipus.

## Jauns izmērs no šīs ģimenes

1. Atveriet ģimeni.
2. Zem **Jauns izmērs no šīs ģimenes** ierakstiet tās vērtības (Platums, Augstums un ģimenes citus parametrus) un, ja vēlaties, nosaukumu. Bez nosaukuma tas tiek nosaukts pēc savām vērtībām.
3. Noklikšķiniet uz {{ui:Make the size}}.

Divi izmēri nevar būt ar vienādām vērtībām. **Pārdēvēt** maina izmēra nosaukumu; **Noņemt** izņem izmēru, ko neviens neizmanto; **Atlasīt** izvēlas tā izmēra elementus.

## Mēbeļu novietošana

1. {{ui:Build}} › {{ui:Place family}} vai {{ui:Place}} ģimenes logā.
2. Joslā izvēlieties ģimeni un tās izmēru.
3. Noklikšķiniet uz plāna, lai novietotu to līmenī. Nospiediet {{key:R}}, lai pirms klikšķināšanas pagrieztu to par 90°. {{key:Esc}} aptur.

Novietota gabala {{ui:Properties}} rāda tā izmēru, vietu un to, cik tas pagriezts; {{key:Delete}} to noņem. Katrs viena izmēra gabals dala šī izmēra formu, tāpēc, mainot ģimeni, mainās visi.

## Izmēri no tabulas

{{ui:Sizes from a table…}} ģimenes logā nolasa CSV failu (komats, semikols vai tabulēšanas zīme). Pirmā rinda nosauc kolonnas: parametra nosaukumu vai etiķeti un pēc izvēles `Name`. Garumi ir milimetros, ja nerakstāt vienību (`1.2 m`, `36 in`). Kolonnās Jā / Nē pieņemtas vērtības yes, no, true, false, 1 vai 0. Parametrs bez kolonnas saglabā savu noklusējumu. Katra rinda kļūst par izmēru vienā solī, ko var atsaukt; izmērs, kas jau ir, tiek izlaists. Viena rinda, ko nevar nolasīt vai ko ģimene nevar zīmēt, noraida visu tabulu un nosauc tās rindu. Ne vairāk kā 200 rindu un 1 MB. {{ui:Save the sizes as a table}} ieraksta to pašu tabulu atpakaļ.

## Iestatījumi katrā elementā

Parametrs, kas redaktorā atzīmēts kā **Katram elementam** (Jā / Nē, kas pievieno logu, uzrakstu vai materiālu), nav daļa no izmēra: divas viena izmēra durvis var atšķirties. Izvēlieties elementu, un **Rekvizīti** rāda šos parametrus; mainiet vienu, un šis elements tiek zīmēts atkal ar savu formu (mēbeles un ierīces saņem savu formu, durvis un logi tiek veidoti atkal savās sienās). Iestatiet visus atpakaļ uz noklusējumiem, un elements atgriežas pie sava izmēra formas.

## Detalizācijas līmenis

{{ui:Build}} › {{ui:Families…}} › **Detalizācijas līmenis** nosaka katrai modeļa ģimenei, kas tiek saglabāts cietajos ķermeņos un zīmēts plāna simbolos: **Smalks** saglabā visu, **Vidējs** un **Rupjš** izlaiž daļas, ko redaktors atzīmē kā smalkākas (mazāki faili, ātrāki skati). **Automātiski** saglabā visu, un lapas skats izvēlas pēc mēroga: 1:50 un lielāks — smalks, 1:100 — vidējs, 1:200 un mazāks — rupjš. Viens solis, ko var atsaukt.

## Ģimenes dublēšana

Nav obligāti sākt no nulles. {{ui:Duplicate}} kopē ģimeni ar tās parametriem, cietajiem ķermeņiem un izmēriem zem jauna nosaukuma. Mainiet kopiju redaktorā; oriģināls paliek nemainīts.

## Ģimeņu faili

- {{ui:Save the family file}} saglabā `.ccfamily.json`: ģimenes parametrus, cietos ķermeņus un izmērus. Atveriet to citā modelī ar {{ui:Open a family file…}} grupā Ģimenes.
- {{ui:Save as IFC}} saglabā ģimeni kā mazu IFC failu: tās izmēru tipus un grupu, ko deklarē IFC projekta bibliotēka. Citas programmas to atver kā tipu kopu; BimCraft to atver atkal kā ģimeni.

Ģimenes fails, kas atvērts šeit, tiek nolasīts kā dati un pārbaudīts, pirms kaut kas tiek ierakstīts. Ģimene, kuras atslēga modelī jau ir, tiek ievietota kā atsevišķa ģimene. Ģimene, kas satur citas (skatiet redaktora palīdzībā: {{ui:Families inside}}), ved tās līdzi: fails tās uzskaita, un modelis paturi tās, kas tam jau ir.

## Ģimenes Bibliotēkā

Atveriet {{ui:Families…}} un izvēlieties {{ui:From the Library…}}, lai redzētu ģimenes, kas ir kopīgotas Bibliotēkā. {{ui:Add to this project}} nolasa vienu no tām kā ģimenes failu: BimCraft pārbauda katru lauku, pirms ko veido, ģimene tiek ievietota kā sava ģimene, un tā atveras redaktorā. Pievienošana ir viens atsaukšanas solis. Lai kopīgotu savu, izmantojiet {{ui:Save all as a library}} un nosūtiet failu Bibliotēkai (Bibliotēkas darbinieki publicē ģimenes failu ar komandu, un katra ģimene ir savs vienums ar saviem izmēriem). Ja ar Bibliotēku nevar sazināties, sarakstā tas tiek pateikts un nekas nemainās.

## Citu programmu tipi

Citu programmu veidotie tipi arī rādās grupā Ģimenes, grupēti pēc minējuma: pēc tās elementu nosaukumu daļas pirms pirmā kola, citādi pēc tipu nosaukumiem, kas atšķiras tikai ar cipariem. Ģimeņu logā teikts, kāds minējums izmantots. Tie ir uzskaitīti, un jūs varat atlasīt to elementus, bet tos šeit nerediģē: tiem nav ģimenes receptes.

:::note
Sākuma durvis un logi tiek zīmēti tieši tāpat kā pirms ģimenēm. Faili, kas veidoti pirms ģimenēm, atveras bez izmaiņām: to durvis un logi tiek rādīti zem savas ģimenes ar izmantotajiem izmēriem un pāriet uz savu izmēru pirmo reizi, kad tos maināt.
:::

Skatiet arī [Ģimenes rediģēšana](topic:family-editor) un [Durvis un logi](topic:doors-and-windows).
