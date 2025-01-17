# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Pasos para crear el proyecto:

    Crear el proyecto con Vite.
    Configurar la estructura del proyecto.
    Implementar el formulario para recoger la información del usuario.
    Mostrar los ejercicios recomendados basados en la entrada del usuario.
    Agregar estilos para mejorar la interfaz de usuario.

1. Crear el proyecto con Vite

Primero, vamos a crear el proyecto utilizando Vite.
bash

# Instalar Vite si no lo tienes instalado
npm install -g create-vite

# Crear un nuevo proyecto de Vite
npm create vite@latest my-training-app --template react

# Navegar al directorio del proyecto
cd my-training-app

# Instalar las dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev

2. Configurar la estructura del proyecto

Vamos a configurar la estructura del proyecto. Crearemos los siguientes componentes:

    TrainingForm.jsx: Formulario para recoger la información del usuario.
    ExerciseList.jsx: Lista de ejercicios recomendados.
    App.jsx: Componente principal que renderiza los componentes anteriores.

3. Implementar el formulario para recoger la información del usuario

Creamos el componente TrainingForm.jsx.

4. Mostrar los ejercicios recomendados basados en la entrada del usuario

Creamos el componente ExerciseList.jsx

5. Componente principal App.jsx

Finalmente, creamos el componente principal App.jsx que unirá todo.

6. Agregar estilos para mejorar la UI

    Finalmente, añadimos algunos estilos en TrainingForm.css

7. Definir los estilos en App.css
8. index.css

    Este archivo contiene estilos globales que se aplican a toda la aplicación. Se suelen definir estilos básicos y resets de CSS para asegurar una apariencia consistente en todos los navegadores
9.  implementación con react-router-dom

    A continuación, te muestro cómo podrías añadir rutas adicionales para la navegación entre diferentes páginas:
    Instalar react-router-dom

    Primero, instala react-router-dom:
    bash

    npm install react-router-dom

    Configurar las rutas en App.jsx.

10. Mejorar la Interfaz de Usuario (UI)

    Añadir una biblioteca de componentes UI: Usar una biblioteca de componentes como Material-UI (MUI) para mejorar el diseño y la funcionalidad.
    Aplicar estilos personalizados: Usar CSS personalizado para mejorar la apariencia de la aplicación.

    Añadir Material-UI (MUI)

    Primero, instalemos Material-UI en nuestro proyecto.
    bash

    npm install @mui/material @emotion/react @emotion/styled

11. Actualizar Componentes para Usar MUI

    Vamos a actualizar los componentes TrainingForm y ExerciseList para que utilicen los componentes de Material-UI.
    TrainingForm.jsx

    Actualiza el componente TrainingForm para usar componentes de MUI.

12. ExerciseList.jsx

    Actualiza el componente ExerciseList para usar componentes de MUI.

13. Vamos a crear una barra de navegación atractiva y funcional usando Material-UI y React Router! La barra de navegación incluirá enlaces y un logotipo de la empresa.
    1. Instalación de Material-UI y React Router

    Asegúrate de tener Material-UI y React Router instalados en tu proyecto:
    bash

    npm install @mui/material @emotion/react @emotion/styled
    npm install @mui/icons-material
    npm install react-router-dom

    2. Crear la Barra de Navegación

    Actualiza el componente App.jsx para incluir la barra de navegación.

    3. Añadir Estilos Personalizados

    En este ejemplo, hemos utilizado makeStyles de Material-UI para crear estilos personalizados. Puedes ajustar los estilos según tus necesidades.
    4. Crear el Logotipo

    Asegúrate de tener un logotipo de la empresa en la ruta especificada (/path/to/logo.png). Puedes ajustar la ruta y el tamaño del logotipo según sea necesario.
    5. Actualizar index.css

    Asegúrate de que index.css contenga estilos globales básicos.

14.  Instalar Axios para Realizar Solicitudes HTTP

    Vamos a usar Axios para realizar solicitudes HTTP. Instala Axios en tu proyecto:
    bash

npm install axios

3. Actualizar App.jsx para Llamar a la API

    Vamos a actualizar el componente App.jsx para llamar a la API y obtener los ejercicios.

15. Configurar Axios para Usar la API de ExerciseDB

    Actualiza tu archivo App.jsx para usar la API de ExerciseDB y tu clave API de RapidAPI. 

16. Vamos a mejorar la presentación de los datos usando componentes de Material-UI para crear una interfaz más agradable.
Pasos para Mejorar la Presentación

    Crear un Componente para Mostrar los Ejercicios:
    Vamos a crear un componente llamado ExerciseCard para mostrar cada ejercicio de una manera más atractiva.

    Actualizar el Componente de Lista de Ejercicios:
    Vamos a actualizar ExerciseList para usar ExerciseCard y mostrar una lista de ejercicios de manera más organizada.

    Crear el Componente ExerciseCard

    Crea un nuevo archivo llamado ExerciseCard.jsx en la carpeta components.

17. Actualizar ExerciseList para Usar ExerciseCard

    Actualiza el archivo ExerciseList.jsx para mostrar los ejercicios usando el nuevo componente ExerciseCard.

Proyecto puede parecer complicado, pero podemos simplificarlo y estructurarlo mejor para que sea más manejable. Vamos a hacer lo siguiente:

    Permitir que el usuario elija el grupo muscular y obtenga los ejercicios para ese grupo en un día específico.
    Reorganizar el código en diferentes archivos para mejorar la estructura y la organización.

18. Actualizar el Formulario para Incluir el Grupo Muscular

    Actualiza TrainingForm.jsx para que permita al usuario seleccionar el grupo muscular que desea entrenar ese día.

19. Reorganizar el Código en Diferentes Archivos

    Vamos a crear componentes separados para mejorar la estructura del proyecto:

    Crear un Componente para la Barra de Navegación
    Crear un Componente para Mostrar los Ejercicios

    Crear un Componente NavBar

    Crea un nuevo archivo llamado NavBar.jsx en la carpeta components.

20. Actualizar App.jsx para Usar los Nuevos Componentes

21. Asegurarse de que App.jsx esté limpio y organizado

    Podemos mover el componente About a un archivo separado para mantener App.jsx limpio.
    1.1. Crear el Componente About

    Crea un nuevo archivo llamado About.jsx en la carpeta components.

22. Actualiza App.jsx para importar y usar el nuevo componente About.

23. Separar la Visualización de Ejercicios de la Página "Sobre Nosotros"

    Actualiza App.jsx para asegurarte de que los ejercicios solo se muestren en la página principal

24. Vamos a mejorar ExerciseCard.jsx para mostrar más detalles sobre cada ejercicio.
    
25. Agregar una Barra de Búsqueda

    Vamos a agregar una barra de búsqueda en la página principal para permitir a los usuarios buscar ejercicios específicos.

26. Actualiza App.jsx para incluir la barra de búsqueda.
    
27. Agregar Detalles de Ejercicios

    Vamos a actualizar el componente ExerciseCard para mostrar detalles adicionales sobre cada ejercicio.
    ExerciseCard.jsx

    Asegúrate de que el componente ExerciseCard esté mostrando los detalles adicionales como instrucciones, músculos trabajados y nivel de dificultad.

28. Guardar Entrenamientos Favoritos

    Vamos a permitir que los usuarios guarden sus entrenamientos favoritos para fácil acceso en el futuro. Para esto, vamos a usar el almacenamiento local para guardar el estado de los entrenamientos favoritos.
    ExerciseCard.jsx

    Actualiza el componente ExerciseCard para incluir una opción que permita guardar el ejercicio como favorito.

29. agregar más información para hacer la página "Sobre Nosotros" más completa y atractiva. Aquí tienes algunas ideas sobre lo que podrías incluir:

    Descripción de la Empresa/Proyecto:
        Explica la misión y visión de la empresa o del proyecto.
        Añade información sobre cómo surgió la idea.

    Equipo:
        Presenta a los miembros del equipo con sus roles y una breve biografía.
        Incluye fotos de los miembros del equipo si es posible.

    Características de la Aplicación:
        Describe las principales funcionalidades de la aplicación.
        Muestra cómo la aplicación puede ayudar a los usuarios a alcanzar sus objetivos.

    Testimonios:
        Incluye testimonios de usuarios satisfechos.
        Añade citas de expertos o influenciadores en el campo del fitness.

    Contacto:
        Proporciona información de contacto para que los usuarios puedan comunicarse.
        Incluye enlaces a redes sociales.

30. Vamos a crear el archivo team.js con los datos del equipo para que puedas usarlo en la página "Sobre Nosotros". Este archivo contendrá un array de objetos, cada uno representando a un miembro del equipo con su nombre, rol, biografía y foto.
    Paso 1: Crear el Archivo team.js

    Crea un archivo llamado team.js dentro de la carpeta src/data. Este archivo contendrá la información de los miembros del equipo.

31. Integrar la barra de búsqueda en la barra de navegación (NavBar) puede hacer que la interfaz de usuario sea más limpia y accesible. Vamos a mover la barra de búsqueda al componente NavBar. Vamos a actualizar el componente NavBar para incluir la barra de búsqueda.
    
32. Actualizar el Componente App

    Actualiza App.jsx para pasar la función handleSearch como prop a NavBar.

33. Filtrar Ejercicios por Nivel de Dificultad

    Vamos a agregar la opción de filtrar ejercicios por nivel de dificultad.
    TrainingForm.jsx

    Actualiza TrainingForm.jsx para incluir un filtro por nivel de dificultad.

34. Actualiza fetchExercises en App.jsx para incluir el filtro de dificultad.
    
35. Historial de Entrenamientos

    Vamos a llevar un registro del historial de entrenamientos de los usuarios para que puedan ver sus progresos.
    Historial de Entrenamientos

    Podemos usar el almacenamiento local para guardar el historial de entrenamientos.
    TrainingHistory.jsx

    Crea un nuevo componente TrainingHistory.jsx para mostrar el historial de entrenamientos.

36. Mostrar Entrenamientos Favoritos

    Añade una nueva ruta y un componente para mostrar los ejercicios favoritos guardados. Favorites.jsx

37. Actualización de App.jsx para añadir la rouuta
38. añadir favoritos al navbar

39. Asegurar Responsividad en el Diseño

    Material-UI proporciona componentes y utilidades que facilitan la creación de diseños responsivos. Aquí hay algunas recomendaciones y ajustes para hacer que tu aplicación sea más responsiva:
    AppBar y NavBar

    Asegúrate de que tu AppBar y NavBar sean responsivos. Puedes utilizar el componente Hidden de Material-UI para mostrar u ocultar elementos en función del tamaño de la pantalla.
    Asegurar Responsividad en el Contenido
    Asegúrate de que los componentes de contenido, como las tarjetas de ejercicios, utilicen el sistema de rejilla (Grid) de Material-UI para adaptarse al tamaño de la pantalla.
    ExerciseList.jsx.
    Asegurar Responsividad en el Formulario
    Asegúrate de que el formulario de entrenamiento se vea bien en pantallas pequeñas. TrainingForm.jsx.

40. Vamos a crear el archivo index.html en la carpeta public para tu aplicación. Este archivo servirá como la base HTML que React usará para montar tu aplicación. Asegurémonos de incluir la meta etiqueta para la responsividad.
public/index.html, Crea un archivo llamado index.html en la carpeta public.

41. Verificar los Valores de los Parámetros

    Asegúrate de que los valores que estás enviando para los grupos musculares sean correctos y estén soportados por la API. A veces, los nombres de los grupos musculares pueden diferir ligeramente.

    Aquí tienes una lista de grupos musculares comunes que puedes usar (asegúrate de que estos valores sean correctos según la documentación de la API de ExerciseDB).

42. Actualización del Formulario de Entrenamiento

    Vamos a actualizar el formulario para que los grupos musculares sean "upper legs" y "upper arms".

43. 
