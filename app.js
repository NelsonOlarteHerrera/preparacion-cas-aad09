/* Mi preparación CAS. Funciona sin dependencias, claves ni servicios externos. */
"use strict";

const CASStudy = (() => {
  const sources = [
    { id:"mp", title:"Ministerio Público: Constitución, artículos 158–160", url:"https://www.gob.pe/institucion/mpfn/informes-publicaciones/986792-constituci-n-pol-tica-del-per-cap-tulo-x-del-ministerio-p-blico", note:"Naturaleza autónoma y atribuciones constitucionales. No se preguntan autoridades ni plazos de investigaciones." },
    { id:"peritajes", title:"Ministerio Público: Oficina de Peritajes", url:"https://www.gob.pe/es/11299-ministerio-publico-fiscalia-de-la-nacion-oficina-de-peritajes", note:"Descripción institucional y apoyo técnico y científico a la función fiscal." },
    { id:"lpag", title:"MINJUSDH: TUO de la Ley 27444, D. S. 004-2019-JUS", url:"https://www.gob.pe/institucion/minjus/normas-legales/279563-004-2019-jus", note:"Referencia de principios generales. No se simulan plazos legales ni se presenta el texto de 2019 como consolidación de todas las reformas posteriores." },
    { id:"etica", title:"Ley 27815: Código de Ética de la Función Pública", url:"https://minedu.gob.pe/normatividad/leyes/Ley27815.php", note:"Probidad, neutralidad, discreción y uso adecuado de los bienes públicos." },
    { id:"excel", title:"Microsoft: contar valores en una hoja de cálculo", url:"https://support.microsoft.com/es-es/excel/ways-to-count-values-in-a-worksheet", note:"Funciones de recuento y análisis. Los ejercicios se redactaron para esta herramienta." },
    { id:"countif", title:"Microsoft: función CONTAR.SI", url:"https://support.microsoft.com/es-es/excel/get-started/use-the-countif-function-in-microsoft-excel", note:"Sintaxis y criterios. Los ejemplos usan nombres en español y punto y coma; el separador puede variar según tu configuración." },
    { id:"powerbi", title:"Microsoft Learn: medidas en Power BI Desktop", url:"https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-measures", note:"Medidas DAX y cálculos que responden al contexto de filtros." },
    { id:"dax", title:"Microsoft Learn: glosario de DAX", url:"https://learn.microsoft.com/es-es/dax/dax-glossary", note:"Conceptos de modelado, filtros y expresiones de análisis." },
    { id:"sql", title:"Microsoft Learn: SELECT en Transact-SQL", url:"https://learn.microsoft.com/es-es/sql/t-sql/queries/select-transact-sql", note:"Consultas de lectura, filtros, agrupación y combinaciones. Los ejemplos declaran sus datos y no requieren ejecutar SQL." },
    { id:"groupby", title:"Microsoft Learn: GROUP BY", url:"https://learn.microsoft.com/es-es/sql/t-sql/queries/select-group-by-transact-sql?view=sql-server-ver17", note:"Agrupación de filas y agregaciones." },
    { id:"ceplan", title:"CEPLAN: guía de indicadores, actualización 2024", url:"https://www.gob.pe/institucion/ceplan/normas-legales/5614250-046-2024-ceplan-pcd", note:"Referencia metodológica de indicadores. Los casos numéricos, metas y recomendaciones del simulador son ejercicios propios." }
  ];

  const modules = [
    { id:0, title:"Ministerio Público y gestión pública", short:"Institución y ética", scope:"Preparación complementaria", intro:"Comprende para qué sirve la institución y cómo actuar con integridad.", lesson:`<p>El Ministerio Público es un organismo autónomo. Entre sus atribuciones están defender la legalidad y representar a la sociedad en los procesos judiciales. La Oficina de Peritajes aporta apoyo técnico y científico a la labor fiscal; un asistente administrativo facilita la organización de información, sin sustituir al perito.</p><h3>Cuatro ideas para distinguir</h3><ul><li><strong>Legalidad:</strong> actuar dentro de las competencias y reglas aplicables.</li><li><strong>Imparcialidad:</strong> aplicar el mismo criterio sin favorecer amistades.</li><li><strong>Probidad:</strong> actuar con honestidad y poner el interés público por delante del beneficio propio.</li><li><strong>Discreción:</strong> resguardar la información conocida por el trabajo, respetando las reglas de acceso.</li></ul><div class="example"><h3>Un caso del puesto</h3><p>Un conocido te pide adelantar su requerimiento. Registras y priorizas con los criterios autorizados, sin darle ventajas por la relación personal. Es como una cola de atención: las prioridades deben tener una razón objetiva.</p></div><h3>Qué conviene recordar</h3><p>Autonomía institucional no significa ausencia de controles. Transparencia tampoco significa divulgar cualquier dato de una investigación.</p>`, sources:["mp","peritajes","lpag","etica"] },
    { id:1, title:"Gestión administrativa y documental", short:"Gestión documental", scope:"Preparación complementaria", intro:"Aprende a organizar, seguir y comunicar información sin perder su rastro.", lesson:`<p>Gestionar documentos es poder saber qué se recibió, dónde está, quién debe atenderlo y qué ocurrió después. Es como el seguimiento de un envío: el documento necesita identificación e historial.</p><h3>Documentos de uso habitual</h3><ul><li><strong>Informe:</strong> expone hechos, análisis, conclusiones y, cuando corresponde, recomendaciones.</li><li><strong>Oficio:</strong> comunicación formal, habitualmente entre entidades o autoridades.</li><li><strong>Memorando:</strong> comunicación interna para indicaciones o coordinaciones.</li></ul><p>Estos son usos generales de preparación. El formato y circuito concreto dependen de las directivas de cada entidad.</p><div class="example"><h3>Un caso del puesto</h3><p>Una oficina solicita un reporte. Registra código, fecha de recepción, asunto, responsable, plazo aplicable, estado y evidencia de atención. No basta con marcar «enviado»: hay que poder comprobar qué se remitió y cuándo.</p></div><h3>Prácticas útiles</h3><p>Usa identificadores únicos, conserva versiones y limita accesos según la función. Antes de borrar, transferir o publicar documentos, revisa el procedimiento autorizado. Un archivo escaneado no elimina por sí solo el valor ni los requisitos del original.</p>`, sources:[] },
    { id:2, title:"Excel y análisis de datos", short:"Excel y estadística", scope:"Relacionado con conocimientos declarados", intro:"Convierte registros en información fiable antes de elaborar un reporte.", lesson:`<p>Una base limpia tiene una fila por registro y una columna por atributo. Por ejemplo: una solicitud por fila, con identificador, fecha, área y estado en columnas separadas. Evita combinar celdas dentro de la base.</p><h3>Funciones que debes reconocer</h3><ul><li><code>CONTAR.SI</code> cuenta celdas que cumplen un criterio; <code>SUMAR.SI</code> suma valores asociados a un criterio.</li><li><code>SI</code> devuelve un resultado si una condición se cumple y otro si no se cumple.</li><li><code>$B$2</code> fija fila y columna al copiar una fórmula.</li><li>Una tabla dinámica agrupa y resume; no corrige automáticamente los errores de origen.</li></ul><div class="example"><h3>Un caso del puesto</h3><p>Para contar solicitudes con estado «Pendiente» en B2:B101: <code>=CONTAR.SI(B2:B101;"Pendiente")</code>. Si quieres sumar sus importes, necesitas una función de suma condicional.</p></div><h3>Estadística sencilla</h3><p>La media reparte el total entre todos. La mediana es el valor central de los datos ordenados y suele resistir mejor valores extremos. Con tiempos 2, 3 y 25 días, la media es 10 y la mediana es 3: describen cosas diferentes.</p><p class="help">Las fórmulas usan nombres en español. Los nombres y separadores dependen del idioma y la configuración regional de Excel.</p>`, sources:["excel","countif"] },
    { id:3, title:"Power BI y visualización", short:"Power BI", scope:"Relacionado con conocimientos declarados", intro:"Distingue limpieza, modelo, cálculo y presentación de los datos.", lesson:`<p>Piensa en un reporte como una cocina: primero reúnes y limpias ingredientes, después los relacionas y calculas, y finalmente los presentas.</p><h3>El recorrido de los datos</h3><ul><li><strong>Power Query:</strong> conecta y transforma: tipos, columnas, errores y formatos.</li><li><strong>Modelo:</strong> relaciona tablas con claves y una granularidad definida.</li><li><strong>Medida DAX:</strong> calcula un resultado según el contexto de filtros.</li><li><strong>Visual:</strong> ayuda a contestar una pregunta de gestión.</li></ul><div class="example"><h3>Un caso del puesto</h3><p>Una tabla tiene una fila por solicitud y otra una fila por área. Relaciónalas mediante IdArea: muchas solicitudes pertenecen a una misma área. Una medida de solicitudes atendidas permite comparar áreas sin copiar hojas.</p></div><h3>Elige el gráfico según la pregunta</h3><p>Usa líneas para evolución temporal y barras para comparar categorías. Acompaña un KPI con período, unidad y meta. Un porcentaje bonito sin denominador puede inducir a error.</p><p>Un informe puede tener varias páginas. En el servicio de Power BI, un dashboard o panel reúne mosaicos en una sola página; no es un sinónimo exacto de cualquier informe.</p>`, sources:["powerbi","dax"] },
    { id:4, title:"Bases de datos y SQL", short:"Datos y SQL", scope:"Relacionado con conocimientos declarados", intro:"Consulta y resume datos sin duplicar resultados por accidente.", lesson:`<p>Una tabla organiza registros; una clave primaria identifica una fila. Una clave foránea enlaza esa fila con otra tabla. Es como el código de seguimiento: dos personas pueden tener el mismo nombre, pero el identificador debe distinguirlas.</p><h3>Orden para razonar una consulta</h3><ul><li><code>FROM / JOIN</code>: de dónde salen y cómo se relacionan los registros.</li><li><code>WHERE</code>: qué filas entran antes de agrupar.</li><li><code>GROUP BY</code>: por qué categorías se resumen.</li><li><code>HAVING</code>: qué grupos quedan después del resumen.</li><li><code>SELECT</code> y <code>ORDER BY</code>: qué mostrar y cómo ordenar.</li></ul><div class="example"><h3>Un caso del puesto</h3><p><code>SELECT Area, COUNT(*) AS Total FROM Solicitudes WHERE Estado = 'Atendido' GROUP BY Area;</code></p><p>Cuenta solicitudes atendidas por área. Cada fila de origen debe representar una solicitud, o el total podría estar inflado.</p></div><h3>Dos trampas frecuentes</h3><p><code>COUNT(*)</code> cuenta filas; <code>COUNT(FechaCierre)</code> cuenta valores no nulos de esa columna. Un JOIN con varias coincidencias por solicitud puede multiplicar las filas: revisa la granularidad antes de sumar.</p>`, sources:["sql","groupby"] },
    { id:5, title:"Indicadores de gestión", short:"Indicadores y KPI", scope:"Relacionado con conocimientos declarados", intro:"Aprende a elegir el denominador y explicar lo que significa un resultado.", lesson:`<p>Un indicador resume una característica medible. Su ficha debe precisar fórmula, unidad, fuente, frecuencia, responsable y sentido esperado. Es como el tablero de un vehículo: cada instrumento responde una pregunta distinta.</p><h3>Tres preguntas distintas</h3><ul><li><strong>Eficacia:</strong> ¿cuánto de la meta se logró?</li><li><strong>Eficiencia:</strong> ¿qué resultados se obtuvieron en relación con los recursos?</li><li><strong>Productividad:</strong> ¿cuántas unidades se obtuvieron por unidad de recurso?</li></ul><p class="formula">Cumplimiento = resultado / meta × 100</p><p class="formula">Variación = (actual − anterior) / anterior × 100</p><div class="example"><h3>Un caso del puesto</h3><p>Si la meta era atender 100 solicitudes y se atienden 90, el cumplimiento es 90%. Si esas 90 se atendieron en 30 horas, la productividad es 3 solicitudes por hora. Los porcentajes y las solicitudes/hora no son intercambiables.</p></div><h3>Interpreta antes de celebrar</h3><p>Un menor tiempo puede ser favorable; un menor cumplimiento puede ser desfavorable. Subir de 60% a 75% son 15 puntos porcentuales y un aumento relativo de 25%. Si el valor inicial es cero, la variación relativa habitual no se puede calcular.</p>`, sources:["ceplan"] },
    { id:6, title:"Optimización de procesos", short:"Procesos y mejora", scope:"Relacionado con funciones declaradas", intro:"Encuentra la causa del retraso antes de automatizar una tarea.", lesson:`<p>Un proceso transforma una entrada en un resultado. Dibujar sus pasos permite ver responsables, decisiones, esperas y devoluciones. Es como seguir una receta: si no sabes dónde se detiene, comprar un equipo nuevo puede no resolver nada.</p><h3>Una secuencia útil de mejora</h3><ul><li>Define el problema con datos y registra la situación inicial.</li><li>Localiza la espera o actividad que limita el flujo.</li><li>Busca la causa, prueba un cambio pequeño y compara.</li><li>Estandariza lo que funciona y vuelve a medir.</li></ul><div class="example"><h3>Un caso del puesto</h3><p>Los requerimientos se devuelven porque falta información. Antes de automatizar el envío, prueba una ficha con campos obligatorios y una validación de recepción. Mide después cuántas devoluciones y días de espera se redujeron.</p></div><h3>Qué no debes confundir</h3><p>Digitalizar convierte el soporte; optimizar mejora el flujo. Un PDF enviado por correo puede conservar todas las demoras anteriores. Una mejora debe preservar calidad, trazabilidad y controles autorizados.</p>`, sources:[] }
  ];

  const questions = [];
  function add(module, id, text, options, takeaway, source = null) {
    questions.push({ module, id, baseId:id, text, takeaway, source, variable:false,
      options:options.map(([text, why], index) => ({ text, why, correct:index===0 })) });
  }
  // Cada pregunta tiene una explicación propia para cada una de sus cinco alternativas.
  add(0,"mp-autonomia","¿Cómo se caracteriza al Ministerio Público en la Constitución peruana?",[
    ["Es un organismo autónomo.","Tiene autonomía constitucional; no es una oficina dependiente de otro poder."],
    ["Es una dirección del Poder Judicial.","El Poder Judicial y el Ministerio Público tienen competencias distintas."],
    ["Es una empresa del Estado.","Su naturaleza no es empresarial."],
    ["Es una dependencia de la Policía Nacional.","No forma parte de la estructura policial."],
    ["Es un ministerio del Poder Ejecutivo.","La palabra «Ministerio» no lo convierte en un ministerio del Ejecutivo."]],"Recuerda: el nombre no determina la dependencia institucional.","mp");
  add(0,"mp-sociedad","¿A quién representa el Ministerio Público en los procesos judiciales, según el artículo 159?",[
    ["A la sociedad.","Es una atribución constitucional expresamente reconocida."],
    ["Solo al gobierno de turno.","Su actuación no representa únicamente al gobierno."],
    ["Siempre a la defensa particular del imputado.","La defensa del imputado corresponde a su defensa técnica."],
    ["Exclusivamente a empresas públicas.","La representación de la sociedad no se limita a empresas."],
    ["Solo a los jueces.","Los jueces no son el sujeto al que representa en esta atribución."]],"Sociedad y gobierno de turno no significan lo mismo.","mp");
  add(0,"mp-peritajes","¿Qué aporte corresponde a la Oficina de Peritajes?",[
    ["Apoyo técnico y científico a las investigaciones fiscales.","Sus peritos aportan conocimientos especializados dentro de su competencia."],
    ["Dictar sentencias judiciales.","Decidir una sentencia es una función jurisdiccional."],
    ["Aprobar leyes nacionales.","La función legislativa no corresponde a esta oficina."],
    ["Reemplazar toda labor fiscal.","El apoyo pericial no sustituye las competencias del fiscal."],
    ["Resolver cualquier trámite de todas las entidades.","Su competencia es específica, no universal."]],"El peritaje aporta conocimiento especializado para apoyar la labor fiscal.","peritajes");
  add(0,"etica-legalidad","Un servidor recibe una instrucción para actuar fuera de sus competencias. ¿Qué criterio debe orientar su actuación?",[
    ["Verificar y respetar el marco legal y las competencias aplicables.","Una instrucción no crea por sí sola una competencia legal."],
    ["Cumplir cualquier instrucción por provenir de una jefatura.","La jerarquía no autoriza actuar al margen de la ley."],
    ["Decidir según su preferencia personal.","La preferencia no reemplaza el marco normativo."],
    ["Actuar si nadie observa el trámite.","La legalidad no depende de que haya testigos."],
    ["Consultar una encuesta y obedecer a la mayoría.","Una votación informal no otorga competencias."]],"Legalidad: actuar con fundamento y dentro de la competencia.","lpag");
  add(0,"etica-imparcialidad","Dos solicitudes equivalentes llegan juntas. Una pertenece a tu amistad. ¿Qué conducta refleja imparcialidad?",[
    ["Aplicar a ambas los mismos criterios objetivos de atención.","La relación personal no debe cambiar los criterios de evaluación."],
    ["Adelantar siempre la de tu amistad.","Dar una ventaja personal rompe la igualdad de trato."],
    ["Retrasar la de tu amistad para demostrar distancia.","Perjudicar por una relación personal tampoco es un criterio objetivo."],
    ["Elegir la que prometa una recompensa.","Una recompensa privada no es criterio legítimo de atención."],
    ["Descartar las dos solicitudes.","Evitar decidir no soluciona la obligación de tramitar adecuadamente."]],"Imparcialidad es aplicar criterios objetivos, sin favores ni castigos personales.","lpag");
  add(0,"etica-probidad","Un proveedor te ofrece un regalo a cambio de priorizar su trámite. ¿Qué respuesta protege la probidad?",[
    ["Rechazar el beneficio y seguir el canal institucional que corresponda.","Proteges la integridad del trámite y evitas un beneficio indebido."],
    ["Aceptar si el regalo es pequeño.","El monto no vuelve legítimo un intercambio indebido."],
    ["Aceptar fuera del horario de trabajo.","Cambiar el horario no elimina la relación con la función."],
    ["Pedir que entregue el regalo a un familiar.","Interponer un familiar no elimina el beneficio indebido."],
    ["Alterar la fecha de recepción para justificar la prioridad.","Falsear el registro empeora la falta de integridad."]],"Probidad: honestidad y prioridad del interés público.","etica");
  add(0,"etica-discrecion","Un amigo pide por mensajería personal una base con datos reservados del trabajo. ¿Qué haces?",[
    ["Resguardarla y remitir cualquier pedido al canal y autorización correspondientes.","La información se usa según la función y las reglas de acceso."],
    ["Enviarla si promete no difundirla.","Una promesa no sustituye la autorización."],
    ["Publicarla porque todo dato estatal es abierto.","Existen límites de acceso y datos protegidos."],
    ["Enviarla desde tu correo personal.","Cambiar de cuenta no vuelve autorizado el acceso."],
    ["Quitar el logo y compartirla.","El logo no determina la reserva o protección de los datos."]],"Trabajar con información no significa poder compartirla libremente.","etica");
  add(0,"etica-bienes","¿Qué conducta es coherente con el uso adecuado de bienes públicos?",[
    ["Usar los recursos asignados para las funciones y fines autorizados.","Los bienes se destinan al servicio público y a los usos permitidos."],
    ["Usar el equipo de la oficina para tu negocio sin autorización.","El recurso público no queda a libre disposición para fines privados."],
    ["Prestar equipos oficiales a amistades por ser fin de semana.","El día de la semana no autoriza el préstamo."],
    ["Retirar suministros porque sobran.","La existencia de sobrantes no transfiere su propiedad."],
    ["Borrar el inventario para simplificar la gestión.","Eliminar el control impide rendir cuentas sobre los recursos."]],"Recursos del Estado: finalidad pública, autorización y responsabilidad.","etica");

  add(1,"doc-traza","¿Qué registro permite seguir un requerimiento de principio a fin?",[
    ["Identificador, recepción, responsable, estado y evidencia de atención.","Permite reconstruir el recorrido y comprobar lo realizado."],
    ["Solo el nombre del archivo.","No explica quién lo atiende ni qué ocurrió."],
    ["Solo el número de páginas.","El tamaño no muestra la atención del requerimiento."],
    ["Solo el nombre de quien lo imprimió.","Imprimir no demuestra recepción, derivación ni atención."],
    ["Una lista sin fechas ni responsables.","Faltan datos esenciales para seguir acciones y demoras."]],"Trazabilidad es poder reconstruir qué pasó, cuándo y quién intervino.");
  add(1,"doc-informe","Debes explicar por qué aumentaron los tiempos de atención y proponer una mejora. ¿Qué documento suele ser más adecuado?",[
    ["Un informe con datos, análisis, conclusiones y recomendaciones.","Permite sustentar el problema y la propuesta con evidencia."],
    ["Un saludo informal sin datos.","No contiene el análisis solicitado."],
    ["Una lista de archivos sin explicación.","Los archivos por sí solos no explican la causa del aumento."],
    ["Un recibo de caja.","Su finalidad usual es registrar una operación de cobro."],
    ["Un inventario de muebles.","No responde al análisis de tiempos requerido."]],"El informe debe responder una pregunta con evidencia; su formato concreto depende de la entidad.");
  add(1,"doc-version","Varias personas editan un reporte. ¿Qué práctica reduce el riesgo de usar una versión equivocada?",[
    ["Identificar versiones, responsables y estado de aprobación en un repositorio controlado.","Distingue borradores del documento autorizado."],
    ["Llamar a todos los archivos final_final.","No establece qué versión está aprobada."],
    ["Conservar solo copias enviadas por chats distintos.","La dispersión dificulta identificar la versión vigente."],
    ["Quitar las fechas de modificación.","Se pierde información útil para reconstruir los cambios."],
    ["Permitir sobrescrituras sin registro.","No queda evidencia de qué cambió ni quién intervino."]],"Versionar es identificar cambios, no multiplicar archivos sin control.");
  add(1,"doc-plazo","Una solicitud está por vencer y aún no tiene respuesta del área responsable. ¿Qué acción es más útil?",[
    ["Registrar el seguimiento, alertar al responsable y escalar según el procedimiento.","Da visibilidad al riesgo y conserva evidencia de la coordinación."],
    ["Marcarla como atendida para cerrar el pendiente.","Cierra el registro sin resolver la necesidad real."],
    ["Cambiar su fecha original de recepción.","Oculta la demora y altera la trazabilidad."],
    ["Esperar sin comunicar el riesgo.","Reduce la oportunidad de actuar antes del vencimiento."],
    ["Eliminarla del reporte.","Ocultar el pendiente no atiende la solicitud."]],"El seguimiento anticipa riesgos; no debe maquillar los registros.");
  add(1,"doc-identificador","Dos expedientes tienen asuntos casi iguales. ¿Cómo evitar confundirlos?",[
    ["Usar un identificador único y verificarlo al registrar y derivar.","El código distingue registros aunque sus descripciones se parezcan."],
    ["Usar solo el asunto abreviado.","Dos asuntos abreviados pueden coincidir."],
    ["Usar el color de la carpeta como único dato.","El color no garantiza unicidad ni trazabilidad digital."],
    ["Darles el mismo código porque tratan lo mismo.","Se mezclan expedientes que deben poder distinguirse."],
    ["Identificarlos por el tamaño del archivo.","Distintos documentos pueden tener el mismo tamaño."]],"Un identificador único evita confundir descripción con identidad.");
  add(1,"doc-cierre","¿Qué evidencia respalda mejor que un requerimiento fue atendido?",[
    ["La respuesta remitida y su constancia de envío o recepción según el circuito.","Permite comprobar contenido, destinatario y momento de la atención."],
    ["Una marca verde sin documentos asociados.","El color no prueba qué se hizo."],
    ["Que el archivo fue abierto una vez.","Abrir no equivale a responder."],
    ["Que alguien recuerde haberlo enviado.","Un recuerdo no ofrece el mismo respaldo verificable."],
    ["Que el plazo ya haya terminado.","Vencer no significa estar atendido."]],"Cerrar un trámite exige respaldo verificable, no solo cambiar el estado.");
  add(1,"doc-campos","Diseñas una ficha para solicitudes que llegan incompletas. ¿Qué cambio atiende mejor el problema?",[
    ["Definir datos mínimos necesarios y validar su presencia al recibir.","Ataca la causa de las devoluciones: información faltante."],
    ["Agregar campos decorativos sin uso.","Aumenta carga sin resolver la falta de datos útiles."],
    ["Quitar todos los campos para acelerar.","Podría aumentar la recepción de solicitudes inutilizables."],
    ["Aceptar cualquier contenido sin revisión.","El error pasa a la siguiente etapa."],
    ["Cambiar únicamente el color del formulario.","El aspecto no garantiza información completa."]],"Pide lo necesario y compruébalo donde nace el registro.");
  add(1,"doc-acceso","¿Qué criterio es adecuado para dar acceso a una carpeta de trabajo con información restringida?",[
    ["Permisos según funciones y necesidad de acceso, con autorización y registro.","Equilibra el trabajo necesario con el resguardo de información."],
    ["Un enlace público para que sea más rápido.","Puede exponer información a personas no autorizadas."],
    ["La misma contraseña compartida por toda la entidad.","Dificulta identificar quién accede y limitar permisos."],
    ["Acceso a cualquiera que conozca el nombre del archivo.","Conocer el nombre no acredita autorización."],
    ["Eliminar todos los registros de acceso.","Se pierde capacidad de seguimiento y revisión."]],"Acceso mínimo necesario y trazabilidad: cada permiso debe tener un motivo.");

  add(2,"excel-contarsi","En B2:B101 están los estados de solicitudes. ¿Qué fórmula cuenta las que dicen Pendiente?",[
    ['=CONTAR.SI(B2:B101;"Pendiente")',"Cuenta las celdas que coinciden con el criterio."],
    ['=SUMA(B2:B101)',"SUMA agrega números; no cuenta textos por estado."],
    ['=PROMEDIO(B2:B101)',"Calcula una media de números, no el número de pendientes."],
    ['=MAX(B2:B101)',"Busca un máximo numérico, no un recuento condicional."],
    ['=CONTAR(B2:B101)',"CONTAR cuenta celdas numéricas, no las coincidencias de este texto."]],"Cuenta por condición con CONTAR.SI; no confundas contar con sumar.","countif");
  add(2,"excel-si","B2 contiene días de atención. ¿Qué fórmula devuelve Dentro si son 5 o menos y Fuera en otro caso?",[
    ['=SI(B2<=5;"Dentro";"Fuera")',"La condición incluye 5 y devuelve cada texto en la rama adecuada."],
    ['=SI(B2<5;"Dentro";"Fuera")',"Excluye el valor 5, que sí debía estar dentro."],
    ['=SI(B2<=5;"Fuera";"Dentro")',"Invierte los textos de la condición verdadera y falsa."],
    ['=SUMA(B2;5)',"Suma dos valores y no clasifica la atención."],
    ['=SI(B2=5;"Dentro";"Fuera")',"Acepta solo 5 y deja fuera los valores menores."]],"Lee el límite con cuidado: «5 o menos» significa <=5.");
  add(2,"excel-absoluta","¿Qué referencia mantiene fijas la columna B y la fila 2 al copiar una fórmula?",[
    ["$B$2","Los dos signos $ fijan columna y fila."],
    ["B2","Es relativa: ambas partes pueden cambiar."],
    ["$B2","Solo fija la columna; la fila puede cambiar."],
    ["B$2","Solo fija la fila; la columna puede cambiar."],
    ["B:B","Referencia una columna completa, no la celda fija B2."]],"Cada $ protege la parte que tiene inmediatamente después.");
  add(2,"excel-dinamica","Debes resumir miles de solicitudes por área y estado sin modificar cada fila. ¿Qué herramienta encaja mejor?",[
    ["Una tabla dinámica con área en filas y un recuento por estado.","Agrupa y resume los registros con los campos elegidos."],
    ["Combinar todas las celdas de la base.","Dificulta conservar una estructura de registros analizable."],
    ["Cambiar la fuente de letra.","El formato no produce un resumen de datos."],
    ["Copiar manualmente una solicitud por vez a un dibujo.","Es poco reproducible y aumenta el riesgo de errores."],
    ["Eliminar la columna de estado.","Se pierde una dimensión requerida para el resumen."]],"Una tabla dinámica resume; la limpieza de origen sigue siendo necesaria.","excel");
  add(2,"excel-mediana","Los tiempos de atención son 2, 3, 4, 5 y 46 días. ¿Cuál es la mediana?",[
    ["4 días","Es el tercer valor de los cinco datos ya ordenados."],
    ["12 días","Es la media: 60 dividido entre 5; no el valor central."],
    ["46 días","Es el máximo, no la mediana."],
    ["2 días","Es el mínimo, no la mediana."],
    ["60 días","Es la suma, no una medida de posición central."]],"Mediana: ordena y ubica el centro. Media: suma y divide entre la cantidad.");
  add(2,"excel-limpieza","La misma área figura como «Logística», « logística » y «LOGÍSTICA». ¿Qué debes hacer antes de agrupar?",[
    ["Normalizar espacios y escritura usando un criterio común y validar el resultado.","Permite reconocer la misma categoría sin inventar áreas nuevas."],
    ["Contarlas como tres áreas diferentes.","Fragmenta una misma categoría y distorsiona el resumen."],
    ["Eliminar todas las filas de esa área.","Se pierden registros válidos por un problema de formato."],
    ["Cambiar los importes para igualarlos.","Los importes no resuelven el nombre inconsistente."],
    ["Agregar más colores a cada variante.","El color no normaliza el dato almacenado."]],"Datos que significan lo mismo deben compartir una representación consistente.");
  add(2,"excel-duplicado","Una solicitud tiene varias actuaciones válidas en días distintos. ¿Puedes borrar todas salvo una por compartir IdSolicitud?",[
    ["No sin definir antes qué representa cada fila y qué sería un duplicado.","Una fila puede ser una actuación, y varias pueden pertenecer a la misma solicitud."],
    ["Sí, todo identificador repetido siempre es un error.","La repetición puede ser legítima en una tabla de actuaciones."],
    ["Sí, conservando siempre la fila más corta.","La longitud no determina si la actuación es válida."],
    ["Sí, porque Excel no admite identificadores repetidos.","Excel permite repeticiones; el significado depende del modelo."],
    ["No hay que revisar nunca los duplicados.","También puede haber duplicaciones reales que deben detectarse."]],"Antes de quitar duplicados, define la granularidad: ¿una fila es una solicitud o una actuación?");
  add(2,"excel-lineas","¿Qué gráfico facilita observar la evolución mensual del tiempo promedio de atención?",[
    ["Un gráfico de líneas con los meses ordenados.","Permite seguir cambios de una medida a lo largo del tiempo."],
    ["Un gráfico circular con un sector por día de todo el año.","Muchos sectores dificultan leer la evolución temporal."],
    ["Una imagen sin escala ni valores.","No comunica la magnitud ni la tendencia verificable."],
    ["Una tabla sin fechas.","No permite asociar valores a períodos."],
    ["Un mapa geográfico sin información territorial.","Introduce una dimensión que no responde a la pregunta."]],"Primero define qué quieres comparar; después elige la visualización.");

  add(3,"bi-query","Necesitas quitar espacios y convertir texto a fechas antes de cargar datos en Power BI. ¿Dónde lo haces habitualmente?",[
    ["En Power Query.","Es la herramienta de conexión y transformación de datos."],
    ["Solo cambiando el título del gráfico.","Un título no cambia los tipos ni limpia el origen."],
    ["En el color de fondo del informe.","La apariencia no transforma registros."],
    ["En una captura de pantalla.","Una imagen no modifica los datos del modelo."],
    ["En los permisos del navegador.","Los permisos del navegador no limpian las columnas."]],"Transforma antes de analizar: Power Query prepara los datos.","dax");
  add(3,"bi-medida","Quieres que el total atendido cambie al filtrar por mes y área. ¿Qué elemento DAX suele ser adecuado?",[
    ["Una medida.","Se evalúa en el contexto de filtros de la consulta o visual."],
    ["Una imagen fija con el total escrito.","No recalcula al cambiar filtros."],
    ["Un número pegado manualmente en cada página.","No responde automáticamente a las selecciones."],
    ["Solo un cambio de tema de colores.","El tema no define el cálculo del total."],
    ["Una nota al pie sin fórmula.","Describe información pero no calcula una medida."]],"Las medidas responden al contexto de filtro.","powerbi");
  add(3,"bi-relacion","Areas contiene una fila por IdArea. Solicitudes contiene muchas filas por IdArea. ¿Qué relación describe mejor el caso?",[
    ["Uno a muchos desde Areas hacia Solicitudes.","Un área se asocia con muchas solicitudes y su clave es única en Areas."],
    ["Uno a uno obligatoriamente.","Hay varias solicitudes por cada área."],
    ["Muchos a muchos obligatoriamente.","La clave es única en Areas, por lo que no hace falta esa cardinalidad."],
    ["Ninguna relación porque los nombres de tabla son distintos.","Las relaciones usan claves, no nombres iguales de tablas."],
    ["Una relación basada en el color del gráfico.","El color no identifica claves de datos."]],"Busca dónde la clave es única: ese suele ser el lado «uno».","dax");
  add(3,"bi-filtro","Un indicador muestra 80 atenciones, pero al seleccionar otra área muestra 25. ¿Qué explica razonablemente el cambio?",[
    ["La medida se evalúa para las filas incluidas por el filtro.","Cambió el conjunto de registros del contexto."],
    ["Toda medida debe ser constante.","Muchas medidas cambian según las selecciones."],
    ["Los filtros solo cambian el color de los datos.","También pueden limitar las filas usadas para calcular."],
    ["Power BI ha eliminado necesariamente 55 registros del origen.","Filtrar una visual no implica borrar datos del origen."],
    ["Una medida nunca puede contar solicitudes.","El recuento es un uso habitual de las medidas."]],"Filtrar selecciona el contexto; no equivale a eliminar datos.","powerbi");
  add(3,"bi-panel","En el servicio de Power BI, ¿qué distingue habitualmente a un dashboard o panel frente a un informe?",[
    ["El panel reúne mosaicos en una página; un informe puede tener varias páginas.","Son objetos distintos aunque ambos presenten información."],
    ["Todo informe debe tener exactamente un solo número.","Un informe admite diferentes visualizaciones y páginas."],
    ["Un panel es una tabla SQL de origen.","Una presentación de mosaicos no es una tabla de base de datos."],
    ["Un informe no puede incluir gráficos.","Los gráficos son parte habitual de los informes."],
    ["Un panel reemplaza las relaciones entre tablas.","La presentación no sustituye el modelo de datos."]],"Usa los términos con precisión: informe y panel no son objetos idénticos.");
  add(3,"bi-kpi","Un KPI muestra «92%» sin más información. ¿Qué falta para interpretarlo correctamente?",[
    ["Nombre, fórmula o definición, período, unidad y referencia o meta.","Necesitas saber qué se midió y contra qué se compara."],
    ["Únicamente un efecto 3D.","La decoración no explica la medida."],
    ["Un color elegido al azar.","No informa cómo se obtuvo el porcentaje."],
    ["Quitar el símbolo de porcentaje.","Eliminar la unidad empeora la interpretación."],
    ["Una fotografía de oficina.","No aclara el significado del indicador."]],"Un valor aislado no dice si el desempeño es bueno o malo.");
  add(3,"bi-suma","¿Qué expresa la medida Total = SUM(Solicitudes[Cantidad])?",[
    ["Suma Cantidad en el contexto de filtros vigente.","SUM agrega los valores de esa columna para el contexto evaluado."],
    ["Cuenta siempre el número de columnas.","SUM suma valores; no cuenta columnas."],
    ["Borra las filas con cantidad cero.","Una agregación no elimina registros."],
    ["Ordena los nombres de las áreas.","La expresión no solicita un ordenamiento."],
    ["Convierte automáticamente todas las fechas a texto.","No realiza transformación de fechas."]],"Identifica función, columna y contexto antes de interpretar una medida.","powerbi");
  add(3,"bi-fecha","¿Por qué es útil mostrar la fecha de actualización en un reporte gerencial?",[
    ["Permite conocer hasta qué momento los datos respaldan la lectura.","La vigencia es necesaria para decidir con información oportuna."],
    ["Garantiza que todos los datos son correctos.","La fecha informa vigencia, no certifica calidad."],
    ["Elimina la necesidad de validar la fuente.","La fuente debe comprobarse aunque la fecha sea reciente."],
    ["Reemplaza las definiciones de los indicadores.","La definición explica qué se mide; la fecha responde cuándo."],
    ["Hace innecesario actualizar el reporte.","Mostrar una fecha no ejecuta una actualización."]],"Fecha reciente y datos correctos son controles diferentes.");

  add(4,"sql-where","¿Qué cláusula filtra filas antes de que se agrupen?",[
    ["WHERE","Selecciona filas individuales antes de la agregación."],
    ["HAVING","Filtra grupos o resultados agregados, no cumple la función pedida."],
    ["ORDER BY","Ordena el resultado."],
    ["GROUP BY","Define agrupaciones; no es el filtro de filas solicitado."],
    ["SELECT DISTINCT","Elimina filas duplicadas del resultado seleccionado, no expresa el filtro pedido."]],"WHERE filtra filas; HAVING filtra grupos.","sql");
  add(4,"sql-grupo","Con una fila por solicitud, ¿qué consulta cuenta solicitudes por área?",[
    ["SELECT Area, COUNT(*) FROM Solicitudes GROUP BY Area;","Agrupa por área y cuenta las filas de cada grupo."],
    ["SELECT Area, SUM(Area) FROM Solicitudes;","Sumar un nombre de área no cuenta solicitudes ni define la agrupación."],
    ["SELECT COUNT(*) FROM Solicitudes;","Da un total general sin separar áreas."],
    ["DELETE FROM Solicitudes;","Elimina registros; no hace un recuento."],
    ["SELECT Area FROM Solicitudes ORDER BY Area;","Lista áreas ordenadas sin resumir sus solicitudes."]],"Una fila por solicitud + GROUP BY Area + COUNT(*) = solicitudes por área.","groupby");
  add(4,"sql-left","Quieres todas las áreas, incluso las que no tienen solicitudes, partiendo de Areas. ¿Qué combinación conviene?",[
    ["Areas LEFT JOIN Solicitudes con la clave del área.","Conserva todas las filas de la tabla izquierda aunque no haya coincidencia."],
    ["Areas INNER JOIN Solicitudes.","Excluye áreas sin coincidencias."],
    ["Un CROSS JOIN sin condición.","Combina cada área con cada solicitud y multiplica filas."],
    ["Unir solo por el nombre del responsable aunque no sea una clave.","Puede combinar registros incorrectos o duplicados."],
    ["DELETE de áreas sin solicitudes.","Eliminar áreas contradice el objetivo de mostrarlas todas."]],"LEFT JOIN conserva la tabla izquierda; revisa después cómo cuentas sus coincidencias.","sql");
  add(4,"sql-null","FechaCierre es NULL en solicitudes aún abiertas. ¿Qué condición las selecciona?",[
    ["WHERE FechaCierre IS NULL","IS NULL comprueba la ausencia de un valor."],
    ["WHERE FechaCierre = NULL","NULL no se comprueba con una igualdad ordinaria en SQL estándar."],
    ["WHERE FechaCierre = 0","El cero es un valor y no equivale a NULL."],
    ["WHERE FechaCierre IS NOT NULL","Selecciona las filas que sí tienen un valor de cierre."],
    ["ORDER BY FechaCierre","Ordenar no filtra las filas abiertas."]],"NULL significa ausencia o valor desconocido; usa IS NULL.","sql");
  add(4,"sql-count","Hay 10 filas y FechaCierre está informada en 6. ¿Qué devuelve COUNT(FechaCierre)?",[
    ["6","Cuenta valores no nulos de la columna."],
    ["10","Ese sería COUNT(*) para las diez filas."],
    ["4","Ese es el número de filas con FechaCierre nula."],
    ["0","Sí hay seis valores de fecha informados."],
    ["16","No se suman el total de filas y los valores informados."]],"COUNT(columna) excluye NULL; COUNT(*) cuenta filas.","sql");
  add(4,"sql-having","¿Cómo seleccionas áreas que tienen más de 10 solicitudes después de agrupar?",[
    ["GROUP BY Area HAVING COUNT(*) > 10","HAVING evalúa la condición sobre los grupos."],
    ["WHERE COUNT(*) > 10 sin agrupación","Un agregado de grupo no se filtra así en WHERE."],
    ["ORDER BY Area > 10","Ordenar no sustituye el filtro de cantidad por grupo."],
    ["SELECT TOP 10 Area","Limitar filas a diez no equivale a exigir más de diez solicitudes."],
    ["WHERE Area = '10'","Compara el nombre del área, no el tamaño del grupo."]],"Primero agrupa; después exige la condición con HAVING.","groupby");
  add(4,"sql-pk","¿Qué propiedad debe cumplir una clave primaria?",[
    ["Identificar cada fila de forma única y no admitir NULL.","Evita que una fila quede sin identificar o se confunda con otra."],
    ["Repetirse en todas las filas.","No permitiría distinguir registros."],
    ["Ser siempre el nombre completo de una persona.","Los nombres pueden repetirse y una clave no debe ser necesariamente un nombre."],
    ["Ser obligatoriamente una imagen.","No existe ese requisito."],
    ["Cambiar cuando se ordena la tabla.","Ordenar no debería cambiar la identidad de una fila."]],"La clave identifica; no describe simplemente el contenido.");
  add(4,"sql-join-duplicado","Una solicitud tiene tres actuaciones. Al unir ambas tablas, ¿qué puede ocurrir al sumar un importe de la solicitud?",[
    ["El importe puede contarse tres veces si no controlas la granularidad.","La relación uno a muchos repite datos de la solicitud en cada coincidencia."],
    ["El JOIN garantiza que cada importe se sume una sola vez.","No garantiza ese resultado cuando hay varias coincidencias."],
    ["El importe se divide automáticamente entre tres.","SQL no reparte importes por sí mismo al unir tablas."],
    ["Las actuaciones desaparecen siempre.","Las coincidencias pueden generar varias filas."],
    ["SUM corrige por sí sola cualquier duplicación.","SUM agrega lo que recibe, incluso valores repetidos por el JOIN."]],"Antes de sumar tras un JOIN, verifica qué representa cada fila.");

  add(5,"kpi-eficacia","¿Qué pregunta responde principalmente un indicador de eficacia?",[
    ["¿En qué grado se alcanzó la meta u objetivo?","Relaciona el logro con el objetivo previsto."],
    ["¿Qué tipografía usa el informe?","La apariencia no mide cumplimiento."],
    ["¿Cuánto cuesta cada unidad, sin considerar la meta?","Es una relación con recursos, más cercana a eficiencia."],
    ["¿Cuántas ventanas tiene la oficina?","No informa cumplimiento del objetivo planteado."],
    ["¿Qué marca de computadora se utiliza?","La marca no expresa logro de metas."]],"Eficacia mira el logro; eficiencia relaciona resultados y recursos.","ceplan");
  add(5,"kpi-productividad","¿Qué expresión mide productividad de atención?",[
    ["Solicitudes atendidas / horas de trabajo.","Expresa unidades producidas por unidad de recurso."],
    ["Solicitudes atendidas + horas de trabajo.","Suma unidades incompatibles sin una interpretación útil."],
    ["Horas de trabajo + nombre del área.","No define una medida cuantitativa de productividad."],
    ["Color del tablero / número de gráficos.","No relaciona producción y recurso del proceso."],
    ["Meta / nombre del responsable.","Dividir por un nombre no define un indicador."]],"Productividad tiene unidades: solicitudes/hora, informes/persona u otra razón definida.");
  add(5,"kpi-puntos","El cumplimiento sube de 60% a 75%. ¿Cuánto aumentó en puntos porcentuales?",[
    ["15 puntos porcentuales.","Se resta 75 − 60 = 15."],
    ["25 puntos porcentuales.","25% es el aumento relativo: 15/60 × 100, no la diferencia en puntos."],
    ["75 puntos porcentuales.","Es el valor final, no su cambio."],
    ["135 puntos porcentuales.","Sumar los dos porcentajes no mide su aumento."],
    ["60 puntos porcentuales.","Es el valor inicial, no la diferencia."]],"Diferencia de porcentajes = puntos porcentuales; variación relativa = diferencia / inicial.");
  add(5,"kpi-denominador","Quieres el porcentaje de solicitudes atendidas a tiempo entre todas las atendidas del mes. ¿Cuál es el denominador?",[
    ["El total de solicitudes atendidas del mismo mes.","Es el conjunto del que se toma la parte atendida a tiempo."],
    ["Solo las atendidas a tiempo.","Dividir la parte entre sí misma daría siempre 100% si es distinta de cero."],
    ["El número de trabajadores de toda la entidad.","Mediría otra relación, no esta proporción."],
    ["Las solicitudes de otro año sin relación.","Mezcla poblaciones y períodos distintos."],
    ["El número de gráficos del reporte.","No corresponde a la población de solicitudes."]],"El denominador define la pregunta: ¿porcentaje respecto de qué conjunto?");
  add(5,"kpi-sentido","El tiempo medio de atención baja de 8 a 6 días y la calidad se mantiene. ¿Qué interpretación es razonable?",[
    ["El tiempo se redujo 25% respecto del valor inicial.","La reducción es (8 − 6)/8 × 100 = 25%."],
    ["El tiempo aumentó 25%.","El valor final es menor, no mayor."],
    ["Se atendieron necesariamente el doble de solicitudes.","El cambio de tiempo no demuestra por sí solo ese volumen."],
    ["El cumplimiento de toda meta es 100%.","No se ha indicado ninguna meta."],
    ["El tiempo se redujo 2%.","Dos es la diferencia en días; el porcentaje requiere dividir por la base."]],"Separa cambio absoluto, cambio relativo e interpretación del desempeño.");
  add(5,"kpi-ficha","¿Qué conjunto hace reproducible un indicador?",[
    ["Definición, fórmula, fuente, unidad, frecuencia y responsable.","Otra persona puede identificar qué medir y cómo calcularlo."],
    ["Únicamente el nombre atractivo del KPI.","El nombre no establece el cálculo ni el origen."],
    ["Solo el color verde en el tablero.","No permite reproducir la medición."],
    ["Solo una cifra sin período.","Faltan contexto y método."],
    ["La preferencia personal de cada analista.","Criterios distintos impiden comparar resultados."]],"Una ficha evita que el mismo nombre esconda cálculos diferentes.","ceplan");
  add(5,"kpi-cero","El mes anterior se atendieron 0 solicitudes y este mes 12. ¿Cómo informas la variación porcentual habitual?",[
    ["No es calculable con esa fórmula por base cero; informo el aumento absoluto de 12.","Dividir por cero no produce un porcentaje válido con la fórmula usual."],
    ["Es exactamente 12%.","Confunde el aumento de unidades con un porcentaje."],
    ["Es siempre 100%.","No existe un porcentaje habitual finito que resulte de dividir entre cero."],
    ["Es 0% porque antes no había solicitudes.","Sí hay un cambio y no equivale a cero."],
    ["Cambio el dato anterior a 1 sin avisar.","Alterar el dato inventa una base y distorsiona el resultado."]],"Si la base es cero, explica la limitación y usa un cambio absoluto u otra medida definida.");
  add(5,"kpi-sesgo","Dos áreas tienen 95% y 80% de cumplimiento, pero atienden casos de complejidad muy distinta. ¿Qué conviene hacer?",[
    ["Revisar comparabilidad, carga y complejidad antes de concluir cuál trabaja mejor.","El porcentaje solo no controla diferencias importantes entre áreas."],
    ["Afirmar que 95% demuestra superioridad en todo aspecto.","Extiende una sola medida a una conclusión que no respalda."],
    ["Eliminar la medida menor.","Oculta información en lugar de interpretarla."],
    ["Promediar los porcentajes sin considerar sus denominadores.","Puede producir una cifra que no representa el total real."],
    ["Cambiar las metas para que todo aparezca en verde.","Maquilla el resultado y destruye la comparación."]],"Comparar exige contexto y definiciones equivalentes.");

  add(6,"proceso-cuello","Recepción puede procesar 50 casos/día; revisión, 20; y despacho, 40. Si cada caso pasa por las tres etapas, ¿dónde está el cuello de botella?",[
    ["En revisión.","Su capacidad de 20 casos/día es la menor y limita el flujo."],
    ["En recepción.","Su capacidad de 50 supera la de revisión."],
    ["En despacho.","Puede procesar 40, más que revisión."],
    ["En ninguna etapa porque se suman 110 casos/día.","En una secuencia no se suman capacidades para obtener el flujo final."],
    ["En la etapa con el nombre más largo.","El nombre no determina la capacidad."]],"Una cadena secuencial está limitada por su etapa de menor capacidad, dadas estas condiciones.");
  add(6,"proceso-medicion","Antes de aplicar una mejora al trámite, ¿qué necesitas para evaluar después su efecto?",[
    ["Una medición inicial con definición y período comparables.","Sin línea de base es difícil atribuir o medir una mejora."],
    ["Solo una impresión favorable de la jefatura.","Una opinión no reemplaza una comparación con datos."],
    ["Borrar los registros anteriores.","Se elimina la referencia para comparar."],
    ["Cambiar todas las definiciones del indicador.","Los resultados dejarían de ser comparables."],
    ["Elegir el resultado deseado antes de medir.","Una meta no demuestra el cambio conseguido."]],"Primero define y mide; después compara bajo criterios consistentes.");
  add(6,"proceso-pdca","¿Cuál es la secuencia habitual del ciclo PHVA?",[
    ["Planificar, hacer, verificar y actuar.","Se propone un cambio, se prueba, se revisa y se ajusta o estandariza."],
    ["Publicar, ocultar, vender y archivar.","No corresponde al ciclo de mejora."],
    ["Hacer siempre sin revisar resultados.","Omite la verificación que permite aprender."],
    ["Cambiar metas, borrar errores y cerrar.","Oculta fallos en lugar de corregir el proceso."],
    ["Comprar software y terminar toda medición.","Una herramienta no elimina la necesidad de evaluar."]],"PHVA convierte un cambio en aprendizaje comprobable.");
  add(6,"proceso-digital","Una oficina escanea documentos, pero sigue pidiendo cinco revisiones redundantes. ¿Qué se puede afirmar?",[
    ["Cambió el soporte, pero no necesariamente mejoró el flujo.","Las esperas y duplicaciones pueden mantenerse aunque el archivo sea digital."],
    ["Escanear elimina automáticamente todos los cuellos de botella.","La conversión no rediseña las etapas."],
    ["Un PDF garantiza atención más rápida sin medir.","La velocidad debe comprobarse con datos."],
    ["Digitalizar siempre permite omitir controles obligatorios.","La tecnología no anula los controles aplicables."],
    ["Los tiempos dejan de importar al usar archivos digitales.","La oportunidad sigue siendo parte del desempeño."]],"Digitalización y optimización pueden acompañarse, pero no significan lo mismo.");
  add(6,"proceso-causa","Muchos requerimientos se devuelven por falta de un dato obligatorio. ¿Qué intervención ataca mejor la causa?",[
    ["Validar el dato al recibir la solicitud y orientar cómo completarlo.","Evita que una entrada incompleta avance y genere devolución."],
    ["Mandar más recordatorios después de cada devolución sin cambiar la entrada.","Actúa tarde y mantiene la causa."],
    ["Ocultar las devoluciones del reporte.","Cambia la visibilidad, no el problema."],
    ["Aumentar el tamaño del logo.","El aspecto no valida la información."],
    ["Duplicar las solicitudes incompletas.","Aumenta carga sin completar los datos."]],"Mejora la calidad en el punto donde entra la información.");
  add(6,"proceso-calidad","Una automatización reduce el tiempo a la mitad, pero duplica errores graves. ¿Qué conclusión es adecuada?",[
    ["Hay que evaluar conjuntamente tiempo y calidad antes de considerarla exitosa.","La rapidez por sí sola no demuestra una mejora global."],
    ["Es exitosa siempre porque tarda menos.","Ignora el daño causado por errores."],
    ["La calidad deja de ser relevante con automatización.","Los resultados deben seguir siendo correctos y útiles."],
    ["Conviene dejar de registrar errores.","Ocultarlos elimina información necesaria para corregir."],
    ["Una solución automática nunca puede fallar.","También puede reproducir errores y reglas mal definidas."]],"Optimizar busca un resultado útil: tiempo, calidad y controles deben medirse juntos.");
  add(6,"proceso-flujo","¿Qué conviene incluir en un mapa del flujo de un requerimiento?",[
    ["Inicio, actividades, decisiones, responsables y resultado final.","Permite entender el recorrido y ubicar demoras o transferencias."],
    ["Solo los colores corporativos.","No describe cómo se trabaja."],
    ["Únicamente la firma del director.","No identifica pasos ni decisiones."],
    ["Solo la lista de computadoras.","Un inventario no representa el flujo del trámite."],
    ["Nombres de personas sin actividades.","No explica qué hace cada responsable ni cómo se conectan los pasos."]],"El mapa muestra cómo se transforma una entrada en un resultado.");
  add(6,"proceso-piloto","Quieres probar un cambio en un trámite. ¿Qué opción permite aprender con evidencia?",[
    ["Un piloto acotado con criterios de éxito, datos comparables y revisión.","Permite observar efectos y ajustar antes de extender el cambio."],
    ["Cambiar todo sin medir y declarar éxito.","No aporta evidencia de mejora."],
    ["Probar solo con casos inventados y afirmar que representa toda la operación.","No demuestra cómo funciona en condiciones reales."],
    ["No definir qué se considera error.","Impide evaluar calidad de manera consistente."],
    ["Extenderlo aunque incumpla los criterios definidos.","Ignora los resultados de la prueba."]],"Un piloto necesita una pregunta, criterios y datos para responderla.");

  const integer = (min, max, random=Math.random) => min + Math.floor(random()*(max-min+1));
  const choose = (items, random=Math.random) => items[integer(0,items.length-1,random)];
  function shuffle(items, random=Math.random) {
    const result = [...items];
    for(let i=result.length-1;i>0;i--){const j=integer(0,i,random);[result[i],result[j]]=[result[j],result[i]];}
    return result;
  }
  function numeric(module, family, text, correct, wrong, unit, formula, takeaway) {
    const nums=[...new Set(wrong.filter(n=>Number.isFinite(n)&&n!==correct))];
    let next=correct+1; while(nums.length<4){if(next!==correct&&!nums.includes(next))nums.push(next);next++;}
    const display=n=>new Intl.NumberFormat("es-PE",{maximumFractionDigits:2}).format(n)+unit;
    function hint(n){
      if(family==="var-media")return n===wrong[0]?"Has sumado los tiempos, pero falta dividir entre las cinco solicitudes.":n===wrong[1]?"Ese es el tiempo mayor; el promedio debe considerar todos los tiempos.":n===wrong[2]?"Ese es el tiempo menor; no representa el reparto del total.":"La media requiere sumar todos los valores y dividir entre su cantidad.";
      if(family==="var-mediana")return n===wrong[0]?"Has tomado el mínimo, pero la mediana busca el centro.":n===wrong[1]?"Has tomado el máximo, pero la mediana busca el centro.":n===wrong[2]?"La suma no es la mediana: necesitas el valor en la posición central.":"Con cinco datos ordenados se elige el tercero, sin agregar ni desplazar posiciones.";
      if(family==="var-count")return n===wrong[0]?"Ese es el total de filas: lo daría COUNT(*), no COUNT(FechaCierre).":n===wrong[1]?"Has contado las fechas que faltan; se piden las que sí tienen valor.":"Los valores NULL se excluyen; no se suman al total.";
      if(family==="var-join")return n===wrong[0]?"Has contado solicitudes, pero cada una produce varias coincidencias.":n===wrong[1]?"Ese es el número de actuaciones por una solicitud, no por todas.":"Cada solicitud se combina con sus actuaciones: se multiplican las cantidades, no se suman.";
      if(family==="var-capacidad")return n===wrong[2]?"Las capacidades de etapas sucesivas no se suman: todos los casos deben pasar por la etapa más lenta.":"Esa cifra no es la menor capacidad: una etapa más lenta limita la salida de todo el flujo.";
      if(family==="var-reduccion")return n===wrong[1]?"Esa es la diferencia en días, pero se pide una reducción porcentual.":n===wrong[0]?"Ese porcentaje indica lo que permanece del tiempo inicial, no lo que se redujo.":"Para medir la reducción, usa como base el tiempo inicial.";
      if(family==="var-productividad")return n===wrong[3]?"Ese es el total de solicitudes; todavía falta dividir entre las horas.":n===wrong[2]?"Esa es la cantidad de horas, pero se piden solicitudes por hora.":"Productividad es producción por recurso: divide solicitudes entre horas.";
      if(family==="var-variacion")return n===wrong[0]?"Has invertido el signo: una subida es positiva y una bajada es negativa.":n===wrong[2]?"Esa es la diferencia absoluta de solicitudes; falta dividir entre la cantidad inicial y multiplicar por 100.":"La variación usa la diferencia respecto del período anterior, no el valor final aislado.";
      if(family==="var-medida")return n===3?"Tres es el número de filas; SUM suma sus cantidades y no cuenta filas.":n===wrong[1]?"Has elegido el máximo; SUM necesita agregar las tres cantidades.":"SUM suma los valores una sola vez en el contexto descrito.";
      if(family==="var-oportunidad")return n===wrong[0]?"Ese es el porcentaje que no se atendió a tiempo; se pregunta por las atenciones puntuales.":"La parte puntual se divide entre todas las solicitudes atendidas del mismo conjunto.";
      return n===wrong[3]?"Has usado una cantidad de solicitudes como porcentaje, sin compararla con la meta.":"El cumplimiento compara lo atendido con la meta; no representa automáticamente lo que falta para alcanzarla.";
    }
    return {module,id:family+"-"+text,baseId:family,text,variable:true,takeaway,source:null,
      options:[{text:display(correct),correct:true,why:formula},...nums.slice(0,4).map(n=>({text:display(n),correct:false,why:`${hint(n)} ${formula}`}))]};
  }
  function generateCases(random=Math.random) {
    const result=[];
    const target=integer(4,16,random)*20, pct=choose([50,60,70,75,80,90,100,110,120],random), actual=target*pct/100;
    result.push(numeric(5,"var-cumplimiento",`La meta mensual es atender ${target} solicitudes y se atienden ${actual}. ¿Cuál es el porcentaje de cumplimiento?`,pct,[100-pct,pct+10,pct-10,actual,target],"%",`Cumplimiento = atendidas / meta × 100 = ${actual} / ${target} × 100 = ${pct}%.`,"La meta va en el denominador; superar 100% es posible si se supera la meta."));
    const hours=integer(4,15,random)*2, rate=integer(2,9,random), total=hours*rate;
    result.push(numeric(5,"var-productividad",`Un equipo atiende ${total} solicitudes en ${hours} horas. ¿Cuál es su productividad?`,rate,[rate*2,rate+2,hours,total]," solicitudes/hora",`Productividad = solicitudes / horas = ${total} / ${hours} = ${rate} solicitudes/hora.`,"Divide producción entre recurso y conserva la unidad."));
    const old=integer(4,16,random)*20, variation=choose([-50,-25,25,50,75],random), current=old*(1+variation/100);
    result.push(numeric(5,"var-variacion",`Las atenciones pasan de ${old} a ${current} entre dos meses. ¿Cuál es la variación porcentual con signo respecto del primero?`,variation,[-variation,100+variation,current-old,variation+10],"%",`Variación = (actual − anterior) / anterior × 100 = (${current} − ${old}) / ${old} × 100 = ${variation}%.`,"La base es el primer período. Un valor negativo indica reducción."));
    const all=integer(4,12,random)*20, timelyPct=choose([55,60,65,70,75,80,85,90,95],random), timely=all*timelyPct/100;
    result.push(numeric(5,"var-oportunidad",`De ${all} solicitudes atendidas, ${timely} se resolvieron dentro del plazo definido para este ejercicio. ¿Qué porcentaje se atendió a tiempo?`,timelyPct,[100-timelyPct,timelyPct+5,timelyPct-5,timely],"%",`Oportunidad = atendidas a tiempo / todas las atendidas × 100 = ${timely} / ${all} × 100 = ${timelyPct}%.`,"No uses solo las puntuales como denominador: necesitas el total atendido."));
    const values=Array.from({length:5},()=>integer(1,15,random)), sum=values.reduce((a,b)=>a+b,0), avg=sum/5;
    result.push(numeric(2,"var-media",`Cinco solicitudes tardan ${values.join(", ")} días. ¿Cuál es el tiempo medio?`,avg,[sum,Math.max(...values),Math.min(...values),avg+1]," días",`Media = suma / cantidad = (${values.join(" + ")}) / 5 = ${sum} / 5 = ${avg} días.`,"La media reparte el total entre todos; no es necesariamente uno de los datos."));
    const sorted=Array.from({length:5},()=>integer(1,20,random)).sort((a,b)=>a-b);
    result.push(numeric(2,"var-mediana",`Los tiempos ordenados son ${sorted.join(", ")} días. ¿Cuál es la mediana?`,sorted[2],[sorted[0],sorted[4],sorted.reduce((a,b)=>a+b,0),sorted[2]+1]," días",`Hay 5 valores ordenados: el central es el tercero, ${sorted[2]} días.`,"Para hallar la mediana, ordena y ubica la posición central."));
    const rows=integer(12,80,random), nulls=integer(2,rows-2,random);
    result.push(numeric(4,"var-count",`Una tabla tiene ${rows} filas y ${nulls} tienen FechaCierre = NULL. ¿Qué devuelve SELECT COUNT(FechaCierre) FROM Solicitudes?`,rows-nulls,[rows,nulls,rows+nulls,0],"",`COUNT(columna) excluye los NULL: ${rows} − ${nulls} = ${rows-nulls}.`,"COUNT(*) y COUNT(columna) pueden dar resultados diferentes."));
    const requests=integer(3,20,random), acts=integer(2,5,random);
    result.push(numeric(4,"var-join",`Hay ${requests} solicitudes y cada una tiene exactamente ${acts} actuaciones. Un INNER JOIN por IdSolicitud, sin filtros ni otras coincidencias, devuelve ¿cuántas filas?`,requests*acts,[requests,acts,requests+acts,requests*acts+requests]," filas",`Cada solicitud coincide con ${acts} actuaciones: ${requests} × ${acts} = ${requests*acts} filas.`,"El JOIN produce una fila por coincidencia, no necesariamente una por solicitud."));
    const a=integer(10,30,random), b=integer(5,9,random), c=integer(31,45,random);
    result.push(numeric(6,"var-capacidad",`Cada caso pasa por recepción (${a} casos/día), validación (${b} casos/día) y despacho (${c} casos/día). Sin otras restricciones y con demanda suficiente, ¿qué capacidad máxima diaria limita el flujo?`,b,[a,c,a+b+c,a+c]," casos/día",`La menor capacidad es validación: min(${a}, ${b}, ${c}) = ${b} casos/día.`,"Mejorar una etapa que no limita el flujo no garantiza más producción final."));
    const before=choose([10,20,30,40],random), reduction=choose([20,25,30,40,50],random), after=before*(1-reduction/100);
    result.push(numeric(6,"var-reduccion",`Un piloto reduce el tiempo de ${before} a ${after} días manteniendo la calidad. ¿Cuál es el porcentaje de reducción respecto del tiempo inicial?`,reduction,[100-reduction,before-after,reduction+10,after],"%",`Reducción = (inicial − final) / inicial × 100 = (${before} − ${after}) / ${before} × 100 = ${reduction}%.`,"Para una reducción porcentual positiva, resta final a inicial y divide por inicial."));
    const correct=integer(1,3,random), meta=integer(4,12,random)*10, area=choose(["Logística","Peritajes","Administración","Archivo"],random);
    const statuses=["Pendiente","Atendido","Observado"], status=statuses[correct-1];
    result.push({module:2,id:`var-filtro-${area}-${status}-${meta}`,baseId:"var-filtro",text:`En un archivo hay ${meta} registros del área ${area}. Necesitas contar los que tienen Estado = «${status}». Si Estado está en B2:B${meta+1}, ¿qué fórmula corresponde?`,variable:true,source:"countif",takeaway:"El criterio debe coincidir con el estado pedido, dentro del rango correcto.",options:[
      {text:`=CONTAR.SI(B2:B${meta+1};"${status}")`,why:`Cuenta exactamente el estado ${status} dentro del rango indicado.`,correct:true},
      {text:`=SUMA(B2:B${meta+1})`,why:"SUMA no cuenta coincidencias de un estado de texto.",correct:false},
      {text:`=CONTAR.SI(B2:B${meta+1};"${statuses[correct%3]}")`,why:"Cuenta un estado distinto del solicitado.",correct:false},
      {text:`=MAX(B2:B${meta+1})`,why:"MAX no cuenta solicitudes por estado.",correct:false},
      {text:`=CONTAR(B2:B${meta+1})`,why:"CONTAR busca celdas numéricas, no el texto del estado.",correct:false}]});
    const parts=[integer(2,8,random),integer(2,8,random),integer(2,8,random)], grand=parts.reduce((a,b)=>a+b,0);
    result.push(numeric(3,"var-medida",`Una tabla importada tiene tres filas con Cantidad = ${parts.join(", ")}. Sin filtros ni otras filas, ¿qué devuelve la medida Total = SUM(Solicitudes[Cantidad])?`,grand,[3,Math.max(...parts),grand+3,grand*2],"",`SUM agrega los valores: ${parts.join(" + ")} = ${grand}.`,"SUM suma valores; COUNTROWS contaría las tres filas."));
    return result;
  }

  function prepare(question, random=Math.random) {
    return {...question,options:shuffle(question.options.map(o=>({...o})),random)};
  }
  function buildSession({mode="practice",module=null,count=5,seen=[],mistakes=[],random=Math.random}={}) {
    if(mode==="mistakes") return shuffle(mistakes,random).slice(0,count).map(q=>prepare(q,random));
    const pool=[...questions,...generateCases(random)];
    const ranked=list=>shuffle(list,random).sort((a,b)=>seen.indexOf(a.baseId)-seen.indexOf(b.baseId));
    const pick=(list,n)=>{const ordered=ranked(list),variable=ordered.find(q=>q.variable);return variable&&n>0?[variable,...ordered.filter(q=>q!==variable).slice(0,n-1)]:ordered.slice(0,n);};
    if(module!==null)return pick(pool.filter(q=>q.module===module),count).map(q=>prepare(q,random));
    const quotas=mode==="mock"?[3,3,3,3,2,4,2]:Array(7).fill(0);
    if(mode!=="mock")for(let i=0;i<count;i++)quotas[i%7]++;
    // Rotar el punto de inicio evita que una práctica corta cubra siempre los mismos módulos.
    const order=mode==="mock"?[0,1,2,3,4,5,6]:shuffle([0,1,2,3,4,5,6],random);
    const selected=order.flatMap((m,index)=>pick(pool.filter(q=>q.module===m),quotas[index]));
    return shuffle(selected,random).map(q=>prepare(q,random));
  }
  function grade(items,answers) {
    const rows=items.map((q,i)=>{const answer=Number.isInteger(answers[i])?answers[i]:null;return {question:q,answer,correct:answer!==null&&q.options[answer]?.correct===true};});
    const correct=rows.filter(r=>r.correct).length,blank=rows.filter(r=>r.answer===null).length;
    return {rows,correct,blank,wrong:rows.length-correct-blank,total:rows.length,score:rows.length?Math.round(correct/rows.length*200)/10:0};
  }
  const interviews=[
    {id:"presentacion",topic:"Tu perfil",text:"Eres ingeniero de sistemas. ¿Por qué postulas a un puesto de Asistente Administrativo?",points:["Conecta tu experiencia con las funciones del puesto.","Da un ejemplo real de organización o análisis de información.","Explica tu disposición a aprender el contexto administrativo."],example:"Mi formación me permite organizar datos y convertirlos en información útil. En [experiencia real] realicé [acción concreta] y obtuve [resultado comprobable]. Quiero aplicar esa capacidad al seguimiento de requerimientos y reportes del puesto, aprendiendo las directivas de la entidad."},
    {id:"indicador",topic:"Criterio técnico",text:"La jefatura quiere medir productividad y tiempos de respuesta. ¿Qué propondrías?",points:["Define una unidad de trabajo y fuentes fiables.","Distingue productividad de tiempo y calidad.","Propón frecuencia y una línea de base."],example:"Primero definiría qué representa una solicitud atendida y validaría fechas y estados. Propondría solicitudes atendidas por hora de trabajo, junto al tiempo de atención y una medida de devoluciones. Documentaría cada fórmula y compararía períodos equivalentes antes de recomendar acciones."},
    {id:"error",topic:"Responsabilidad",text:"Detectas un error en un informe que ya enviaste. ¿Cómo actuarías?",points:["Comprueba el alcance sin ocultar el error.","Comunica oportunamente al responsable.","Corrige con control de versión y previene recurrencias."],example:"Verificaría el dato y qué conclusiones afecta. Informaría al responsable y remitiría la corrección identificando claramente la versión y el cambio. Después revisaría la causa y añadiría una validación para evitar repetirlo."},
    {id:"prioridad",topic:"Organización",text:"Llegan varios requerimientos urgentes al mismo tiempo. ¿Cómo los priorizas?",points:["Revisa plazos, impacto y criterios autorizados.","Coordina capacidad y responsables.","Registra decisiones y alerta riesgos."],example:"Registraría plazos, impacto y dependencias. Aplicaría los criterios de prioridad de la oficina, coordinaría la distribución y avisaría a la jefatura si la capacidad no permite cumplir todo. Mantendría el seguimiento y las evidencias de atención."},
    {id:"reserva",topic:"Integridad",text:"Un conocido solicita información de un expediente al que tienes acceso por tu trabajo. ¿Qué respondes?",points:["Distingue acceso laboral de autorización para divulgar.","Evita canales personales.","Orienta al canal institucional aplicable."],example:"Explicaría que mi acceso es para cumplir funciones y no me autoriza a divulgar información. No enviaría datos por un canal personal y orientaría el pedido al canal institucional, para que se evalúe según las reglas correspondientes."},
    {id:"mejora",topic:"Procesos",text:"Un trámite demora mucho. ¿Cómo investigarías la causa antes de automatizarlo?",points:["Mapea pasos y responsables.","Separa tiempo de trabajo, espera y retrabajo.","Prueba una mejora pequeña con indicadores."],example:"Dibujaría el flujo y mediría tiempos por etapa, esperas y devoluciones. Identificaría la restricción principal y sus causas. Probaría una mejora acotada y compararía tiempo y calidad con una línea de base antes de escalarla."},
    {id:"comunicacion",topic:"Comunicación",text:"Debes presentar un dashboard a una persona que no conoce Power BI. ¿Cómo lo explicarías?",points:["Comienza por la decisión que necesita tomar.","Explica período, fuente y dos o tres indicadores.","Señala límites y una acción concreta."],example:"Empezaría por la pregunta de gestión. Mostraría el período y la fuente, explicaría qué significa cada indicador y la comparación con la meta. Cerraría con el principal hallazgo, una limitación relevante y la acción que propongo evaluar."},
    {id:"colaboracion",topic:"Trabajo en equipo",text:"Un área no entrega la información necesaria para tu reporte. ¿Cómo coordinas?",points:["Precisa qué datos faltan, formato y plazo.","Escucha el obstáculo y propone una solución.","Registra seguimiento y escala con oportunidad."],example:"Confirmaría si el pedido se comprendió y precisaría campos, formato y fecha. Consultaría qué obstáculo existe y coordinaría una alternativa viable. Registraría el seguimiento y alertaría a la jefatura si el retraso pone en riesgo el reporte."},
    {id:"real",topic:"Tu experiencia",text:"Cuéntame una ocasión en la que organizaste información y mejoraste un resultado.",points:["Usa una situación real y explica tu responsabilidad.","Describe tu acción personal, sin atribuirte todo el trabajo del equipo.","Menciona un resultado verificable y lo aprendido."],example:"En [situación real], tenía la responsabilidad de [tarea]. Identifiqué [problema] e hice [acción propia]. El resultado fue [evidencia o cifra real]. Aprendí [aprendizaje]. Si no medí un porcentaje, lo digo sin inventarlo."},
    {id:"perito",topic:"Límites del rol",text:"¿Cómo apoyarías a los peritos sin interferir en su criterio técnico?",points:["Diferencia soporte administrativo y opinión especializada.","Propón seguimiento, organización y reportes.","Respeta competencias y reserva."],example:"Apoyaría con registros consistentes, seguimiento de requerimientos y reportes de carga y tiempos. Coordinaría la información administrativa y respetaría que la conclusión técnica corresponde al profesional competente. Aplicaría las reglas de acceso y trazabilidad."}
  ];
  return {sources,modules,questions,generateCases,buildSession,grade,shuffle,prepare,interviews};
})();

if(typeof module!=="undefined"&&module.exports)module.exports=CASStudy;
if(typeof document!=="undefined")initializeApp();

function initializeApp(){
  const {modules,questions,sources,interviews}=CASStudy;
  const $=selector=>document.querySelector(selector);
  const escape=value=>String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const KEY="mi-preparacion-cas-v1";
  const fresh=()=>({version:1,history:[],mistakes:{},seen:[],read:[],interview:{}});
  let storageOK=true, data=fresh(),session=null,result=null,ticker=null,toastTimeout=null,pendingRoute=null,interviewIndex=0,modelVisible=false;
  const validQuestion=q=>q&&Number.isInteger(q.module)&&modules[q.module]&&typeof q.text==="string"&&typeof q.takeaway==="string"&&typeof q.id==="string"&&typeof q.baseId==="string"&&Array.isArray(q.options)&&q.options.length===5&&q.options.every(o=>o&&typeof o.text==="string"&&typeof o.why==="string"&&typeof o.correct==="boolean")&&q.options.filter(o=>o.correct).length===1;
  try{const saved=JSON.parse(localStorage.getItem(KEY));if(saved&&saved.version===1){
    data.history=Array.isArray(saved.history)?saved.history.filter(h=>h&&typeof h.date==="string"&&Number.isFinite(h.score)&&Array.isArray(h.rows)&&h.rows.length<=30&&h.rows.every(r=>r&&validQuestion(r.question)&&(r.answer===null||Number.isInteger(r.answer)&&r.answer>=0&&r.answer<5)&&typeof r.correct==="boolean")).slice(-20):[];
    data.mistakes=saved.mistakes&&typeof saved.mistakes==="object"?Object.fromEntries(Object.entries(saved.mistakes).filter(([key,q])=>key===q?.baseId&&validQuestion(q)).slice(-150)):{};
    data.seen=Array.isArray(saved.seen)?saved.seen.filter(s=>typeof s==="string").slice(-160):[];
    data.read=Array.isArray(saved.read)?saved.read.filter(n=>Number.isInteger(n)&&modules[n]):[];
    data.interview=saved.interview&&typeof saved.interview==="object"?Object.fromEntries(Object.entries(saved.interview).filter(([k,v])=>interviews.some(i=>i.id===k)&&typeof v==="string").map(([k,v])=>[k,v.slice(0,8000)])):{};
  }}catch{storageOK=false;}
  function save(){try{localStorage.setItem(KEY,JSON.stringify(data));storageOK=true;return true;}catch{storageOK=false;notify("El navegador no permite guardar. Puedes practicar, pero el progreso durará solo esta visita.");return false;}}
  function notify(message){clearTimeout(toastTimeout);$("#notice").textContent=message;$("#notice").hidden=false;toastTimeout=setTimeout(()=>{$("#notice").hidden=true;},5500);}
  const icons={inicio:'<path d="m3 10 9-7 9 7v10H3Z"/><path d="M9 20v-7h6v7"/>',estudiar:'<path d="M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1Zm0 0v15"/>',practicar:'<path d="M8 3h8v3H8zM6 4H4v17h16V4h-2M8 11h8M8 16h5"/>',simulacro:'<circle cx="12" cy="13" r="8"/><path d="M12 9v5l3 2M9 2h6M12 2v3"/>',errores:'<path d="M3 6v5h5M3 11a9 9 0 1 1 2 7"/>',entrevista:'<path d="M21 3H3v14h5l4 4v-4h9ZM7 8h10M7 12h7"/>',progreso:'<path d="M4 3v18h17M8 17v-4M13 17V8M18 17V5"/>',fuentes:'<path d="M5 3h11l4 4v14H5ZM15 3v5h5M8 12h9M8 16h7"/>'};
  const nav=[['inicio','Inicio'],['estudiar','Ruta de estudio'],['practicar','Practicar'],['simulacro','Simulacro'],['errores','Repasar errores'],['entrevista','Entrevista'],['progreso','Mi progreso'],['fuentes','Fuentes y alcance']];
  const getRoute=()=>{const [name,arg]=(location.hash.slice(1)||"inicio").split("/");return {name:nav.some(n=>n[0]===name)?name:"inicio",arg};};
  const sourceLink=id=>{const s=sources.find(s=>s.id===id);return s?`<a class="source-link" href="${escape(s.url)}" target="_blank" rel="noopener noreferrer">Consultar fuente: ${escape(s.title)}</a>`:"<p class=\"help\">Caso de preparación elaborado para esta herramienta; no es una regla interna ni una pregunta oficial.</p>";};
  const moduleOptions=selected=>`<option value="all">Todos los temas</option>${modules.map(m=>`<option value="${m.id}" ${selected===m.id?"selected":""}>${escape(m.short)}</option>`).join("")}`;
  const heading=(eyebrow,title,intro)=>`<div class="page-heading"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1>${intro?`<p class="intro">${intro}</p>`:""}</div>`;
  const countMistakes=()=>Object.keys(data.mistakes).length;
  function navigate(route){if(location.hash===`#${route}`){render();return;}location.hash=route;}
  function navigation(active){$("#navigation").innerHTML=nav.map(([key,label])=>`<a href="#${key}" class="nav-link ${active===key?"active":""}" ${active===key?'aria-current="page"':""}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[key]}</svg>${label}${key==="errores"&&countMistakes()?`<span class="nav-count">${countMistakes()}</span>`:""}</a>`).join("");}
  function render(){
    const route=getRoute();navigation(session?(session.mode==="mock"?"simulacro":"practicar"):route.name);
    if(session){renderQuestion();return;}
    const views={inicio:home,estudiar:()=>study(route.arg),practicar:practice,simulacro:mock,errores:mistakes,entrevista:interview,progreso:progress,fuentes:references};
    $("#main").innerHTML=(!storageOK?'<p class="storage-note">El guardado local no está disponible o el registro anterior no se pudo leer. Puedes practicar durante esta visita.</p>':"")+views[route.name]();
  }
  function focusMain(){ $("#main").focus({preventScroll:true});window.scrollTo({top:0,behavior:"instant"}); }
  function practiceForm(){return `<form id="practice-form"><div class="fields"><label class="field" for="practice-module">¿Qué quieres reforzar?<select id="practice-module">${moduleOptions(null)}</select></label><label class="field" for="practice-count">Preguntas<select id="practice-count"><option value="5">5</option><option value="10">10</option><option value="20">20</option></select></label></div><button class="button full" type="submit">Empezar práctica <span aria-hidden="true">↗</span></button></form><p class="help">Corrección después de responder. Nuevos casos y alternativas mezcladas en cada sesión.</p>`;}
  function home(){
    const mocks=data.history.filter(h=>h.mode==="mock"),best=mocks.length?Math.max(...mocks.map(h=>h.score)):null;
    return `<section class="home-hero"><div><p class="eyebrow">Tu preparación para la Oficina de Peritajes</p><h1>Comprende el tema.<br>Defiende tu respuesta.</h1><p class="intro">Practica para el puesto AAD-09 con explicaciones sencillas, casos que cambian y espacio para aprender de cada error.</p></div><div class="goal-sheet" aria-label="Meta personal: 18 sobre 20"><p class="goal-tag">Tu objetivo de preparación</p><p class="goal-score">18<span> / 20</span></p><p>Un punto de llegada.<br>Muchas formas de aprender.</p></div></section><div class="stat-strip"><div class="stat"><strong>${data.history.length}</strong><span>Sesiones guardadas · últimas 20</span></div><div class="stat"><strong>${best===null?"—":best+"/20"}</strong><span>Mejor simulacro guardado</span></div><div class="stat"><strong>${countMistakes()}</strong><span>Conceptos por repasar</span></div></div><div class="home-grid"><section class="panel practice-panel"><h2>Un poco de práctica, hoy</h2><p>Elige un tema o combina conocimientos. Empieza con cinco preguntas.</p>${practiceForm()}</section><section class="panel"><h2>Entrena con intención</h2><div class="feature-line"><span class="feature-check" aria-hidden="true">✓</span><span><strong>Comprende cada alternativa.</strong><br>Revisa por qué encaja o por qué falla.</span></div><div class="feature-line"><span class="feature-check" aria-hidden="true">✓</span><span><strong>Resuelve un caso diferente.</strong><br>Las cifras cambian; el razonamiento se queda.</span></div><div class="feature-line"><span class="feature-check" aria-hidden="true">✓</span><span><strong>Mide tu avance.</strong><br>20 preguntas y soluciones al terminar.</span></div><a class="button secondary full" href="#simulacro">Preparar un simulacro</a></section></div><section><div class="heading-row"><h2>Una ruta para llegar preparado</h2><a href="#estudiar" class="button subtle">Ver ruta de estudio</a></div><div class="module-list">${modules.map(m=>`<a class="module-row" href="#estudiar/${m.id}"><span class="module-index">${m.id+1<10?"0":""}${m.id+1}</span><span><h3>${escape(m.title)}</h3><p>${escape(m.intro)}</p></span><span class="module-status">${data.read.includes(m.id)?"Lectura marcada ✓":"Estudiar"}</span></a>`).join("")}</div></section><p class="note">La convocatoria, el formato y la meta aprobatoria proceden de tu <strong>prompt.txt</strong>. Aún faltan los PDF de perfil, bases y cronograma para verificarlos. <a href="#fuentes">Revisar el alcance del material</a>.</p>`;
  }
  function study(arg){const id=Number.isInteger(Number(arg))&&modules[Number(arg)]?Number(arg):0,m=modules[id];return heading("Ruta de estudio","Entiende antes de memorizar.","Empieza por institución y gestión documental; continúa con indicadores y procesos. Tu experiencia técnica te ayudará en Excel, SQL y Power BI. Esta prioridad es una propuesta de preparación.")+`<div class="study-layout"><nav class="topic-menu" aria-label="Módulos de estudio">${modules.map(t=>`<a href="#estudiar/${t.id}" class="topic-button ${t.id===id?"active":""}" ${t.id===id?'aria-current="page"':""} style="text-decoration:none">${t.id+1}. ${escape(t.short)}</a>`).join("")}</nav><article class="lesson"><p class="eyebrow">Módulo ${id+1} de 7</p><h2>${escape(m.title)}</h2><span class="pill">${escape(m.scope)}</span><div class="spaced">${m.lesson}</div>${m.sources.map(sourceLink).join("<br>")}<div class="button-row"><button class="button" data-action="topic-practice" data-module="${id}">Practicar 5 preguntas</button><button class="button secondary" data-action="mark-read" data-module="${id}">${data.read.includes(id)?"Lectura marcada ✓":"Marcar como leído"}</button></div>${id<6?`<a class="button subtle spaced" href="#estudiar/${id+1}">Continuar al módulo ${id+2}</a>`:""}<p class="help">Tú eliges cuándo continuar. Leer un módulo no equivale a dominarlo.</p></article></div>`;}
  function practice(){return heading("Aprende a tu ritmo","Una pregunta, una explicación.","Responde antes de ver la solución. Puedes repetir un tema o combinar varios. Los casos de cálculo cambian de cifras y cada sesión prioriza conceptos menos recientes.")+`<section class="panel mock-config practice-panel"><h2>Configura tu práctica</h2>${practiceForm()}<p class="note">El banco incluye ${questions.length} preguntas conceptuales y 12 plantillas de casos variables. La variedad es finita: algunas ideas volverán a aparecer para afianzar el aprendizaje.</p></section>`;}
  function mock(){return heading("Pon a prueba lo aprendido","Tu simulacro de conocimientos.","Responde las 20 preguntas antes de consultar las soluciones. Puedes volver a una pregunta y cambiar tu elección hasta entregar.")+`<div class="mock-config"><section class="mock-banner"><h2>El objetivo es razonar, incluso cuando cambian los datos.</h2><p>Combina los siete temas. Mayor presencia de indicadores y casos administrativos como decisión de preparación, sin atribuirle carácter oficial.</p><div class="mock-facts"><div><strong>20</strong><span>preguntas</span></div><div><strong>A–E</strong><span>cinco alternativas</span></div><div><strong>18/20</strong><span>tu meta personal</span></div></div></section><form id="mock-form" class="panel"><h2>Elige cómo entrenar</h2><label class="check-line"><input type="checkbox" id="timed" checked><span>Usar límite de tiempo de entrenamiento</span></label><label class="field" for="mock-minutes">Duración elegida por ti<select id="mock-minutes"><option value="15">15 minutos</option><option value="20">20 minutos</option><option value="30" selected>30 minutos</option><option value="45">45 minutos</option><option value="60">60 minutos</option></select></label><p class="help">Este tiempo es configurable y no se presenta como duración oficial. Al agotarse, se entrega el simulacro con las respuestas registradas.</p><p class="note">Según prompt.txt: 14/20 es la referencia aprobatoria. Pendiente de contrastar con las bases. En este simulador cada acierto suma 1 y los errores o blancos suman 0; no se aplica penalización.</p><button type="submit" class="button full">Comenzar las 20 preguntas</button></form></div>`;}
  function start(mode,module=null,count=5,minutes=0){
    const items=CASStudy.buildSession({mode,module,count,seen:data.seen,mistakes:Object.values(data.mistakes)});
    if(!items.length){notify("Todavía no tienes errores para repasar. Empieza con una práctica.");return;}
    session={mode,topic:module,items,answers:Array(items.length).fill(null),checked:Array(items.length).fill(false),index:0,started:Date.now(),deadline:minutes?Date.now()+minutes*60000:null,minutes};result=null;
    renderQuestion();navigation(mode==="mock"?"simulacro":mode==="mistakes"?"errores":"practicar");focusMain();
    if(ticker)clearInterval(ticker);ticker=setInterval(updateTimer,1000);
  }
  function timeString(seconds){return `${Math.floor(seconds/60).toString().padStart(2,"0")}:${(seconds%60).toString().padStart(2,"0")}`;}
  function updateTimer(){if(!session)return;const now=Date.now();if(session.deadline&&now>=session.deadline){finish(true);return;}const element=$("#session-timer");if(element){const seconds=Math.max(0,Math.floor((session.deadline?session.deadline-now:now-session.started)/1000));element.textContent=(session.deadline?"Quedan ":"Tiempo ")+timeString(seconds);element.classList.toggle("warning",Boolean(session.deadline&&seconds<=120));}}
  function rationaleHTML(q,answer){return q.options.map((o,i)=>`<div class="rationale"><strong>${"ABCDE"[i]}. ${escape(o.text)} ${o.correct?"· Correcta":i===answer?"· Tu elección":""}</strong><p>${escape(o.why)}</p></div>`).join("");}
  function feedbackHTML(q,answer){const ok=answer!==null&&q.options[answer]?.correct;return `<section class="feedback ${ok?"":"incorrect"}" aria-label="Explicación de la respuesta"><h3>${ok?"Correcto. Este es el razonamiento.":answer===null?"Sin responder. Revisemos la idea.":"Todavía no. Vamos a entenderlo."}</h3>${!ok&&answer!==null?`<p><strong>Por qué tu elección falla:</strong> ${escape(q.options[answer].why)}</p>`:""}<p><strong>La respuesta correcta:</strong> ${escape(q.options.find(o=>o.correct).text)}</p><p>${escape(q.options.find(o=>o.correct).why)}</p><div class="example"><strong>Qué debes recordar</strong><p>${escape(q.takeaway)}</p></div><details><summary>Por qué cada alternativa es correcta o incorrecta</summary>${rationaleHTML(q,answer)}</details>${sourceLink(q.source)}</section>`;}
  function renderQuestion(){
    if(!session)return;const {index,items,answers,checked,mode}=session,q=items[index],locked=checked[index],answer=answers[index],answered=answers.filter(a=>a!==null).length,isMock=mode==="mock";
    $("#main").innerHTML=`<div class="session-wrap"><div class="session-top"><span>${isMock?"Simulacro":mode==="mistakes"?"Repaso de errores":"Práctica guiada"} · ${answered} de ${items.length} respondidas</span><span id="session-timer" class="timer" role="timer" aria-live="off"></span></div><div class="progress-track" role="progressbar" aria-valuenow="${answered}" aria-valuemin="0" aria-valuemax="${items.length}" aria-label="Preguntas respondidas"><div class="progress-fill" style="width:${answered/items.length*100}%"></div></div><article class="question-sheet"><div class="question-meta"><strong>Pregunta ${index+1} de ${items.length}</strong><span class="pill">${escape(modules[q.module].short)}</span>${q.variable?'<span class="pill variable">Caso variable</span>':""}</div><h1 id="question-title" class="question-title">${escape(q.text)}</h1><fieldset class="options" aria-labelledby="question-title"><legend class="sr-only">Elige una alternativa</legend>${q.options.map((o,i)=>`<label class="option ${answer===i?"selected":""} ${locked?"locked "+(o.correct?"correct":answer===i?"wrong":""):""}"><input type="radio" name="answer" value="${i}" ${answer===i?"checked":""} ${locked?"disabled":""}><span class="option-letter" aria-hidden="true">${"ABCDE"[i]}</span><span class="option-copy">${escape(o.text)}${locked&&o.correct?'<span class="option-result">Respuesta correcta</span>':locked&&answer===i?'<span class="option-result">Tu elección</span>':""}</span></label>`).join("")}</fieldset><p id="question-error" class="inline-error" role="alert" hidden>Elige una alternativa antes de comprobar.</p>${locked?feedbackHTML(q,answer):""}<div class="session-actions"><button type="button" class="button secondary" data-action="previous" ${index===0?"disabled":""}>Anterior</button><div class="button-row">${!isMock&&!locked?'<button type="button" class="button" data-action="check">Comprobar respuesta</button>':""}${isMock||locked?`<button type="button" class="button" data-action="next">${index===items.length-1?(isMock?"Revisar y entregar":"Ver mis resultados"):"Siguiente pregunta"}</button>`:""}</div></div></article>${isMock?`<div class="question-map" aria-label="Ir a una pregunta">${items.map((_,i)=>`<button class="map-button ${answers[i]!==null?"answered":""} ${i===index?"current":""}" data-action="jump" data-index="${i}" aria-label="Pregunta ${i+1}, ${answers[i]===null?"sin responder":"respondida"}" ${i===index?'aria-current="step"':""}>${i+1}</button>`).join("")}</div><div class="session-actions"><p class="help">${items.length-answered} sin responder. Puedes cambiar tus respuestas antes de entregar.</p><button class="button secondary" data-action="submit-mock">Entregar simulacro</button></div>`:'<p class="help spaced">Las explicaciones aparecen solo después de comprobar tu elección.</p>'}<button class="button subtle spaced" data-action="exit">Salir de esta sesión</button></div>`;
    updateTimer();
  }
  function submitReview(){if(!session)return;const missing=session.answers.filter(a=>a===null).length;$("#main").innerHTML=`<section class="empty-state"><p class="eyebrow">Antes de entregar</p><h1 style="font-size:30px">${missing?`Te quedan ${missing} preguntas sin responder.`:"Ya respondiste las 20 preguntas."}</h1><p class="spaced">${missing?"Las preguntas en blanco suman 0. Puedes volver a completarlas o entregar ahora.":"Al entregar verás la nota, el detalle de las cinco alternativas y los temas por reforzar."}</p><p id="session-timer" class="timer spaced" role="timer" aria-live="off"></p><div class="button-row"><button class="button secondary" data-action="back-session">Volver a mis respuestas</button><button class="button" data-action="finish">Confirmar entrega</button></div></section>`;focusMain();updateTimer();}
  function finish(timedOut=false){
    if(!session)return;clearInterval(ticker);ticker=null;
    if($("#leave-dialog").open){$("#leave-dialog").close();pendingRoute=null;}
    const graded=CASStudy.grade(session.items,session.answers);result={...graded,mode:session.mode,topic:session.topic,minutes:session.minutes,date:new Date().toISOString(),seconds:Math.floor((Date.now()-session.started)/1000),timedOut};
    graded.rows.forEach(r=>{const q=r.question;if(!r.correct)data.mistakes[q.baseId]=q;else delete data.mistakes[q.baseId];data.seen=data.seen.filter(id=>id!==q.baseId).concat(q.baseId);});
    data.seen=data.seen.slice(-160);data.history.push(result);data.history=data.history.slice(-20);session=null;save();navigation(getRoute().name);renderResult();focusMain();
    if(timedOut)notify("Se terminó el tiempo elegido. Se entregaron las respuestas registradas.");
  }
  function topicTotals(rows){return modules.map(m=>({module:m,rows:rows.filter(r=>r.question.module===m.id)})).filter(t=>t.rows.length).map(t=>({...t,correct:t.rows.filter(r=>r.correct).length}));}
  function reviewRows(rows,onlyWrong=false){return rows.filter(r=>!onlyWrong||!r.correct).map((r,i)=>`<details class="review-item"><summary><span class="review-status ${r.correct?"ok":""}">${r.correct?"Acierto":r.answer===null?"En blanco":"Por reforzar"}</span><span>${escape(r.question.text)}</span></summary><p class="help">${escape(modules[r.question.module].title)}${r.question.variable?" · Caso variable":""}</p><p class="review-question">Tu respuesta: ${r.answer===null?"Sin responder":escape(r.question.options[r.answer].text)}</p>${feedbackHTML(r.question,r.answer)}</details>`).join("")||'<p class="note">No hay errores en esta sesión. Revisa los aciertos para consolidar el razonamiento.</p>';}
  function renderResult(){
    if(!result){render();return;}const r=result,topics=topicTotals(r.rows),weak=[...topics].sort((a,b)=>a.correct/a.rows.length-b.correct/b.rows.length).filter(t=>t.correct<t.rows.length),title=r.mode==="mock"?(r.score>=18?"Alcanzaste tu meta de práctica.":r.score>=14?"Una base para seguir mejorando.":"Ya sabes por dónde reforzar."):"Cada respuesta te enseña algo.";
    $("#main").innerHTML=`<div class="session-wrap"><section class="result-hero"><div class="result-score">${r.mode==="mock"?r.score:r.correct}<span>${r.mode==="mock"?"sobre 20":`de ${r.total} aciertos`}</span></div><div><p class="eyebrow">${r.mode==="mock"?"Simulacro terminado":"Práctica terminada"}</p><h1>${title}</h1><p>${r.mode==="mock"?"La referencia 14/20 procede de prompt.txt y aún debe verificarse en las bases. Tu meta personal es 18/20.":"Revisa el razonamiento y vuelve a intentarlo con otra combinación."}</p>${r.timedOut?'<p><strong>Entrega automática: terminó el tiempo de entrenamiento.</strong></p>':""}</div></section><div class="result-breakdown"><span><strong>${r.correct}</strong> correctas</span><span><strong>${r.wrong}</strong> incorrectas</span><span><strong>${r.blank}</strong> en blanco</span><span><strong>${timeString(r.seconds)}</strong> de sesión</span></div><div class="button-row"><button class="button" data-action="repeat" data-mode="${r.mode}">${r.mode==="mock"?"Otro simulacro":"Otra práctica"}</button>${countMistakes()?'<button class="button secondary" data-action="start-mistakes">Reforzar mis errores</button>':""}<a class="button subtle" href="#progreso">Ver mi progreso</a></div><section class="topic-results"><h2>Cómo te fue por tema</h2>${topics.map(t=>`<div class="topic-result"><span>${escape(t.module.short)}</span><div class="progress-track" aria-hidden="true"><div class="progress-fill" style="width:${t.correct/t.rows.length*100}%"></div></div><span>${t.correct}/${t.rows.length}</span></div>`).join("")}</section><div class="note"><strong>Tu siguiente paso:</strong> ${weak.length?`Repasa ${weak.slice(0,2).map(t=>escape(t.module.short)).join(" y ")}. Lee la idea clave de cada error y resuelve una práctica de ese tema antes del siguiente simulacro.`:"Prueba otra combinación y explica en voz alta por qué cada alternativa incorrecta falla."}</div><div class="heading-row spaced"><h2>Comprende tus respuestas</h2></div><label class="review-filter"><input type="checkbox" id="only-errors">Mostrar solo errores y preguntas en blanco</label><div id="result-review">${reviewRows(r.rows)}</div></div>`;
  }
  function mistakes(){const list=Object.values(data.mistakes);return heading("Repite el razonamiento","Tus errores tienen una segunda vuelta.","Aquí se conservan conceptos fallados o dejados en blanco en sesiones terminadas. Un acierto posterior retira el concepto del repaso. Los casos numéricos se conservan con los datos que fallaste.")+(list.length?`<section class="panel mock-config"><h2>${list.length} conceptos por reforzar</h2><p>Primero intenta responder de nuevo. Podrás consultar la explicación después de elegir.</p><button class="button" data-action="start-mistakes">Practicar mis errores</button></section><div class="module-list spaced">${list.map(q=>`<div class="module-row"><span class="module-index" aria-hidden="true">↺</span><span><h3>${escape(q.text)}</h3><p>${escape(modules[q.module].short)}</p></span></div>`).join("")}</div>`:`<section class="empty-state"><h2>Todavía no hay errores guardados.</h2><p>Termina una práctica o un simulacro. Si una idea necesita refuerzo, volverá a aparecer aquí.</p><a class="button spaced" href="#practicar">Comenzar una práctica</a></section>`);}
  function interview(){const q=interviews[interviewIndex],draft=data.interview[q.id]||"";return heading("Prepara tu entrevista","Conecta tu experiencia con el puesto.","Ensaya en voz alta durante 60 a 90 segundos. Después revisa la guía y adapta la respuesta a hechos reales de tu experiencia. Son ejercicios complementarios, sin rúbrica oficial.")+`<div class="interview-grid"><section class="interview-card"><div class="heading-row"><span class="pill">${escape(q.topic)}</span><span class="help">${interviewIndex+1} de ${interviews.length}</span></div><h2>${escape(q.text)}</h2><label for="interview-draft">Tu borrador de respuesta</label><textarea id="interview-draft" maxlength="8000" placeholder="Situación, tu responsabilidad, lo que hiciste y el resultado…">${escape(draft)}</textarea><p id="draft-status" class="help" role="status">${draft?"Borrador recuperado de este navegador.":"Tu borrador se guarda al escribir, si el navegador lo permite."}</p><div class="button-row"><button class="button" data-action="show-model">${modelVisible?"Ocultar orientación":"Ver guía y ejemplo"}</button><button class="button secondary" data-action="next-interview">Otra pregunta</button></div>${modelVisible?`<div class="model-answer"><h3>Qué debería incluir tu respuesta</h3><ul>${q.points.map(p=>`<li>${escape(p)}</li>`).join("")}</ul><h3 class="spaced">Una forma de estructurarla</h3><p>${escape(q.example)}</p><p class="help spaced">Adapta el ejemplo. No inventes experiencia ni resultados. El programa guarda tu texto, pero no evalúa automáticamente si su contenido es correcto.</p></div>`:""}</section><aside class="panel"><div class="interview-tip"><h3>1. Da contexto</h3><p>¿Cuál era la situación y qué responsabilidad tenías?</p></div><div class="interview-tip"><h3>2. Cuenta tu acción</h3><p>Explica qué hiciste tú y por qué elegiste ese camino.</p></div><div class="interview-tip"><h3>3. Muestra el resultado</h3><p>Usa evidencia real. Si no mediste una cifra, no la inventes.</p></div><div class="interview-tip"><h3>Revisa tu respuesta</h3><ul><li>¿Responde lo que me preguntaron?</li><li>¿Se entiende sin jerga técnica?</li><li>¿Conecta con las funciones del puesto?</li><li>¿Respeta competencias y reserva?</li></ul></div></aside></div>`;}
  function progress(){
    const list=data.history,mocks=list.filter(h=>h.mode==="mock"),recent=mocks.slice(-3),consistent=recent.length===3&&recent.every(h=>h.score>=18);
    return heading("Tu registro de estudio","Mira lo que estás aprendiendo.","Los resultados se guardan solo en este navegador. Conservamos las últimas 20 sesiones; no se sincronizan entre dispositivos ni se envían a un servidor.")+`<div class="stat-strip"><div class="stat"><strong>${mocks.length}</strong><span>Simulacros guardados</span></div><div class="stat"><strong>${mocks.length?Math.max(...mocks.map(h=>h.score))+"/20":"—"}</strong><span>Mejor nota guardada</span></div><div class="stat"><strong>${data.read.length}/7</strong><span>Módulos marcados como leídos</span></div></div><p class="note">${consistent?"Tus últimos tres simulacros guardados alcanzaron 18/20 o más. Sigue variando los casos y explicando tus decisiones.":"Meta de constancia: alcanzar 18/20 o más en tres simulacros seguidos. La práctica es una referencia de aprendizaje, no una predicción del resultado oficial."}</p>${list.length?`<div class="table-scroll"><table class="history-table"><caption class="sr-only">Últimas sesiones terminadas</caption><thead><tr><th scope="col">Fecha</th><th scope="col">Sesión</th><th scope="col">Aciertos</th><th scope="col">Tiempo</th><th scope="col">Detalle</th></tr></thead><tbody>${[...list].reverse().map((h,i)=>`<tr><td>${escape(new Date(h.date).toLocaleDateString("es-PE",{day:"2-digit",month:"short"}))}</td><td>${h.mode==="mock"?"Simulacro":h.mode==="mistakes"?"Repaso":"Práctica"}</td><td>${h.correct}/${h.total}</td><td>${timeString(h.seconds)}</td><td><button class="button subtle" data-action="history" data-index="${list.length-1-i}" aria-label="Ver detalle de sesión ${list.length-i}">Ver detalle</button></td></tr>`).join("")}</tbody></table></div>`:'<section class="empty-state spaced"><h2>Tu primer resultado aparecerá aquí.</h2><p>Completa una práctica de cinco preguntas para empezar tu registro.</p><a href="#practicar" class="button spaced">Practicar ahora</a></section>'}`;
  }
  function references(){return heading("Fuentes y alcance","Saber de dónde sale cada idea.","El contenido se redactó como preparación personal a partir de prompt.txt. Fuentes de referencia consultadas el 27 de octubre de 2026; revisa sus actualizaciones antes de una evaluación.")+`<section class="panel"><h2>Qué está verificado y qué falta</h2><div class="feature-line"><span class="feature-check">✓</span><p><strong>Referencias oficiales:</strong> conceptos institucionales, principios generales, documentación técnica y guía metodológica enlazados abajo. Los ejercicios son de elaboración propia.</p></div><div class="feature-line"><span class="text-muted">—</span><p><strong>Datos aportados por ti:</strong> CAS N.º 127-2026-MP-FN-GG-OGPOHU, código AAD-09, 20 preguntas, cinco alternativas y referencia 14/20. Proceden de prompt.txt y no se han contrastado con las bases.</p></div><div class="feature-line"><span class="text-muted">—</span><p><strong>Pendiente:</strong> PERFILES DE PUESTO.pdf (páginas 17 y 18), BASES DEL CONCURSO.pdf y 1_CRONOGRAMA DE ACTIVIDADES.pdf no están en la carpeta. No se han verificado funciones exactas, duración, penalizaciones, ponderaciones ni fechas vigentes.</p></div><div class="feature-line"><span class="text-muted">—</span><p><strong>Preparación complementaria:</strong> gestión documental, ética, casos de procesos y entrevista. La ruta y la distribución de preguntas son propuestas educativas; no constituyen un temario ni una rúbrica oficiales.</p></div></section><h2 class="spaced">Para consultar y profundizar</h2><div class="source-list">${sources.map(s=>`<a class="source-card" href="${escape(s.url)}" target="_blank" rel="noopener noreferrer"><strong>${escape(s.title)} ↗</strong><p>${escape(s.note)}</p></a>`).join("")}</div><p class="note"><strong>Cómo varían las preguntas:</strong> ${questions.length} preguntas conceptuales, 12 plantillas con cifras variables, selección que prioriza conceptos menos recientes y alternativas barajadas. No se generan preguntas con una IA ni se consultan servicios durante el estudio. Puedes volver a encontrar un concepto o incluso una pregunta: la variedad no es ilimitada.</p>`;}
  $("#main").addEventListener("submit",event=>{
    event.preventDefault();if(event.target.id==="practice-form"){const value=$("#practice-module").value;const topic=value==="all"?null:Number(value),count=Number($("#practice-count").value);start("practice",topic,count);if(session&&session.items.length<count)notify(`Este tema ofrece ${session.items.length} preguntas distintas en esta sesión.`);}
    if(event.target.id==="mock-form")start("mock",null,20,$("#timed").checked?Number($("#mock-minutes").value):0);
  });
  $("#main").addEventListener("change",event=>{
    if(event.target.name==="answer"&&session&&!session.checked[session.index]){session.answers[session.index]=Number(event.target.value);const scrollY=window.scrollY;renderQuestion();const input=$(`input[name="answer"][value="${event.target.value}"]`);input?.focus({preventScroll:true});window.scrollTo({top:scrollY,behavior:"instant"});}
    if(event.target.id==="only-errors"&&result)$("#result-review").innerHTML=reviewRows(result.rows,event.target.checked);
    if(event.target.id==="timed")$("#mock-minutes").disabled=!event.target.checked;
  });
  $("#main").addEventListener("input",event=>{if(event.target.id==="interview-draft"){data.interview[interviews[interviewIndex].id]=event.target.value;const ok=save();$("#draft-status").textContent=ok?"Borrador guardado en este navegador.":"No se pudo guardar: conserva una copia antes de cerrar.";}});
  $("#main").addEventListener("click",event=>{
    const button=event.target.closest("[data-action]");if(!button)return;const action=button.dataset.action;
    if(action==="topic-practice")start("practice",Number(button.dataset.module),5);
    else if(action==="mark-read"){const id=Number(button.dataset.module);if(!data.read.includes(id))data.read.push(id);save();button.textContent="Lectura marcada ✓";notify("Lectura registrada. Comprueba lo aprendido con una práctica.");}
    else if(action==="check"&&session){const i=session.index;if(session.answers[i]===null){$("#question-error").hidden=false;return;}session.checked[i]=true;renderQuestion();$(".feedback").scrollIntoView({block:"nearest",behavior:"instant"});}
    else if(action==="previous"&&session){session.index=Math.max(0,session.index-1);renderQuestion();focusMain();}
    else if(action==="next"&&session){if(session.index===session.items.length-1){if(session.mode==="mock")submitReview();else finish();}else{session.index++;renderQuestion();focusMain();}}
    else if(action==="jump"&&session){session.index=Number(button.dataset.index);renderQuestion();focusMain();}
    else if(action==="back-session"&&session){renderQuestion();focusMain();}
    else if(action==="submit-mock")submitReview();
    else if(action==="finish")finish();
    else if(action==="exit"){pendingRoute="inicio";$("#leave-dialog").showModal();}
    else if(action==="repeat"){const prior=result;start(prior.mode==="mock"?"mock":"practice",prior.mode==="mock"?null:prior.topic??null,prior.total,prior.minutes||0);}
    else if(action==="start-mistakes")start("mistakes",null,Math.min(10,countMistakes()));
    else if(action==="show-model"){modelVisible=!modelVisible;$("#main").innerHTML=interview();}
    else if(action==="next-interview"){interviewIndex=(interviewIndex+1)%interviews.length;modelVisible=false;$("#main").innerHTML=interview();focusMain();}
    else if(action==="history"){result=data.history[Number(button.dataset.index)];renderResult();focusMain();}
  });
  document.addEventListener("click",event=>{const link=event.target.closest('a[href^="#"]');if(link&&session){event.preventDefault();pendingRoute=link.getAttribute("href").slice(1);$("#leave-dialog").showModal();}});
  $("#stay-button").addEventListener("click",()=>{pendingRoute=null;$("#leave-dialog").close();});
  $("#leave-button").addEventListener("click",()=>{session=null;clearInterval(ticker);ticker=null;$("#leave-dialog").close();const route=pendingRoute||"inicio";pendingRoute=null;navigate(route);render();focusMain();});
  $("#leave-dialog").addEventListener("cancel",()=>{pendingRoute=null;});
  window.addEventListener("hashchange",()=>{if(session){render();return;}result=null;render();focusMain();});
  window.addEventListener("beforeunload",event=>{if(session){event.preventDefault();event.returnValue="";}});
  document.addEventListener("visibilitychange",()=>{if(!document.hidden)updateTimer();});
  render();
}
