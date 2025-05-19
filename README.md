# Voz Segura

![Logo de Voz Segura](/public/images/voz-segura-logo.png)

## Descripción del Proyecto

Voz Segura es una plataforma de apoyo, conciencia y acción para mujeres, enfocada en crear espacios públicos más seguros e inclusivos. Esta aplicación web proporciona a las mujeres herramientas y recursos para sentirse más seguras en sus entornos, especialmente dentro del campus de la Universidad de Medellín.

## Misión

Empoderar a las mujeres a través de una plataforma colaborativa que promueva la seguridad en espacios públicos, fomentando la sororidad, brindando herramientas de protección y generando conciencia social sobre la importancia de entornos libres de violencia de género.

## Visión

Ser el movimiento líder en América Latina que transforme los espacios públicos en entornos verdaderamente seguros e inclusivos para todas las mujeres, donde puedan desarrollarse con plena libertad y autonomía, sin temor a la violencia o el acoso.

## Características Principales

- **Mapa Colaborativo**: Identifica y comparte zonas seguras y de riesgo dentro del campus universitario.
- **Foro de Apoyo**: Espacio para compartir experiencias, hacer preguntas y brindar apoyo a otras mujeres.
- **Comentarios Anónimos**: Sistema que permite a las usuarias expresarse con total confidencialidad.
- **Calendario de Eventos**: Talleres, charlas y encuentros relacionados con seguridad, empoderamiento y apoyo mutuo.
- **Sistema de Suscripción**: Las usuarias pueden suscribirse a eventos de su interés.
- **Recursos Informativos**: Acceso a información sobre derechos, protocolos de seguridad y organizaciones de apoyo.
- **Sección de Donaciones**: Permite apoyar económicamente al proyecto para su sostenibilidad.

## Tecnologías Utilizadas

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Autenticación**: Supabase Auth con soporte para email/password y Google
- **Despliegue**: Vercel

## Instalación y Configuración

### Requisitos Previos

- Node.js (versión 18 o superior)
- npm o yarn
- Cuenta en Supabase

### Pasos para Instalación Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/voz-segura-mvp.git
   cd voz-segura-mvp
   ```

2. Instalar dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Configurar variables de entorno:
   Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
   ```

4. Inicializar la base de datos:
   Ejecuta los scripts SQL ubicados en la carpeta `/schema` en tu proyecto de Supabase.

5. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

6. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del Proyecto

- `/app`: Componentes y páginas de la aplicación (Next.js App Router)
- `/components`: Componentes reutilizables
- `/lib`: Utilidades y contextos
- `/public`: Archivos estáticos
- `/schema`: Scripts SQL para la configuración de la base de datos
- `/services`: Servicios para interactuar con la API de Supabase
- `/utils`: Funciones de utilidad

## Despliegue

El proyecto está configurado para ser desplegado en Vercel. Puedes hacerlo fácilmente con los siguientes pasos:

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en el panel de Vercel
3. Despliega la aplicación

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos para contribuir:

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## Valores

- **Sororidad**: Creemos en la alianza entre mujeres para construir redes de apoyo.
- **Seguridad**: Priorizamos la integridad física y emocional de nuestras usuarias.
- **Confidencialidad**: Respetamos y protegemos la privacidad de todas las usuarias.
- **Comunidad**: Fomentamos la colaboración y el apoyo mutuo entre todas las integrantes.
- **Justicia**: Trabajamos por un mundo donde todas las mujeres puedan vivir libres de violencia.
- **Innovación**: Buscamos constantemente nuevas formas de abordar los desafíos de seguridad.

## Licencia

[MIT](LICENSE)

## Contacto

Para más información o consultas, por favor contacta a través de la [página de contacto](https://voz-segura.vercel.app/protected/contact) o escribe directamente a contacto@vozsegura.org.

---

Voz Segura © 2025 - Plataforma de Apoyo, Conciencia y Acción para Mujeres
