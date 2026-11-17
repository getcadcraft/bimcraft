---
title: Sienas un durvis no tālruņa vai lāzera skenējuma
summary: Pārvērst telpas skenējumu ierosinātās sienās, durvīs un telpās, kuras pieņemat pa vienai.
keywords: skenējums, tālruņa skenējums, lidar, punktu mākonis, sienas no skenējuma, durvis no skenējuma, telpas skenējums, ply, e57, las, obj, ieteikt
from: a4ef0f10
---

## Ko tas dara

Ar atvērtu skenējumu (punktu mākonis, piemēram, PLY, E57 vai LAS, vai tīkls, piemēram, OBJ) BimCraft sagriež skenējumu plāna augstumā, pagriež to taisni attiecībā pret ēku un meklē garus, šaurus punktu virknes: tās ir sienas. Sprauga aptuveni durvju platumā starp divām virknēm vienā līnijā kļūst par vienu sienu ar durvīm. Sienas, kas noslēdz telpu, veido telpu.

Nekas netiek zīmēts, līdz to nepieņemat. Sienas un durvis nāk kā priekšlikumu saraksts (tās ir izmaiņas ieteikuma režīmā): paturiet pareizās, noraidiet pārējās, un viss, ko paturat, tiek uzzīmēts vienā atsaukšanas solī. Telpas parādās pašas.

## Ko tas pārbauda

Sienas, kas nesaslēdzas, sienu posmi, kas īsāki par sienas biezumu, un durvju platuma sprauga bez sienas ap to tiek ziņoti kā Problēmas ar pozīciju, lai varētu paskatīties uz skenējumu tajā vietā.

## Nav pārbaudīts, līdz pārbaudīts

Sienas, durvis un telpas, ko pieņemat no skenējuma, ir atzīmētas kā nepārbaudītas: punktēta kaste un "?" plānā, līdz atzīmējat tās kā pārbaudītas. Skatiet [Atzīmējiet elementus kā pārbaudītus vai lauka pārbaudītus](topic:verification).

## Ko tas nevar

- Tas atrod sienas, kas iet divos perpendikulāros virzienos. Diagonāla vai izliekta siena netiek atrasta.
- Viens stāvs vienlaikus. Logi netiek atrasti (logs ir tikai sprauga, ja griezums ir palodzes augstumā).
- To izmēģināja uz ģenerētiem telpu skenējumiem un tīkliem, vēl ne uz reāliem tālruņa skenējumiem. Kā tas darbojas uz reāla skenējuma (novirze garā gājienā, mēbeles pie sienām, stikls, atvērtas durvis) nav zināms, un tā noregulēšana uz reāliem skenējumiem ir nākamais solis. Pārbaudiet katru priekšlikumu pret skenējumu, pirms to pieņemat.
