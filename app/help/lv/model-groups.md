---
title: Modeļu grupas
summary: Apvienojiet atlasītos elementus vienā nosauktā grupā, novietojiet grupu atkal citur un mainiet vienu kopiju, lai mainītos visas.
keywords: grupa, modeļu grupa, grupēšana, atgrupēt, eksemplārs, kopēt, atkārtot, tipveida vienība, joma, dzīvoklis, rediģēt grupu, IfcGroup
from: 121c5027
---

## Ko jūs darīsit

Apvienot tipveida lauku, novietot to vairākas reizes un mainīt visas kopijas, mainot vienu.

## Kur atrodas rīks

- Lentes izkārtojumi: {{ui:Arhitektūra}} › **Modelis** › {{ui:Modeļu grupa}}.
- Klasiskais izkārtojums: zīmēšanas josla › izvēlne {{ui:Telpas}} › Modeļu grupa.

## Soļi

1. Ar rīku Atlasīt izvēlieties elementus: noklikšķiniet vienu, Ctrl+klikšķis vai Shift+klikšķis pārējos.
2. Izvēlieties {{ui:Modeļu grupa}}. Tie uzreiz kļūst par grupu. Lai to nosauktu, pirms tam rindā ierakstiet {{ui:Grupas nosaukums}}, vai ierakstiet to vēlāk, lai pārdēvētu.
3. Nospiediet {{ui:Novietot citu}} un noklikšķiniet, kur kopijai jāatrodas: tās apakšējais kreisais stūris nonāk klikšķa vietā.
4. Mainiet jebkuru kopiju: pārvietojiet sienas galu, mainiet durvju izmēru, dzēsiet kolonnu. Katra cita šīs grupas kopija mainās tajā pašā solī, un viens {{ui:Atsaukt}} visu atsauc.
5. Kamēr rīks {{ui:Modeļu grupa}} ir aktīvs, klikšķis uz elementa atlasa visu tā grupu.

## Citas iespējas

- {{ui:Pievienot atlasītos}}: pievienot vairāk elementu grupai, ko atlasījāt pēdējo.
- {{ui:Atgrupēt}}: šī kopija kļūst par parastiem elementiem. Pārējās kopijas paliek grupa.
- Visu kopiju pārvietojiet ar {{ui:Pārvietot}}: tā ir tā pati grupa jaunā vietā; pārējās nepārvietojas.
- Dzēšot kopijas elementus, kopija pazūd.

## Ko grupā var būt

Sienas ar to durvīm un logiem, kolonnas un zīmētas grīdas var novietot atkārtoti un saglabāt vienādas. Grupā var būt arī citi elementi, bet tad to vairs nevar novietot atkārtoti; rindā ir norādīts iemesls.

Kopijas tiek pārvietotas, bet ne pagrieztas vai spoguļotas.

## IFC

Grupa ir IfcGroup ar IfcRelAssignsToGroup saitēm uz saviem dalībniekiem, kas paliek parastas sienas, kolonnas un grīdas. Katrai vienas grupas kopijai ir tas pats definīcijas id.

## Vēl nav pieejams

- Kopijas pagriešana vai spoguļošana.
- Kāpnes, jumti, telpu grīdas un bibliotēkas vienumi grupā, kas tiek novietota atkārtoti.
- Sienas profils, slīpums un sienas atveres netiek pārnestas uz kopijām.
- Grupas grupās.

Skat. arī [Pārvietot, izlīdzināt un sadalīt](topic:move-align-distribute).
