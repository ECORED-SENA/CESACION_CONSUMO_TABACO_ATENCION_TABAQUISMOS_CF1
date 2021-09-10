<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Marco político y normativo para el control del tabaco

    p.mb-4 En coherencia con este tratado internacional, la Asamblea General de la ONU adoptó en 2015 la Agenda 2030 para el Desarrollo Sostenible, que reconoce que las tendencias actuales de consumo de tabaco a nivel mundial no son compatibles con el desarrollo sostenible, estableciendo la meta 3.4 de los Objetivos de Desarrollo Sostenible (ODS), mediante la cual los Estados Miembros del Convenio Marco para el Control de Tabaco (CMCT) se comprometen a alcanzar una reducción de un tercio en la mortalidad prematura de enfermedades no transmisibles para el 2030.

    .row.justify-content-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        img(src='@/assets/curso/tema3/img01.svg')
      .col-lg-5.mb-4.mb-lg-0.d-flex
        .cajon.color-primario.p-4
          <br><br><br>
          p El control del tabaco se constituye entonces como un medio para mejorar la salud de la población, reducir las desigualdades y fomentar el desarrollo sostenible en los países que son parte del Convenio Marco y requiere de un trabajo articulado y multisectorial.
    
    p.mb-5 El Convenio Marco de la Organización Mundial de la Salud para el Control de Tabaco (CMCT de la OMS) es el primer tratado negociado bajo los auspicios de la OMS, reafirmando el derecho de todas las personas al máximo nivel de salud posible como respuesta a la globalización de la epidemia del tabaquismo; se firmó en 2003 por 168 Estados miembros que representan el 90% de la población mundial.
    .h4.mb-5 Plan de medidas MPOWER
    p.mb-4 El Convenio Marco para el Control del Tabaco (CMCT) ofrece una estrategia organizada para dar respuesta a la epidemia del tabaquismo. La OMS ha diseñado un plan de medidas denominado MPOWER por sus siglas en inglés, cuya finalidad es reducir el consumo de tabaco a nivel mundial a través de la aplicación de políticas e intervenciones de control del tabaco de eficacia demostrada y observables en el tiempo (Organización Panamericana de la Salud OPS y Organización Mundial de la Salud OMS, 2016).
    p.mb-4 En la siguiente imagen interactiva con las letras MPOWER se presentan las medidas, para ello dé clic en cada letra:

    .row.justify-content-center.mb-4
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img02.png')
          .tarjeta.color-primario.p-3(x="10%" y="22%")
            .h4 Monitor tobacco use and prevention policies.
            p Vigilar el consumo de tabaco.
          .tarjeta.color-primario.p-3(x="23%" y="22%")
            .h4 Protect people from tobacco smoke
            p Proteger a la población del humo de tabaco.
          .tarjeta.color-primario.p-3(x="42%" y="22%")
            .h4 Offer help to quit tobacco use
            p Ofrecer ayuda para el abandono del tabaco.
          .tarjeta.color-primario.p-3(x="60%" y="22%")
            .h4 Warn about the dangers of tobacco
            p Advertir de los peligros del tabaco.
          .tarjeta.color-primario.p-3(x="77%" y="22%")
            .h4 Enforce bans on tobacco advertising, promotion and sponsorship
            p Hacer cumplir las prohibiciones sobre publicidad, promoción y patrocinio.
          .tarjeta.color-primario.p-3(x="94%" y="22%")
            .h4 Raise taxes on tobacco
            p Aumentar los impuestos al tabaco.
    
    .h4 Marco político y normativo en Colombia
    p.mb-4 El Ministerio de Salud y Protección Social de Colombia lidera la implementación de las intervenciones para el control y el abordaje del tabaquismo en los diferentes entornos, estableciendo lineamientos necesarios para la implementación de programas de atención del tabaquismo.

    .cajon-b.color-primario.p-4.mb-5
      p.mb-0 Colombia adoptó el CMCT de la OMS en 2008 y promulgó una ley de control del tabaco en 2009 (Ley 1335), promoviendo activamente en el control del tabaco, implementando las seis medidas ofrecidas en el paquete MPOWER de la OMS.
    p.mb-4 Entre la normatividad relacionada con las intervenciones para la cesación del consumo de tabaco se resalta la siguiente:

    .row.justify-content-center
      .col-lg-10
        LineaTiempoD.color-acento-contenido
          .row(numero="2006" titulo="Ley 1109 de 2006")
            .col-md-2
              img(src='@/assets/curso/tema3/img03.svg')
            .col-md-6.mb-4.mb-md-0
              p.text-small Ley 1109 de 2006 en la que se aprueba el Convenio Marco de la OMS para el control del tabaco", hecho en Ginebra, el 21 de mayo de 2003.
          .row(numero="2009" titulo="Ley 1335 de 2009")
            .col-md-2
              img(src='@/assets/curso/tema3/img03.svg')
            .col-md-6.mb-4.mb-md-0
              p.text-small Ley 1335 de 2009 en la que se establecen las disposiciones para prevenir daños a la salud de los menores de edad, población no fumadora y se estipulan políticas públicas para la prevención y el abandono del consumo de tabaco en la población colombiana. 
          .row(numero="2013" titulo="Resolución 1841 de 2013")
            .col-md-2
              img(src='@/assets/curso/tema3/img03.svg')
            .col-md-6.mb-4.mb-md-0
              p.text-small Resolución 1841 de 2013 en la que se adopta el Plan Decenal de Salud Pública 2012-2021. Una de las metas es disminuir la prevalencia y la oferta del consumo de tabaco e incrementar los servicios de cesación de tabaquismo.
          .row(numero="2018" titulo="Resolución 3280 de 2018")
            .col-md-2
              img(src='@/assets/curso/tema3/img03.svg')
            .col-md-6.mb-4.mb-md-0
              p.text-small Resolución 3280 de 2018 mediante la cual se adoptan los lineamientos técnicos y operativos de la RIA de promoción y mantenimiento de la salud y la RIA para la población materno perinatal y se establecen las directrices para su operación. En esta ruta se debe identificar el tabaquismo, brindar un consejo breve y derivar para su atención y control.
          .row(numero="2020" titulo="Directrices para desarrollar programas para la cesación del consumo de tabaco y atención del tabaquismo ")
            .col-md-2
              img(src='@/assets/curso/tema3/img03.svg')
            .col-md-6.mb-4.mb-md-0
              p.text-small En Colombia Ministerio de Salud y Protección Social, 2020.
          .row(numero="2021" titulo="Resolución 202 de 2021")
            .col-md-2
              img(src='@/assets/curso/tema3/img03.svg')
            .col-md-6.mb-4.mb-md-0
              p.text-small Resolución 202 de 2021 define el reporte obligatorio del consumo de tabaco mediante el cálculo del índice paquete año, este dentro de la anamnesis a realizar en la valoración integral desde la Ruta integral de atención para la promoción y mantenimiento de la salud.


</template>

<script>
export default {
  name: 'Tema3',
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
