import { c as create_ssr_component, a as subscribe, b as add_attribute, e as each, v as validate_component, d as escape, m as missing_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const styles = "";
const main = "";
const Button_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "span.svelte-xnek0e{text-transform:uppercase;color:#fff\n}.option.svelte-xnek0e{display:flex;justify-content:center;align-items:center;height:auto;border:2px solid #C237DB;border-radius:10px;margin:10px auto;padding:15px 30px;background-color:black;color:white;text-align:center;text-transform:uppercase;font-weight:bold;cursor:pointer;transition:background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease}.option.svelte-xnek0e:hover,.option.active.svelte-xnek0e{background-color:#C237DB;transform:scale(1.05);border-color:#C237DB}@media(max-width: 768px){.option.svelte-xnek0e{padding:10px 20px;font-size:14px}}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active = false } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$9);
  return `<div class="${["option svelte-xnek0e", active ? "active" : ""].join(" ").trim()}"><span class="svelte-xnek0e">${slots.default ? slots.default({}) : ``}</span> </div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="footer" id="Footer" data-svelte-h="svelte-11zxxat"><div class="flex flex--col flex--jcenter flex--acenter"><a class="footer__logo" href="https://www.elmundo.es/" target="_blank"><img src="./logo_mundo.svg" alt="elmundo.es" title="elmundo.es"></a> <div class="footer__credits"><p><span class="footer__job">Tratamiento de datos y redacción</span> <span class="footer__author">Ana Sousa</span></p> <p><span class="footer__job">Desarrollo</span> <span class="footer__author">Juliana Suárez y Fernando Anido.</span></p> <p><span class="footer__job">Dirección de arte</span> <span class="footer__author">MARÍA GONZÁLEZ MANTECA Y
            JOSETXU L. PIÑEIRO.</span></p></div> <div class="footer__copyright"><address aria-label="Dirección y datos de contacto" class="direction">© ELMUNDO.es Avenida de San Luis 25 -
          28033 MADRID. Una web de Unidad Editorial</address> <nav class="footer__corp" aria-label="Menú corporativo"><ul class="flex flex--row flex--wrap"><li><a href="http://www.elmundo.es/privacidad/avisolegal.html">Términos y condiciones de
                uso</a><span>|</span></li> <li><a href="http://www.elmundo.es/privacidad/">Política de privacidad</a><span>|</span></li> <li><a href="http://cookies.unidadeditorial.es/">Política de cookies</a><span>|</span></li> <li><a href="http://www.ojd.es/">Certificado por OJD</a><span>|</span></li> <li><a href="http://www.elmundo.es/registro/contacto.html">Contacto</a><span>|</span></li> <li><a href="http://www.unidadeditorial.com/publicidad">Publicidad</a><span>|</span></li> <li><a href="https://www.uesyndication.com/">Venta de contenidos</a></li></ul></nav></div></div></div>`;
});
const userData = writable({
  presupuesto: 0,
  ciudadEscogida: void 0
});
const selectedComponent = writable("inicio");
const Inicio_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "#inputPresupuesto.svelte-1bnh6rv{padding:5px;border:2px solid #ccc;border-radius:5px;font-size:16px;max-width:100px;box-sizing:border-box}.presupuestoCont.svelte-1bnh6rv{padding:10px;margin-bottom:10px;border:1px solid #fff}.neon.svelte-1bnh6rv{display:flex;justify-content:center;margin-top:10px;align-items:center;width:100px;height:40px;border:1px solid #41FF09;border-radius:5px;margin-bottom:20px\n}h6.svelte-1bnh6rv{color:#fff;text-transform:uppercase;font-size:14px}.neon.svelte-1bnh6rv:hover{color:white;box-shadow:0 0 5px #41FF09,\n              0 0 15px #41FF09,\n              0 0 30px #41FF09,\n              0 0 50px #41FF09;-webkit-box-reflect:below 1px linear-gradient(transition, white) ;width:100px;height:40px;border-radius:5px;cursor:pointer}",
  map: null
};
const Inicio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$result.css.add(css$8);
  $$unsubscribe_userData();
  return `<main class="prueba"><div class="header__middleContainer"><div class="header__yourContent"><div class="header__cont"><h1 class="header__title" data-svelte-h="svelte-1xbvcba">&quot;Tu guía financiera para la vida universitaria en España&quot;</h1> <h2 class="header__subtitle pad--b20" data-svelte-h="svelte-17aeje5">Explora ciudades, ajusta gastos y vive al máximo tu etapa universitaria en España!&quot;</h2> <div class="presupuestoCont svelte-1bnh6rv"><label class="txt__presupuesto" for="inputPresupuesto" data-svelte-h="svelte-1ozfi3g">Ingresa tu presupuesto:</label> <input type="number" id="inputPresupuesto" class="svelte-1bnh6rv"${add_attribute("value", $userData.presupuesto, 0)}></div> <div class="neon svelte-1bnh6rv" data-svelte-h="svelte-1vxz18d"><h6 class="svelte-1bnh6rv">Empezar</h6></div></div> <div class="cont" data-svelte-h="svelte-71eenu"><div class="credits flex flex--col"><div class="credits__block flex flex--row "><div class="credits__names"><div class="credits__name"><a class="flex flex--row flex--gap4" href="https://twitter.com/cglucio" target="_blank">Ana Sousa</a></div> <span class="credits__line">|</span> <div class="credits__name"><a class="flex flex--row flex--gap4" href="https://twitter.com/Santisaiz" target="_blank">Juliana Suárez</a></div> <span class="credits__line">|</span> <div class="credits__name"><a class="flex flex--row flex--gap4" href="https://twitter.com/rebecayanke" target="_blank">Fernando Anido</a></div></div></div></div></div> <div class="cont cont--s pad--t20 pad--b20" data-svelte-h="svelte-rwdmc2"><div class="social flex flex-row flex--jcenter"><a href="https://www.facebook.com/sharer/sharer.php?u=https://lab.elmundo.es/prevencion-suicidio/index.html" target="_blank"><svg id="social__fa" version="1.1" width="22px" height="22px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M62.65,50h-8.73v29.41H42.15V50h-5.88V38.23h5.83v-5.32c0-4.81,2.29-12.33,12.38-12.33l9.09,0.04V30.7h-6.6 c0,0-2.6,0.53-2.6,2.82v4.71h9.35L62.65,50z"></path></svg></a> <a href="https://twitter.com/intent/tweet?url=https://lab.elmundo.es/prevencion-suicidio/index.html&text=Once vidas surge de la necesidad de romper con el silencio y visibilizar la realidad del suicidio, una muerte evitable&original_referer=https://lab.elmundo.es/prevencion-suicidio/index.html" target="_blank"><svg id="social__tw" version="1.1" width="22px" height="22px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="14.08 17.17 65 65" enable-background="new 14.08 17.17 65 65" xml:space="preserve"><path d="M70.06,37.86c0.02,0.51,0.03,1.02,0.03,1.54c0,15.7-12.14,33.8-34.33,33.8c-6.81,0-13.16-1.96-18.5-5.34 c0.95,0.11,1.9,0.17,2.88,0.17c5.66,0,10.85-1.9,14.99-5.09c-5.28-0.09-9.73-3.53-11.27-8.25c0.73,0.14,1.49,0.21,2.27,0.21 c1.1,0,2.17-0.15,3.18-0.42c-5.52-1.1-9.68-5.9-9.68-11.65v-0.15c1.63,0.89,3.49,1.42,5.47,1.48c-3.23-2.13-5.37-5.77-5.37-9.88 c0-2.18,0.6-4.22,1.64-5.97c5.95,7.19,14.84,11.91,24.87,12.41c-0.2-0.87-0.31-1.78-0.31-2.71c0-6.56,5.4-11.88,12.07-11.88 c3.47,0,6.6,1.44,8.8,3.75c2.75-0.53,5.34-1.52,7.67-2.88c-0.9,2.77-2.81,5.1-5.31,6.57c2.44-0.29,4.76-0.92,6.93-1.87 C74.47,34.1,72.42,36.19,70.06,37.86L70.06,37.86z"></path></svg></a> <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://lab.elmundo.es/prevencion-suicidio/index.html&title=Once vidas surge de la necesidad de romper con el silencio y visibilizar la realidad del suicidio, una muerte evitable&summary=&source=" target="_blank"><svg id="social__li" version="1.1" width="22px" height="22px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M34.31,78.41H20.59V39.2h13.73L34.31,78.41L34.31,78.41z M27.45,33.31c-3.79,0-6.87-3.08-6.87-6.86 c0-3.79,3.07-6.86,6.87-6.86c3.78,0,6.86,3.07,6.86,6.86C34.31,30.24,31.24,33.31,27.45,33.31z M79.41,78.41H67.65V59.3 c0-4.56-0.51-10.42-6.75-10.42c-6.34,0-7.31,4.97-7.31,10.09v19.44H42.16V39.2h10.93v5.29h0.17c1.63-3.09,5.61-5.29,11.54-5.29 c12.33,0,14.62,7.08,14.62,17.66L79.41,78.41L79.41,78.41z"></path></svg></a></div></div></div></div> </main>`;
});
const PickCity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userData;
  $$unsubscribe_userData = subscribe(userData, (value) => value);
  const ciudades = ["Madrid", "Barcelona", "Granada", "Valencia", "ACoruña", "Salamanca"];
  $$unsubscribe_userData();
  return `<div class="cont cont--m pad--t80"><div class="txt" data-svelte-h="svelte-1lqfcjm"><p>Has ahorrado para llegar a este momento, sea trabajando en el verano o guardando el dinero que te ofrecían en tu cumple. En este interactivo, te proponemos elegir entre las mejores ciudades para estudiantes Madrid, Barcelona y Valencia, según el ranking QS Best Student Cities 2023. Desde El Mundo, se agregaron los sitios históricos: Granada, Salamanca y Pamplona.</p></div> <div class="buttonCont"> ${each(ciudades, (ciudad) => {
    return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(ciudad)}`;
      }
    })}`;
  })}</div> </div>`;
});
const valores = {
  Madrid: {
    title: "Este es el texto para Madrid",
    subtitle: "Este es el texto para Madrid transporte",
    Vivienda: [
      { title: "Residencia", valor: 400 },
      {
        title: "Alquiler",
        subopciones: [
          { title: "Habitación compartida con 6 personas en el centro", valor: 800 },
          { title: "Habitación compartida con 3 personas a los alrededores", valor: 300 },
          { title: "Habitación compartida con 1 persona a las afueras", valor: 200 },
          { title: "Estudio", valor: 500 }
        ]
      }
    ],
    Transporte: [
      { title: "Transporte publico 8€", valor: 8 },
      { title: "Coche (valor gasolina: 10€)", valor: 8 },
      { title: "Bicicleta", valor: 0 },
      { title: "Caminando", valor: 0 }
    ]
  },
  Barcelona: {
    title: "Este es el texto para Barcelona",
    Vivienda: [
      { title: "Residencia", valor: 500 },
      {
        title: "Alquiler",
        subopciones: [
          { title: "Habitación compartida con 4 personas en el centro", valor: 400 },
          { title: "Habitación compartida con 3 personas a los alrededores", valor: 300 },
          { title: "Habitación compartida con 1 persona a las afueras", valor: 200 },
          { title: "Estudio", valor: 500 }
        ]
      }
    ],
    Transporte: [
      { title: "Transporte publico ", valor: 8 },
      { title: "Coche ", valor: 8 },
      { title: "Bicicleta", valor: 8 }
    ]
  },
  Granada: {
    title: "Este es el texto para Granada",
    Vivienda: [
      { title: "Residencia", valor: 500 },
      {
        title: "Alquiler",
        subopciones: [
          { title: "Habitación compartida con 4 personas en el centro 400€", valor: 400 },
          { title: "Habitación compartida con 3 personas a los alrededores 200€", valor: 300 },
          { title: "Habitación compartida con 1 persona a las afueras 100€", valor: 200 },
          { title: "Estudio", valor: 500 }
        ]
      }
    ],
    Transporte: [
      { title: "Transporte publico ", valor: 8 },
      { title: "Coche ", valor: 8 },
      { title: "Bicicleta", valor: 8 }
    ]
  },
  Salamanca: {
    title: "Este es el texto para Salamanca",
    Vivienda: [
      { title: "Residencia", valor: 500 },
      {
        title: "Alquiler",
        subopciones: [
          { title: "Habitación compartida con 4 personas en el centro 800€", valor: 400 },
          { title: "Habitación compartida con 3 personas a los alrededores 500€", valor: 300 },
          { title: "Habitación compartida con 1 persona a las afueras 200€", valor: 200 },
          { title: "Estudio", valor: 500 }
        ]
      }
    ],
    Transporte: [
      { title: "Transporte publico ", valor: 8 },
      { title: "Coche ", valor: 8 },
      { title: "Bicicleta", valor: 8 }
    ]
  },
  Valencia: {
    title: "Este es el texto para Pamplona",
    Vivienda: [
      { title: "Residencia", valor: 500 },
      {
        title: "Alquiler",
        subopciones: [
          { title: "Habitación compartida con 4 personas en el centro", valor: 400 },
          { title: "Habitación compartida con 3 personas a los alrededores", valor: 300 },
          { title: "Habitación compartida con 1 persona a las afueras", valor: 200 },
          { title: "Estudio", valor: 500 }
        ]
      }
    ],
    Transporte: [
      { title: "Transporte publico ", valor: 8 },
      { title: "Coche ", valor: 8 },
      { title: "Bicicleta", valor: 8 }
    ]
  },
  ACoruña: {
    title: "Este es el texto para Pamplona",
    Vivienda: [
      { title: "Residencia", valor: 500 },
      {
        title: "Alquiler",
        subopciones: [
          { title: "Habitación compartida con 4 personas en el centro", valor: 400 },
          { title: "Habitación compartida con 3 personas a los alrededores", valor: 300 },
          { title: "Habitación compartida con 1 persona a las afueras", valor: 200 },
          { title: "Estudio", valor: 500 }
        ]
      }
    ],
    Transporte: [
      { title: "Transporte publico ", valor: 8 },
      { title: "Coche ", valor: 8 },
      { title: "Bicicleta", valor: 8 }
    ]
  },
  Objects: {
    objects: [
      { title: "Conformarte", valor: 0 },
      {
        title: "Ir de compras",
        subopciones: [
          { title: "Toalla 10€", valor: 10, seleccionada: false },
          { title: "Cafetera 50€", valor: 50, seleccionada: false },
          { title: "Sabanas 20€", valor: 20, seleccionada: false },
          { title: "Cubiertos 10€", valor: 10, seleccionada: false }
        ]
      }
    ]
  },
  Food: {
    Supermercado: [
      {
        title: "Ir al supermercado",
        subopciones: [
          { title: "Leche (6) 6.39€", valor: 6.39, seleccionada: false },
          { title: "Huevos 1.29€", valor: 1.29, seleccionada: false },
          { title: "Aceite de oliva 8.12€", valor: 8.12, seleccionada: false },
          { title: "Pan de Molde con corteza 1.33", valor: 1.33, seleccionada: false },
          { title: "Espaguetis 0.77€", valor: 0.77, seleccionada: false },
          { title: "Atún claro en aceite de oliva 4.1€", valor: 4.1, seleccionada: false },
          { title: "Garbanzos 0.77", valor: 0.77, seleccionada: false },
          { title: "Preparado de carne picada de cerdo 500g 3,02€", valor: 3.02, seleccionada: false },
          { title: "Tofu 2.35€", valor: 2.35, seleccionada: false },
          { title: "Canelones con carne congelados 2.22€", valor: 2.22, seleccionada: false },
          { title: "Cookies con pepitas de chocolate 2.09€", valor: 2.09, seleccionada: false },
          { title: "Manzanas 2.15€", valor: 2.15, seleccionada: false },
          { title: "Zanahoria 1.09€", valor: 1.09, seleccionada: false },
          { title: "Pechuga de pollo 4.09€", valor: 4.09, seleccionada: false }
        ]
      },
      {
        title: "No iré al supermercado",
        subopciones: [
          { title: "Comida de casa de tus padres 10€", valor: 10, seleccionada: false },
          { title: "Pediré comida semanalmente 50€", valor: 50, seleccionada: false }
        ]
      }
    ]
  }
};
const Cities_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".svelte-4j2cxi{color:white}.buttonContainer.svelte-4j2cxi{width:100%}.subopciones.svelte-4j2cxi{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%}.bottonBack.svelte-4j2cxi{width:5px;height:5px;position:absolute;right:8rem;bottom:4.5rem;color:white;font-weight:600;cursor:pointer}",
  map: null
};
const Cities = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ciudadEscogida;
  let Vivienda;
  let $userData, $$unsubscribe_userData;
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  let opcionEscogida = null;
  $$result.css.add(css$7);
  ciudadEscogida = $userData.ciudadEscogida;
  Vivienda = valores[ciudadEscogida].Vivienda;
  $$unsubscribe_userData();
  return `<div class="cont cont--m pad--t80 svelte-4j2cxi"><h2 class="svelte-4j2cxi">${escape(valores[ciudadEscogida].title)}</h2> <div class="buttonCont svelte-4j2cxi">${each(Vivienda, (Vivienda2) => {
    return `${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "option",
        active: opcionEscogida === Vivienda2
      },
      {},
      {
        default: () => {
          return `<h6 class="svelte-4j2cxi">${escape(Vivienda2.title)}</h6> `;
        }
      }
    )}`;
  })}</div> ${``} <div class="bottonBack svelte-4j2cxi" data-svelte-h="svelte-fhxhmy"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-left svelte-4j2cxi" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" class="svelte-4j2cxi"></path><path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" class="svelte-4j2cxi"></path><path d="M8 12l4 4" class="svelte-4j2cxi"></path><path d="M8 12h8" class="svelte-4j2cxi"></path><path d="M12 8l-4 4" class="svelte-4j2cxi"></path></svg></div> </div>`;
});
const Objects_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".bottonNext.svelte-1if3wnd{width:5px;height:5px;position:absolute;right:8rem;bottom:4.5rem;cursor:pointer}.svelte-1if3wnd{color:white}.selected-icon.svelte-1if3wnd{margin-left:5px;color:rgb(231,18,196 )}",
  map: null
};
const Objects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let objects;
  let $$unsubscribe_userData;
  $$unsubscribe_userData = subscribe(userData, (value) => value);
  let opcionEscogida = null;
  $$result.css.add(css$6);
  objects = valores.Objects.objects;
  $$unsubscribe_userData();
  return `<div class="cont cont--m pad--t80 svelte-1if3wnd" data-svelte-h="svelte-1vegwin"><p class="svelte-1if3wnd">Necesitas comprar cosas para el hogar para vivir cómodo o prefieresconformarte con los muebles que ya hay</p></div> <div class="cont cont--m pad--t20 svelte-1if3wnd"><div class="buttonCont svelte-1if3wnd">${each(objects, (objects2) => {
    return `${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "option",
        active: opcionEscogida === objects2
      },
      {},
      {
        default: () => {
          return `<h6 class="svelte-1if3wnd">${escape(objects2.title)}</h6> `;
        }
      }
    )}`;
  })}</div> ${``} </div>`;
});
const Food_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".bottonNext.svelte-a0yyzi{width:5px;height:5px;position:absolute;right:8rem;bottom:4.5rem;cursor:pointer}.svelte-a0yyzi{color:white}.selected-icon.svelte-a0yyzi{margin-left:5px;color:rgb(231, 18, 196)}.subopciones.ir-al-supermercado.svelte-a0yyzi{background-color:white;height:100%;border:1px solid #c237db;padding:10px;margin-bottom:20px}.buttonList-ir.svelte-a0yyzi,.list.svelte-a0yyzi{color:black;cursor:pointer;text-transform:uppercase;font-size:14px;font-weight:600}.metodología.svelte-a0yyzi{margin-top:20px;color:black;font-size:12px;font-weight:500}.text.svelte-a0yyzi{padding:20px 0;color:black;font-size:14px;font-weight:500}",
  map: null
};
const Food = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let Supermercado;
  let $$unsubscribe_userData;
  $$unsubscribe_userData = subscribe(userData, (value) => value);
  let opcionEscogida = null;
  $$result.css.add(css$5);
  Supermercado = valores.Food.Supermercado;
  $$unsubscribe_userData();
  return `<div class="cont cont--m pad--t80 svelte-a0yyzi" data-svelte-h="svelte-1iz956b"><p class="svelte-a0yyzi">Comida</p></div> <div class="cont cont--m pad--t20 svelte-a0yyzi"><div class="buttonCont svelte-a0yyzi">${each(Supermercado, (Supermercado2) => {
    return `${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "option",
        active: opcionEscogida === Supermercado2
      },
      {},
      {
        default: () => {
          return `<h6 class="svelte-a0yyzi">${escape(Supermercado2.title)}</h6> `;
        }
      }
    )}`;
  })}</div> ${``} ${``} </div>`;
});
const Ocio_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".buttonContainer.svelte-r6t65j{display:flex;justify-content:space-between;align-items:center;max-width:600px;margin:0 auto}.buttonOcio.svelte-r6t65j{display:flex;justify-content:center;align-items:center;height:auto;border:2px solid #c237db;border-radius:10px;margin:80px auto;padding:15px 30px;background-color:black;color:white;text-align:center;text-transform:uppercase;font-weight:bold;cursor:pointer;transition:background-color 0.3s ease, transform 0.3s ease,\n            border-color 0.3s ease}.buttonOcio.svelte-r6t65j:hover{background-color:#c237db;transform:scale(1.05);border-color:#c237db}@media(max-width: 768px){.buttonContainer.svelte-r6t65j{flex-direction:column;align-items:stretch}.buttonOcio.svelte-r6t65j{margin:10px auto;padding:10px 20px;font-size:14px}}",
  map: null
};
const Ocio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userData;
  $$unsubscribe_userData = subscribe(userData, (value) => value);
  $$result.css.add(css$4);
  $$unsubscribe_userData();
  return `<div class="cont cont--m pad--t80" data-svelte-h="svelte-15ghbwz"><div class="txt"><p>Has tenido un día largo, muchas cosas en qué pensar. Mañana es tu
            primer día de clases. Conocerás gente de toda España y también de
            otras partes del mundo. Descansa.</p> <p>Conociste gente muy maja. Como estais todos solos en la nueva
            ciudad, vais a quedar con tus compañeros a cenar. Habéis decidido ir
            a tepeo ¿Aceptas la invitación?</p></div></div> <div class="buttonContainer svelte-r6t65j"><button class="buttonOcio svelte-r6t65j" data-svelte-h="svelte-1va21kg">Quedarse en casa</button> <button class="buttonOcio svelte-r6t65j" data-svelte-h="svelte-1o4onqg">Salir con tus compañeros 25€</button> </div>`;
});
const Transport_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".txt.svelte-4kure2{color:white}.buttonCont.svelte-4kure2{display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:400px;margin:0 auto}.buttonOcio.svelte-4kure2{display:flex;justify-content:center;align-items:center;width:100%;height:auto;border:2px solid #c237db;border-radius:10px;margin:10px auto;padding:10px 20px;background-color:black;color:white;text-align:center;text-transform:uppercase;font-weight:bold;cursor:pointer;transition:background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease}.buttonOcio.svelte-4kure2:hover{background-color:#c237db;transform:scale(1.05);border-color:#c237db}@media(max-width: 768px){.buttonCont.svelte-4kure2{align-items:center}}",
  map: null
};
const Transport = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ciudadEscogida;
  let transporte;
  let $userData, $$unsubscribe_userData;
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$result.css.add(css$3);
  ciudadEscogida = $userData.ciudadEscogida;
  transporte = valores[ciudadEscogida]?.Transporte;
  $$unsubscribe_userData();
  return `<div class="cont cont--m pad--t80"><p class="txt pad--b40 svelte-4kure2">${escape(valores[ciudadEscogida].subtitle)}</p><p data-svelte-h="svelte-1gn4hux"></p><div class="buttonCont svelte-4kure2">${transporte.length ? `${each(transporte, (item) => {
    return `<button class="buttonOcio svelte-4kure2"><h6>${escape(item.title)}</h6> </button>`;
  })}` : ``}</div> </div>`;
});
const Ocio2_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".txt.svelte-w8558q{color:white}.buttonCont.svelte-w8558q{display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:400px;margin:0 auto}.buttonOcio.svelte-w8558q{display:flex;justify-content:center;align-items:center;width:100%;height:auto;border:2px solid #c237db;border-radius:10px;margin:10px auto;padding:10px 20px;background-color:black;color:white;text-align:center;text-transform:uppercase;font-weight:bold;cursor:pointer;transition:background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease}.buttonOcio.svelte-w8558q:hover{background-color:#c237db;transform:scale(1.05);border-color:#c237db}@media(max-width: 768px){.buttonCont.svelte-w8558q{align-items:center}}",
  map: null
};
const Ocio2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userData;
  $$unsubscribe_userData = subscribe(userData, (value) => value);
  $$result.css.add(css$2);
  $$unsubscribe_userData();
  return `<div class="cont cont--m pad--t80 pad--b80" data-svelte-h="svelte-vltjjo"><div class="txt svelte-w8558q"><p>Luego de una semanas, tienes un tiempo libre para ti</p></div></div> <div class="buttonCont svelte-w8558q"><button class="buttonOcio svelte-w8558q" data-svelte-h="svelte-1kcrbha">Ir al gimnasio</button> <button class="buttonOcio svelte-w8558q" data-svelte-h="svelte-cch0ih">Aprender un idioma</button> <button class="buttonOcio svelte-w8558q" data-svelte-h="svelte-sieez8">Aprender a tocar un instrumento</button> <button class="buttonOcio svelte-w8558q" data-svelte-h="svelte-1rny4ew">Salir a caminar, leer 0€</button> </div>`;
});
const Work_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".txt.svelte-9rlfwn{color:white}.bottonNext.svelte-9rlfwn{width:5px;height:5px;position:absolute;right:8rem;bottom:4.5rem;cursor:pointer}.buttonCont.svelte-9rlfwn{display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:400px;margin:0 auto}.buttonOcio.svelte-9rlfwn{display:flex;justify-content:center;align-items:center;width:100%;height:auto;border:2px solid #c237db;border-radius:10px;margin:10px auto;padding:10px 20px;background-color:black;color:white;text-align:center;text-transform:uppercase;font-weight:bold;cursor:pointer;transition:background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease}.buttonOcio.svelte-9rlfwn:hover{background-color:#c237db;transform:scale(1.05);border-color:#c237db}.tarjeta.svelte-9rlfwn{background-color:#c237db;color:white;border-radius:10px;padding:10px;margin-top:20px;text-align:center}@media(max-width: 768px){.buttonCont.svelte-9rlfwn{align-items:center}}",
  map: null
};
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ciudadEscogida;
  let $userData, $$unsubscribe_userData;
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$result.css.add(css$1);
  ciudadEscogida = $userData.ciudadEscogida;
  $$unsubscribe_userData();
  return `<div class="cont cont--m pad--t80"><div class="txt svelte-9rlfwn"><p>${$userData.presupuesto < 150 ? `Oh te queda muy poco dinero para sobrevivir en ${escape(ciudadEscogida)}! Te recomendamos que busques un trabajo.` : `¡Tu presupuesto es suficiente para sobrevivir en ${escape(ciudadEscogida)}! ¿Quieres buscar un trabajo para tener un dinerillo extra?`}</p></div> <div class="buttonCont pad--t80 svelte-9rlfwn">${` <button class="buttonOcio svelte-9rlfwn" data-svelte-h="svelte-undh03">Prefiero tener mis fines de semana libre</button> <button class="buttonOcio svelte-9rlfwn" data-svelte-h="svelte-cq7xd8">Buscar un trabajo</button> <button class="buttonOcio svelte-9rlfwn" data-svelte-h="svelte-6mnrjm">Le pediré dinero a mis padres</button>`}</div>  ${``} </div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-uzclmt.svelte-uzclmt{display:grid}main.svelte-uzclmt>.svelte-uzclmt{grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2}.presupuesto.svelte-uzclmt.svelte-uzclmt{position:absolute;right:1rem;top:0.5rem;color:white}.bottonHome.svelte-uzclmt.svelte-uzclmt{width:5px;height:5px;position:absolute;right:4rem;bottom:4.5rem;color:white;cursor:pointer}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  const optionComponents = {
    inicio: Inicio,
    pickCity: PickCity,
    cities: Cities,
    objects: Objects,
    food: Food,
    ocio: Ocio,
    transport: Transport,
    ocio2: Ocio2,
    work: Work
  };
  $$result.css.add(css);
  $$unsubscribe_userData();
  $$unsubscribe_selectedComponent();
  return `<a class="header__logo flex flex--row flex--acenter" target="_blank" href="https://www.elmundo.es/" title="elmundo.es" data-svelte-h="svelte-twumkm"><img src="./bola_mundo.svg" alt="El Mundo"></a> <div class="presupuesto svelte-uzclmt"><p>Presupuesto disponible: ${escape($userData.presupuesto)}€</p></div>  ${$selectedComponent !== "inicio" ? `<div class="bottonHome svelte-uzclmt" data-svelte-h="svelte-1ccb5uu"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l-2 0l9 -9l9 9l-2 0"></path><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path></svg></div>` : ``} <main class="svelte-uzclmt">${optionComponents[$selectedComponent] ? ` <div class="svelte-uzclmt"> ${validate_component(optionComponents[$selectedComponent] || missing_component, "svelte:component").$$render($$result, {}, {}, {})} </div>` : `<p class="svelte-uzclmt" data-svelte-h="svelte-3hdnxu">Opción no válida</p>`}</main> ${$selectedComponent === "inicio" ? `${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}` : ``}`;
});
export {
  Layout as default
};
