---
title: Opcións de volumetría colocadas lado a lado
summary: Conserve varias opcións de volumetría no mesmo modelo, faga unha delas a opción actual, compróbea contra as liñas de edificación e as servidumes do emprazamento, importe volumetría de ModelCraft e desenvolva a opción escollida en muros e lousas.
keywords: volumetría, masa, opción, opcións, conxunto de opcións, esquema, deseño conceptual, fase 2, alternativas, comparar opcións, opción actual, volumetría do edificio, empurrar tirar, modelcraft, civilcraft, superficie bruta construída, pegada, volume, desenvolver volumetría, servidume, liña de edificación, retranqueo
from: 69a01459
---

## O que vai facer

Conserve as opcións de volumetría dun anteproxecto nun só modelo, en vez de en ficheiros separados: varias masas de edificio xuntas, unha delas a **opción actual** e as demais gardadas para comparar.

Unha opción de volumetría é unha masa de edificio: un contorno elevado a unha altura, cun número de pisos. Aínda non son muros. Pode gardar tantas como queira, agrupadas en **conxuntos de opcións** (as opcións dun mesmo conxunto son alternativas entre si).

## Gardar unha opción

1. Abra {{ui:Room program to massing}}, escriba o programa de cuartos e o contorno, e escolla {{ui:Find options}}.
2. Escolla unha das opcións listadas.
3. En {{ui:Massing options in the model}}, escriba un nome para o {{ui:Option set}} se o quere, e escolla {{ui:Keep the selected option}}.

A opción aparece no modelo como unha masa de edificio e na lista, cos seus pisos, a ocupación en planta, a superficie bruta construída e o volume. Non se constrúe nada. Garde outra do mesmo xeito.

A primeira opción dun conxunto é a súa opción actual. Cada paso é un paso para desfacer.

## A opción actual

Unha opción de cada conxunto é a actual. Iso significa dúas cousas:

- **Os seus pisos contan como superficies do edificio.** A opción actual ten un espazo por piso que leva a superficie bruta dese piso, así que calquera cousa que lea as superficies ve a opción vixente e ningunha outra.
- **Compróbase contra o emprazamento.** Se queda fóra do límite do emprazamento, sobre unha liña de edificación ou sobre unha servidume, aparece en {{ui:Problems}} un aviso que a nomea. É só un aviso: non se rexeita nada. As opcións que non son actuais non se comprueban.

Escolla {{ui:Make current}} noutra opción para cambiala.

{{ui:Hide the options that are not current}} oculta as demais na vista 3D. Iso só vale neste navegador e non se garda no ficheiro.

## Volumetría desde ModelCraft

En ModelCraft, {{ui:Export}} › {{ui:Massing to BimCraft…}} envía cada grupo ou compoñente como unha opción. BimCraft abre o ficheiro coas opcións listadas.

Para trasladalas a un modelo que xa está aberto, escolla {{ui:Add massing options from a file}} e seleccione o ficheiro `.ifc`. As súas masas entran como opcións dun conxunto, nun só paso para desfacer, e ocupan o lugar onde se modelaron. Un ficheiro de masas de edificios de CivilCraft funciona igual.

Unha opción marcada como "(forma simplificada)" non era un bloque recto e vertical en ModelCraft (retrocede, inclina ou non está pechada). A súa masa aquí é o contorno da súa base elevado á súa altura; as súas superficies por piso e o seu volume son os medidos sobre o propio sólido.

## Desenvolver a opción escollida

Escolla {{ui:Develop}} nunha opción. Convértese en niveis (sumados ata o seu número de pisos), muros ao redor do seu contorno en cada piso e unha laxe de chan en cada un, nun só paso para desfacer. A opción sae da lista; as demais quedan como estaban. Aínda non hai cuberta.

{{ui:Rename}} cambia o nome dunha opción; {{ui:Remove}} a retira do modelo. Retirar a opción actual fai que a primeira das outras do conxunto pase a ser a actual.

## O que debe ver

- Cada opción gardada como un bloque na vista 3D e unha fila na lista.
- "(actual)" xunto a unha opción de cada conxunto.
- Un aviso en {{ui:Problems}} cando a opción actual cruza o límite do emprazamento, unha liña de edificación ou unha servidume.

## Convén saber

- No ficheiro IFC, unha opción é un proxy de elemento de edificio coa propiedade `CadCraft_SiteMass` (o seu conxunto de opcións, o nome da opción e se é a actual están nese conxunto). Os pisos da opción actual son espazos de tipo `MassingFloor`. Outros programas len o proxy como un elemento xenérico.
- Gardar unha opción nunca engade niveis; desenvolvela, si.
- Un asistente pode listar as opcións gardadas, gardar unha, facer actual unha, cambiarlle o nome, desenvolvela ou retiralas.
