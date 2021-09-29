<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Rol de los profesionales de la salud en el control del tabaco
    
    p.mb-4 Es importante que los profesionales de la salud comprendan por qué es importante participar en el control del tabaco, para lo cual se resaltan los siguientes aspectos:

    .row.justify-content-center.mb-4
      .col-lg-11
        ol.lista-ol.lista-ol--separador
          li 
            span.text-bold a. 
            | Porque el tabaquismo es uno de los principales factores de riesgo prevenible de un gran número de enfermedades, y por sí mismo se considera una enfermedad que ocasiona daño tanto a la persona que consume los productos del tabaco y sus derivados como a las personas expuestas al humo del tabaco ambiental.
          li 
            span.text-bold b. 
            | Porque existen intervenciones efectivas para ayudar a los pacientes a dejar de fumar. Se ha encontrado que las tasas de cesación incrementan cuando los profesionales de la salud identifican sistemáticamente a los consumidores, promueven intentos de cesación y proveen asistencia terapéutica para la dependencia tabáquica, incluyendo consejería y terapia farmacológica.
          li 
            span.text-bold c. 
            | Porque los índices de abordaje del tabaquismo en los servicios de atención primaria siguen siendo muy bajos, pese a la evidencia en la efectividad de intervenciones para la cesación del tabaco. Solo la mitad de los fumadores reportaron que sus médicos les preguntaron sobre el consumo de tabaco y de estos, menos de la mitad refirieron haber recibido consejería para la cesación.

    .row.justify-content-center.mb-4(data-aos="flip-left")
      .col-lg-10
        .cajon.color-primario.p-4
          .row.align-items-center
            .col-lg-2
              img(src='@/assets/curso/tema4/img01.svg')
            .col-lg-10
              p El consumo de tabaco en los profesionales de la salud es de particular interés en la vigilancia del tabaquismo, ya que ellos no solo son responsables de abordar a los pacientes fumadores, ofrecerles información y la atención necesaria para el tratamiento del tabaquismo, sino que también 
                strong cumplen un rol como ejemplo y modelo dentro de la comunidad.

    p.mb-4 Los médicos como profesionales respetados y de mayor confianza para el paciente fumador tienden a asistir más a los pacientes con sintomatología evidente relacionada con el consumo del cigarrillo o tabaco, y más a grandes fumadores que a fumadores ocasionales, también se encontró que es más probable que los médicos ofrezcan consejería para cesación si han recibido formación específica. Asimismo, los médicos fumadores tienden a aconsejar menos dejar de fumar que los no fumadores.

    figure.mb-4(data-aos="flip-right")
      img(src='@/assets/curso/tema4/img02.png')  
    
    p.mb-4 En cuanto a la percepción de los profesionales de la salud respecto al hecho de ser modelos para sus pacientes se ha reportado niveles moderados de percepción frente a este ítem, encontrando, por ejemplo, en Chile, que el 68,8 % de los estudiantes de profesiones de la salud se perciben como modelos para sus pacientes y la comunidad (Burgos, Zitko, Guerrero & Alfaro, 2008). En Colombia, según el estudio de Robayo & Uribe (2018), el 86,5 % de una población de médicos colombianos se percibe como un modelo para sus familias y comunidades.

    .h4 ¿Cuál es el rol de los profesionales de la salud en el control del tabaco?

    .row.justify-content-center.mb-4
      .col-lg-4
        img(src='@/assets/curso/tema4/img03.svg')
      .col-lg-7
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            p Los profesionales de la salud tienen un rol fundamental y un lugar privilegiado para promover y consolidar las estrategias de control del tabaco en las comunidades, comenzando con la posibilidad de ejercer una influencia positiva al ser modelos para sus pacientes, sus familias y la comunidad en general, no consumiendo ningún producto del tabaco, aprovechando cada encuentro con sus pacientes para identificar oportunamente el consumo del tabaco, brindando consejería breve a los consumidores identificados así como a las personas expuestas al humo del tabaco ambiental, aconsejando y promoviendo el no inicio del consumo especialmente en los niños, niñas y adolescentes, resaltando la opción de no consumir productos del tabaco como una opción de vida saludable.

    p.mb-4 Finalmente, los profesionales de la salud pueden promover las políticas de control de tabaco haciendo veeduría del cumplimiento de las normas respectivas en sus instituciones, promoviendo actividades académicas y de investigación en torno al tema y trabajando en equipo no solamente con otros profesionales de la salud de diversas disciplinas sino con profesionales de otros sectores diferentes al de la salud.

</template>

<script>
export default {
  name: 'Tema4',
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
