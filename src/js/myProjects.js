import { projectsArray } from './projectsArray.js';
import visitSvg from '../img/icons/sprite.svg';

const refs = {
  loadMoreBtnEl: document.querySelector('.btn-load-more'),
  galleryEl: document.querySelector('.my-projects-list'),
};

const params = {
  currentPart: 1,
  per_part: 3,
};

const createProjectCard = project => {
  return `<li class="my-projects-item">
  <div class="project-card">

  <picture>
  <source srcset="${project.setImages.image320} 1x,${project.setImages.image320x2} 2x" media="(max-width: 767px)"/>
  <source srcset="${project.setImages.image768} 1x,${project.setImages.image768x2} 2x" media="(max-width: 1279px)"/>
  <source srcset="${project.setImages.image1280} 1x,${project.setImages.image1280x2} 2x" media="(min-width: 1280px)" />
  <img src="${project.setImages.image1280}" alt="${project.description}" />
</picture>
    <div class="project-card-description">
      <p class="project-technologies">React, JavaScript, Node JS, Git</p>
      <div class="project-info">
        <h3 class="project-name">${project.projectName}</h3>

        <a
          class="project-link link"
          href="${project.projectLink}"
          target="_blank"
          >Visit
          <svg class="link-visit-icon">
            <use href="${visitSvg}#icon-arrow-visit"></use>
          </svg>
        </a>
      </div>
    </div>
  </div>
</li>
    `;
};

const getProjects = () => {
  const totalUploadedProjects = params.currentPart * params.per_part;
  const firstSliceElem = totalUploadedProjects - params.per_part;
  return {
    totalHits: projectsArray.length,
    projectsPart: projectsArray.slice(firstSliceElem, totalUploadedProjects),
  };
};

const updateGallery = projects => {
  const cardsHTML = projects
    .map(project => createProjectCard(project))
    .join('');

  refs.galleryEl.insertAdjacentHTML('beforeend', cardsHTML);
};

const renderItems = async () => {
  try {
    const projects = await getProjects();

    if (!projects.projectsPart.length && params.currentPart === 1) {
      refs.loadMoreBtnEl.classList.add('visually-hidden');
      return;
    }

    updateGallery(projects.projectsPart);

    if (
      projects.projectsPart.length < params.per_part ||
      params.currentPart * params.per_part >= projects.totalHits
    ) {
      refs.loadMoreBtnEl.classList.add('visually-hidden');
      refs.loadMoreBtnEl.removeEventListener('click', onLoadMorePressed);
    }
  } catch (error) {
    return;
  }
};

const onLoadMorePressed = async event => {
  params.currentPart += 1;
  renderItems();
};

renderItems();
refs.loadMoreBtnEl.addEventListener('click', onLoadMorePressed);
