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