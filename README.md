# Ferretería Corrales — The Hardware Workshop

Web estática independiente para Ferretería Corrales, calle la Rosa, 9, 11670 El Bosque, Cádiz. Teléfono confirmado: **956 716 358**.

HTML5, CSS3 y JavaScript vanilla. Abre `index.html` con Live Server de VS Code o directamente en un navegador. No hay dependencias, compilación, formularios, comercio electrónico, analítica ni peticiones a fuentes o fotografías remotas durante la navegación. No se han creado configuraciones de Netlify ni realizado despliegues.

## Diseño

La composición utiliza una cubierta tipográfica de catálogo, una mesa asimétrica de materiales, una impresión local, un registro de dirección con cotas abstractas y una placa de identificación con fijaciones. El dibujo de localización es gráfico: no representa un plano, coordenadas ni la distribución del negocio.

Paleta: acero `#E9E7E1`, naranja óxido `#E35429`, grafito `#252B30`, metal `#8A938F`, blanco `#FFFFFF`. Sin degradados ni sombras de tarjetas.

Sistema tipográfico local: Teko para titulares industriales, Public Sans para lectura e Inconsolata para referencias. Navegación con marca y dos controles de acceso en una placa, sin hamburguesa. En móvil, llamada y ubicación ocupan dos posiciones superpuestas junto a la marca. Los botones se componen de un cuerpo funcional y un actuador separado por una línea, con un pequeño registro cuadrado y desplazamiento mecánico en hover.

Las imágenes se revelan verticalmente en pasos, las líneas se extienden y las etiquetas ajustan su espaciado. El observador se activa progresivamente; todo el contenido sigue visible sin JavaScript. `prefers-reduced-motion` elimina animaciones, transiciones y desplazamiento suave.

## Auditoría de originalidad

Antes de implementar se examinaron los HTML y CSS disponibles de los 19 proyectos del directorio. Se contrastaron arquitectura, cabeceras, navegación, fuentes, titulares, párrafos, espaciados, fotografías, iconos, contactos, footers, reglas responsive y efectos de movimiento/hover definidos en el código. Después se revisaron las cuatro capturas completas del nuevo proyecto. La comparación con los proyectos anteriores se hizo sobre sus fuentes; no se ejecutaron sus webs durante esta tarea.

| Proyecto examinado | Lenguaje existente observado | Decisión específica para Corrales |
| --- | --- | --- |
| Fontanería Londro | Arial, conexiones, cabecera con menú, introducción y estudios del oficio | Teko/Public Sans/Inconsolata, placa sin menú desplegable, cubierta de catálogo y contacto de identificación |
| Pintor José Luis Gracia Pavón | Newsreader/Manrope, composición pictórica, muestras de color, botones redondeados | Tipografía industrial, referencias de fabricación y actuadores rectos |
| El Bosque Informática | Chakra/Geist/Geist Mono, ventanas y módulos, navegación inferior móvil | Superficie continua de taller sin ventanas, paneles de software ni navegación inferior |
| Taxi 9 Plazas | Barlow, amarillo, recorrido de paradas, botones en punta de flecha | Acero/óxido, cotas y registros de materiales, botones rectangulares sin punta |
| Abogado José Antonio Vázquez Sánchez | Archivo Narrow/Literata/Source Sans/DM Mono, pestañas y documento jurídico | Cabecera de fabricación, composiciones fotográficas y placa remachada |
| Café-Pub Andalucía | Serif clásica, hero fotográfico, carta con tarjetas | Portada predominantemente tipográfica y mesa sin tarjetas |
| Casa Rural La Cascada | Gelasio/Karla, umbral y secuencia de paisajes | Identidad condensada, metal y registro técnico |
| Club Deportivo Stilos | Barlow/Barlow Condensed, identidad deportiva y bloques de entrenamiento | Sistema de catálogo industrial sin lenguaje deportivo |
| El Bosque Vending 24h | Hero comercial, beneficios, productos y pasos | Sin catálogo comercial ni fichas de productos |
| Guadalinfo El Bosque | Figtree/Atkinson, dibujos, curvas y mural comunitario | Geometría de fijaciones y cruces de referencia, sin composiciones orgánicas |
| Inmobiliaria Realty Canoe | Bodoni/Manrope, revista de arquitectura y navegación lateral | Placa horizontal, fotografía de materiales, etiqueta final |
| Isaac Phoenix Fotógrafo | Cormorant/Outfit, fotolibro y carta de contacto | Cubierta de fabricación y contacto grabado |
| La Casa del Muro | Newsreader/Jakarta, alojamiento e interiores | Sin relato de alojamiento, sin galería convencional |
| La Casita de El Bosque | Georgia/Segoe UI, refugio rural y reservas | Dirección y teléfono como únicas acciones comerciales |
| La Rosa de Papel | Fraunces/Hanken, collage y etiquetas de papel | Superficie metálica, registros y fijaciones |
| Miel El Bosque | Serif editorial y sans de lectura, composición de producto | Sin producto protagonista, sin relato de variedades |
| Panadería El Rescoldo | Archivo/Manrope, horno, productos y galería | Mesa de detalles mecánicos sin fichas ni galería regular |
| Peluquería Mari Carmen | Space/Plex, servicios desplegables y oficio | Sin acordeones de servicios, tipografías y controles propios |
| Restaurante Hotel Puerta del Parque | Serif clásica, cocina, paisaje y diario | Catálogo gráfico industrial y pie de identificación |

Los recursos visuales, el HTML, el CSS y el JavaScript de Corrales se han creado para esta carpeta; no se han importado componentes visuales de otros proyectos. Las convenciones semánticas y de accesibilidad (enlaces telefónicos, enlace para saltar al contenido y estados focus) se conservan por su utilidad.

## Fotografías y licencias

Todas son fotografías reales de terceros, **ilustrativas del sector**. No representan la tienda, su catálogo ni la disponibilidad de productos. Esta distinción también aparece en la página. No se han utilizado imágenes generadas. Los cuatro originales son diferentes y se sirven localmente en WebP; el conjunto fotográfico pesa aproximadamente 196 KB.

| Archivo | Autor | Fuente |
| --- | --- | --- |
| `img/herramientas.webp` | Roger Brown | [Close Up Photo of Repair Tools, Pexels 5414383](https://www.pexels.com/photo/close-up-photo-of-repair-tools-5414383/) |
| `img/llaves.webp` | Roger Brown | [Different Wrenches on a Brown Surface, Pexels 5414384](https://www.pexels.com/photo/different-wrenches-on-a-brown-surface-5414384/) |
| `img/tornilleria.webp` | Győző Mórocz | [Close-up of Metal Screws, Pexels 17372998](https://www.pexels.com/photo/close-up-of-metal-screws-17372998/) |
| `img/brocas.webp` | Nic Wood | [Close-Up of Metal Precision Drill Bits, Pexels 28426246](https://www.pexels.com/photo/close-up-of-metal-precision-drill-bits-28426246/) |

Licencia: [Pexels License](https://www.pexels.com/license/), consultada el 22/10/2026. Permite uso y adaptación gratuitos, incluido uso comercial, conforme a sus condiciones; la atribución no es obligatoria y se documenta aquí. Las imágenes se descargaron desde `images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg` con parámetros `auto=compress&cs=tinysrgb&w={ancho}&fm=webp`. Se verificó la firma RIFF/WEBP. Las puntas de estrella de la última fotografía se describen como puntas de atornillado en el texto alternativo; el nombre de archivo conserva la referencia de origen.

El encuadre y oscurecimiento de la portada se realizan mediante CSS. SVG del favicon, marca, tuerca, cotas e indicadores: dibujo original de este proyecto, sin paquetes de iconos. El motivo de barras del footer es decorativo, no un identificador comercial escaneable.

## Tipografías

Descargadas del repositorio oficial [google/fonts](https://github.com/google/fonts), con licencia SIL Open Font License 1.1. Archivos originales variables sin modificaciones:

- [Teko](https://github.com/google/fonts/tree/main/ofl/teko): `css/teko.ttf`; licencia `css/teko-OFL.txt`.
- [Public Sans](https://github.com/google/fonts/tree/main/ofl/publicsans): `css/public-sans.ttf`; licencia `css/publicsans-OFL.txt`.
- [Inconsolata](https://github.com/google/fonts/tree/main/ofl/inconsolata): `css/inconsolata.ttf`; licencia `css/inconsolata-OFL.txt`.

## Funcionalidad, SEO y accesibilidad

- Todos los enlaces de llamada usan `tel:+34956716358`. La llamada real depende del dispositivo y no se efectuó ninguna durante las pruebas.
- Copiar escribe exactamente `956716358`. Se prueba Clipboard API, después copia compatible y, si ambas fallan, se muestra un campo seleccionable con instrucciones. Se anuncia el resultado con `role="status"`.
- Google Maps recibe `Calle la Rosa, 9, 11670 El Bosque, Cádiz` mediante su URL oficial de búsqueda. Los enlaces externos anuncian nueva pestaña y usan `noopener noreferrer`.
- HTML semántico, un único h1, idioma español, alternativas de las fotografías, acceso por teclado, focus visible y enlace para saltar al contenido.
- Title, descripción local, Open Graph y JSON-LD `HardwareStore` con nombre, dirección y teléfono confirmados. No se añade un dominio o URL canónica desconocidos. `og:image` es relativo para mantener la portabilidad local.
- No se publican marcas, precios, stock, ofertas, horarios, servicios no confirmados, testimonios, redes sociales, WhatsApp ni años de experiencia.

## Verificación ejecutada

Chrome headless local, 22/10/2026, mediante Chrome DevTools Protocol y Node.js. `node --check js/script.js` superado. Herramienta auxiliar y resultados en `.qa/`, excluida de Git.

| Comprobación | Resultado |
| --- | --- |
| 375, 768, 1440 y 1920 px | Sin desbordamiento horizontal; imágenes cargadas; destinos de anclas existentes |
| Capturas completas | `.qa/375.png`, `.qa/768.png`, `.qa/1440.png`, `.qa/1920.png`, revisadas visualmente |
| JavaScript / consola | Sin errores durante las pruebas |
| Portapapeles | Lectura posterior confirma `956716358` |
| Portapapeles denegado | Campo visible y nueve dígitos seleccionados para copia manual |
| Teléfonos | Los seis enlaces coinciden con el número confirmado |
| Maps | Ambos enlaces contienen la dirección confirmada y atributos seguros |
| Fuentes | Las tres familias locales cargadas |
| Movimiento reducido | Scroll automático, sin animación, sin elementos pendientes de revelar |
| Teclado | Primer Tab enfoca el enlace de salto con contorno visible |
| JavaScript desactivado | Fotografías y seis enlaces de llamada disponibles; copiar se oculta |
| Datos estructurados | JSON parseado correctamente como HardwareStore |

Las pruebas de Maps verifican el destino y los parámetros del enlace; no comprueban la ficha externa ni una ruta real. No se ha realizado una auditoría automatizada completa WCAG ni pruebas en Safari o Firefox. No se ha llamado al establecimiento ni escrito a terceros.

Sólo se han creado archivos dentro de `ferreteria-corrales/`. El servidor y la instancia de Chrome utilizados para las comprobaciones se cierran al terminar.
