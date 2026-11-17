---
title: Estil de treball, vistes duplicades, plomes al paper, Informa com a i plantilles
summary: Trieu com es comporta BimCraft segons la vostra manera de treballar, dupliqueu qualsevol vista com a còpia pròpia o enllaçada, deseu les substitucions de plomes al fitxer i imprimiu tal com es veu o mitjançant una taula de plomes, informeu un element com a una altra classe IFC i comenceu els projectes a partir de les vostres plantilles.
keywords: estil de treball, vista duplicada, duplica, còpia de vista, vista dependent, vista enllaçada, còpia pròpia, substitucions de plomes, plomes, gruixos de línia, imprimeix tal com es veu, taula de plomes, estil de traçat, ctb, monocrom, escala de grisos, informa com a, classe ifc, reclassifica, tipus predefinit, model genèric, llosa com a carretera, mur com a panell, coberta com a rampa, plantilla de projecte, plantilla, nou des de plantilla, desa com a plantilla, estàndard d'oficina
from: 231d98b0
---

## Què fareu

Configureu BimCraft segons la vostra manera de treballar, dupliqueu vistes, imprimiu-les com espereu, compteu els elements pel que realment són i comenceu cada projecte amb la plantilla de l'oficina.

## Trieu un estil de treball

1. Obriu {{ui:Configuració}} i la pestanya {{ui:BimCraft}}. Cerqueu {{ui:Estil de treball}}.
2. Trieu-ne un:
   - {{ui:Cada vista la seva}} (la primera opció): una vista duplicada copia les seves anotacions i continuen sent d'aquella vista; els fulls s'imprimeixen tal com es veu a la pantalla.
   - {{ui:Anotacions i taules de plomes compartides}}: les vistes duplicades comparteixen les anotacions; la impressió es fa mitjançant una taula de plomes.
3. Sota l'opció hi ha les quatre coses que fixa. Canvieu-ne una sola i l'estil apareix com a {{ui:Personalitzat}}.

L'estil de treball es desa en aquest navegador, igual que la disposició de l'espai de treball. Una plantilla el porta als models nous.

## Duplica una vista

1. Al {{ui:Navegador del projecte}}, cada planta, planta de sostre, crida, alçat i secció té un botó {{ui:Duplica}} (dos fulls).
2. Doneu-li un nom a la còpia i trieu-ne el comportament:
   - {{ui:Còpia pròpia}}: el seu dibuix, cotes, retallada, elements amagats i plomes es copien i es mantenen com a propis. Editar qualsevol de les vistes mai no canvia l'altra, de manera que una vista en un full emès es conserva tal com es va emetre.
   - {{ui:Enllaçat}}: mostra la mateixa vista amb un sol conjunt d'anotacions i configuració.
3. La còpia apareix sota {{ui:Vistes duplicades}}. Feu-hi clic per obrir-la; la barra de sobre de la planta indica que és una còpia, amb {{ui:Amunt}} per tornar a la seva vista.
4. El botó de control lliscant obre la seva configuració: el nom, {{ui:Interval de vista}} (una còpia pròpia en té un de propi), {{ui:Fes una còpia pròpia}} per a una d'enllaçada, i {{ui:Suprimeix}}.

Les còpies d'alçats i seccions van als vostres propis fulls, igual que les vistes d'on procedeixen. Duplicar és un sol pas per desfer, i les còpies es desen a l'IFC al costat de les crides.

## Plomes desades amb la vista, i impreses tal com es veu

1. Activeu {{ui:Dibuixa}} i trieu {{ui:Plomes}}.
2. {{ui:Per a}} ara llista totes les categories: murs, portes i finestres, forjats, cobertes, pilars, escales, mobiliari i la resta, i el dibuix i les cotes.
3. {{ui:Aplica}} desa la ploma a l'IFC amb la vista que es mostra: una planta, una planta de sostre, una crida o una vista duplicada. Les plomes fetes abans de la versió 0.9 es van desar al navegador; {{ui:Mantén-les al fitxer}} les mou.
4. Els fulls i el PDF dibuixen cada ploma tal com es veu a la pantalla.

Per imprimir mitjançant una taula de plomes, en canvi, poseu {{ui:Imprimeix}} a la fila de Plomes a {{ui:Mitjançant una taula de plomes}}, i després trieu una taula (color, monocrom, escala de grisos) o {{ui:Edita la taula de plomes…}}: cada color rep el color, el gruix i la trama amb què s'imprimeix. La taula és el fitxer d'estil de traçat de CadCraft, de manera que {{ui:Importa…}} accepta una taula feta a l'aplicació CadCraft i {{ui:Exporta}} en torna una. El model conserva la seva elecció; si no n'hi ha cap, decideix l'estil de treball.

## Informa un element com a una altra classe

Una llosa dibuixada com a carretera, un mur fet servir com a panell, una coberta amb forma de rampa: mantingueu l'eina amb què l'heu dibuixat i informeu-lo com el que és.

1. Trieu l'element i obriu {{ui:Propietats}}. Obriu {{ui:Informa com a}}.
2. Escriviu al quadre de cerca per trobar una classe que encaixi amb la forma, trieu-la i el seu tipus predefinit. Per a un tipus propi, trieu USERDEFINED i doneu-li un nom.
3. {{ui:Aplica}} (un sol pas per desfer). {{ui:Neteja}} l'informa com dibuixat de nou.

Seguiu editant-lo amb l'eina amb què es va dibuixar. El fitxer IFC desat l'escriu com a classe informada, de manera que altres programes, l'amidament de {{ui:Quantitats}}, Cerca, Color per, les comprovacions del model i {{ui:Problemes}} el compten com a tal. Els quadres d'horaris deixen fora del quadre de murs un mur informat com a panell, i {{ui:Elements per classe informada}} els llista tots. Funciona amb fitxers IFC4 i IFC2X3; la llista només ofereix les classes que admet la versió IFC del fitxer. Les portes, finestres, escales, sales i nivells conserven la seva pròpia classe.

## Desa un projecte com a plantilla i comença des d'ella

1. Amb un projecte obert, feu clic a {{ui:Desa com a plantilla}} al costat de {{ui:Desa}}.
2. Doneu-li un nom. Marqueu {{ui:Baixa també el fitxer de plantilla}} per compartir-la com a fitxer IFC, i {{ui:Comença els models nous amb ella}} per fer-la la vostra opció predeterminada.
3. Una plantilla conserva els nivells, les plantilles de vista i la configuració de vista, les vistes duplicades i les crides, el dibuix, les plomes i la taula de plomes, les etiquetes, les famílies i els tipus, els fulls, les mides de full, els caixetins i l'estil de treball. Els murs, els forjats, les portes i la resta d'elements del model s'exclouen.
4. Feu clic a {{ui:Edifici nou}} i trieu-la a {{ui:Comença des de}}, o trieu {{ui:Un fitxer de plantilla…}} per a una que us hagin enviat. El projecte nou té el seu propi nom i la seva pròpia identitat de projecte; la resta és tal com la té la plantilla.

:::note
Les plantilles es desen en aquest navegador. Les plantilles d'equip compartides a través de CadCraft Studio encara no estan implementades: envieu el fitxer de plantilla en el seu lloc.
:::
