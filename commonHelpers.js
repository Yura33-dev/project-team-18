(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const g of s.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const m=document.querySelectorAll(".darkmode > button");m.forEach(e=>e.addEventListener("click",()=>document.body.classList.toggle("dark-mode")));let j=document.getElementById("openbutton");j.onclick=function(){document.querySelector("#mobile-menu").classList.add("is-open")};let d=document.querySelectorAll("#closebutton, #sidelogo, #ab_me, #prj, #cont");d.forEach(e=>{e.onclick=function(){document.querySelector("#mobile-menu").classList.remove("is-open")}});const a=[{projectName:"Wallet webservice",projectLink:"https://github.com/Yura33-dev/project-team-18",description:"Wallet webservice picture",previewImg:"./img/projects/wallet/1280.jpg",setImages320:"./img/projects/wallet/320.jpg 1x, ./img/projects/wallet/320@2x.jpg 2x",setImages768:"./img/projects/wallet/768.jpg 1x, ./img/projects/wallet/768@2x.jpg 2x",setImages1280:"./img/projects/wallet/1280.jpg 1x, ./img/projects/wallet/1280@2x.jpg 2x",technologies:"React, JavaScript, Node JS, Git"},{projectName:"Green harvest online store",projectLink:"https://github.com/Yura33-dev/project-team-18",description:"Green harvest online store picture",previewImg:"./img/projects/green_harvest/1280.jpg",setImages320:"./img/projects/green_harvest/320.jpg 1x, ./img/projects/green_harvest/320@2x.jpg 2x",setImages768:"./img/projects/green_harvest/768.jpg 1x, ./img/projects/green_harvest/768@2x.jpg 2x",setImages1280:"./img/projects/green_harvest/1280.jpg 1x, ./img/projects/green_harvest/1280@2x.jpg 2x",technologies:"React, JavaScript, Node JS, Git"},{projectName:"English excellence webservice",projectLink:"https://github.com/Yura33-dev/project-team-18",description:"English excellence webservice picture",previewImg:"./img/projects/english_excellence/1280.jpg",setImages320:"./img/projects/english_excellence/320.jpg 1x, ./img/projects/english_excellence/320@2x.jpg 2x",setImages768:"./img/projects/english_excellence/768.jpg 1x, ./img/projects/english_excellence/768@2x.jpg 2x",setImages1280:"./img/projects/english_excellence/1280.jpg 1x, ./img/projects/english_excellence/1280@2x.jpg 2x",technologies:"React, JavaScript, Node JS, Git"},{projectName:"Power pulse webservice",projectLink:"https://github.com/Yura33-dev/project-team-18",description:"Power pulse webservice  picture",previewImg:"./img/projects/power_pulse/1280.jpg",setImages320:"./img/projects/power_pulse/320.jpg 1x, ./img/projects/power_pulse/320@2x.jpg 2x",setImages768:"./img/projects/power_pulse/768.jpg 1x, ./img/projects/power_pulse/768@2x.jpg 2x",setImages1280:"./img/projects/power_pulse/1280.jpg 1x, ./img/projects/power_pulse/1280@2x.jpg 2x",technologies:"React, JavaScript, Node JS, Git"},{projectName:"Vyshyvanka vibes Landing Page",projectLink:"https://github.com/Yura33-dev/project-team-18",description:"Vyshyvanka vibes Landing Page picture",previewImg:"./img/projects/vyshyvanka_vibse/1280.jpg",setImages320:"./img/projects/vyshyvanka_vibse/320.jpg 1x, ./img/projects/vyshyvanka_vibse/320@2x.jpg 2x",setImages768:"./img/projects/vyshyvanka_vibse/768.jpg 1x, ./img/projects/vyshyvanka_vibse/768@2x.jpg 2x",setImages1280:"./img/projects/vyshyvanka_vibse/1280.jpg 1x, ./img/projects/vyshyvanka_vibse/1280@2x.jpg 2x",technologies:"React, JavaScript, Node JS, Git"},{projectName:"Energy flow webservice ",projectLink:"https://github.com/Yura33-dev/project-team-18",description:"Energy flow webservice  picture",previewImg:"./img/projects/energy_flow/1280.jpg",setImages320:"./img/projects/energy_flow/320.jpg 1x, ./img/projects/energy_flow/320@2x.jpg 2x",setImages768:"./img/projects/energy_flow/768.jpg 1x, ./img/projects/energy_flow/768@2x.jpg 2x",setImages1280:"./img/projects/energy_flow/1280.jpg 1x, ./img/projects/energy_flow/1280@2x.jpg 2x",technologies:"React, JavaScript, Node JS, Git"},{projectName:"Mimino website",projectLink:"https://github.com/Yura33-dev/project-team-18",description:"Mimino website",previewImg:"./img/projects/mimino/1280.jpg",setImages320:"./img/projects/mimino/320.jpg 1x, ./img/projects/mimino/320@2x.jpg 2x",setImages768:"./img/projects/mimino/768.jpg 1x, ./img/projects/mimino/768@2x.jpg 2x",setImages1280:"./img/projects/mimino/1280.jpg 1x, ./img/projects/mimino/1280@2x.jpg 2x",technologies:"React, JavaScript, Node JS, Git"},{projectName:"Chego jewelry website",projectLink:"https://github.com/Yura33-dev/project-team-18",description:"Chego jewelry website picture",previewImg:"./img/projects/chego_jewelry/1280.jpg",setImages320:"./img/projects/chego_jewelry/320.jpg 1x, ./img/projects/chego_jewelry/320@2x.jpg 2x",setImages768:"./img/projects/chego_jewelry/768.jpg 1x, ./img/projects/chego_jewelry/768@2x.jpg 2x",setImages1280:"./img/projects/chego_jewelry/1280.jpg 1x, ./img/projects/chego_jewelry/1280@2x.jpg 2x",technologies:"React, JavaScript, Node JS, Git"},{projectName:"Fruitbox online store",projectLink:"https://github.com/Yura33-dev/project-team-18",description:"Fruitbox online store picture",previewImg:"./img/projects/fruitbox/1280.jpg",setImages320:"./img/projects/fruitbox/320.jpg 1x, ./img/projects/fruitbox/320@2x.jpg 2x",setImages768:"./img/projects/fruitbox/768.jpg 1x, ./img/projects/fruitbox/768@2x.jpg 2x",setImages1280:"./img/projects/fruitbox/1280.jpg 1x, ./img/projects/fruitbox/1280@2x.jpg 2x",technologies:"React, JavaScript, Node JS, Git"},{projectName:"Starlight studio landing page",projectLink:"https://github.com/Yura33-dev/project-team-18",description:"Starlight studio landing page picture",previewImg:"./img/projects/starlight_studio/1280.jpg",setImages320:"./img/projects/starlight_studio/320.jpg 1x, ./img/projects/starlight_studio/320@2x.jpg 2x",setImages768:"./img/projects/starlight_studio/768.jpg 1x, ./img/projects/starlight_studio/768@2x.jpg 2x",setImages1280:"./img/projects/starlight_studio/1280.jpg 1x, ./img/projects/starlight_studio/1280@2x.jpg 2x",technologies:"React, JavaScript, Node JS, Git"}],p={loadMoreBtnEl:document.querySelector(".btn-load-more"),galleryEl:document.querySelector(".my-projects-list")},o={currentPart:1,per_part:3,imgWidth:"1008",visitSvgHref:"./img/icons/sprite.svg#icon-arrow-visit"},u=e=>`<li class="my-projects-item">
  <div class="project-card">

  <picture>
  <source srcset="${e.setImages320}" media="(max-width: 767px)"/>
  <source srcset="${e.setImages768}" media="(max-width: 1279px)"/>
  <source srcset="${e.setImages1280}" media="(min-width: 1280px)" />
  <img src="${e.previewImg}" alt="${e.description}" />
</picture>
    <div class="project-card-description">
      <p class="project-technologies">React, JavaScript, Node JS, Git</p>
      <div class="project-info">
        <h3 class="project-name">${e.projectName}</h3>

        <a
          class="project-link link"
          href="${e.projectLink}"
          target="_blank"
          >Visit
          <svg class="link-visit-icon">
            <use href="${o.visitSvgHref}"></use>
          </svg>
        </a>
      </div>
    </div>
  </div>
</li>
    `,x=()=>{const e=o.currentPart*o.per_part,r=e-o.per_part;return{totalHits:a.length,projectsPart:a.slice(r,e)}},h=e=>{const r=e.map(i=>u(i)).join("");p.galleryEl.insertAdjacentHTML("beforeend",r)},n=async()=>{try{const e=await x();if(!e.projectsPart.length&&o.currentPart===1){p.loadMoreBtnEl.classList.add("visually-hidden");return}h(e.projectsPart),(e.projectsPart.length<o.per_part||o.currentPart*o.per_part>=e.totalHits)&&(p.loadMoreBtnEl.classList.add("visually-hidden"),p.loadMoreBtnEl.removeEventListener("click",l))}catch{return}},l=async e=>{o.currentPart+=1,n()};n();p.loadMoreBtnEl.addEventListener("click",l);document.querySelectorAll(".smooth-scroll").forEach(e=>{e.addEventListener("click",function(r){r.preventDefault();const i=this.getAttribute("href"),c=document.querySelector(i);c&&c.scrollIntoView({behavior:"smooth"})})});
//# sourceMappingURL=commonHelpers.js.map
