# Mi preparación CAS · AAD-09

Programa de estudio en español basado en `prompt.txt`. Funciona con HTML, CSS y JavaScript, sin instalación, servidor de datos, claves ni conexión a una IA.

## Abrir

Abre `index.html` en un navegador actualizado. Para una dirección local estable también puedes ejecutar desde esta carpeta:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Abre `http://127.0.0.1:8000`. Detén el servidor con Ctrl+C cuando termines. Para conservar un mismo registro de progreso, utiliza siempre el mismo navegador y la misma dirección; el almacenamiento de una apertura como archivo puede variar entre navegadores.

## Qué puedes practicar

- Siete módulos con explicaciones sencillas, ejemplos y enlaces de referencia.
- 56 preguntas conceptuales, con cinco alternativas y explicación individual de cada alternativa.
- 12 plantillas de casos con cifras o condiciones variables: cumplimiento, productividad, variación, oportunidad, media, mediana, SQL, capacidad, reducción, Excel y DAX.
- Prácticas de 5, 10 o 20 preguntas. Si un tema tiene menos preguntas distintas disponibles, la sesión usa las disponibles y lo indica.
- Simulacros de 20 preguntas, con respuestas editables hasta entregar y soluciones al finalizar.
- Cronómetro opcional y configurable. La duración no se presenta como oficial.
- Resultados por tema, historial de las últimas 20 sesiones y repaso de errores.
- Diez ejercicios de entrevista con borrador, guía y ejemplo. La respuesta escrita se revisa de forma personal: no hay evaluación automática del contenido.

Las alternativas se barajan, los números de los casos se recalculan y la selección prioriza conceptos no vistos o menos recientes. La variedad es finita; no se trata de generación ilimitada con IA. Un simulacro contiene 3 preguntas de institución, 3 documentales, 3 de Excel, 3 de Power BI, 2 de SQL, 4 de indicadores y 2 de procesos. Esta distribución es una propuesta de entrenamiento.

Cada acierto del simulacro suma 1; errores y blancos suman 0. La meta personal es 18/20. La referencia 14/20 y el formato proceden de `prompt.txt`, pendientes de contrastar con las bases.

## Publicar en GitHub Pages

1. Crea o abre el repositorio donde quieres publicar el programa.
2. Sube **`index.html`, `styles.css` y `app.js` juntos a la raíz** de la rama `main`. Esos son los tres archivos necesarios para ejecutar la web. Puedes añadir también este README y `MARCA.md` como documentación.
3. En el repositorio, abre **Settings → Pages**.
4. En **Build and deployment → Source**, elige **Deploy from a branch**.
5. Selecciona la rama **main**, carpeta **/(root)**, y pulsa **Save**.
6. Espera a que GitHub confirme la publicación; la dirección aparecerá en esa misma página. Para un repositorio de proyecto suele tener la forma `https://TU_USUARIO.github.io/TU_REPOSITORIO/`.

Si la opción de Pages depende del plan o visibilidad de tu repositorio, consulta la configuración de tu cuenta. Los archivos usan rutas relativas para funcionar también bajo el nombre de un repositorio. No se necesita un proceso de compilación ni un workflow propio.

Referencia: [Configurar la fuente de publicación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

No se ha publicado ni creado un repositorio desde esta carpeta. `prompt.txt` no es necesario para el funcionamiento: decide si quieres compartirlo antes de subirlo a un repositorio público.

## Alcance de las fuentes

No están disponibles los PDF citados en `prompt.txt`: perfil del puesto, bases y cronograma. No se verificaron contra esos documentos los datos de la convocatoria, funciones exactas, fechas, duración, ponderación ni penalizaciones. No se conocen las preguntas reales.

La pantalla **Fuentes y alcance** contiene enlaces oficiales del Ministerio Público, MINJUSDH, Ley 27815, Microsoft y CEPLAN. Las preguntas, explicaciones, casos, prioridad de estudio y guías de entrevista fueron elaborados como material de preparación. Los usos documentales y recomendaciones de procesos son generales, no directivas internas de la entidad. Revisar las actualizaciones de las fuentes antes de la evaluación.

## Guardado y archivos

El progreso y los borradores se guardan con la clave `mi-preparacion-cas-v1` en `localStorage` de este navegador y dirección. Se conservan hasta 20 sesiones, 150 conceptos de error y 8.000 caracteres por borrador. No se envían a ningún servidor ni se sincronizan. La navegación privada, el bloqueo de almacenamiento o borrar datos del sitio puede impedir conservarlos. Si no puede guardar, la interfaz lo indica. Recargar o cerrar una sesión activa puede perder sus respuestas; se solicita el aviso nativo del navegador.

- `index.html`, `styles.css`, `app.js`: necesarios para ejecutar y publicar.
- `README.md`: instrucciones; puede eliminarse si ya no necesitas la documentación.
- `MARCA.md`: decisiones visuales; puede eliminarse si ya no necesitas esa referencia.
- `prompt.txt`: material original del usuario, conservado sin cambios.

No se requieren dependencias, carpetas de compilación ni archivos temporales para usar el programa. La revisión técnica usa herramientas temporales fuera de esta carpeta.

## Verificación de esta entrega

Se comprobó la sintaxis de JavaScript y se ejecutaron 1.000 combinaciones de lógica: cinco alternativas distintas, una correcta por pregunta, explicaciones presentes, simulacros con 20 conceptos distintos y al menos cinco casos variables, distribución por módulos, filtros de tema, rotación por uso reciente y puntuación de aciertos, errores y blancos. Se midieron contrastes de los colores principales; los valores están en `MARCA.md`.

La revisión visual y las interacciones reales en navegador quedaron pendientes: la captura automatizada no pudo iniciarse por permisos y el acceso a Chrome agotó el tiempo de autorización. Estas comprobaciones de lógica no equivalen a una prueba completa de interfaz. La aplicación tiene estilos adaptables, pero su representación en los distintos dispositivos aún necesita esa revisión.
