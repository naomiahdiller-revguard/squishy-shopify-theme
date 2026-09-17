document.documentElement.classList.remove('no-js');
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('.section-soft')?.setAttribute('id','story');
  const reveals=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});reveals.forEach(el=>io.observe(el));}else{reveals.forEach(el=>el.classList.add('visible'));}
  document.querySelectorAll('[data-scroll-buy]').forEach(btn=>btn.addEventListener('click',()=>document.querySelector('#ocean-product-form')?.scrollIntoView({behavior:'smooth',block:'center'})));
  const main=document.querySelector('[data-main-product-image]');
  document.querySelectorAll('[data-gallery-src]').forEach(btn=>btn.addEventListener('click',()=>{if(main)main.src=btn.dataset.gallerySrc;document.querySelectorAll('[data-gallery-src]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');}));
  const qty=document.querySelector('[data-qty]');
  document.querySelector('[data-qty-minus]')?.addEventListener('click',()=>{if(qty)qty.value=Math.max(1,(parseInt(qty.value)||1)-1)});
  document.querySelector('[data-qty-plus]')?.addEventListener('click',()=>{if(qty)qty.value=(parseInt(qty.value)||1)+1});
});
