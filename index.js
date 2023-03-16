
const qtdCarrinho = document.getElementById("numero-carrinho");
qtdCarrinho.innerText = window.localStorage.getItem("qtdCarrinho");


let produtos = [
    {
        nome: "Fotopolimerizador e Clareador Emitter A Fit",
        descricao: `Fotopolimerizador Emitter A Fit
        Temporizador para Polimerização e Clareamento: 5, 10 e 20 segundos.
        Com bip sonoro indicativo a cada 5 segundos e no final da operação.
        Tempo máximo de uso contínuo: 300 segundos.
        Profundidade de polimerização de 6mm.
        Led indicativo com bip sonoro do tempo decrescente.
        Bivolt automático 100V – 240V.
        Frequência: 50/60 Hz.
        Corpo da caneta constituído em ABS.
        Peça de mão anatômica para melhor manuseio.
        Tempo de uso com carga total – 120 minutos.
        Silencioso, pois não necessita de ventilação forçada.
        Radiômetro interno automático: Controla eletronicamente a potência de luz.
        Ponteira de fotopolimerização confeccionada em fibra óptica orientada (sem fuga de luz), autoclavável a 134ºC e com giro de 360º.
        Sistema stand by. Desliga automaticamente após 2 minutos sem utilização.
        Garantia: 12 meses.
        Registro ANVISA: 80354800012.
        
        Informações Técnicas
        Comprimento sem a ponteira: 16,5 cm.
        Peso da peça de mão: 0,100 Kg.
        Peso bruto com embalagem: 0,438 Kg.
        Comprimento de onda: 420 a 480 nm.
        Emissor de luz: Led (light emiting diode) - Luz Azul.
        Bateria: 3,7 V - 1400 mA.
        Potência de luz: 1250 mW/cm².`,
        preco: 778,
        marca: "Schuster",
        img: "img/produtos/1.png",
        id: 1
    },
    {
        nome: "Cavitador Cavflex 6000",
        descricao: `* Peça de mão confeccionada com materiais de alta qualidade. 
        * Possui corpo construído em alumínio cromado o que garante leveza ao produto. 
        * Seu corpo possui poucas linhas e excelente design proporcionando ergonomia, e facilidade na assepsia.
        * Instrumento autoclavável a 135 ºC.
        * O Cavitador Sônico CAVFLEX 6000 é um instrumento de mão utilizado no desgaste e remoção de tártaro, na profilaxia dental, na remoção de placas e cálculos supra e subgengivais, na remoção e diminuição do biofilme mineralizado e não mineralizado, entre outros. 
        * Foi projetado para ser utilizado por profissionais qualificados em Odontologia.
        * É de confortável manuseio, pois além de ergométrico, também possui peso reduzido, alta potência e baixo nível de ruído.
        * Movimento elíptico da ponta, muito eficiente na remoção de tártaros.
        * O desenho estilizado, seu cabo anatômico e seu baixo peso reduzem o cansaço em tratamentos longos.
        * O sistema de refrigeração proporciona à superfície a ser tratada uma temperatura amena e constante, sem causar danos ao inserto ou área tratada.
        * Fácil instalação.
        * O Cavitador Sônico CAVFLEX 6000 é um dispositivo que possui ponta que oscila (freqüência de 3000-8000 Hz) devido à passagem de ar comprimido (pressão de ar: 2,46Kg/cm2 = 35 lbs psi) em seu sistema transdutor. 
        * Seu encaixe ao equipo se dá através do modelo de conexão borden.
        * O corpo do Cavflex 6000 possui diâmetro de 16.5mm e seu comprimento total (sem ponta) é de aproximadamente 116mm “borden’’ e 122mm "midwest’’.
        * Garantia: 1 ano.`,
        preco: 967,
        marca: "Dentflex",
        img: "img/produtos/2.png",
        id: 2
    },
    {
        nome: "Ultrassom Portátil Soniclax BP Led",
        descricao: `• Reservatório de líquido irrigante removível.
        • Prático sistema de encaixe do reservatório.
        • Conta com chave geral na parte de trás do equipamento.
        • Pedal de acionamento único.
        • Painel sensível e preciso que permite ajuste da potência e do fluxo de refrigeração.
        • Permite atuação de procedimentos sem o uso de refrigeração, como: condensação de amálgama, cimentação de onlays/inlays.
        • Alta frequência na ponta ativa.
        • Ajuste de potência do ultrassom linear entre 0% e 100%.
        • Conta com sugestão de regularem de potência conforme modo de uso (Geral, Endo e Perio).
        • Oferece um processo de troca de líquidos seguro e simples.
        • Acompanha reservatório de líquidos.
        • Bomba Peristáltica que faz a irrigação até a mangueira.
        • Grande variação do fluxo de água ou do líquido irrigante possibilitando uma regulagem precisa.
        • Transdutor do ultrassom piezoelétrico através de pastilhas cerâmicas com frequência de 32.000Hz estabilizado eletronicamente.
        • Caneta de ultrassom com luz de LED para melhor visualização do campo de trabalho.
        • Capa da caneta de ultrassom confeccionada em silicone, removível e autoclavável.
        
        Informações Técnicas:
        • Dimensões aproximadas (A x C x L): 24,0 x 24,0 x 21,8 cm.
        • Altura com reservatório da bomba peristáltica: 13,5cm.
        • Peso líquido aproximado: 2,40 Kg.
        • Volume do reservatório da bomba peristáltica: 500ml.
        • Frequência do ultrassom: 32.000 Hz.
        • Alimentação: Bivolt 127V / 220V.
        • Frequência: 50/60 Hz.
        • Fusível: 1A 127V / 220V.
        • Potência: 60 VA.
        • Consumo: 0,45A.
        • Garantia pelo fabricante:
        - 03 meses: Acessórios.
        - 06 meses: Placa eletrônica, válvulas, bobinas, transformador, motor, bomba peristáltica, caneta de jato de bicarbonato, caneta de ultrassom, reservatório de pó profilático, reservatório de liquido, micro sitch.
        - 12 meses - Demais itens.
        • Registro ANVISA: 80354800006.`,
        preco: 3196,
        marca: "Schuster",
        img: "img/produtos/3.png",
        id: 3
    },
    {
        nome: "Ultrassom Scaler Gold Line ",
        descricao: `* Peso Bruto: 135g.
        * Conexão Borden.
        * Pressão Ar: 30 PSI.
        * Consumo Ar: 10-26 1/min.
        * Nível do Som: 66 dB.
        * Frequência: 2.300 – 8.000 Hz.
        * Dimensões: 114,3mm (Comprimento) x 17,80mm (Diâmetro).
        * Cor: Azul.
        * Registro Anvisa: 80122160005.
        * Garantia: 12 meses.`,
        preco: 1071,
        marca: "Essence Dental",
        img: "img/produtos/4.png",
        id: 4
    },
    {
        nome: "Ultrassom Advance 1 Analógico",
        descricao: `* Ajuste fino do fluxo de água. 
        * Design das ponteiras que proporcionam eficácia na remoção de materiais. 
        * Caneta estabilizada eletronicamente para maior estabilidade e menor ruído.  
        * Peça de mão removível e autoclavável. 
        * 10 níveis de ajuste de potência. 
        * Jato preciso. 
        * Caneta desmontável. 
        * Garantia: 12 meses. 
        * Registro ANVISA: 80676920025. 
        
        Informações técnicas 
        * Tensão elétrica: 110-220V (automático). 
        * Frequência: 50/60Hz. 
        * Pressão de água: 0,1bar ~ 5bar. 
        * Modos de operação: Scaller. 
        * Potência máxima: 30W. 
        * Peso da unidade principal: 0,65 Kg. 
        * Peso aproximado da fonte de alimentação: 0,3 Kg. 
        * Dimensões da unidade principal aproximadas: 175 x 145 x 81mm.`,
        preco: 2382,
        marca: "Microdont",
        img: "img/produtos/5.png",
        id: 5
    },
    {
        nome: "Caneta Ultrassônica Completa SW Surgery/SW Surgey II Led",
        descricao: `"* A caneta do ultrassom cirúrgico SW Surgery faz parte da ampla linha de acessórios dos equipamentos Schuster.
        * Com iluminação Led para facilitar a visualização do campo de trabalho.
        * Possui capa em silicone autoclavável até 135°C.
        * Compatibilidade: SW Sugery e SW Sugery II Led."`,
        preco: 7.964,
        marca: "Schuster",
        img: "img/produtos/6.png",
        id: 6
    },
    {
        nome: "Forno Magma 220-240V",
        descricao: `"Vantagens

        * Calor uniforme na mufla do forno devido ao aquecimento dos quatro lados da mufla.
        * Alta velocidade de aquecimento: Em apenas 60 minutos até 900°C.
        * Capacidade de armazenar até 99 programas em sua memória + 1 programa para materiais de revestimento rápidos.
        
        Dados Técnicos
        
        * Referência: 23000500.
        * Tensão de rede admissível: 220-240V.
        * Frequência de rede admissível: 50/60Hz.
        * Potência absorvida: 1900w.
        * Fusível de entrada para rede: 12 A(T).
        * Gama de temperaturas: 0 – 1100°C. 30 – 2010°F.
        * Velocidade de aquecimento programável: 0 – 9°C/min. 0 – 17°F/min.
        * Número de programas escalonados programáveis: 99.
        * Número de programas rápidos Speed: 1.
        * Volume (da mufla de aquecimento): 3,45 l. 0.91 gal.
        * Tipo de sensor térmico: PtRh-Pt.
        * Dimensões (LxAxP) (inclui alça e chaminé): 430x500x440mm.
        * Dimensões mufla do forno (LxAxP): 160x120x180mm.
        * Peso: 30Kg.
        * Garantia: 3 anos contra defeito de fabricação."`,
        preco: 35.518,
        marca: "Renfert",
        img: "img/produtos/7.png",
        id: 7
    },
    {
        nome: "Forno para Cerâmica Phoenix com Bomba de Vácuo",
        descricao: `"* Acompanha bomba de vácuo.
        * O forno de porcelana e metalocerâmica é a solução ideal e confiável para você que busca um forno com qualidade no procedimento de queima impressionante e precisa de um forno de alta produtividade.
        - Compacto em seu tamanho e possui grande performance.
        - É um forno que trará resultados, agilidade e precisão durante muitos anos de trabalho.
        
        Funções da câmara de porcelana:
        - O programa de queima pode ser definido como modo de curva única ou modo hiperbólico, o modo hiperbólico fornece um processo completo de cristalização de cerâmica para cristalização de dissilicato de lítio.
        - Função de ajuste automático de temperatura de alta qualidade, para garantir que o erro real de temperatura dentro de +/- 1 graus.
        - Mufla espiral de quartzo.
        - Calibração automática de temperatura antes de cada procedimento de queima.
        - Plataforma de baixo ruído, com velocidade programável.
        - Tela de toque de cor verdadeira, fácil de operar.
        - 90 programas personalizados e programas incorporados.
        - Indicação de status.
        
        Temperatura máxima:
        - Possui a temperatura máxima de 1200°C, podendo ser mantido nessa temperatura por até 2 horas, aumentando a temperatura em 200° por minuto, com faixa de operação em 50/60HZ.
        
        Posição da plataforma:
        - Iniciando o programa, na etapa pré-seca, a bandeja vai subir duas vezes, este parâmetro de reboque é muito útil para vapor pré-evaporação, ajustado de acordo com a experiência prática necessária.
        
        Ventilação e resfriamento:
        - O dispositivo é equipado com um ventilador. Ativação, desativação do ventilador um controle automático. O ventilador evita o aquecimento excessivo do dispositivo e contribui para sua segurança operacional geral.
        
        Bomba de vácuo inclusa:
        - 250W de potência.
        - 63L/min de sucção.
        - 1650rpm/60Hz.
        - Vácuo máximo 745mmHg.
        - 51dB de ruido máximo (super silenciosa).
        
        Outras Informações:
        - Voltagem: 220V.
        
        Especificações técnicas:
        - Tamanho do produto: 27x36x53cm.
        - Medida utilizável (câmara de queima): 9cm (3.5”).
        - Peso líquido: 20Kg.
        - Peso total do pacote: 23,5Kg.
        - Garantia: 1 ano contra defeito de fábrica."`,
        preco: 22.500,
        marca: "OdontoMega",
        img: "img/produtos/8.png",
        id: 8
    },
    {
        nome: "Raio-X Timex 70E Pantográfico Parede",
        descricao: `"Certificados 
 
        * Produto com certificado INMETRO: Norma NBR IEC-60601-1, NBR IEC-60601-2-7 e NBR IEC-601-1-1-3, o que assegura que o equipamento seja produzido de acordo com as Normas Internacionais de Segurança.
        * Produto com Certificado CE: Comprova que o aparelho segue os mais rigorosos padrões europeus de qualidade.
        * Registro ANVISA: 10069210087.
        
         
        
        Especificações Técnicas
        
        * Peso líquido: 31kg. 
        * Peso bruto: 34,5 kg. 
        * Dimensões: 93 × 59 × 30 cm. 
        * Potência: 1200VA. 
        * Potência em stand by: 15VA.  
        * Nº de fases: Monofásico / Bifásico. 
        * Tensão do tubo:70kVp. 
        * Corrente do tubo: 7mA. 
        * Tempo de exposição: 60ms a 3,2s. 
        * Comprimento do cilindro: 200mm (300mm opcional). 
        * Colimador Retangular 30 x 40mm. 
        * Filtro equivalente em Alumínio: 1,5mm. 
        * Dimensão do foco do tubo: 0,8 x 0,8mm. 
        * Fator de resfriamento: 1:30s. 
        * Tipo de instalação: Fixo. "`,
        preco: 17.72090,
        marca: "Gnatus",
        img: "img/produtos/9.png",
        id: 9
    },
    {
        nome: "Raio X Timex 70E Parede",
        descricao: `"Informações Gerais 

        * Pintura na cor gelo com tratamento anticorrosivo.
        * Cabo de alimentação removível conforme padrão ABNT.
        * Facilita a substituição caso necessário.
        * Produto com certificado INMETRO – O Raios-X Timex 70E.
        * Norma NBR IEC-60601-1, NBR IEC-60601-2-7 e NBR IEC-601-1-1-3.
        * Assegura que o equipamento seja produzido de acordo com as Normas Internacionais de Segurança.
        * Produto com Certificado CE, comprovação de que o aparelho segue os mais rigorosos padrões europeus de qualidade.
        
         
        
        Informações Técnicas
        
        * Cabeçote com proteção térmica e câmara de compensação, que mantém a sua pressão interna estável e evita o superaquecimento e aumenta a vida útil do equipamento.
        * O ponto focal conta com correto dimensionamento, o que proporciona um feixe de radiação sem distorção.
        * A caixa de comando é fabricada em material especial, com suporte de fixação de controle, o que facilita o acoplamento e reduz os riscos de queda.
        * Seus braços são fabricados em aço com cantos arredondados e articuláveis nas posições vertical e horizontal.
        * Raio-X fixado à parede através de suporte, que garante total estabilitado do aparelho e proteção contra acidentes de manuseio.
        * Potência de entrada: 1200VA.
        * Tensão do tubo:70kVp.
        * Corrente do tubo: 7mA;
        * Tempo de exposição: 60ms a 3,2s;
        * Comprimento do cilindro: 200mm (300mm opcional);
        * Colimador Retangular 30 x 40mm;
        * Filtro equivalente em Alumínio: 1,5mm;
        * Dimensão do foco do tubo: 0,8 x 0,8mm;
        * Fator de resfriamento: 1:30s;
        * Registro ANVISA: 10069210087.
        * Peso: 9 kg.
        * Dimensões: 93 × 59 × 30 cm.
        * Garantia: 12 meses. "`,
        preco: 14.19990,
        marca: "Gnatus",
        img: "img/produtos/10.png",
        id: 10
    },
    {
        nome: "Raio X Max Parede",
        descricao: `"* Movimentação suave, precisa, estável e de fácil manuseio.
        * Ideal para ser utilizado com os sistemas digitais de captura de raios X.
        * Exclusiva Tecnologia Green: 95% menos chumbo.
        * Material extremamente leve com alto grau de isolação da radiação.
        * Controle remoto digital, ergonômico e com cabo removível de 5 metros.
        * Permite o controle de todas as funções do aparelho.
        * 21 intervalos de tempo de exposição padronizados.
        * Permite exposições centesimais a partir de 0,06 segundos.
        * Cabeçote com rotação de 300° e indicação na parte traseira e dianteira.
        * Sistema de articulação de fácil posicionamento, com suavidade e precisão nos movimentos.
        * Proteção térmica: evita o superaquecimento do cabeçote aumentando a vida útil.
        * Câmara de compensação no cabeçote: mantém a pressão interna estável.
        * Ponto focal com dimensionamento correto e feixe de radiação sem distorção.
        * Caixa de comando com suporte de fixação do controle.
        * Braços em aço, articuláveis na posição vertical e horizontal.
        * Pintura na cor gelo, com tratamento anticorrosivo.
        * Cabo de alimentação removível, de fácil substituição.
        * Alimentação 127V + 4%.
        * Garantia de 1 ano.
        * A montagem do equipamento deverá ser paga pelo comprador (cliente) e realizada por um técnico credenciado. A embalagem deverá permanecer fechada até a chegada do técnico, caso seja violada ocorrerá o cancelamento da garantia do produto."`,
        preco: 11.86090,
        marca: "D700",
        img: "img/produtos/11.png",
        id: 11
    },
    {
        nome: "Raio X Spectro 70X Coluna Móvel",
        descricao: `"* É leve e fácil de movimentar, sobre quatro rodízios duplos, com freios, que proporcionam boa estabilidade e melhor aproximação ao paciente e, também o uso em mais de uma sala clínica.
        * Dotado de temporizador digital centesimal, especialmente desenvolvido para utilização com sensores radiográficos digitais, proporciona redução no tempo de exposição à radiação e, também é indicado para filmes convencionais.
        * Coluna móvel com base em 04 rodízios. colunas super estáveis.
        * Composto por braço tipo pantográfico (quando modelo pantográfico), que permite maior alcance e utilização nas mais variadas posições.
        * Tubo (ampola), com ponto focal de 0.8 x 0.8mm, filtração com equivalência de alumínio de 3.22mm, direcionador cilíndrico confeccionado em polímero radiopaco para evitar radiações secundárias, enrolamento totalmente imerso em óleo especial.
        * Disparador manual à distância de 5m devidamente testado por órgão competente, respeitando as normas de proteção radiológica vigentes e elaboradas pela Comissão Nacional de Energia Nuclear – CNEN.
        * O método de ensaio para a medição dos parâmetros de tensão de pico médio no tubo de raios-x (kVp), corrente média no tubo de raios-x (mA), tempo de aplicação de carga no tubo de raios-x (s) e produto corrente X tempo no tubo de raios-x (mAs).
        * Alimentação 110V ou 220V.
        * Garantia de 1 ano."`,
        preco: 12.23000,
        marca: "Dabi Atlante",
        img: "img/produtos/12.png",
        id: 12
    },
]

const ofertas = document.getElementById("ofertas-inicio")

for (var i = 1; i < 5; i++) {
    console.log(produtos[i].preco)
    let li = document.createElement("li");
    li.innerHTML = `
    <div class="imagem-ofertas-li">
        <img src="${(produtos[i].img)}" alt="produto">
    </div>
    <h3 class="produto-nome">${produtos[i].nome}</h3>
    <p class="preco-ofertas">de R$ ${(produtos[i].preco*1.2).toFixed(2)} por</p>
    <p class="preco-principal-ofertas">R$ ${produtos[i].preco}</p>
    <a class="adicionar-carrinho" href="produtosindividual.html?id=${produtos[i].id}">Ver Mais</a>
    <span class="desconto">50% Off</span>
    `;
    li.className = "container-ofertas-li";
    ofertas.appendChild(li);
}