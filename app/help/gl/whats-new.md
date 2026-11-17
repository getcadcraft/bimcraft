---
title: Novidades da versión 0.9
summary: Formas de muro, división, desprazamento, estiramento e bloqueo á reixa, niveis baixo o chan, cotas de reixa e Medir na planta, vistas duplicadas con estilos de traballo e táboas de plumas, Informar como, exportación Collada e Google Earth, Scan to BIM, análise de vento e sismo, complementos de impresión en resina.
keywords: novidades, 0.9, notas de versión, formas de muro, rectángulo, polígono, arco, escoller liñas, calcar contorno, desprazamento, unión, estirar por caixa, separar muro, oco, volver unir, bloquear á reixa, crecer desde, medir desde, engadir un nivel debaixo, soterrado, comando de nivel, cotas de reixa, medir na planta, estilo de traballo, duplicar vista, copia propia, vista ligada, táboa de plumas, imprimir como se ve, informar como, escala de texto, importar svg, colocar na planta, colocar no modelo, collada, dae, kmz, google earth, scan to bim, carga de vento, sísmica, elementos finitos, panel de documentos, impresión en resina, novidades, o que hai de novo, notas de versión, rexistro de cambios, cambios, 0.8, 0.8.1, versión, novas funcionalidades, evacuación, persoas, colas, acústica, reverberación, resposta ao impulso, inundación, vento, terremoto, perigo, ciclo de vida, vida útil, ids, etiquetas, cuadros, mover, aliñar, distribuír, imaxe, fondo, muros a partir dun escaneado, emprazamento de civilcraft, paneis, estrutura, solar, fotovoltaica, dividir, vrf, fan coil, dimensionado de tubaxes, bandexa de cables, iluminancia, formigón, sísmica, comparar escaneado, epsg, proxección, documentos, modelo, carbono, custo, energyplus, motor de render, abrir en, usd, glb, unreal, desfacer, complementos, pcf, símbolos, plantas, calcar, plumas, cinta, navegador de proxecto, disposición
from: 5624fe88
---

Isto é o que cambiou na BimCraft 0.9, comparado coa 0.8.1. Os dous grandes temas son unha verdadeira ferramenta de muros e vistas que se comportan como esperan as persoas que veñen dos grandes programas BIM. Ao seu carón veñen a exportación Collada, asistentes que poden colocar dispositivos eléctricos, Scan to BIM, e análise de vento, sismo e elementos finitos na lapela {{ui:Análise}}.

## Novo

### Muros

- **Debuxar formas completas.** En {{ui:Debuxar}}, abra {{ui:Formas}} (ou escolla unha forma na lista Forma da fila Muro) para un rectángulo, un rectángulo xirado, un polígono de 3 a 64 lados, un arco por centro, un arco tanxente, muros sobre liñas escollidas, ou muros arredor dunha área pechada que prema no interior. Un rectángulo son catro muros con catro esquinas unidas e un paso de desfacer. Vexa [Formas de muros, división, desprazamento, estiramento e bloqueo](topic:wall-tools).
- **Definir antes de debuxar, cambiar despois.** A fila Muro ten {{ui:Desprazamento}} e {{ui:Unión}} (desmarque para debuxar muros exentos). Despois use {{ui:Desprazamento}}, {{ui:Estirar por caixa}} e {{ui:Aliñar e bloquear}} nos muros debuxados. Un muro movido ou estirado conserva as súas portas, xanelas e cotas. Cada receita é un paso de desfacer.
- **Cortar muros.** {{ui:Dividir}}, {{ui:Oco}}, {{ui:Extremos libres}}, {{ui:Eliminar segmento}} e {{ui:Volver unir}} cortan un muro nun clic ou onde outro muro o cruza. Un corte por unha porta recházase. Vexa [Formas de muros, división, desprazamento, estiramento e bloqueo](topic:wall-tools).
- **Bloquear muros a liñas de reixa.** Seleccione un muro ao longo dunha liña de reixa e marque {{ui:Bloquear á reixa}} en {{ui:Propiedades}}. Coa ferramenta Reixa activada, escriba unha distancia en {{ui:Mover por}} para unha liña escollida, e os muros bloqueados séguena nun paso de desfacer.
- **Dar forma a un muro.** Nas {{ui:Propiedades}} dun muro pode unir a súa parte superior ou base a unha cuberta, un piso ou un teito, editar o seu contorno de alzado, inclinalo, ou abrir unha abertura de muro sen porta nin xanela. Vexa [Forma do muro](topic:wall-shape).
- **A lonxitude indica que extremo se mantén.** {{ui:Crecer desde}} fixa se o inicio, o fin ou o centro se manteñen no seu sitio ao cambiar a lonxitude.
- **A lonxitude e a cota da planta coinciden.** {{ui:Medir desde}} (liña central, cara interior ou cara exterior) controla tanto o campo Lonxitude como as cotas de muro da planta. Comeza na liña central, así que as cotas de muro da planta agora len a liña central onde antes liían a cara exterior. Cámbiea na fila Muro, nas {{ui:Propiedades}} ou en {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Muros}}.

### Niveis, reixas e medición

- **Engadir un nivel debaixo.** {{ui:Engadir un nivel debaixo}} no panel {{ui:Niveis}} engade un nivel por baixo do máis baixo, tan alto como el, a unha elevación negativa (Nivel -1, Nivel -2). Nada máis se move. {{ui:Engadir niveis…}} acepta agora alturas negativas. Escribir LEVEL, LEVELS, STOREY ou STOREYS na liña de comandos abre {{ui:Engadir niveis…}}, e hai un botón {{ui:Niveis}} nos menús e nas pestanas da cinta. Vexa [Emprazamentos, edificios e niveis](topic:site-building-and-levels).
- **Cotas de reixa na planta.** Coa ferramenta {{ui:Reixa}} activada, marque {{ui:Cotas}} para debuxar o espazamento entre liñas veciñas e o tamaño total máis alá das burbullas, en cada planta de nivel. Vexa [Acotar unha reixa](topic:grid-dimensions).
- **Medir na planta.** {{ui:Medir}} no grupo {{ui:Debuxar}} dá unha distancia coas diferenzas X e Y entre dous clics. Non se garda nada no modelo. Vexa [Medir na planta](topic:measure-on-the-plan).
- **Cambiar varias columnas á vez.** Escolla columnas xunto cun muro e a lista mostra cada tipo con {{ui:Manter só estes}}. Un clic mantén as columnas e mostra os seus campos comúns.
- **Unha unidade de visualización en todas partes.** As coordenadas, medicións, seccións, escalas de folla, as cargas e resultados da lapela de marcos e o texto de Problemas seguen a unidade que escolla. As exportacións seguen en SI.

### Vistas, follas e impresión

- **Estilo de traballo.** {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Estilo de traballo}} escolle entre que cada vista teña as súas propias anotacións e táboas de plumas, ou que as comparta. Vexa [Estilo de traballo, vistas duplicadas, plumas en papel, Informar como e modelos](topic:working-style).
- **Duplicar unha vista.** Plantas, planos de teito, chamadas, alzados e seccións poden duplicarse como {{ui:Copia propia}} ou {{ui:Ligada}}; {{ui:Converter en copia propia}} fai independente unha ligada. Vexa [Estilo de traballo, vistas duplicadas, plumas en papel, Informar como e modelos](topic:working-style).
- **Imprimir como se ve, ou por unha táboa de plumas.** As substitucións de plumas gárdanse no IFC coa vista, e as follas e os PDF debuxanas como as ve a pantalla. O mesmo tema cobre as táboas de plumas.
- **Informar como.** {{ui:Informar como}} en {{ui:Propiedades}} escribe unha laxe debuxada como estrada, un muro como panel ou unha cuberta como rampa no IFC coa clase que escolla, e cóntaa así nos cuadros, Cantidades, Buscar, Cor por e Problemas.
- **Editar en alzados e seccións.** Debuxe e mova muros, aberturas, niveis, cotas e notas directamente nun alzado ou unha sección, con os seus propios tamaños de folla e cadros de títulos. Vexa [Editar en alzados e seccións](topic:edit-in-elevations).
- **Follas.** Cada folla pode ser horizontal ou vertical. Unha caixa {{ui:Escribir unha escala}} queda xunto á lista de escalas en cada vista colocada (1:64, 2:1, 1/4" = 1'). Pode arrastrar un debuxo colocado ou movelo cas teclas de frecha, e {{ui:Formatos…}} › {{ui:Importar SVG…}} convirte o seu propio deseño de folla nun cadro de títulos con campos escritos por folla.
- **Créditos de biblioteca nunha folla.** Un conxunto de debuxos con elementos de biblioteca recibe un cuadro de créditos de biblioteca que pode colocar en calquera folla. Vexa [Créditos de biblioteca](topic:library-credits).

### Biblioteca: colocar

- **Colocar segue á vista.** Na vista de planta, a Biblioteca mostra {{ui:Colocar na planta}}; en 3D mostra {{ui:Colocar no modelo}}; en Dividir mostra un botón partido con {{ui:Colocar na planta}} como acción principal. Ambas vías escriben o mesmo elemento IFC. Tamén pode arrastrar unha tarxeta da Biblioteca á planta ou á vista 3D; cunha pluma ou un dedo, prema e manteña, e logo arrastre. Vexa [Colocar desde a Biblioteca](topic:place-from-library).

### Ficheiros e asistentes

- **Collada e Google Earth.** {{ui:Collada}} na barra de ferramentas (menú Ficheiro nos estilos de menú) escribe un .dae, ou un .kmz colocado onde está o modelo no mapa. Vexa [Exportar o modelo como Collada ou para Google Earth](topic:collada).
- **Os asistentes poden colocar dispositivos eléctricos.** O seu asistente conectado ten novas ferramentas para engadir, listar, cambiar e eliminar dispositivos e para fixar luces. Os asistentes quedan desactivados ata que os active en {{ui:Configuración}}. Vexa [Deixe que un asistente de IA traballe co seu modelo](topic:assistants).
- **Scan to BIM (complemento).** Desactivado por defecto e precisa o complemento de Nubes de puntos. Propón pisos, muros, portas e xanelas a partir dun escaneado, co desvío medido de cada un; aceptar é un paso de desfacer.

### Análise

- **Datos de vento e sismo do emprazamento.** Na lapela {{ui:Análise}}: cargas de vento segundo ASCE 7-10 ou 7-16 para un edificio rixido pechado, cunha forza en cada piso como casos de carga, e datos sísmicos do emprazamento cunha consulta ao USGS e o espectro de deseño.
- **Seguimento estrutural e elementos finitos.** Comprobacións de formigón segundo ACI 318-19, forzas laterais equivalentes segundo ASCE 7-22, deriva de piso, lousas e muros como placas, e combinacións de cargas segundo ASCE 7 e EN 1990. O noso propio motor de elementos finitos fai cascas, tetraedros e análise modal. Vexa [Comprobar elementos de formigón e facer cargas sísmicas](topic:concrete-and-seismic) e [Análise de marcos](topic:frame-analysis).

### Outros complementos e documentos

- **Iluminación interior (complemento).** Coloca luminarias e escribe o lux como números en cada planta de nivel, cunha estimación de deslumbramento e un informe imprimible.
- **Panel de documentos.** {{ui:Ficheiro}} › {{ui:Documentos…}} ten retirada e devolución cun ficheiro de bloqueo, letras de revisión, estados de publicación e historial.
- **Rexións e aceiro.** Paquetes de debuxo e regulación de construción sudafricanos no complemento Regulacións, e 976 perfís de aceiro do Reino Unido na táboa de seccións compartida.
- **Complementos gratuítos de impresión en resina.** Cortador, soportes e balsa, proba de exposición, e os formatos de ficheiro GOO, SL1, Chitubox e Anycubic, todos desactivados por defecto.

## En todas as aplicacións

- Ao pasar o rato por un botón ou control aparece unha suxestión de Bootstrap.
- A suxestión de inicio nunha área de debuxo baleira ten un botón de pechar; BimCraft lembra que se pechou.
- A franxa de pestanas dun panel que non cabe agora se desplaza en vez de cortarse.
- Con un documento aberto, a pestana do navegador di «<documento> - BimCraft | CadCraft».
- En {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Disposición}} as disposicións son unha lista desplegable de opcións de dúas liñas.
- A lista de idiomas en {{ui:Configuración}} ofrece máis idiomas que na 0.8; os idiomas distintos do inglés son borradores automáticos.

## Corrixido

- **Mover funciona nas escaleiras,** e nas rampas, barandas, planos de cuberta, dispositivos exentos, imaxes e camiños.
- **Arrastrar un muro xa non deforma a sala.** A asa central move o muro en ángulo recto consigo mesmo, e as súas esquinas deslízanse ao longo dos muros unidos. Manteña premido {{key:Mod}} para o antigo movemento libre; {{ui:Poñer en cadrado}} devolve os 90 graos.
- **Un cambio de grosor ou de tipo nun nodo unido** agora mantén a esquina pechada nunha L, nunha T, nun nodo de tres muros e xunto a un muro curvo.
- **Mover ou copiar un grupo de espazos** mantén unidos fóra do grupo os muros unidos.
- **Redo mantén a identidade dunha cota de muro.**
- **Escoller un muro con Debuxar desactivado** xa non produce un erro nas Propiedades.
- **O render cae a WebGL** cando a GPU non pode arrancar, en vez de deterse.
- **A comprobación de EnergyPlus pode volver activarse.**
- **Documentos abre como un diálogo centrado.** {{key:Esc}}, a X ou un clic na páxina atenuada péchao.
- **Os botóns {{ui:Planta}}, {{ui:Dividir}} e {{ui:3D}} aparecen** en canto se abre un modelo, non só despois de activar Debuxar unha vez.

## Límites honestos

- Nada se imprimiu en hardware real. Os soportes de resina son novos e non se probaron.
- Os resultados de vento, sismo, formigón e elementos finitos son axudas de comprobación para un enxeñeiro, verificadas contra solucións pechadas, non contra un edificio real.
- Scan to BIM probouse cun edificio sintético, non cun escaneado real, e só atopa salas rectilíneas.
- Collada non se abriu aquí en Blender nin en Google Earth.
- A estimación de iluminación verificouse contra o noso propio trazado, non contra outros programas de iluminación.
- Os números sudafricanos non están verificados.
- Os estilos de unión de muros (tope, inglete, cuadrar) e a prioridade de capa non están feitos; as esquinas son en inglete.
- Os idiomas distintos do inglés son borradores automáticos.

Todo o demais está en [O que aínda non está feito](topic:not-built-yet). Os cambios anteriores están nas notas da 0.8 e da 0.8.1 máis abaixo nesta páxina.

## Anteriores: 0.8 e 0.8.1

Isto é o que cambiou na BimCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), comparado coa 0.7. A BimCraft pode agora responder preguntas sobre un edificio e probalo, con persoas, son, auga, vento e terremotos, e debuxalo con máis ferramentas; a 0.8.1 é unha versión de correccións.

### Novo

**Probar o edificio**

- **Persoas no edificio.** A sección {{ui:Persoas no edificio}} do panel esquerdo fai camiñar unha evacuación ou unha chegada dun día normal polas súas salas, portas e escaleiras. Ve as colas onde o edificio se estreita, o percorrido máis longo ata unha saída desde cada sala e canto tarda a última persoa. Marque {{ui:Pechada}} nunha porta para ver que cambia, e marque {{ui:Mostrar as persoas na vista 3D}} para ver os camiñantes. As conclusións van a Problemas. Un modelo aproximado de multitudes para decisións de deseño, non un certificado de protección contra incendios. Vexa [Facer camiñar as persoas polo edificio](topic:people-in-the-building).
- **Acústica de salas, e escoitala.** A sección {{ui:Acústica de cuartos}} dá a cada sala o seu tempo de reverberación por banda de oitava (Sabine e Eyring) a partir do seu tamaño e dos acabados que escolla, e cunha meta propia indica canta absorción cumpriría esa meta. {{ui:Reproducir neste cuarto}} reproduce unha voz, un aplauso, notas puntead as ou un ficheiro de son propio mediante unha resposta ao impulso calculada para a sala. As cifras de absorción son valores publicados típicos para que as substitúa. Vexa [Acústica de salas](topic:room-acoustics).
- **Reprodución de inundación, vento e terremoto.** {{ui:Reprodución de perigo}} reproduce auga subindo polas salas, presión do vento en cada piso e un terremoto que sacode os pisos, nunha planta ou un alzado cun control deslizante de tempo. Modelos simples cos seus supostos no panel; non é unha comprobación normativa. Vexa [Reproducir unha inundación, vento ou terremoto](topic:hazard-playback).
- **Que se desgasta en cincuenta anos.** {{ui:Vista do ciclo de vida}} lista as xanelas, portas, acabados e cuberta cunha vida útil cada un, os anos en que se substitúen e, cando escribe un custo por unidade, o custo por ano e o seu valor actual. {{ui:Gardar o programa (CSV)}} escríbeo. As vidas útiles son cifras de planificación. Vexa [Ver o que se desgasta en cincuenta anos](topic:life-cycle-view).
- **Comprobacións de formigón e sísmicas.** Os bloques {{ui:Elementos de formigón}} e {{ui:Cargas sísmicas}} da lapela {{ui:Análise}} comproban vigas e piares de formigón segundo ACI 318-19 e fan forzas laterais equivalentes segundo ASCE 7-22 en pisos rixidos, con deriva de piso. Para que un enxeñeiro as comprobe. Vexa [Comprobar elementos de formigón e facer cargas sísmicas](topic:concrete-and-seismic).

**Comprobar e informar**

- **Comprobar contra un IDS.** Cargue o ficheiro `.ids` que lle deu un cliente e vexa en Problemas cada elemento que non o cumpre, antes de entregar o IFC. Abra {{ui:Comprobar contra un IDS}} en {{ui:Comprobacións do modelo}}. Vexa [Comprobar un modelo contra o IDS dun cliente](topic:check-against-ids).
- **Etiquetas e cuadros.** Defina as súas propias etiquetas, póñaas en moitos elementos á vez e faga cuadros cuxas columnas, filtros e grupos as lean; as etiquetas gárdanse no IFC. Vexa [Etiquetas e cuadros](topic:tags-and-schedules).
- **Documentos a partir do modelo.** {{ui:Documentos do modelo}} enche unha plantilla de especificación a partir do IFC aberto e gárdaa como PDF, documento de Word ou Markdown. Vexa [Documentos a partir do modelo](topic:documents-from-the-model).
- **Comparar un escaneado co modelo.** Con unha nube de puntos aberta, {{ui:Comparar}} xulga cada elemento como construído, parcialmente construído, falta ou non alcanzado, e mostra a porcentaxe construída. Vexa [Comparar un escaneado co modelo](topic:compare-scan-with-model).
- **Carbono e custo.** O panel Carbono suma o carbono incorporado a partir dunha táboa de factores que pode editar, e o panel Custo reparte os prezos sobre o calendario 4D. Os factores que traen BimCraft son xenéricos e están marcados como sen comprobar. Vexa [Carbono incorporado e custo](topic:embodied-carbon-and-5d-cost).
- **Calquera proxección de mapa.** {{ui:Medir}} › {{ui:Sistema de coordenadas…}} acepta un número EPSG, unha zona UTM, un nome ou a súa propia definición de proxección. Vexa [Xeorreferenciar con calquera proxección](topic:georeference-any-projection).

**Debuxar e editar**

- **Mover, aliñar e distribuír.** Baixo {{ui:Compilación}}; {{key:Shift+M}} inicia Mover (o {{key:M}} simple segue sendo Medir). Mover copia á medida que avanza con {{key:C}}, cada paso é un desfacer, e viaxa nunha sesión de Live TeamWork. Vexa [Mover, copiar, aliñar e distribuír](topic:move-align-distribute).
- **Imaxes baixo a planta.** {{ui:Compilación}} › {{ui:Imaxe}} coloca un PNG, JPEG ou WebP baixo a planta dun nivel ou nun plano vertical. Fixe a escala con dous puntos, e mova, xire, esvaeza e bloquee a imaxe. Unha área copiada en MarkupCraft pégase á escala da súa folla. Vexa [Poñer unha imaxe baixo a planta](topic:pictures-as-backgrounds).
- **Muros a partir dun escaneado.** Con un escaneado aberto, os muros, portas e espazos chegan como propostas que vostede conserva ou rexeita unha a unha, nun paso de desfacer. Só se atopan muros en dúas direccións perpendiculares. Vexa [Converter un escaneado en muros](topic:scan-to-walls).
- **Calco, plumas e escaleira de esbozo.** {{ui:Calcar}} mostra outro nivel en trazos baixo a planta, {{ui:Plumas}} dá aos muros, portas e xanelas o seu propio grosor de liña nunha vista, e {{ui:Esbozar escaleira}} converte unha liña de paseo nunha escaleira. Ábrese unha malla Wavefront OBJ. Vexa [Calcar un nivel, plumas e unha escaleira a partir dun esbozo](topic:trace-pens-stairs-obj).
- **Edificios arredor dun enderezo.** Os edificios e a parcela que atopou Enderezo a emprazamento de CivilCraft chegan como suxestións; marque as que quere engadir. Vexa [Comezar desde o emprazamento de CivilCraft](topic:site-from-civilcraft).
- **Debuxos de paneis.** {{ui:Compilación}} › {{ui:Debuxos de paneis}} enmarca muros, lousas e cubertas en madeira ou aceiro lixeiro en perfil e garda unha lista de cortes en CSV e debuxos de taller nun PDF. Valores de partida, non un deseño estrutural. Vexa [Debuxos de paneis](topic:panel-drawings).
- **Paleta de símbolos e plantas.** {{ui:Compilación}} › {{ui:Paleta de símbolos}} atopa símbolos eléctricos e de fontanería polo nome; a fonte {{ui:Plantas}} da {{ui:Biblioteca}} lista unhas 400 plantas con símbolos de planta. Vexa [Paleta de símbolos](topic:symbol-palette) e [Colocar unha planta](topic:plant-list).

**Tubaxes, condutos e enerxía**

- **Dividido, VRF e fan coils.** Unidades interiores e exteriores coas súas conexións, e liñas de conexión dimensionadas a partir dunha táboa de valores típicos de exemplo que pode cambiar. Vexa [Dividido, VRF e fan coils](topic:split-vrf-fan-coils).
- **Cálculos.** O panel Cálculos comproba o dimensionado de tubaxes e condutos de subministración coa caída de presión, encamiña os cables por bandexas e condutos e amosa o seu enchemento, e calcula a iluminancia a partir de ficheiros IES ou EULUMDAT. Os valores por defecto están etiquetados; escriba os valores do seu código. Vexa [Cálculos de tubaxe, conduto, cable e luz](topic:mep-calculations).
- **Ficheiros PCF.** {{ui:Exportar PCF}} da ferramenta Tubaxe escribe os traxectos para programas de esforzo en tubaxes e isométricos, e un ficheiro PCF lido de novo debuxa a súa tubaxe. Vexa [Ficheiros de compoñentes de tubaxe](topic:piping-pcf).
- **Fotovoltaica.** Coloque conxuntos en cubertas ou no chan, sombreos a partir do modelo, estime a enerxía anual, comprobe as cadeas e cree os datos dun diagrama unifilar. O módulo de partida e as perdas son xenéricos. Vexa [Fotovoltaica](topic:solar-pv).
- **Ficheiro EnergyPlus.** O panel Comprobar con EnergyPlus escribe o modelo como un IDF para executalo no seu propio EnergyPlus. Executalo no navegador precisa unha compilación que vostede aloxe e cuxo enderezo escriba; a BimCraft non a inclúe. Vexa [Comprobar calefacción e refrixeración con EnergyPlus](topic:check-with-energyplus).

**Imaxes e ficheiros**

- **Escolla o motor de render.** {{ui:Render}} ten unha escolla de {{ui:Motor}}. Os nosos dous motores integrados (Rápido e Trazador de camiños) seguen sendo o defecto. **Abrir en** garda a escena como ficheiro USD ou glTF, e unha carpeta de proxecto Unreal como .zip; no CadCraft Studio un complemento pode engadir un motor. O complemento de Unreal que abre o proxecto non está publicado. Vexa [Escoller que programa debuxa a imaxe](topic:render-engines).
- **Desfacer en Studio.** Dentro de CadCraft Studio, BimCraft informa a Studio de cada paso terminado para que Studio poida desfacer o seu último paso na xanela que usou por último. Vexa [Desfacer entre aplicacións](topic:undo-across-apps).
- **Complementos no seu ficheiro.** Un IFC rexistra que complementos escribiron nel, e ofrece os que lle faltan ao abrilo. Vexa [Complementos no seu ficheiro](topic:add-ons-in-your-file).

**En todas as aplicacións**

- **Conecte a súa IA.** O seu propio asistente pode manexar a BimCraft a través da conexión de Studio e responder preguntas sobre o modelo, como que salas están baixo unha área dada. Studio non ten IA propia. Vexa [Deixe que un asistente de IA traballe co seu modelo](topic:assistants).
- **Filas da barra de ferramentas.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Filas da barra de ferramentas}} ofrece Envolver, 2 filas ou 1 fila; Envolver segue sendo o defecto.
- **Dispositivos de entrada.** A configuración de trackpad, pluma, rato 3D, mando e MIDI é compartida por todas as aplicacións.
- **Problemas e Live.** O panel de avisos e as sesións Live funcionan como antes, coas novas comprobacións de arriba alimentando Problemas.
- **Idiomas.** 54 idiomas, dez deles novos. Os distintos do inglés son borradores automáticos que aínda non leu un falante nativo; as topics de axuda son en gran parte en inglés.

### Corrixido na 0.8.1

- **Disposición de cinta + navegador de proxecto.** Inserir › Importar CAD, Inserir › Imaxe e Xestionar › Unidades do proxecto dicían «Aínda non está feito en BimCraft». Imaxe abre agora a ferramenta Imaxe, Importar CAD abre {{ui:Compilación}} › {{ui:Desde un debuxo…}} (DWG, DXF, PDF ou un escaneado), e Unidades do proxecto abre {{ui:Configuración}} › {{ui:Global}} › {{ui:Unidades}}. Mover e Aliñar executan as ferramentas Mover e Aliñar, Nivel abre {{ui:Engadir niveis…}}, Fases abre a sección de Fases de reforma, e Materiais abre a biblioteca de materiais.
- **Cadro de clases DWG.** Líase como tipo equivocado; corrixido en BimCraft e nas outras aplicacións que len DWG.
- **Idioma en tempo de execución.** Studio e as edicións empaquetadas poden cambiar de idioma sen reiniciar. Isto aínda non se probou en todas as plataformas; diga se o idioma non cambia.
- **Script de paquete de Archicad.** `archicad_bundle.py`, unha descarga aparte, agora atopa a ruta de Archicad, vixía a carpeta durante ata 20 segundos e volve intentalo xunto ao paquete.

### Non está nesta versión aínda

- **Axudas de seguridade e deseño.** Facer camiñar as persoas no edificio non ten un límite de distancia de percorrido por código de construción (vostede escribe o límite) e non se comprobou a man nun plano real. As cifras de acústica, ciclo de vida e perigo son valores de planificación, non unha comprobación normativa.
- **Escenarios climáticos e EnergyPlus.** Non hai escenarios climáticos integrados: pode cargar un ficheiro de escenario para a reprodución de inundación. A execución de EnergyPlus no navegador non forma parte desta versión.
- **Disposición da cinta.** Medición de materiais segue como «Non feito», porque BimCraft non ten lista de cantidades de materiais, e 54 ferramentas máis da cinta en gris non teñen aínda unha ferramenta de BimCraft detrás.
- **Asinatura e plataformas.** Os instaladores de Windows e o .dmg de macOS non están asinados, así que SmartScreen mostra {{ui:Máis información}}, despois {{ui:Executar igualmente}}, e macOS precisa botón dereito e logo {{ui:Abrir}}. A compilación para iPad e iPhone non se reconstruíu para a 0.8.1.
- **Probas de páxina real.** Algunhas probas máis antigas do navegador de BimCraft seguen fallando na nosa páxina de proba, como fallaban antes da 0.8.1.

Todo o demais está en [O que aínda non está feito](topic:not-built-yet). Os cambios anteriores están en [Novidades da versión 0.7](topic:whats-new-0-7).
