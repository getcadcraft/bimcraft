---
title: Guardar dados de equipamentos e um registo de manutenção no modelo
summary: Use o modelo IFC entregue para gerir o edifício em utilização: fabricante, modelo, número de série, garantia e vida útil dos equipamentos e aparelhos, e um registo das manutenções feitas, tudo escrito no IFC.
keywords: entrega, certificado de conclusão, certificado de utilização, as-built, pacote de entrega, recursos, registo de equipamentos, gestão de instalações, fm, operação, manutenção, serviço, garantia, número de série, código de barras, fabricante, modelo, vida útil, cobie, gémeo digital, em atraso, prazo, ordem de trabalho
from: b84ac492
---

O separador {{ui:Recursos}} no painel direito transforma o modelo IFC aberto num registo dos equipamentos do edifício. Tudo fica escrito no próprio IFC, em conjuntos de propriedades e tarefas do próprio IFC, para que o próximo programa que abra o ficheiro também o leia. Nada é enviado e não é preciso nenhum servidor: guarde o IFC para o manter.

## O que é listado

- Equipamentos e aparelhos: mobiliário, aparelhos sanitários, luminárias, eletrodomésticos, terminais de ar, válvulas, bombas, ventiladores, caldeiras, depósitos, tomadas, quadros elétricos, elevadores e outros elementos semelhantes, e itens da biblioteca com dados de equipamento.
- Qualquer outro elemento que **acompanhe**: escolha-o no modelo (uma porta, uma parede, uma bomba desenhada como objeto simples) e clique em {{ui:Acompanhar selecionados}}.
- Qualquer elemento que já tenha dados de equipamento ou uma tarefa de manutenção, escritos aqui ou por outro programa.

Primeiro aparecem os itens em atraso, depois os que vencem nos próximos 30 dias. Filtre por nome, etiqueta, fabricante, modelo ou número de série, por nível, ou marque {{ui:Só em atraso ou com prazo nos próximos 30 dias}}.

## Dados do equipamento

Clique num equipamento na lista (ou selecione-o no modelo) para abrir os seus dados: fabricante, modelo, referência do modelo, número de série, código de barras, data de instalação, número da garantia e respetivos início e fim, e a sua vida útil em anos. {{ui:Guardar os dados}} escreve-os num único passo ({{key:Mod+Z}} anula-o). Deixe uma caixa vazia para remover esse valor.

## Documentos

Por baixo dos dados, {{ui:Documentos}} lista os manuais, garantias, fotografias, certificados e desenhos associados ao equipamento. Escolha o tipo, dê-lhe um título (ou deixe-o vazio: usa-se o nome do ficheiro) e indique onde está:

- um **endereço Web** (`https://…`): fica com uma ligação Abrir, que abre num novo separador;
- ou um **nome ou caminho de ficheiro** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, uma partilha de rede): mantenha os ficheiros ao lado do IFC, na mesma pasta ou numa subpasta, para que os nomes continuem a funcionar quando entregar a pasta. O BimCraft mostra o nome; abra o ficheiro a partir da pasta.

Os próprios ficheiros nunca são enviados nem copiados para o IFC: só a ligação é escrita. Um endereço Web com palavra-passe, e qualquer ligação que não seja um endereço Web nem um ficheiro (como `javascript:`), são recusados. {{ui:Remover}} retira um documento do equipamento (num só passo; {{key:Mod+Z}} anula-o).

Os documentos que outro programa colocou no elemento também são listados. Os documentos do **tipo** do elemento aparecem em todos os elementos desse tipo e isso é indicado; altere-os onde o tipo foi criado.

No IFC, cada documento é uma referência de documento IFC associada ao elemento, com o seu tipo guardado nessa associação, tanto em IFC4 como em IFC2X3.

## O registo de manutenção

Por baixo dos documentos, {{ui:Registar trabalho feito}}: o dia em que foi feito, o trabalho, quem o fez, quando é o próximo prazo e notas. Cada registo é um passo; {{ui:Editar}} e {{ui:Eliminar}} alteram-no depois. A data do próximo prazo do registo mais recente decide se o equipamento está em atraso ou perto do prazo.

## Como fica guardado no IFC

- Fabricante e modelo em `Pset_ManufacturerTypeInformation`, número de série, código de barras e o dia de instalação em `Pset_ManufacturerOccurrence`, a garantia em `Pset_Warranty`, a vida útil em `Pset_ServiceLife`, no próprio elemento. Quando o tipo do elemento já tem um fabricante ou modelo, este aparece até escrever o seu próprio.
- Cada entrada de manutenção é uma **tarefa** IFC do tipo manutenção, associada ao elemento, com as suas datas (em IFC4 também como os próprios horários da tarefa) e um conjunto `CadCraft_Maintenance` com o dia, quem o fez e o dia do próximo prazo.
- Os valores que outro elemento partilha são copiados primeiro: alterar um equipamento nunca altera os vizinhos.
- Nos ficheiros IFC2X3 mais antigos, as datas são escritas como texto (YYYY-MM-DD); essa versão exige ali um registo de data à parte, que o BimCraft não escreve.

## Leituras de sensores

Abra {{ui:Valores dos sensores}} e {{ui:Abrir leituras (CSV)…}} para importar leituras exportadas de um sistema de gestão do edifício, de um registador de dados ou de uma folha de cálculo:

- A **primeira coluna é a hora**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` ou segundos Unix. Uma hora sem fuso horário é lida no fuso horário do seu computador. As datas com o dia primeiro, como `23/10/2026`, não são lidas (são ambíguas); exporte datas em formato ISO.
- **Cada outra coluna é um sensor**, identificado pela **etiqueta**, pelo **nome** ou pelo **GlobalId** do equipamento. Um cabeçalho que não corresponde a nenhum equipamento, ou a mais do que um, é listado e deixado de fora. Vírgulas, pontos e vírgula ou tabulações separam as colunas; com pontos e vírgula ou tabulações, uma vírgula decimal (`21,5`) também é lida.
- Horas ou valores que não são lidos (uma palavra, uma unidade escrita na célula) são contados e deixados de fora, nunca estimados.

A leitura mais recente aparece na coluna {{ui:Leitura}} da lista e no bloco {{ui:Sensor}} do equipamento, com um **gráfico** de todas as leituras (num telemóvel, os gráficos ficam à espera até tocar em {{ui:Mostrar o gráfico}}). Defina um **limite inferior e superior** e uma unidade num equipamento e clique em {{ui:Guardar os limites}}: uma leitura fora deles assinala o equipamento. Marque {{ui:Mostrar no modelo}} para pintar cada equipamento conforme a sua leitura — azul abaixo do limite inferior, verde dentro dos limites, vermelho acima do limite superior e, para os equipamentos sem limites, uma única escala de azul do valor mais baixo ao mais alto — com a leitura como etiqueta (até 60 etiquetas, primeiro as assinaladas).

**As leituras ficam neste separador do navegador**: não são guardadas no IFC nem enviadas para lado nenhum; abra o CSV de novo da próxima vez. Os **limites são guardados no IFC** (um conjunto `CadCraft_Sensor` no elemento: Low, High, Unit), para que a pessoa seguinte que abra o ficheiro veja as mesmas assinalações.

## Leituras em tempo real

{{ui:Dados em direto}} lê valores à medida que acontecem, **diretamente deste navegador para o seu próprio sistema**. Nada passa pelo nosso servidor e nada fica guardado em lado nenhum, a não ser no separador do navegador. Nada se liga quando um ficheiro abre: só {{ui:Ligar}} o faz.

- **MQTT sobre WebSockets**: o endereço do ouvinte WebSocket do seu broker (`wss://broker.example.com:8884/mqtt`), e um ou mais tópicos com `{tag}` onde deve ir a etiqueta do equipamento, por exemplo `site/{tag}/temperature` (o BimCraft subscreve `site/+/temperature` e lê a etiqueta do tópico de cada mensagem). Os tópicos sem `{tag}` identificam o próprio sensor. Uma mensagem é um número simples (`21.5`) ou JSON como `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (defina {{ui:Campo do valor no JSON}} se o seu tiver outro nome).
- **Pedir a um endereço (HTTP)**: um endereço Web que o seu sistema de gestão do edifício ou um pequeno script seu responde, pedido de alguns em alguns segundos (5 no mínimo). Pode responder com JSON por etiqueta (`{"AHU-1": 21.5}`), uma lista JSON (`[{"tag": "AHU-1", "value": 21.5}]`), ou um CSV de leituras como o acima. Se não responder, o BimCraft espera o dobro do tempo antes de voltar a pedir, até cinco minutos.

Cada leitura vai para o equipamento cuja etiqueta, nome ou GlobalId indica, exatamente como faria uma coluna do CSV; os nomes que não correspondem a nenhum equipamento são listados. As leituras juntam-se a {{ui:Valores dos sensores}}: a lista, os gráficos, os limites e as cores no modelo funcionam da mesma forma.

**A sua palavra-passe ou o seu token** é escrito apenas para uma ligação: é entregue à ligação e a caixa fica vazia; nunca é guardado neste navegador nem no IFC. Um token segue num cabeçalho `Authorization: Bearer` padrão, e não são enviados cookies.

{{ui:Manter estas definições no IFC}} escreve no modelo o endereço, os tópicos, o campo do valor e a frequência dos pedidos (um conjunto `CadCraft_Feed` no projeto; não há campo para palavra-passe), para que a pessoa seguinte que abra o ficheiro só introduza as suas credenciais e clique em {{ui:Ligar}}. Não coloque uma palavra-passe nem uma chave de acesso no próprio endereço: um endereço com nome de utilizador e palavra-passe é recusado.

:::note
**O que o seu broker ou endereço precisa.** Uma página do navegador só pode falar com um servidor que o permita:
- A página é segura (https), por isso o navegador só se liga a endereços `wss://` e `https://` — exceto no seu próprio computador (`localhost`), onde `ws://` e `http://` funcionam para testes.
- Um endereço HTTP tem de permitir pedidos desta página (CORS: o cabeçalho `Access-Control-Allow-Origin`, e `Authorization` entre os cabeçalhos permitidos se usar um token).
- A maioria dos brokers (Mosquitto, EMQX, HiveMQ e outros) oferece um ouvinte WebSocket; muitas vezes está desligado até ser ativado. O BimCraft usa MQTT 3.1.1.
:::

Não há **alertas** quando o BimCraft está fechado: os limites assinalam um equipamento enquanto o modelo estiver aberto com uma fonte de dados ligada. Vigiar um edifício às 24 horas do dia exige um servidor, que o BimCraft não executa.

## Folha de cálculo COBie

**COBie** é a folha de cálculo de entrega que muitos donos de obra e equipas de gestão de instalações pedem (publicada pelo National BIM Standard nos EUA; BS 1192-4 no Reino Unido). Abra {{ui:Folha de cálculo COBie}} no separador:

- {{ui:Guardar como COBie (.xlsx)}} escreve as folhas COBie 2.4 — Contact, Facility, Floor, Space, Type, Component, System, Job, Document e Attribute — a partir do modelo e dos dados dos equipamentos: o edifício, os seus níveis e compartimentos (áreas a partir das quantidades do modelo), cada equipamento como componente com o seu número de série, dia de instalação, início da garantia, etiqueta e código de barras, o seu tipo com fabricante, modelo, vida útil e duração da garantia, os sistemas a que pertence, o registo de manutenção como trabalhos e os documentos associados. Cada componente tem o GlobalId IFC do elemento. Escreva o seu e-mail para a coluna "created by" do COBie, ou deixe-a vazia (fica então n/a). Os valores que o modelo não tem indicam **n/a**; as colunas de categoria têm a classe IFC, não um código OmniClass.
- {{ui:Ler uma folha de cálculo COBie…}} lê uma de volta, do BimCraft ou de outro programa, e **lista primeiro todas as alterações**: que equipamento, que valor, de quê para quê, e os novos documentos. {{ui:Aplicar}} escreve-as todas num só passo ({{key:Mod+Z}} anula-o). As linhas são associadas pelo GlobalId e depois pelo nome do componente. As linhas que não correspondem a nada no modelo são listadas, não acrescentadas.

Uma folha de cálculo é tratada como não fiável: as fórmulas nunca são lidas nem executadas (apenas o valor guardado por último na célula), um valor que faria uma garantia acabar antes de começar e uma ligação de documento que não seja um endereço Web nem um nome de ficheiro são deixados de fora e contados, e os livros muito grandes são recusados. Os trabalhos do COBie são o trabalho planeado de um tipo, por isso são escritos mas não lidos de volta. Na folha de cálculo que o BimCraft escreve, o texto que uma folha de cálculo poderia tomar por fórmula (começando por `=`, `+`, `-` ou `@`) fica marcado como texto.

O livro é verificado nos nossos testes com um leitor de folhas de cálculo independente; não passou por um validador COBie. Se uma equipa recetora o executar, o resultado é bem-vindo.

## Documentos de entrega

Os documentos que seguem para o dono de obra com o edifício concluído pertencem ao projeto, não a um só equipamento. No separador {{ui:Recursos}}, abra {{ui:Documentos de entrega}}:

1. {{ui:Adicionar um documento}}, escolha o tipo (certificado de conclusão, certificado de utilização, garantia, manual, desenhos as-built, outro), e escreva o título, a data de emissão, quem o emitiu e o número de referência.
2. Indique onde está: um endereço Web, um nome de ficheiro guardado ao lado do IFC, ou {{ui:Anexar um ficheiro}}.
3. {{ui:Adicionar à lista}}. {{ui:Editar}} e {{ui:Remover}} alteram a lista; cada um é um passo que pode anular.

{{ui:Criar o pacote de entrega}} transfere um ficheiro zip: uma página de rosto com todos os documentos, a mesma lista de uma folha de cálculo, o livro COBie (os documentos estão na sua folha Document, como linhas sobre a Facility), o modelo e cada ficheiro anexado. Um certificado de conclusão ou de utilização que ainda não esteja na lista é indicado na página de rosto; o pacote é criado na mesma.

O modelo no pacote é o **modelo as-built**: indica que elementos foram medidos em obra. Com ele, na pasta `as-built`: a declaração, uma lista de todos os elementos com o seu estado de verificação, o conjunto de desenhos tal como está agora num único PDF (os desenhos as-built), e o registo de alterações dos desenhos quando o modelo tiver emitido conjuntos. Veja [Marcar elementos como verificados ou verificados em obra](topic:verification).

- No ficheiro IFC, cada documento é um IfcDocumentInformation associado ao projeto (IfcRelAssociatesDocument), com o seu título, referência, data, emitente e local, para que outros programas o listem.
- Um ficheiro anexado é registado pelo nome, tamanho e SHA-256. Para guardar o próprio ficheiro com o projeto, use {{ui:Guardar o projeto como pacote}} (um .ccbundle contém o modelo e os ficheiros anexados; ao abri-lo, eles voltam, cada um verificado contra o seu registo). Uma gravação normal pergunta qual das duas quer.
- Um .ifc simples guarda o registo, não o ficheiro: depois de o abrir, use {{ui:Anexar o ficheiro de novo}}. O mesmo ficheiro é reconhecido; um ficheiro diferente substitui o registo.

## CSV

{{ui:CSV}} guarda cada equipamento com os seus dados, cada entrada de manutenção e cada documento, uma linha de cada, para uma folha de cálculo ou outro programa de manutenção.

:::note
Ainda não implementado: um serviço alojado que guarde leituras e envie alertas com o BimCraft fechado, e a leitura de volta dos trabalhos do COBie. Veja [Ainda não implementado](topic:not-built-yet).
:::
