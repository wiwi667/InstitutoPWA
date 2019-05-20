self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '',
       'index.html',
	   'diagnostico.html',
	   'dr_ahtty.html',
	   'dr_moyano.html',
	   'faq.html',
	   'home.html',
	   'investigacion.html',
	   'procedimientos.html',
	   'tratamientos.html',	   
       'index.js',
       'style.css',
       'img/bg-img/athy-1.png',
       'img/bg-img/cta1.jpg',
       'img/bg-img/doctor.png',
       'img/bg-img/doctores.png',	   
	   'img/bg-img/drathy.jpg',
	   'img/bg-img/drathy_rd.png',
	   'img/bg-img/drmoyano.jpg',
	   'img/bg-img/drmoyano_rd.png',
	   'img/bg-img/hero1_1.jpg',
	   'img/bg-img/hero1_2.jpg',
	   'img/bg-img/hero2.jpg',
	   'img/bg-img/hero3.jpg',
	   'img/bg-img/hero7.jpg',
	   'img/bg-img/hero9.jpg',	   
	   'img/bg-img/medical2.png',
	   'img/bg-img/noticia_1.jpg',
	   'img/bg-img/noticia_2.gif',
	   'img/bg-img/noticia_3.jpg',
	   'img/bg-img/service.jpg',
	   
	   'img/tratamientos/cervical.jpg',
	   'img/tratamientos/ciatica.jpeg',
	   'img/tratamientos/enfdegenerativade-disco.jpg',
	   'img/tratamientos/ESCOLIOSIS.JPG',
	   'img/tratamientos/espondilolistesis.jpg',
	   'img/tratamientos/espondilolistesis_2.jpg',
	   'img/tratamientos/estenosis_1.jpg',
	   'img/tratamientos/estenosis_cervical_2.jpg',
	   'img/tratamientos/Estenosis-Cervical.JPG',
	   'img/tratamientos/HERNIA DE DISCO.JPG',
	   'img/tratamientos/hernia_discal_cervical.gif',
	   'img/tratamientos/neuro.jpg',
	   'img/tratamientos/PHOTO-2019-04-05-11-55-27.jpg',
	   'img/tratamientos/PHOTO-2019-04-05-11-55-28.jpg',
	   'img/tratamientos/thoracic_compression_fx_intro011.jpg',
	   'img/tratamientos/Tratamiento de Infeccion en Columna 1.jpg',
	   'img/tratamientos/Tratamiento de Infecciones de Columna.jpg',
	   'img/tratamientos/Tratamiento Enferdedad Degenerativa de Disco.JPG',
	   'img/tratamientos/Tratamiento Enfermedad Degenerativa de Disco 1.JPG',
	   'img/tratamientos/Tratamiento Espondiloliestesis.jpg',
	   'img/tratamientos/Tratamiento Espondilolistesis 1.jpg',
	   'img/tratamientos/Tratamiento Estenosis Cervical.JPG',
	   'img/tratamientos/Tratamiento Fractura por Compresion.JPG',
	   'img/tratamientos/Tratamiento HErnia Discal con Ciatia 1.JPG',
	   'img/tratamientos/Tratamiento Hernia Discal con Ciatica.JPG',
	   'img/tratamientos/Tratamiento Tumores 1.jpg',
	   'img/tratamientos/Tratamiento Tumores.jpg',
	   'img/tratamientos/tratamiento_escoliosis.jpg',
	   'img/tratamientos/tratamiento_estenosis_1.jpg',
	   'img/tratamientos/TratamientoCifosis.jpg',	   
	   'img/tratamientos/tratamiento-escoliosis.jpg',
	   'img/tratamientos/tumores.jpg',
	   'img/tratamientos/xifosis.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
