document.addEventListener('DOMContentLoaded', () => {
    AOS.init({once: true, duration: 800});
    new Typed('#typed', {
        strings: ['Programmatore Full-Stack', 'Coordinatore Tecnico', 'Genitore di due figli'],
        typeSpeed: 55,
        backSpeed: 32,
        backDelay: 1600,
        loop: true
    });
    const burger = document.getElementById('burger');
    burger.addEventListener('click', () => burger.classList.toggle('open'));
    const topBtn = document.getElementById('topBtn');
    window.addEventListener('scroll', () => topBtn.classList.toggle('show', scrollY > 350));
    topBtn.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
    const sections = [...document.querySelectorAll('section[id]')];
    const update = () => {
        const p = scrollY + 200;
        sections.forEach(s => {
            document.querySelector(`a[href="#${s.id}"]`)?.classList.toggle('active', p >= s.offsetTop && p < s.offsetTop + s.offsetHeight);
        });
    };
    update();
    window.addEventListener('scroll', update);
    const tags = [...document.querySelectorAll('.tag')];
    let idx = 0;
    setInterval(() => {
        tags.forEach((t, i) => {
            t.style.transform = i === idx ? 'scale(1.1)' : 'scale(1)';
        });
        idx = (idx + 1) % tags.length
    }, 1200);
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActive() {
        const scrollPos = window.scrollY + window.innerHeight / 3;
        sections.forEach(sec => {
            const top = sec.offsetTop;
            const bottom = top + sec.offsetHeight;
            const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
            if (scrollPos >= top && scrollPos < bottom) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    updateActive();
    window.addEventListener('scroll', updateActive);
});

async function stampa() {
    if (window.AOS) {
        AOS.refreshHard();
        document.querySelectorAll('[data-aos]').forEach(el => el.classList.add('aos-init', 'aos-animate'));
    }
    if (window.typed && typeof window.typed.stop === 'function') {
        window.typed.stop();
        document.getElementById('typed').textContent = window.typed.strings.join(' ');
    }
    await new Promise(r => setTimeout(r, 300));
    const element = document.getElementById('content') || document.body;
    const canvas = await html2canvas(element, {scale: 2});
    const cW = canvas.width;
    const cH = canvas.height;
    const pdf = new window.jspdf.jsPDF({
        unit: 'mm', format: 'a4', orientation: 'portrait'
    });
    const pW = pdf.internal.pageSize.getWidth();
    const pH = pdf.internal.pageSize.getHeight();
    const pxPerMm = cW / pW;
    const pagePxH = pH * pxPerMm;
    const pageCount = Math.ceil(cH / pagePxH);
    for (let i = 0; i < pageCount; i++) {
        const srcY = i * pagePxH;
        const sliceH = Math.min(pagePxH, cH - srcY);
        const tmp = document.createElement('canvas');
        tmp.width = cW;
        tmp.height = sliceH;
        tmp.getContext('2d').drawImage(canvas, 0, srcY, cW, sliceH, 0, 0, cW, sliceH);
        const imgData = tmp.toDataURL('image/png');

        if (i > 0) pdf.addPage();

        const imgMmH = sliceH / pxPerMm;
        pdf.addImage(imgData, 'PNG', 0, 0, pW, imgMmH);
    }

    pdf.save('CV.pdf');
}
