# MAI_FRONTED_PROJECT

### Install
```
npm i
```
### Develop
```
npm run dev
```
### Build
```
npm run build
```
### Serve build
```
npm run start
```

# Wiki
https://github.com/NursultanAbdykalykov/front_mai_project_4sem/wiki

# FRONTEND ARCHITECTURE
```bash
src/
├── assets/                  # Статические ресурсы
│   └── (images|fonts|demo)  # Изображения, шрифты, демо-материалы
│
├── components/              # Компоненты (каждый в своей папке)
│   ├── Header/              # Шапка сайта
│   │   ├── Header.jsx       # Компонент
│   │   └── Header.module.css # Стили (CSS Modules)
│   │
│   ├── UploadArea/          # Блок загрузки фото
│   ├── Gallery/             # Галерея изображений  
│   ├── Features/            # Блок преимуществ
│   └── Footer/              # Подвал
│
├── styles/
│   └── reset.css            # Глобальный сброс стилей
│
└── App.js                   # Корневой компонент
```
