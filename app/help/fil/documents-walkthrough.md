---
title: Mga dokumento at revision (ang vault)
summary: Hakbang-hakbang na walkthrough sa isang totoong trabaho: ilagay sa kontrol ang project folder ng mga IFC model, mag-check out ng model, baguhin ito, mag-check in na may note, ipadala para sa review, i-approve at i-release, tingnan ang history at kung ano ang gumagamit nito, kung ano ang nakikita ng ikalawang tao habang naka-lock ang file, at kung paano ito gumagana sa cloud folder.
keywords: vault, dokumento, documents, walkthrough, tutorial, check out, check in, revision, release, approve, lock, history, saan ginagamit, ifc, model, cloud folder, project folder, dalawang tao, shared folder
from: 0a753f25
---

## Ano ang gagawin mo

Ikaw si Ana, nagtatrabaho sa Riverside Clinic kasama ang kasamahan mong si Ben. Nasa iisang folder na naaabot ninyong dalawa ang mga IFC model ng project (isang shared drive, synced folder, o cloud folder). Sa pagtatapos, ang isang file ay umabot mula sa unang kopya nito hanggang sa na-release na revision **A**, binago ulit bilang **B.1**, nakita mo kung sino ang gumawa ng ano, at nakita mo kung ano ang makikita ni Ben kapag hawak mo ang file.

Lahat ay nakatago sa isang nakatagong folder na `.ccvault` sa tabi ng mga file mo: walang server, walang ina-upload (ang cloud folder ang eksepsyon, tingnan ang huling hakbang). Para sa bawat button at panuntunan sa iisang lugar, tingnan ang topic na *Mga dokumento: check out, mga revision at release* kung saan ito mayroon ang app mo.

## 1. Itakda ang project folder

1. Piliin ang {{ui:Documents}} sa tabi ng {{ui:Open a folder}} sa start screen, o ang {{ui:Mga dokumento…}} sa menu na **File**.
2. Piliin ang {{ui:Choose the project folder}} at piliin ang folder na naglalaman ng mga IFC model ng project. (Gumagana ang project folder sa Studio at sa mga browser na kayang magbukas ng folder, gaya ng Chrome at Edge. Sa ibang browser, sinasabi ito ng panel.)
3. Piliin ang {{ui:Change}} sa tabi ng **You:** at i-type ang pangalan mo, `Ana` (kung magtanong, pati ang pangalan ng computer na ito). Ngayon ay sinasabi ng panel na *You: Ana on* at ang computer mo. Kasama ng pangalan mo ang lahat ng ginagawa mo.
4. Piliin ang {{ui:Start a vault in this folder}} at i-type ang pangalan ng project, `Riverside clinic`. Sinasabi ng panel na *Vault started for Riverside clinic.*

## 2. Ilagay ang file sa kontrol

1. Buksan ang **Files not in the vault** at piliin ang {{ui:Add}} sa tabi ng `models/House.ifc`.
2. Lumalabas ito sa ilalim ng **Files in the vault** sa revision **A.1**, na state na **Ginagawa pa**. Ang A.1 ang unang kopya nito; nagtatago ang vault ng kopya ng bawat revision.

## 3. Mag-check out, magbago, mag-check in

1. Piliin ang {{ui:Open}} sa tabi ng `models/House.ifc`. Bubukas ang model sa BimCraft at magsasara ang panel para makita mo ito. Buksan ulit ang panel mula sa {{ui:Documents}}.
2. Buksan ulit ang panel at piliin ang {{ui:Check out}}. Ang row ay magsasabing **Naka-check out sa iyo**. May lock file na nagawa sa `.ccvault/locks`; walang ibang makakapag-check out ng file na ito hanggang i-check in mo ito.
3. Baguhin ang model: ilipat ang pader, magdagdag ng pinto. Tinatanggihan ang Save maliban kung naka-check out ang model sa iyo, at sinasabi kung bakit; palaging gumagana ang I-save bilang para sa kopya ng sarili mo.
4. Buksan ang panel, piliin ang {{ui:Check in}} at i-type kung ano ang nagbago (`Inilipat ang pinto`). Sinasabi ng panel na *checked in as A.2*. Ang file sa project folder ay ang model na bukas mo na, at nawala na ang lock. Ang pag-check in nang walang pagbabago ay nananatili sa revision.

Kung nagbago ang isip mo, ibinabalik ng {{ui:Undo check-out}} ang file nang walang bagong revision.

## 4. Review at release

1. Piliin ang {{ui:Send for review}}. Nagiging **Para sa review** ang state at read-only ang file.
2. Bago mag-approve, piliin ang {{ui:Project settings}} at ilista kung sino ang maaaring mag-approve (isang pangalan kada linya), halimbawa `Ben` at `Carla`, at lagyan ng tsek ang panuntunang dapat ibang tao sa may-akda ang approver. Piliin ang {{ui:Save settings}}. Ngayon, ang vault mismo ang tumatanggi sa iba.
3. Si Ben (o si Carla) ay pipili ng {{ui:Approve}} at i-type ang pangalan ng approver. Nagiging **Na-release** ang state at ang revision ay nagiging **A**, kasama ang *approved by* at ang pangalan. Read-only ang na-release na file. Ibabalik ito ng {{ui:Send back}} sa **Ginagawa pa**, kasama ang dahilan.

Ang pangalan ng approver ay ang pangalang na-type sa panel; ito ay talaan ng kung sino ang nag-sign off, hindi patunay ng pagkakakilanlan.

## 5. Bagong revision

1. Sa na-release na file, piliin ang {{ui:New revision}}. Hawak mo ito para sa susunod na letra.
2. Baguhin ito, saka {{ui:Check in}}. Ang revision ay **B.1**, Ginagawa pa. I-release ito sa parehong paraan at magiging **B** ito. Ang {{ui:Undo check-out}} bago ang unang check-in ay mag-iiwan nito sa **A**.

Ang mga letra ng revision ay A, B … Z, AA, AB. Kung nilalaktawan ng standard ninyo ang ilang letra, lalaktawan ng project setting na *Use the ASME Y14.35 sequence* ang I, O, Q, S, X at Z para sa mga susunod na revision.

## 6. Tingnan kung ano ang nangyari

Piliin ang pangalan ng file para buksan ang detalye nito:

- **{{ui:History}}**: bawat event, pinakabago muna, kasama kung sino, aling computer, at kailan: *Checked in A.2* ni Ana, *Released* ni Ben, at iba pa.
- **{{ui:Revisions}}**: ang revision table: bawat revision na naka-save, kasama ang petsa, sino ang nag-check in, ang note, at sino ang nag-approve. Kinokopya ng vault ang bawat isa sa `.ccvault/revs`.
- **{{ui:Uses}}**: ang mga dokumentong tinuturo ng IFC model.
- **{{ui:Used by}}**: Inililista ng Used by ang bawat model sa vault na tumuturo sa file na ito.

## Mga model na tumuturo sa ibang dokumento

Ang IFC model na tumuturo sa ibang dokumento sa folder (drawings, schedules) ay nagpapakita ng mga ito sa ilalim ng **Uses**, at bawat isa sa mga iyon ay nagpapakita ng model sa ilalim ng **Used by**. Kapag nag-check in ka ng dokumento, makikita mo kung aling model ang tumutukoy dito.

## 7. Ano ang nakikita ni Ben habang hawak mo ang file

Ngayon, mag-check out ka ulit ng file, at hilingin kay Ben na buksan ang parehong project folder sa computer niya at buksan ang panel. Sa row ng file, makikita niya ang **Naka-check out kay Ana sa** computer mo **mula noong** oras, at walang button na {{ui:Check out}}. Kung susubukan pa rin niya, tinatanggihan ito ng vault: ang lock ay file na hindi gagawin ulit ng sistema, kaya hindi maaaring parehong hawakan ng dalawang tao ang file, kahit sa iisang segundo, kapag nasa disk ang folder sa Studio. (Sa browser, ang folder ay nagbibigay lamang ng best effort, at sinasabi ito ng panel sa ilalim ng **Folder**.)

Kung wala si Ana at kailangan ni Ben ang file, pinalalaya ito ng {{ui:Break check-out}}. Dapat siyang mag-type ng dahilan; mapupunta ito sa log kasama kung kaninong check-out iyon. Kapag may nakalistang admin ang project, sila lamang ang makakagawa nito. Ang check-out na mas matanda sa stale limit (14 na araw bilang default) ay minamarkahang *a long time*. Pagkatapos ng break, tinatanggihan ang late check-in ni Ana, kaya hindi ninyo maso-overwrite ang isa't isa.

## 8. Cloud folder

Ang cloud folder ay project folder na nakatago sa cloud storage ng team ninyo, kaya hindi na kailangan ng team ng shared drive. Sa Studio, naka-sign in sa iyong CadCraft account, ipinapakita ng panel ang {{ui:Open a cloud folder}} sa tabi ng {{ui:Choose the project folder}}. Piliin ito at piliin ang folder, nakalistang workspace / folder. Ang may-ari ng workspace ang gumagawa ng folder muna, at dapat nakabisa ang cloud storage ng team. Gumagana nang pareho ang lahat ng nasa itaas; ginagawa ng server ang lock, na mahigpit sa pagitan ng mga tao. Kung hindi ka naka-sign in, sinasabi ng panel na mag-sign in. Sa karaniwang browser tab ay hindi inaalok ang cloud button; gamitin ang Studio.

## Subukan ito

Gawin ang walong hakbang sa itaas gamit ang kopya ng totoong file. Para sa mga hakbang na dalawang tao, kailangan mo ng ibang tao, o dalawang window na may dalawang pangalan. Kung susubukan mo nga ito sa totoong shared folder, may check ang pahina ng Community testing na humihingi nito mismo, at tumatanggap ng resulta.
