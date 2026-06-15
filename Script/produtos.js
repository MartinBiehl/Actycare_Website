
const actycareProducts = [
    {
        id: "actycare-ph",
        name: "ACTYCARE® PH",
        code: "ACTYCARE® PH",
        inci: "Phenoxyethanol",
        application: "Leave On & Rinse Off",
        use: "0,60 - 1,00%",
        page: "04",
        // IMAGEM DO PRODUTO: coloque aqui o arquivo correto do catálogo para ACTYCARE® PH.
        image: "images/produtos-otimizados/ph.jpg",
        imagePosition: "62% center",
        alertColor: "#002f55",
        intro: [
            "ACTYCARE® PH é uma solução conservante à base de phenoxyethanol para sistemas cosméticos que exigem versatilidade, segurança e boa tolerância cutânea.",
            "Configura-se como uma solução moderna e livre de parabenos para sistemas conservantes de alto desempenho."
        ],
        applications: ["Cremes e Loções", "Maquiagens", "Condicionadores", "Sabonetes Líquidos", "Protetores Solares", "Shampoos", "Lenços Umedecidos"],
        differentials: ["Livre de parabenos", "Baixo impacto sensorial", "Excelente compatibilidade formulativa"],
        benefits: ["Proteção bactericida para diferentes bases cosméticas", "Perfil versátil para projetos leave-on e rinse-off"]
    },
    {
        id: "actycare-phcg",
        name: "ACTYCARE® PHCG",
        code: "ACTYCARE® PHCG",
        inci: "Phenoxyethanol, Caprylyl Glycol",
        application: "Leave On & Rinse Off",
        use: "0,50 - 1,50%",
        page: "05",
        wideImage: true,
        // IMAGEM DO PRODUTO: coloque aqui o arquivo correto do catálogo para ACTYCARE® PHCG.
        image: "images/produtos-otimizados/phcg.jpg",
        imagePosition: "center",
        alertColor: "#002f55",
        intro: [
            "ACTYCARE® PHCG é um conservante multifuncional à base de Phenoxyethanol e Caprylyl Glycol, desenvolvido para atuar como sistema antimicrobiano eficaz e seguro em formulações cosméticas e de cuidados pessoais.",
            "Além da função booster, o Caprylyl Glycol contribui para a melhoria sensorial da formulação, podendo atuar como agente umectante auxiliar."
        ],
        applications: ["Cremes Faciais e Corporais", "Géis", "Sabonetes Líquidos Corporais", "Cremes Capilares"],
        differentials: ["Multifuncional", "Apoio sensorial"],
        benefits: ["Amplia a robustez do sistema conservante", "Favorece formulações com toque refinado", "Adequado para portfólios leave-on e rinse-off"]
    },
    {
        id: "actycare-pheg",
        name: "ACTYCARE® PHEG",
        code: "ACTYCARE® PHEG",
        inci: "Phenoxyethanol, Ethylhexylglycerin",
        application: "Leave On & Rinse Off",
        use: "0,60 - 1,00%",
        page: "06",
        wideImage: true,
        // IMAGEM DO PRODUTO: coloque aqui o arquivo correto do catálogo para ACTYCARE® PHEG.
        image: "images/produtos-otimizados/pheg.jpg",
        imagePosition: "48% center",
        alertColor: "#024f96",
        intro: [
            "ACTYCARE® PHEG combina Phenoxyethanol e Ethylhexylglycerin em uma solução moderna, paraben-free, livre de isotiazolinonas e tecnicamente otimizada para sistemas conservantes de alto desempenho.",
            "Graças à sua versatilidade, segurança e baixo impacto sensorial, é indicado para uma ampla gama de aplicações cosméticas."
        ],
        applications: ["Cremes", "Loções", "Shampoos", "Condicionadores", "Sabonetes Líquidos", "Protetores Solares", "Maquiagens", "Lenços Umedecidos"],
        differentials: ["Paraben-free", "Livre de isotiazolinonas", "Baixo impacto sensorial"],
        benefits: ["De acordo com posicionamentos modernos de formulação", "Contribui para sistemas conservantes de alto desempenho", "Oferece ampla compatibilidade com diferentes formulações"]
    },
    {
        id: "actycare-ph4",
        name: "ACTYCARE® PH4",
        code: "ACTYCARE® PH4",
        inci: "Phenoxyethanol, Parabens",
        application: "Leave On & Rinse Off",
        use: "0,25 - 1,00%",
        page: "07",
        wideImage: true,
        // IMAGEM DO PRODUTO: coloque aqui o arquivo correto do catálogo para ACTYCARE® PH4.
        image: "images/produtos-otimizados/ph4.jpg",
        imagePosition: "70% center",
        alertColor: "#9c131d",
        intro: [
            "ACTYCARE® PH4 é um sistema conservante multifuncional de amplo espectro que combina Phenoxyethanol com uma mistura equilibrada de parabenos, conhecidos por sua estabilidade e excelente compatibilidade cosmética.",
            "Apresenta boa estabilidade térmica, oferecendo alta robustez microbiológica em formulações complexas com alto teor de água e diversos tipos de surfactantes."
        ],
        applications: ["Formulações complexas", "sistemas com alto teor de água ou extratos vegetais", "bases com surfactantes", "produtos rinse-off"],
        differentials: ["Amplo espectro", "Alta estabilidade térmica", "Robustez microbiológica"],
        benefits: ["Proteção contra bactérias, leveduras e fungos", "Mantém a integridade microbiológica do produto", "Indicado para bases que exigem maior margem de segurança"],
        note: "Em formulações destinadas a públicos sensíveis ou mercados com restrições específicas ao uso de parabenos, recomenda-se avaliação criteriosa."
    },
    {
        id: "actycare-phb",
        name: "ACTYCARE® PHB",
        code: "ACTYCARE® PHB",
        inci: "Polyaminopropyl Biguanide",
        application: "Leave On & Rinse Off",
        use: "0,30 - 1,50%",
        page: "08",
        // IMAGEM DO PRODUTO: coloque aqui o arquivo correto do catálogo para ACTYCARE® PHB.
        image: "images/produtos-otimizados/phb.jpg",
        imagePosition: "58% center",
        alertColor: "#002f55",
        intro: [
            "ACTYCARE® PHB é um conservante catiônico à base de Polyaminopropyl Biguanide, amplamente utilizado para o controle microbiológico em formulações cosméticas aquosas.",
            "Apresenta atividade antimicrobiana contra bactérias Gram-positivas, Gram-negativas, fungos e leveduras, sendo particularmente eficaz contra Pseudomonas spp."
        ],
        applications: ["Sabonetes desinfetantes", "Lenços Umedecidos", "produtos de higiene pessoal", "bases leave-on", "bases rinse-off"],
        differentials: ["Conservante catiônico", "Atividade ampla", "Ênfase em controle bacteriano"],
        benefits: ["Reforça sistemas sujeitos a alto desafio microbiológico", "Ajuda na estabilidade de formulações aquosas", "Contribui para proteção consistente ao longo da vida útil"]
    },
    {
        id: "actycare-mc",
        name: "ACTYCARE® MC",
        code: "ACTYCARE® MC",
        inci: "Methylchloroisothiazolinone + MIT",
        application: "Rinse Off",
        use: "0,05 - 0,10%",
        page: "09",
        // IMAGEM DO PRODUTO: coloque aqui o arquivo correto do catálogo para ACTYCARE® MC.
        image: "images/produtos-otimizados/mc.jpg",
        imagePosition: "42% center",
        alertColor: "#7b4a42",
        intro: [
            "ACTYCARE® MC é um sistema conservante líquido de amplo espectro baseado em uma mescla de isotiazolinonas, indicado para o controle de bactérias, leveduras e fungos em formulações cosméticas com elevada atividade de água.",
            "Devido à elevada potência antimicrobiana das isotiazolinonas, apresenta alta eficácia microbiológica mesmo em baixas concentrações de uso."
        ],
        applications: ["Shampoos", "sabonetes líquidos", "géis de banho", "sistemas rinse-off", "formulações com elevada atividade de água"],
        differentials: ["Baixo teor de uso","Uso exclusivo rinse-off"],
        benefits: ["Proteção eficiente contra ampla variedade de microrganismos", "Boa resposta em produtos enxaguáveis", "Alternativa técnica para bases com grande teor aquoso"],
        note: "Uso exclusivo em sistemas Rinse Off devido ao perfil dermatológico das isotiazolinonas."
    },
    {
        id: "actycare-bs",
        name: "ACTYCARE® BS",
        code: "ACTYCARE® BS",
        inci: "Sodium Benzoate",
        application: "Leave On & Rinse Off",
        use: "0,20 - 0,50%",
        page: "10",
        // IMAGEM DO PRODUTO: coloque aqui o arquivo correto do catálogo para ACTYCARE® BS.
        image: "images/produtos-otimizados/bs.jpg",
        imagePosition: "center",
        alertColor: "#002f55",
        intro: [
            "ACTYCARE® BS é um conservante à base de benzoato de sódio que atua por meio da formação de ácido benzoico não dissociado em meios ácidos, mecanismo responsável por sua atividade antimicrobiana.",
            "É indicado para uso como conservante ou componente de sistemas conservantes em formulações cosméticas cujo pH final seja ácido, condição essencial para sua eficácia antimicrobiana."
        ],
        applications: ["Formulações de pH ácido", "sistemas conservantes combinados", "produtos leave-on", "produtos rinse-off"],
        differentials: ["Melhor desempenho em pH 4,0 - 5,5", "Foco em fungos e leveduras", "Perfil técnico conhecido"],
        benefits: ["Permite composições conservantes mais ajustadas", "Contribui para estratégias de preservação em meio ácido", "Apoia formulações que buscam reduzir conservantes sintéticos"]
    },
    {
        id: "actycare-bsk",
        name: "ACTYCARE® BSK",
        code: "ACTYCARE® BSK",
        inci: "Potassium Sorbate",
        application: "Leave On & Rinse Off",
        use: "0,20 - 0,60%",
        page: "11",
        // IMAGEM DO PRODUTO: coloque aqui o arquivo correto do catálogo para ACTYCARE® BSK.
        image: "images/produtos-otimizados/bsk.jpg",
        imagePosition: "64% center",
        alertColor: "#002f55",
        intro: [
            "ACTYCARE® BSK é um conservante à base de sorbato de potássio, cuja atividade antimicrobiana ocorre predominantemente em meio ácido, por meio da formação não dissociada do ácido sórbico.",
            "Apresenta maior eficácia contra fungos e leveduras, sendo normalmente utilizado como componente de sistemas conservantes em associação com outros agentes antimicrobianos."
        ],
        applications: ["Formulações de pH ácido", "sistemas conservantes combinados", "emulsões", "produtos de higiene", "cuidados pessoais"],
        differentials: ["Atuação em meio ácido", "Ênfase antifúngica", "Uso em combinação conservante"],
        benefits: ["Favorece proteção contra fungos e leveduras", "Permite desenho técnico conforme pH final", "Contribui para sistemas de preservação mais equilibrados"]
    },
    {
        id: "actycare-mp",
        name: "ACTYCARE® MP",
        code: "ACTYCARE® MP",
        inci: "Methylparaben",
        application: "Leave On & Rinse Off",
        use: "0,05 - 0,40%",
        page: "12",
        // IMAGEM DO PRODUTO: coloque aqui o arquivo correto do catálogo para ACTYCARE® MP.
        image: "images/produtos-otimizados/mp.jpg",
        imagePosition: "48% center",
        alertColor: "#7b4a42",
        intro: [
            "ACTYCARE® MP é um componente conservante do grupo dos parabenos, à base de Methylparaben, utilizado em formulações cosméticas com foco em controle de bactérias.",
            "Apresenta atividade contra bactérias, fungos e leveduras, sendo particularmente eficaz contra bactérias Gram-positivas."
        ],
        applications: ["Emulsões cosméticas", "produtos leave-on", "produtos rinse-off", "sistemas com parabenos", "cuidados pessoais"],
        differentials: ["Histórico técnico consolidado", "Amplo espectro", "Boa estabilidade"],
        benefits: ["Apoia sistemas conservantes clássicos e robustos", "Contribui para controle de deterioração microbiológica", "Permite combinações com outros ativos da linha"]
    },
    {
        id: "actycare-pp",
        name: "ACTYCARE® PP",
        code: "ACTYCARE® PP",
        inci: "Propylparaben",
        application: "Leave On & Rinse Off",
        use: "0,10 - 0,40%",
        page: "13",
        // IMAGEM DO PRODUTO: coloque aqui o arquivo correto do catálogo para ACTYCARE® PP.
        image: "images/produtos-otimizados/pp.jpg",
        imagePosition: "58% center",
        alertColor: "#002f55",
        intro: [
            "ACTYCARE® PP é um componente conservante do grupo dos parabenos, à base de Propylparaben, utilizado em formulações cosméticas para controle de fungos filamentosos e leveduras.",
            "Devido à sua maior lipofilicidade, apresenta melhor distribuição em fases oleosas e interfaces óleo/água das formulações."
        ],
        applications: ["Emulsões", "fases oleosas", "interfaces óleo/água", "produtos leave-on", "produtos rinse-off"],
        differentials: ["Maior lipofilicidade", "Atividade contra fungos e leveduras", "Complementa sistemas com parabenos"],
        benefits: ["Amplia o espectro de proteção microbiológica", "Contribui para bases com fase oleosa relevante", "Ajuda a proteger contra deterioração por fungos e leveduras"]
    },
    {
        id: "actycare-ba",
        name: "ACTYCARE® BA",
        code: "ACTYCARE® BA",
        inci: "Benzyl Alcohol",
        application: "Leave On & Rinse Off",
        use: "0,40 - 1,00%",
        page: "14",
        // IMAGEM DO PRODUTO: coloque aqui o arquivo correto do catálogo para ACTYCARE® BA.
        image: "images/produtos-otimizados/ba.jpg",
        imagePosition: "60% center",
        alertColor: "#002f55",
        intro: [
            "ACTYCARE® BA é uma solução à base de Benzyl Alcohol para formulações cosméticas que buscam versatilidade, segurança e baixo impacto sensorial.",
            "Quando usado em sistemas neutros ou com maior suscetibilidade a contaminação, pode ser associado a outros conservantes da linha ACTYCARE® para maior performance e robustez."
        ],
        applications: ["Protetores solares", "maquiagens", "tinturas de cabelo", "perfumes", "cremes e loções", "shampoos", "condicionadores", "sabonetes líquidos"],
        differentials: ["Baixo impacto sensorial", "Alta versatilidade", "Pode compor sistemas combinados"],
        benefits: ["Atende ampla gama de categorias cosméticas", "Ajuda a ajustar estratégias conservantes em sistemas neutros", "Contribui para formulações com boa experiência sensorial"]
    },
    {
        id: "actycare-phba",
        name: "ACTYCARE® PHBA",
        code: "ACTYCARE® PHBA",
        inci: "Phenoxyethanol, Benzyl Alcohol",
        application: "Leave On & Rinse Off",
        use: "0,60 - 1,00%",
        page: "15",
        // IMAGEM DO PRODUTO: coloque aqui o arquivo correto do catálogo para ACTYCARE® PHBA.
        image: "images/produtos-otimizados/phba.jpg",
        imagePosition: "50% center",
        alertColor: "#53664c",
        intro: [
            "ACTYCARE® PHBA é um conservante à base de Phenoxyethanol e Benzyl Alcohol, utilizado como sistema antimicrobiano em produtos destinados a cuidados pessoais.",
            "Apresenta melhor desempenho microbiológico em formulações levemente ácidas, preferencialmente na faixa de pH 4,0 a 5,5, onde a atividade antifúngica do álcool benzílico é maximizada."
        ],
        applications: ["Formulações levemente ácidas", "cuidados pessoais", "sistemas leave-on", "sistemas rinse-off", "sistemas combinados"],
        differentials: ["Dupla base conservante", "Boa resposta em pH ácido", "Atividade antifúngica favorecida"],
        benefits: ["Combina Phenoxyethanol e Benzyl Alcohol", "Reforça a proteção microbiológica em bases ácidas", "Permite ajustes conforme risco microbiológico da formulação"]
    },
    {
        id: "actycare-mph",
        name: "ACTYCARE® MPH",
        code: "ACTYCARE® MPH",
        inci: "Methylisothiazolinone, Phenoxyethanol",
        application: "Rinse Off",
        use: "0,10 - 0,12%",
        page: "16",
        wideImage: true,
        // IMAGEM DO PRODUTO: coloque aqui o arquivo correto do catálogo para ACTYCARE® MPH.
        image: "images/produtos-otimizados/mph.jpg",
        imagePosition: "center",
        alertColor: "#8c4e32",
        intro: [
            "ACTYCARE® MPH é um conservante líquido à base de Methylisothiazolinone e Phenoxyethanol em meio aquoso, desenvolvido para oferecer proteção antimicrobiana eficaz em formulações cosméticas e de higiene pessoal do tipo rinse-off.",
            "Sua composição balanceada combina a alta eficiência bactericida do MIT com a ação antimicrobiana complementar do phenoxyethanol."
        ],
        applications: ["Shampoos", "sabonetes líquidos", "géis de banho", "produtos de higiene pessoal rinse-off"],
        differentials: ["Sem formaldeído", "Sem parabenos", "Boa compatibilidade com tensoativos"],
        benefits: ["Sistema estável e de baixo teor de uso", "Reforça a proteção em bases enxaguáveis", "Compatível com tensoativos aniônicos, não iônicos e anfotéricos"],
        note: "Devido ao perfil regulatório do methylisothiazolinone, não deve ser utilizado em produtos leave-on."
    },
    {
        id: "actycare-mi",
        name: "ACTYCARE® MI",
        code: "ACTYCARE® MI",
        inci: "Methylisothiazolinone (MIT)",
        application: "Rinse Off",
        use: "0,0010 - 0,0015%",
        page: "17",
        // IMAGEM DO PRODUTO: coloque aqui o arquivo correto do catálogo para ACTYCARE® MI.
        image: "images/produtos-otimizados/mi.jpg",
        imagePosition: "66% center",
        alertColor: "#62787f",
        intro: [
            "ACTYCARE® MI é uma solução aquosa concentrada de methylisothiazolinone, desenvolvida para atuar como componente de sistemas conservantes, contribuindo principalmente para o reforço da ação bactericida em formulações cosméticas enxaguáveis.",
            "Devido à sua elevada concentração de ativo, trata-se de um conservante de uso indireto, utilizado como ajuste técnico em sistemas conservantes já existentes."
        ],
        applications: ["Shampoos", "sabonetes líquidos", "géis de banho", "higiene capilar", "higiene corporal"],
        differentials: ["Ajuste técnico bactericida", "Uso em combinação", "Exclusivo para rinse-off"],
        benefits: ["Reforça sistemas conservantes já existentes", "Permite correções técnicas em bases enxaguáveis", "Atua principalmente no suporte bactericida"],
        note: "O teor final de MIT ativo no produto acabado deve respeitar a legislação vigente."
    },
    {
        id: "actycare-dm",
        name: "ACTYCARE® DM",
        code: "ACTYCARE® DM",
        inci: "DMDM Hydantoin",
        application: "Leave On & Rinse Off",
        use: "0,20 - 1,00%",
        page: "18",
        // IMAGEM DO PRODUTO: coloque aqui o arquivo correto do catálogo para ACTYCARE® DM.
        image: "images/produtos-otimizados/dm.jpg",
        imagePosition: "52% center",
        alertColor: "#002f55",
        intro: [
            "ACTYCARE® DM é uma solução à base de DMDM Hidantoína que entrega amplo espectro de ação contra bactérias, fungos e leveduras.",
            "É um conservante robusto e de longo prazo que garante ação antimicrobiana sem comprometer características sensoriais ou físico-químicas das formulações."
        ],
        applications: ["Shampoos e condicionadores", "loções corporais", "sabonetes líquidos", "cremes faciais", "géis de limpeza", "emulsões cosméticas"],
        differentials: ["Robustez de longo prazo", "Fácil incorporação", "Bom custo-benefício"],
        benefits: ["Proteção e estabilidade microbiológica", "Versatilidade para higiene pessoal e cuidados cosméticos", "Solução confiável para diversas formulações"]
    },
    {
        id: "actycare-zo",
        name: "ACTYCARE® ZO",
        code: "ACTYCARE® ZO",
        inci: "Zinc Pyrithione",
        application: "Rinse Off",
        use: "0,30 - 2,00%",
        page: "19",
        wideImage: true,
        // IMAGEM DO PRODUTO: coloque aqui o arquivo correto do catálogo para ACTYCARE® ZO.
        image: "images/produtos-otimizados/zo.jpg",
        imagePosition: "54% center",
        alertColor: "#838a86",
        intro: [
            "ACTYCARE® ZO é um agente antimicrobiano à base de Piritionato de Zinco, amplamente utilizado em formulações cosméticas e dermocosméticas para o controle microbiológico e aplicações capilares anticaspa.",
            "Apresenta atividade antifúngica e antibacteriana, sendo particularmente eficaz contra Malassezia spp., microrganismo associado à formação de caspa no couro cabeludo."
        ],
        applications: ["Shampoos anticaspa", "formulações que requerem atividade antifúngica", "produtos capilares com controle microbiológico"],
        differentials: ["Atividade antifúngica", "Aplicação capilar anticaspa", "Base zinc pyrithione"],
        benefits: ["Apoia controle microbiológico em produtos capilares", "Atua contra microrganismos associados à caspa", "Indicado para sistemas rinse-off de cuidado do couro cabeludo"]
    },
    {
        id: "actycare-ph-avant",
        name: "ACTYCARE® PH AVANT",
        code: "ACTYCARE® PH AVANT",
        inci: "Phenoxyethanol, Iodopropynyl Butylcarbamate",
        application: "Leave On & Rinse Off",
        use: "0,50 - 1,00%",
        page: "20",
        image: "images/produtos-otimizados/ph-avant.jpg",
        imagePosition: "center",
        alertColor: "#002f55",
        intro: [
            "ACTYCARE® PH AVANT é uma solução conservante líquida de alta pureza, à base de fenoxietanol e iodopropinil butilcarbamato (IPBC), desenvolvida para a proteção microbiológica de formulações cosméticas de enxágue e de ação prolongada.",
            "Sua fórmula oferece ação contra bactérias, leveduras e fungos filamentosos. Totalmente livre de parabenos.",
            "Apresenta elevada estabilidade química em uma ampla faixa de pH (3,0 a 9,0), sendo compatível com emulsões, soluções aquosas, géis e sistemas tensoativos."
        ],
        applications: ["Formulações de enxágue", "formulações de ação prolongada", "emulsões", "soluções aquosas", "Lenços umedecidos", "géis para cabelo", "sistemas tensoativos"],
        differentials: ["Alta pureza", "Livre de parabenos", "Estável em ampla faixa de pH"],
        benefits: ["Proteção contra bactérias, leveduras e fungos filamentosos", "Compatibilidade com diferentes sistemas cosméticos", "Indicado para formulações leave-on e rinse-off"],
        note: "Pode ser utilizado em dosagens entre 0,50% e 1,00% do peso total da formulação, respeitando as diretrizes internacionais."
    }
];

// Preencha os campos en/es abaixo para traduzir o conteúdo técnico de cada produto.
const actycareProductTranslations = {
    "actycare-ph": {
        en: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" },
        es: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" }
    },
    "actycare-phcg": {
        en: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" },
        es: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" }
    },
    "actycare-pheg": {
        en: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" },
        es: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" }
    },
    "actycare-ph4": {
        en: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" },
        es: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" }
    },
    "actycare-phb": {
        en: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" },
        es: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" }
    },
    "actycare-mc": {
        en: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" },
        es: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" }
    },
    "actycare-bs": {
        en: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" },
        es: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" }
    },
    "actycare-bsk": {
        en: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" },
        es: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" }
    },
    "actycare-mp": {
        en: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" },
        es: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" }
    },
    "actycare-pp": {
        en: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" },
        es: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" }
    },
    "actycare-ba": {
        en: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" },
        es: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" }
    },
    "actycare-phba": {
        en: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" },
        es: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" }
    },
    "actycare-mph": {
        en: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" },
        es: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" }
    },
    "actycare-mi": {
        en: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" },
        es: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" }
    },
    "actycare-dm": {
        en: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" },
        es: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" }
    },
    "actycare-zo": {
        en: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" },
        es: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" }
    },
    "actycare-ph-avant": {
        en: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" },
        es: { application: "", intro: [], applications: [], differentials: [], benefits: [], note: "" }
    }
};

(() => {
    const tableBody = document.querySelector("[data-products-body]");
    const overview = document.querySelector("[data-product-overview]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const productImagePreloads = [];
    let activeProductId = "";

    if (!tableBody || !overview) {
        return;
    }

    const escapeHtml = (value) => value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");

    // Preencha en/es para traduzir os rótulos gerados pela tabela e pelos cards.
    const catalogTranslations = {
        solution: { pt: "Solução", en: "", es: "" },
        applicationsFor: { pt: "Para aplicações", en: "", es: "" },
        useLevels: { pt: "Níveis de uso", en: "", es: "" },
        applications: { pt: "Aplicações", en: "", es: "" },
        differentials: { pt: "Diferenciais", en: "", es: "" },
        technicalData: { pt: "Dados técnicos de {product}", en: "", es: "" },
        seeDetails: { pt: "Ver detalhes de {product}", en: "", es: "" },
        catalogImageAlt: { pt: "Imagem do catálogo para {product}", en: "", es: "" },
        defaultNote: {
            pt: "Recomendado entre {use} na formulação final, dependendo do tipo de produto e da avaliação de eficácia microbiológica.",
            en: "",
            es: ""
        }
    };

    const getLanguage = () => window.actycareI18n?.getLanguage?.() || "pt";

    const formatText = (text, replacements = {}) => Object.entries(replacements).reduce(
        (currentText, [key, value]) => currentText.replaceAll(`{${key}}`, value),
        text
    );

    const getCatalogText = (key, replacements = {}) => {
        const translations = catalogTranslations[key] || {};
        const language = getLanguage();
        const text = translations[language] || translations.pt || "";

        return formatText(text, replacements);
    };

    const getProductTranslation = (product) => (
        actycareProductTranslations[product.id]?.[getLanguage()] || {}
    );

    const getProductField = (product, field) => {
        const translation = getProductTranslation(product)[field];

        if (typeof translation === "string" && translation.trim()) {
            return translation;
        }

        return product[field] || "";
    };

    const getProductList = (product, field) => {
        const originalItems = product[field] || [];
        const translatedItems = getProductTranslation(product)[field];

        if (!Array.isArray(translatedItems) || !translatedItems.length) {
            return originalItems;
        }

        return originalItems.map((item, index) => translatedItems[index] || item);
    };

    const renderList = (items) => items
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("");

    const preloadProductImages = () => {
        const loadedImages = new Set();

        actycareProducts.forEach((product) => {
            if (!product.image || loadedImages.has(product.image)) {
                return;
            }

            loadedImages.add(product.image);

            const image = new Image();
            image.decoding = "async";
            image.loading = "eager";
            image.src = product.image;
            productImagePreloads.push(image);
        });
    };

    const renderExpandedRow = (product) => {
        const note = getProductField(product, "note") || getCatalogText("defaultNote", { use: product.use });
        const productApplication = getProductField(product, "application");
        const productIntro = getProductList(product, "intro");
        const productApplications = getProductList(product, "applications");
        const productDifferentials = getProductList(product, "differentials");
        const titleSuffix = product.code.replace(/^ACTYCARE®\s*/i, "");
        const alertColor = product.alertColor || "#002f55";
        const cardStyle = ` style="--produto-alerta-cor: ${escapeHtml(alertColor)};"`;
        const technicalDataLabel = getCatalogText("technicalData", { product: product.name });
        const catalogImageAlt = getCatalogText("catalogImageAlt", { product: product.name });

        // ── Layout WIDE (imagem horizontal em baixo) ─────────────────────
        if (product.wideImage) {
            return `
                <tr class="produto-expandido" data-expanded-for="${product.id}">
                    <td colspan="4">
                        <article class="produto-catalogo-card produto-catalogo-card--wide"${cardStyle}>
                            <div class="produto-catalogo-card__left">
                                <p class="eyebrow">ACTYCARE®</p>
                                <h2>${escapeHtml(titleSuffix)}</h2>
                                <div class="produto-catalogo-card__intro">
                                    ${productIntro.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
                                </div>
                            </div>
                            <div class="produto-catalogo-card__right">
                                <p class="produtos-manifesto produto-catalogo-card__manifesto">BEHIND<br>PRESERVATION.<br>INSIDE<br>INNOVATION.</p>
                                <div class="produto-catalogo-card__alerta">
                                    ${escapeHtml(note)}
                                </div>
                                <div class="produto-catalogo-card__dados" aria-label="${escapeHtml(technicalDataLabel)}">
                                    <div>
                                        <span>${escapeHtml(getCatalogText("applications"))}</span>
                                        <strong>${escapeHtml(productApplications.slice(0, 4).join(", "))}</strong>
                                    </div>
                                    <div>
                                        <span>${escapeHtml(getCatalogText("differentials"))}</span>
                                        <strong>${escapeHtml(productDifferentials.join(", "))}</strong>
                                    </div>
                                </div>
                            </div>
                            <figure class="produto-catalogo-card__imagem">
                                <img src="${product.image}" alt="${escapeHtml(catalogImageAlt)}" loading="eager" decoding="async" style="object-position: ${product.imagePosition};">
                                <figcaption>${escapeHtml(productApplication)}</figcaption>
                            </figure>
                        </article>
                    </td>
                </tr>
            `;
        }

        // ── Layout RETRATO (imagem vertical à direita) ─────────────────
        return `
            <tr class="produto-expandido" data-expanded-for="${product.id}">
                <td colspan="4">
                    <article class="produto-catalogo-card"${cardStyle}>
                        <div class="produto-catalogo-card__texto">
                            <p class="produtos-manifesto produto-catalogo-card__manifesto">BEHIND<br>PRESERVATION.<br>INSIDE<br>INNOVATION.</p>
                            <p class="eyebrow">ACTYCARE®</p>
                            <h2>${escapeHtml(titleSuffix)}</h2>
                            <div class="produto-catalogo-card__intro">
                                ${productIntro.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
                            </div>
                            <div class="produto-catalogo-card__alerta">
                                ${escapeHtml(note)}
                            </div>
                        </div>
                        <figure class="produto-catalogo-card__imagem">
                            <img src="${product.image}" alt="${escapeHtml(catalogImageAlt)}" loading="eager" decoding="async" style="object-position: ${product.imagePosition};">
                            <figcaption>${escapeHtml(productApplication)}</figcaption>
                        </figure>
                        <div class="produto-catalogo-card__dados" aria-label="${escapeHtml(technicalDataLabel)}">
                            <div>
                                <span>${escapeHtml(getCatalogText("applications"))}</span>
                                <strong>${escapeHtml(productApplications.slice(0, 4).join(", "))}</strong>
                            </div>
                            <div>
                                <span>${escapeHtml(getCatalogText("differentials"))}</span>
                                <strong>${escapeHtml(productDifferentials.join(", "))}</strong>
                            </div>
                        </div>
                    </article>
                </td>
            </tr>
        `;
    };

    const renderTable = () => {
        tableBody.innerHTML = actycareProducts.map((product) => `
            <tr class="produto-row ${product.id === activeProductId ? "is-active" : ""}" tabindex="0" role="button" aria-expanded="${product.id === activeProductId}" aria-label="${escapeHtml(getCatalogText("seeDetails", { product: product.name }))}" data-product-id="${product.id}">
                <td data-label="${escapeHtml(getCatalogText("solution"))}"><span>${escapeHtml(product.name)}</span></td>
                <td data-label="INCI Name">${escapeHtml(product.inci)}</td>
                <td data-label="${escapeHtml(getCatalogText("applicationsFor"))}">${escapeHtml(getProductField(product, "application"))}</td>
                <td data-label="${escapeHtml(getCatalogText("useLevels"))}">${escapeHtml(product.use)}</td>
            </tr>
            ${product.id === activeProductId ? renderExpandedRow(product) : ""}
        `).join("");
        window.actycareI18n?.apply?.(tableBody);
    };

    const observeReveal = (scope = document) => {
        const elements = scope.querySelectorAll(".reveal:not(.is-visible)");

        if (reduceMotion.matches || !("IntersectionObserver" in window)) {
            elements.forEach((element) => element.classList.add("is-visible"));
            return;
        }

        const observer = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    currentObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.14
        });

        elements.forEach((element) => observer.observe(element));
    };

    const getHeaderOffset = () => {
        const header = document.querySelector(".cabecalho");

        if (!header) {
            return 0;
        }

        const rect = header.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > 0 ? rect.height : 0;
    };

    const scrollToExpandedCard = (expandedRow) => {
        const card = expandedRow.querySelector(".produto-catalogo-card") || expandedRow;
        const margin = 14;

        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                const headerOffset = getHeaderOffset();
                const rect = card.getBoundingClientRect();
                const availableHeight = window.innerHeight - headerOffset - (margin * 2);
                const topGap = rect.height < availableHeight
                    ? Math.max(margin, (availableHeight - rect.height) / 2)
                    : margin;
                const targetTop = window.scrollY + rect.top - headerOffset - topGap;

                window.scrollTo({
                    top: Math.max(0, targetTop),
                    behavior: reduceMotion.matches ? "auto" : "smooth"
                });
            });
        });
    };

    const selectProduct = (productId, options = {}) => {
        const productExists = actycareProducts.some((product) => product.id === productId);

        if (!productExists) {
            return;
        }

        activeProductId = activeProductId === productId ? "" : productId;
        overview.classList.toggle("has-expanded-product", Boolean(activeProductId));
        renderTable();

        if (activeProductId) {
            window.history.replaceState(null, "", `#${activeProductId}`);
        } else {
            window.history.replaceState(null, "", window.location.pathname);
        }

        const expandedRow = activeProductId
            ? tableBody.querySelector(`[data-expanded-for="${activeProductId}"]`)
            : null;

        if (expandedRow && options.scroll !== false) {
            scrollToExpandedCard(expandedRow);
        }
    };

    preloadProductImages();
    renderTable();
    observeReveal();

    tableBody.addEventListener("click", (event) => {
        const row = event.target.closest(".produto-row");

        if (row) {
            selectProduct(row.dataset.productId);
        }
    });

    tableBody.addEventListener("keydown", (event) => {
        const row = event.target.closest(".produto-row");

        if (!row || (event.key !== "Enter" && event.key !== " ")) {
            return;
        }

        event.preventDefault();
        selectProduct(row.dataset.productId);
    });

    window.addEventListener("actycare:languagechange", () => {
        renderTable();
    });

    const productFromHash = window.location.hash.replace("#", "");

    if (actycareProducts.some((product) => product.id === productFromHash)) {
        selectProduct(productFromHash, { scroll: false });
    }
})();
