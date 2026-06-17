
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
        en: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® PH is a preservative solution based on phenoxyethanol for cosmetic systems that require versatility, safety, and good skin tolerance.",
                "It is positioned as a modern paraben-free solution for high-performance preservative systems."
            ],
            applications: ["Creams and lotions", "Makeup", "Conditioners", "Liquid soaps", "Sunscreens", "Shampoos", "Wet wipes"],
            differentials: ["Paraben-free", "Low sensory impact", "Excellent formulation compatibility"],
            benefits: ["Bactericidal protection for different cosmetic bases", "Versatile profile for leave-on and rinse-off projects"],
            note: ""
        },
        es: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® PH es una solución conservante a base de phenoxyethanol para sistemas cosméticos que requieren versatilidad, seguridad y buena tolerancia cutánea.",
                "Se posiciona como una solución moderna y libre de parabenos para sistemas conservantes de alto desempeño."
            ],
            applications: ["Cremas y lociones", "Maquillaje", "Acondicionadores", "Jabones líquidos", "Protectores solares", "Shampoos", "Toallitas húmedas"],
            differentials: ["Libre de parabenos", "Bajo impacto sensorial", "Excelente compatibilidad formulativa"],
            benefits: ["Protección bactericida para diferentes bases cosméticas", "Perfil versátil para proyectos leave-on y rinse-off"],
            note: ""
        }
    },
    "actycare-phcg": {
        en: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® PHCG is a multifunctional preservative based on Phenoxyethanol and Caprylyl Glycol, developed to act as an effective and safe antimicrobial system in cosmetic and personal care formulations.",
                "In addition to its booster function, Caprylyl Glycol contributes to improved formulation sensoriality and may act as an auxiliary humectant agent."
            ],
            applications: ["Face and body creams", "Gels", "Body liquid soaps", "Hair creams"],
            differentials: ["Multifunctional", "Sensory support"],
            benefits: ["Enhances the robustness of the preservative system", "Supports formulations with a refined skin feel", "Suitable for leave-on and rinse-off portfolios"],
            note: ""
        },
        es: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® PHCG es un conservante multifuncional a base de Phenoxyethanol y Caprylyl Glycol, desarrollado para actuar como un sistema antimicrobiano eficaz y seguro en formulaciones cosméticas y de cuidado personal.",
                "Además de su función booster, el Caprylyl Glycol contribuye a mejorar la sensorialidad de la formulación y puede actuar como agente humectante auxiliar."
            ],
            applications: ["Cremas faciales y corporales", "Geles", "Jabones líquidos corporales", "Cremas capilares"],
            differentials: ["Multifuncional", "Soporte sensorial"],
            benefits: ["Amplía la robustez del sistema conservante", "Favorece formulaciones con sensorialidad refinada", "Adecuado para portafolios leave-on y rinse-off"],
            note: ""
        }
    },
    "actycare-pheg": {
        en: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® PHEG combines Phenoxyethanol and Ethylhexylglycerin in a modern, paraben-free solution that is free of isothiazolinones and technically optimized for high-performance preservative systems.",
                "Thanks to its versatility, safety, and low sensory impact, it is recommended for a wide range of cosmetic applications."
            ],
            applications: ["Creams", "Lotions", "Shampoos", "Conditioners", "Liquid soaps", "Sunscreens", "Makeup", "Wet wipes"],
            differentials: ["Paraben-free", "Free of isothiazolinones", "Low sensory impact"],
            benefits: ["Aligned with modern formulation positioning", "Contributes to high-performance preservative systems", "Offers broad compatibility with different formulations"],
            note: ""
        },
        es: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® PHEG combina Phenoxyethanol y Ethylhexylglycerin en una solución moderna, paraben-free, libre de isotiazolinonas y técnicamente optimizada para sistemas conservantes de alto desempeño.",
                "Gracias a su versatilidad, seguridad y bajo impacto sensorial, está indicado para una amplia gama de aplicaciones cosméticas."
            ],
            applications: ["Cremas", "Lociones", "Shampoos", "Acondicionadores", "Jabones líquidos", "Protectores solares", "Maquillaje", "Toallitas húmedas"],
            differentials: ["Paraben-free", "Libre de isotiazolinonas", "Bajo impacto sensorial"],
            benefits: ["Alineado con posicionamientos modernos de formulación", "Contribuye a sistemas conservantes de alto desempeño", "Ofrece amplia compatibilidad con diferentes formulaciones"],
            note: ""
        }
    },
    "actycare-ph4": {
        en: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® PH4 is a broad-spectrum multifunctional preservative system that combines Phenoxyethanol with a balanced blend of parabens, known for their stability and excellent cosmetic compatibility.",
                "It provides good thermal stability, delivering high microbiological robustness in complex formulations with high water content and different types of surfactants."
            ],
            applications: ["Complex formulations", "systems with high water content or botanical extracts", "surfactant bases", "rinse-off products"],
            differentials: ["Broad spectrum", "High thermal stability", "Microbiological robustness"],
            benefits: ["Protection against bacteria, yeasts, and fungi", "Maintains the microbiological integrity of the product", "Recommended for bases that require a higher safety margin"],
            note: "For formulations intended for sensitive audiences or markets with specific restrictions on the use of parabens, careful evaluation is recommended."
        },
        es: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® PH4 es un sistema conservante multifuncional de amplio espectro que combina Phenoxyethanol con una mezcla equilibrada de parabenos, conocidos por su estabilidad y excelente compatibilidad cosmética.",
                "Presenta buena estabilidad térmica, ofreciendo alta robustez microbiológica en formulaciones complejas con alto contenido de agua y diversos tipos de surfactantes."
            ],
            applications: ["Formulaciones complejas", "sistemas con alto contenido de agua o extractos vegetales", "bases con surfactantes", "productos rinse-off"],
            differentials: ["Amplio espectro", "Alta estabilidad térmica", "Robustez microbiológica"],
            benefits: ["Protección contra bacterias, levaduras y hongos", "Mantiene la integridad microbiológica del producto", "Indicado para bases que requieren mayor margen de seguridad"],
            note: "En formulaciones destinadas a públicos sensibles o mercados con restricciones específicas al uso de parabenos, se recomienda una evaluación cuidadosa."
        }
    },
    "actycare-phb": {
        en: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® PHB is a cationic preservative based on Polyaminopropyl Biguanide, widely used for microbiological control in aqueous cosmetic formulations.",
                "It provides antimicrobial activity against Gram-positive bacteria, Gram-negative bacteria, fungi, and yeasts, and is particularly effective against Pseudomonas spp."
            ],
            applications: ["Disinfectant soaps", "Wet wipes", "personal hygiene products", "leave-on bases", "rinse-off bases"],
            differentials: ["Cationic preservative", "Broad activity", "Emphasis on bacterial control"],
            benefits: ["Reinforces systems exposed to high microbiological challenge", "Supports the stability of aqueous formulations", "Contributes to consistent protection throughout shelf life"],
            note: ""
        },
        es: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® PHB es un conservante catiónico a base de Polyaminopropyl Biguanide, ampliamente utilizado para el control microbiológico en formulaciones cosméticas acuosas.",
                "Presenta actividad antimicrobiana contra bacterias Gram positivas, Gram negativas, hongos y levaduras, siendo particularmente eficaz contra Pseudomonas spp."
            ],
            applications: ["Jabones desinfectantes", "Toallitas húmedas", "productos de higiene personal", "bases leave-on", "bases rinse-off"],
            differentials: ["Conservante catiónico", "Actividad amplia", "Énfasis en control bacteriano"],
            benefits: ["Refuerza sistemas sujetos a alto desafío microbiológico", "Ayuda en la estabilidad de formulaciones acuosas", "Contribuye a una protección consistente durante la vida útil"],
            note: ""
        }
    },
    "actycare-mc": {
        en: {
            application: "Rinse-off",
            intro: [
                "ACTYCARE® MC is a broad-spectrum liquid preservative system based on a blend of isothiazolinones, recommended for the control of bacteria, yeasts, and fungi in cosmetic formulations with high water activity.",
                "Due to the high antimicrobial potency of isothiazolinones, it delivers strong microbiological efficacy even at low use concentrations."
            ],
            applications: ["Shampoos", "liquid soaps", "shower gels", "rinse-off systems", "formulations with high water activity"],
            differentials: ["Low use level", "Rinse-off use only"],
            benefits: ["Efficient protection against a wide variety of microorganisms", "Good response in rinse-off products", "Technical alternative for bases with high aqueous content"],
            note: "Exclusive use in rinse-off systems due to the dermatological profile of isothiazolinones."
        },
        es: {
            application: "Rinse-off",
            intro: [
                "ACTYCARE® MC es un sistema conservante líquido de amplio espectro basado en una mezcla de isotiazolinonas, indicado para el control de bacterias, levaduras y hongos en formulaciones cosméticas con elevada actividad de agua.",
                "Debido a la elevada potencia antimicrobiana de las isotiazolinonas, presenta alta eficacia microbiológica incluso en bajas concentraciones de uso."
            ],
            applications: ["Shampoos", "jabones líquidos", "geles de baño", "sistemas rinse-off", "formulaciones con elevada actividad de agua"],
            differentials: ["Bajo nivel de uso", "Uso exclusivo rinse-off"],
            benefits: ["Protección eficiente contra una amplia variedad de microorganismos", "Buena respuesta en productos de enjuague", "Alternativa técnica para bases con alto contenido acuoso"],
            note: "Uso exclusivo en sistemas rinse-off debido al perfil dermatológico de las isotiazolinonas."
        }
    },
    "actycare-bs": {
        en: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® BS is a sodium benzoate-based preservative that acts through the formation of undissociated benzoic acid in acidic media, the mechanism responsible for its antimicrobial activity.",
                "It is recommended for use as a preservative or as a component of preservative systems in cosmetic formulations whose final pH is acidic, an essential condition for its antimicrobial efficacy."
            ],
            applications: ["Acidic pH formulations", "combined preservative systems", "leave-on products", "rinse-off products"],
            differentials: ["Best performance at pH 4.0 - 5.5", "Focus on fungi and yeasts", "Known technical profile"],
            benefits: ["Allows more tailored preservative compositions", "Contributes to preservation strategies in acidic media", "Supports formulations seeking to reduce synthetic preservatives"],
            note: ""
        },
        es: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® BS es un conservante a base de benzoato de sodio que actúa mediante la formación de ácido benzoico no disociado en medios ácidos, mecanismo responsable de su actividad antimicrobiana.",
                "Está indicado para uso como conservante o componente de sistemas conservantes en formulaciones cosméticas cuyo pH final sea ácido, condición esencial para su eficacia antimicrobiana."
            ],
            applications: ["Formulaciones de pH ácido", "sistemas conservantes combinados", "productos leave-on", "productos rinse-off"],
            differentials: ["Mejor desempeño en pH 4,0 - 5,5", "Foco en hongos y levaduras", "Perfil técnico conocido"],
            benefits: ["Permite composiciones conservantes más ajustadas", "Contribuye a estrategias de preservación en medio ácido", "Apoya formulaciones que buscan reducir conservantes sintéticos"],
            note: ""
        }
    },
    "actycare-bsk": {
        en: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® BSK is a potassium sorbate-based preservative whose antimicrobial activity occurs predominantly in acidic media through the formation of undissociated sorbic acid.",
                "It provides greater efficacy against fungi and yeasts and is usually used as a component of preservative systems in combination with other antimicrobial agents."
            ],
            applications: ["Acidic pH formulations", "combined preservative systems", "emulsions", "hygiene products", "personal care"],
            differentials: ["Activity in acidic media", "Antifungal emphasis", "Use in preservative combinations"],
            benefits: ["Supports protection against fungi and yeasts", "Allows technical design according to final pH", "Contributes to more balanced preservation systems"],
            note: ""
        },
        es: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® BSK es un conservante a base de sorbato de potasio, cuya actividad antimicrobiana ocurre predominantemente en medio ácido mediante la formación no disociada del ácido sórbico.",
                "Presenta mayor eficacia contra hongos y levaduras, y normalmente se utiliza como componente de sistemas conservantes en asociación con otros agentes antimicrobianos."
            ],
            applications: ["Formulaciones de pH ácido", "sistemas conservantes combinados", "emulsiones", "productos de higiene", "cuidado personal"],
            differentials: ["Actuación en medio ácido", "Énfasis antifúngico", "Uso en combinación conservante"],
            benefits: ["Favorece la protección contra hongos y levaduras", "Permite un diseño técnico según el pH final", "Contribuye a sistemas de preservación más equilibrados"],
            note: ""
        }
    },
    "actycare-mp": {
        en: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® MP is a preservative component from the paraben group, based on Methylparaben, used in cosmetic formulations with a focus on bacterial control.",
                "It provides activity against bacteria, fungi, and yeasts, and is particularly effective against Gram-positive bacteria."
            ],
            applications: ["Cosmetic emulsions", "leave-on products", "rinse-off products", "systems with parabens", "personal care"],
            differentials: ["Consolidated technical history", "Broad spectrum", "Good stability"],
            benefits: ["Supports classic and robust preservative systems", "Contributes to the control of microbiological deterioration", "Allows combinations with other actives in the line"],
            note: ""
        },
        es: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® MP es un componente conservante del grupo de los parabenos, a base de Methylparaben, utilizado en formulaciones cosméticas con foco en control bacteriano.",
                "Presenta actividad contra bacterias, hongos y levaduras, siendo particularmente eficaz contra bacterias Gram positivas."
            ],
            applications: ["Emulsiones cosméticas", "productos leave-on", "productos rinse-off", "sistemas con parabenos", "cuidado personal"],
            differentials: ["Historial técnico consolidado", "Amplio espectro", "Buena estabilidad"],
            benefits: ["Apoya sistemas conservantes clásicos y robustos", "Contribuye al control del deterioro microbiológico", "Permite combinaciones con otros activos de la línea"],
            note: ""
        }
    },
    "actycare-pp": {
        en: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® PP is a preservative component from the paraben group, based on Propylparaben, used in cosmetic formulations for the control of filamentous fungi and yeasts.",
                "Due to its greater lipophilicity, it provides better distribution in oily phases and oil/water interfaces of formulations."
            ],
            applications: ["Emulsions", "oily phases", "oil/water interfaces", "leave-on products", "rinse-off products"],
            differentials: ["Greater lipophilicity", "Activity against fungi and yeasts", "Complements systems with parabens"],
            benefits: ["Broadens the spectrum of microbiological protection", "Contributes to bases with a relevant oily phase", "Helps protect against deterioration caused by fungi and yeasts"],
            note: ""
        },
        es: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® PP es un componente conservante del grupo de los parabenos, a base de Propylparaben, utilizado en formulaciones cosméticas para el control de hongos filamentosos y levaduras.",
                "Debido a su mayor lipofilicidad, presenta mejor distribución en fases oleosas e interfaces aceite/agua de las formulaciones."
            ],
            applications: ["Emulsiones", "fases oleosas", "interfaces aceite/agua", "productos leave-on", "productos rinse-off"],
            differentials: ["Mayor lipofilicidad", "Actividad contra hongos y levaduras", "Complementa sistemas con parabenos"],
            benefits: ["Amplía el espectro de protección microbiológica", "Contribuye a bases con fase oleosa relevante", "Ayuda a proteger contra el deterioro por hongos y levaduras"],
            note: ""
        }
    },
    "actycare-ba": {
        en: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® BA is a Benzyl Alcohol-based solution for cosmetic formulations seeking versatility, safety, and low sensory impact.",
                "When used in neutral systems or in systems with greater susceptibility to contamination, it may be combined with other preservatives from the ACTYCARE® line for higher performance and robustness."
            ],
            applications: ["Sunscreens", "makeup", "hair dyes", "perfumes", "creams and lotions", "shampoos", "conditioners", "liquid soaps"],
            differentials: ["Low sensory impact", "High versatility", "Can compose combined systems"],
            benefits: ["Serves a wide range of cosmetic categories", "Helps adjust preservative strategies in neutral systems", "Contributes to formulations with a good sensory experience"],
            note: ""
        },
        es: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® BA es una solución a base de Benzyl Alcohol para formulaciones cosméticas que buscan versatilidad, seguridad y bajo impacto sensorial.",
                "Cuando se utiliza en sistemas neutros o con mayor susceptibilidad a la contaminación, puede asociarse con otros conservantes de la línea ACTYCARE® para mayor desempeño y robustez."
            ],
            applications: ["Protectores solares", "maquillaje", "tinturas capilares", "perfumes", "cremas y lociones", "shampoos", "acondicionadores", "jabones líquidos"],
            differentials: ["Bajo impacto sensorial", "Alta versatilidad", "Puede componer sistemas combinados"],
            benefits: ["Atiende una amplia gama de categorías cosméticas", "Ayuda a ajustar estrategias conservantes en sistemas neutros", "Contribuye a formulaciones con buena experiencia sensorial"],
            note: ""
        }
    },
    "actycare-phba": {
        en: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® PHBA is a preservative based on Phenoxyethanol and Benzyl Alcohol, used as an antimicrobial system in products intended for personal care.",
                "It provides better microbiological performance in slightly acidic formulations, preferably in the pH range of 4.0 to 5.5, where the antifungal activity of benzyl alcohol is maximized."
            ],
            applications: ["Slightly acidic formulations", "personal care", "leave-on systems", "rinse-off systems", "combined systems"],
            differentials: ["Dual preservative base", "Good response in acidic pH", "Favored antifungal activity"],
            benefits: ["Combines Phenoxyethanol and Benzyl Alcohol", "Reinforces microbiological protection in acidic bases", "Allows adjustments according to the microbiological risk of the formulation"],
            note: ""
        },
        es: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® PHBA es un conservante a base de Phenoxyethanol y Benzyl Alcohol, utilizado como sistema antimicrobiano en productos destinados al cuidado personal.",
                "Presenta mejor desempeño microbiológico en formulaciones ligeramente ácidas, preferentemente en el rango de pH 4,0 a 5,5, donde la actividad antifúngica del alcohol bencílico se maximiza."
            ],
            applications: ["Formulaciones ligeramente ácidas", "cuidado personal", "sistemas leave-on", "sistemas rinse-off", "sistemas combinados"],
            differentials: ["Doble base conservante", "Buena respuesta en pH ácido", "Actividad antifúngica favorecida"],
            benefits: ["Combina Phenoxyethanol y Benzyl Alcohol", "Refuerza la protección microbiológica en bases ácidas", "Permite ajustes según el riesgo microbiológico de la formulación"],
            note: ""
        }
    },
    "actycare-mph": {
        en: {
            application: "Rinse-off",
            intro: [
                "ACTYCARE® MPH is a liquid preservative based on Methylisothiazolinone and Phenoxyethanol in aqueous medium, developed to provide effective antimicrobial protection in rinse-off cosmetic and personal hygiene formulations.",
                "Its balanced composition combines the high bactericidal efficiency of MIT with the complementary antimicrobial action of phenoxyethanol."
            ],
            applications: ["Shampoos", "liquid soaps", "shower gels", "rinse-off personal hygiene products"],
            differentials: ["Formaldehyde-free", "Paraben-free", "Good compatibility with surfactants"],
            benefits: ["Stable system with low use level", "Reinforces protection in rinse-off bases", "Compatible with anionic, nonionic, and amphoteric surfactants"],
            note: "Due to the regulatory profile of methylisothiazolinone, it should not be used in leave-on products."
        },
        es: {
            application: "Rinse-off",
            intro: [
                "ACTYCARE® MPH es un conservante líquido a base de Methylisothiazolinone y Phenoxyethanol en medio acuoso, desarrollado para ofrecer protección antimicrobiana eficaz en formulaciones cosméticas y de higiene personal del tipo rinse-off.",
                "Su composición balanceada combina la alta eficiencia bactericida del MIT con la acción antimicrobiana complementaria del phenoxyethanol."
            ],
            applications: ["Shampoos", "jabones líquidos", "geles de baño", "productos de higiene personal rinse-off"],
            differentials: ["Sin formaldehído", "Sin parabenos", "Buena compatibilidad con surfactantes"],
            benefits: ["Sistema estable y de bajo nivel de uso", "Refuerza la protección en bases de enjuague", "Compatible con surfactantes aniónicos, no iónicos y anfotéricos"],
            note: "Debido al perfil regulatorio del methylisothiazolinone, no debe utilizarse en productos leave-on."
        }
    },
    "actycare-mi": {
        en: {
            application: "Rinse-off",
            intro: [
                "ACTYCARE® MI is a concentrated aqueous solution of methylisothiazolinone, developed to act as a component of preservative systems, mainly contributing to the reinforcement of bactericidal action in rinse-off cosmetic formulations.",
                "Due to its high active concentration, it is an indirect-use preservative, used as a technical adjustment in existing preservative systems."
            ],
            applications: ["Shampoos", "liquid soaps", "shower gels", "hair hygiene", "body hygiene"],
            differentials: ["Technical bactericidal adjustment", "Use in combination", "Exclusive for rinse-off"],
            benefits: ["Reinforces existing preservative systems", "Allows technical corrections in rinse-off bases", "Acts mainly as bactericidal support"],
            note: "The final content of active MIT in the finished product must comply with current legislation."
        },
        es: {
            application: "Rinse-off",
            intro: [
                "ACTYCARE® MI es una solución acuosa concentrada de methylisothiazolinone, desarrollada para actuar como componente de sistemas conservantes, contribuyendo principalmente al refuerzo de la acción bactericida en formulaciones cosméticas de enjuague.",
                "Debido a su elevada concentración de activo, se trata de un conservante de uso indirecto, utilizado como ajuste técnico en sistemas conservantes ya existentes."
            ],
            applications: ["Shampoos", "jabones líquidos", "geles de baño", "higiene capilar", "higiene corporal"],
            differentials: ["Ajuste técnico bactericida", "Uso en combinación", "Exclusivo para rinse-off"],
            benefits: ["Refuerza sistemas conservantes ya existentes", "Permite correcciones técnicas en bases de enjuague", "Actúa principalmente como soporte bactericida"],
            note: "El contenido final de MIT activo en el producto terminado debe respetar la legislación vigente."
        }
    },
    "actycare-dm": {
        en: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® DM is a DMDM Hydantoin-based solution that delivers broad-spectrum action against bacteria, fungi, and yeasts.",
                "It is a robust, long-lasting preservative that ensures antimicrobial action without compromising the sensory or physicochemical characteristics of formulations."
            ],
            applications: ["Shampoos and conditioners", "body lotions", "liquid soaps", "face creams", "cleansing gels", "cosmetic emulsions"],
            differentials: ["Long-term robustness", "Easy incorporation", "Good cost-benefit ratio"],
            benefits: ["Microbiological protection and stability", "Versatility for personal hygiene and cosmetic care", "Reliable solution for various formulations"],
            note: ""
        },
        es: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® DM es una solución a base de DMDM Hydantoin que entrega amplio espectro de acción contra bacterias, hongos y levaduras.",
                "Es un conservante robusto y de largo plazo que garantiza acción antimicrobiana sin comprometer las características sensoriales o fisicoquímicas de las formulaciones."
            ],
            applications: ["Shampoos y acondicionadores", "lociones corporales", "jabones líquidos", "cremas faciales", "geles de limpieza", "emulsiones cosméticas"],
            differentials: ["Robustez de largo plazo", "Fácil incorporación", "Buena relación costo-beneficio"],
            benefits: ["Protección y estabilidad microbiológica", "Versatilidad para higiene personal y cuidado cosmético", "Solución confiable para diversas formulaciones"],
            note: ""
        }
    },
    "actycare-zo": {
        en: {
            application: "Rinse-off",
            intro: [
                "ACTYCARE® ZO is a Zinc Pyrithione-based antimicrobial agent, widely used in cosmetic and dermocosmetic formulations for microbiological control and anti-dandruff hair care applications.",
                "It provides antifungal and antibacterial activity and is particularly effective against Malassezia spp., a microorganism associated with dandruff formation on the scalp."
            ],
            applications: ["Anti-dandruff shampoos", "formulations requiring antifungal activity", "hair products with microbiological control"],
            differentials: ["Antifungal activity", "Anti-dandruff hair application", "Zinc pyrithione base"],
            benefits: ["Supports microbiological control in hair products", "Acts against microorganisms associated with dandruff", "Recommended for rinse-off scalp care systems"],
            note: ""
        },
        es: {
            application: "Rinse-off",
            intro: [
                "ACTYCARE® ZO es un agente antimicrobiano a base de Zinc Pyrithione, ampliamente utilizado en formulaciones cosméticas y dermocosméticas para el control microbiológico y aplicaciones capilares anticaspa.",
                "Presenta actividad antifúngica y antibacteriana, siendo particularmente eficaz contra Malassezia spp., microorganismo asociado a la formación de caspa en el cuero cabelludo."
            ],
            applications: ["Shampoos anticaspa", "formulaciones que requieren actividad antifúngica", "productos capilares con control microbiológico"],
            differentials: ["Actividad antifúngica", "Aplicación capilar anticaspa", "Base zinc pyrithione"],
            benefits: ["Apoya el control microbiológico en productos capilares", "Actúa contra microorganismos asociados a la caspa", "Indicado para sistemas rinse-off de cuidado del cuero cabelludo"],
            note: ""
        }
    },
    "actycare-ph-avant": {
        en: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® PH AVANT is a high-purity liquid preservative solution based on phenoxyethanol and iodopropynyl butylcarbamate (IPBC), developed for the microbiological protection of rinse-off and long-lasting cosmetic formulations.",
                "Its formula offers action against bacteria, yeasts, and filamentous fungi. Completely paraben-free.",
                "It provides high chemical stability across a broad pH range (3.0 to 9.0), and is compatible with emulsions, aqueous solutions, gels, and surfactant systems."
            ],
            applications: ["Rinse-off formulations", "long-lasting formulations", "emulsions", "aqueous solutions", "wet wipes", "hair gels", "surfactant systems"],
            differentials: ["High purity", "Paraben-free", "Stable across a broad pH range"],
            benefits: ["Protection against bacteria, yeasts, and filamentous fungi", "Compatibility with different cosmetic systems", "Recommended for leave-on and rinse-off formulations"],
            note: "It may be used at dosages between 0.50% and 1.00% of the total formulation weight, respecting international guidelines."
        },
        es: {
            application: "Leave-on & Rinse-off",
            intro: [
                "ACTYCARE® PH AVANT es una solución conservante líquida de alta pureza, a base de phenoxyethanol e iodopropynyl butylcarbamate (IPBC), desarrollada para la protección microbiológica de formulaciones cosméticas de enjuague y de acción prolongada.",
                "Su fórmula ofrece acción contra bacterias, levaduras y hongos filamentosos. Totalmente libre de parabenos.",
                "Presenta elevada estabilidad química en un amplio rango de pH (3,0 a 9,0), siendo compatible con emulsiones, soluciones acuosas, geles y sistemas surfactantes."
            ],
            applications: ["Formulaciones de enjuague", "formulaciones de acción prolongada", "emulsiones", "soluciones acuosas", "toallitas húmedas", "geles para cabello", "sistemas surfactantes"],
            differentials: ["Alta pureza", "Libre de parabenos", "Estable en amplio rango de pH"],
            benefits: ["Protección contra bacterias, levaduras y hongos filamentosos", "Compatibilidad con diferentes sistemas cosméticos", "Indicado para formulaciones leave-on y rinse-off"],
            note: "Puede utilizarse en dosificaciones entre 0,50% y 1,00% del peso total de la formulación, respetando las directrices internacionales."
        }
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
        solution: { pt: "Solução", en: "Solution", es: "Solución" },
        applicationsFor: { pt: "Para aplicações", en: "For applications", es: "Para aplicaciones" },
        useLevels: { pt: "Níveis de uso", en: "Usage levels", es: "Niveles de uso" },
        applications: { pt: "Aplicações", en: "Applications", es: "Aplicaciones" },
        differentials: { pt: "Diferenciais", en: "Differentials", es: "Diferenciales" },
        technicalData: { pt: "Dados técnicos de {product}", en: "Technical data for {product}", es: "Datos técnicos de {product}" },
        seeDetails: { pt: "Ver detalhes de {product}", en: "View details for {product}", es: "Ver detalles de {product}" },
        catalogImageAlt: { pt: "Imagem do catálogo para {product}", en: "Catalog image for {product}", es: "Imagen del catálogo de {product}" },
        defaultNote: {
            pt: "Recomendado entre {use} na formulação final, dependendo do tipo de produto e da avaliação de eficácia microbiológica.",
            en: "Recommended between {use} in the final formulation, depending on the product type and the microbiological efficacy evaluation.",
            es: "Recomendado entre {use} en la formulación final, dependiendo del tipo de producto y de la evaluación de eficacia microbiológica."
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
