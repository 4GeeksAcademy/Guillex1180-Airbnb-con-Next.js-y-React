# Design Validation

## Referencia visual

La imagen `referenciaarbnb.png` muestra una home de Airbnb con fondo blanco, cabecera amplia, logo rojo a la izquierda, tabs superiores centradas, acciones de usuario a la derecha, un buscador grande en forma de píldora y filas horizontales de tarjetas de alojamiento con imágenes dominantes, badge superior y rating compacto.

## Checklist de validación

- Header superior blanco con marca alineada a la izquierda: ajustado.
- Navegación superior con tabs tipo Airbnb: ajustado.
- Buscador central grande con destino, fechas y huéspedes: ajustado.
- Filtros por categoría visibles y seleccionables: ajustado.
- Filas horizontales de cards como en la referencia: ajustado.
- Tarjetas con imagen dominante, badge, favorito y rating: ajustado.
- Catálogo con ordenación y área de mapa: ajustado.
- Detalle con galería, anfitrión, amenities y booking card: ajustado.
- Archivos de planificación y datos requeridos: ajustado.

## Diferencias controladas

- La app usa placeholders y gradientes en vez de fotografías reales.
- Los datos son mock y están pensados para pruebas de arquitectura, no para producción.
- La referencia exacta disponible es de la home; catálogo y detalle siguen la misma dirección visual, pero no provienen de una captura específica.

## Próximos ajustes recomendados

- Sustituir placeholders por imágenes reales optimizadas.
- Afinar espaciados finos y tipografía si se aporta una segunda referencia de detalle y catálogo.
- Conectar `Data/modelo*.json` a una capa real de fetch cuando se migre de mock a datos externos.