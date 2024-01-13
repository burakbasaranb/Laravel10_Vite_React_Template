(1) laravel install 
	composer create-project laravel/laravel Laravel10_Vite_React_Template --prefer-dist
 
(2) start laravel
	php artisan serve
 
(3) Install standart Node modules
	npm i
 
(3.1) install other Dependencies 
	npm install --save-dev @vitejs/plugin-react
	npm install --save-dev react react-dom

(3.2) Test npm-watch
	npm run dev
 
(4) Setup React to Laravel
 
  Open vite.config.js and add react() to plugin
  
  Path
  /vite.config.js
  
  Code:
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
	
(5) Publish React page
(5.1) Create index.jsx 
	 Path:
	 /resources/js/index.jsx
 
	Code:
 
	import React, { Component } from 'react';
	import { createRoot } from 'react-dom/client';

	class Index extends Component 
	{
		render(){
			return (
				<div>
					<h1>Hello React World</h1>
				</div>
			)
		}
	}

	const container = document.getElementById('index');
	const root = createRoot(container); // createRoot(container!) if you use TypeScript
	root.render(<Index/>);
	
(5.2) Setup app.jsx
  Path:
	 /resources/js/app.jsx
	 
  Code
  import './index';
  
(5.3) Create index blade
	Path:
	/resources/views/index.blade.php
	
	Code:
	<!DOCTYPE html>
	<html>
	<head>
	<title>Laravel 10 & React JS </title>
	<link type="text/html" href="{{ asset('css/app.css') }}"/>
	</head>
	<body>
	<div id="index"></div>
	@viteReactRefresh
	@vite(['resources/js/app.jsx'])
	</body>
	</html>
	
(6) Redirect all trafic to index.blade.php 
	Path:
	/resources/routes/web.php
	
	Code:
	Route::view('/{path?}','index')->where('path','.+');

(7) Restart
	npm run dev