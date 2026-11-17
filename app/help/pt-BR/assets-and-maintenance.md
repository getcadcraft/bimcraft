---
title: Manter dados de recursos e um registro de manutenção no modelo
summary: Use o modelo IFC entregue para operar o edifício: fabricante, modelo, número de série, garantia e vida útil de equipamentos e instalações, e um registro da manutenção feita, tudo gravado no IFC.
keywords: entrega, certificado de conclusão, habite-se, como construído, pacote de entrega, recursos, cadastro de recursos, gestão de facilidades, fm, operação, manutenção, serviço, garantia, número de série, código de barras, fabricante, modelo, vida útil, cobie, gêmeo digital, vencido, a vencer, ordem de serviço
from: b84ac492
---

A aba {{ui:Recursos}} no painel direito transforma o modelo IFC aberto em um registro dos equipamentos do edifício. Tudo é gravado no próprio IFC, em conjuntos de propriedades e tarefas do próprio IFC, então o próximo programa que abrir o arquivo também os lê. Nada é enviado e nenhum servidor é necessário: salve o IFC para mantê-lo.

## O que é listado

- Equipamentos e instalações: mobiliário, louças sanitárias, luminárias, aparelhos, terminais de ar, válvulas, bombas, ventiladores, caldeiras, reservatórios, tomadas, quadros de distribuição, elevadores e outros elementos desse tipo, além de itens da biblioteca com dados de equipamento.
- Qualquer outro elemento que você **acompanhe**: selecione-o no modelo (uma porta, uma parede, uma bomba desenhada como objeto comum) e clique em {{ui:Acompanhar selecionados}}.
- Qualquer coisa que já tenha dados de recurso ou uma tarefa de manutenção, gravada aqui ou por outro programa.

Os vencidos aparecem primeiro, depois os que vencem em até 30 dias. Filtre por nome, etiqueta, fabricante, modelo ou número de série, por nível, ou marque {{ui:Somente vencidos ou a vencer em 30 dias}}.

## Dados do recurso

Clique em um recurso na lista (ou selecione-o no modelo) para abrir seus dados: fabricante, modelo, referência do modelo, número de série, código de barras, o dia em que foi instalado, o número da garantia e o início e o fim dela, e sua vida útil em anos. {{ui:Salvar os dados}} grava tudo em uma etapa ({{key:Mod+Z}} desfaz). Deixe uma caixa vazia para remover aquele valor.

## Documentos

Abaixo dos dados, {{ui:Documentos}} lista os manuais, garantias, fotos, certificados e desenhos vinculados ao recurso. Escolha o tipo, dê um título (ou deixe vazio: o nome do arquivo é usado) e informe onde ele está:

- um **endereço web** (`https://…`): ele ganha um link Abrir, que abre em uma nova aba;
- ou um **nome de arquivo ou caminho** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, uma pasta de rede): mantenha os arquivos ao lado do IFC, na mesma pasta ou em uma subpasta, para que os nomes continuem funcionando quando você entregar a pasta. O BimCraft mostra o nome; abra o arquivo a partir da pasta.

Os arquivos em si nunca são enviados nem copiados para o IFC: apenas o vínculo é gravado. Um endereço web com senha, e qualquer vínculo que não seja um endereço web nem um arquivo (como `javascript:`), é recusado. {{ui:Remover}} tira um documento do recurso (uma etapa; {{key:Mod+Z}} desfaz).

Documentos que outro programa colocou no elemento também aparecem na lista. Documentos no **tipo** do elemento aparecem em todos os elementos desse tipo e indicam isso; altere-os onde o tipo foi criado.

No IFC, cada documento é uma referência de documento IFC ligada ao elemento, com seu tipo mantido nessa ligação, tanto em IFC4 quanto em IFC2X3.

## O registro de manutenção

Abaixo dos documentos, {{ui:Registrar o trabalho feito}}: o dia em que foi feito, o trabalho, quem o fez, quando é o próximo vencimento e observações. Cada registro é uma etapa; {{ui:Editar}} e {{ui:Excluir}} o alteram depois. A data de próximo vencimento do registro mais recente decide se o recurso está vencido ou a vencer em breve.

## Como é mantido no IFC

- Fabricante e modelo em `Pset_ManufacturerTypeInformation`, número de série, código de barras e o dia da instalação em `Pset_ManufacturerOccurrence`, a garantia em `Pset_Warranty`, a vida útil em `Pset_ServiceLife`, no próprio elemento. Quando o tipo do elemento já traz fabricante ou modelo, eles aparecem até você digitar os seus.
- Cada registro de manutenção é uma **tarefa** IFC do tipo manutenção, ligada ao elemento, com suas datas (em IFC4 também como os próprios horários da tarefa) e um conjunto `CadCraft_Maintenance` com o dia, quem o fez e o próximo dia de vencimento.
- Valores que outro elemento compartilha são copiados primeiro: alterar um recurso nunca altera seus vizinhos.
- Em arquivos IFC2X3 mais antigos, as datas são gravadas como texto (AAAA-MM-DD); essa versão exige um registro de data separado, que o BimCraft não grava.

## Leituras de sensores

Abra {{ui:Valores de sensores}} e {{ui:Abrir leituras (CSV)…}} para trazer leituras exportadas de um sistema de gestão predial, de um datalogger ou de uma planilha:

- A **primeira coluna é a hora**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` ou segundos Unix. Uma hora sem fuso é lida no fuso horário do seu computador. Datas com o dia primeiro, como `23/10/2026`, não são lidas (são ambíguas); exporte datas ISO.
- **Cada outra coluna é um sensor**, com cabeçalho igual à **etiqueta**, ao **nome** ou ao **GlobalId** do seu recurso. Um cabeçalho que não corresponde a nenhum recurso, ou a mais de um, é listado e deixado de fora. Vírgulas, ponto e vírgula ou tabulações separam as colunas; com ponto e vírgula ou tabulações, uma vírgula decimal (`21,5`) também é lida.
- Horas ou valores que não podem ser lidos (uma palavra, uma unidade digitada na célula) são contados e deixados de fora, nunca adivinhados.

A leitura mais recente aparece na coluna {{ui:Leitura}} da lista e no bloco {{ui:Sensor}} do recurso, com um **gráfico** de todas as leituras (em celular, os gráficos só aparecem quando você toca em {{ui:Mostrar o gráfico}}). Defina um **limite inferior e superior** e uma unidade em um recurso e clique em {{ui:Salvar os limites}}: uma leitura fora deles sinaliza o recurso. Marque {{ui:Mostrar no modelo}} para pintar cada recurso pela sua leitura — azul abaixo do limite inferior, verde dentro dos limites, vermelho acima do limite superior e, para recursos sem limites, uma única escala de azul do menor ao maior valor lido — com a leitura como rótulo (até 60 rótulos, os sinalizados primeiro).

**As leituras ficam nesta aba do navegador**: não são salvas no IFC e não são enviadas a lugar nenhum; abra o CSV de novo na próxima vez. Os **limites são salvos no IFC** (um conjunto `CadCraft_Sensor` no elemento: Low, High, Unit), para que a próxima pessoa que abrir o arquivo veja as mesmas sinalizações.

## Leituras ao vivo

{{ui:Dados ao vivo}} lê valores à medida que acontecem, **diretamente deste navegador para o seu próprio sistema**. Nada passa pelo nosso servidor e nada é armazenado em outro lugar além desta aba do navegador. Nada se conecta quando um arquivo é aberto: somente {{ui:Conectar}} faz isso.

- **MQTT sobre WebSockets**: o endereço do listener WebSocket do seu broker, e um ou mais tópicos com `{tag}` onde entra a etiqueta do recurso, por exemplo `site/{tag}/temperature` (o BimCraft assina `site/+/temperature` e lê a etiqueta do tópico de cada mensagem). Tópicos sem `{tag}` nomeiam o próprio sensor. Uma mensagem é um número simples (`21.5`) ou JSON, como `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (defina {{ui:Campo do valor no JSON}} se o seu tiver outro nome).
- **Consultar um endereço (HTTP)**: um endereço web que seu sistema de gestão predial ou um pequeno script seu responde, consultado a cada tantos segundos (5 no mínimo). Ele pode responder com JSON indexado pela etiqueta (`{"AHU-1": 21.5}`), uma lista JSON (`[{"tag": "AHU-1", "value": 21.5}]`) ou um CSV de leituras como o acima. Se ele não responder, o BimCraft espera o dobro do tempo antes de consultar de novo, até cinco minutos.

Cada leitura vai para o recurso cuja etiqueta, nome ou GlobalId ela indica, exatamente como uma coluna de CSV; nomes que não correspondem a nenhum recurso são listados. As leituras se juntam a {{ui:Valores de sensores}}: a lista, os gráficos, os limites e as cores no modelo funcionam da mesma forma.

**Sua senha ou token** é digitado para uma conexão: ele é entregue à conexão e a caixa é esvaziada; nunca é salvo neste navegador nem no IFC. Um token é enviado como cabeçalho padrão `Authorization: Bearer`, e nenhum cookie é enviado.

{{ui:Guardar estas configurações no IFC}} grava o endereço, os tópicos, o campo do valor e a frequência de consulta no modelo (um conjunto `CadCraft_Feed` no projeto; não há campo para senha), para que a próxima pessoa que abrir o arquivo digite apenas o próprio login e clique em {{ui:Conectar}}. Não coloque senha ou chave no próprio endereço: um endereço com nome de usuário e senha é recusado.

:::note
**O que o seu broker ou endereço precisa.** Uma página de navegador só consegue falar com um servidor que permita:
- A página é segura (https), então o navegador só conecta a endereços `wss://` e `https://` — exceto no seu próprio computador (`localhost`), onde `ws://` e `http://` funcionam para testes.
- Um endereço HTTP precisa permitir requisições desta página (CORS: o cabeçalho `Access-Control-Allow-Origin`, e `Authorization` entre os cabeçalhos permitidos se você usar um token).
- A maioria dos brokers (Mosquitto, EMQX, HiveMQ e outros) oferece um listener WebSocket; ele costuma estar desligado até ser ativado. O BimCraft usa MQTT 3.1.1.
:::

**Não há alertas** quando o BimCraft está fechado: os limites sinalizam um recurso somente enquanto o modelo está aberto com uma fonte conectada. Monitorar um edifício o tempo todo exige um servidor, que o BimCraft não executa.

## Planilha COBie

**COBie** é a planilha de entrega que muitos proprietários e equipes de gestão solicitam (publicada pelo National BIM Standard nos EUA; BS 1192-4 no Reino Unido). Abra {{ui:Planilha COBie}} na aba:

- {{ui:Salvar como COBie (.xlsx)}} grava as abas do COBie 2.4 — Contact, Facility, Floor, Space, Type, Component, System, Job, Document e Attribute — a partir do modelo e dos dados de recursos: o edifício, seus níveis e ambientes (áreas a partir das quantidades do modelo), cada recurso como componente com seu número de série, dia de instalação, início da garantia, etiqueta e código de barras, seu tipo com fabricante, modelo, vida útil e duração da garantia, os sistemas a que pertence, o registro de manutenção como trabalhos e os documentos vinculados. Cada componente traz o GlobalId IFC do elemento. Digite seu e-mail para a coluna "created by" do COBie, ou deixe vazio (ela então diz n/a). Valores que o modelo não tem aparecem como **n/a**; as colunas de categoria trazem a classe IFC, não um código OmniClass.
- {{ui:Ler uma planilha COBie…}} lê uma planilha de volta, do BimCraft ou de outro programa, e **lista cada alteração primeiro**: qual recurso, qual valor, de que para que, e novos documentos. {{ui:Aplicar}} grava todas em uma etapa ({{key:Mod+Z}} desfaz). As linhas são associadas pelo GlobalId e depois pelo nome do componente. Linhas que não correspondem a nada no modelo são listadas, não adicionadas.

Uma planilha é tratada como não confiável: fórmulas nunca são lidas nem executadas (só o último valor salvo na célula), um valor que faria uma garantia terminar antes de começar e um vínculo de documento que não seja um endereço web nem um nome de arquivo são deixados de fora e contados, e pastas de trabalho muito grandes são recusadas. Os trabalhos do COBie são o trabalho planejado de um tipo, então são gravados, mas não lidos de volta. Na planilha que o BimCraft grava, texto que uma planilha poderia tomar por fórmula (começando com `=`, `+`, `-` ou `@`) é marcado como texto.

A pasta de trabalho é verificada em nossos testes com um leitor de planilhas independente; ela não passou por um validador COBie. Se uma equipe receptora usar um, informe-nos o que ele diz.

## Documentos de entrega

Os papéis entregues ao proprietário com o edifício concluído pertencem ao projeto, não a um recurso. Na aba {{ui:Recursos}}, abra {{ui:Documentos de entrega}}:

1. {{ui:Adicionar um documento}}, escolha o tipo (certificado de conclusão, habite-se, garantia, manual, desenhos como construídos, outro) e digite seu título, data de emissão, quem o emitiu e seu número de referência.
2. Diga onde ele está: um endereço web, um nome de arquivo mantido ao lado do IFC, ou {{ui:Anexar um arquivo}}.
3. {{ui:Adicionar à lista}}. {{ui:Editar}} e {{ui:Remover}} alteram a lista; cada um é uma etapa que você pode desfazer.

{{ui:Gerar o pacote de entrega}} baixa um zip: uma página de capa listando cada documento, a mesma lista de uma planilha, a planilha COBie (os documentos estão na aba Document, como linhas sobre a Facility), o modelo e cada arquivo anexado. Um certificado de conclusão ou habite-se que ainda não esteja na lista é indicado na capa; o pacote é gerado mesmo assim.

O modelo do pacote é o **modelo como construído**: ele declara quais elementos foram medidos no local. Com ele, na pasta `as-built`: a declaração, uma lista de cada elemento com seu estado de verificação, o conjunto de desenhos como está agora em um único PDF (os desenhos como construídos), e o histórico de alterações dos desenhos quando o modelo tem conjuntos emitidos. Veja [Marcar elementos como verificados ou conferidos em campo](topic:verification).

- No arquivo IFC, cada documento é um IfcDocumentInformation ligado ao projeto (IfcRelAssociatesDocument), com seu título, referência, data, emissor e local, para que outros programas o listem.
- Um arquivo anexado é registrado pelo nome, tamanho e SHA-256. Para manter o próprio arquivo junto ao projeto, use {{ui:Salvar o projeto como pacote}} (um .ccbundle contém o modelo e os arquivos anexados; ao abri-lo, eles são devolvidos, cada um conferido com seu registro). Um salvamento comum pergunta qual você quer.
- Um .ifc simples mantém o registro, não o arquivo: depois de abri-lo, use {{ui:Anexe o arquivo de novo}}. O mesmo arquivo é reconhecido; um arquivo diferente substitui o registro.

## CSV

{{ui:CSV}} salva cada recurso com seus dados, cada registro de manutenção e cada documento, uma linha por item, para uma planilha ou outro programa de manutenção.

:::note
Não implementado: um serviço hospedado que mantenha leituras e envie alertas com o BimCraft fechado, e a leitura de volta dos trabalhos do COBie. Veja [Ainda não implementado](topic:not-built-yet).
:::
