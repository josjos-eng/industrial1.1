// Datos de la malla curricular
let mallaData = {
    "carrera": "Plan 122-3",
    "semestres": [
        {
            "numero": 1,
            "cursos": [
                {"codigo": "S1-01", "nombre": "QUIMICA GENERAL", "creditos": 4, "requisitos": [], "descripcion": "Fundamentos de química general", "tipo": "basic"},
                {"codigo": "S1-02", "nombre": "FISICA BASICA I", "creditos": 4, "requisitos": [], "descripcion": "Conceptos básicos de física mecánica", "tipo": "basic"},
                {"codigo": "S1-03", "nombre": "DIBUJO TECNICO I", "creditos": 3, "requisitos": [], "descripcion": "Técnicas básicas de dibujo técnico", "tipo": "basic"},
                {"codigo": "S1-04", "nombre": "CALCULO I", "creditos": 4, "requisitos": [], "descripcion": "Cálculo diferencial e integral", "tipo": "basic"},
                {"codigo": "S1-05", "nombre": "ALGEBRA I", "creditos": 4, "requisitos": [], "descripcion": "Álgebra lineal y matricial", "tipo": "basic"}
            ]
        },
        {
            "numero": 2,
            "cursos": [
                {"codigo": "S2-01", "nombre": "QUIMICA ORGANICA", "creditos": 4, "requisitos": ["S1-01"], "descripcion": "Compuestos y reacciones orgánicas", "tipo": "basic"},
                {"codigo": "S2-02", "nombre": "FISICA BASICA II", "creditos": 4, "requisitos": ["S1-04", "S1-02"], "descripcion": "Física electromagnética y óptica", "tipo": "basic"},
                {"codigo": "S2-03", "nombre": "INFORMATICA I", "creditos": 3, "requisitos": ["S1-03"], "descripcion": "Fundamentos de programación", "tipo": "technical"},
                {"codigo": "S2-04", "nombre": "CALCULO II", "creditos": 4, "requisitos": ["S1-04"], "descripcion": "Cálculo multivariable", "tipo": "basic"},
                {"codigo": "S2-05", "nombre": "ALGEBRA II", "creditos": 4, "requisitos": ["S1-05"], "descripcion": "Estructuras algebraicas avanzadas", "tipo": "basic"},
                {"codigo": "S2-06", "nombre": "ECONOMIA GENERAL", "creditos": 3, "requisitos": ["S1-05"], "descripcion": "Principios económicos básicos", "tipo": "management"}
            ]
        },
        {
            "numero": 3,
            "cursos": [
                {"codigo": "S3-01", "nombre": "FISICOQUIMICA", "creditos": 4, "requisitos": ["S2-01", "S2-02"], "descripcion": "Principios fisicoquímicos", "tipo": "technical"},
                {"codigo": "S3-02", "nombre": "FISICA BASICA III", "creditos": 4, "requisitos": ["S2-02", "S2-04"], "descripcion": "Física moderna y termodinámica", "tipo": "basic"},
                {"codigo": "S3-03", "nombre": "CIENCIAS DE LOS MATERIALES", "creditos": 3, "requisitos": ["S2-03"], "descripcion": "Propiedades y clasificación de materiales", "tipo": "technical"},
                {"codigo": "S3-04", "nombre": "ECUACIONES DIFERENCIALES", "creditos": 4, "requisitos": ["S2-04"], "descripcion": "Ecuaciones diferenciales ordinarias y parciales", "tipo": "basic"},
                {"codigo": "S3-05", "nombre": "PROBABILIDAD Y ESTADISTICA", "creditos": 4, "requisitos": ["S2-05"], "descripcion": "Análisis probabilístico y estadístico", "tipo": "basic"},
                {"codigo": "S3-06", "nombre": "CONTABILIDAD INDUSTRIAL", "creditos": 3, "requisitos": ["S2-06"], "descripcion": "Contabilidad aplicada a entornos industriales", "tipo": "management"}
            ]
        },
        {
            "numero": 4,
            "cursos": [
                {"codigo": "S4-01", "nombre": "TERMODINAMICA TECNICA", "creditos": 4, "requisitos": ["S3-01"], "descripcion": "Leyes de la termodinámica aplicadas", "tipo": "technical"},
                {"codigo": "S4-02", "nombre": "RESISTENCIA DE LOS MATERIALES", "creditos": 4, "requisitos": ["S3-02", "S3-03"], "descripcion": "Propiedades mecánicas de materiales", "tipo": "technical"},
                {"codigo": "S4-03", "nombre": "NORMAS LEGALES", "creditos": 3, "requisitos": ["S3-04"], "descripcion": "Marco legal industrial", "tipo": "management"},
                {"codigo": "S4-04", "nombre": "ESTADISTICA MATEMATICA", "creditos": 4, "requisitos": ["S3-05"], "descripcion": "Estadística avanzada para ingeniería", "tipo": "technical"},
                {"codigo": "S4-05", "nombre": "MERCADOTECNIA INDUSTRIAL", "creditos": 3, "requisitos": ["S3-06"], "descripcion": "Estrategias de marketing industrial", "tipo": "management"}
            ]
        },
        {
            "numero": 5,
            "cursos": [
                {"codigo": "S5-01", "nombre": "MAQUINAS TERMICAS", "creditos": 4, "requisitos": ["S4-01"], "descripcion": "Diseño y operación de máquinas térmicas", "tipo": "technical"},
                {"codigo": "S5-02", "nombre": "TECNOLOGIA MECANICA", "creditos": 4, "requisitos": ["S4-02"], "descripcion": "Tecnologías de fabricación mecánica", "tipo": "technical"},
                {"codigo": "S5-03", "nombre": "ELECTROTECNIA INDUSTRIAL I", "creditos": 4, "requisitos": ["S3-03"], "descripcion": "Fundamentos de electrotecnia industrial", "tipo": "technical"},
                {"codigo": "S5-04", "nombre": "METODOLOGIA DE LA INVESTIGACION", "creditos": 3, "requisitos": ["S4-03", "S4-04"], "descripcion": "Métodos de investigación científica", "tipo": "management"},
                {"codigo": "S5-05", "nombre": "INVESTIGACION OPERATIVA I", "creditos": 4, "requisitos": ["S4-04"], "descripcion": "Optimización de procesos industriales", "tipo": "technical"},
                {"codigo": "S5-06", "nombre": "ADMINISTRACION INDUSTRIAL", "creditos": 3, "requisitos": ["S4-05"], "descripcion": "Gestión administrativa en industria", "tipo": "management"}
            ]
        },
        {
            "numero": 6,
            "cursos": [
                {"codigo": "S6-01", "nombre": "OPERACIONES UNITARIAS I", "creditos": 4, "requisitos": ["S5-01"], "descripcion": "Procesos unitarios en ingeniería", "tipo": "technical"},
                {"codigo": "S6-02", "nombre": "ELEMENTOS DE MAQUINAS", "creditos": 4, "requisitos": ["S5-02", "S5-03"], "descripcion": "Diseño de componentes mecánicos", "tipo": "technical"},
                {"codigo": "S6-03", "nombre": "ELECTIVA I", "creditos": 3, "requisitos": ["S5-03", "S4-03"], "descripcion": "Curso electivo especializado", "tipo": "technical"},
                {"codigo": "S6-04", "nombre": "GESTION DE TALENTO", "creditos": 3, "requisitos": ["S5-04"], "descripcion": "Gestión de recursos humanos", "tipo": "management"},
                {"codigo": "S6-05", "nombre": "INVESTIGACION OPERATIVA II", "creditos": 4, "requisitos": ["S5-05"], "descripcion": "Modelos avanzados de investigación operativa", "tipo": "technical"},
                {"codigo": "S6-06", "nombre": "INGENIERIA DE METODOS", "creditos": 4, "requisitos": ["S5-06", "S5-04"], "descripcion": "Optimización de métodos de trabajo", "tipo": "technical"}
            ]
        },
        {
            "numero": 7,
            "cursos": [
                {"codigo": "S7-01", "nombre": "OPERACIONES UNITARIAS II", "creditos": 4, "requisitos": ["S6-01"], "descripcion": "Procesos unitarios avanzados", "tipo": "technical"},
                {"codigo": "S7-02", "nombre": "CONTROL AUTOMATICO", "creditos": 4, "requisitos": ["S6-02"], "descripcion": "Sistemas de control automático", "tipo": "technical"},
                {"codigo": "S7-03", "nombre": "HIGIENE Y SEGURIDAD INDUSTRIAL", "creditos": 3, "requisitos": ["S6-03", "S6-02"], "descripcion": "Normas de seguridad e higiene industrial", "tipo": "management"},
                {"codigo": "S7-04", "nombre": "FINANZAS PARA LA INGENIERIA", "creditos": 4, "requisitos": ["S6-04"], "descripcion": "Gestión financiera para ingenieros", "tipo": "management"},
                {"codigo": "S7-05", "nombre": "PLANIFICACION CONTROL DE PRODUCCION I", "creditos": 4, "requisitos": ["S6-05"], "descripcion": "Planificación de sistemas productivos", "tipo": "management"},
                {"codigo": "S7-06", "nombre": "COSTOS INDUSTRIALES I", "creditos": 3, "requisitos": ["S6-06"], "descripcion": "Análisis de costos industriales", "tipo": "management"}
            ]
        },
        {
            "numero": 8,
            "cursos": [
                {"codigo": "S8-01", "nombre": "PROCESOS INDUSTRIALES", "creditos": 4, "requisitos": ["S7-01"], "descripcion": "Gestión de procesos industriales", "tipo": "technical"},
                {"codigo": "S8-02", "nombre": "MEDIO AMBIENTE EN LA INDUSTRIA", "creditos": 3, "requisitos": ["S7-02"], "descripcion": "Gestión ambiental industrial", "tipo": "management"},
                {"codigo": "S8-03", "nombre": "MANTENIMIENTO E INSTALACIONES INDUSTRIALES", "creditos": 4, "requisitos": ["S7-03"], "descripcion": "Mantenimiento de instalaciones industriales", "tipo": "technical"},
                {"codigo": "S8-04", "nombre": "PREPARACION Y EVALUACION DE PROYECTO", "creditos": 4, "requisitos": ["S7-04"], "descripcion": "Formulación y evaluación de proyectos", "tipo": "management"},
                {"codigo": "S8-05", "nombre": "PLANIFICACION CONTROL DE PRODUCCION II", "creditos": 4, "requisitos": ["S7-05"], "descripcion": "Control avanzado de producción", "tipo": "management"},
                {"codigo": "S8-06", "nombre": "COSTOS INDUSTRIALES II", "creditos": 3, "requisitos": ["S7-06"], "descripcion": "Costos avanzados y toma de decisiones", "tipo": "management"}
            ]
        },
        {
            "numero": 9,
            "cursos": [
                {"codigo": "S9-01", "nombre": "CONTROL DE CALIDAD", "creditos": 4, "requisitos": ["S8-01"], "descripcion": "Sistemas de control de calidad", "tipo": "management"},
                {"codigo": "S9-02", "nombre": "ELECTIVA II", "creditos": 3, "requisitos": ["S8-02", "S7-03"], "descripcion": "Curso electivo avanzado", "tipo": "technical"},
                {"codigo": "S9-03", "nombre": "TECNOLOGIAS AVANZADAS", "creditos": 4, "requisitos": ["S8-03"], "descripcion": "Tecnologías emergentes en industria", "tipo": "technical"},
                {"codigo": "S9-04", "nombre": "EMPRENDEDURISMO E INNOVACION", "creditos": 3, "requisitos": ["S8-04"], "descripcion": "Gestión de emprendimientos innovadores", "tipo": "management"},
                {"codigo": "S9-05", "nombre": "LOGISTICA", "creditos": 4, "requisitos": ["S8-05"], "descripcion": "Gestión logística integral", "tipo": "management"},
                {"codigo": "S9-06", "nombre": "PLANEACION ESTRATEGICA", "creditos": 4, "requisitos": ["S8-06", "S8-05"], "descripcion": "Planificación estratégica organizacional", "tipo": "management"}
            ]
        },
        {
            "numero": 10,
            "cursos": [
                {"codigo": "S10-01", "nombre": "PRACTICAS INDUSTRIALES", "creditos": 6, "requisitos": ["S9-01", "S9-02", "S9-03", "S9-04", "S9-05", "S9-06"], "descripcion": "Experiencia profesional en entorno real", "tipo": "practice"}
            ]
        }
    ]
};

// Elementos DOM
const semesterView = document.getElementById('semester-view');
const listView = document.getElementById('list-view');
const toggleViewBtn = document.getElementById('toggle-view');
const searchInput = document.getElementById('search');
const courseModal = document.getElementById('course-modal');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderSemesterView();
    activateView(semesterView);
    
    // Event Listeners
    toggleViewBtn.addEventListener('click', toggleView);
    searchInput.addEventListener('input', filterCourses);
    document.querySelector('.close').addEventListener('click', closeModal);
    window.addEventListener('click', closeModalOutside);
});

// Renderizar vista semestral
function renderSemesterView() {
    semesterView.innerHTML = '';
    
    mallaData.semestres.forEach(semestre => {
        const semesterHTML = `
            <div class="semester-container">
                <div class="semester-header">
                    <h2>Semestre ${semestre.numero}</h2>
                    <span>${semestre.cursos.length} curso${semestre.cursos.length > 1 ? 's' : ''}</span>
                </div>
                <div class="courses-grid">
                    ${semestre.cursos.map(curso => `
                        <div class="course-card ${curso.tipo}" data-code="${curso.codigo}" data-semester="${semestre.numero}">
                            <h3>${curso.nombre}</h3>
                            <div class="course-code">${curso.codigo}</div>
                            ${curso.requisitos.length > 0 ? 
                                `<div class="course-requirements">Requisitos: ${curso.requisitos.join(', ')}</div>` : ''}
                            <div class="course-credits">${curso.creditos} créditos</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        semesterView.innerHTML += semesterHTML;
    });
    
    // Agregar event listeners a las tarjetas
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', () => {
            const courseCode = card.dataset.code;
            showCourseDetails(courseCode);
        });
    });
}

// Mostrar detalles del curso
function showCourseDetails(courseCode) {
    let course = null;
    let semester = 0;
    
    // Buscar el curso en todos los semestres
    for (const semestre of mallaData.semestres) {
        const foundCourse = semestre.cursos.find(c => c.codigo === courseCode);
        if (foundCourse) {
            course = foundCourse;
            semester = semestre.numero;
            break;
        }
    }
    
    if (course) {
        document.getElementById('modal-title').textContent = course.nombre;
        document.getElementById('modal-code').textContent = course.codigo;
        document.getElementById('modal-semester').textContent = semester;
        document.getElementById('modal-credits').textContent = course.creditos;
        
        // Manejar requisitos
        const requisitos = course.requisitos;
        let requisitosHTML = 'Ninguno';
        if (requisitos.length > 0) {
            requisitosHTML = requisitos.map(req => {
                return `<span class="req-badge">${req}</span>`;
            }).join(' ');
        }
        document.getElementById('modal-prerequisites').innerHTML = requisitosHTML;
        
        document.getElementById('modal-description').textContent = course.descripcion;
        
        // Mostrar modal con animación
        courseModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

// Cambiar entre vistas
function toggleView() {
    if (semesterView.classList.contains('active')) {
        activateView(listView);
        toggleViewBtn.textContent = 'Vista Semestral';
        renderListView();
    } else {
        activateView(semesterView);
        toggleViewBtn.textContent = 'Vista de Lista';
    }
}

function activateView(view) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    view.classList.add('active');
}

// Renderizar vista de lista
function renderListView() {
    listView.innerHTML = '<div class="list-container"></div>';
    const listContainer = listView.querySelector('.list-container');
    
    mallaData.semestres.forEach(semestre => {
        const semesterHTML = `
            <div class="list-semester">
                <h3>Semestre ${semestre.numero}</h3>
                <ul>
                    ${semestre.cursos.map(curso => `
                        <li class="list-course ${curso.tipo}" data-code="${curso.codigo}" data-semester="${semestre.numero}">
                            <div class="course-header">
                                <strong>${curso.codigo}</strong>
                                <span class="credits-badge">${curso.creditos} créditos</span>
                            </div>
                            <div class="course-name">${curso.nombre}</div>
                            ${curso.requisitos.length > 0 ? 
                                `<div class="course-reqs">Requisitos: ${curso.requisitos.join(', ')}</div>` : ''}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        listContainer.innerHTML += semesterHTML;
    });
    
    // Agregar event listeners a los cursos en la vista de lista
    document.querySelectorAll('.list-course').forEach(item => {
        item.addEventListener('click', () => {
            const courseCode = item.dataset.code;
            showCourseDetails(courseCode);
        });
    });
}

// Filtrar cursos
function filterCourses() {
    const searchTerm = searchInput.value.toLowerCase();
    
    document.querySelectorAll('.course-card').forEach(card => {
        const courseName = card.querySelector('h3').textContent.toLowerCase();
        const courseCode = card.querySelector('.course-code').textContent.toLowerCase();
        
        if (courseName.includes(searchTerm) || courseCode.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Cerrar modal
function closeModal() {
    courseModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera del contenido
function closeModalOutside(e) {
    if (e.target === courseModal) {
        closeModal();
    }
}
