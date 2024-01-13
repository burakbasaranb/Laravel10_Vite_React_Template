<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# Laravel 10, Vite, React Template

This template provides a structured setup for building Laravel applications with Vite as the frontend tool and React as the JavaScript library.

## Installation

### 1. Laravel Install

```bash
composer create-project laravel/laravel Laravel10_Vite_React_Template --prefer-dist
```

### 2. Start Laravel

```bash
php artisan serve
```

### 3. Install Dependencies

```bash
npm install
```

### 3.1. Install Additional Dependencies

```bash
npm install --save-dev @vitejs/plugin-react
npm install --save-dev react react-dom
```

### 3.2. Test npm run

```bash
npm run dev
```

### 4. Setup React to Laravel

Open vite.config.js and add react() to the plugin.

`Path:` /vite.config.js

```javascript
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.jsx'],
      refresh: true,
    }),
  ],
});
```

## 5. Publish React Page

### 5.1. Create index.jsx

`Path:` /resources/js/index.jsx

```jsx
import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

class Index extends Component {
  render() {
    return (
      <div>
        <h1>Hello React World</h1>
      </div>
    );
  }
}

const container = document.getElementById('index');
const root = createRoot(container);
root.render(<Index />);
```

### 5.2. Setup app.jsx

`Path:` /resources/js/app.jsx

```jsx
import './bootstrap.js';

import './index.jsx';
```

### 5.3. Create index.blade.php

`Path:` /resources/views/index.blade.php

```html
<!DOCTYPE html>
<html>

<head>
  <title>Laravel 10 & React JS </title>
  <link type="text/html" href="{{ asset('css/app.css') }}" />
</head>

<body>
  <div id="index"></div>
  @viteReactRefresh
  @vite(['resources/js/app.jsx'])
</body>

</html>
```

### 6. Redirect All Traffic to index.blade.php

`Path:` /resources/routes/web.php

```php
Route::view('/{path?}','index')->where('path','.+');
```

### 7. Restart

`Path:` /resources/routes/web.php

```bash
npm run dev
```

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 2000 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
