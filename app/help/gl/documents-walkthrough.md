---
title: Documentos e revisións (o almacén)
summary: Un percorrido paso a paso por un traballo real: poñer unha carpeta de proxecto de modelos IFC baixo control, rexistrar un modelo en saída, cambialo, rexistralo en entrada cunha nota, envialo a revisión, aprobalo e liberalo, ver o historial e o que o usa, o que ve unha segunda persoa mentres está bloqueado, e como funciona coas carpetas na nube.
keywords: almacén, documentos, percorrido, tutorial, rexistrar en saída, rexistrar en entrada, revisión, liberación, aprobar, bloqueo, historial, onde se usa, ifc, modelo, carpeta na nube, carpeta do proxecto, dúas persoas, carpeta compartida
from: 0a753f25
---

## Que vai facer

Vostede é Ana e traballa na Clínica Riverside cun compañeiro, Ben. Os modelos IFC do proxecto viven nunha carpeta á que chegan os dous (unha unidade compartida, unha carpeta sincronizada ou unha carpeta na nube). Ao final, un ficheiro pasou da súa primeira copia a unha revisión liberada **A**, foi cambiado de novo como **B.1**, vostede viu quen fixo cada cousa, e viu o que ve Ben cando vostede ten o ficheiro.

Todo se garda nunha carpeta oculta `.ccvault` xunto aos seus ficheiros: sen servidor, sen envíos (unha carpeta na nube é a excepción, vexa o último paso). Para cada botón e regra nun só lugar, vexa o tema *Documentos: rexistro en saída, revisións e liberación* onde a súa aplicación o teña.

## 1. Poña a carpeta do proxecto en orde

1. Escolla {{ui:Documentos}} xunto a {{ui:Abrir un cartafol}} na pantalla de inicio, ou {{ui:Documentos…}} no menú **Ficheiro**.
2. Escolla {{ui:Escolla a carpeta do proxecto}} e seleccione a carpeta que contén os modelos IFC do proxecto. (As carpetas de proxecto funcionan en Studio e nos navegadores que poden abrir unha carpeta, como Chrome e Edge. Noutros navegadores o panel di iso.)
3. Escolla {{ui:Cambio}} xunto a **Vostede:** e escriba o seu nome, `Ana` (se o pide, tamén o nome deste ordenador). O panel dí agora *Vostede: Ana en* e o seu ordenador. O seu nome vai en todo o que fai.
4. Escolla {{ui:Crear un almacén nesta carpeta}} e escriba o nome do proxecto, `Riverside clinic`. O panel dí *Almacén iniciado para Riverside clinic.*

## 2. Poña un ficheiro baixo control

1. Abra **Ficheiros fóra do almacén** e escolla {{ui:Engadir}} xunto a `models/House.ifc`.
2. Aparece en **Ficheiros no almacén** na revisión **A.1**, estado **Traballo en curso**. A.1 é a súa primeira copia; o almacén garda unha copia de cada revisión.

## 3. Rexistrar en saída, cambiar, rexistrar en entrada

1. Escolla {{ui:Abrir}} xunto a `models/House.ifc`. O modelo ábrese en BimCraft e o panel péchase para que o vexa. Abra o panel de novo desde {{ui:Documentos}}.
2. Abra o panel de novo e escolla {{ui:Rexistrar en saída}}. A fila di agora **Rexistrado en saída a vostede**. Fíxose un ficheiro de bloqueo en `.ccvault/locks`; ninguén máis pode rexistrar este ficheiro en saída ata que vostede o rexistre en entrada.
3. Cambie o modelo: mova un muro, engada unha porta. {{ui:Gardar}} recházase salvo que o modelo estea rexistrado en saída a vostede, e di o motivo; {{ui:Gardar como}} funciona sempre para unha copia da súa.
4. Abra o panel, escolla {{ui:Rexistrar en entrada}} e escriba o que cambiou (`Moved the door`). O panel di *rexistrado en entrada como A.2*. O ficheiro na carpeta do proxecto é agora o modelo que tiña aberto, e o bloqueo desaparece. Rexistrar en entrada sen cambios conserva a revisión.

Se cambia de idea, {{ui:Desfacer rexistro en saída}} devolve o ficheiro sen unha nova revisión.

## 4. Revisión e liberación

1. Escolla {{ui:Enviar para revisión}}. O estado pasa a **Para revisión** e o ficheiro é só de lectura.
2. Antes de aprobar, escolla {{ui:Configuración do proxecto}} e liste quen pode aprobar (un nome por liña), por exemplo `Ben` e `Carla`, e marque a regra de que quen aproba debe ser outra persoa distinta do autor. Escolla {{ui:Gardar configuración}}. Agora o propio almacén rexeita a calquera outra persoa.
3. Ben (ou Carla) escolle {{ui:Aprobar}} e escribe o nome de quen aproba. O estado pasa a **Liberado** e a revisión pasa a ser **A**, con *aprobado por* e o nome. Un ficheiro liberado é só de lectura. {{ui:Devolver}} devolvería o ficheiro a Traballo en curso, cun motivo.

O nome de quen aproba é o escrito no panel; é un rexistro de quen asinou, non unha proba de identidade.

## 5. Unha nova revisión

1. No ficheiro liberado, escolla {{ui:Nova revisión}}. Reserva a seguinte letra.
2. Cambie o ficheiro e despois {{ui:Rexistrar en entrada}}. A revisión é **B.1**, traballo en curso. Libérea do mesmo xeito e pasará a ser **B**. {{ui:Desfacer rexistro en saída}} antes do primeiro rexistro en entrada déixao en **A**.

As letras de revisión van A, B … Z, AA, AB. Se o seu estándar omite algunhas letras, o axuste do proxecto *Usar a secuencia ASME Y14.35* salta I, O, Q, S, X e Z nas seguintes revisións.

## 6. Ver o que pasou

Escolla o nome do ficheiro para abrir os seus detalles:

- **{{ui:Historial}}**: cada evento, o máis recente primeiro, con quen, que ordenador e cando: *Rexistrado en entrada A.2* por Ana, *Liberado* por Ben, e así.
- **{{ui:Revisións}}**: a táboa de revisións: cada revisión conservada, coa súa data, quen a rexistrou en entrada, a nota e quen a aprobou. O almacén garda unha copia de cada unha en `.ccvault/revs`.
- **{{ui:Usa}}**: os documentos aos que apunta un modelo IFC.
- **{{ui:Usado por}}**: cada modelo do almacén que apunta a este ficheiro.

## Modelos que apuntan a outros documentos

Un modelo IFC que apunta a outros documentos da carpeta (debuxos, cadros) mostrávos baixo **Usa**, e cada un deles mostra o modelo baixo **Usado por**. Se rexistra un documento en entrada, pode ver que modelos o citan.

## 7. Que ve Ben mentres vostede ten o ficheiro

Agora rexistre de novo o ficheiro en saída, e pida a Ben que abra a mesma carpeta de proxecto no seu ordenador e abra o panel. Na fila do ficheiro ve **Rexistrado en saída por Ana en** o seu ordenador **desde** a hora, e non hai botón {{ui:Rexistrar en saída}}. Se o intenta igualmente, o almacén rexéitao: o bloqueo é un ficheiro que o sistema non deixa crear dúas veces, así que dúas persoas non poden ter o ficheiro ao mesmo tempo, nin no mesmo instante, cando a carpeta está no disco en Studio. (Nun navegador a carpeta só permite facelo na medida do posible, e o panel indícao baixo **Carpeta**.)

Se Ana está fóra e Ben precisa o ficheiro, {{ui:Romper a retirada}} libéreo. Ten que escribir un motivo; vai ao rexistro xunto con de quen era a saída. Cando o proxecto lista administradores, só eles poden. Unha saída máis antiga que o límite de caducidade (14 días por defecto) márcase como *moito tempo*. Despois da ruptura, o rexistro en entrada tardío de Ana recházase, así que os dous non se poden sobrescribir.

## 8. Carpetas na nube

Unha carpeta na nube é unha carpeta de proxecto gardada no almacenamento na nube do seu equipo, así que o equipo non necesita unha unidade compartida. En Studio, con sesión iniciada na súa conta de CadCraft, o panel mostra {{ui:Abrir unha carpeta na nube}} xunto a {{ui:Escolla a carpeta do proxecto}}. Escóllaa e seleccione a carpeta, listada como espazo de traballo / carpeta. Un propietario do espazo de traballo crea primeiro a carpeta, e o almacenamento na nube do equipo debe estar en vigor. Todo o anterior funciona igual; o servidor crea o bloqueo, que é estrito entre persoas. Se non ten sesión iniciada, o panel di que inicie sesión. Nunha lapela de navegador normal non se ofrece o botón da nube; use Studio.

## Probe

Faga os oito pasos de arriba cunha copia dun ficheiro real. Para os pasos de dúas persoas precisa outra persoa, ou dúas ventás con dous nomes. Se o fai cunha carpeta compartida real, a páxina de probas da comunidade ten unha comprobación que pregunta exactamente isto e acepta resultados.
