---
title: Gardar os datos dos activos e un rexistro de mantemento no modelo
summary: Use o modelo IFC entregado para xestionar o edificio: fabricante, modelo, número de serie, garantía e vida útil de equipos e accesorios, e un rexistro do mantemento feito, todo escrito no IFC.
keywords: entrega, certificado de finalización, certificado de ocupación, as-built, paquete de entrega, activos, rexistro de activos, xestión de instalacións, fm, operacións, mantemento, servizo, garantía, número de serie, código de barras, fabricante, modelo, vida útil, cobie, xemelgo dixital, vencido, vence, orde de traballo
from: b84ac492
---

A lapela {{ui:Activos}} do panel dereito converte o modelo IFC aberto nun rexistro dos equipos do edificio. Todo se escribe no propio IFC, en conxuntos de propiedades e tarefas propios de IFC, así que o seguinte programa que abra o ficheiro tamén o lerá. Non se sube nada e non fai falta servidor: garde o IFC para conservalo.

## Que se lista

- Equipos e accesorios: mobiliario, aparellos sanitarios, luminarias, electrodomésticos, terminais de aire, válvulas, bombas, ventiladores, caldeiras, depósitos, tomas, cadros de distribución, ascensores e outros elementos así, e elementos da biblioteca con datos de equipo.
- Calquera outro elemento que **siga**: escóllao no modelo (unha porta, un muro, unha bomba debuxada como un obxecto simple) e prema en {{ui:Seguir o escollido}}.
- Calquera elemento que xa teña datos de activo ou unha tarefa de mantemento, escrita aquí ou por outro programa.

Primeiro aparece o que está fóra de prazo, e logo o que vence en menos de 30 días. Filtre por nome, etiqueta, fabricante, modelo ou número de serie, por nivel, ou marque {{ui:Só os fóra de prazo ou con vencemento en menos de 30 días}}.

## Datos do activo

Prema nun activo da lista (ou escóllao no modelo) para abrir os seus datos: fabricante, modelo, referencia do modelo, número de serie, código de barras, o día da instalación, o número de garantía e o seu inicio e fin, e a súa vida útil en anos. {{ui:Gardar os datos}} escríbeos nun só paso ({{key:Mod+Z}} desfai o paso). Deixe unha caixa baleira para eliminar ese valor.

## Documentos

Debaixo dos datos, {{ui:Documentos}} lista os manuais, garantías, fotos, certificados e debuxos ligados ao activo. Escolla o tipo, dea un título (ou déixeo baleiro: úsase o nome do ficheiro) e indique onde está:

- un **enderezo web** (`https://…`): recibe unha ligazón Abrir, que se abre nunha lapela nova;
- ou un **nome de ficheiro ou ruta** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, unha compartición en rede): garde os ficheiros xunto ao IFC, no mesmo cartafol ou nun subcartafol, para que os nomes sigan funcionando cando entregue o cartafol. BimCraft mostra o nome; abra o ficheiro desde o cartafol.

Os ficheiros non se suben nin se copian ao IFC: só se escribe a ligazón. Rexéitase un enderezo web que leve un contrasinal, e calquera ligazón que non sexa un enderezo web nin un ficheiro (como `javascript:`). {{ui:Eliminar}} retira un documento do activo (un paso; {{key:Mod+Z}} desfai o paso).

Tamén se listan os documentos que outro programa puxo no elemento. Os documentos do **tipo** do elemento aparecen en cada elemento dese tipo e así o indican; cámbieos onde se fixo o tipo.

No IFC, cada documento é unha referencia de documento IFC ligada ao elemento, co seu tipo gardado nesa ligazón, tanto en IFC4 como en IFC2X3.

## O rexistro de mantemento

Debaixo dos documentos, {{ui:Rexistrar o traballo feito}}: o día en que se fixo, o traballo, quen o fixo, cando vence a seguinte vez e as notas. Cada entrada é un paso; {{ui:Editar}} e {{ui:Eliminar}} cámbiana despois. A data do próximo vencemento da entrada máis recente decide se o activo está fóra de prazo ou vence pronto.

## Como se garda no IFC

- Fabricante e modelo en `Pset_ManufacturerTypeInformation`, número de serie, código de barras e o día da instalación en `Pset_ManufacturerOccurrence`, a garantía en `Pset_Warranty`, a vida útil en `Pset_ServiceLife`, no propio elemento. Cando o tipo do elemento xa leva un fabricante ou un modelo, mostrase ata que escriba o seu.
- Cada entrada de mantemento é unha **tarefa** IFC do tipo mantemento, ligada ao elemento, coas súas datas (en IFC4 tamén como os tempos propios da tarefa) e un conxunto `CadCraft_Maintenance` co día, quen o fixo e o día do seguinte vencemento.
- Os valores que comparte outro elemento cópianse primeiro: cambiar un activo non cambia nunca os seus veciños.
- Nos ficheiros IFC2X3 máis antigos, as datas escríbense como texto (AAAA-MM-DD); esa versión necesita alí un rexistro de data separado, que BimCraft non escribe.

## Lecturas dos sensores

Abra {{ui:Valores dos sensores}} e {{ui:Abrir lecturas (CSV)…}} para traer lecturas exportadas dun sistema de xestión do edificio, un rexistrador de datos ou unha folla de cálculo:

- A **primeira columna é a hora**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` ou segundos Unix. Unha hora sen zona lese na zona horaria do seu ordenador. Non se len datas co día primeiro, como `23/10/2026` (son ambiguas); exporte datas ISO.
- **Cada outra columna é un sensor**, encabezada coa **etiqueta**, o **nome** ou o **GlobalId** do seu activo. Un encabezado que non coincide con ningún activo, ou con máis dun, lístase e déixase fóra. As comas, os punto e coma ou os tabuladores separan as columnas; con punto e coma ou tabuladores lense tamén a coma decimal (`21,5`).
- As horas ou os valores que non se len (unha palabra, unha unidade escrita na cela) cóntanse e déixanse fóra; nunca se adiviñan.

A última lectura mostrase na columna {{ui:Lectura}} da lista e no bloque {{ui:Sensor}} do activo, cun **gráfico** de todas as lecturas (nun teléfono, os gráficos agardan ata que toque {{ui:Mostrar o gráfico}}). Estableza un **límite inferior e superior** e unha unidade nun activo e prema en {{ui:Gardar os límites}}: unha lectura fóra deles marca o activo. Marque {{ui:Amosar no modelo}} para pintar cada activo segundo a súa lectura: azul por debaixo do límite inferior, verde dentro dos límites, vermello por riba do límite superior e, para os activos sen límites, unha única escala azul do valor máis baixo ao máis alto, coa súa lectura como etiqueta (ata 60 etiquetas, primeiro as marcadas).

**As lecturas quedan nesta lapela do navegador**: non se gardan no IFC nin se envían a ningún sitio; abra o CSV de novo a próxima vez. Os **límites gárdanse no IFC** (un conxunto `CadCraft_Sensor` no elemento: Low, High, Unit), así que a seguinte persoa que abra o ficheiro verá as mesmas marcas.

## Lecturas en directo

{{ui:Fonte en directo}} lee os valores segundo se producen, **directamente desde este navegador ata o seu propio sistema**. Nada pasa polo noso servidor e nada se garda en ningún sitio que non sexa a súa lapela do navegador. Nada se conecta ao abrir un ficheiro: só o fai {{ui:Conectar}}.

- **MQTT sobre WebSockets**: o enderezo do oínte WebSocket do seu broker (`wss://broker.example.com:8884/mqtt`), e un ou máis temas con `{tag}` onde vai a etiqueta do activo, por exemplo `site/{tag}/temperature` (BimCraft subscríbese a `site/+/temperature` e lee a etiqueta do tema de cada mensaxe). Os temas sen `{tag}` nomean o propio sensor. Unha mensaxe é un número simple (`21.5`) ou un JSON como `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (estableza {{ui:Campo do valor en JSON}} se o seu se chama de outro xeito).
- **Preguntar a un enderezo (HTTP)**: un enderezo web ao que responde o seu sistema de xestión do edificio ou un pequeno script seu, preguntado cada certo número de segundos (5 como mínimo). Pode responder cun JSON indexado pola etiqueta (`{"AHU-1": 21.5}`), unha lista JSON (`[{"tag": "AHU-1", "value": 21.5}]`) ou un CSV de lecturas como o de enriba. Se non responde, BimCraft agarda o dobre antes de volver preguntar, ata cinco minutos.

Cada lectura vai ao activo cuxa etiqueta, nome ou GlobalId nomea, exactamente como o faría unha columna CSV; os nomes que non coinciden con ningún activo lístanse. As lecturas únense a {{ui:Valores dos sensores}}: a lista, os gráficos, os límites e as cores do modelo funcionan igual.

**O seu contrasinal ou token** escríbese para unha única conexión: entrégase á conexión e a caixa vacíase; nunca se garda neste navegador nin no IFC. Un token vai nunha cabeceira `Authorization: Bearer` estándar, e non se envían cookies.

{{ui:Gardar estes axustes no IFC}} escribe no modelo o enderezo, os temas, o campo do valor e a frecuencia de consulta (un conxunto `CadCraft_Feed` no proxecto; non hai campo para o contrasinal), así que a seguinte persoa que abra o ficheiro só escribe o seu propio acceso e prema en {{ui:Conectar}}. Non poña un contrasinal nin unha clave no propio enderezo: un enderezo con nome de usuario e contrasinal rexéitase.

:::note
**Que necesita o seu broker ou enderezo.** Unha páxina do navegador só pode falar cun servidor que o permita:
- A páxina é segura (https), así que o navegador só se conecta a enderezos `wss://` e `https://`, salvo no seu propio ordenador (`localhost`), onde `ws://` e `http://` funcionan para probas.
- Un enderezo HTTP debe permitir peticións desde esta páxina (CORS: a cabeceira `Access-Control-Allow-Origin`, e `Authorization` entre as cabeceiras permitidas se usa un token).
- A maioría dos brokers (Mosquitto, EMQX, HiveMQ e outros) ofrecen un oínte WebSocket; adoita estar desactivado ata que se activa. BimCraft fala MQTT 3.1.1.
:::

Non hai **avisos** cando BimCraft está pechado: os límites marcan un activo mentres o modelo está aberto cunha fonte conectada. Vixiar un edificio as 24 horas necesita un servidor, que BimCraft non executa.

## Folla de cálculo COBie

**COBie** é a folla de cálculo de entrega que moitos propietarios e equipos de instalacións piden (publicada polo National BIM Standard nos Estados Unidos; BS 1192-4 no Reino Unido). Abra {{ui:Folla de cálculo COBie}} na lapela:

- {{ui:Gardar como COBie (.xlsx)}} escribe as follas COBie 2.4 — Contact, Facility, Floor, Space, Type, Component, System, Job, Document e Attribute — a partir do modelo e dos datos dos activos: o edificio, os seus niveis e cuartos (superficies tomadas das cantidades do modelo), cada activo como compoñente co seu número de serie, o día de instalación, o inicio da garantía, a etiqueta e o código de barras, o seu tipo con fabricante, modelo, vida útil e duración da garantía, os sistemas aos que pertence, o rexistro de mantemento como traballos e os documentos ligados. Cada compoñente leva o GlobalId IFC do elemento. Escriba o seu enderezo de correo electrónico para a columna «created by» de COBie, ou déixeo baleiro (entón indica n/a). Os valores que o modelo non ten dín **n/a**; as columnas de categoría levan a clase IFC, non un código OmniClass.
- {{ui:Ler unha folla COBie…}} le unha de volta, de BimCraft ou doutro programa, e **lista primeiro todos os cambios**: que activo, que valor, de que a que, e os documentos novos. {{ui:Aplicar}} escríbeos todos nun só paso ({{key:Mod+Z}} desfai o paso). As filas emparéllanse polo GlobalId e despois polo nome do compoñente. As filas que non coinciden con nada do modelo lístanse, non se engaden.

Trátase unha folla de cálculo como non fiable: as fórmulas nunca se len nin se executan (só o último valor gardado na cela), un valor que faría terminar unha garantía antes de comezar e unha ligazón de documento que non sexa un enderezo web nin un nome de ficheiro déixanse fóra e cóntanse, e os libros moi grandes recházanse. Os traballos de COBie son o trabalho previsto dun tipo, así que se escriben pero non se len de volta. Na folla que escribe BimCraft, o texto que unha folla de cálculo podería tomar por unha fórmula (que comeza por `=`, `+`, `-` ou `@`) márcase como texto.

O libro compróbase nas nosas probas cun lector de follas de cálculo independente; non pasou por un validador de COBie. Se un equipo receptor usa un, dinos o que indica.

## Documentos de entrega

Os papeis que se entregan ao propietario co edificio rematado pertencen ao proxecto, non a un só activo. Na lapela {{ui:Activos}}, abra {{ui:Documentos de entrega}}:

1. {{ui:Engadir un documento}}, escolla o seu tipo (certificado de finalización, certificado de ocupación, garantía, manual, debuxos as-built, outro), e escriba o seu título, a data de emisión, quen o emitiu e o seu número de referencia.
2. Indique onde está: un enderezo web, un nome de ficheiro gardado xunto ao IFC, ou {{ui:Adxuntar un ficheiro}}.
3. {{ui:Engadir á lista}}. {{ui:Editar}} e {{ui:Eliminar}} cambian a lista; cada un é un paso que se pode desfacer.

{{ui:Construír o paquete de entrega}} descarga un zip: unha portada que lista cada documento, a mesma lista que unha folla de cálculo, o libro COBie (os documentos están na súa folla Document, como filas sobre a Facility), o modelo e cada ficheiro adxunto. Un certificado de finalización ou de ocupación que aínda non estea na lista nomease na portada; o paquete constrúese igualmente.

O modelo do paquete é o **modelo as-built**: indica que elementos se medisiron en obra. Con el, no cartafol `as-built`: a declaración, unha lista de cada elemento co seu estado de verificación, o conxunto de debuxos tal como está agora nun só PDF (os debuxos as-built) e o historial de cambios dos debuxos cando o modelo emitiu conxuntos. Ver [Marcar elementos como comprobados ou verificados en obra](topic:verification).

- No ficheiro IFC, cada documento é un IfcDocumentInformation ligado ao proxecto (IfcRelAssociatesDocument), co seu título, referencia, data, emisor e lugar, para que outros programas o listen.
- Un ficheiro adxunto rexístrase polo nome, o tamaño e o SHA-256. Para conservar o propio ficheiro co proxecto, use {{ui:Gardar o proxecto como paquete}} (un .ccbundle contén o modelo e os ficheiros adxuntos; ao abrilo devólvense, cada un comprobado contra o seu rexistro). Un gardado normal pregunta cal quere.
- Un .ifc simple conserva o rexistro, non o ficheiro: despois de abrilo, use {{ui:Adxuntar de novo o ficheiro}}. Recoñécese o mesmo ficheiro; un distinto substitúe o rexistro.

## CSV

{{ui:CSV}} garda cada activo cos seus datos, cada entrada de mantemento e cada documento, unha fila cada un, para unha folla de cálculo ou outro programa de mantemento.

:::note
Non está construído: un servizo aloxado que garda as lecturas e envía avisos mentres BimCraft está pechado, nin ler de volta os traballos de COBie. Ver [Aínda sen construír](topic:not-built-yet).
:::
