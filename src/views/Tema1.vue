<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Tipos de productos de tabaco y sus derivados
       
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          .row.justify-content-center 
            .col-lg-2
              img(src='@/assets/curso/tema1/img01.svg')
            .col-lg-8
              br
              p.mb-4 Existen diversos tipos de productos derivados del tabaco, y en la actualidad, circulan nuevos productos que se asemejan la acción de fumar que generan adicción y efectos en la salud. A continuación, se presentará una breve descripción de los tipos de tabaco:
    
    SlyderB.mb-5(:datos="datosSlyder")

    p.mb-4 Identificar de manera sistemática el uso y consumo de los productos del tabaco y sus derivados (incluyendo los cigarrillos electrónicos), en todos los usuarios que asisten a los servicios de salud o que están en los diferentes entornos (laboral, educativo, comunitario), es fundamental para garantizar un adecuado abordaje del tabaquismo y ofrecer un tratamiento oportuno que permita alcanzar la cesación del consumo y la exposición al humo de segunda mano.
    p.mb-4 Ahora, la definición de algunos conceptos clave:

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        .row.align-items-center.BG02
          .col-2.BG01.p-3
            img(src='@/assets/curso/tema1/img09.svg')
          .col-10.p-3
            h4 Fumar tabaco
            p Consumo de productos de tabaco fumado.
      .col-lg-10.mb-4
        .row.align-items-center.BG02
          .col-2.BG01.p-3
            img(src='@/assets/curso/tema1/img10.svg')
          .col-10.p-3
            h4 Consumidor de productos del tabaco (comúnmente denominado fumador)
            p Persona que ha fumado tabaco durante el último mes, sin importar la cantidad, incluso uno.
      .col-lg-10.mb-4
        .row.align-items-center.BG02
          .col-2.BG01.p-3
            img(src='@/assets/curso/tema1/img11.svg')
          .col-10.p-3
            h4 Fumador actual
            p Persona que ha consumido cualquier cantidad de tabaco fumado durante el último mes. 

    Separador
    #t_1_1.titulo-segundo
      .h4 1.1 Efectos en la salud: productos del tabaco
    
    p.mb-4 Dentro de los efectos para la salud que generan los productos del tabaco sobre las personas consumidoras se encuentran los siguientes:

    .row.mb-4
      .col-lg-4.d-flex.mb-4
        .cajon.color-gray.p-3
          ol.lista-ol
            li 
              span.text-bold 1. 
              |  Mayor riesgo de enfermedades, especialmente cardiovasculares, respiratorias y diferentes tipos de cáncer como consecuencia de las sustancias químicas identificadas en el humo del tabaco.

      .col-lg-4.d-flex.mb-4
        .cajon.color-gray.p-3
          ol.lista-ol
            li 
              span.text-bold 2.
              | De los tipos de cáncer atribuidos al tabaquismo se encuentran: cáncer pulmonar, cáncer de cabeza y cuello, de boca, faringe, laringe, estómago, páncreas, vejiga, entre otros y algunos tipos de leucemia. En las mujeres el cáncer de cérvix está asociado al tabaquismo.
      
      .col-lg-4.d-flex.mb-4
        .cajon.color-gray.p-3
          ol.lista-ol
            li 
              span.text-bold 3.
              | De las enfermedades respiratorias asociadas al consumo del tabaco se resaltan: la enfermedad pulmonar obstructiva crónica (EPOC), asma, bronquitis crónica e infecciones respiratorias.

      .col-lg-4.d-flex.mb-4
        .cajon.color-gray.p-3
          ol.lista-ol
            li 
              span.text-bold 4.
              | Aumenta la probabilidad de padecer otro tipo de enfermedades como úlcera péptica, aneurisma de la aorta abdominal, alteraciones de la fertilidad, impotencia sexual en los hombres, enfermedad periodontal, entre otras.
      
      .col-lg-4.d-flex.mb-4
        .cajon.color-gray.p-3
          ol.lista-ol
            li 
              span.text-bold 5.
              | Empeoran los desenlaces clínicos de otras enfermedades como la tuberculosis, las enfermedades mentales, la infección por el virus de la inmunodeficiencia humana (VIH) y el abuso de alcohol.

      .col-lg-4.d-flex.mb-4
        .cajon.color-gray.p-3
          ol.lista-ol
            li 
              span.text-bold 6.
              | Puede generar otros síntomas como dolor de garganta, alteración del gusto, mal aliento, envejecimiento prematuro de la piel, dientes amarillos, entre otros.
      
      .col-lg-4.d-flex.mb-4
        .cajon.color-gray.p-3
          ol.lista-ol
            li 
              span.text-bold 7.
              | En general, los consumidores de productos de tabaco tienen mayor riesgo de morir que los no consumidores. Se ha demostrado que los fumadores viven en promedio 7,5 años menos que los no fumadores.

      .col-lg-4.d-flex.mb-4
        .cajon.color-gray.p-3
          ol.lista-ol
            li 
              span.text-bold 8.
              | En las gestantes se ha reportado mayor riesgo de aborto espontáneo, desprendimiento placentario, parto pretérmino, ruptura prematura de membranas y bajo peso al nacer. 
      
      .col-lg-4.d-flex.mb-4
        .cajon.color-gray.p-3
          ol.lista-ol
            li 
              span.text-bold 9.
              | En niños mayor riesgo de síndrome de muerte súbita del lactante, síntomas respiratorios, infecciones respiratorias, otitis y asma.

    p.mb-4 En el siguiente recurso de aprendizaje, se presenta gráficamente los daños del tabaco sobre el consumidor:

    .row.justify-content-center.mb-4
      .col-lg-4
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img12.svg')

          .tarjeta.color-primario.p-3(x="56%" y="6%")
            p 1. Caida del cabello, cataratas, ceguera, arrugas, apoplejía, derrame cerebral, adicción/abstinencia, química cerebral alterada, ansiedad. La nicotina penetra rápidamente en el cerebro estimulando la liberación de vasopresina, hormona del crecimiento, prolactina y opioides endógenos, influyendo en el estado emocional.
          .tarjeta.color-primario.p-3(x="56%" y="11%")
            p 2. Deterioro de la dentadura, cáncer de boca y/o garganta, pigmentación dentaria, gingivitis y periodontitis, leucoplasia, estomatitis nicotínica, pérdida de dientes, caríes de cuelloradiculares, cáncer de cavidades nasales y senos paranasales, rinosinusitis crónica, deterioro del  sentido del olfato, pérdida de audición.
          .tarjeta.color-primario.p-3(x="56%" y="16%")
            p 3. Cáncer de labios, boca, garganta, faringe, y/o laringe, sentido del gusto deteriorado, halitosis.
          .tarjeta.color-primario.p-3(x="56%" y="21%")
            p 4. Cáncer de pulmón, bronquiso y tráquea,  posible aumento de cáncer de seno, síntomas respiratorios crónicos, enfermedad pulmonar obstructiva crónica y efisema, infección respiratoria, falta de aire, asma, tos crónica, producción excesiva de esputo.
          .tarjeta.color-primario.p-3(x="56%" y="25%")
            p 5. Trombosis coronaria (ataque cardíaco), cardiopatías, aterosclerosis,  cáncer de esófago, gástrico, de colon y pancreático, aneurisma aórtico abdominal, úlcera péptica.
          .tarjeta.color-primario.p-3(x="79%" y="29%")
            p 6. Osteopososis, psoriasis, pérdida del tono de la piel, envejecimiento prematuro.
          .tarjeta.color-primario.p-3(x="56%" y="33%")
            p 7. Cáncer de páncreas, úlcera gástrica.
          .tarjeta.color-primario.p-3(x="56%" y="38%")
            p 8. Cáncer de riños y ureteres, cáncer de hígado.
          .tarjeta.color-primario.p-3(x="56%" y="46%")
            p 9. Cácer de aparato urinario, infertilidad, impotencia, deformación de espermatozoides, cáncer de utero, muerte por cáncer de prostata, desórdenes menstruales y dolorosos,  cáncer de cuello uterino y ovario, menopausia precoz, aborto.
          .tarjeta.color-primario.p-3(x="64%" y="58%")
            p 10. Psoriasis.
          .tarjeta.color-primario.p-3(x="82%" y="54%")
            p 11. Discrómía de los dedos, enfermedad periférica, mala circulación (dedos fríos).
          .tarjeta.color-primario.p-3(x="66%" y="80%")
            p 12. Enfermedad de Buerger.
          .tarjeta.color-primario.p-3(x="45%" y="80%")
            p 13. Causa una marcada depresión de los reflejos osteotendinosos y aumenta el tono muscular general, osteoporosis, artritis reumatoide, enfermedad periférica vascular, dolor de piernas, gangrena, trombosis venosa profunda.
          .tarjeta.color-primario.p-3(x="45%" y="68%")
            p 14. Cáncer de medula osea, problemas de cicatrización, mala recuperación post-quirúrgica.
          .tarjeta.color-primario.p-3(x="44%" y="58%")
            p 15. Menor resistencia a las infecciones, posible aumento de enfermedades alérgicas, deabetes, muerte súbita.
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p Aunque el riesgo de contraer enfermedades atribuidas al tabaquismo puede estar mediado por una relación dosis-respuesta, no hay formas ni dosis de consumo de tabaco seguras para la salud, así como tampoco hay un nivel seguro de exposición al humo de tabaco de segunda mano. 
            strong La recomendación categórica es no consumir ningún producto de tabaco ni sus derivados, 
            | como principal medida para prevenir enfermedades asociadas con el tabaquismo.

    Separador
    #t_1_2.titulo-segundo
      .h4 1.2	Efectos en la salud por otros productos derivados del tabaco y sucedáneos
    
    p.mb-4 Aunque los productos del tabaco sin humo se promocionan como productos más seguros que los cigarrillos combustibles también pueden generar riesgos para la salud, como el tabaco masticado, vapeado o cualquier forma de tabaco sin humo, estos pueden producir efectos en las personas que lo consumen, no existe ningún tipo de producto de tabaco que no genere riesgos para la salud.

    .tarjeta.color-celeste.p-5
      .row.justify-content-center
        .col-lg-3.mb-4.mb-lg-0
          img(src='@/assets/curso/tema1/img13.svg')
        .col-lg-6
          .titulo-segundo
            h2 Efectos para la salud 
          p.mb-4 A continuación, se describirán algunos de los efectos para la salud que pueden generar otros productos derivados del tabaco:
          a.boton.me-3.indicador__container(
            :href="obtenerLink('/downloads/Efectos_salud.pdf')"
            target="_blank"
            type="application/pdf"
            @mouseover="mostrarIndicador = false"
          )
            span Descargar
            i.fas.fa-file-download
            .indicador--click(v-if="mostrarIndicador")

    Separador
    #t_1_2.titulo-segundo
      .h4 1.3	Efectos en la salud por exposición al humo del tabaco ambiental

    p.mb-4 El tabaco es el único producto socialmente aceptado que además de generar daños en la salud de las personas que lo consumen, también es nocivo para las personas expuestas al humo del tabaco ambiental, quienes tienen mayor riesgo de desarrollar enfermedades atribuibles al tabaquismo (Drope, 2018).
    p.mb-4 En el siguiente gráfico se encuentran algunas de las enfermedades relacionadas con la exposición al humo del tabaco ambiental:

    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta.flip-card
          .tarjeta.flip-card-inner
            .tarjeta.flip-card-front
              img.imageTarget(src='@/assets/curso/tema1/img14.png' alt='Avatar')
            .tarjeta.flip-card-blue.p-3
              .h4.text-white Evidencia suficiente:
              p.text-white.mb-4
                | Enfermedad arterial coronaria
                br
                | Cáncer de pulmón
                br
                | Efectos reproductivos en la mujer
              .h4.text-white Evidencia sugestiva:
              p.text-white.mb-4
                | Accidente cerebrovascular
                br
                | Cáncer de seno paranasal
                br
                | Cáncer de mama
                br
                | Ateroesclerosis
                br
                | Enfermedad pulmonar obstructiva crónica, síntomas respiratorios crónicos, asma, función pulmonar alterada
                br
                | Parto prematuro
      .col-lg-6
        .tarjeta.flip-card
          .tarjeta.flip-card-inner
            .tarjeta.flip-card-front
              img.imageTarget(src='@/assets/curso/tema1/img15.png' alt='Avatar')
            .tarjeta.flip-card-red.p-3
              .h4.mb-4 Evidencia suficiente:
              p.mb-4
                | Enfermedad del oído medio
                br
                | Síntomas respiratorios como tos y resuello
                br
                | Alteración de la función pulmonar
                br
                | Síndrome infantil de muerte súbita (SIMS)
                br
                | Enfermedad respiratoria baja, incluidas infecciones
                br
                | Bajo peso al nacer
              .h4 Evidencia sugestiva:
              p.mb-4
                | Tumores cerebrales
                br
                | Linfoma
                br
                | Leucemia
                br
                | Asma
    separador
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Tabaco que se quema',
        texto:
          'Los cigarrillos combustibles, puros, cigarritos y pipas están hechos de hojas de tabaco y aditivos. El humo de tabaco generado por la combustión del tabaco contiene miles de sustancias químicas, pero al menos 70 de estas son agentes cancerígenos. La nicotina es el ingrediente que produce la adicción en las personas (American Cancer Society, 2019).',
        imagen: require('@/assets/curso/tema1/img02.png'),
      },
      {
        titulo: 'Tabaco sin humo',
        texto:
          'Son productos que no se queman, incluye el tabaco en polvo o rapé (rapé seco o húmedo), el tabaco soluble y el tabaco para masticar. Estos productos contienen sustancias carcinógenas como las nitrosaminas, el benzopireno y otros hidrocarburos aromáticos policíclicos. Al igual que otras formas de tabaco contiene sustancias radiactivas y nicotina. Su consumo aumenta el riesgo de padecer neoplasias de cabeza y cuello y cáncer de boca (American Cancer Society, 2019).',
        imagen: require('@/assets/curso/tema1/img03.png'),
      },
      {
        titulo: 'Pipas de agua (narguile)',
        texto:
          'Es una pipa que cuenta con un compartimento donde se quema un tabaco de sabores y a través de un tubo flexible se conecta a otro compartimento lleno de agua por el que se filtra el humo que se aspira, la cantidad de humo inhalado con su uso es significativamente mayor al inhalado con los cigarrillos combustibles.',
        imagen: require('@/assets/curso/tema1/img04.png'),
      },
      {
        titulo: 'Productos de tabaco solubles',
        texto:
          'Son productos con formas específicas redondeadas o alargadas, muy similares en su forma a los dulces comestibles.',
        imagen: require('@/assets/curso/tema1/img05.png'),
      },
      {
        titulo: 'Cigarrillos electrónicos',
        texto:
          'También conocidos como e-cigarrillos, vapeadores, mods, e-pens o juuls son dispositivos electrónicos cuyo diseño imita los productos de tabaco convencionales o elementos electrónicos populares como memorias USB, los cuales generan un aerosol que suele contener aromatizantes, disueltos en propilenglicol o glicerina, mediante el calentamiento de una solución (líquido) (Ministerio de Salud y Protección Social, 2019). Los cigarrillos electrónicos se pueden clasificar en dos categorías: aquellos con suministro de nicotina y sin suministro de nicotina.',
        imagen: require('@/assets/curso/tema1/img06.png'),
      },
      {
        titulo: 'Sistemas electrónicos de administración de nicotina',
        texto:
          'Son dispositivos que funcionan con baterías que calientan un líquido con nicotina, propilenglicol y/o glicerina vegetal y sustancias químicas aromáticas que generan un aerosol al ser inhalado (OMS, 2016).',
        imagen: require('@/assets/curso/tema1/img07.png'),
      },
      {
        titulo: 'Productos de tabaco calentados',
        texto:
          'Estos producen aerosoles con nicotina y otras sustancias químicas a través del calentamiento del tabaco hasta 350 °C (Drope, 2018).',
        imagen: require('@/assets/curso/tema1/img08.png'),
      },
    ],
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
