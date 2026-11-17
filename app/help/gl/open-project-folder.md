---
title: Abrir un cartafol de proxecto completo
summary: Apunte BimCraft a un cartafol de proxecto para ver ao mesmo tempo todos os modelos, as súas copias de seguranza e as súas ligazóns, e deixe que a caixa Comece aquí suxira que ficheiro traballar.
keywords: cartafol, directorio, cartafol de proxecto, unidade de rede, servidor, comece aquí, que ficheiro, copias de seguranza, ligazóns, xrefs, cartafoles recentes, arrastrar cartafol
from: 16fbdce2
---

## Que vai facer

Abrir un cartafol de proxecto completo, como o que lle entregaron para un traballo, e deixar que BimCraft o ordene: que modelos hai, cales son copias de seguranza, que liga con que, cales ficheiros están danados e cal ficheiro é probable que queira abrir.

Só se len os poucos quilobytes que necesita cada ficha de modelo, así que un cartafol nunha unidade de rede ou nun cartafol de nube sincronizado vale.

## Pasos

:::chromium
1. Prema {{ui:Abrir un cartafol}} á esquerda (ou no centro da pantalla baleira).
2. Escolla o cartafol de proxecto na xanela que se abre e prema **Seleccionar** (ou **Cargar** ou **Abrir**, segundo o seu sistema).
3. Prema **Ver ficheiros** cando o navegador pregunte «Permitir que o sitio vexa os ficheiros?». Isto só permite que a pestana lea o cartafol; non se envía nada.
4. Agarde mentres a liña de estado conta: «Listando o cartafol: … ficheiros», e despois «Comprobando os ficheiros de Revit: … de …».
:::

:::firefox
1. Prema {{ui:Abrir un cartafol}} á esquerda (ou no centro da pantalla baleira).
2. Escolla o cartafol de proxecto na xanela que se abre e confirme. Firefox pode pedirlle que confirme que a páxina pode ler os ficheiros do cartafol; seguen no seu equipo.
3. Agarde mentres a liña de estado indica «Lendo o cartafol: … ficheiros», e despois «Comprobando os ficheiros de Revit: … de …».
:::

:::safari
1. Prema {{ui:Abrir un cartafol}} á esquerda (ou no centro da pantalla baleira).
2. Escolla o cartafol de proxecto na xanela que se abre e prema **Cargar**. Malia a palabra, nada sae do seu Mac: os ficheiros só se entregan á pestana.
3. Agarde mentres a liña de estado indica «Lendo o cartafol: … ficheiros», e despois «Comprobando os ficheiros de Revit: … de …».
:::

Tamén pode **arrastrar o cartafol** desde {{pick:mac=Finder|windows=File Explorer|linux=o seu xestor de ficheiros}} á páxina. Un cartafol arrastrado ábrese sen ningunha petición de permiso en todos os navegadores.

## Que debe ver

O informe do cartafol enche o centro:

- O nome do cartafol, os totais de modelos, debuxos CAD, modelos IFC e ficheiros, e o tamaño total.
- Notas vermellas ou ámbar se algún ficheiro está incompleto ou se algún ficheiro ligado falta no cartafol.
- A caixa {{ui:Comece aquí}}: o ficheiro que BimCraft suxire abrir, cos motivos.
- **Modelos**: unha fila por modelo, coas súas copias de seguranza agrupadas debaixo.
- **Ficheiros ligados e referenciados**, **Modelos IFC**, **Debuxos CAD** e **Apartados**, cando o cartafol os ten.

Á esquerda, o panel {{ui:Cartafol}} resume todo; **Problemas** di «Ningún» cando todas as copias están sas.

## Usar a caixa Comece aquí

A caixa nomea un ficheiro e di por que, por exemplo:

- «Traballo gardado máis recente neste cartafol (3 de marzo de 2025).»
- «*Consultant.rvt* está ligado a outros modelos, así que é fondo, non o ficheiro que editar.»
- «*Tower.rvt* parece a opción obvia, pero está danado; a súa última copia boa é de …»
- «Este é un modelo central: en Revit, ábrao con «Create New Local» e traballe na copia local.»

1. Lea os motivos.
2. Prema {{ui:Abrir a súa ficha}} para ler a ficha dese ficheiro, ou {{ui:Mostrala na lista}} para atopar a súa fila en **Modelos**.
3. Comprobe con quen traballou por última vez no proxecto antes de confiar nel. A caixa tamén o di: é unha suposición aproximada a partir de nomes, datas e ligazóns.

## Abrir ficheiros desde o informe

1. Prema o nome dun modelo para abrir a súa ficha. A ficha comproba cada ligazón contra o cartafol.
2. Prema {{ui:Volver a}} e o nome do cartafol na parte superior da ficha (ou {{ui:Volver ao cartafol}} á esquerda) para volver.
3. Prema calquera ficheiro IFC en **Modelos IFC** para abrilo en 3D.
4. Prema calquera DWG ou DXF en **Debuxos CAD** para abrilo en 2D. Os seus debuxos e imaxes ligados atópanse no cartafol automaticamente.

## Reabrir un cartafol máis tarde

:::chromium
Os cartafoles que abriu con {{ui:Abrir un cartafol}} ou arrastrando aparecen en {{ui:Cartafoles recentes}} á esquerda. Prema {{ui:Reabrir}} e o nome do cartafol para abrilo de novo sen escoller. Despois de reiniciar o navegador, Chrome ou Edge pregúntano outra vez; escolla «Permitir en cada visita» para que deixe de preguntar. A lista consérvase só neste navegador, e nunca se envía a ningures. Prema × para esquecer un cartafol.
:::

:::firefox safari
Este navegador non pode lembrar cartafoles entre visitas. Escolla o cartafol de novo con {{ui:Abrir un cartafol}}, ou arrástreo.
:::

## Erros comúns

- **Escoller un cartafol demasiado grande.** Con máis de 20.000 ficheiros: «Este cartafol ten máis de 20.000 ficheiros. Escolla un cartafol máis pequeno, como o dun só proxecto.» Escolla o cartafol do proxecto, non a unidade enteira.
- **Escoller o cartafol pai de varios proxectos.** A caixa {{ui:Comece aquí}} entón escolle entre proxectos. Escolla un só.
- **Parece que BimCraft ignora os cartafoles propios de Revit.** Os cartafoles `*_backup`, `*_log` e `Revit_temp` son de mantemento e aparecen en **Apartados**, non se len.
- **Esperar que un modelo se abra en 3D desde a súa ficha.** Un ficheiro de proxecto é só unha ficha. Abra a súa exportación IFC.
- **Teléfonos e tabletas.** Moitos navegadores móbiles non poden escoller cartafoles. Use un ordenador.

Ver [Comprobar un cartafol para detectar copias danadas, ligazóns perdidas e restos](topic:check-folder-health) e [Informe do cartafol: papeis, estados e ligazóns](topic:folder-roles).
