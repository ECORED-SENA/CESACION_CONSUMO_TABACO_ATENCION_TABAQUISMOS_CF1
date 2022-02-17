export default {
  global: {
    componenteFormativo: 'Control de tabaco y rol de los profesionales',
    descripcionCurso:
      'El contenido de este componente ayudará a reconocer el tabaquismo como un problema de salud pública, identificando los diferentes productos del tabaco y sus efectos en la salud. Adicionalmente, se examinará el marco político y normativo vigente para el control del tabaco y se describirá el papel que cumplen los profesionales de la salud en el control del tabaquismo.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tipos de productos de tabaco y sus derivados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Efectos en la salud: productos del tabaco',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Efectos en la salud por otros productos derivados del tabaco y sucedáneos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Efectos en la salud por exposición al humo del tabaco ambiental',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tabaquismo, un problema de salud pública',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Carga de enfermedad atribuida al tabaquismo en Colombia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Influencia del tabaquismo en la infección por coronavirus',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Marco político y normativo para el control del tabaco',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Rol de los profesionales de la salud en el control del tabaco',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },

      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'American Cancer Society. (2019). Sustancias químicas nocivas en los productos de tabaco. Cancer.org.',
      link:
        'https://www.cancer.org/es/cancer/causas-del-cancer/tabaco-y-cancer/agentes-cancerigenos-en-los-productos-de-tabaco.html',
    },
    {
      referencia:
        'Asociación Colombiana de Neumología y Cirugía de Tórax. (2020).  Influencia del tabaquismo en la infección por coronavirus. Asoneumocito.',
      link:
        'https://revistas.asoneumocito.org/index.php/rcneumologia/article/view/512',
    },
    {
      referencia:
        'Burgos, A., Zitko, P., Guerrero, A, & Alfaro, T. (2008). Encuesta mundial de tabaquismo en estudiantes de profesiones de salud (EMTES). Ministerio de Salud de Chile.',
      link:
        'https://www.paho.org/hq/dmdocuments/2011/EMTES%20Chile,%202008.pdf',
    },
    {
      referencia:
        'Corvalán, B., M. (2017). Anexo 1. Glosario. Revista chilena de enfermedades respiratorias, 33(3), p. 252-253.',
      link: 'https://dx.doi.org/10.4067/s0717-73482017000300252',
    },
    {
      referencia:
        'DANE. (2019). Encuesta nacional de consumo de sustancias psicoactivas (ENCSPA). DANE.',
      link:
        'https://www.dane.gov.co/index.php/en/estadisticas-por-tema/salud/encuesta-nacional-de-consumo-de-sustancias-psicoactivas-encspa',
    },
    {
      referencia:
        'Doll, R., Peto, R., Wheatley, K., Gray, R. & Sutherland, I. (1994). Mortality in relation to smoking: 40 years observations on male British doctors. BMJ (Clinical research ed.), 309(6959), p. 901–911',
    },
    {
      referencia:
        'Drope, J. y Schuluger, N. (2018). The tobbaco atlas. American Cancer Society. ',
      link:
        'https://files.tobaccoatlas.org/wp-content/uploads/2018/03/TobaccoAtlas_6thEdition_LoRes.pdf',
    },
    {
      referencia: 'GreenFacts. (s.f). Tabaquismo pasivo. GreenFacts.',
      link: 'https://www.greenfacts.org/es/glosario/tuv/tabaquismo-pasivo.htm',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). Panorama de la salud de los escolares en Colombia. MinSalud.',
      link:
        'https://www.minsalud.gov.co/Paginas/Panorama-de-la-salud-de-los-escolares-en-Colombia.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2019). ABECÉ. Lo que debes conocer sobre los cigarrillos electrónicos. MinSalud',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/abece-general-cigarrilos-electronicos.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2020). Directrices para promover la cesación del consumo de tabaco y atención del tabaquismo. MinSalud.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/directrices-cesacion-consumo-atencion-tabaco.pdf',
    },
    {
      referencia:
        'NCBI. (2010). Glosario. NCBI. https://www.ncbi.nlm.nih.gov/books/NBK47498/',
    },
    {
      referencia:
        'ONODC. (2016). III Estudio epidemiológico andino sobre consumo de drogas en la población universitaria. Informe regional. ONODC.',
      link:
        'https://www.unodc.org/documents/peruandecuador/Informes/Otros/Informe_Universitario_Regional.pdf',
    },
    {
      referencia:
        'Organización Panamericana de la Salud OPS y Organización Mundial de la Salud OMS. (2016). Informe sobre el control del tabaco en la Región de Las Américas. A 10 años del Convenio Marco de la Organización Mundial de la Salud para el control del tabaco. Iris.',
      link: 'http://iris.paho.org/xmlui/handle/123456789/28380',
    },
    {
      referencia:
        'Peña, E., Osorio, D. y Gamboa, O. (2019). Carga de enfermedad atribuible al uso de tabaco en Colombia y potenciales beneficios sanitarios y económicos del aumento del precio del cigarrillo mediante impuestos. Revista Colombiana de Cancerología, 23(4), p. 135-143.',
    },
    {
      referencia:
        'Pichon, R., Bardach, A., Alcaraz, A., Caporale, J., Augustovski, F., Peña, T., Osorio, D., Pérez, A., Gamboa, G. O, y Garay, C. (2013). Carga de enfermedad atribuible al tabaquismo en Colombia. Docplayer.',
      link: 'https://docplayer.es/47934587-Al-tabaquismo-en-colombia.html',
    },
    {
      referencia:
        'Rábade, C., Signes, J. & Jiménez, C. (2021). COVID-19 and tobacco. Publimed.',
      link: 'https://pubmed.ncbi.nlm.nih.gov/32917432/',
    },
    {
      referencia:
        'Tonnesen, P., Marott, J., Nordestgaard, B., Bojesen, S. & Lange, P. (2019). Secular trends in smoking in relation to prevalent and incident smoking-related disease: a prospective population-based study. Tob Induc Dis. Pubmed.',
      link: 'https://pubmed.ncbi.nlm.nih.gov/31768164',
    },
  ],
  glosario: [
    {
      termino: 'Fumador actual',
      significado:
        'Persona que fumó algún cigarrillo en los últimos 30 días (Corvalán y Paz, 2017).',
    },
    {
      termino: 'Humo del tabaco ambiental',
      significado:
        'También conocido como “humo de tabaco de segunda mano”, humo inhalado por un individuo no implicado activamente en el tabaquismo, pero que está expuesto al humo de la punta del cigarrillo y al humo exhalado por el fumador (NCBI, 2010).',
    },
    {
      termino: 'Productos del tabaco',
      significado:
        'Los productos preparados totalmente o en parte utilizando como materia prima hojas de tabaco y destinados a ser fumados, chupados, mascados o aspirados (Corvalán y Paz, 2017).',
    },
    {
      termino: 'Profesional sanitario de atención primaria',
      significado:
        'Servidor de Medicina, Enfermería, Psicología, Farmacología, Odontología / salud oral, Fisioterapia, Terapia ocupacional y Terapia respiratoria que presta servicios sanitarios básicos para problemas distintos al consumo de tabaco en sí mismo. Se estimula a los profesionales sanitarios de atención primaria a que identifiquen a los consumidores de tabaco y a que intervengan, independientemente de que el tabaquismo sea o no el motivo de consulta (NCBI, 2010).',
    },
    {
      termino: 'Tabaquismo',
      significado:
        'Enfermedad crónica generada por la adicción a la nicotina, sustancia presente en todos los productos con tabaco; la acción de dicha sustancia produce un consumo compulsivo pese a que el individuo quiera parar de fumar, es decir, genera dependencia física, psicológica y social.',
    },
    {
      termino: 'Tabaquismo pasivo',
      significado:
        'inhalación involuntaria del humo de otra persona que fuma tabaco. Este humo ambiental de tabaco es una mezcla del humo exhalado por los fumadores y del humo emitido directamente por la combustión del cigarrillo al ambiente (Green Facts, s.f.).',
    },
  ],
  complementario: [
    {
      texto:
        'Drope, J. y Schuluger, N. (2018). The tobbaco atlas. American Cancer Society.',
      tipo: 'Libro',
      link:
        'https://files.tobaccoatlas.org/wp-content/uploads/2018/03/TobaccoAtlas_6thEdition_LoRes.pdf',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social. (2018). Abecé. Efectos en la salud por consumo de tabaco. MinSalud.',
      tipo: 'Artículo',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/abece-efectos-salud-tabaco.pdf ',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social. (2020). Directrices para promover la cesación del consumo de tabaco y atención del tabaquismo. MinSalud.',
      tipo: 'Artículo',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/directrices-cesacion-consumo-atencion-tabaco.pdf',
    },
    {
      texto:
        'OMS. (2003). El Convenio Marco de la OMS para el control del tabaco. OMS.',
      tipo: 'Documento',
      link: 'http://whqlibdoc.who.int/publications/2003/9243591010.pdf?ua=1',
    },
    {
      texto:
        'OMS. (2008). Mpower – Un plan de medidas para hacer retroceder la epidemia de tabaquismo. OMS.',
      tipo: 'Documento',
      link: 'https://www.who.int/tobacco/mpower/mpower_spanish.pdf',
    },
    {
      texto:
        'Defensoría del Pueblo. (2017). Informe de seguimiento al cumplimiento del Convenio Marco de la OMS para el control del tabaco en Colombia. Defensoría del Pueblo.',
      tipo: 'Informe',
      link: 'https://www.defensoria.gov.co/public/pdf/Informe_tabaco.pdf',
    },
    {
      texto:
        'Fiore, C., Bailey, W., Cohen &  S.J. (2015).  A clinical practice guideline for treating tobacco use and dependence: 2008 update: A U.S. Public Health Service Report.',
      tipo: 'Libro',
      link:
        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4465757/pdf/nihms59469.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yolanda Sandoval',
        cargo: 'Profesional especializado',
        centro:
          'Ministerio de Salud- Subdirección de enfermedades no transmisibles',
      },
      {
        nombre: 'Giovanna Andrea',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Antioquia - Centro de Servicios de Salud',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Yolanda Ines Sandoval Gil',
        cargo: 'Profesional Especializado',
        centro:
          'Ministerio de Salud y Protección Social – Subdirección de Enfermedades No Transmisibles',
      },
      {
        nombre: 'Nelci Becerra Martínez',
        cargo: 'Asesora',
        centro: 'Organización Panamericana de la Salud - Proyecto FCTC 2030',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: [
          'María Natalia Maldonado Delgado',
          'Luis Gabriel Urueta Alvarez',
        ],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Arnulfo Beltrán Mojica',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Rafael Augusto Mantilla López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
