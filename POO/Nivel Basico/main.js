class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.like = 0;
    }

    publicar() {
        console.log(this.studentName + " (" + this.studentRole+ ") ");
        console.log(this.like + " likes");
        console.log(this.content);
    }
}


function videoPlay(id) {
    const urlSecreta = "https://platziVideoSecreto" + id;
    console.log("Se esta reproduciendo desde la url" + urlSecreta)
}

function videoStop(id) {
    const urlSecreta = "https://platziVideoSecreto" + id;
    console.log("Pausamos la url" + urlSecreta)
}

class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID);
    }
}

class courses {
    constructor({
        name,
        classes =[],
        isFree = false, 
        lang = "spanish",
    }) {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombre) {
        if (nuevoNombre === "Curso Maldito de PRogramación Básica") {
            console.error("Wey.. no puedes cambiarle el nombre!");
        } else {
            this._name = nuevoNombre;
        }
        
    }
}

const cursoProgBasica = new courses ({
    name: "Curso Gratis de Programación Básica",
    isFree: true,
    
});
const cursoDefinitivoHTML = new courses ({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new courses ({
    name: "Curso Práctico de HTML y CSS",
    lang: "english",
});
const cursoDataBussines = new courses ({
    name: "Curso DataBussines",
});
const cursoDataViz = new courses ({
    name: "Curso DataViz",
});
const cursoTableu = new courses ({
    name: "Curso Práctico de Tableu",
});

class learningPaths {
    constructor({
        name,
        courses =[],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const ecuelaWeb = new learningPaths({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});
const ecuelaData = new learningPaths({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        cursoDataBussines,
        cursoDataViz,
        cursoTableu,
    ],
});
const ecuelaVgs  = new learningPaths({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        "Curso Introducción de Vgs",
        "Curso de Unioty 3D",
        "Curso de Unreal Engine",
    ],
});

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    publicarComentario (commentContent) {
        const comment = new Comment ({
            content:commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class FreeStudent extends Student {
    constructor (props) {
        super(props);
    }

    approveCourse(newCourse) {
        if(newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos")
        } 
    }
}

class BasicStudent extends Student {
    constructor (props) {
        super(props);
    }

    approveCourse(newCourse) {
        if(newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos en Español")
        }
    } 
}

class ExpertStudent extends Student {
    constructor (props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
    constructor (props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publicarComentario (commentContent) {
        const comment = new Comment ({
            content:commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
    }
}

const Juan2 = new FreeStudent({
    name: "juan DC",
    username: "juandc",
    email: "fjuandc@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        ecuelaWeb,
        ecuelaVgs,
    ],
});

const Miguel2 = new BasicStudent ({
    name: "Juan Miguel",
    username: "miguelito",
    email: "miguelito@gmail.com",
    instagram: "miguelito_",
    learningPaths: [
        ecuelaWeb,
        ecuelaData,
    ],
});

const freddy = new TeacherStudent ({
    name: "Freddey Vega",
    username: "freddier",
    email: "f@gep.com",
    instagram: "freddier",
    learningPaths: [
        ecuelaWeb,
        ecuelaData,
    ],
});

