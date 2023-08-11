import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const styles = "";
const main = "";
const Header_svelte_svelte_type_style_lang = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="footer" id="Footer" data-svelte-h="svelte-1hf7ru5"><div class="flex flex--col flex--jcenter flex--acenter"><a class="footer__logo" href="https://www.elmundo.es/" target="_blank"><img src="./src/lib/images/general/bola_mundo.svg" alt="elmundo.es" title="elmundo.es"></a> <div class="footer__credits"><p><span class="footer__job">Coordinación del proyecto</span> <span class="footer__author">YAIZA PERERA.</span></p> <p><span class="footer__job">Redacción</span> <span class="footer__author">Santiago Saiz, Rebeca Yanke,
            Yaiza
            Perera y Rafael J. Álvarez.</span></p> <p><span class="footer__job">Dirección de arte</span> <span class="footer__author">MARÍA GONZÁLEZ MANTECA Y
            JOSETXU L. PIÑEIRO.</span></p> <p><span class="footer__job">Desarrollo</span> <span class="footer__author">Juliana Suárez.</span></p></div> <div class="footer__copyright"><address aria-label="Dirección y datos de contacto" class="direction">© ELMUNDO.es Avenida de San Luis 25 -
          28033 MADRID. Una web de Unidad Editorial</address> <nav class="footer__corp" aria-label="Menú corporativo"><ul class="flex flex--row flex--wrap"><li><a href="http://www.elmundo.es/privacidad/avisolegal.html">Términos y condiciones de
                uso</a><span>|</span></li> <li><a href="http://www.elmundo.es/privacidad/">Política de privacidad</a><span>|</span></li> <li><a href="http://cookies.unidadeditorial.es/">Política de cookies</a><span>|</span></li> <li><a href="http://www.ojd.es/">Certificado por OJD</a><span>|</span></li> <li><a href="http://www.elmundo.es/registro/contacto.html">Contacto</a><span>|</span></li> <li><a href="http://www.unidadeditorial.com/publicidad">Publicidad</a><span>|</span></li> <li><a href="https://www.uesyndication.com/">Venta de contenidos</a></li></ul></nav></div></div></div>`;
});
const Cards_svelte_svelte_type_style_lang = "";
const css = {
  code: "card.svelte-n44eeg .example.svelte-n44eeg{color:red}",
  map: null
};
const Cards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="card__contain flex flex--row" data-svelte-h="svelte-hfqjg8"><a class="card__link" href="https://www.elmundo.es/ciencia-y-salud/salud/2023/04/11/642ea67a21efa0c5498b4579.html"><div class="card__item card__item--delay100"><div class="card__date">11 de abril de 2023</div> <picture class="card__picture"><source media="(max-width: 500px)" srcset="https://lanoticia.com/wp-content/uploads/2020/08/gato_png_crop1567201738546-jpg_673822677-1.jpg"> <img class="card__img2" loading="lazy" src="https://lanoticia.com/wp-content/uploads/2020/08/gato_png_crop1567201738546-jpg_673822677-1.jpg" alt=""></picture> <div class="card__text"><div class="card__date2">11 de abril de 2023</div> <p class="card__title"><b>Titúlo</b></p> <p>papapapppa</p> <p class="card__credits flex flex--acenter"><span><img src="https://lanoticia.com/wp-content/uploads/2020/08/gato_png_crop1567201738546-jpg_673822677-1.jpg" alt="El Mundo"></span> YAIZA PERERA | Madrid</p></div></div> </a> <card class="svelte-n44eeg"><div class="example svelte-n44eeg">Hola</div></card> </div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `   ${slots.default ? slots.default({}) : ``} ${validate_component(Cards, "Cards").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} `;
});
export {
  Layout as default
};
