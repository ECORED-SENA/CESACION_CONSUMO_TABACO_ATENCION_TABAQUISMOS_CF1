<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Tabaquismo, un problema de salud pública 
    
    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0.d-flex
        .cajon.color-primario.p-4
          p El tabaquismo es uno de los principales problemas de salud pública a nivel mundial, principal factor de riesgo de un importante número de enfermedades y responsable de una elevada carga de morbilidad y mortalidad como consecuencia de los efectos del tabaco sobre la salud de las personas que lo consumen y que están expuestas al humo de segunda mano. Adicionalmente, es necesario mencionar el impacto del tabaquismo sobre el desarrollo económico de los países consumidores, como consecuencia del costo derivado de la atención de las enfermedades atribuidas al tabaquismo y la mortalidad asociada.
      .col-lg-6.mb-4.mb-lg-0
        img(src='@/assets/curso/tema2/img01.png')

    p.mb-4 En síntesis, el tabaquismo se considera un problema de salud pública porque:

    .row.justify-content-center.mb-4
      .col-lg-11
        ol.lista-ol.lista-ol--separador
          li 
            span.text-bold a. 
            | Es una de las principales causas de enfermedad y muerte prevenible a nivel mundial.
          li 
            span.text-bold b. 
            | Es el principal factor de riesgo de las principales enfermedades no transmisibles: cardiovasculares, cáncer, EPOC (enfermedad pulmonar obstructiva crónica) y diabetes mellitus.
          li 
            span.text-bold c. 
            | Se estima una prevalencia de consumo de tabaco a nivel mundial de alrededor del 25 %, con una elevada carga de mortalidad. Más de 8.2 millones de personas mueren cada año como consecuencia del tabaquismo (7 millones atribuidas al consumo directo de productos del tabaco y 1.2 millones como consecuencia de la exposición al humo del tabaco ambiental).
          li 
            span.text-bold d. 
            | Si no se toman medidas urgentes, el número de muertes anuales podría elevarse aún más en los próximos años.
          li 
            span.text-bold e. 
            | El consumo de tabaco aumenta el riesgo de desarrollar otras enfermedades como la tuberculosis, de afectar el curso de las enfermedades mentales, generando la necesidad de un abordaje más complejo como consecuencia de la dependencia tabáquica, impactando negativamente los desenlaces en salud de los pacientes con infección por VIH en comparación con los no fumadores, por ejemplo, mayor riesgo de desarrollar neoplasias pulmonares y enfermedades respiratorias crónicas.

    .tarjeta.color-celeste.p-5
      .row.justify-content-center
        .col-lg-3.mb-4.mb-lg-0
          img(src='@/assets/curso/tema1/img13.svg')
        .col-lg-6
          .titulo-segundo
            h2 Epidemiología del tabaquismo en el mundo 
          p.mb-4 A continuación, se presentarán algunos datos contundentes que permitirán comprender la magnitud del tabaquismo sobre la salud pública a nivel mundial y nacional:
          a.boton.me-3.indicador__container(
            :href="obtenerLink('/downloads/Epidemiologia.pdf')"
            target="_blank"
            type="application/pdf"
            @mouseover="mostrarIndicador = false"
          )
            span Descargar
            i.fas.fa-file-download
            .indicador--click(v-if="mostrarIndicador")
    Separador
    #t_2_1.titulo-segundo
      .h4 2.1 Carga de la enfermedad atribuida al tabaquismo en Colombia
    
    p.mb-4 El panorama del impacto del tabaquismo en Colombia no es diferente a lo que sucede a nivel mundial, siendo también una problemática de salud pública claramente identificada en la región de Las Américas y en Colombia.
    p.mb-4 La carga de la enfermedad asociada al consumo de tabaco en Colombia es muy elevada, como se puede evidenciar con los siguientes datos:

     .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        .row.align-items-center.BG02
          .col-2.BG01.p-3
            img(src='@/assets/curso/tema2/img02.svg')
          .col-10.p-3
            p Se estima que el 16,1% de todas las muertes que se registran en el país se atribuyen al tabaquismo, representando 32.088 muertes por año que podrían ser evitadas, alrededor de 88 personas diarias que pierden la vida como consecuencia del tabaquismo.
      .col-lg-10.mb-4
        .row.align-items-center.BG02
          .col-2.BG01.p-3
            img(src='@/assets/curso/tema2/img03.svg')
          .col-10.p-3
            p El mayor peso de esta mortalidad anual está representado por las enfermedades cardiovasculares, enfermedad pulmonar obstructiva crónica y cáncer, principalmente pulmonar. El tabaquismo pasivo ocupa un lugar importante dentro del listado de mortalidad atribuible al tabaquismo.
      .col-lg-10.mb-4
        .row.align-items-center.BG02
          .col-2.BG01.p-3
            img(src='@/assets/curso/tema2/img04.svg')
          .col-10.p-3
            p El 16% de las muertes cardiovasculares y el 13% de las producidas por accidentes cerebrovasculares pueden atribuirse al tabaquismo. Estos porcentajes son mucho más elevados en la patología respiratoria como EPOC (77%) y cáncer de pulmón (80%), debido a la asociación causal con el humo del tabaco (Peña, Osorio, Gamboa, 2019).
      .col-lg-10.mb-4
        .row.align-items-center.BG02
          .col-2.BG01.p-3
            img(src='@/assets/curso/tema2/img05.svg')
          .col-10.p-3
            p Cada año se pierden en promedio 674.262 años de vida por muerte prematura o discapacidad (Pichon, 2013).

    Separador
    #t_2_2.titulo-segundo
      .h4 2.2 Influencia del tabaquismo en la infección por coronavirus
    
    .row.justify-content-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        hr
        .bloque-texto-d.color-primario
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left 
            h3.text-regular Los fumadores tienen mayor incidencia de resfriados e infecciones respiratorias como las ocasionadas por el virus influenza, neumonías bacterianas y tuberculosis, presentando una mayor posibilidad de complicaciones en las personas con un grado de tabaquismo más alto.  
          .bloque-texto-d__autor 
            .h5.mb-0 Tonnesen, Marott, Nordestgaard,
            .h5.mb-0 Bojesen & Lange, 2019.
              i.fas.fa-quote-right
      .col-lg-4
        img.imgHG(src='@/assets/curso/tema2/img06.svg')
    
    p.mb-5 En la siguiente tabla se presentan algunas asociaciones entre el consumo de tabaco y la incidencia de cuadros respiratorios:
    
    .row.justify-content-center.mb-4
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          span Asociaciones consumo de tabaco e incidencia de cuadros respiratorios
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th.text-black Tabaquismo como factor de riesgo para
                th.text-black OR
            tbody
              tr
                td Neumonía adquirida en la comunidad
                td.text-center 2,4
              tr
                td Enfermedad neumocócica invasiva
                td.text-center 2,4 – 4
              tr
                td Influenza H1N1
                td.text-center 5 - 6
    
    p.mb-4 OR (Odds Ratio) su traducción al español es razón de momios o razón de probabilidades, se define como la posibilidad que una condición de salud o enfermedad se presente en un grupo de población frente al riesgo que ocurra en otro, por ejemplo, la probabilidad de que ocurra neumonía en un fumador es 2,4 veces mayor que en un no fumador.

    .row.justify-content-center.mb-4
      .col-lg-9
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img07.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La COVID-19 (Coronavirus disease 2019) es una enfermedad infecciosa producida por el virus SARS-CoV-2, declarada por la Organización Mundial de la Salud en marzo de 2020 como una pandemia, afectando a más de 117 millones de personas, con una mortalidad de más de 2.5 millones de personas con corte a marzo de 2021.

    .h4 ¿Cuál es la relación entre la COVID-19 y el tabaquismo?

    .row.justify-content-center.mb-4
      .col-lg-6
        .tarjeta-avatar
            img(src='@/assets/curso/tema2/img08.svg' alt='AvatarTop')
            .tarjeta.color-rose.p-4
              p Se ha encontrado evidencia entre el tabaquismo activo y la mayor severidad de la COVID. Los fumadores con la infección presentan mayor probabilidad de complicaciones, de necesidad de hospitalización y de ventilación mecánica.
      .col-lg-6
        .tarjeta-avatar
            img(src='@/assets/curso/tema2/img09.svg' alt='AvatarTop')
            .tarjeta.color-rose.p-4
              p El antecedente de una enfermedad como la enfermedad pulmonar obstructiva crónica (relacionada en un alto porcentaje con el tabaquismo) empeora el pronóstico en los pacientes con COVID-19.
          
    p.mb-4 El incremento de enfermedades infecciosas en personas consumidoras de tabaco es multifactorial, probablemente relacionado con procesos de inflamación celular, deterioro del aclaramiento mucociliar, cambios en la adherencia y alteración del epitelio respiratorio, entre otros mecanismos que son atribuibles a las diferentes sustancias de los productos del tabaco como acroleína, acetaldehído, formaldehído, óxido nítrico y radicales libres (Rábade, Signes & Jiménez, 2021), el acto de fumar o “vapear” (que implica llevar los dedos a la boca de manera reiterada) aumenta la posibilidad de transmisión del virus por vía oral. Adicionalmente, las medidas de confinamiento poblacional pueden favorecer entornos familiares de fumadores y exposición al humo de segunda y tercera mano.

    .h4.mb-4 Medidas de control de tabaco en el marco de la pandemia

    .row.align-items-center.mb-4
      .col-lg-6
        .bloque-texto-d.color-primario.p-3
          .bloque-texto-d__texto.mb-2
            img(src='@/assets/curso/tema2/img10.png')
      .col-lg-6
        p Las medidas de control del tabaquismo en época de pandemia son más que necesarias, con el propósito de favorecer la protección de las personas expuestas al humo de segunda mano en los entornos familiares y promover intentos de cesación en los consumidores. En este sentido, se requiere ofrecer al fumador acompañamiento terapéutico para la dependencia tabáquica, a través de otras modalidades de atención como la telesalud, uso de aplicaciones y otras estrategias que promuevan más intentos de cesación.  De esta manera, ofrecer consejería para el abandono del tabaco es una intervención necesaria, enfatizando en que además de las medidas de bioseguridad, el dejar de fumar posiblemente pueda ayudar a reducir la transmisión comunitaria de la infección por SARS CoV-2  (Asociación Colombiana de Neumología y Cirugía de Tórax, 2020).

    p.mb-4 En conclusión, la pandemia de COVID-19 representa una oportunidad para abordar el tabaquismo. Diferentes sociedades científicas iberoamericanas elaboraron un documento de posicionamiento con unas recomendaciones para los profesionales sanitarios, invitándolos a:
    
    .row.mb-4
      .col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta.color-blue.p-4
          .row.mb-4
            .col-lg-5
              img(src='@/assets/curso/tema2/img11.svg')
          .h1 01
          .h2 Advertencia
          p Hacer un llamado de advertencia a la población general sobre el mayor riesgo infección por SARS-Cov-2 en fumadores y vapeadores y mayor riesgo de presentar complicaciones.
      .col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta.color-gray.p-4
          .row.mb-4
            .col-lg-5
              img(src='@/assets/curso/tema2/img12.svg')
          .h1 02
          .h2 Asesorar
          p Asesorar a sus pacientes sobre la importancia de dejar de fumar y promover otras modalidades de atención para asistir a los pacientes fumadores.
      .col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta.color-blue.p-4
          .row.mb-4
            .col-lg-5
              img(src='@/assets/curso/tema2/img13.svg')
          .h1 03
          .h2 Desalentar
          p Desalentar el uso de productos del tabaco y cigarrillos electrónicos que pueden actuar como fómites para diseminar la infección.
      .col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta.color-gray.p-4
          .row.mb-4
            .col-lg-5
              img(src='@/assets/curso/tema2/img14.svg')
          .h1 04
          .h2 Promover
          p Promover ambientes públicos y privados 100% libres de humo de tabaco.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
