---
layout: page
title: Trabajos académicos
nav_title: Academia
---

## Síntesis de Anomalías Industriales Mediante Modelos de Difusión
*Trabajo de fin de grado (TFG) \| 2024-2025*

[Organización de GitHub](https://github.com/IndustrialAnomalySynthesis)

Puedes solicitar acceso a la organización por [correo electrónico](mailto:{{ site.email }}).

<p>
  <img class="theme-dark-image" src="{{ '/assets/FDP_photo.png' | relative_url }}" alt="Diagrama conceptual simplificado de la síntesis de anomalías">
  <img class="theme-light-image" src="{{ '/assets/FDP_photo_light.png' | relative_url }}" alt="Diagrama conceptual simplificado de la síntesis de anomalías">
</p>

En las líneas de producción de la industria manufacturera moderna (Industria 4.0), se utilizan modelos predictivos de Inteligencia Artificial (IA) para detectar, localizar píxel por píxel y clasificar con precisión anomalías industriales en imágenes. Estas tareas garantizan la calidad del producto, reducen el tiempo de inactividad operativa y mantienen los estándares de seguridad en las líneas de producción automatizadas. Sin embargo, la escasez de muestras anómalas necesarias para entrenar modelos de inteligencia artificial que realizan estas tareas representa un desafío persistente en entornos industriales reales.

El objetivo principal de este Trabajo de Fin de Grado (TFG) es aprender y analizar el uso de trabajos de vanguardia para generar sintéticamente datos anómalos. Para ello, tras una exhaustiva clasificación y análisis de la literatura disponible, se ha seleccionado la tecnología que mejor se adapta a este contexto: los modelos de difusión. En este proceso de difusión, se añade y elimina ruido de las imágenes de forma iterativa, aprendiendo así la capacidad de generar imágenes a partir de ruido aleatorio. Entre los trabajos que utilizan esta tecnología para generar anomalías sintéticas en imágenes industriales, se seleccionaron los dos más significativos: AnomalyDiffusion y DualAnoDiffusion. Posteriormente, estos dos modelos se reprodujeron en un nuevo conjunto de datos (llamado VisA) que no se había visto antes, con el fin de compararlos. Esto último se llevó a cabo mediante el análisis de las imágenes generadas y utilizando un modelo para la detección y localización de anomalías (U-Net), midiendo así, al mismo tiempo, la calidad de los conjuntos de datos sintéticos que se generan utilizando varias métricas bien conocidas (IS, AP, PRO, F1 Max y AUROC).

Considerando los resultados obtenidos, el trabajo DualAnoDiffusion fue el que obtuvo los mejores resultados. Por ejemplo, en la clase "velas" del conjunto de datos VisA, observamos las siguientes diferencias de rendimiento en comparación con las obtenidas para AnomalyDiffusion: 47,68% en la métrica AP-Imagen, 33,6% en la métrica F1-max-Imagen, 110,4% en la métrica AP-Píxel y 52,65% en la métrica F1-max-Píxel. Además, se han observado las dificultades que presentan las dos obras reproducidas sobre datos no vistos previamente, incluyendo la generación de anomalías en imágenes con múltiples objetos y objetos con estructuras complejas (placas electrónicas). Durante este proceso se ha creado un conjunto de datos sintéticos que puede utilizarse en futuras investigaciones.