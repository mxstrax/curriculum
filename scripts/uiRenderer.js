export function hydrate(data) {
    renderAbout(data.about);
    renderSkills(data.skills);
    renderExperiences(data.experiences);
    renderEducation(data.education);
    renderCertifications(data.certifications);
    renderContacts(data.contacts);
}

export function renderAbout({description = '', about = ''}) {
    const el = document.querySelector('#about-text');
    if (!el) return;
    el.innerHTML = `
      <p class="lead">${description}</p>
      <p class="lead">${about}</p>
  `;
}

export function renderSkills(skills = []) {
    const container = document.querySelector('#skill-tags');
    if (!container) return;

    container.innerHTML = '';            // wipe placeholder
    skills.forEach(s => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = s.name;
        span.dataset.level = s.level;
        container.appendChild(span);
    });
}

/* ---------- ESPERIENZE ---------- */
export function renderExperiences(list = []) {
    const wrapper = document.querySelector('#exp-wrapper');
    if (!wrapper) return;

    wrapper.replaceChildren(...list.map(exp => {
        const card = document.createElement('div');
        card.className = 'info-card';
        card.innerHTML = `
      <h5>${exp.title}${exp.company ? ' – <span>' + exp.company + '</span>' : ''}</h5>
      <span>${exp.start_year} – ${exp.end_year ?? 'oggi'}</span>
      <p>${exp.description}</p>`;
        return card;
    }));
}

/* ---------- EDUCAZIONE ---------- */
export function renderEducation(list = []) {
    const wrapper = document.querySelector('#edu-wrapper');
    if (!wrapper) return;
    wrapper.replaceChildren(...list.map(edu => {
        const card = document.createElement('div');
        card.className = 'info-card';
        card.innerHTML = `
      <h5>${edu.title} – <span>${edu.institution}</span></h5>
      <span>${edu.start_year} – ${edu.end_year}</span>
      ${edu.description ? `<p>${edu.description}</p>` : ''}`;
        return card;
    }));
}

/* ---------- CERTIFICAZIONI ---------- */
export function renderCertifications(list = []) {
    const wrapper = document.querySelector('#cert-wrapper');
    if (!wrapper) return;
    wrapper.replaceChildren(...list.map(cert => {
        const card = document.createElement('div');
        card.className = 'info-card';
        card.innerHTML = `
      <h5>${cert.name}</h5>
      <span>Validità ${cert.valid_from} – ${cert.valid_to}</span>
      ${cert.file_url ? `<p><a href="${cert.file_url}" target="_blank" class="text-link"><i class="fa-solid fa-arrow-up-right-from-square"></i>Vedi certificato</a></p>` : ''}`;
        return card;
    }));
}

/* ---------- CONTATTI ---------- */
export function renderContacts(list = []) {
    const wrapper = document.querySelector('#contact-wrapper');
    if (!wrapper) return;

    const iconMap = {
        address: { style: 'fa-solid', name: 'fa-location-dot' },
        email: { style: 'fa-solid', name: 'fa-envelope' },
        phone: { style: 'fa-solid', name: 'fa-phone' },
        github: { style: 'fa-brands', name: 'fa-github' },
        website: { style: 'fa-solid', name: 'fa-globe' }
    };

    wrapper.replaceChildren(...list.map(c => {
        const p = document.createElement('p');
        p.className = 'contact-line';
        const { style, name } = iconMap[c.type] || { style: 'fa-solid', name: 'fa-circle' };
        p.innerHTML = `
            <i class="${style} ${name}"></i>
            <strong>${c.label ?? c.type}:</strong>
            ${formatContact(c)}`;
        return p;
    }));
}

function formatContact(c) {
    switch (c.type) {
        case 'email':
            return `<a href="mailto:${c.value}">${c.value}</a>`;
        case 'phone':
            return `<a href="tel:${c.value.replace(/\s+/g, '')}">${c.value}</a>`;
        case 'github':
        case 'website':
            return `<a href="${c.value}" target="_blank" rel="noopener">${c.value}</a>`;
        default:
            return c.value;
    }
}