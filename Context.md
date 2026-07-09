# Contexto del proyecto

## Páginas principales

### Inicio (`/`)
La página de inicio funciona como puerta de entrada a la experiencia. Debe mostrar un encabezado principal con el logotipo, navegación, acceso al perfil y un buscador visible como elemento prioritario. También debe incluir categorías o tipos de estancia, tarjetas destacadas de alojamientos, mensajes de valor relacionados con descubrir destinos y bloques visuales que ayuden al usuario a iniciar una búsqueda rápida.

### Catálogo de resultados de búsqueda (`/catalog`)
La vista de catálogo presenta el conjunto de alojamientos disponibles después de una búsqueda. Debe mostrar filtros, resumen de resultados, ubicación o zona, precio por noche, puntuación, tipo de alojamiento, imágenes de portada y datos clave para comparar opciones. Su objetivo es facilitar la exploración, comparación y selección de una estancia concreta antes de abrir el detalle.

### Detalle de la habitación (`/rooms/[id]`)
La vista de detalle muestra la información completa de un alojamiento específico. Debe incluir galería de imágenes, título, localización, valoración, datos del anfitrión, descripción, lista de comodidades, reglas básicas, distribución de camas si aplica y un panel lateral o destacado con precio, fechas y llamada a la acción para reservar. Esta página está pensada para ayudar al usuario a confirmar si el alojamiento cumple sus necesidades antes de tomar una decisión.

## Componentes principales por vista

### Componentes de la vista Inicio
- Header principal con logo, navegación y acciones de usuario.
- Buscador global con destino, fechas y huéspedes.
- Barra de categorías o experiencias.
- Filtrado visual por categoría.
- Filas horizontales de tarjetas de alojamiento.
- Tarjeta de alojamiento resumida.

### Componentes de la vista Catálogo
- Header persistente con buscador refinable.
- Cabecera de resultados.
- Control de ordenación.
- Grid o lista de tarjetas de alojamiento.
- Placeholder de mapa.
- Navegación al detalle.

### Componentes de la vista Detalle de la habitación
- Header persistente.
- Galería principal de imágenes.
- Encabezado del alojamiento con título, ubicación y rating.
- Bloque de información del anfitrión.
- Sección de descripción.
- Grid de amenities.
- Tarjeta o panel de reserva con contador de huéspedes y CTA.

## Usuario objetivo

El usuario objetivo es una persona que busca reservar un alojamiento temporal para vacaciones, una escapada urbana o una estancia de trabajo flexible. Su objetivo es encontrar una opción confiable, atractiva y bien ubicada, comparar varias alternativas con rapidez y acceder al detalle de una propiedad para decidir si reserva esa estancia.