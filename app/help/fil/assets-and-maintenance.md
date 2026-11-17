---
title: Itago ang asset data at maintenance record sa model
summary: Gamitin ang IFC model na naipasa para sa pagpapatakbo ng gusali: maker, model, serial number, warranty at service life ng kagamitan at fixture, at tala ng maintenance na ginawa, lahat ay nakasulat sa IFC.
keywords: handover, sertipiko ng pagkumpleto, sertipiko ng occupancy, as-built, handover package, assets, asset register, facility management, fm, operations, maintenance, service, warranty, serial number, barcode, maker, manufacturer, model, service life, handover, cobie, digital twin, overdue, due, work order
from: b84ac492
---

Ang tab na {{ui:Assets}} sa kanang panel ang nagiging talaan ng kagamitan ng gusali ang bukas na IFC model. Lahat ay isinusulat sa mismong IFC, sa sariling property set at task ng IFC, kaya mababasa rin ito ng susunod na program na magbubukas ng file. Walang ina-upload at walang server na kailangan: i-save ang IFC para itago ito.

## Ano ang nakalista

- Kagamitan at fixture: muwebles, sanitary fixture, light fixture, appliance, air terminal, valve, pump, fan, boiler, tank, outlet, switchboard, lift at iba pang ganitong elemento, at mga item ng library na may datos ng kagamitan.
- Anumang ibang elementong **i-track** mo: piliin ito sa model (isang pinto, pader, o pump na iginuhit bilang plain object) at i-click ang {{ui:Track picked}}.
- Anumang may asset data o maintenance task na na, isinulat dito o ng ibang program.

Ang overdue ang unang lalabas, sumunod ang nakatakda sa loob ng 30 araw. I-filter ayon sa pangalan, tag, maker, model o serial number, ayon sa level, o lagyan ng tsek ang {{ui:Only overdue or due within 30 days}}.

## Asset data

I-click ang asset sa listahan (o piliin ito sa model) para buksan ang datos nito: maker, model, model reference, serial number, barcode, ang araw na na-install ito, ang warranty number at ang simula at dulo nito, at ang service life nito sa taon. Isinusulat ng {{ui:Save the data}} ang mga ito sa isang hakbang ({{key:Mod+Z}} ang nag-u-undo nito). Iwanang walang laman ang kahon para alisin ang value na iyon.

## Mga dokumento

Sa ilalim ng datos, inililista ng {{ui:Documents}} ang mga manual, warranty, larawan, sertipiko at drawing na naka-link sa asset. Piliin ang uri, bigyan ito ng pamagat (o iwanang walang laman: gagamitin ang pangalan ng file), at i-type kung nasaan ito:

- isang **web address** (`https://…`): may Open link ito, na bumubukas sa bagong tab;
- o isang **pangalan ng file o path** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, isang network share): itago ang mga file sa tabi ng IFC, sa parehong folder o sa loob nito, para gumana pa rin ang mga pangalan kapag ibinigay mo ang folder. Ipinapakita ng BimCraft ang pangalan; buksan ang file mula sa folder.

Hindi kailanman ina-upload o kinokopya sa IFC ang mga file mismo: ang link lang ang isinusulat. Tinatanggihan ang web address na may password sa loob, at anumang link na hindi web address o file (gaya ng `javascript:`). Inaalis ng {{ui:Remove}} ang dokumento sa asset (isang hakbang; {{key:Mod+Z}} ang nag-u-undo).

Nakalista rin ang mga dokumentong inilagay ng ibang program sa elemento. Ang mga dokumento sa **type** ng elemento ay lumalabas sa bawat elemento ng uring iyon at sinasabi iyon; baguhin ang mga ito kung saan ginawa ang type.

Sa IFC, bawat dokumento ay isang IFC document reference na naka-tali sa elemento, kasama ang uri nito na nakatala sa tali, sa IFC4 man o IFC2X3.

## Ang talaan ng maintenance

Sa ilalim ng mga dokumento, {{ui:Record work done}}: ang araw na ginawa ito, ang gawa, sino ang gumawa, kailan ito susunod na dapat, at mga tala. Isang hakbang ang bawat entry; binabago ito ng {{ui:Edit}} at {{ui:Delete}} sa ibang pagkakataon. Ang susunod na petsa ng pinakabagong entry ang nagpapasya kung overdue na ang asset o malapit nang dumating ang takda.

## Paano ito itinatago sa IFC

- Maker at model sa `Pset_ManufacturerTypeInformation`, serial number, barcode at araw ng pag-install sa `Pset_ManufacturerOccurrence`, ang warranty sa `Pset_Warranty`, ang service life sa `Pset_ServiceLife`, sa mismong elemento. Kapag may maker o model na ang type ng elemento, lalabas iyon hanggang sa mag-type ka ng sarili mo.
- Ang bawat entry ng maintenance ay isang IFC **task** ng uring maintenance, naka-tali sa elemento, na may mga petsa nito (sa IFC4 ay bilang sariling oras din ng task) at isang set na `CadCraft_Maintenance` na may araw, sino ang gumawa, at ang susunod na takdang araw.
- Ang value na ibinabahagi ng ibang elemento ay kinokopya muna: ang pagbabago sa isang asset ay hindi kailanman nagbabago sa mga katabi nito.
- Sa mas lumang IFC2X3 file, isinusulat ang mga petsa bilang teksto (YYYY-MM-DD); kailangan ng bersyong iyon ng hiwalay na talaan ng petsa doon, na hindi isinusulat ng BimCraft.

## Mga reading ng sensor

Buksan ang {{ui:Sensor values}} at {{ui:Open readings (CSV)…}} para magdala ng mga reading na na-export mula sa building management system, data logger, o spreadsheet:

- Ang **unang column ay ang oras**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00`, o Unix seconds. Ang oras na walang zone ay binabasa sa sariling time zone ng iyong computer. Hindi binabasa ang mga petsang day-first gaya ng `23/10/2026` (malabo ang mga ito); mag-export ng ISO date.
- **Bawat ibang column ay isang sensor**, may header na tag, pangalan, o GlobalId ng asset nito. Ang header na walang tugmang asset, o may higit sa isa, ay nakalista at hindi isinasama. Ang kuwit, semicolon, o tab ang naghihiwalay sa mga column; kapag semicolon o tab ang gamit, binabasa rin ang decimal comma (`21,5`).
- Ang mga oras o value na hindi mabasa (isang salita, isang unit na na-type sa cell) ay binibilang at hindi isinasama, hindi hinuhulaan.

Ang pinakabagong reading ay lumalabas sa column na {{ui:Reading}} ng listahan at sa block na {{ui:Sensor}} ng asset, kasama ang **chart** ng bawat reading (sa telepono, naghihintay ang mga chart hanggang i-tap mo ang {{ui:Show the chart}}). Magtakda ng **low at high limit** at unit sa isang asset, at i-click ang {{ui:Save the limits}}: ang reading na labas sa mga ito ay magpapa-flag sa asset. Lagyan ng tsek ang {{ui:Show on the model}} para kulayan ang bawat asset ayon sa reading nito: asul kapag mas mababa sa low limit, berde kapag nasa loob ng limit, pula kapag higit sa high limit, at, para sa mga asset na walang limit, isang asul na scale mula sa pinakamababa hanggang sa pinakamataas na reading. Kasama ang reading nito bilang label (hanggang 60 label, mga naka-flag muna).

**Nananatili ang mga reading sa tab na ito ng browser**: hindi sila nise-save sa IFC at hindi ipinapadala kahit saan; buksan muli ang CSV sa susunod. Ang **mga limit ay nise-save sa IFC** (isang set na `CadCraft_Sensor` sa elemento: Low, High, Unit), kaya makikita ng susunod na magbubukas ng file ang parehong flag.

## Mga live reading

{{ui:Live feed}} ay bumabasa ng mga value habang nangyayari ang mga ito, **direkta mula sa browser na ito papunta sa sarili mong sistema**. Walang dumadaan sa server namin at walang naiimbak kahit saan maliban sa tab ng browser mo. Walang kumokonekta kapag nagbukas ng file: ang {{ui:Connect}} lang ang gumagawa nito.

- **MQTT over WebSockets**: ang address ng WebSocket listener ng broker mo (`wss://broker.example.com:8884/mqtt`), at isa o higit pang topic na may `{tag}` kung saan ilalagay ang tag ng asset, halimbawa `site/{tag}/temperature` (nag-su-subscribe ang BimCraft sa `site/+/temperature` at binabasa ang tag mula sa topic ng bawat mensahe). Ang topic na walang `{tag}` ay nagpapangalan mismo sa sensor. Ang mensahe ay alinman sa simpleng numero (`21.5`) o JSON gaya ng `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (itakda ang {{ui:Value field in JSON}} kung iba ang tawag sa iyo).
- **Magtanong sa isang address (HTTP)**: isang web address na sinasagot ng building management system mo o ng maliit mong script, tinatanong bawat ilang segundo (5 sa pinakakaunti). Maaari itong sumagot ng JSON na may susi ayon sa tag (`{"AHU-1": 21.5}`), JSON list (`[{"tag": "AHU-1", "value": 21.5}]`), o CSV ng mga reading gaya ng nasa itaas. Kung hindi ito sumasagot, naghihintay ang BimCraft ng dalawang beses na mas matagal bago magtanong muli, hanggang limang minuto.

Bawat reading ay napupunta sa asset na pinangalanan ng tag, pangalan, o GlobalId nito, eksaktong gaya ng column ng CSV; ang mga pangalang walang tugmang asset ay nakalista. Ang mga reading ay sumasama sa {{ui:Sensor values}}: ang listahan, ang mga chart, ang mga limit, at ang mga kulay sa model ay gumagana nang pareho.

**Ang password o token mo** ay tina-type para sa isang koneksyon: ibinibigay ito sa koneksyon at nililinis ang kahon; hindi ito kailanman sine-save sa browser na ito o sa IFC. Ang token ay ipinapadala bilang standard na `Authorization: Bearer` header, at walang cookie na ipinapadala.

{{ui:Keep these settings in the IFC}} ay nagsusulat ng address, mga topic, value field, at kung gaano kadalas magtanong sa model (isang set na `CadCraft_Feed` sa project; walang field para sa password), kaya ang susunod na magbubukas ng file ay mag-t-type lang ng sarili nilang login at mag-click ng {{ui:Connect}}. Huwag ilagay ang password o key sa mismong address: tinatanggihan ang address na may user name at password sa loob.

:::note
**Ang kailangan ng iyong broker o address.** Maaari lang makipag-usap ang isang browser page sa server na pumapayag:
- Secure ang page (https), kaya kumokonekta lang ang browser sa mga `wss://` at `https://` na address, maliban sa sarili mong computer (`localhost`), kung saan gumagana ang `ws://` at `http://` para sa pagsubok.
- Dapat payagan ng HTTP address ang mga request mula sa page na ito (CORS: ang header na `Access-Control-Allow-Origin`, at `Authorization` sa mga pinapayagang header kung gumagamit ka ng token).
- Karamihan sa broker (Mosquitto, EMQX, HiveMQ at iba pa) ay may WebSocket listener; madalas itong naka-off hanggang i-on. Nagsasalita ang BimCraft ng MQTT 3.1.1.
:::

Walang **alerto** kapag sarado ang BimCraft: nagpa-flag ang mga limit ng asset habang bukas ang model at may konektadong feed. Ang pagbabantay sa gusali sa buong oras ay nangangailangan ng server, na hindi pinapatakbo ng BimCraft.

## COBie spreadsheet

Ang **COBie** ay ang handover spreadsheet na hinihingi ng maraming may-ari at facility team (inilathala ng National BIM Standard sa US; BS 1192-4 sa UK). Buksan ang {{ui:COBie spreadsheet}} sa tab:

- {{ui:Save as COBie (.xlsx)}} ay isinusulat ang mga sheet ng COBie 2.4 (Contact, Facility, Floor, Space, Type, Component, System, Job, Document at Attribute) mula sa model at sa asset data: ang gusali, mga level at silid nito (mga lawak mula sa quantities ng model), bawat asset bilang component na may serial number, araw ng pag-install, simula ng warranty, tag at barcode, ang type nito na may maker, model, service life at haba ng warranty, ang mga system na kinabibilangan nito, ang talaan ng maintenance bilang mga job, at ang mga naka-link na dokumento. Bawat component ay may IFC GlobalId ng elemento. I-type ang email address mo para sa column na "ginawa ni" ng COBie, o iwanang walang laman (magsasabing n/a). Ang mga value na walang model ay magsasabing **n/a**; ang mga category column ay naglalaman ng IFC class, hindi OmniClass code.
- {{ui:Read a COBie spreadsheet…}} ay binabasa ito pabalik, mula sa BimCraft o ibang program, at **inililista muna ang bawat pagbabago**: aling asset, aling value, mula ano patungo ano, at mga bagong dokumento. Isinusulat ng {{ui:Apply}} ang lahat sa isang hakbang ({{key:Mod+Z}} ang nag-u-undo). Itinutugma ang mga row ayon sa GlobalId, saka ayon sa pangalan ng component. Ang mga row na walang tugma sa model ay nakalista, hindi idinadagdag.

Itinuturing na hindi mapagkakatiwalaan ang spreadsheet: hindi kailanman binabasa o pinapatakbo ang mga formula (ang huling value lang na na-save sa cell), ang value na magpapatapos ng warranty bago ito magsimula at ang link ng dokumentong hindi web address o pangalan ng file ay hindi isinasama at binibilang, at tinatanggihan ang napakalalaking workbook. Ang mga job ng COBie ay planadong gawain ng type, kaya isinusulat ang mga ito pero hindi binabasa pabalik. Sa spreadsheet na isinusulat ng BimCraft, minamarkahang teksto ang teksto na maaaring mapagkamalang formula ng spreadsheet (nagsisimula sa `=`, `+`, `-` o `@`).

Sinuri ang workbook sa aming mga test laban sa isang independent na spreadsheet reader; hindi ito dumaan sa COBie validator. Kung may pinapatakbong validator ang tatanggap na team, sabihin sa amin ang sinasabi nito.

## Mga handover document

Ang mga papel na napupunta sa may-ari kasama ng tapos na gusali ay bahagi ng project, hindi ng iisang asset. Sa tab na {{ui:Assets}}, buksan ang {{ui:Handover documents}}:

1. {{ui:Add a document}}, piliin ang uri nito (sertipiko ng pagkumpleto, sertipiko ng occupancy, warranty, manual, as-built drawings, iba pa), at i-type ang pamagat, petsa ng pag-isyu, sino ang nag-isyu, at ang reference number nito.
2. Sabihin kung saan ito: isang web address, isang pangalan ng file na itinago sa tabi ng IFC, o {{ui:Attach a file}}.
3. {{ui:Add to the list}}. Binabago ng {{ui:Edit}} at {{ui:Remove}} ang listahan; bawat isa ay isang hakbang na maaari mong i-undo.

{{ui:Build the handover package}} ay nagda-download ng isang zip: cover page na naglilista ng bawat dokumento, parehong listahan na nasa spreadsheet, ang COBie workbook (nasa Document sheet nito ang mga dokumento, bilang row tungkol sa Facility), ang model, at bawat naka-attach na file. Ang sertipiko ng pagkumpleto o occupancy na wala pa sa listahan ay babanggitin sa cover; itinatayo pa rin ang package.

Ang model sa package ay ang **as-built model**: sinasabi nitong aling mga elemento ang sinukat sa site. Kasama nito, sa folder na `as-built`: ang pahayag, listahan ng bawat elemento kasama ang verification state nito, ang drawing set gaya ng kasalukuyan nito bilang isang PDF (ang as-built drawings), at ang drawing changelog kapag may inilabas na set ang model. Tingnan ang [Markahan ang mga elemento bilang nasuri o na-verify sa field](topic:verification).

- Sa IFC file, bawat dokumento ay isang IfcDocumentInformation na naka-tali sa project (IfcRelAssociatesDocument), kasama ang pamagat, reference, petsa, nag-isyu, at lugar nito, para mailista ito ng ibang program.
- Ang naka-attach na file ay naitatala ayon sa pangalan, laki, at SHA-256. Para itago ang mismong file kasama ng project, gamitin ang {{ui:Save the project as a bundle}} (ang .ccbundle ay naglalaman ng model at mga naka-attach na file; kapag binuksan ito, ibinabalik ang mga iyon, bawat isa ay sinusuri laban sa tala nito). Ang ordinaryong save ay nagtatanong kung alin ang gusto mo.
- Ang ordinaryong .ifc ay nagtatago ng tala, hindi ng file: pagkatapos itong buksan, gamitin ang {{ui:Attach the file again}}. Makikilala ang parehong file; papalitan ng iba ang tala.

## CSV

{{ui:CSV}} ay nagse-save ng bawat asset kasama ang datos nito, bawat entry ng maintenance, at bawat dokumento, isang row bawat isa, para sa spreadsheet o ibang maintenance program.

:::note
Hindi pa nagagawa: isang hosted service na nagtatago ng mga reading at nagpapadala ng alerto habang sarado ang BimCraft, at ang pagbabasa pabalik ng mga job ng COBie. Tingnan ang [Hindi pa nagagawa](topic:not-built-yet).
:::
